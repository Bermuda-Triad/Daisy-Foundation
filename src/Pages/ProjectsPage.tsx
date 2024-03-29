import { Link } from "react-router-dom";
import Logo from "../assets/images/Logos/original-logo.svg";
import {
  ProjectFour,
  ProjectOne,
  ProjectThree,
  ProjectTwo,
} from "../components/ProjectCards";

const ProjectsPage = () => {
  return (
    <div>
      <div>
        <div className="bg-accentBackgroundOne lg:pb-16">
          <img src={Logo} alt="" className="mx-auto lg:py-10" />
          <h1 className=" text-accentOne font-extrabold lg:font-black text-4xl lg:text-7xl xl:text-[72px] leading-none text-center">
            All Projects
          </h1>

          <p className="text-textTwo mt-4 text-lg  text-center lg:w-1/2 mx-auto px-4">
            In our projects at Daisy Nyongesa Foundation, we focus on empowering
            youth and women through innovative and impactful programs. Each
            initiative showcases our commitment to nurturing talent and driving
            positive societal change.
          </p>
          <div className="flex mt-4 lg:mt-8 mb-6 lg:mb-0 justify-center">
            <Link to="/">
              <a
                href=""
                className="flex items-center py-3 lg:py-4 px-8 lg:px-6 rounded-full border border-accentOne hover:bg-[#1E1E1E] text-accentOne hover:text-[#fff] hover:border border-[##BABD8D] font-bold"
              >
                <p className="text-xl">Back Home</p>
              </a>
            </Link>
          </div>
        </div>

        <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
          <div className="mt-8 lg:mt-16">
            <ProjectOne />
            <div className="py-10"></div>
            <ProjectTwo />
          </div>
          <div className="py-10"></div>
          <ProjectThree />
          <div className="py-10"></div>
          <ProjectFour />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
