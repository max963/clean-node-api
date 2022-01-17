import { MissingParamError } from '../../errors/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocol/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
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
