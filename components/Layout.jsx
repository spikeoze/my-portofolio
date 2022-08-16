import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const ref = useRef(0);

  const handleClick = (e) => {
    if (e.target.id !== "MENU") {
      setOpenMenu(false);
    }
    console.log(e.target.id);
  };

  return (
    <div className={darkTheme ? "dark" : "bg-red-300"}>
      <div className="min-h-screen p-5 flex flex-col justify-between dark:bg-gray-900 bg-white transition-all">
        <Nav
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <main
          className="mb-auto grow dark:text-neutral-200"
          ref={ref}
          onClick={handleClick}
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
