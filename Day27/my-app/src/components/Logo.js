const Logo = ({ appname }) => {
  return (
    <header>
      <h1>welcome to {appname} Pokedexs</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokedex"
      />
    </header>
  );
};

export default Logo;
