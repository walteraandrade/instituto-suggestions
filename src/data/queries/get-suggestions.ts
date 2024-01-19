import { gql } from "@apollo/client";

export const getSuggestions = gql`
  query getSuggestionsQuery {
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