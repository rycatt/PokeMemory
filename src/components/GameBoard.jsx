import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import fetchData from "../services/ImageFetcher";
import pokeBallLoading from "../assets/pokeball-loading.gif";
import Modal from "./Modal";

const WINNING_SCORE = 9;
const LOADING_DELAY = 1000;

export default function GameBoard() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOutcome, setGameOutcome] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchImage = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, LOADING_DELAY));
        const pokemonData = await fetchData();
        setData(pokemonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImage();
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }

    if (score === WINNING_SCORE) {
      setGameOutcome("Win");
      setIsModalOpen(true);
    }
  }, [score, highScore]);

  const shuffle = (array) => {
    const shuffled = [...array];
    let currentIndex = shuffled.length;

    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffled[currentIndex], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[currentIndex],
      ];
    }
    return shuffled;
  };

  const handleCardSelection = (pokemonName) => {
    if (selectedCard[pokemonName]) {
      setIsModalOpen(true);
      setGameOutcome("Loss");
    } else {
      setSelectedCard((prev) => ({ ...prev, [pokemonName]: true }));
      setData((prevData) => shuffle(prevData));
      setScore((prev) => prev + 1);
    }
  };

  const handleRestart = async () => {
    setIsLoading(true);
    setIsModalOpen(true);
    setGameOutcome(null);
    setScore(0);
    setSelectedCard([]);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const newPokemonData = await fetchData();
      setData(newPokemonData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-bg-primary min-h-screen flex justify-center items-center text-white text-5xl font-bold">
        <img src={pokeBallLoading} alt="Loading" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-bg-primary min-h-screen flex justify-center items-center text-white text-5xl font-bold">
        Something went wrong! Please try again. {error.message}
      </div>
    );
  }

  return (
    <div className="bg-bg-primary min-h-screen p-6">
      <Header score={score} highScore={highScore} />
      <div className="mt-4">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {data &&
              Array.isArray(data) &&
              data.map((pokemonData) => (
                <Card
                  key={pokemonData.name}
                  pokemon={pokemonData}
                  onClick={() => handleCardSelection(pokemonData.name)}
                />
              ))}
          </div>
        </div>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        handleRestart={handleRestart}
        headerMessage={gameOutcome == "Win" ? "You Won!" : "Game Over"}
      />
    </div>
  );
}
