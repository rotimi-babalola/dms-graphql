import {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

/* eslint no-unused-expressions: 0 */

import UserType from './types/user';
import DocumentType from './types/document';
import AddUserMutation from './mutations/add-user';
import AddDocumentMutation from './mutations/add-document';
import UserResolver from '../resolvers/user-resolver';
import DocumentResolver from '../resolvers/document-resolver';

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
        let userData;
        if (id) {
          userData = UserResolver.getById(id);
        } else {
          userData = UserResolver.get();
        }
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
        let docData;
        if (id) {
          docData = DocumentResolver.getById(id);
        } else {
          docData = DocumentResolver.get();
        }
        return docData;
      },
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    AddUser: AddUserMutation,
    AddDocument: AddDocumentMutation,
  }),
});

const dmsSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

export default dmsSchema;
