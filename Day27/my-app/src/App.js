import "./App.css";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";

function App() {
  /* abilities */
  const abilities = [
    { ability: "Anticipation", id: 152234 },
    { ability: "Adaptability", id: 98769876 },
    { ability: "Run-Away", id: 456786578 },
  ];

  return (
    <div className="App">
      <Logo appname="Hossein's " />
      <BestPokemon abilities={abilities} />
    </div>
  );
}

export default App;
