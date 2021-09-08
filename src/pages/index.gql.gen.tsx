import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type PokemonsQueryVariables = Types.Exact<{
  pokemonsFirst: Types.Scalars['Int'];
}>;


export type PokemonsQuery = { __typename?: 'Query', pokemons?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Pokemon', id: string, name?: Types.Maybe<string>, image?: Types.Maybe<string> }>>> };


export const PokemonsDocument = gql`
    query Pokemons($pokemonsFirst: Int!) {
  pokemons(first: $pokemonsFirst) {
    id
    name
    image
  }
}
    `;

/**
 * __usePokemonsQuery__
 *
 * To run a query within a React component, call `usePokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonsQuery({
 *   variables: {
 *      pokemonsFirst: // value for 'pokemonsFirst'
 *   },
 * });
 */
export function usePokemonsQuery(baseOptions: Apollo.QueryHookOptions<PokemonsQuery, PokemonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PokemonsQuery, PokemonsQueryVariables>(PokemonsDocument, options);
      }
export function usePokemonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PokemonsQuery, PokemonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PokemonsQuery, PokemonsQueryVariables>(PokemonsDocument, options);
        }
export type PokemonsQueryHookResult = ReturnType<typeof usePokemonsQuery>;
export type PokemonsLazyQueryHookResult = ReturnType<typeof usePokemonsLazyQuery>;
export type PokemonsQueryResult = Apollo.QueryResult<PokemonsQuery, PokemonsQueryVariables>;