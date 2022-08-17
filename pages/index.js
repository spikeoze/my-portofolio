import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  return (
    <motion.div
      animate={{ x: [-10, 0], opacity: [0, 1] }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="mt-52 max-w-5xl mx-auto "
    >
      <div className="flex flex-col items-start  space-y-4">
        <p className="text-5xl font-semibold">Hi, I am Mukhtar Amin</p>
        <p className="text-3xl font-light">Full-Stack Web Developer</p>
        <p className="text-lg font-light">
          <motion.span
            animate={{opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className=" border-b-2 border-pink-600"
          >
            <Link href="/contact">Contact me </Link>
          </motion.span>
          or read{" "}
          <motion.span
            animate={{ y: [-10, 0], opacity: [0, 1] }}
            whileHover={{scale:1.1}}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 1,
            }}
            className="border-b-2 border-blue-600"
          >
            <Link href="/about"> About me</Link>
          </motion.span>
        </p>
      </div>
    </motion.div>
  );
}
