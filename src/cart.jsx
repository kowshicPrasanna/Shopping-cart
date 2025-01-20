import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import deleteimg from "./assets/delete.svg";

function Cart() {
  const { cart, total, removeCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(233,226,197,1) 0%, rgba(243,223,164,1) 39%, rgba(246,217,136,1) 100%)",
      }}
    >
      <div className="bg-orange-300 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] p-8 rounded-lg shadow-lg">
        <h1 className="text-[2rem] pb-6 font-bold">Cart :</h1>
        <div>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-4 border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-gray-600">Rs. {item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center">
                  <button
                    onClick={() => decrementQuantity(index)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(index)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button onClick={() => removeCart(item, index)}>
                  <img
                    className="inline w-[1.5rem] h-[2rem] hover:brightness-0 hover:invert"
                    src={deleteimg}
                    alt="delete"
                  />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="pt-4 mt-8">
          <div className="flex items-center justify-between">
            <span className="font-bold">Total:</span>
            <span className="font-bold">Rs. {total}</span>
          </div>
        </div>

        {/* Back to Products Button */}
        <div className="mt-6 text-center">
          <Link to="/">
            <button className="px-6 py-3 bg-red-700 text-white rounded hover:bg-red-500">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
