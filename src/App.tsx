import { useQuery } from "@apollo/client";
import { DefaultSpinner } from "./components/spinner";
import { Mutation_RootDelete_Playlist_By_PkArgs, Playlist, SuggestionsQueryQuery } from "./data/graphql";
import { SuggestionCard } from "./components/suggestion-card";
import { SuggestionTitle } from "./components/suggestion-title";
import { SuggestionImage } from "./components/suggestion-image";
import { Button } from "./components/button";
import { CreateNewSuggestion } from "./components/create-new-suggestion";
import { Suspense } from "react";
import { getSuggestions } from "./data/queries/get-suggestions";
import { DeleteButton } from "./components/button-delete";
import { useMutation } from "./data/graphql-mutation.hook";
import { deleteSuggestion } from "./data/mutation/delete-suggestion";

function App() {
  const { data, refetch } = useQuery<SuggestionsQueryQuery>(getSuggestions);
  const [deleteSuggestionMutation] = useMutation<Playlist,Mutation_RootDelete_Playlist_By_PkArgs>(
    deleteSuggestion
  );

  async function handleDelete(id: string) {
    deleteSuggestionMutation({
      variables: {
        id: id,
      },
    });
    refetch();
  }

  return (
    <div className="bg-gray-100 px-12 py-8 h-screen text-center">
      <h1 className="text-2xl">Instituto's Suggestions</h1>
      <hr />
      <CreateNewSuggestion />
      <div className="mt-8" />
      <hr />
      <div className="mt-8" />
      <div className="flex">
        <Suspense fallback={<DefaultSpinner />}>
          {data?.playlist.map((suggestion) => (
            <SuggestionCard suggestion={suggestion} key={suggestion.id}>
              <SuggestionTitle />
              <SuggestionImage />
              <div className="mt-8" />
              <Button />
              <div className="mt-8" />
              <DeleteButton onClick={() => handleDelete(suggestion.id)} />
            </SuggestionCard>
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
