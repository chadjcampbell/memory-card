import { useState } from "react";
import NES from "./nes";
import Games from "./Games";
import Modal from "./Modal";
import uuid from "react-uuid";

function Main({ score, bestScore, setScore, setBestScore }) {
  const [NESgames, setNESgames] = useState(NES);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [modalMessage, setModalMessage] = useState(
    "Welcome to Nintendo Memory! Try not to click the same game twice!"
  );

  const randomize = () => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    const shuffledGames = shuffleArray(NESgames);
    const reRenderedGames = shuffledGames.map((game) => {
      game.id = uuid();
      return game;
    });
    setNESgames(reRenderedGames);
  };

  const resetGame = () => {
    setScore(0);
    setNESgames(
      NESgames.map((game) => {
        game.clicked = false;
        return game;
      })
    );
    randomize();
    setModalIsOpen(true);
  };

  const handleClick = (id) => {
    let currentGame = NESgames.filter((game) => game.id === id)[0];
    if (currentGame.clicked) {
      setModalMessage("Game Over! Try again?");
      resetGame();
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
      if (score === NESgames.length - 1) {
        setModalMessage("You win! Play again?");
        resetGame();
      }
      return;
    }
  };

  return (
    <div>
      <Modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        modalMessage={modalMessage}
      />
      <Games NESgames={NESgames} handleClick={handleClick} />
    </div>
  );
}

export default Main;
