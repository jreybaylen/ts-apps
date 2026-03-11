import { Elysia } from 'elysia'

import { AuthModel } from './model'

const AuthModule = new Elysia({
  prefix: '/auth'
})

AuthModule.post(
  '/sign-in',
  async function ({ body }) {
    return {
      username: body.username,
      token: crypto.randomUUID()
    }
  },
  {
    body: AuthModel.signInBody,
    response: {
      200: AuthModel.signInResponse,
      400: AuthModel.signInInvalid
    }
  }
)

export { AuthModule }
