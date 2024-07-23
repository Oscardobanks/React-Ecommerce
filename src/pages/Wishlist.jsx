import Footer from "../layout/footer";
import {
  faEye,
  faShoppingCart,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fiveStar from "../assets/Five star.png";
import Frame602 from "../assets/Frame 602.png";
import Frame603 from "../assets/Frame 603.png";
import Frame606 from "../assets/Frame 606.png";
import Frame610 from "../assets/Frame 610.png";
import Frame611 from "../assets/Frame 611.png";
import Frame613 from "../assets/Frame 613.png";
import Frame616 from "../assets/Frame 616.png";
import Frame617 from "../assets/Frame 617.png";
import HomeNavbar from "../layout/homeNavbar";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();

  const Products = [
    {
      name: "Gucci duffle bag",
      percent: "-35%",
      price: "$960",
      strikedPrice: "$1160",
      image: Frame606,
    },
    {
      name: "RGB liquid CPU Cooler",
      price: "$1960",
      image: Frame610,
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price: "$550",
      image: Frame616,
    },
    {
      name: "Quilted Satin Jacket",
      price: "$750",
      image: Frame617,
    },
  ];

  const newProducts = [
    {
      name: "ASUS FHD Gaming Laptop",
      percent: "-35%",
      price: "$960",
      strikedPrice: "$1160",
      stars: fiveStar,
      number: "(65)",
      image: Frame602,
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: "$1160",
      stars: fiveStar,
      number: "(65)",
      image: Frame613,
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      new: "New",
      price: "$560",
      stars: fiveStar,
      number: "(65)",
      image: Frame611,
    },
    {
      name: "AK-900 Wired Keyboard",
      price: "$200",
      stars: fiveStar,
      number: "(65)",
      image: Frame603,
    },
  ];

  const showDetails = () => {
    newProducts.map((product) => {
      if (product.name === "HAVIT HV-G92 Gamepad") {
        navigate("/detail");
      }
    });
  };

  return (
    <div>
      <HomeNavbar />

      <div className="mainContainer">
        <div className="flex items-center justify-between mt-20  mb-12">
          <p className="text-lg font-semibold">Wishlist (4)</p>
          <button className="text-black font-bold bg-white border-2 rounded-sm py-2 px-10">
            Move All To Bag
          </button>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-10 mt-8">
          {Products.map((Product, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="card h-full relative">
                <div className="h-full bg-[#F5F5F5] p-2">
                  <div className="flex justify-between items-center">
                    <div className="bg-red-700 text-white px-2 h-full rounded-sm">
                      {Product.percent}
                    </div>
                    <div className="ms-32 z-10">
                      <div className="rounded-full p-2 py-1 bg-white">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={Product.image} alt="" className="mb-5 -mt-5" />
                  </div>
                </div>
                <div className="intro hidden absolute left-0 right-0 bottom-0 transition-transform duration-700">
                  <div className="flex gap-2 items-center w-full py-1 justify-center bg-black text-white cursor-pointer">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>Add To Cart</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-md font-bold">{Product.name}</p>
                <div className="flex gap-2">
                  <p className="text-red-600 font-medium">{Product.price}</p>
                  <p className="text-gray-400 font-medium line-through">
                    {Product.strikedPrice}
                  </p>
                </div>
                <div className="flex gap-2">
                  <img src={Product.stars} alt="" />
                  <p className="text-gray-400 font-semibold">
                    {Product.number}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 mb-12">
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <span className="bg-red-700 rounded ps-2 pe-1 py-5 pt-4"></span>
              <span className="text-lg font-semibold">Just For You</span>
            </div>
            <button className="text-black font-bold bg-white border-2 rounded-sm py-2 px-10">
              See All
            </button>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-10 mt-8 mb-24">
          {newProducts.map((Product, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="card h-full relative">
                <div className="h-full bg-[#F5F5F5] p-2">
                  <div className="flex justify-between items-center">
                    {Product.percent ? (
                      <div className="bg-red-700 text-white px-2 h-full rounded-[4px]">
                        {Product.percent}
                      </div>
                    ) : (
                      <div className="bg-[#00FF66] text-white px-2 h-full rounded-[4px]">
                        {Product.new}
                      </div>
                    )}
                    <div className="ms-32 z-10">
                      <div onClick={showDetails} className="rounded-full p-2 py-1 bg-white cursor-pointer">
                        <FontAwesomeIcon icon={faEye} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={Product.image} alt="" className="mb-5 -mt-5" />
                  </div>
                </div>
                <div className="intro hidden absolute left-0 right-0 bottom-0 transition-transform duration-700">
                  <div className="flex gap-2 items-center w-full py-1 justify-center bg-black text-white cursor-pointer">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>Add To Cart</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-md font-bold">{Product.name}</p>
                <div className="flex gap-2">
                  <p className="text-red-600 font-medium">{Product.price}</p>
                  <p className="text-gray-400 font-medium line-through">
                    {Product.strikedPrice}
                  </p>
                </div>
                <div className="flex gap-2">
                  <img src={Product.stars} alt="" />
                  <p className="text-gray-400 font-semibold">
                    {Product.number}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
