import NES from "./nes";

function Main() {
  return (
    <div className="Main">
      {NES.map((game) => (
        <div key={game.id} className="gameImg">
          <img src={game.src} alt={game.name} />
          <h3>{game.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Main;
