import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbMenu2 } from "react-icons/tb";
import Menu from "./Menu";
import { useRouter } from "next/router";

function Nav({ darkTheme, setDarkTheme, openMenu, setOpenMenu }) {
  const { events } = useRouter();

  useEffect(() => {
    const close = () => {
      setOpenMenu(false);
    };
    events.on("routeChangeStart", close);
console.log("test");
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off("routeChangeStart", close);
    };
  }, [events, setOpenMenu]);

  return (
    <div>
      <div className="max-w-5xl mx-auto flex justify-between items-center mt-5 dark:text-neutral-200">
        <div>
          {openMenu && <Menu />}
          <TbMenu2
            className="text-4xl visible sm:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          />
          <h1 className="text-2xl md:text-3xl font-bold sm:inline-flex hidden">
            <Link href="/"> Mukhtar</Link>
          </h1>
        </div>
        <div className="justify-between items-center space-x-10 text-xl hidden sm:flex ">
          <NavLink link={""} name="home" />
          <NavLink link={"projects"} name="projects" />
          <NavLink link={"about"} name="about" />
          <NavLink link={"contact"} name="contacts" />
          <button className="text-3xl" onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? <HiOutlineLightBulb /> : <FiMoon />}
          </button>
        </div>

        <button
          className="text-4xl visible sm:hidden"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? <HiOutlineLightBulb /> : <FiMoon />}
        </button>
      </div>
    </div>
  );
}

export const NavLink = ({ link, name }) => {
  return (
    <Link href={`/${link}`}>
      <p className="cursor-pointer hover:opacity-50 transition-all capitalize">
        {name}
      </p>
    </Link>
  );
};

export default Nav;
