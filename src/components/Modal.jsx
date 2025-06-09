import { AnimatePresence, easeInOut, motion } from "motion/react";
import pickachuDance from "../assets/Pikachue-dance.gif";
export default function Modal({ isModalOpen, closeModal }) {
  return (
    <AnimatePresence initial={false}>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/50"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            className="relative p-4 w-full max-w-md max-h-full"
          >
            <div className="relative bg-white rounded-lg shadow-lg p-6 h-80">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
              >
                ✕
              </button>
              <div className="flex flex-col justify-between items-center h-full">
                <h3 className="text-5xl font-bold my-4">Game Over!</h3>
                <img src={pickachuDance} alt="Pickachu" className="w-70" />
                <button className="bg-red-500 text-white px-10 py-1 font-semibold rounded-xl cursor-pointer text-xl">
                  Restart
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
