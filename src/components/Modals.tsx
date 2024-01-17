import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}

const Modals: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-textOne bg-opacity-70 overflow-y-auto h-full w-full z-50">
      <div
        className="relative top-20 lg:mx-auto border mx-4 lg:w-3/4 shadow-lg rounded-md bg-textThree"
        ref={modalRef}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modals;
