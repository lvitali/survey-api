import { SignupController } from './signup.controller'

describe('Signup Controller', () => {
  test('Should return 400 when no name is provided', () => {
    const sut = new SignupController()

    const httpRequest = {
      body: {
        email: 'email',
        password: 'supersecret',
        passwordConfirmation: 'supersecret'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
