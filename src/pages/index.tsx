import PokemonThumbnails from "@/components/PokemonThumbnails";
import Layout from "../components/layout";
import { PokemonInfo } from "@/models/PokemonInfo";
import "./index.css";
import { useEffect, useState } from "react";
import { NamedAPIResource, PokemonClient } from "pokenode-ts";
import { IndexNumberSearch } from "@/components/IndexNumberSearch";

export default function Home() {
  const [allPokemons, setAllPokemons] = useState<PokemonInfo[]>([]);

  const onClickSearch = async (val: number) => {
    setAllPokemons([]);
    await fetchTwentyPokemons(val);
  };

  const fetchTwentyPokemons = async (offset: number = 1) => {
    const api = new PokemonClient();
    for (let i = 0; i < 20; i++) {
      const pokemon = await api.getPokemonById(i + offset);
      const newList: PokemonInfo = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other!["official-artwork"].front_default!,
        type: pokemon.types[0].type.name,
      };

      setAllPokemons((currentList) => [...currentList, newList]);
    }
  };

  useEffect(() => {
    fetchTwentyPokemons();
  }, []);

  const list = allPokemons.map((pokemon) => (
    <PokemonThumbnails key={pokemon.id} pokemon={pokemon} />
  ));

  return (
    <Layout>
      <div className="app-container">
        <IndexNumberSearch onClickSearch={onClickSearch}></IndexNumberSearch>
        <div className="pokemon-container">
          <div className="all-container">{list}</div>
        </div>
      </div>
    </Layout>
  );
}
