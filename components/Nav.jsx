import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbMenu2 } from "react-icons/tb";
import Menu from "./Menu";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Nav({ darkTheme, setDarkTheme, openMenu, setOpenMenu }) {
  const { events } = useRouter();

  useEffect(() => {
    const close = () => {
      setOpenMenu(false);
    };
    events.on("routeChangeStart", close);
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
          <motion.div
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <TbMenu2
              className="text-4xl visible sm:hidden"
              onClick={() => setOpenMenu(!openMenu)}
            />
          </motion.div>
        </div>
        <div className="justify-between items-center space-x-10 text-xl hidden sm:flex ">
          <NavLink link={""} name="home" />
          <NavLink link={"projects"} name="projects" />
          <NavLink link={"about"} name="about" />
          <NavLink link={"contact"} name="contacts" />
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-3xl"
            onClick={() => setDarkTheme(!darkTheme)}
          >
            {darkTheme ? <HiOutlineLightBulb /> : <FiMoon />}
          </motion.button>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="text-4xl visible sm:hidden"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? <HiOutlineLightBulb /> : <FiMoon />}
        </motion.button>
      </div>
    </div>
  );
}

export function NavLink({ link, name }) {
  return (
    <Link href={`/${link}`}>
      <div className="cursor-pointer hover:opacity-50  transition-all capitalize">
        <p>{name}</p>
      </div>
    </Link>
  );
}

export default Nav;
