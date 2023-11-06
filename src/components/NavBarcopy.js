import { Link } from "react-scroll";
import logo from "../assets/logos.svg";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full sticky top-0 p-2 z-10 bg-black bg-opacity-10 backdrop-blur-sm">
      <div className="flex transition brightness-75 duration-500 hover:brightness-200">
        <img src={logo} alt="logo" className="w-8 h-8 ml-2 cursor-pointer" />
        <h1 className="text-2xl font-pixel text-white transform cursor-pointer ">LOREM</h1>
      </div>
      <div className="flex flex-col md:flex-row   items-center justify-center gap-10 mr-4">  {/* Para que sea responsivo con row y col prrimero aclarar que es flex y luego que tipo */}
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
    </div>
  );
};

export default NavBar;
