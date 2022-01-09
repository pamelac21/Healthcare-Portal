const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
  }

type Facility {
    id : Int
    name: String
    address: String
}

type Procedure {
    id: Int
    name: String
    cpt: String
    price: Int
    facilityId: Int
}

type Provider {
    id: Int
    name: String
    facilityId: Int
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    providers: [Provider]
    facilities: [Facility]
    procedures: [Procedure]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
  }

`

module.exports = typeDefs;