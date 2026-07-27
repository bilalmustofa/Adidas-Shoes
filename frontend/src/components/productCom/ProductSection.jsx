import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "./ProductCard.jsx";

function ProductSection(props) {
  return (
    <>
        <section className="max-w-7xl mx-auto px-8 py-10">

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-bold">{props.title}</h2>

            <div className="flex items-center gap-3"> 
              <FiChevronLeft size={25} className="text-2xl hover:text-gray-500 transition-colors cursor-pointer" />
              <FiChevronRight size={25} className="text-2xl hover:text-gray-500 transition-colors cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-8 mx-auto max-w-7xl">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>

        </section>
    </>
  )
}

export default ProductSection;