import request from 'supertest';
import app from '../../src/app';
jest.mock('../../src/models/user');
import { User } from '../../src/models/user';
jest.mock('../../src/models/kingdom');
import { Kingdom } from '../../src/models/kingdom';
jest.mock('bcryptjs');
import bcrypt from 'bcryptjs';

process.env.PRIVATE_KEY_VALUE = 'secret';
process.env.TOKEN_EXPIRE = 86000;
const mockUser = { id: 1, username: 'John', password: 'hashedPassword' };
const mockKingdomId = 1;

const mockFindUserByUsername = User.findUserByUsername.mockImplementation(
  () => mockUser
);
const mockGetKingdomIdByUserId = Kingdom.getKingdomIdByUserId.mockImplementation(
  () => mockKingdomId
);

describe('login end to end tests', () => {
  bcrypt.compareSync.mockImplementation(() => true);

  it('should return 200 when proper credentials are given', done => {
    request(app)
      .post('/login')
      .send({
        username: 'John',
        password: 'password',
      })
      .expect('Content-Type', /json/)
      .end((err, data) => {
        expect(data.status).toBe(200);
        return done();
      });
  });

  it('should return status ok with token when proper credentials are given', done => {
    request(app)
      .post('/login')
      .send({
        username: 'John',
        password: 'password',
      })
      .expect('Content-Type', /json/)
      .end((err, data) => {
        expect(data.body.status).toBe('ok');
        expect(data.body.token).not.toBeUndefined;
        expect(data.body.token.length).toBeGreaterThan(0);
        return done();
      });
  });

  test('should respond with 400 when both fields are missing ', done => {
    request(app)
      .post('/login')
      .expect('Content-Type', /json/)
      .send({
        username: '',
        password: '',
      })
      .expect('Content-Type', /json/)
      .end((err, data) => {
        if (err)
          return done({
            status: 'error',
            message: 'password and username required',
          });
        expect(data.body);
        return done();
      });
  });

  test('should respond with 400 when password is missing', done => {
    request(app)
      .post('/login')
      .expect('Content-Type', /json/)
      .send({
        username: 'user1',
        password: '',
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, data) => {
        if (err)
          return done({
            status: 'error',
            message: 'password  required',
          });
        expect(data.body);
        return done();
      });
  });

  test('should respond with 400 when username is missing ', done => {
    request(app)
      .post('/login')
      .expect('Content-Type', /json/)
      .send({
        username: '',
        password: 'password',
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, data) => {
        if (err)
          return done({
            status: 'error',
            message: 'username required',
          });
        expect(data.body);
        return done();
      });
  });
});
