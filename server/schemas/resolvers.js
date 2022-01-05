const { AuthenticationError } = require('apollo-server-express');
const { Users, Facilities, Procedures, Providers } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {

        },

Mutation: {
    addUser: async (parent, args) => {
        const user = await Users.create(args);
        const token = signToken(user);
      
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await Users.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const token = signToken(user);
        return { token, user };
      }
    }


//check all instances of "user/User" = users?












}

module.exports = resolvers;