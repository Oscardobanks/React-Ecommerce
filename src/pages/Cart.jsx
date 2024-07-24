import { Link, useNavigate } from "react-router-dom";
import Footer from "../layout/footer";
import HomeNavbar from "../layout/homeNavbar";
import { useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    return initialQuantities;
  });

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: parseInt(newQuantity),
    }));
  };

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * quantities[item.id];
  }, 0);

  const goToHome = () => {
    navigate("/");
  };

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
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="shadow flex items-center sm:px-10 px-2 py-2 font-semibold"
                >
                  <td className="flex sm:flex-row flex-col sm:items-center gap-2 w-full">
                    <img src={item.image} alt="" width={40} />
                    <p>{item.name}</p>
                  </td>

                  <td className="w-full">${item.price}</td>

                  <td className="w-full">
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      min={0}
                      value={quantities[item.id]}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="w-16"
                    />
                  </td>

                  <td>${item.price * quantities[item.id]}</td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>

        <div className="flex items-center justify-between gap-5 mt-5 mb-16">
          <button
            onClick={goToHome}
            className="text-black font-bold bg-white border-2 rounded-sm py-2 px-10"
          >
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
