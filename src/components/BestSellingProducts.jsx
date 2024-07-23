import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Frame605 from "../assets/Frame 605.png";
import Frame606 from "../assets/Frame 606.png";
import Frame610 from "../assets/Frame 610.png";
import Frame612 from "../assets/Frame 612.png";
import fiveStar from "../assets/Five star.png";
import fourHalfStar from "../assets/Four Half Star.png";

const BestSellingProducts = () => {
  const flashSales = [
    {
      name: "The north coat",
      percent: "-40%",
      price: "$260",
      strikedPrice: "$360",
      stars: fiveStar,
      number: "(65)",
      image: Frame605,
    },
    {
      name: "Gucci duffle bag",
      percent: "-35%",
      price: "$960",
      strikedPrice: "$1160",
      stars: fourHalfStar,
      number: "(65)",
      image: Frame606,
    },
    {
      name: "RGB liquid CPU Cooler",
      percent: "-30%",
      price: "$160",
      strikedPrice: "$170",
      stars: fourHalfStar,
      number: "(99)",
      image: Frame610,
    },
    {
      name: "Small BookShelf",
      percent: "-25%",
      price: "$375",
      strikedPrice: "",
      stars: fiveStar,
      number: "(99)",
      image: Frame612,
    },
  ];

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
          {flashSales.map((flashSale, index) => (
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
                    <img src={flashSale.image} alt="" className="mb-5 -mt-10" />
                  </div>
                </div>
                <div className="intro hidden absolute left-0 right-0 bottom-0 transition-transform duration-700">
                  <div className="w-full py-1 text-center bg-black text-white cursor-pointer">
                    Add To Cart
                  </div>
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
      </section>
    </div>
  );
};

export default BestSellingProducts;
