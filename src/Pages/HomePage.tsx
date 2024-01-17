import Hero from "../assets/images/Hero.png";
import Logo1 from "../assets/images/Logos/flat-logo.svg";
import Mission from "../assets/images/illustrations/mission.svg";
import Vision from "../assets/images/illustrations/vision.svg";
import Objectives from "../assets/images/objective.png";
import Check from "../assets/images/check.svg";
import ProjectImageOne from "../assets/images/Projects/front-image-1.png";
import ProjectImageTwo from "../assets/images/Projects/front-image-2.png";
import BookLaunch from "../assets/images/Book-launch.png";
import Founder from "../assets/images/founder.png";
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

// Farm Visit
import Image1 from "../assets/images/Projects/MFS/Rectangle 27.png";
import Image2 from "../assets/images/Projects/MFS/Rectangle 28.png";
import Image3 from "../assets/images/Projects/MFS/Rectangle 29.png";
import Image4 from "../assets/images/Projects/MFS/Rectangle 30-1.png";
import Image5 from "../assets/images/Projects/MFS/Rectangle 30.png";
import Image6 from "../assets/images/Projects/MFS/Rectangle 31.png";

// Donation
import Image11 from "../assets/images/Projects/Donation/Rectangle 27.png";
import Image21 from "../assets/images/Projects/Donation/Rectangle 28.png";
import Image31 from "../assets/images/Projects/Donation/Rectangle 29.png";
import Image41 from "../assets/images/Projects/Donation/Rectangle 30-1.png";
import Image51 from "../assets/images/Projects/Donation/Rectangle 30.png";
// import Image61 from "../assets/images/Projects/Donation/";

// Icons
import Date from "../assets/images/icons/date.svg";
import Time from "../assets/images/icons/time.svg";
import Location from "../assets/images/icons/location.svg";
import Dress from "../assets/images/icons/Dress.svg";

