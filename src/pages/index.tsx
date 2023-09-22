import PokemonThumbnails from "@/components/PokemonThumbnails";
import Layout from "../components/layout";
import { PokemonInfo } from "@/models/PokemonInfo";
import "./index.css";
import { useEffect, useState } from "react";
import { NamedAPIResource, PokemonClient } from "pokenode-ts";

export default function Home() {
  const [allPokemons, setAllPokemons] = useState<PokemonInfo[]>([]);

  const getAllPokemons = async () => {
    const api = new PokemonClient();
    const pokemons = await api.listPokemons(0, 20);
    createPokemonObject(pokemons.results);
  };

  const createPokemonObject = (results: NamedAPIResource[]) => {
    const api = new PokemonClient();
    results.forEach((result) => {
      const pokemon = api.getPokemonByName(result.name);
      pokemon.then((data) => {
        const newList: PokemonInfo = {
          id: data.id,
          name: data.name,
          image: data.sprites.other!["official-artwork"].front_default!,
          type: data.types[0].type.name,
        };
        setAllPokemons((currentList) => [...currentList, newList]);
      });
    });
  };

  useEffect(() => {
    getAllPokemons();
    setAllPokemons(allPokemons.toSorted((a, b) => a.id - b.id));
  }, []);

  const list = allPokemons.map((pokemon) => (
    <PokemonThumbnails key={pokemon.id} pokemon={pokemon} />
  ));

  return (
    <Layout>
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">{list}</div>
        </div>
      </div>
    </Layout>
  );
}
