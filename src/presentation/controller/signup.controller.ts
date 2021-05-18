import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignupController {
  handle (request: HttpRequest): HttpResponse {
    if (request.body.name === undefined) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    return { statusCode: 201, body: null }
  }
}
