// Start your es6 scripts here
const express = require("express")
const  resolvers = require("./resolvers.js")
const schema = require("./schema.js")
const { graphqlHTTP } = require("express-graphql")
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Up and running with graphQL");
})

const root = resolvers
app.use('/graphql/', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))