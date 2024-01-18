import Hero from "../assets/images/Hero.png";
import Logo2 from "../assets/images/Logos/original-logo.svg";
import Mission from "../assets/images/illustrations/mission.svg";
import Vision from "../assets/images/illustrations/vision.svg";
import Objectives from "../assets/images/objective.png";
import Check from "../assets/images/check.svg";

import BookLaunch from "../assets/images/Book-launch.png";
import Poster from "../assets/images/Poster.png";
import Founder from "../assets/images/founder.png";

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
          <div
            className="grid lg:grid-cols-2 mx-auto md:pl-8 xl:pl-20 sm:max-w-xl md:max-w-full"
            id="top"
          >
            <div className="max-w-xl mx-auto lg:max-w-screen-2xl px-4">
              <div className="lg:max-w-2xl lg:mb-0 lg:ml-8">
                <div className="lg:mb-24 mt-4 mb-8">
                  <img
                    src={Logo2}
                    alt=""
                    className="mx-auto lg:mx-0 w-32 lg:w-40"
                  />
                </div>
                <div>
                  <h1 className="text-textFour font-extrabold lg:font-black text-4xl lg:text-7xl xl:text-[72px] leading-none text-center lg:text-left">
                    Empowering Voices, Shaping Futures.
                  </h1>
                  {/* <p className="text-xl lg:text-4xl font-semibold mt-4 text-left text-textOne">
                    Championing Youth and Women for Societal Transformation.
                  </p> */}
                  <p className="text-textTwo mt-4 text-lg  text-center lg:text-left">
                    Daisy Nyongesa Foundation seeks to address societal needs.
                    This is after identifying the existing gaps in the 24
                    constituencies of Western Kenya and analyzing the best
                    approach in mitigating them. We are dedicated to empowering
                    youth and women through Edication, Mentorship and
                    Leadership, fostering a future where every voice leads and
                    inspires.
                  </p>
                  <div className="flex mt-4 lg:mt-8 mb-6 lg:mb-0 justify-center lg:justify-start">
                    <a
                      href="#footer"
                      className="flex items-center py-3 lg:py-4 px-8 lg:px-6 rounded-full border border-accentOne hover:bg-accentOne text-accentOne hover:text-[#fff] hover:border border-[##BABD8D] font-bold"
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
            <div
              className="grid lg:grid-cols-2 md:pl-8 xl:pl-20 sm:max-w-xl md:max-w-full bg-accentBackgroundOne"
              id="about"
            >
              <div className="lg:flex lg:w-2/3 gap-4 max-w-xl mx-auto lg:max-w-screen-2xl px-4 py-8 lg:py-16">
                <img
                  src={Mission}
                  alt=""
                  className="w-20 lg:w-auto mx-auto lg:mx-0"
                />
                <div className="mt-4 lg:mt-0">
                  <p className="text-4xl font-bold pb-4 text-center lg:text-left">
                    Our Mission
                  </p>
                  <p className="text-lg text-textTwo text-center lg:text-left">
                    To be the voice of the youth and women that brings
                    development in the society through information and capacity
                    building with a focus on Education, Mentorship,
                    Entrepreneurship and Leadership (EMEL)
                  </p>
                </div>
              </div>
              <div className="bg-accentBackgroundTwo">
                <div className="lg:flex lg:w-2/3 gap-4 py-8 lg:py-16 lg:px-16 px-4">
                  <img
                    src={Vision}
                    alt=""
                    className="w-20 lg:w-auto mx-auto lg:mx-0"
                  />
                  <div>
                    <p className="text-4xl font-bold pb-4 text-center lg:text-left">
                      Our Vision
                    </p>
                    <p className="text-lg text-textTwo text-center lg:text-left">
                      To rise above life challenges and be a solution-based
                      organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
            <div className="grid lg:grid-cols-5 gap-4 grid-cols-1">
              <h1 className="lg:col-span-2 text-accentOne font-bold text-4xl lg:text-6xl leading-none text-center lg:text-left w-2/3 mx-auto">
                Our Guiding Principles
              </h1>
              <div className="bg-accentBackgroundOne py-8">
                <div className="flex justify-center mb-4">
                  {/* <img src={Mission} alt="" className="lg:w-32 w-20" /> */}
                </div>
                <p className="font-bold text-2xl text-center">Husika</p>
                <p className="text-center px-4 mt-2">
                  We want to be involved, we want young people to be involved,
                  we want you to be involved.{" "}
                </p>
              </div>
              <div className="bg-accentBackgroundOne py-8">
                <div className="flex justify-center mb-4">
                  {/* <img src={Mission} alt="" className="lg:w-32 w-20" /> */}
                </div>
                <p className="font-bold text-2xl text-center">Elimika</p>
                <p className="text-center px-4 mt-2">
                  When we educate and enlighten young people, we educate the
                  whole community
                </p>
              </div>
              <div className="bg-accentBackgroundOne py-8">
                <div className="flex justify-center mb-4">
                  {/* <img src={Mission} alt="" className="lg:w-32 w-20" /> */}
                </div>
                <p className="font-bold text-2xl text-center">Badilika</p>
                <p className="text-center px-4 mt-2">
                  Educated and involved minds aspire to aspire invoved nation,
                  they are change makers and advocates of development.
                </p>
              </div>
            </div>

            <div className="pt-16 lg:py-20">
              <div className="lg:flex gap-16 items-center">
                <img
                  src={Objectives}
                  alt=""
                  className="border border-strokeOne"
                />
                <div>
                  <h1 className="mt-4 lg:w-4/5 lg:col-span-2 text-textOne font-bold text-4xl lg:text-6xl leading-none text-left">
                    Our <span className="text-accentOne">Objectives</span> and
                    <span className="text-accentOne"> Core values</span>
                  </h1>
                  <div className="lg:mt-8 lg:w-4/5">
                    <p className="px-6 mb-4 py-2 font-semibold text-textOne bg-accentBackgroundOne border-l-accentOne border-l-4 rounded-lg mt-4">
                      Objectives Include:
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
                  <div className="lg:w-4/5">
                    <p className="px-6 mb-4 py-2 font-semibold text-textOne bg-accentBackgroundOne border-l-accentOne border-l-4 rounded-lg mt-4">
                      Core Values Include:
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-3">
                      <OurObjectives description={"Commitment"} />
                      <OurObjectives description={"Integrity"} />
                      <OurObjectives description={"Teamwork"} />
                      <OurObjectives description={"Professionalism"} />
                      <OurObjectives description={"Partnership"} />
                      <OurObjectives description={"Accountability"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accentBackgroundOne" id="projects">
            <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
              <h1 className="lg:col-span-2 text-textOne font-bold text-4xl lg:text-6xl leading-none text-left">
                Our Projects
              </h1>
              <div className="mt-8 lg:mt-16">
                <ProjectOne />
                <div className="py-10"></div>
                <ProjectTwo />
              </div>
              <div className="flex justify-center lg:my-10 w-full">
                <Link to="/projects" className="w-full lg:w-auto">
                  <button className="w-full text-textThree bg-accentOne hover:bg-accentBackgroundOne hover:border-2 border-accentOne py-4 mt-8  px-12 text-lg font-semibold rounded-lg hover:text-accentOne hover:border-accentOne">
                    All Projects
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-accentBackgroundOne">
            <div className="px-4 py-6 lg:py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
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
            <Gallery />
          </div>

          <div
            className="px-4 py-8 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl"
            id="events"
          >
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
                      href="https://www.facebook.com/people/Sen-Daisy-Nyongesa-Nabwera/100077107750212/?mibextid=ZbWKwL"
                      className="flex items-center py-3 lg:py-4 px-8 lg:px-6 rounded-full border border-accentOne hover:bg-[#1E1E1E] text-accentOne hover:text-[#fff] hover:border border-[##BABD8D] font-bold"
                    >
                      <p className="text-xl">Discover More</p>
                    </a>
                  </div>
                </div>
              </div>
              <img src={BookLaunch} alt="" />
            </div>
            <div className="flex-col-reverse flex lg:flex-row items-center lg:gap-20 py-10">
              <img src={Poster} alt="" />
              <div>
                <h1 className="lg:w-4/5 lg:col-span-2 text-textOne font-bold text-4xl lg:text-6xl leading-none text-left">
                  <span className="text-accentOne"> 3 IN 1</span> Celebration
                </h1>
                <p className="text-lg mt-3 lg:mt-8">
                  Join us for a landmark celebration as we honor three momentous
                  occasions: the birthday of our esteemed founder, the launch of
                  an inspiring new book authored by the founder, and the grand
                  unveiling of Daisy Nyongesa Foundation. This unique event
                  brings together the joy of a personal milestone, the
                  intellectual excitement of a book launch, and the noble vision
                  of our foundation's journey. Be part of this exceptional
                  evening as we mark new beginnings and shared aspirations for a
                  brighter future.
                </p>
                <div className="flex mt-4 lg:mt-8 mb-6 lg:mb-0">
                  <a
                    href="https://www.instagram.com/sen.daisynyongesa/"
                    className="flex items-center py-3 lg:py-4 px-8 lg:px-6 rounded-full border border-accentOne hover:bg-[#1E1E1E] text-accentOne hover:text-[#fff] hover:border border-[##BABD8D] font-bold"
                  >
                    <p className="text-xl">Discover More</p>
                  </a>
                </div>
              </div>
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
              Founder and CEO, <br></br> Daisy Nyongesa Foundation
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
              <div className="grid grid-cols-3 items-center lg:flex justify-center gap-10 mt-8">
                <img src={LogoOne} alt="" className="w-28 lg:w-auto mx-auto" />
                <img src={LogoFive} alt="" className="w-28 mx-auto lg:w-auto" />
                <img
                  src={LogoThree}
                  alt=""
                  className="w-28 mx-auto lg:w-auto"
                />
                <img src={LogoFour} alt="" className="w-28 mx-auto lg:w-auto" />
                <img src={LogoTwo} alt="" className="w-28 mx-auto lg:w-auto" />
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

import Star from "../assets/images/icons/star.svg";
import { Footer } from "../components/Footer";
import { ProjectOne, ProjectTwo } from "../components/ProjectCards";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";

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
