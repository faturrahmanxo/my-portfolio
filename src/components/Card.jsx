import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export default function Card() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900">
        <img
          src={ft}
          alt=""
          className="w-full cursor-pointer"
          onClick={() => setOpen(true)}
        />

        <div className="p-6">
          <h2 className="text-xl font-bold text-white">Judul Card</h2>

          <button
            onClick={() => setOpen(true)}
            className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Lihat Detail
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-[90%] max-w-2xl rounded-2xl bg-zinc-900 p-6"
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 50,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <h2 className="text-2xl font-bold text-white">Detail Project</h2>

              <img src={ft} alt="" className="mt-4 w-full rounded-xl" />

              <p className="mt-4 text-zinc-300">Ini adalah isi modal.</p>

              <button
                onClick={() => setOpen(false)}
                className="mt-6 rounded-lg bg-red-500 px-4 py-2 text-white"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
