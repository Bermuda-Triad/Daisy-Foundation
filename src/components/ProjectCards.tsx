import { useState } from "react";
import Modals from "../components/Modals";

import ProjectImageOne from "../assets/images/Projects/front-image-1.png";
import ProjectImageTwo from "../assets/images/Projects/front-image-2.png";
import ProjectImageThree from "../assets/images/Projects/front-image-3.png";
import ProjectImageFour from "../assets/images/Projects/front-image-4.png";

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
import Image61 from "../assets/images/Projects/Donation/Rectangle 31.png";

// School
import Image1111 from "../assets/images/Projects/School/Rectangle 27.png";
import Image2111 from "../assets/images/Projects/School/Rectangle 28.png";
import Image3111 from "../assets/images/Projects/School/Rectangle 29.png";
import Image4111 from "../assets/images/Projects/School/Rectangle 30-1.png";
import Image5111 from "../assets/images/Projects/School/Rectangle 30.png";
import Image6111 from "../assets/images/Projects/School/Rectangle 31.png";

// Traning
import image211 from "../assets/images/Projects/Gobey/Rectangle 27.png";
import image222 from "../assets/images/Projects/Gobey/Rectangle 28.png";
import image233 from "../assets/images/Projects/Gobey/Rectangle 29.png";
import image244 from "../assets/images/Projects/Gobey/Rectangle 30-1.png";
import image255 from "../assets/images/Projects/Gobey/Rectangle 30.png";
import image266 from "../assets/images/Projects/Gobey/Rectangle 31.png";

export const ProjectOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <div className="lg:flex gap-20 items-center">
        <img src={ProjectImageOne} alt="" className="w-full lg:w-auto" />
        <div className="">
          <p className="mb-4">Donations / Farming</p>
          <p className="lg:text-4xl text-2xl font-bold">
            DAISY IN THE FARM + MFCS Visit.
          </p>
          <p className="mt-2 lg:mt-6 text-lg">
            We acknowledge that agriculture is the backbone of our economy.
            Through our involvement in farming activities and projects,{" "}
            <br></br>We endeavour to solve the following SDGs;
          </p>
          <p className="text-lg font-semibold">#SDG 2 - Zero Hunger </p>
          <p className="text-lg font-semibold">
            #SDG 12 - Responsible consumption and production{" "}
          </p>
          <p className="text-lg font-semibold">#SDG 13 - Climate action </p>
          <p className="text-lg font-semibold">#SDG 15 - Life on land</p>
          <button
            onClick={openModal}
            className="text-accentTwo py-4 mt-8 border-2 border-accentTwo px-12 text-lg font-semibold rounded-lg hover:text-accentOne hover:border-accentOne"
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
            We envision a just society, free from discrimination. Our programmes
            for PLWDs aim at solving;<br></br>
            <span className="font-semibold">#SDG 10: Reduced inequalities</span>
          </p>
          <button
            onClick={openModal}
            className="text-accentTwo py-4 mt-8 border-2 border-accentTwo px-12 text-lg font-semibold rounded-lg hover:text-accentOne hover:border-accentOne"
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
            image6={Image61}
          />
        </div>
        <img src={ProjectImageTwo} alt="" className="w-full lg:w-auto" />
      </div>
    </div>
  );
};

export const ProjectThree = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <div className="lg:flex gap-20 items-center">
        <img src={ProjectImageThree} alt="" className="w-full lg:w-auto" />
        <div className="">
          <p className="mb-4">Donations / Farming</p>
          <p className="lg:text-4xl text-2xl font-bold">
            Pads Drive and School fees sponsorship at Lumama Secondary School
          </p>
          {/* <p className="mt-2 lg:mt-6 text-lg">
            We acknowledge that agriculture is the backbone of our economy.
            Through our involvement in farming activities and projects,{" "}
            <br></br>We endeavour to solve the following SDGs;
          </p>
          <p className="text-lg font-semibold">#SDG 2 - Zero Hunger </p>
          <p className="text-lg font-semibold">
            #SDG 12 - Responsible consumption and production{" "}
          </p>
          <p className="text-lg font-semibold">#SDG 13 - Climate action </p>
          <p className="text-lg font-semibold">#SDG 15 - Life on land</p> */}
          <button
            onClick={openModal}
            className="text-accentTwo py-4 mt-8 border-2 border-accentTwo px-12 text-lg font-semibold rounded-lg hover:text-accentOne hover:border-accentOne"
          >
            View Gallery
          </button>
          <Modals
            isOpen={isModalOpen}
            onClose={closeModal}
            image1={Image1111}
            image2={Image2111}
            image3={Image3111}
            image4={Image4111}
            image5={Image5111}
            image6={Image6111}
          />
        </div>
      </div>
    </div>
  );
};

export const ProjectFour = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-20 items-center">
        <div className="">
          <p className="mb-4">Donations</p>
          <p className="lg:text-4xl text-2xl font-bold">
            Donation to Goebay Training Institute.
          </p>
          {/* <p className="lg:mt-6 mt-2 text-lg">
            We envision a just society, free from discrimination. Our programmes
            for PLWDs aim at solving;<br></br>
            <span className="font-semibold">#SDG 10: Reduced inequalities</span>
          </p> */}
          <button
            onClick={openModal}
            className="text-accentTwo py-4 mt-8 border-2 border-accentTwo px-12 text-lg font-semibold rounded-lg hover:text-accentOne hover:border-accentOne"
          >
            View Gallery
          </button>
          <Modals
            isOpen={isModalOpen}
            onClose={closeModal}
            image1={image211}
            image2={image222}
            image3={image233}
            image4={image244}
            image5={image255}
            image6={image266}
          />
        </div>
        <img src={ProjectImageFour} alt="" className="w-full lg:w-auto" />
      </div>
    </div>
  );
};
