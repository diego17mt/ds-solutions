import { useState, useEffect } from "react";

const Header = () => {
  const toggleNav = () => {
    const header = document.querySelector("#header");
    const blur = document.querySelector("#blur");
    const nav = document.querySelector("#nav");
    nav.classList.toggle("nav-active");
    header.classList.add("header-fixed");
    blur.classList.toggle("blur-active");
  };

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const closeNav = () => {
    const nav = document.querySelector("#nav");
    const menuIcon = document.querySelector(".check-icon");
    nav.classList.remove("nav-active");
    menuIcon.checked = false;
    const blur = document.querySelector("#blur");
    blur.classList.remove("blur-active");
  };

  return (
    <header
      className={`menu-header ${
        isFixed ? "header-fixed" : ""
      } max-w-[90%] relative md:container mx-auto py-4 flex flex-row justify-between items-center z-[999]`}
      id="header"
    >
      <span>
        <img
          src="../public/images/ds-logo.png"
          className="max-w-20 md:w-25 z-[999]"
        ></img>
      </span>
      <nav
        id="nav"
        className="absolute hidden md:flex md:static top-[113px] left-[-100%] w-full md:w-auto bg-white md:bg-transparent py-12 md:py-0 transition-all duration-300 ease-in-out delay-75"
      >
        <ul className="flex flex-col justify-center items-center md:static md:flex md:flex-row gap-12 md:gap-6">
          <li
            onClick={closeNav}
            className="md:hover:border-b transition-all duration-100 active:text-[var(--color-primary)]"
          >
            <a href="#services">Servicios</a>
          </li>
          <li
            onClick={closeNav}
            className="md:hover:border-b transition-all duration-100 active:text-[var(--color-primary)]"
          >
            <a href="#testimonials">Testimonios</a>
          </li>
          <li
            onClick={closeNav}
            className="md:hover:border-b transition-all duration-100 active:text-[var(--color-primary)]"
          >
            <a href="#contact">Contáctanos</a>
          </li>
        </ul>
      </nav>
      <input
        className="check-icon hidden"
        id="check-icon"
        name="check-icon"
        type="checkbox"
      ></input>
      <label onClick={toggleNav} className="icon-menu" htmlFor="check-icon">
        <div className="bar bar--1"></div>
        <div className="bar bar--2"></div>
        <div className="bar bar--3"></div>
      </label>
    </header>
  );
};

export default Header;
