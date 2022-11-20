import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Navigate } from "react-router-dom";

import NavBar from "../Nav/NavBar";
import PokeCard from "../PokeCard/Index";

import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import "./Home.css";

import axios from "axios";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const handleFire = () => {
    localStorage.setItem("favorite type pokemon", "fire");
  };
  const handleAqua = () => {
    localStorage.setItem("favorite type pokemon", "water");
  };
  const handleEletric = () => {
    localStorage.setItem("favorite type pokemon", "Eletric");
  };
  const handleGrass = () => {
    localStorage.setItem("favorite type pokemon", "grass");
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get(
        "https://portaldomedico.blob.core.windows.net/desafios/reactjs/data/pokemons.json"
      )
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

//   var typePoke = pokemons.filter(pokemon => pokemon.type == localStorage.getItem("favorite type pokemon"));
//   typePoke.forEach(pokemon => { 
//       console.log(pokemon);
//       setPokemons(typePoke);
//   });

 if(localStorage.getItem("name") == null){
    localStorage.clear("favorite type pokemon");
    return <Navigate to='/'></Navigate>
  }
  return (
    <div>
      <NavBar pokemonFilter={pokemonFilter}></NavBar>
      <div className="container">
        <div className="contType">
          <button onClick={handleFire} className="type">
            <img src="./fire.png" height="50" width="50" />
          </button>
          <button onClick={handleAqua} className="type">
            {" "}
            <img src="./water.png" height="50" width="50" />
          </button>
          <button onClick={handleGrass} className="type">
            {" "}
            <img src="./grass.png" height="50" width="50" />
          </button>
          <button onClick={handleEletric} className="type">
            <img src="./eletric.png" height="50" width="50" />
          </button>
        </div>
        <h6 className="nametitle">
          Sua espécie de pokemon favorita é:{" "}
          {localStorage.getItem("favorite type pokemon")}.
        </h6>
        <div className="containerPoke">
          <Container maxWidth="xg">
            <Grid container spacing={3}>
              {pokemons.map((pokemon, key) => (
                <Grid item xs={5} md={3} key={key}>
                  <PokeCard
                    name={pokemon.name}
                    image={pokemon.thumbnailImage}
                    types={pokemon.type}
                    weight={pokemon.weight}
                    abilities={pokemon.abilities}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};
