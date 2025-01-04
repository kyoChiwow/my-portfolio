import { Link, NavLink } from "react-router-dom";
import navLogo from "../assets/images/logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#12F7D6] font-normal text-2xl"
            : "text-white font-normal text-2xl"
        }
      >
        Home
      </NavLink>
      <Link
        className="text-white font-normal text-lg flex items-center gap-2"
        target="_blank"
        to={"https://github.com/kyoChiwow"}
      >
        <FaGithub></FaGithub>
        GitHub
      </Link>
      <Link
        className="text-white font-normal text-lg flex items-center gap-2"
        target="_blank"
        to={"https://www.linkedin.com/in/md-shafiqul-islam-87250b158/"}
      >
        <FaLinkedin></FaLinkedin>
        LinkedIn
      </Link>
      <Link
        className="text-white font-normal text-lg flex items-center gap-2"
        target="_blank"
        to={"https://www.facebook.com/aronnorahman.shawpno/"}
      >
        <FaFacebook></FaFacebook>
        Facebook
      </Link>
    </>
  );
  return (
    <div className="bg-[#292F36] py-8">
      {/* Navbar Wrapping div */}
      <div className="flex justify-between items-center xl:max-w-[80%] mx-auto">
        {/* Navbar left side logo div */}
        <div className="flex items-center gap-2">
          <img src={navLogo} alt="" />
          <h1 className="text-3xl font-medium text-white">Shafiqul Islam</h1>
        </div>
        {/* Navbar left side logo div */}

        {/* Navbar Menu div here */}
        <div>
          <ul className="flex items-center gap-6">{navLinks}</ul>
        </div>
        {/* Navbar Menu div here */}

        {/* Hire me button div here */}
        <div>
          <button className="btn rounded-full bg-[#12F7D6] border-none text-xl font-normal">
            HIRE ME
          </button>
        </div>
        {/* Hire me button div here */}
      </div>
      {/* Navbar Wrapping div */}
    </div>
  );
};

export default NavBar;
