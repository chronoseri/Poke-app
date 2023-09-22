import PokemonThumbnails from "@/components/PokemonThumbnails";
import Layout from "../components/layout";
import { PokemonInfo } from "@/models/PokemonInfo";
import { GetStaticProps } from "next";
import "./index.css";
import { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";

const pokemonInfos: PokemonInfo[] = [
  {
    id: 1,
    name: "フシギダネ",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "くさ",
  },
  {
    id: 2,
    name: "フシギソウ",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    type: "くさ",
  },
  {
    id: 3,
    name: "フシギバナ",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    type: "くさ",
  },
];

export default function Home() {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const url = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    (async () => {
      const api = new PokemonClient();
      const pokemons = await api.listPokemons(0, 20);
      const names = pokemons.results.map((data) => data.name);
      setPokemonNames(names);
    })();
  }, []);

  const list = pokemonInfos.map((pokemon, index) => (
    <PokemonThumbnails
      key={pokemon.id}
      pokemon={pokemon}
      names={pokemonNames}
      index={index}
    />
  ));

  return (
    <Layout>
      <div className="app-container">
        <h1>ポケモン図鑑</h1>
        <div className="pokemon-container">
          <div className="all-container">{list}</div>
        </div>
      </div>
    </Layout>
  );
}
