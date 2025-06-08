import samplePokemon from "../assets/sample.png";

export default function Card() {
  return (
    <div className="flex flex-col items-center bg-slate-200 min-w-52 rounded-lg cursor-pointer hover:scale-105 transition-scale duration-200">
      <div className="w-40">
        <img
          src={samplePokemon}
          alt="Pokemon Character"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="m-4 text-center font-bold text-2xl">Charizard</div>
    </div>
  );
}
