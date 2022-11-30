import { useState } from "react";
import NES from "./nes";

function Main({ score, bestScore, setScore, setBestScore }) {
  const [NESgames, setNESgames] = useState(NES);

  const randomize = () => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    setNESgames(shuffleArray(NESgames));
  };

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
      randomize();
      return;
    }
  };

  return (
    <div className="Main">
      {NESgames.map((game) => (
        <div
          onClick={() => handleClick(game.id)}
          key={game.id + 1}
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

export default Main;
