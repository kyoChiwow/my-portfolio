import { FaEnvelope, FaSuitcase } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import circlePic from "../assets/images/profilePic.png"
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row gap-[128px] items-center py-[128px]">
      {/* About me left side div */}
      <div>
        {/* About me header */}
        <div className="border-4 border-[#12F7D6] py-4 px-10 rounded-tl-[60px] rounded-br-[60px] xl:max-w-[31%] bg-[#292F36]">
          <h1 className="text-[32px] md:text-[64px] font-normal text-white text-center">
            About Me
          </h1>
        </div>
        {/* About me header */}

        {/* About me paragraph div */}
        <div className="bg-[#292F36] p-10 mt-16 rounded-[40px]">
          <p className="text-[32px] font-medium text-[#12F7D6]">Hello!</p>
          <p className="text-base font-normal text-white">My name is Shafiqul Islam, I specialize in Front-End Web Development that utilizes HTML, CSS, JS, REACT, TAILWIND etc. I am a highly motivated individual and an optimist dedicated to writing clear, concise, robust code that works. I always strive to never stop learning and improving. When I am not coding, I play RPG games, a little while back I was heavily into competitive esports. But since the Esports scene in South Asia is still in an infant stage I decided to pour all of that passion into Coding as it gives me the same thrill of a winning a tournament. Coding has been a very interesting journey for me, I never actually thought I would find fun in coding and thrive on the challenges it presents. So, here I am looking for new projects and new challenges, if you like my journey so far dont be shy to hire or contact me!</p>
        </div>
        {/* About me paragraph div */}
      </div>
      {/* About me left side div */}

      {/* About me right side div */}
      <div>
        {/* Banner left side info div */}
      <div className="rounded-br-[150px] rounded-tl-[150px] border-4 border-white px-8 py-14">
        {/* Image div */}
        <div className="flex justify-center mb-4">
          <img
            className="w-[96px] h-[96px] rounded-full object-cover border-4 border-[#12F7D6] bg-base-300"
            src={circlePic}
            alt=""
          />
        </div>
        {/* Image div */}

        {/* header div */}
        <div className="mb-8">
          <h1 className="text-[32px] font-medium text-white text-center">Shafiqul Islam</h1>
          <p className="font-normal text-sm mt-2 text-white text-center">
            Front-End Developer
          </p>
        </div>
        {/* header div */}

        {/* information div */}
        <div className="mb-8">
          <div className="mb-4">
            <p className="flex gap-4 text-sm font-normal text-white items-center mb-4">
              <FaEnvelope></FaEnvelope> kyoayasakicsgo@gmail.com
            </p>
            <p className="flex gap-4 text-sm font-normal text-white items-center mb-4">
              <IoMdPin></IoMdPin> Dhaka, Bangladesh
            </p>
            <p className="flex gap-4 text-sm font-normal text-white items-center mb-4">
              <FaSuitcase></FaSuitcase> Full-Time Web Developer
            </p>
          </div>

          <div className="flex gap-4">
            <div className="text-[#292F36] text-sm font-normal bg-[#12F7D6] px-2 py-1 rounded-lg">
              HTML
            </div>
            <div className="text-[#292F36] text-sm font-normal bg-[#12F7D6] px-2 py-1 rounded-lg">
              CSS
            </div>
            <div className="text-[#292F36] text-sm font-normal bg-[#12F7D6] px-2 py-1 rounded-lg">
              JS
            </div>
            <div className="text-[#292F36] text-sm font-normal bg-[#12F7D6] px-2 py-1 rounded-lg">
              REACT
            </div>
          </div>
        </div>
        {/* information div */}

        {/* Download CV Button */}
        <Link target="_blank" to={"https://docs.google.com/document/d/15wUdt8GOJMUFUPRtqavjnfHMkTnV8LnJ2A-35bFKl6I/edit?usp=sharing"}>
          <button className="btn bg-white rounded-full text-xl font-normal">
            Download CV
          </button>
        </Link>
        {/* Download CV Button */}
      </div>
      {/* Banner left side info div */}
      </div>
      {/* About me right side div */}
    </div>
  );
};

export default AboutMe;
