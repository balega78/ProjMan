import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, act, screen } from '@testing-library/react';
import Registration from '../Registration';
import apiService from '../../services/apiService';

jest.mock('../../services/apiService');

let parentNode = null;

beforeEach(() => {
  parentNode = document.createElement('div');
  document.body.appendChild(parentNode);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(parentNode);
  parentNode.remove();
  parentNode = null;
});

describe('Registration unit tests', () => {
  it('should render without crashing', () => {
    ReactDOM.render(<Registration />, parentNode);
  });

  it('should show the page title', () => {
    const { getByText } = render(<Registration />);
    getByText(/tribes/i);
    getByText(/of alcool/i);
  });

  it('should show SIGN UP button and header', () => {
    const { getAllByText } = render(<Registration />);

    const signUps = getAllByText(/sign up/i);

    expect(signUps.length).toBe(2);
  });

  it('should show all input fields', () => {
    const { getByPlaceholderText } = render(<Registration />);

    getByPlaceholderText(/username/i);
    getByPlaceholderText(/password/i);
    getByPlaceholderText(/kingdom/i);
  });

  it('should show the link for login', () => {
    const { getByText } = render(<Registration />);

    getByText('Do you already have an account?');
  });

  it('should show error when username is empty', () => {
    const { getByText, getAllByText } = render(<Registration />);
    const signUpButton = getAllByText(/sign up/i)[1];

    fireEvent.click(signUpButton);

    getByText(/Username required./i);
  });

  it('should not show error when username is given', () => {
    const { queryByText, getAllByText, getByPlaceholderText } = render(
      <Registration />
    );
    const signUpButton = getAllByText(/sign up/i)[1];

    fireEvent.change(getByPlaceholderText(/username/i), {
      target: { value: 'john' },
    });
    fireEvent.click(signUpButton);

    expect(queryByText(/Username required./i)).toBeNull();
  });

  it('should show error when password is empty', () => {
    const { getByText, getAllByText } = render(<Registration />);
    const signUpButton = getAllByText(/sign up/i)[1];

    fireEvent.click(signUpButton);

    getByText(/Password required./i);
  });

  it('should not show error when password is given', () => {
    const { queryByText, getAllByText, getByPlaceholderText } = render(
      <Registration />
    );
    const signUpButton = getAllByText(/sign up/i)[1];

    fireEvent.change(getByPlaceholderText(/password/i), {
      target: { value: 'password' },
    });
    fireEvent.click(signUpButton);

    expect(queryByText(/Password required./i)).toBeNull();
  });

  it('should show error message when username is already occupied', () => {
    const expectedApiServiceResponse = {
      status: 'error',
      message: 'Username is already taken.',
    };
    apiService.post.mockImplementation(() =>
      Promise.resolve(expectedApiServiceResponse)
    );
    render(<Registration />);

    act(() => {
      fireEvent.change(screen.getByPlaceholderText(/username/i), {
        target: { value: 'john' },
      });
      fireEvent.change(screen.getByPlaceholderText(/password/i), {
        target: { value: 'password' },
      });
    });
    act(() => {
      fireEvent.click(screen.getAllByText(/sign up/i)[1]);
    });

    screen.getByText(/Username is already taken./i);
  });
});
