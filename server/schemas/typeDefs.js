const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Users {
    _id: ID
    email: String
  }

type Facilities {
    name: [String]
    address: String
}

type Procedures {
    name: [String]
    cpt: String
    price: Int
    specialtyId: Int
}

type Providers {
    name: [String]
    title: String
    facilityId: Int
}

  type Auth {
    token: ID!
    user: Users
  }

  type Query {
    me: Users
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
  }

`

module.exports = typeDefs;