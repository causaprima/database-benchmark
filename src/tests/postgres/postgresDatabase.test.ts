import request, { GraphQLClient, gql } from 'graphql-request'


const endpoint = 'http://localhost:3000/graphql'
const graphQLClient = new GraphQLClient(endpoint)

export class PostgresDatabaseTest {

  statusIds: string[] = []
  roleIds: string[] = []
  userIds: string[] = []
  levelIds: string[] = []
  groupIds: string[] = []

  async writeTest(amount: number) {
    await this.createStatusPostgres(amount)
    await this.createRolesPostgres(amount)
    await this.createUserPostgres(amount)
    await this.createJokePostgres(amount)
    await this.createLevelPostgres(amount)
    await this.createGroupPostgres(amount)
    await this.createUserInGroupPostgres(amount)
    console.log('Done!')
  }

  async readTest() {
    await this.statusesPostgres()
    await this.rolesPostgres()
    await this.usersPostgres()
    await this.jokesPostgres()
    await this.levelsPostgres()
    await this.groupsPostgres()
    await this.userInGroupPostgres()
    console.log('Done!')
  }

  async createStatusPostgres(amount: number) {
    const mutation = gql`
      mutation createStatus($name: String!) {
        createStatusPostgres(input: { name: $name }) {
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
      this.statusIds.push(data.createStatusPostgres.id)
    }

    console.log('Statuses created in Postgres Database...')
  }

  async createRolesPostgres(amount: number) {
    const mutation = gql`
      mutation createRole($name: String!) {
        createRolePostgres(input: { name: $name }) {
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
      this.roleIds.push(data.createRolePostgres.id)
    }

    console.log('Roles created in Postgres Database...')
  }

  async createUserPostgres(amount: number, ) {
    const mutation = gql`
      mutation createUser($login: String!, $password: String!, $statusId: String!, $roleId: String!) {
        createUserPostgres(input: { login: $login, password: $password, statusId: $statusId, roleId: $roleId }) {
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
      this.userIds.push(data.createUserPostgres.id)
    }

    console.log('Users created in Postgres Database...')
  }

  async createJokePostgres(amount: number, ) {
    const mutation = gql`
      mutation createJoke($name: String!, $text: String!, $userId: String!) {
        createJokePostgres(input: { name: $name, text: $text, userId: $userId }) {
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

    console.log('Jokes created in Postgres Database...')
  }

  async createLevelPostgres(amount: number) {
    const mutation = gql`
      mutation createLevel($name: String!) {
        createLevelPostgres(input: { name: $name }) {
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
      this.levelIds.push(data.createLevelPostgres.id)
    }

    console.log('Levels created in Postgres Database...')
  }

  async createGroupPostgres(amount: number) {
    const mutation = gql`
      mutation createGroup($name: String!, $levelId: String!) {
        createGroupPostgres(input: { name: $name, levelId: $levelId }) {
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
      this.groupIds.push(data.createGroupPostgres.id)
    }

    console.log('Groups created in Postgres Database...')
  }

  async createUserInGroupPostgres(amount: number) {
    const mutation = gql`
      mutation createUserInGroup($userId: String!, $groupId: String!) {
        createUserInGroupPostgres(input: { userId: $userId, groupId: $groupId }) {
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

    console.log('UserInGroup created in Postgres Database...')
  }

  async statusesPostgres() {
    const query = gql`
      query statusesPostgres {
        statusesPostgres {
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
    console.log('Statuses read from Postgres Database...')
  }

  async rolesPostgres() {
    const query = gql`
      query rolesPostgres {
        rolesPostgres {
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
    console.log('Roles read from Postgres Database...')
  }

  async usersPostgres() {
    const query = gql`
      query usersPostgres {
        usersPostgres {
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
    console.log('Users read from Postgres Database...')
  }

  async jokesPostgres() {
    const query = gql`
      query jokesPostgres {
        jokesPostgres {
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
    console.log('Jokes read from Postgres Database...')
  }

  async levelsPostgres() {
    const query = gql`
      query levelsPostgres {
        levelsPostgres {
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
    console.log('Levels read from Postgres Database...')
  }

  async groupsPostgres() {
    const query = gql`
      query groupsPostgres {
        groupsPostgres {
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
    console.log('Groups read from Postgres Database...')
  }

  async userInGroupPostgres() {
    const query = gql`
      query userInGroupPostgres {
        userInGroupPostgres {
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
    console.log('UserInGroup read from Postgres Database...')
  }
}