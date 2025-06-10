import { motion } from "motion/react";

export default function Card({ pokemon, onClick }) {
  return (
    <motion.div
      layout
      layoutId={pokemon.name}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className="flex flex-col items-center bg-slate-200/20 min-w-52 rounded-lg cursor-pointer"
        onClick={onClick}
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
        <div className="m-4 text-white text-center font-medium text-2xl">
          {pokemon.name}
        </div>
      </div>
    </motion.div>
  );
}
