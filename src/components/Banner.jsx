import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Frame560 from '../assets/Frame 560.png'

const Banner = () => {
  return (
    <div>
      <section className="md:flex gap-10">
          <div className="flex flex-col gap-2 w-60 md:border-r-2 pt-8 pr-10 border-gray-300">
            <div className="flex justify-between items-center">
              <p>Woman&#39;s Fashion</p>
              <FontAwesomeIcon
                icon={faChevronRight}
              />
            </div>
            <div className="flex justify-between items-center">
              <p>Men&#39;s Fashion</p>
              <FontAwesomeIcon
                icon={faChevronRight}
              />
            </div>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby&#39;s & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
          </div>
          <div className="pt-8">
            <img src={Frame560} alt="" className="frame1"/>
          </div>
        </section>
    </div>
  )
}

export default Banner
