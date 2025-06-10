import PokemonTitle from "../assets/Pokemon_Title.png";

export default function Header({ score, highScore }) {
  return (
    <div className="flex justify-between">
      <div>
        <img
          src={PokemonTitle}
          alt="Pokemon"
          className="object-contain w-45 justify-self-start"
        />
      </div>
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 mb-8">
        <div div className="text-white font-bold text-xl mx-auto">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <p className="text-white/70 text-xl font-medium mb-1">
                Current Score
              </p>
              <p className="font-bold text-4xl text-white">{score}</p>
            </div>
            <div className="w-px h-24 bg-white/20"></div>
            <div className="text-center">
              <p className="text-white/70 text-xl font-medium mb-1">
                High Score
              </p>
              <p className="font-bold text-4xl text-white">{highScore}</p>
            </div>
            <div className="w-px h-24 bg-white/20"></div>
            <div className="flex space-x-2 text-center">
              <div className="text-xl font-bold text-white">{score}</div>
              <div className="text-white/50">/</div>
              <div className="text-xl font-bold text-white/70">9</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-45"></div>
    </div>
  );
}
