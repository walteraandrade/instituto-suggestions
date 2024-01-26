import {
  DocumentNode,
  MutationFunctionOptions,
  OperationVariables,
  useMutation as useApolloMutation,
} from "@apollo/client";

interface Options<TData> {
  onCompleted?: (data: TData) => void;
  onError?: (error: Error) => void;
  refetchQueries?: DocumentNode[];
}

export const useMutation = <TData, TVariables = OperationVariables>(
  mutation: DocumentNode,
  options: Options<TData> = {}
) => {
  const [mutate, { loading, data, error }] = useApolloMutation<
    TData,
    TVariables
  >(mutation, {
    onCompleted: options.onCompleted,
    onError: options.onError,
    refetchQueries: options.refetchQueries || [],
  } as MutationFunctionOptions<TData, TVariables>);

  return [mutate, { loading, data, error }] as const;
};
