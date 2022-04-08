const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

require("dotenv").config();

const schema = require("./schema/schema");

const app = express();

const PORT = process.env.PORT || 4000;
const { MONGO_USER, MONGO_PASSWORD, MONGO_DB_NAME } = process.env;

const DB_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@ecommerce-shop.4xzwy.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(DB_URL)
  .then(() => {
    app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    );

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("ERR: ", err);
  });
