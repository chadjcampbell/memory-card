import NES from "./nes";

function Main({ score, bestScore, setScore, setBestScore }) {
  const handleClick = (id) => {
    let currentGame = NES.filter((game) => game.id === id)[0];
    console.log(currentGame);
    if (currentGame.clicked) {
      setScore(0);
      alert("You lose!");
      return;
    } else {
      currentGame.clicked = true;
      setScore((score) => score + 1);
      if (score >= bestScore) {
        setBestScore((score) => score + 1);
      }
      return;
    }
  };

  return (
    <div className="Main">
      {NES.map((game) => (
        <div
          onClick={() => handleClick(game.id)}
          key={game.id}
          className="gameContainer"
        >
          <img className="gameImg" src={game.src} alt={game.name} />
          <h3 className="gameH3">{game.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Main;
