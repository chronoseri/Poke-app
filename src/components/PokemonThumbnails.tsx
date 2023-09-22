import { PokemonInfo } from "@/models/PokemonInfo";
import React from "react";
import Image from "next/image";

type Props = {
  pokemon: PokemonInfo;
  names: string[];
  index: number;
};

const PokemonThumbnails: React.FC<Props> = ({ pokemon, names, index }) => {
  return (
    <div className="thumb-container grass">
      <div className="number">
        <small>#0{pokemon.id}</small>
      </div>
      <img src={pokemon.image} />
      <div className="detail-wrapper">
        <h4>{names[index]}</h4>
        <h3>{pokemon.type}</h3>
      </div>
    </div>
  );
};

// デフォルトエクスポートする
export default PokemonThumbnails;
