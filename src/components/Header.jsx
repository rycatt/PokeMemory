import PokemonTitle from "../assets/Pokemon_Title.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src={PokemonTitle} alt="Pokemon" className="object-contain w-45" />
    </div>
  );
}
