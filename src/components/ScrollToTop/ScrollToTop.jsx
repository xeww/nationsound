import "./ScrollToTop.css";
import { ArrowUpIcon } from "../../utils/Svgs";
import { useEffect } from "react";

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const element = document.querySelector(".scroll-to-top-button");
    if (element) {
      if (document.documentElement.scrollTop > 50) {
        element.style.visibility = "visible";
        element.style.opacity = "1";
      } else {
        element.style.opacity = "0";
        element.style.visibility = "hidden";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-to-top-button shadow" onClick={handleClick}>
      <ArrowUpIcon />
    </div>
  );
}
