import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import GraphQLDate from 'graphql-date';
import DocumentType from './document';

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
