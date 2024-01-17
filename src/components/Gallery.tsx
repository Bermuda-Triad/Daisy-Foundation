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

const Gallery = () => {
  return (
    <div>
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
  );
};

export default Gallery;
