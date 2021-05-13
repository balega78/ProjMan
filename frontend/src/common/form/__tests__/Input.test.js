import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import Input from '../Input';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Input unit tests', () => {
  it('should render properly when no props are given', () => {
    ReactDOM.render(<Input />, container);
  });

  it('should render properly when all props are given', () => {
    ReactDOM.render(
      <Input
        name="name"
        type="type"
        className="className"
        onChange={jest.fn()}
        errorMessage="error"
      />,
      container
    );
  });

  it('should set the given placeholder', () => {
    const { getByPlaceholderText } = render(<Input name="my placeholder" />);
    getByPlaceholderText(/my placeholder/i);
  });

  it('should set the given placeholder and not a defult value', () => {
    const { getByPlaceholderText } = render(<Input name="placeholder" />);
    getByPlaceholderText(/placeholder/i);
  });

  it('should shows the given error message', () => {
    const { getByText } = render(<Input errorMessage="my error" />);
    getByText(/my error/i);
  });

  it("souldn't show any error message when no error message is given", () => {
    const { queryByText } = render(<Input />);
    expect(queryByText(/my error/i)).toBeNull();
  });

  it('should call the given onChange method on input change event', () => {
    const mockOnChange = jest.fn();
    const exampleInputText = 'e';

    const { getByPlaceholderText } = render(
      <Input name="username" onChange={mockOnChange} />
    );

    fireEvent.change(getByPlaceholderText(/username/i), {
      target: { value: exampleInputText },
    });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(exampleInputText);
  });
});
