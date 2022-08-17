/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <div className="max-w-5xl mx-auto md:mt-24 mt-32 mb-7 md:grid md:grid-cols-2 flex flex-col justify-center items-center ">
      <motion.div
        animate={{ x: [-10, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="-mt-16"
      >
        <img
          src="/images/mukhtar.jpg"
          alt="mukhtar"
          className="w-72 rounded-lg shadow-md"
        />
        <h1 className="text-2xl md:text-3xl text-center md:text-justify font-semibold mt-2 tracking-wider">
          Mukhtar Amin Said
        </h1>
        <h2 className="text-lg md:text-2xl text-center md:text-justify font-light ">
          Full-Stack Web Developer
        </h2>
      </motion.div>
      <motion.div
        animate={{ x: [10, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <div className="text-center md:text-justify text-xl">
          <p className="py-3 text-gray-700 dark:text-neutral-200 break-words">
            I am passionate web developer who is flexible and disciplined, I am
            a strong team player, I can adapt to new technologies and
            environments.
          </p>

          <p className="py-3 text-gray-700 dark:text-neutral-200 break-words ">
            Currently I am a senior student at{" "}
            <span className="underline">Simad University</span>, and expecting
            to be a graduated in 2023.
          </p>

          <p className="py-3 text-gray-700 dark:text-neutral-200 break-words">
            I made projects with various technologies and tools but I mainly
            work with Reactjs using Nextjs, and Nodejs for my backend.
          </p>
        </div>

        <div className="flex flex-col justify-start mb-16">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4 mt-5">
            Skills
          </h2>
          <div className="flex flex-wrap md:text-lg  ">
            <Tag name={"javascript"} color="bg-yellow-500" />
            <Tag name={"Reactjs"} color="bg-blue-400" />
            <Tag name={"nextjs"} color="bg-gray-800" />
            <Tag name={"nodejs"} color="bg-green-500" />
            <Tag name={"postgres"} color="bg-blue-800" />
            <Tag name={"MongoDB"} color="bg-green-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export const Tag = ({ name, color }) => {
  return (
    <span className={`py-1 px-2 ${color} capitalize rounded-md m-1 text-white`}>
      {name}
    </span>
  );
};

export default About;
