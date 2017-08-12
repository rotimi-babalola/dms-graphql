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
      description: 'Title of document',
    },
    text: {
      type: GraphQLString,
      description: 'Content of the document',
    },
    access: {
      type: AccessType,
      description: 'Access type for document',
    },
    owner: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID of document\'s owner',
    },
    createdAt: {
      type: GraphQLDate,
      description: 'Date document was created',
    },
    updatedAt: {
      type: GraphQLDate,
      description: 'Date document was last updated',
    },
  }),
});
