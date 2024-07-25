import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Frame605 from "../assets/Frame 605.png";
import Frame606 from "../assets/Frame 606.png";
import Frame610 from "../assets/Frame 610.png";
import Frame612 from "../assets/Frame 612.png";
import fiveStar from "../assets/Five star.png";
import fourHalfStar from "../assets/Four Half Star.png";
import { v4 as uuidv4 } from 'uuid';
import { addToCart } from "../actions/cartSlice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../actions/wishlistSlice";
import PropTypes from 'prop-types';

const BestSellingProducts = ({setShowToast, setShowCardToast}) => {
  const dispatch = useDispatch();

  BestSellingProducts.propTypes = {
    setShowToast: PropTypes.func.isRequired,
    setShowCardToast: PropTypes.func.isRequired,
  };

  const products = [
    {
      id: uuidv4(),
      name: "The north coat",
      percent: "-40%",
      price: 260,
      strikedPrice: 360,
      stars: fiveStar,
      number: "(65)",
      image: Frame605,
    },
    {
      id: uuidv4(),
      name: "Gucci duffle bag",
      percent: "-35%",
      price: 960,
      strikedPrice: 1160,
      stars: fourHalfStar,
      number: "(65)",
      image: Frame606,
    },
    {
      id: uuidv4(),
      name: "RGB liquid CPU Cooler",
      percent: "-30%",
      price: 160,
      strikedPrice: 170,
      stars: fourHalfStar,
      number: "(99)",
      image: Frame610,
    },
    {
      id: uuidv4(),
      name: "Small BookShelf",
      percent: "-25%",
      price: 375,
      strikedPrice: "",
      stars: fiveStar,
      number: "(99)",
      image: Frame612,
    },
  ];
  
  const addItemToCart = (product) => {
    dispatch(addToCart(product));
    setShowCardToast((state) => !state);
  }
  
  const addItemToWishlist = (product) => {
    dispatch(addToWishlist(product));
    setShowToast((state) => !state);
  }

  return (
    <div>
      <section className="mt-20">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-red-700 rounded ps-2 pe-1 py-3 pt-4"></span>
            <span className="text-red-600 text-sm font-semibold">
              This Month
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-10">
              <p className="text-3xl font-bold">Best Selling Products</p>
            </div>
            <button className="text-white bg-red-700 sm:px-10 px-5 py-2 rounded-sm">
              View All
            </button>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-10 mt-10">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="card h-full relative">
                <div className="h-full bg-[#F5F5F5] p-2">
                  <div className="flex justify-end">
                    <div className="flex flex-col gap-2 z-10">
                    <button onClick={() => addItemToWishlist(product)} className="rounded-full p-2 py-1 bg-white">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                      <button className="rounded-full p-2 py-1 bg-white">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={product.image} alt="" className="mb-5 -mt-10" />
                  </div>
                </div>
                <div className="intro hidden absolute left-0 right-0 bottom-0 transition-transform duration-700">
                  <button onClick={() => addItemToCart(product)} className="w-full py-1 bg-black text-white">
                    Add To Cart
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
      </section>
    </div>
  );
};

export default BestSellingProducts;
