import express from "express";
import resolvers from "./resolvers";
import schema from "./schema";
import {
    graphqlHTTP
} from "express-graphql";

const app = express();
const PORT = 4200;
app.get("/", (req, res) => {
    res.send("up and running with graphql crash course");
})
const root = resolvers;
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(PORT, () => console.log("Running on port", PORT));