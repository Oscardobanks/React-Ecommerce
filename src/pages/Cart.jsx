import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import HomeNavbar from "../layout/homeNavbar";
import Frame611 from "../assets/Frame 611.png";
import Frame613 from "../assets/Frame 613.png";
import { useState } from "react";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  let [sum, setSum] = useState(0);

  const CardContent = [
    {
      image: Frame613,
      name: "LCD Monitor",
      price: 650,
    },
    {
      image: Frame611,
      name: "H1 Gamepad",
      price: 650,
    },
  ];

  const subTotal = () => {
    setSum(CardContent.map(content => sum += content.price))
  }

  return (
    <div>
      <HomeNavbar active={''} />

      <div className="mainContainer">
        <div className="flex gap-2 my-16 font-medium">
          <Link to="/" className="text-gray-300">
            Home
          </Link>
          <p className="text-gray-300">/</p>
          <p className="text-black">Cart</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="shadow flex justify-between px-10 py-2 font-semibold">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {CardContent.map((content, index) => (
            <div
              key={index}
              className="shadow flex justify-between px-10 py-2 font-semibold"
            >
              <div className="flex items-center gap-2">
                <img src={content.image} alt="" width={40} />
                <p>{content.name}</p>
              </div>
              <p>${content.price}</p>
              <input type="number" name="quantity" id="quantity" value={quantity} onChange={(val) => setQuantity(val.target.value)} className="w-16" />
              <p>{content.price * quantity}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-5 mb-16">
          <button className="text-black font-bold bg-white border-2 rounded-sm py-2 px-10">
            Return To Shop
          </button>
          <button className="text-black font-bold bg-white border-2 rounded-sm py-2 px-10">
            Update Cart
          </button>
        </div>

        <div className="flex justify-between pb-24">
          <div className="flex gap-2 h-fit">
            <input type="text" name="coupon" id="coupon" placeholder="Coupon Code" />
            <button className="text-white bg-red-700 rounded-sm px-10 py-2">
              Apply Coupon
            </button>
          </div>
          <div className="flex flex-col gap-2 w-96 border-2 border-black p-5">
            <p className="text-lg font-semibold">Cart Total</p>
            <div className="flex justify-between">
              <p className="font-medium">Subtotal:</p>
              <p className="font-medium">${subTotal}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="font-medium">Shipping:</p>
              <p className="font-medium">Free</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="font-medium">Total:</p>
              <p className="font-medium">${subTotal}</p>
            </div>
            <button className="text-white bg-red-700 rounded-sm px-10 py-2 w-fit mx-auto">
              Process to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
