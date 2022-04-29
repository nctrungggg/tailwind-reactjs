import React, { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import Slogan from "./components/Slogan/Slogan";

App.propTypes = {};

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleSize);
    handleSize();

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    windowSize.width < 500 ? setMobile(true) : setMobile(false);
  }, [windowSize]);

  return (
    <div className="font-poppins overflow-y-auto overflow-x-hidden h-screen px-8 py-10 lg:px-20 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-slate-100 to-violet-500 text-purple-700 dark:text-white ">
      <Navbar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
