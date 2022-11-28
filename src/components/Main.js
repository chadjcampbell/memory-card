import NES from "./nes";

function Main() {
  return (
    <div className="Main">
      {NES.map((game) => (
        <div key={game.id} className="gameContainer">
          <img className="gameImg" src={game.src} alt={game.name} />
          <h3 className="gameH3">{game.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Main;
