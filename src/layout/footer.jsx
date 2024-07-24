import qrcode from "../assets/qrcode.png";
import sendVector from '../assets/sendVector.png'
import facebookVector from '../assets/facebookVector.png'
import instagramVector from '../assets/instagramVector.png'
import linkedinVector from '../assets/linkedinVector.png'
import twitterVector from '../assets/twitterVector.png'
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className="mainContainer text-white bg-black py-5">
      <div className="footer lg:flex md:grid grid-cols-2 flex md:flex-row flex-col justify-between gap-10 py-10">
        <div className="flex flex-col footer-group relative">
          <h1>Exclusive</h1>
          <p className="font-semibold text-base pb-5">Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="relative mt-3 lg:w-full w-2/3">
            <input type="email" name="email" id="footer-email" placeholder="Enter your email" className="bg-transparent border-2 border-gray-300 p-2 rounded-sm pe-10 w-full" />
            <img src={sendVector} alt="" className="absolute right-2 top-3" />
          </div>
        </div>

        <div className="flex flex-col footer-group w-48">
          <h1>Support</h1>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="py-3">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="flex flex-col footer-group gap-2">
          <h1>Account</h1>
          <NavLink to="/account">My Account</NavLink>
          <NavLink to="/register">Login / Register</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/wishlist">Wishlist</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </div>

        <div className="flex flex-col footer-group gap-2">
          <h1>Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="flex flex-col footer-group">
          <h1>Download App</h1>
          <p className="text-gray-400 text-sm mb-2">
            Save $3 with App New User Only
          </p>
          <img src={qrcode} alt="" />
          <div className="flex gap-8 mt-5">
            <img src={facebookVector} alt="" />
            <img src={twitterVector} alt="" />
            <img src={instagramVector} alt="" />
            <img src={linkedinVector} alt="" />
          </div>
        </div>
      </div>
      <p className="text-center text-gray-700">
        &copy; Copyright Rimel 2022. All right reserved
      </p>
    </div>
  );
};

export default Footer;