// Logos
import LogoOne from "../assets/images/Logos/logos/IMG-20231207-WA0026 1.svg";
import LogoTwo from "../assets/images/Logos/logos/Martine's Angel's Program.svg";
import LogoThree from "../assets/images/Logos/logos/NYOROTIS COOPERATIVE COCIETY.svg";
import LogoFour from "../assets/images/Logos/logos/Screenshot from 2024-01-14 14-53-36 1.svg";
import LogoFive from "../assets/images/Logos/logos/Screenshot from 2024-01-14 14-54-36.svg";

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
              <h1 className="lg:col-span-2 text-accentOne font-bold text-4xl lg:text-6xl leading-none text-left">
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
                <p className="font-bold text-2xl text-center">Elimika</p>
              </div>
              <div className="bg-accentBackgroundOne py-8">
                <div className="flex justify-center mb-4">
                  <img src={Mission} alt="" className="lg:w-32 w-20" />
                </div>
                <p className="font-bold text-2xl text-center">Badilika</p>
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
                  <h1 className="lg:col-span-2 text-textOne font-bold text-4xl lg:text-6xl leading-none text-left">
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
              <h1 className="lg:col-span-2 text-textOne font-bold text-4xl lg:text-6xl leading-none text-left">
                Our Projects
              </h1>
              <div className="mt-16">
                <ProjectOne />
                <div className="py-10"></div>
                <ProjectTwo />
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
              <h1 className="lg:col-span-2 text-textOne font-bold text-4xl lg:text-6xl leading-none text-left">
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

          <div className="px-4 py-8 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
            <div className="lg:flex items-center lg:gap-10">
              <div className="">
                <div className="mb-4 mt-4 lg:mt-0">
                  <p className="uppercase font-semibold mb-1 text-textTwo">
                    Upcoming Event
                  </p>
                  <div className="w-20 h-2 bg-accentOne rounded-full "></div>
                </div>
                <h1 className="lg:w-4/5 lg:col-span-2 text-textOne font-bold text-4xl lg:text-6xl leading-none text-left">
                  Ready to Join our{" "}
                  <span className="text-accentOne"> Book Launch</span> Event
                </h1>
                <p className="mt-2 lg:mt-6 text-lg lg:w-4/5">
                  Join us for an evening filled with engaging conversations, a
                  reading session by the author, and a chance to get your copy
                  signed. It's an opportunity not just to celebrate the book's
                  release, but also to immerse yourself in a community that
                  cherishes the power of storytelling.
                </p>
                <div className="mt-4 text-lg">
                  <div className="flex gap-2">
                    <img src={Date} alt="" className="w-7" />
                    <p>
                      Date:{" "}
                      <span className="font-semibold">23RD JANUARY 2024</span>
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <img src={Time} alt="" className="w-7" />
                    <p>
                      Time: <span className="font-semibold">2:00PM</span>
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <img src={Location} alt="" className="w-7" />
                    <p>
                      Location:{" "}
                      <span className="font-semibold">Noble Hotel Eldoret</span>
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <img src={Dress} alt="" className="w-7" />
                    <p>
                      Dress Code:{" "}
                      <span className="font-semibold">
                        Elegant with a touch of Lilac
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex mt-4 lg:mt-8 mb-6 lg:mb-0">
                    <a
                      href=""
                      className="flex items-center py-3 lg:py-4 px-8 lg:px-6 rounded-full border border-accentOne hover:bg-[#1E1E1E] text-accentOne hover:text-[#fff] hover:border border-[##BABD8D] font-bold"
                    >
                      <p className="text-xl">Discover More</p>
                    </a>
                  </div>
                </div>
              </div>
              <img src={BookLaunch} alt="" />
            </div>
          </div>

          <div className="py-8 lg:py-16 px-4">
            <h1 className="text-textOne font-bold text-4xl lg:text-6xl leading-none text-center">
              Meet our <span className="text-accentOne"> Founder</span>
            </h1>
            <div className="flex justify-center mt-8">
              <img src={Founder} alt="" />
            </div>
            <p className="text-center text-3xl font-bold text-textOne mt-8">
              Daisy Kanainza Nyongesa.
            </p>
            <p className="text-center text-lg text-textOne mt-3 font-medium">
              CEO, <br></br> Daisy Nyongesa Foundation
            </p>
          </div>

          <div className="bg-accentBackgroundOne">
            <div className="px-4 py-8 lg:py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
              <div className="mb-4 mt-4 lg:mt-0">
                <p className="uppercase font-semibold mb-1 text-textTwo text-center">
                  Testimonials
                </p>
                <div className="w-20 h-2 bg-accentOne rounded-full mx-auto"></div>
              </div>
              <h1 className="lg:col-span-2 text-textOne font-bold text-4xl lg:text-6xl leading-none text-center">
                Success Stories
              </h1>

              <div className="grid lg:grid-cols-3 gap-4 mt-8">
                <Testimonial />
                <Testimonial />
                <Testimonial />
              </div>
            </div>
          </div>

          <div>
            <div className="px-4 py-8 lg:py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
              <h1 className="lg:col-span-2 text-textOne font-bold text-4xl lg:text-6xl leading-none text-center">
                Our Partners
              </h1>
              <div className="grid grid-cols-2 items-center lg:flex justify-center gap-10 mt-8">
                <img src={LogoOne} alt="" />
                <img src={LogoTwo} alt="" />
                <img src={LogoThree} alt="" />
                <img src={LogoFour} alt="" />
                <img src={LogoFive} alt="" />
              </div>
            </div>
          </div>
          <footer className="bg-accentBackgroundOne">
            <Footer />
          </footer>
          <div className="bg-accentOne">
            <p className="text-sm text-center text-textThree py-2">
              © Copyright Daisy Nyongesa Foundation 2024 || All Rights Reserved.
            </p>
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
          <button
            onClick={openModal}
            className="text-accentTwo py-4 mt-8 border-2 border-accentTwo px-12 text-lg font-semibold rounded-lg"
          >
            View Gallery
          </button>
          <Modals
            isOpen={isModalOpen}
            onClose={closeModal}
            image1={Image1}
            image2={Image2}
            image3={Image3}
            image4={Image4}
            image5={Image5}
            image6={Image6}
          />
        </div>
      </div>
    </div>
  );
};

export const ProjectTwo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
          <button
            onClick={openModal}
            className="text-accentTwo py-4 mt-8 border-2 border-accentTwo px-12 text-lg font-semibold rounded-lg"
          >
            View Gallery
          </button>
          <Modals
            isOpen={isModalOpen}
            onClose={closeModal}
            image1={Image11}
            image2={Image21}
            image3={Image31}
            image4={Image41}
            image5={Image51}
            image6={""}
          />
        </div>
        <img src={ProjectImageTwo} alt="" />
      </div>
    </div>
  );
};

import Star from "../assets/images/icons/star.svg";
import { Footer } from "../components/Footer";
import { useState } from "react";
import Modals from "../components/Modals";

export const Testimonial = () => {
  return (
    <div>
      <div className="text-lg bg-textThree p-6 rounded-lg">
        <p className="font-bold">Grace Kwamboka</p>
        <p className=" font-medium">MFCS</p>
        <p className=" mt-4">
          “Less than 24h turn around. Easy commu. Did exactly as offered, all
          around a perfect experience.”
        </p>
        <div className="flex items-center gap-2 mt-8">
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
      </div>
    </div>
  );
};
