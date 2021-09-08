import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useState } from "react";
import { apolloClient } from "../apolloClient";
import {
  PokemonsDocument,
  PokemonsQuery,
  usePokemonsQuery,
} from "./index.gql.gen";

export async function getStaticProps() {
  const { data } = await apolloClient.query<PokemonsQuery>({
    query: PokemonsDocument,
    variables: {
      pokemonsFirst: 10,
    },
  });

  return {
    props: { data },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

type Pokemon = {
  id: string;
  image?: string;
  name?: string;
};

const Page: React.VFC<Props> = () => {
  const { loading, data, fetchMore } = usePokemonsQuery({
    variables: {
      pokemonsFirst: 10,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <Image src={pokemon.image} alt="" width={200} height={200} />
          <div>{pokemon.name}</div>
        </div>
      ))}
      <button
        onClick={() =>
          fetchMore({
            variables: {
              pokemonsFirst: data.pokemons.length + 10,
            },
          })
        }
      >
        Load more
      </button>
    </div>
  );
};

export default Page;
