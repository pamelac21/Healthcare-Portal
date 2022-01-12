const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
  }

type Facility {
    FacilityId : Int
    name: String
    address: String
}

type Procedure {
    Id: Int
    Procedure: String
    CPTCode: String
    Price: Int
    FacilityId: Int
    bodypart: String
    facility: [Facility]
    
}

type Provider {
    Id: Int
    name: String
    FacilityId: Int
    facility: [Facility]
}
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    providers(FacilityId: Int): [Provider]
    facilities: [Facility]
    procedures(FacilityId: Int): [Procedure]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
  }

`

module.exports = typeDefs;