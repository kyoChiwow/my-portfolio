import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewDetails = () => {
  const { id } = useParams();
  const parseId = parseInt(id);
  const [myProject, setMyProject] = useState([]);
  const {
    name,
    image,
    technologyStack,
    githubClient,
    githubServer,
    description,
    liveLink,
  } = myProject;

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find((project) => project.id === parseId);
        setMyProject(selectedProject);
      });
  }, [parseId]);

  return (
    <div className="bg-[url('/src/assets/images/viewDetailsBg.jpg')] bg-no-repeat bg-cover min-h-screen py-[200px]">
      {/* Card Wrapping div */}
      <div className="xl:max-w-[60%] max-w-[90%] mx-auto p-4 bg-[#292F36]">
        {/* header div */}
        <div>
          <h1 className="text-[32px] xl:text-[64px] font-medium text-[#12F7D6] text-center">
            {name}
          </h1>
        </div>
        {/* header div */}

        {/* Image div */}
        <div className="mt-8">
          <img className="rounded-xl" src={image} alt="" />
        </div>
        {/* Image div */}

        {/* info div */}
        <div className="mt-8">
          <p className="text-white">
            <span className="text-[#12F7D6]">Live Link:</span>{" "}
            <Link className="underline" target="_blank" to={liveLink}>{liveLink}</Link>
          </p>
          <p className="text-white mt-4">
            <span className="text-[#12F7D6]">Technology Stack:</span>{" "}
            {technologyStack}.
          </p>
          <p className="text-white mt-4">
            <span className="text-[#12f7d6]">GitHub Client Side Link:</span>{" "}
            <Link className="underline" target="_blank" to={githubClient}>
              {githubClient}
            </Link>
          </p>
          <p className="text-white mt-4">
            <span className="text-[#12f7D6]">GitHub Client Side Link:</span>{" "}
            <Link className="underline" target="_blank" to={githubServer}>
              {githubServer}
            </Link>
          </p>
          <p className="text-white mt-4">
            <span className="text-[#12F7D6]">Project Commentary:</span>{" "}
            {description}
          </p>
        </div>
        {/* info div */}

        {/* Go Home Button div */}
        <div className="mt-10">
          <NavLink to={"/"}>
            <button className="btn bg-white rounded-full text-xl font-normal">
              Go Home!
            </button>
          </NavLink>
        </div>
        {/* Go Home Button div */}
      </div>
      {/* Card Wrapping div */}
    </div>
  );
};

export default ViewDetails;
