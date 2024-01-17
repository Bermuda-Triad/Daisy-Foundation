import { useState } from "react";
import Modals from "../components/Modals";

import ProjectImageOne from "../assets/images/Projects/front-image-1.png";
import ProjectImageTwo from "../assets/images/Projects/front-image-2.png";

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
