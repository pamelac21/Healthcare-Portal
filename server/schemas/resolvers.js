const { AuthenticationError } = require("apollo-server-express");
const { Users, Facilities, Procedures, Providers } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const userData = await Users.findOne({ _id: context.user._id }).select(
    //       "-__v -password"
    //     );
    //     //.populate('thing you want populated')

    //     return userData;
    //   }
    //   throw new AuthenticationError("Not logged in");
    // },
    providers: async (parent, args, context, {FacilityId}) => {
      const params = FacilityId ? {FacilityId} : {};
      const providerData = await Providers.find(params)

      return providerData
    },
    facilities: async (parent, args, context) => {
      const facilityData = await Facilities.find()

      return facilityData
    },
    procedures: async (parent, { FacilityId }) => {
      const params = FacilityId ? { FacilityId } : {};
 


      return Procedures.find(params)
    },
    users: async (parent, args, context) => {
      const userData = await Users.find()

      return userData
    },

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
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },

};

module.exports = resolvers;
