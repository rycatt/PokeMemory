import Card from "./Card";
import Header from "./Header";

export default function GameBoard() {
  return (
    <div className="bg-bg-primary min-h-screen p-6">
      <Header />
      <div>
        <div className="flex flex-col items-center">
          <h1 className="mb-12 text-3xl text-white font-bold">Memory Game</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
