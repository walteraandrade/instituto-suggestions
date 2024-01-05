import { gql } from "@apollo/client";

export const suggestionsQuery = gql`
  query SuggestionsQuery {
    playlist {
      author
      created_at
      id
      image
      link
      name
      updated_at
    }
  }
`;
