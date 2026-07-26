import { FiHeart } from "react-icons/fi";
import blackShoes from '../../assets/images/product-imgs/blackShoes.png';

function ProductCard() {
  return (
    <>
        <div>
            <div className="relative bg-gray-100 cursor-pointer">
                <img src={blackShoes} alt="Shoes" />
                <button className="absolute top-4 right-4 text-2xl cursor-pointer">
                    <FiHeart />
                </button>
            </div>

            <div  className="mt-3">
                <h4 className="font-semibold">$170.00</h4>

                <p className="text-gray-500 text-sm">
                    Free Shipping
                </p>

                <h3 className="font-bold mt-4">
                    Sneaker X
                </h3>

                <p className="text-gray-500">
                    Sneaker Style
                </p>
            </div>
        </div>
    </>
  )
}

export default ProductCard;
