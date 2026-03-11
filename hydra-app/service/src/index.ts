import { Elysia } from 'elysia'

import { AuthModule } from './modules'

try {
  const app = new Elysia({
    prefix: '/api/v1',
    strictPath: true
  })

  app.use(AuthModule)
  app.listen(3000)

  const { hostname, port } = app.server || {}

  console.log(`🦊 Elysia is running at ${hostname}:${port}`)
} catch (error) {
  console.error('ERROR: ', error)
}
