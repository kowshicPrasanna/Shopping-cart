import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext"; // Import CartContext
import bag from "./assets/bag.svg";
import cartimg from "./assets/cart.svg";

function Product() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useContext(CartContext); // Use context

  const fetchProducts = async () => {
    const fashionProducts = await fetch(
      "https://676abe38863eaa5ac0df7bd3.mockapi.io/crud/fashion"
    );
    const fashionProductResponse = await fashionProducts.json();
    setProducts(fashionProductResponse);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(45deg, rgba(235,234,228,1) 20%, rgba(237,211,182,1) 100%)",
      }}
    >
      <div className="max-w-[90%] mx-auto">
        <nav className="flex justify-between py-[1rem]">
          <span className="font-bold text-indigo-950 text-[2rem]">
            Fashion Store
          </span>
          <span>
            <Link to="/cart">
              <button>
                <img
                  className="w-[2rem] hover:brightness-0 hover:invert"
                  src={bag}
                  alt=""
                />
              </button>
            </Link>
            <p className="inline">({cart.length})</p>
          </span>
        </nav>
        <div className="flex flex-wrap justify-between gap-[2rem] pb-[3rem]">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="shadow-lg flex flex-col p-[1rem]"
              >
                <img
                  className="w-[15rem] h-[16rem]"
                  src={product.image}
                  alt=""
                />
                <span className="py-[1rem]">{product.name}</span>
                <span className="flex justify-between">
                  <p className="text-[0.9rem] text-gray-500">
                    $ {product.price}
                  </p>
                  <button onClick={() => addToCart(product)}>
                    <img className="w-[1.5rem]" src={cartimg} alt="" />
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
