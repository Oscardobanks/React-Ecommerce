import {
  faArrowLeft,
  faArrowRight,
  faCamera,
  faComputer,
  faGamepad,
  faHeadphones,
  faMobilePhone,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = () => {
  const categories = [
    {
      name: "Phones",
      icon: faMobilePhone,
    },
    {
      name: "Computers",
      icon: faComputer,
    },
    {
      name: "SmartWatch",
      icon: faStopwatch,
    },
    {
      name: "Camera",
      icon: faCamera,
    },
    {
      name: "HeadPhones",
      icon: faHeadphones,
    },
    {
      name: "Gaming",
      icon: faGamepad,
    },
  ];

  const iconStyle = {
    width: "50px",
    height: "50px",
  };

  return (
    <div>
      <section className="mt-20">
        <div className="flex items-center gap-2">
          <span className="bg-red-700 rounded ps-2 pe-1 py-3 pt-4"></span>
          <span className="text-red-600 text-sm font-semibold">categories</span>
        </div>
        <div className="flex justify-between gap-5 items-center mt-2">
          <div className="flex">
            <p className="text-3xl font-bold">Browse By Category</p>
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
        <div className="mt-10 xl:flex grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 justify-between">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border-2 flex flex-col items-center gap-3 px-10 py-5 rounded hover:text-white hover:bg-red-700 xl:w-60"
            >
              <FontAwesomeIcon icon={category.icon} style={iconStyle} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
