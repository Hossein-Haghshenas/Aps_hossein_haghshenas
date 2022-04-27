const BestPokemon = ({ abilities }) => {
  console.log(abilities);
  return (
    <section>
      <p>My favourite pokemon is Squirtle</p>
      <ul>
        {abilities.map((items) => (
          <li key={items.id}>{items.ability}</li>
        ))}
      </ul>
    </section>
  );
};

export default BestPokemon;
