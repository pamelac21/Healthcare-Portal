const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
  }

type Facilities {
    name: String
    address: String
}

type Procedures {
    name: String
    cpt: String
    price: Number
    specialtyId: Number
}

type Providers {
    name: String
    title: String
    facilityId: Number
}

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

`

module.exports = typeDefs;