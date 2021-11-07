import { PostgresDatabaseTest } from "./postgres/postgresDatabase.test";
import { MongoDatabaseTest } from "./mongo/mongoDatabase.test";
require('dotenv').config();

const DEFAULT_DB_TEST_CREATE_DATA_AMOUNT = 3

const DATA_CREATED: number = Number(process.env.DB_TEST_CREATE_DATA_AMOUNT) | DEFAULT_DB_TEST_CREATE_DATA_AMOUNT

const postgresDatabaseTest = new PostgresDatabaseTest()
const mongoDatabaseTest = new MongoDatabaseTest()

async function startTests() {
  const postgresWriteTestStart = Date.now()
  await postgresDatabaseTest.writeTest(DATA_CREATED)
  const postgresWriteTestEnd = Date.now()

  console.log(`Postgres 'write test' done in ${postgresWriteTestEnd - postgresWriteTestStart} \n`)

  const postgresReadTestStart = Date.now()
  await postgresDatabaseTest.readTest()
  const postgresReadTestEnd = Date.now()

  console.log(`Postgres 'read test' done in ${postgresReadTestEnd - postgresReadTestStart} \n`)

  const mongoWriteTestStart = Date.now()
  await mongoDatabaseTest.writeTest(DATA_CREATED)
  const mongoWriteTestEnd = Date.now()

  console.log(`Mongo 'write test' done in ${mongoWriteTestEnd - mongoWriteTestStart} \n`)

  const mongoReadTestStart = Date.now()
  await mongoDatabaseTest.readTest()
  const MongoReadTestEnd = Date.now()

  console.log(`Mongo 'read test' done in ${MongoReadTestEnd - mongoReadTestStart} \n`)
}

startTests()


