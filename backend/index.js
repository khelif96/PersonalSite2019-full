const { ApolloServer, gql } = require('apollo-server');


const projects = [
  {
  title: 'Rails',
  technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
  description: `A Full stack progressive web app meant to help students keep up with
  their course load`,
  link: 'https://rails-students.firebaseapp.com/',
  github: 'https://github.com/CSC59939/Rails'
},
{
title: 'Other',
technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
description: `A Full stack progressive web app meant to help students keep up with
their course load`,
link: 'https://rails-students.firebaseapp.com/',
}
]

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Project {
    title: String
    technologies: [String]
    description: String
    link: String
    github: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    projects: [Project]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    projects: () => projects
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
