import Hero from "../assets/images/Hero.png";
import Logo1 from "../assets/images/Logos/flat-logo.svg";
import Mission from "../assets/images/illustrations/mission.svg";
import Vision from "../assets/images/illustrations/vision.svg";

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
