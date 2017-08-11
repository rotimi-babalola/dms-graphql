import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';

import GraphQLDate from 'graphql-date';
import AccessType from './access';

export default new GraphQLObjectType({
  name: 'DocumentType',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'ID of user',
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID of user',
    },
    text: {
      type: GraphQLString,
      description: 'ID of user',
    },
    access: {
      type: AccessType,
      description: 'Access type for document',
    },
    owner: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Owner of document',
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
