import { SQL } from 'bun'
import { Elysia } from 'elysia'
import Redis from 'ioredis'

const redis = new Redis()
const psql = new SQL({
  host: 'localhost',
  port: 5432,
  password: 'freelance2024',
  username: 'jreybaylen',
  database: 'postgres'
})

async function redisTest() {
  const redisData = await redis.get('data')

  if (redisData) {
    const dataFromRedis = JSON.parse(redisData)
    console.log('Data from redis...', dataFromRedis)
    return dataFromRedis
  }

  const dbTestRedis = await psql`SELECT * FROM test_redis`
  console.log('Data from database...', dbTestRedis)

  await redis.setex('data', 60, JSON.stringify(dbTestRedis))

  return dbTestRedis
}

const app = new Elysia().get('/', redisTest).listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
