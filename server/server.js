const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
require("dotenv").config
const app = express();
const mongoose = require("mongoose")

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");



const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URI


mongoose.connect("mongodb+srv://connerrhodes25:bubs@cluster0.e0fmd.mongodb.net/Project3?retryWrites=true&w=majority") 
.then(() => console.log("DB connected!"));

    mongoose.connection.on('error',function(err){   
console.log("The error is: ");
});

const startServer = async () => {
  const server =  new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start()
  server.applyMiddleware({ app });
  }
  startServer();
  

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
