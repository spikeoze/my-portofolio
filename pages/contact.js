import Link from "next/link";
import { motion } from "framer-motion";

import React from "react";

function Contact() {
  return (
    <motion.div
      animate={{ x: [-10, 0], opacity: [0, 1] }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="max-w-5xl mx-auto mt-48 md:mt-32 flex flex-col space-y-4"
    >
      <p className="text-2xl lg:text-4xl font-semibold">
        Do you like what you see?, do you have a project in mind?
      </p>
      <p className=" text-xl lg:text-3xl font-semibold">Contact me here</p>
      <div>
        <p className="text-lg font-light">
          <span>TEll:</span> +252616116009
        </p>
        <p className="text-lg font-light">
          <span>Gmail:</span> mukhtaaramiin@gmail.com
        </p>
        <p className="text-lg font-light">
          Twitter:{" "}
          <a
            href="https://twitter.com/mukhtxxr"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-blue-400 cursor-pointer ">@mukhtxxr</span>
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default Contact;
