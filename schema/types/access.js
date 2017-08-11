import {
  GraphQLEnumType,
} from 'graphql';

export default new GraphQLEnumType({
  name: 'AccessType',
  values: {
    PUBLIC: { value: 'public' },
    PRIVATE: { value: 'private' },
  },
});

