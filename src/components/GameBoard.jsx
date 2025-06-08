import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import fetchData from "../services/ImageFetcher";
import pokeBallLoading from "../assets/pokeball-loading.gif";

export default function GameBoard() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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

  if (isLoading) {
    return (
      <div className="bg-bg-primary min-h-screen flex justify-center items-center text-white text-5xl font-bold">
        <img src={pokeBallLoading} alt="Loading" />
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong! Please try again. {error}</div>;
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
                <Card key={pokemonData.name} pokemon={pokemonData} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
