import React from "react";

const PokemonResult = () => {
  const result = "correct";

  return (
    <div
      className={`alert alert-${
        result === "correct" ? "success" : "danger"
      } text-center `} 
    >
      {result === "correct" ? (
        <span>
          ¡Correcto! <i className="bi bi-bluesky"></i>
        </span>
      ) : (
        <span>
          ¡Incorrecto! <i className="bi bi-slash-circle"></i>
        </span>
      )}

      <button className="btn btn-outline-dark d-block mx-auto mt-3">
        Volver a jugar
      </button> 
    </div>
  );
};

export default PokemonResult;
