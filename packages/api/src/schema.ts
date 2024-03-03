import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    user(id: String): User
    users: [User]
  }

  type Mutation {
    createUser(email: String!, fullName: String): User
  }

  type User {
    id: ID!
    email: String!
    fullName: String
  }
`;
