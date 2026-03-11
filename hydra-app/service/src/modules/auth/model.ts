import { t } from 'elysia'

const AuthModel = {
  signInBody: t.Object({
    username: t.String({
      error: '"Username" should be a string'
    }),
    password: t.String({
      error: '"Password" should be a string'
    })
  }),
  signInResponse: t.Object({
    username: t.String(),
    token: t.String()
  }),
  signInInvalid: t.Literal('Invalid username or password')
} as const

export { AuthModel }
