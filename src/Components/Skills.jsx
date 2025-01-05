import htmlLogo from "../assets/images/htmlIcon.png";
import cssLogo from "../assets/images/cssIcon.png";
import jsLogo from "../assets/images/jsIcon.png";
import reactLogo from "../assets/images/reactIcon.png";
import firebaseLogo from "../assets/images/firebaseIcon.png";
import nodeLogo from "../assets/images/nodeIcon.png";
import expressLogo from "../assets/images/expressIcon.png";
import mongoLogo from "../assets/images/mongoIcon.png";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="py-[128px]">
      {/* Header div */}
      <div className="text-center">
        <h1 className="xl:text-[64px] text-[32px] text-[#12F7D6] font-normal">
          Skills
        </h1>
      </div>
      {/* Header div */}

      {/* Skills scroll div here */}
      <div className="mt-16 max-w-[90%] mx-auto">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          <div className="flex justify-between gap-[100px] items-center">
            <div>
              <img className="w-[80px] h-[80px]" src={htmlLogo} alt="" />
              <p className="font-medium text-[32px] text-[#12F7D6]">HTML</p>
            </div>
            <div>
              <img className="w-[80px] h-[80px]" src={cssLogo} alt="" />
              <p className="font-medium text-[32px] text-[#12F7D6]">CSS</p>
            </div>
            <div>
              <img className="w-[80px] h-[80px]" src={jsLogo} alt="" />
              <p className="font-medium text-[32px] text-[#12F7D6]">JS</p>
            </div>
            <div>
              <img className="w-[80px] h-[80px]" src={reactLogo} alt="" />
              <p className="font-medium text-[32px] text-[#12F7D6]">React</p>
            </div>
            <div>
              <img className="w-[80px] h-[80px]" src={firebaseLogo} alt="" />
              <p className="font-medium text-[32px] text-[#12F7D6]">Firebase</p>
            </div>
            <div>
              <img className="w-[80px] h-[80px]" src={nodeLogo} alt="" />
              <p className="font-medium text-[32px] text-[#12F7D6]">NodeJs</p>
            </div>
            <div>
              <img className="w-[150px] h-[80px]" src={expressLogo} alt="" />
              <p className="font-medium text-[32px] text-[#12F7D6]">
                ExpressJs
              </p>
            </div>
            <div>
              <img className="w-[80px] h-[80px]" src={mongoLogo} alt="" />
              <p className="font-medium text-[32px] text-[#12F7D6]">MongoDb</p>
            </div>
          </div>
        </Marquee>
      </div>
      {/* Skills scroll div here */}

      {/* Educational Qualification info div */}
      <div className="mt-20 bg-[#292F36] rounded-lg p-4 max-w-[90%] mx-auto">
        <h1 className="text-[32px] font-medium text-center text-[#12F7D6]">Educational Qualification</h1>
        <p className="text-base font-normal text-white mt-8 text-center">Bachelors in Computer Science and Engineering at International University Of Scholars</p>
        <p className="text-base font-normal text-white mt-8 text-center">Year: 4th year</p>
      </div>
      {/* Educational Qualification info div */}
    </div>
  );
};

export default Skills;
