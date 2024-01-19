import { gql } from "@apollo/client";

export const insertSuggestion = gql`
  mutation insertSuggestionMutation($object: playlist_insert_input!) {
    insert_playlist_one(object: $object) {
      id
      author
      name
      image
      link
      suggested_by
      created_at
      updated_at
    }
  }
`;