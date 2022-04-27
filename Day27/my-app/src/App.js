import "./App.css";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";

function App() {
  /* abilities */
  const abilities = [
    { ability: "Anticipation", id: 152234 },
    { ability: "Adaptability", id: 98769876 },
    { ability: "Run-Away", id: 456786578 },
  ];

  const date = new Date().toLocaleDateString();

  return (
    <div className="App">
      <Logo appname="Hossein's " />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
