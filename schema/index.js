import {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

/* eslint no-unused-expressions: 0 */

import UserType from './types/user';
import DocumentType from './types/document';
import User from '../models/user.model';
import Document from '../models/document.model';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Root Query for GraphQL api',
  fields: () => ({
    User: {
      type: new GraphQLList(UserType),
      description: 'User',
      args: {
        id: {
          name: 'userId',
          type: GraphQLString,
        },
      },
      resolve: (obj, { id }) => {
        const userData = new Promise((resolve, reject) => {
          if (id) {
            User.findById(id, (error, user) => {
              error ? reject(error) : resolve([user]);
            });
          } else {
            User.find({}, (error, users) => {
              error ? reject(error) : resolve(users);
            });
          }
        });
        return userData;
      },
    },
    Document: {
      type: new GraphQLList(DocumentType),
      description: 'Document',
      args: {
        id: {
          name: 'docId',
          type: GraphQLString,
        },
      },
      resolve: (obj, { id }) => {
        const docData = new Promise((resolve, reject) => {
          if (id) {
            Document.findById(id, (error, document) => {
              error ? reject(error) : resolve([document]);
            });
          } else {
            Document.find({}, (error, documents) => {
              error ? reject(error) : resolve(documents);
            });
          }
        });
        return docData;
      },
    },
  }),
});


const dmsSchema = new GraphQLSchema({
  query: RootQueryType,
});

export default dmsSchema;
