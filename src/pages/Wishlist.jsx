"use client";

import Footer from "../layout/footer";
import {
  faEye,
  faShoppingCart,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";
import fiveStar from "../assets/Five star.png";
import Frame602 from "../assets/Frame 602.png";
import Frame603 from "../assets/Frame 603.png";
import Frame611 from "../assets/Frame 611.png";
import Frame613 from "../assets/Frame 613.png";
import HomeNavbar from "../layout/homeNavbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartSlice";
import { removeFromWishlist } from "../actions/wishlistSlice";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [showToast, setShowToast] = useState(false);
  const toastTimer = 2000;

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, toastTimer);
      return () => clearTimeout(timer);
    }
  }, [showToast, toastTimer]);

  const showDetails = () => {
    newproducts.map((product) => {
      if (product.name === "HAVIT HV-G92 Gamepad") {
        navigate("/detail");
      }
    });
  };

  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  const removeItemFromWishlist = (product) => {
    dispatch(removeFromWishlist(product));
    setShowToast((state) => !state);
  };

  const newproducts = [
    {
      name: "ASUS FHD Gaming Laptop",
      percent: "-35%",
      price: 960,
      strikedPrice: 1160,
      stars: fiveStar,
      number: "(65)",
      image: Frame602,
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: 1160,
      stars: fiveStar,
      number: "(65)",
      image: Frame613,
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      new: "New",
      price: 560,
      stars: fiveStar,
      number: "(65)",
      image: Frame611,
    },
    {
      name: "AK-900 Wired Keyboard",
      price: 200,
      stars: fiveStar,
      number: "(65)",
      image: Frame603,
    },
  ];

  return (
    <div>
      <HomeNavbar />
      {showToast && (
        <Toast className="fixed top-20 z-50 flex items-center gap-2 px-4 py-4 bg-red-600 text-white text-sm shadow-md right-10 sm:flex-row justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="font-bold">Item Removed Successfully!</p>
          </div>
          <HiX className="h-5 w-5" onClick={() => setShowToast(false)} />
        </Toast>
      )}

      <div className="mainContainer">
        {wishlistItems.length > 0 && (
          <div className="flex items-center justify-between mt-20  mb-12">
            <p className="text-lg font-semibold">
              Wishlist ({wishlistItems.length}){" "}
            </p>
            <button className="text-black font-bold bg-white border-2 rounded-sm py-2 px-10">
              Move All To Bag
            </button>
          </div>
        )}

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-10 mt-8">
          {wishlistItems.map((product, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="card h-full relative">
                <div className="h-full bg-[#F5F5F5] p-2">
                  <div className="flex justify-between items-center">
                    <div className="bg-red-700 text-white px-2 h-full rounded-sm">
                      {product.percent}
                    </div>
                    <div className="ms-32 z-10">
                      <button
                        onClick={() => removeItemFromWishlist(product)}
                        className="rounded-full p-2 py-1 bg-white"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={product.image} alt="" className="mb-5 -mt-5" />
                  </div>
                </div>
                <div className="intro hidden absolute left-0 right-0 bottom-0 transition-transform duration-700">
                  <button
                    onClick={() => addItemToCart(product)}
                    className="flex gap-2 items-center w-full justify-center py-1 bg-black text-white"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>Add To Cart</p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-md font-bold">{product.name}</p>
                <div className="flex gap-2">
                  <p className="text-red-600 font-medium">${product.price}</p>
                  <p className="text-gray-400 font-medium line-through">
                    ${product.strikedPrice}
                  </p>
                </div>
                <div className="flex gap-2">
                  <img src={product.stars} alt="" />
                  <p className="text-gray-400 font-semibold">
                    {product.number}
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
          {newproducts.map((product, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="card h-full relative">
                <div className="h-full bg-[#F5F5F5] p-2">
                  <div className="flex justify-between items-center">
                    {product.percent ? (
                      <div className="bg-red-700 text-white px-2 h-full rounded-[4px]">
                        {product.percent}
                      </div>
                    ) : (
                      <div className="bg-[#00FF66] text-white px-2 h-full rounded-[4px]">
                        {product.new}
                      </div>
                    )}
                    <div className="ms-32 z-10">
                      <div
                        onClick={showDetails}
                        className="rounded-full p-2 py-1 bg-white cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={product.image} alt="" className="mb-5 -mt-5" />
                  </div>
                </div>
                <div className="intro hidden absolute left-0 right-0 bottom-0 transition-transform duration-700">
                  <button
                    onClick={() => addItemToCart(product)}
                    className="flex gap-2 items-center w-full justify-center py-1 bg-black text-white"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>Add To Cart</p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-md font-bold">{product.name}</p>
                <div className="flex gap-2">
                  <p className="text-red-600 font-medium">${product.price}</p>
                  <p className="text-gray-400 font-medium line-through">
                    ${product.strikedPrice}
                  </p>
                </div>
                <div className="flex gap-2">
                  <img src={product.stars} alt="" />
                  <p className="text-gray-400 font-semibold">
                    {product.number}
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
