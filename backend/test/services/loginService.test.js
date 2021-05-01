import { loginService } from '../../src/services/loginService';

describe('loginService', () => {
  describe('authorizeUser', () => {
    it('should throw error when username is empty', () => {
      expect(() => {
        loginService.authorizeUser({
          username: '',
          password: 'password',
        }).toThrow({
          status: 400,
          message: 'username required'
        })
      })
    }),
      it('should throw error when password is empty', () => {
        expect(() => {
          loginService.authorizeUser({
            username: 'username',
            password: '',
          }).toThrow({
            status: 400,
            message: 'password required'
          })
        })
      }),
      it('should throw error when both fields are empty', () => {
        expect(() => {
          loginService.authorizeUser({
            username: '',
            password: '',
          }).toThrow({
            status: 400,
            message: 'password and password required'
          })
        })
      })
  })
})
