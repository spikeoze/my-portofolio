import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : "bg-red-300"}>
      <div className="min-h-screen p-5 flex flex-col justify-between dark:bg-gray-900 bg-white transition-all">
        <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <main className="mb-auto grow dark:text-neutral-200">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
