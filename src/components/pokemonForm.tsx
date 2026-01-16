
import { useState, type FormEvent } from "react";

const PokemonForm = () => {
  const [userText, setUserText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitted Pokemon: ${userText}`); 
  };

  return (
    <div className="my-3">
      <form
        className="input-group mb-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control"
          placeholder="¿Quién es ese Pokémon?"
          aria-label="¿Quién es ese Pokémon?"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <button
          className="btn btn-outline-dark"
          type="submit"
          disabled={!userText.trim()}
        >
          Guess
        </button>
      </form>
    </div>
  );
};
export default PokemonForm;