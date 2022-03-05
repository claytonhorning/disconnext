module.exports = {
  env: {
    MONGO_URI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zqbz7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  },
};
