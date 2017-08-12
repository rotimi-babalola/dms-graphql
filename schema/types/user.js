import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
} from 'graphql';

/* eslint no-underscore-dangle: 0 */

import GraphQLDate from 'graphql-date';
import DocumentType from './document';
import DocumentResolver from '../../resolvers/document-resolver';

export default new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'ID of user',
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'First name of user',
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'First name of user',
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'First name of user',
    },
    isAdmin: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Boolean indicating whether the user is an admin or not',
    },
    documents: {
      type: new GraphQLList(DocumentType),
      description: 'Documents owned by user',
      resolve: obj => DocumentResolver.getDocumentsForUser(obj._id),
    },
    numberOfDocuments: {
      type: GraphQLInt,
      description: 'Total number of documents owned by user',
      resolve: obj => DocumentResolver.countUserDocuments(obj._id),
    },
    createdAt: {
      type: GraphQLDate,
      description: 'Date user was created',
    },
    updatedAt: {
      type: GraphQLDate,
      description: 'Date user was last updated',
    },
  }),
});
