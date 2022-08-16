import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <div
      className="absolute top-20 p-2 bg-white dark:bg-gray-800 left-11 w-64 h-auto 
    border border-gray-300 dark:border-black  rounded-lg shadow-xl flex flex-col justify-center items-center"
      id="MENU"
    >
      <NavLink link={""} name="home" color={""} />
      <NavLink link={"projects"} name="projects" color={"text-pink-500"} />
      <NavLink link={"about"} name="about" color={"text-blue-500"} />
      <NavLink link={"contact"} name="contacts" color={"text-gray-500"} />
    </div>
  );
}

export const NavLink = ({ link, name, color }) => {
  return (
    <Link href={`/${link}`}>
      <p
        className={`bg-gray-50 dark:bg-gray-700 hover:scale-95 rounded-lg my-1 px-2 py-3 text-left w-full cursor-pointer hover:opacity-50 transition-all capitalize ${color}`}
      >
        {name}
      </p>
    </Link>
  );
};

export default Menu;
