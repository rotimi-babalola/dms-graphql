import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
} from 'graphql';

import UserType from '../types/user';
import UserResolver from '../../resolvers/user-resolver';

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    isAdmin: { type: GraphQLBoolean },
  }),
});

export default {
  type: UserType,
  args: {
    input: { type: new GraphQLNonNull(UserInputType) },
  },
  resolve(obj, { input }) {
    return UserResolver.create(input);
  },
};
