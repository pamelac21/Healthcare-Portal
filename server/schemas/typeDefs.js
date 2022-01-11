const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
  }

type Facility {
    Id : Int
    name: String
    address: String
    

}

type Procedure {
    Id: Int
    Procedure: String
    CPTCode: String
    Price: Int
    FacilityId: Int
    facility: [Facility]
}

type Provider {
    Id: Int
    name: String
    FacilityId: Int
    facility: [Facility]
}

  type Auth {
    token: ID
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
    addUser(username: String!, email: String!, password: String!): Auth
  }

`

module.exports = typeDefs;