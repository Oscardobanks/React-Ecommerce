import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import HomeNavbar from "../layout/homeNavbar";
import Frame611 from "../assets/Frame 611.png";
import Frame613 from "../assets/Frame 613.png";
import { useState } from "react";

const Cart = () => {
  const [quantities, setQuantities] = useState({
    0: 1,
    1: 1,
  });

  const CardContent = [
    {
      id: 0,
      image: Frame613,
      name: "LCD Monitor",
      price: 650,
    },
    {
      id: 1,
      image: Frame611,
      name: "H1 Gamepad",
      price: 650,
    },
  ];

  const handleQuantityChange = (index, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: parseInt(newQuantity),
    }));
  };

  const totalAmount = CardContent.reduce((total, content) => {
    return total + content.price * quantities[content.id];
  }, 0);

  return (
    <div>
      <HomeNavbar active={""} />

      <div className="mainContainer">
        <div className="flex gap-2 my-16 font-medium">
          <Link to="/" className="text-gray-300">
            Home
          </Link>
          <p className="text-gray-300">/</p>
          <p className="text-black">Cart</p>
        </div>

        <table className="w-full">
          <div className="flex flex-col gap-5">
            <thead>
              <tr className="shadow flex justify-between sm:px-10 px-2 py-2 font-semibold">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {CardContent.map((content) => (
                <tr
                  key={content.id}
                  className="shadow flex items-center sm:px-10 px-2 py-2 font-semibold"
                >
                  <td className="flex sm:flex-row flex-col sm:items-center gap-2 w-full">
                    <img src={content.image} alt="" width={40} />
                    <p>{content.name}</p>
                  </td>

                  <td className="w-full">${content.price}</td>

                  <td className="w-full">
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      min={0}
                      value={quantities[content.id]}
                      onChange={(e) =>
                        handleQuantityChange(content.id, e.target.value)
                      }
                      className="w-16"
                    />
                  </td>

                  <td>${content.price * quantities[content.id]}</td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>

        <div className="flex items-center justify-between gap-5 mt-5 mb-16">
          <button className="text-black font-bold bg-white border-2 rounded-sm py-2 px-10">
            Return To Shop
          </button>
          <button className="text-black font-bold bg-white border-2 rounded-sm py-2 px-10">
            Update Cart
          </button>
        </div>

        <div className="flex lg:flex-row flex-col gap-5 justify-between pb-24">
          <div className="flex md:flex-row flex-col md:gap-2 gap-4 h-fit">
            <input
              type="text"
              name="coupon"
              id="coupon"
              placeholder="Coupon Code"
            />
            <button className="text-white bg-red-700 rounded-sm px-10 py-2">
              Apply Coupon
            </button>
          </div>
          <div className="flex flex-col gap-2 md:w-96 w-80 border-2 border-black p-5">
            <p className="text-lg font-semibold">Cart Total</p>
            <div className="flex justify-between">
              <p className="font-medium">Subtotal:</p>
              <p className="font-medium">${totalAmount}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="font-medium">Shipping:</p>
              <p className="font-medium">Free</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="font-medium">Total:</p>
              <p className="font-medium">${totalAmount}</p>
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
