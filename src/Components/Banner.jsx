import { FaEnvelope } from "react-icons/fa";
import circlePic from "../assets/images/profilePic.png";
import { Link, NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-[90%] mx-auto flex flex-col xl:flex-row items-center gap-[40px] pb-16 xl:relative">
      {/* Banner middle side info div */}
      <div>
        <h1 className="md:text-[64px] text-[32px] font-normal text-white">
          Hello
        </h1>
        <h1 className="md:text-[64px] text-[32px] font-normal text-white">
          I am Shafiqul Islam,
        </h1>
        <h1 className="md:text-[64px] text-[32px] font-normal text-white">
          A Front-End Web Developer.
        </h1>
        <p className="text-base font-normal text-white my-8">
          I help business grow by crafting amazing web experiences. if you are
          looking for a developer that likes to get stuff done,
        </p>
        <NavLink className={"btn btn-ghost ml-[-20px]"}>
          <div className="flex items-center gap-4">
            <h1 className="text-[32px] font-medium text-[#12F7D6]">
              Lets Talk
            </h1>
            <div className="p-2 bg-[#43454D] rounded-full text-[#12F7D6]">
              <FaEnvelope></FaEnvelope>
            </div>
          </div>
        </NavLink>

        {/* Download CV Button */}
        <Link target="_blank" to={"https://docs.google.com/document/d/15wUdt8GOJMUFUPRtqavjnfHMkTnV8LnJ2A-35bFKl6I/edit?usp=sharing"}>
          <div className="mt-8">
            <button className="btn bg-white rounded-full text-xl font-normal">
              Download CV
            </button>
          </div>
        </Link>
        {/* Download CV Button */}
      </div>
      {/* Banner middle side info div */}

      {/* Banner right side pic div */}
      <div className="xl:absolute xl:right-0 xl:bottom-0">
        <img className="xl:w-[550px]" src={circlePic} alt="" />
      </div>
      {/* Banner right side pic div */}
    </div>
  );
};

export default Banner;
