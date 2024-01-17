import Hero from "../assets/images/Hero.png";
import Logo1 from "../assets/images/Logos/flat-logo.svg";
import Mission from "../assets/images/illustrations/mission.svg";
import Vision from "../assets/images/illustrations/vision.svg";
import Objectives from "../assets/images/objective.png";
import Check from "../assets/images/check.svg";
import ProjectImageOne from "../assets/images/Projects/front-image-1.png";
import ProjectImageTwo from "../assets/images/Projects/front-image-2.png";
import Marquee from "react-fast-marquee";

import Gallery1 from "../assets/images/Gallery/Rectangle 17-1.png";
import Gallery2 from "../assets/images/Gallery/Rectangle 17.png";
import Gallery3 from "../assets/images/Gallery/Rectangle 18-1.png";
import Gallery4 from "../assets/images/Gallery/Rectangle 18.png";
import Gallery5 from "../assets/images/Gallery/Rectangle 19-1.png";
import Gallery6 from "../assets/images/Gallery/Rectangle 19.png";
import Gallery7 from "../assets/images/Gallery/Rectangle 20-1.png";
import Gallery8 from "../assets/images/Gallery/Rectangle 20-2.png";
import Gallery9 from "../assets/images/Gallery/Rectangle 20-3.png";
import Gallery10 from "../assets/images/Gallery/Rectangle 20.png";

