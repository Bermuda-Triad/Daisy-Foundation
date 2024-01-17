import Logo from "../assets/images/Logos/original-logo.svg";
import Facebook from "../assets/images/icons/logos_facebook.svg";
import Instagram from "../assets/images/icons/instagram.svg";
import YouTube from "../assets/images/icons/youtube-icon.svg";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 grid-cols-1 lg:grid-cols-4">
        <div className="hidden lg:block">
          <img src={Logo} alt="" />
        </div>
        <div className="space-y-4 text-lg">
          <p className="font-bold tracking-wide text-accentOne">Quick Link</p>
          <div className="">
            <a className="" href="#">
              Home
            </a>
          </div>
          <div className="">
            <a className="" href="#">
              Upcoming Events
            </a>
          </div>
          <div className="">
            <a className="" href="#">
              Projects
            </a>
          </div>
          <div className="">
            <a className="" href="#">
              About Us
            </a>
          </div>
        </div>
        <div className="space-y-4 text-lg">
          <p className="font-bold tracking-wide text-accentOne">Contact Info</p>
          <div className="">
            <p className="mr-1 text-textOne font-bold">Phone:</p>
            <p className="">+254 711 922914</p>
          </div>
          <div className="">
            <p className="mr-1 text-textOne font-bold">Email:</p>
            <p className="">info@daisynyongesafoundation.org</p>
          </div>
          <div className="">
            <p className="mr-1 text-textOne font-bold">Address:</p>
            <p className="">
              P.O.BOX 7 - 30205<br></br> MATUNDA, KENYA
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <p className="font-bold text-lg text-accentOne text-center lg:text-left">
            Follow us on
          </p>
          <div className="flex items-center mt-4 space-x-3">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img src={Facebook} alt="" className="w-10" />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img src={Instagram} alt="" className="w-10" />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img src={YouTube} alt="" className="w-10" />
            </a>
          </div>
        </div>
        <div className="lg:hidden flex justify-center">
          <img src={Logo} alt="" className="w-32" />
        </div>
      </div>
    </div>
  );
};
