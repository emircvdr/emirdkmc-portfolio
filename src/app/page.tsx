"use client";
import Link from "next/link";
import { AuroraBackground } from "./components/ui/aurora-background";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-base font-extralight dark:text-white text-center">
            Hello, I&apos;m
          </div>
          <div className="font-bold md:text-5xl sm:text-3xl  dark:text-neutral-200 py-4">
            Ahmet Emir Dokumacı
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit dark:text-black px-4 py-2 hover:bg-black hover:text-white hover:transition-all">
            <Link href="https://www.linkedin.com/in/emirdkmc/" target="_blank">Contact Me</Link>
          </button>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
