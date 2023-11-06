import { Link } from "react-scroll";
import logo from "../assets/logos.svg";
import classes from "./NavBar.module.css";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const content = (
    <>
      <div className="flex basis-full flex-col items-center justify-center gap-10 mr-4"> {/* basis-full aca y en el que lo contiene flex-wrap*/}
        {" "}
        {/* Para que sea responsivo con row y col prrimero aclarar que es flex y luego que tipo */}
        <Link
          activeClass="active"
          to="Intro" /*Este id es aplicado a algun elemento, en este caso en el componente Intro el priver <div> tiene id="intro" */
          spy={true}
          smooth={true}
          offset={-90}
          duration={900}
          className={classes.titles}
        >
          Markets
        </Link>
        <Link
          activeClass="active"
          to="Players" /*Este id es aplicado a algun elemento, en este caso en el componente Intro el priver <div> tiene id="intro" */
          spy={true}
          smooth={true}
          offset={-90}
          duration={900}
          className={classes.titles}
        >
          Players
        </Link>
        <Link
          activeClass="active"
          to="Backers" /*Este id es aplicado a algun elemento, en este caso en el componente Intro el priver <div> tiene id="intro" */
          spy={true}
          smooth={true}
          offset={-90}
          duration={900}
          className={classes.titles}
        >
          Backers
        </Link>
      </div>
    </>
  );

  return ( /* flex-wrap para que al abrirse lo ponga debajo y mantenga la x en misma posicion */
    <div className="flex mx-auto flex-wrap items-center justify-between w-full sticky top-0 p-2 z-10 bg-black bg-opacity-10 backdrop-blur-sm">
      <div className="flex transition brightness-75 duration-500 hover:brightness-200">
        <img src={logo} alt="logo" className="w-8 h-8 ml-2 cursor-pointer" />
        <h1 className="text-2xl font-pixel text-white transform cursor-pointer ">
          LOREM
        </h1>
      </div>
      <div className="hidden sm:flex   items-center justify-center gap-10 mr-4">
        {" "}
        {/* Para que sea responsivo con row y col prrimero aclarar que es flex y luego que tipo */}
        <Link
          activeClass="active"
          to="Intro" /*Este id es aplicado a algun elemento, en este caso en el componente Intro el priver <div> tiene id="intro" */
          spy={true}
          smooth={true}
          offset={-90}
          duration={900}
          className={classes.titles}
        >
          Markets
        </Link>
        <Link
          activeClass="active"
          to="Players" /*Este id es aplicado a algun elemento, en este caso en el componente Intro el priver <div> tiene id="intro" */
          spy={true}
          smooth={true}
          offset={-90}
          duration={900}
          className={classes.titles}
        >
          Players
        </Link>
        <Link
          activeClass="active"
          to="Backers" /*Este id es aplicado a algun elemento, en este caso en el componente Intro el priver <div> tiene id="intro" */
          spy={true}
          smooth={true}
          offset={-90}
          duration={900}
          className={classes.titles}
        >
          Backers
        </Link>
      </div>
      <button className="text-white sm:hidden" onClick={toggle}>
        {isOpen ? <>X</> : <Bars3Icon className="w-6 h-6" />}
      </button>
      {isOpen && (content)}
    </div>
  );
};

export default NavBar;
