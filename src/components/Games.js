function Games({ NESgames, handleClick }) {
  return (
    <div className="Main">
      {NESgames.map((game) => (
        <div
          onClick={() => handleClick(game.id)}
          key={game.id}
          className="gameContainer"
        >
          <img className="gameImg" src={game.src} alt={game.name} />
          <h3 className="gameH3">{game.name}</h3>
          <p style={{ display: "none" }}>{game.reRender}</p>
        </div>
      ))}
    </div>
  );
}

export default Games;
