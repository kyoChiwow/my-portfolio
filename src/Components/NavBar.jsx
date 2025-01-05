import { Link, NavLink } from "react-router-dom";
import navLogo from "../assets/images/logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#12F7D6] font-normal text-2xl btn btn-ghost"
            : "text-white font-normal text-2xl btn btn-ghost"
        }
      >
        Home
      </NavLink>
      <Link
        className="text-white font-normal text-lg flex items-center btn btn-ghost"
        target="_blank"
        to={"https://github.com/kyoChiwow"}
      >
        <FaGithub></FaGithub>
        GitHub
      </Link>
      <Link
        className="text-white font-normal text-lg flex items-center btn btn-ghost"
        target="_blank"
        to={"https://www.linkedin.com/in/md-shafiqul-islam-87250b158/"}
      >
        <FaLinkedin></FaLinkedin>
        LinkedIn
      </Link>
      <Link
        className="text-white font-normal text-lg flex items-center btn btn-ghost"
        target="_blank"
        to={"https://www.facebook.com/aronnorahman.shawpno/"}
      >
        <FaFacebook></FaFacebook>
        Facebook
      </Link>
    </>
  );
  return (
    <div>
      {/* Navbar Wrapping div */}
      <div className="navbar bg-[#151515] bg-opacity-50 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#292F36] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <NavLink to={"/"} className="btn btn-ghost text-white">
            <img src={navLogo} alt="" />
            <span className="xl:block hidden font-medium text-[32px] ml-4">Shafiqul Islam</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink className={"btn rounded-full bg-[#12F7D6] border-none"}>Hire Me</NavLink>
        </div>
      </div>
      {/* Navbar Wrapping div */}
    </div>
  );
};

export default NavBar;
