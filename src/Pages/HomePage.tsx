import Hero from "../assets/images/Hero.png";
import Logo1 from "../assets/images/Logos/flat-logo.svg";

const HomePage = () => {
  return (
    <div>
      <div>
        <div>
          <div className="grid lg:grid-cols-2 mx-auto md:pl-8 xl:pl-20 sm:max-w-xl md:max-w-full">
            <div className="max-w-xl mx-auto lg:max-w-screen-2xl px-4">
              <div className="lg:max-w-2xl lg:mb-0 lg:ml-8">
                <div className="lg:mb-32 mt-4 mb-8">
                  <img src={Logo1} alt="" />
                </div>
                <div>
                  <h1 className="text-textOne font-extrabold lg:font-black text-4xl lg:text-7xl xl:text-[72px] leading-none text-left">
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
