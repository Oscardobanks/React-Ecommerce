import {
  faArrowLeft,
  faArrowRight,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Frame604 from "../assets/Frame 604.png";
import Frame601 from "../assets/Frame 601.png";
import Frame602 from "../assets/Frame 602.png";
import Frame607 from "../assets/Frame 607.png";
import Frame608 from "../assets/Frame 608.png";
import Frame609 from "../assets/Frame 609.png";
import Frame616 from "../assets/Frame 616.png";
import Frame617 from "../assets/Frame 617.png";
import fiveStar from "../assets/Five star.png";
import fourStar from "../assets/Four Star.png";
import threeStar from "../assets/Three Star.png";
import fourHalfStar from "../assets/Four Half Star.png";
import color1 from "../assets/color 1.png";
import color2 from "../assets/color 2.png";
import color3 from "../assets/color 3.png";
import color4 from "../assets/color 4.png";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartSlice";

const OurProducts = () => {
  const dispatch = useDispatch();

  const Products = [
    {
      id: uuidv4(),
      name: "Bread Dry Dog Food",
      price: 100,
      stars: threeStar,
      number: "(35)",
      image: Frame604,
    },
    {
      id: uuidv4(),
      name: "CANON EOS DSLR Camera",
      price: 360,
      stars: fourStar,
      number: "(95)",
      image: Frame601,
    },
    {
      id: uuidv4(),
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      stars: fiveStar,
      number: "(325)",
      image: Frame602,
    },
    {
      id: uuidv4(),
      name: "Curology Product Set",
      price: 500,
      stars: fourStar,
      number: "(145)",
      image: Frame607,
    },
  ];

  const newProducts = [
    {
      id: uuidv4(),
      name: "Kids Electric Car",
      new: "New",
      price: 960,
      stars: fiveStar,
      number: "(65)",
      image: Frame608,
      color: color1,
    },
    {
      id: uuidv4(),
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      stars: fiveStar,
      number: "(35)",
      image: Frame609,
      color: color2,
    },
    {
      id: uuidv4(),
      name: "GP11 Shooter USB Gamepad",
      new: "New",
      price: 660,
      stars: fourHalfStar,
      number: "(55)",
      image: Frame616,
      color: color3,
    },
    {
      id: uuidv4(),
      name: "Quilted Satin Jacket",
      price: 660,
      stars: fourHalfStar,
      number: "(55)",
      image: Frame617,
      color: color4,
    },
  ];
  
  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2">
        <span className="bg-red-700 rounded ps-2 pe-1 py-3 pt-4"></span>
        <span className="text-red-600 text-sm font-semibold">Our Products</span>
      </div>
      <div className="flex justify-between gap-5 items-center mt-2">
        <div className="flex">
          <p className="text-3xl font-bold capitalize">explore Our Products</p>
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

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-10 mt-10">
        {Products.map((Product, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="card h-full relative">
              <div className="h-full bg-[#F5F5F5] p-2">
                <div className="flex justify-end">
                  <div className="flex flex-col gap-2 z-10">
                    <div className="rounded-full p-2 py-1 bg-white">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="rounded-full p-2 py-1 bg-white">
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img src={Product.image} alt="" className="mb-5 -mt-10" />
                </div>
              </div>
              <div className="intro hidden absolute left-0 right-0 bottom-0 transition-transform duration-700">
                <button onClick={() => addItemToCart(Product)} className="w-full py-1 bg-black text-white">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md font-bold">{Product.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-red-600 font-medium">${Product.price}</p>
                <div className="flex gap-2">
                  <img src={Product.stars} alt="" />
                  <p className="text-gray-400 font-semibold">
                    {Product.number}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {newProducts.map((Product, index) => (
          <div key={index} className="flex flex-col gap-3 mt-10">
            <div className="card h-full relative">
              <div className="h-full bg-[#F5F5F5] p-2">
                <div className="flex justify-between">
                  <div className="bg-[#00FF66] text-white px-2 h-full rounded-[4px]">
                    {Product.new}
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
                  <img src={Product.image} alt="" className="mb-5 -mt-10" />
                </div>
              </div>
              <div className="intro hidden absolute left-0 right-0 bottom-0 transition-transform duration-700">
                <button onClick={() => addItemToCart(Product)} className="w-full py-1 bg-black text-white">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md font-bold">{Product.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-md text-red-700 font-medium">
                  ${Product.price}
                </p>
                <div className="flex gap-2">
                  <img src={Product.stars} alt="" />
                  <p className="text-gray-400 font-semibold">
                    {Product.number}
                  </p>
                </div>
              </div>
              <img src={Product.color} alt="" width={40} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="text-white bg-red-700 px-10 py-2 mt-16 rounded-sm">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
