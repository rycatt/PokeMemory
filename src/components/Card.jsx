export default function Card({ pokemon, onCardSelect }) {
  return (
    <div
      className="flex flex-col items-center bg-slate-200 min-w-52 rounded-lg cursor-pointer hover:scale-105 transition-scale duration-200"
      onClick={onCardSelect}
    >
      <div className="w-40">
        {pokemon && pokemon.sprites && (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </div>
      <div className="m-4 text-center font-bold text-2xl">{pokemon.name}</div>
    </div>
  );
}