const HomePage = () => {
  return (
    <div>
      <div>
        <div>
          <div className="w-full h-4 bg-accentOne"></div>
          <div className="grid lg:grid-cols-2 mx-auto md:pl-8 xl:pl-20 sm:max-w-xl md:max-w-full">
            <div className="max-w-xl mx-auto lg:max-w-screen-2xl px-4">
              <div className="lg:max-w-2xl lg:mb-0 lg:ml-8">
                <div className="lg:mb-32 mt-4 mb-8">
                  <img src={Logo1} alt="" />
                </div>
                <div>
                  <h1 className="text-textFour font-extrabold lg:font-black text-4xl lg:text-7xl xl:text-[72px] leading-none text-left">
                    Empowering Voices, Shaping Futures.
                  </h1>
                  <p className="text-xl lg:text-4xl font-semibold mt-4 text-left text-textOne">
                    Championing Youth and Women for Societal Transformation.
                  </p>
                  <p className="text-textTwo mt-4 text-left text-lg">
                    Daisy Nyongesa Foundation is dedicated to empowering youth
                    and women through Education, Mentorship, Entrepreneurship,
                    and Leadership, fostering a future where every voice leads
                    and inspires.
                  </p>
                  <div className="flex mt-4 lg:mt-8 mb-6 lg:mb-0">
                    <a
                      href=""
                      className="flex items-center py-3 lg:py-4 px-8 lg:px-6 rounded-full border border-accentOne hover:bg-[#1E1E1E] text-accentOne hover:text-[#fff] hover:border border-[##BABD8D] font-bold"
                    >
                      <p className="text-xl">Get in Touch</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img src={Hero} className=" w-full" alt="" />
            </div>
          </div>

          <div>
            <div className="grid lg:grid-cols-2 md:pl-8 xl:pl-20 sm:max-w-xl md:max-w-full bg-accentBackgroundOne">
              <div className="lg:flex lg:w-2/3 gap-4 max-w-xl mx-auto lg:max-w-screen-2xl px-4 py-8 lg:py-16">
                <img src={Mission} alt="" className="w-32 lg:w-auto" />
                <div className="mt-4 lg:mt-0">
                  <p className="text-4xl font-bold pb-4">Our Mission</p>
                  <p className="text-lg text-textTwo">
                    To be the voice of the youth and women that brings
                    development in the society through information and capacity
                    building with a focus on Education, Mentorship,
                    Entrepreneurship and Leadership (EMEL)
                  </p>
                </div>
              </div>
              <div className="bg-accentBackgroundTwo">
                <div className="lg:flex lg:w-2/3 gap-4 py-8 lg:py-16 lg:px-16 px-4">
                  <img src={Vision} alt="" className="w-32 lg:w-auto" />
                  <div>
                    <p className="text-4xl font-bold pb-4">Our Vision</p>
                    <p className="text-lg text-textTwo">
                      To rise above life challenges and be a solution-based
                      organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
            <div className="grid lg:grid-cols-5 gap-4 grid-cols-2">
              <h1 className="lg:col-span-2 text-accentOne font-bold lg:font-black text-4xl lg:text-6xl leading-none text-left">
                Our Guiding Principles
              </h1>
              <div className="bg-accentBackgroundOne py-8">
                <div className="flex justify-center mb-4">
                  <img src={Mission} alt="" className="lg:w-32 w-20" />
                </div>
                <p className="font-bold text-2xl text-center">Husika</p>
              </div>
              <div className="bg-accentBackgroundOne py-8">
                <div className="flex justify-center mb-4">
                  <img src={Mission} alt="" className="lg:w-32 w-20" />
                </div>
                <p className="font-bold text-2xl text-center">Husika</p>
              </div>
              <div className="bg-accentBackgroundOne py-8">
                <div className="flex justify-center mb-4">
                  <img src={Mission} alt="" className="lg:w-32 w-20" />
                </div>
                <p className="font-bold text-2xl text-center">Husika</p>
              </div>
            </div>

            <div className="py-20">
              <div className="lg:flex gap-16 items-center">
                <img
                  src={Objectives}
                  alt=""
                  className="border border-strokeOne"
                />
                <div>
                  <div className="mb-4 mt-4 lg:mt-0">
                    <p className="uppercase font-semibold mb-1 text-textTwo">
                      Daisy Nyongesa Foundation
                    </p>
                    <div className="w-20 h-2 bg-accentOne rounded-full "></div>
                  </div>
                  <h1 className="lg:col-span-2 text-textOne font-bold lg:font-black text-4xl lg:text-6xl leading-none text-left">
                    Our Objectives
                  </h1>
                  <div className="mt-8 lg:w-3/4">
                    <p className="px-6 mb-4 py-2 font-semibold text-textOne text-xl bg-accentBackgroundOne border-l-accentOne border-l-4 rounded-lg mt-4">
                      Our Objectives Include:
                    </p>
                    <OurObjectives
                      description={
                        "To champion for social inclusion of women and youth."
                      }
                    />
                    <OurObjectives
                      description={
                        "To implement programs that fulﬁl people's basic needs."
                      }
                    />
                    <OurObjectives
                      description={
                        "To create a sense of collaboration between government and society."
                      }
                    />
                    <OurObjectives
                      description={
                        "To advocate for economic growth and sustainability through climate change"
                      }
                    />
                    <OurObjectives
                      description={"To actualize mentorship academy."}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accentBackgroundOne">
            <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
              <div className="mb-4 mt-4 lg:mt-0">
                <p className="uppercase font-semibold mb-1 text-textTwo">
                  Daisy Nyongesa Foundation
                </p>
                <div className="w-20 h-2 bg-accentOne rounded-full "></div>
              </div>
              <h1 className="lg:col-span-2 text-textOne font-bold lg:font-black text-4xl lg:text-6xl leading-none text-left">
                Our Projects
              </h1>
              <div className="mt-16">
                <ProjectOne />
                <div className="py-10"></div>
                <ProjectTwo />
              </div>
            </div>
          </div>

          <div>
            <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
              <div className="mb-4 mt-4 lg:mt-0">
                <p className="uppercase font-semibold mb-1 text-textTwo">
                  Daisy Nyongesa Foundation
                </p>
                <div className="w-20 h-2 bg-accentOne rounded-full "></div>
              </div>
              <h1 className="lg:col-span-2 text-textOne font-bold lg:font-black text-4xl lg:text-6xl leading-none text-left">
                Our Gallery
              </h1>
            </div>
            <div>
              <Marquee pauseOnHover>
                <img src={Gallery1} alt="" className="mx-2" />
                <img src={Gallery2} alt="" className="mx-2" />
                <img src={Gallery3} alt="" className="mx-2" />
                <img src={Gallery4} alt="" className="mx-2" />
                <img src={Gallery5} alt="" className="mx-2" />
                <img src={Gallery6} alt="" className="mx-2" />
                <img src={Gallery7} alt="" className="mx-2" />
                <img src={Gallery8} alt="" className="mx-2" />
                <img src={Gallery9} alt="" className="mx-2" />
                <img src={Gallery10} alt="" className="mx-2" />
              </Marquee>
              <Marquee pauseOnHover direction="right" className="mt-4">
                <img src={Gallery1} alt="" className="mx-2" />
                <img src={Gallery2} alt="" className="mx-2" />
                <img src={Gallery3} alt="" className="mx-2" />
                <img src={Gallery4} alt="" className="mx-2" />
                <img src={Gallery5} alt="" className="mx-2" />
                <img src={Gallery6} alt="" className="mx-2" />
                <img src={Gallery7} alt="" className="mx-2" />
                <img src={Gallery8} alt="" className="mx-2" />
                <img src={Gallery9} alt="" className="mx-2" />
                <img src={Gallery10} alt="" className="mx-2" />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

interface ObjectivesProps {
  description: string;
}

export const OurObjectives = (props: ObjectivesProps) => {
  return (
    <div className="flex items-start mt-2 gap-2 text-lg text-textTwo">
      <img src={Check} alt="" />
      <p>{props.description}</p>
    </div>
  );
};

export const ProjectOne = () => {
  return (
    <div>
      <div className="lg:flex gap-20 items-center">
        <img src={ProjectImageOne} alt="" />
        <div className="">
          <p className="mb-4">Donations / Farming</p>
          <p className="lg:text-4xl text-2xl font-bold">
            DAISY IN THE FARM + MFCS Visit.
          </p>
          <p className="mt-2 lg:mt-6 text-lg">
            Daisy Nyongesa Foundation is dedicated to empowering youth and women
            through Education, Mentorship, Entrepreneurship, and Leadership,
            fostering a future where every voice leads and inspires.
          </p>
          <button className="text-accentTwo py-4 mt-8 border-2 border-accentTwo px-12 text-lg font-semibold rounded-lg">
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProjectTwo = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-20 items-center">
        <div className="">
          <p className="mb-4">Donations / Persons with Disability</p>
          <p className="lg:text-4xl text-2xl font-bold">Wheelchair Donation.</p>
          <p className="lg:mt-6 mt-2 text-lg">
            Daisy Nyongesa Foundation is dedicated to empowering youth and women
            through Education, Mentorship, Entrepreneurship, and Leadership,
            fostering a future where every voice leads and inspires.
          </p>
          <button className="text-accentTwo py-4 mt-8 border-2 border-accentTwo px-12 text-lg font-semibold rounded-lg">
            View Gallery
          </button>
        </div>
        <img src={ProjectImageTwo} alt="" />
      </div>
    </div>
  );
};
