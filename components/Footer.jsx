import React from "react";
import { FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="max-w-5xl mx-auto flex flex-col grow justify-center items-center space-y-2">
      <div className="flex items-center space-x-5">
        <FiGithub className="text-lg cursor-pointer text-gray-700 dark:text-gray-300" />
        <FiTwitter className="text-lg cursor-pointer text-blue-400" />
        <FiInstagram className="text-lg cursor-pointer text-pink-600" />
      </div>

      <p className="font-light dark:text-neutral-300"> © {year} Mukhtar Amin </p>
    </footer>
  );
}

export default Footer;
