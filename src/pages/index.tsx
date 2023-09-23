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
    pokemons.results.forEach((p) => {
      console.log(p.name);
    });
    await createPokemonObject(pokemons.results);
  };

  const createPokemonObject = async (results: NamedAPIResource[]) => {
    const api = new PokemonClient();
    for (const res of results) {
      const pokemon = await api.getPokemonByName(res.name);
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
    getAllPokemons();
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
