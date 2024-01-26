import { gql } from "@apollo/client";

export const deleteSuggestion = gql`
  mutation deleteSuggestionMutation($id: uuid!) {
    delete_playlist_by_pk(id: $id) {
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
