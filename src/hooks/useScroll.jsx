import { useState, useEffect } from "react";

const useScroll = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return active;
};

export default useScroll;
