import { useState } from "react";
import NES from "./nes";

function Main({ score, bestScore, setScore, setBestScore }) {
  const [NESgames, setNESgames] = useState(NES);

  const handleClick = (id) => {
    let currentGame = NESgames.filter((game) => game.id === id)[0];
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
      setNESgames(
        NESgames.map((game) => {
          if (game.id === currentGame.id) {
            return currentGame;
          }
          return game;
        })
      );
      return;
    }
  };

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
        </div>
      ))}
    </div>
  );
}

export default Main;
