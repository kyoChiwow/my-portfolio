import { FaEnvelope } from "react-icons/fa";
import circlePic from "../assets/images/profilePic.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Particle from "../Particle";

const Banner = () => {
  return (
    <div className="relative overflow-hidden z-1">
      <div className="max-w-[90%] mx-auto flex flex-col xl:flex-row items-center gap-[40px] pb-16 pt-[128px]">
        {/* Particle here */}
        <div className="absolute inset-0 z-[-1] h-full w-full pointer-events-none bg-[#292F36]">
          <Particle />
        </div>
        {/* Particle here */}
        {/* Banner middle side info div */}
        <div>
          <h1 className="md:text-[64px] text-[32px] font-normal text-white">
            Hello
          </h1>
          <h1 className="md:text-[64px] text-[32px] font-normal text-white">
            I am Shafiqul Islam,
          </h1>
          <h1 className="md:text-[64px] text-[32px] font-normal text-white">
            A Web Developer.
          </h1>
          <p className="text-base font-normal text-white my-8 xl:max-w-[70%]">
            I help business grow by crafting amazing web experiences. if you are
            looking for a developer that likes to get stuff done,
          </p>
          <div
            className={
              "btn btn-ghost ml-[-20px] hover:scale-110 transition-all duration-300"
            }
          >
            <ScrollLink to="contact-me" smooth={true} duration={500}>
              <div className="flex items-center gap-4">
                <h1 className="text-[32px] font-medium text-[#12F7D6]">
                  Lets Talk
                </h1>
                <div className="p-2 bg-[#43454D] rounded-full text-[#12F7D6]">
                  <FaEnvelope></FaEnvelope>
                </div>
              </div>
            </ScrollLink>
          </div>

          {/* Download CV Button */}
          <Link
            target="_blank"
            to={
              "https://drive.google.com/file/d/14j2y7QtpcmBHKGgNd2faCo4owZnJc8Ys/view?usp=sharing"
            }
          >
            <div className="mt-8">
              <button className="btn bg-white rounded-full text-xl font-normal hover:scale-110 transition-all duration-300">
                Check Resume
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
    </div>
  );
};

export default Banner;
