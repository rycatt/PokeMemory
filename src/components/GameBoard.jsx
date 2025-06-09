import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import fetchData from "../services/ImageFetcher";
import pokeBallLoading from "../assets/pokeball-loading.gif";
import Modal from "./Modal";

export default function GameBoard() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchImage = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const pokemonData = await fetchData();
        setData(pokemonData);
        console.log("Pokemon Data:", pokemonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImage();
  }, []);

  const handleCardSelection = (pokemonName) => {
    if (selectedCard[pokemonName]) {
      console.log("Card has already been selected");
      setIsModalOpen(true);
    } else {
      setSelectedCard((prev) => ({ ...prev, [pokemonName]: true }));
      console.log("Card selected for the first Time!");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      <Header />
      <div>
        <div className="flex flex-col items-center">
          <h1 className="mb-12 text-3xl text-white font-bold">Memory Game</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {data &&
              Array.isArray(data) &&
              data.map((pokemonData) => (
                <Card
                  key={pokemonData.name}
                  pokemon={pokemonData}
                  onCardSelect={() => handleCardSelection(pokemonData.name)}
                />
              ))}
          </div>
        </div>
      </div>

      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
