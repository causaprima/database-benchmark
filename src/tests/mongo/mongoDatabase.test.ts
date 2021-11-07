import request, { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'http://localhost:3000/graphql'
const graphQLClient = new GraphQLClient(endpoint)

export class MongoDatabaseTest {

  statusIds: string[] = []
  roleIds: string[] = []
  userIds: string[] = []
  levelIds: string[] = []
  groupIds: string[] = []

  async writeTest(amount: number) {
    await this.createStatusMongo(amount)
    await this.createRolesMongo(amount)
    await this.createUserMongo(amount)
    await this.createJokeMongo(amount)
    await this.createLevelMongo(amount)
    await this.createGroupMongo(amount)
    await this.createUserInGroupMongo(amount)
    console.log('Done!')
  }

  async readTest() {
    await this.statusesMongo()
    await this.rolesMongo()
    await this.usersMongo()
    await this.jokesMongo()
    await this.levelsMongo()
    await this.groupsMongo()
    await this.userInGroupMongo()
    console.log('Done!')
  }

  async createStatusMongo(amount: number) {
    const mutation = gql`
      mutation createStatus($name: String!) {
        createStatusMongo(input: { name: $name }) {
          id
          name
        }
      }
    `

    for (let i = 0; i < amount; i++) {
      const variables = {
        name: `Status${i}`
      }
      const data = await graphQLClient.request(mutation, variables)
      this.statusIds.push(data.createStatusMongo.id)
    }

    console.log('Statuses created in Mongo Database...')
  }

  async createRolesMongo(amount: number) {
    const mutation = gql`
      mutation createRole($name: String!) {
        createRoleMongo(input: { name: $name }) {
          id
          name
        }
      }
    `

    for (let i = 0; i < amount; i++) {
      const variables = {
        name: `Role${i}`
      }
      const data = await graphQLClient.request(mutation, variables)
      this.roleIds.push(data.createRoleMongo.id)
    }

    console.log('Roles created in Mongo Database...')
  }

  async createUserMongo(amount: number, ) {
    const mutation = gql`
      mutation createUser($login: String!, $password: String!, $statusId: String!, $roleId: String!) {
        createUserMongo(input: { login: $login, password: $password, statusId: $statusId, roleId: $roleId }) {
          id
          login
        }
      }
    `

    for (let i = 0; i < amount; i++) {
      const variables = {
        login: `User${i}`,
        password: `123`,
        statusId: this.statusIds[Math.floor(Math.random() * this.statusIds.length)],
        roleId: this.roleIds[Math.floor(Math.random() * this.roleIds.length)]
      }
      const data = await graphQLClient.request(mutation, variables)
      this.userIds.push(data.createUserMongo.id)
    }

    console.log('Users created in Mongo Database...')
  }

  async createJokeMongo(amount: number, ) {
    const mutation = gql`
      mutation createJoke($name: String!, $text: String!, $userId: String!) {
        createJokeMongo(input: { name: $name, text: $text, userId: $userId }) {
          id
          name
        }
      }
    `

    for (let i = 0; i < amount; i++) {
      const variables = {
        name: `Joke${i}`,
        text: 'Funny',
        userId: this.userIds[Math.floor(Math.random() * this.userIds.length)],
      }
      await graphQLClient.request(mutation, variables)
    }

    console.log('Jokes created in Mongo Database...')
  }

  async createLevelMongo(amount: number) {
    const mutation = gql`
      mutation createLevel($name: String!) {
        createLevelMongo(input: { name: $name }) {
          id
          name
        }
      }
    `

    for (let i = 0; i < amount; i++) {
      const variables = {
        name: `Level${i}`
      }
      const data = await graphQLClient.request(mutation, variables)
      this.levelIds.push(data.createLevelMongo.id)
    }

    console.log('Levels created in Mongo Database...')
  }

  async createGroupMongo(amount: number) {
    const mutation = gql`
      mutation createGroup($name: String!, $levelId: String!) {
        createGroupMongo(input: { name: $name, levelId: $levelId }) {
          id
          name
        }
      }
    `

    for (let i = 0; i < amount; i++) {
      const variables = {
        name: `Group${i}`,
        levelId: this.levelIds[i]
      }
      const data = await graphQLClient.request(mutation, variables)
      this.groupIds.push(data.createGroupMongo.id)
    }

    console.log('Groups created in Mongo Database...')
  }

  async createUserInGroupMongo(amount: number) {
    const mutation = gql`
      mutation createUserInGroup($userId: String!, $groupId: String!) {
        createUserInGroupMongo(input: { userId: $userId, groupId: $groupId }) {
          id
        }
      }
    `

    for (let i = 0; i < amount; i++) {
      const variables = {
        userId: this.userIds[i],
        groupId: this.groupIds[i]
      }
      await graphQLClient.request(mutation, variables)
    }

    console.log('UserInGroup created in Mongo Database...')
  }

  async statusesMongo() {
    const query = gql`
      query statusesMongo {
        statusesMongo {
          id
          name
          users {
            id
            login
          }
        }
      }
    `

    await request(endpoint, query)
    console.log('Statuses read from Mongo Database...')
  }

  async rolesMongo() {
    const query = gql`
      query rolesMongo {
        rolesMongo {
          id
          name
          users {
            id
            login
          }
        }
      }
    `

    await request(endpoint, query)
    console.log('Roles read from Mongo Database...')
  }

  async usersMongo() {
    const query = gql`
      query usersMongo {
        usersMongo {
          id
          login
          status {
            id
            name
          }
          role {
            id
            name
          }
          jokes {
            id
            name
          }
          userInGroup {
            group {
              id
              name
            }
          }
        }
      }
    `

    await request(endpoint, query)
    console.log('Users read from Mongo Database...')
  }

  async jokesMongo() {
    const query = gql`
      query jokesMongo {
        jokesMongo {
          id
          name
          user {
            id
            login
          }
        }
      }
    `

    await request(endpoint, query)
    console.log('Jokes read from Mongo Database...')
  }

  async levelsMongo() {
    const query = gql`
      query levelsMongo {
        levelsMongo {
          id
          name
          group {
            id
            name
          }
        }
      }
    `

    await request(endpoint, query)
    console.log('Levels read from Mongo Database...')
  }

  async groupsMongo() {
    const query = gql`
      query groupsMongo {
        groupsMongo {
          id
          name
          level {
            id
            name
          }
          userInGroup {
            user {
              id
              login
            }
          }
        }
      }
    `

    await request(endpoint, query)
    console.log('Groups read from Mongo Database...')
  }

  async userInGroupMongo() {
    const query = gql`
      query userInGroupMongo {
        userInGroupMongo {
          id
          user {
            id
            login
          }
          group {
            id
            name
          }
        }
      }
    `

    await request(endpoint, query)
    console.log('UserInGroup read from Mongo Database...')
  }
}