import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import HomeNavbar from "../layout/homeNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faMinus,
  faPlus,
  faShippingFast,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Frame611 from "../assets/Frame 611.png";
import Frame603 from "../assets/Frame 603.png";
import Frame613 from "../assets/Frame 613.png";
import Frame610 from "../assets/Frame 610.png";
import Frame895 from "../assets/Frame 895.png";
import Frame896 from "../assets/Frame 896.png";
import Frame897 from "../assets/Frame 897.png";
import Frame919 from "../assets/Frame 919.png";
import image63 from "../assets/image 63.png";
import fiveStar from "../assets/Five star.png";
import fourStar from "../assets/Four Star.png";
import fourHalfStar from "../assets/Four Half Star.png";
import { useState } from "react";

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(0);

    const addQuantity = () => {
        setQuantity(quantity + 1);
    }

    const reduceQuantity = () => {
        if(quantity == 0){
            setQuantity(0)
        } else {
            setQuantity(quantity - 1);
        }
    }

  const ProductDetails = [
    { image: Frame895 },
    { image: Frame896 },
    { image: Frame897 },
    { image: Frame919 },
  ];

  const items = [
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
      name: "RGB liquid CPU Cooler",
      price: "$160",
      strikedPrice: "$170",
      stars: fourHalfStar,
      number: "(99)",
      image: Frame610,
    },
  ];

  return (
    <div>
      <HomeNavbar active={""} />

      <div className="mainContainer">
        <div className="flex gap-2 my-16 font-medium">
          <Link to="/account" className="text-gray-300">
            Account
          </Link>
          <p className="text-gray-300">/</p>
          <p className="text-gray-300">Gaming</p>
          <p className="text-gray-300">/</p>
          <p className="text-black">Havic HV G-92 Gamepad</p>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col gap-3 w-60">
            {ProductDetails.map((product, index) => (
              <img key={index} src={product.image} alt="" className="h-full w-full" />
            ))}
          </div>
          <div className="flex justify-center items-center w-full bg-[#F5F5F5]">
            <img src={image63} alt="" className="h-fit" />
          </div>
          <div className="ml-16">
            <p className="text-2xl font-bold">Havic HV G-92 Gamepad</p>
            <div className="flex gap-2 mt-2">
              <img src={fourStar} alt="" />
              <p className="text-gray-400 font-semibold">
                (150 Reviews)
              </p>
              <p className="text-gray-400 font-semibold">|</p>
              <p className="text-green-400 font-semibold">In Stock</p>
            </div>
            <p className="text-xl my-3">$192.00</p>
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>

            <hr className="my-5 border-2" />

            <div className="flex gap-10">
              <p className="text-lg">Colours:</p>
              <img src="" alt="" />
            </div>
            <div className="flex items-center gap-10 my-5">
              <p className="text-lg">Size:</p>
              <div className="flex gap-5">
                <button className="border font-semibold rounded w-9 p-2 focus:text-white focus:bg-red-700">
                  XS
                </button>
                <button className="border font-semibold rounded w-9 p-2 focus:text-white focus:bg-red-700">
                  S
                </button>
                <button className="border font-semibold rounded w-9 p-2 focus:text-white focus:bg-red-700">
                  M
                </button>
                <button className="border font-semibold rounded w-9 p-2 focus:text-white focus:bg-red-700">
                  L
                </button>
                <button className="border font-semibold rounded w-9 p-2 focus:text-white focus:bg-red-700">
                  XL
                </button>
              </div>
            </div>
            <div className="flex gap-3 mb-10">
              <div className="border rounded flex divide-x">
                <button onClick={reduceQuantity} className="p-2"><FontAwesomeIcon icon={faMinus} /></button>
                <p className="px-8 py-2">{quantity}</p>
                <button onClick={addQuantity} className="bg-red-700 text-white px-2"><FontAwesomeIcon icon={faPlus} /></button>
              </div>
              <button className="rounded bg-red-700 text-white px-10 py-2">
                Buy Now
              </button>
              <button className="border p-2 bg-white rounded">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
            <div className="border rounded flex flex-col divide-y">
              <div className="flex gap-2 items-center pt-5 p-3">
                <FontAwesomeIcon icon={faShippingFast} />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Free Delivery</p>
                  <p className="underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center pt-5 p-3">
                <FontAwesomeIcon icon={faSpinner} />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Return Delivery</p>
                  <p className="">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-40 mb-10">
          <span className="bg-red-700 rounded ps-2 pe-1 py-3 pt-4"></span>
          <span className="text-red-600 text-sm font-semibold">
            Related Item
          </span>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-10 mt-8 mb-32">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="card h-full relative">
                <div className="h-full bg-[#F5F5F5] p-2">
                  <div className="flex justify-between">
                    <div className="bg-red-700 text-white px-2 h-full rounded-[4px]">
                      {item.percent}
                    </div>
                    <div className="flex flex-col gap-2 ms-32 z-10">
                      <div className="rounded-full p-2 py-1 bg-white">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <div className="rounded-full p-2 py-1 bg-white">
                        <FontAwesomeIcon icon={faEye} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={item.image} alt="" className="mb-5 -mt-10" />
                  </div>
                </div>
                <div className="intro hidden absolute left-0 right-0 bottom-0 transition-transform duration-700">
                  <div className="w-full py-1 text-center bg-black text-white cursor-pointer">
                    Add To Cart
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-md font-bold">{item.name}</p>
                <div className="flex gap-2">
                  <p className="text-red-600 font-medium">{item.price}</p>
                  <p className="text-gray-400 font-medium line-through">
                    {item.strikedPrice}
                  </p>
                </div>
                <div className="flex gap-2">
                  <img src={item.stars} alt="" />
                  <p className="text-gray-400 font-semibold">{item.number}</p>
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

export default ProductDetail;
