import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'ID of user',
    },
  }),
});
