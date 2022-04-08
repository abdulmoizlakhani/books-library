import { gql } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

export { getAuthorsQuery, getBooksQuery };
