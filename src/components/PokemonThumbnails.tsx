import React from "react";
import Image from "next/image";
import { NamedAPIResource } from "pokenode-ts";

type Props = {
  pokemon: PokemonInfo;
};

const PokemonThumbnails: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className={`thumb-container ${pokemon.classType}`}>
      <div className="number">
        <small>#0{pokemon.id}</small>
      </div>
      <img src={pokemon.image} />
      <div className="detail-wrapper">
        <h4>{pokemon.name}</h4>
        <h3>{pokemon.jpType}</h3>
      </div>
    </div>
  );
};

// デフォルトエクスポートする
export default PokemonThumbnails;
