import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import dmsSchema from './schema/index';

const app = express();

/* eslint no-console: 0 */
/* eslint no-unused-vars: 0 */

app.use('/graphql', graphqlHTTP({
  schema: dmsSchema,
  graphiql: true,
}));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1/dms', { useMongoClient: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error...'));

db.once('open', () => {
  console.log('dms db opened');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`GraphQL Server listening on PORT ${PORT}`);
});
