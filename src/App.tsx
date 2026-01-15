import React from "react";
import PokemonDisplay from "./components/pokemonDisplay";
import PokemonForm from "./components/pokemonForm";
import PokemonResult from "./components/pokemonResult";

const App = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <PokemonDisplay />
          <PokemonForm />
          <PokemonResult />
        </div>
      </div>
    </div>
  );
};

export default App;
