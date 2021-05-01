jest.mock('../../src/services/loginService');
import { loginService } from '../../src/services/loginService';
import { loginController } from '../../src/controllers/loginController';

const mockResponse = {
  status: 'ok',
  token: 'token',
};
const mockAuthorizeUser = loginService.authorizeUser.mockImplementation(() =>
  Promise.resolve(mockResponse)
);

describe('loginController unit tests', () => {
  it('should return 200 when proper inputs are given', async () => {
    const req = { body: {} };
    const mockJson = jest.fn();
    const mockStatus = jest.fn(() => ({ json: mockJson }));
    const res = { status: mockStatus };
    const next = jest.fn();

    await loginController.login(req, res, next);

    expect(mockStatus).toHaveBeenCalledWith(200);
  });

  it('should return service response when proper inputs are given', async () => {
    const req = { body: {} };
    const mockJson = jest.fn();
    const mockStatus = jest.fn(() => ({ json: mockJson }));
    const res = { status: mockStatus };
    const next = jest.fn();

    await loginController.login(req, res, next);

    expect(mockJson).toHaveBeenCalledWith(mockResponse);
  });
});
