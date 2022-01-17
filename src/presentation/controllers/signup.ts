import { HttpRequest, HttpResponse } from '../protocol/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('missing param: name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('missing param: email')
      }
    }

    return {
      statusCode: 200,
      body: {
        name: 'any_name',
        email: 'any_email'
      }
    }
  }
}
