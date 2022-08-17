import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function Card({ img, title, description, tools, site, source }) {
  return (
    <div className="group w-full flex flex-col justify-evenly  bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-800 border-gray-200 border mx-auto">
      <Image
        height={150}
        width="200%"
        className="h-auto object-cover overflow-hidden group-hover:scale-105 transition-all  duration-100 ease-in-out rounded-sm"
        src={img}
        alt="image"
        loading="lazy"
        layout="responsive"
      />
      <div className="flex flex-col space-y-3 justify-between p-3">
        <div>
          <p className="font-bold capitalize text-lg">{title}</p>
          <p className="font-light text-gray-600 dark:text-neutral-400 text-sm  p-1 ">
            {description}
          </p>
        </div>
        <div>
          <p className="capitalize mt-4 text-gray-800 dark:text-neutral-200 ">
            made with
          </p>
          <div className="flex flex-wrap">
            {tools?.map((tool, i) => {
              return (
                <motion.span
                  whileHover={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  key={i}
                  className={`py-1 px-2 ${tool.color}  capitalize border dark:border-gray-600  text-xs rounded-md m-1 text-white`}
                >
                  {tool.tool}
                </motion.span>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3 grow">
          <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            <p className="bg-pink-500 inline-flex  cursor-pointer rounded-md  items-center py-2 px-3 text-sm font-medium text-center text-white">
              View Site
            </p>
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            href={source}
            target="_blank"
            rel="noreferrer"
          >
            <p className="bg-blue-500  inline-flex  cursor-pointer rounded-md  items-center py-2 px-4 text-sm font-medium text-center text-white">
              source code
            </p>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Card;
