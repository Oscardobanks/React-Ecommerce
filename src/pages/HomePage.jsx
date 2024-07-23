import HomeNavbar from "../layout/homeNavbar";
import Banner from "../components/Banner";
import FlashSales from "../components/FlashSales";

import "../style/HomePage.css";
import Categories from "../components/Categories";
import BestSellingProducts from "../components/BestSellingProducts";
import EnhanceExperience from "../components/EnhanceExperience";
import OurProducts from "../components/OurProducts";
import NewArrivals from "../components/NewArrivals";
import Footer from "../layout/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faHeadset, faShippingFast } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const Cards = [
    {
      icon: faShippingFast,
      title: "fast and free delivery",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: faHeadset,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: faHeadphones,
      title: "money back guarantee",
      description: "We reurn money within 30 days",
    },
  ];
  return (
    <div>
      <HomeNavbar active={'home'} />

      <section className="mainContainer">
        <Banner />
        <FlashSales />
        <hr className="my-16" />
        <Categories />
        <hr className="my-16" />
        <BestSellingProducts />
        <EnhanceExperience />
        <OurProducts />
        <NewArrivals />
        <div className="flex md:flex-row flex-col gap-10 justify-evenly my-20">
          {Cards.map((card, index) => (
            <div key={index} className="flex flex-col text-center">
              <div className="bg-black w-fit p-1 px-2 mb-2 border-4 border-spacing-8 border-gray-300 rounded-full mx-auto">
                <FontAwesomeIcon icon={card.icon} className="text-white" />
              </div>
              <p className="text-xl uppercase font-semibold">{card.title}</p>
              <p className="text-sm">{card.description}</p>
            </div>
          ))} 
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
