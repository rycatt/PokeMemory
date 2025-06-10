import { AnimatePresence, motion } from "motion/react";
import pickachuDance from "../assets/Pikachue-dance.gif";
export default function Modal({ isModalOpen, handleRestart, headerMessage }) {
  if (!isModalOpen) return;

  const isWin = headerMessage === "You Won!";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/50"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative p-8 w-full max-w-md max-h-full"
        >
          <div className="relative bg-slate-800 rounded-lg shadow-lg p-6 h-110">
            <div className="flex flex-col justify-between items-center h-full">
              <h3
                className={`text-5xl font-bold my-4 ${
                  isWin ? "text-green-400" : "text-red-400"
                }`}
              >
                {headerMessage}
              </h3>
              <p className="text-xl text-white text-center">
                {!isWin
                  ? "You clicked the same Pokemon twice. Try Again!"
                  : "Nice you got great brains"}
              </p>
              <img src={pickachuDance} alt="Pickachu" className="w-70 mb-6" />
              <button
                onClick={handleRestart}
                className="w-full bg-red-400 text-white py-3 px-6 font-semibold rounded-xl cursor-pointer text-xl hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Play Again
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
