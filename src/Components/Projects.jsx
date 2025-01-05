import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div className="py-[128px]">
      <h1 className="xl:text-[64px] text-[32px] text-[#12F7D6] font-normal text-center">
        Projects
      </h1>
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div>
                <NavLink to={`/viewdetails/${project.id}`}>
                  <p className="text-center my-8 text-2xl font-normal text-[#12F7D6] border-b-4 max-w-[10%] mx-auto pb-2">
                    View Details
                  </p>
                </NavLink>
                <img
                  className="max-w-[75%] mx-auto rounded-xl"
                  src={project.image}
                  alt={project.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
