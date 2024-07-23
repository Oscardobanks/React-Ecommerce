import {
  faArrowLeft,
  faArrowRight,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Frame611 from "../assets/Frame 611.png";
import Frame603 from "../assets/Frame 603.png";
import Frame613 from "../assets/Frame 613.png";
import Frame614 from "../assets/Frame 614.png";
import fiveStar from "../assets/Five star.png";
import fourStar from "../assets/Four Star.png";
import fourHalfStar from "../assets/Four Half Star.png";
import { useNavigate } from "react-router-dom";

const FlashSales = () => {
  const navigate = useNavigate();

  const flashSales = [
    {
      name: "HAVIT HV-G92 Gamepad",
      percent: "-40%",
      price: "$120",
      strikedPrice: "$160",
      stars: fiveStar,
      number: "(88)",
      image: Frame611,
    },
    {
      name: "AK-900 Wired Keyboard",
      percent: "-35%",
      price: "$960",
      strikedPrice: "$1160",
      stars: fourStar,
      number: "(75)",
      image: Frame603,
    },
    {
      name: "IPS LCD Gaming Monitor",
      percent: "-30%",
      price: "$370",
      strikedPrice: "$400",
      stars: fiveStar,
      number: "(99)",
      image: Frame613,
    },
    {
      name: "S-Series Comfort Chair",
      percent: "-25%",
      price: "$375",
      strikedPrice: "$400",
      stars: fourHalfStar,
      number: "(99)",
      image: Frame614,
    },
  ];

  const showDetails = () => {
    flashSales.map((flashSale) => {
      if (flashSale.name === "HAVIT HV-G92 Gamepad") {
        navigate("/detail");
      }
    });
  };

  return (
    <div>
      <section className="mt-20">
        <div className="flex items-center gap-2">
          <span className="bg-red-700 rounded ps-2 pe-1 py-3 pt-4"></span>
          <span className="text-red-600 text-sm font-semibold">
            Today&#39;s
          </span>
        </div>
        <div className="flex justify-between md:items-center items-start md:mt-0 mt-5">
          <div className="md:flex items-end gap-10">
            <p className="text-3xl font-bold">Flash Sales</p>
            <div className="flex items-end gap-2 md:mt-0 mt-5">
              <div className="flex flex-col">
                <span className="text-[10px]">Days</span>
                <span className="text-3xl font-bold">03</span>
              </div>
              <span className="text-red-600 text-xl pb-1">:</span>
              <div className="flex flex-col">
                <p className="text-[10px]">Hours</p>
                <p className="text-3xl font-bold">23</p>
              </div>
              <span className="text-red-600 text-xl pb-1">:</span>
              <div className="flex flex-col">
                <p className="text-[10px]">Minutes</p>
                <p className="text-3xl font-bold">19</p>
              </div>
              <span className="text-red-600 text-xl pb-1">:</span>
              <div className="flex flex-col">
                <p className="text-[10px]">Seconds</p>
                <p className="text-3xl font-bold">56</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-gray-100 rounded-full px-3 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="bg-gray-100 rounded-full px-3 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-10 mt-8">
          {flashSales.map((flashSale, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="card h-full relative">
                <div className="h-full bg-[#F5F5F5] p-2">
                  <div className="flex justify-between">
                    <div className="bg-red-700 text-white px-2 h-full rounded-[4px]">
                      {flashSale.percent}
                    </div>
                    <div className="flex flex-col gap-2 ms-32 z-10">
                      <div className="rounded-full p-2 py-1 bg-white">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <div
                        onClick={showDetails}
                        className="rounded-full p-2 py-1 bg-white cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={flashSale.image} alt="" className="mb-5 -mt-10" />
                  </div>
                </div>
                <div className="intro hidden absolute left-0 right-0 bottom-0 transition-transform duration-700">
                  <button className="w-full py-1 bg-black text-white">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-md font-bold">{flashSale.name}</p>
                <div className="flex gap-2">
                  <p className="text-red-600 font-medium">{flashSale.price}</p>
                  <p className="text-gray-400 font-medium line-through">
                    {flashSale.strikedPrice}
                  </p>
                </div>
                <div className="flex gap-2">
                  <img src={flashSale.stars} alt="" />
                  <p className="text-gray-400 font-semibold">
                    {flashSale.number}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="text-white bg-red-700 px-10 py-2 mt-16 rounded-sm">
            View All Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default FlashSales;
