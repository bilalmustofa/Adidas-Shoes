import Header from "../sections/Headers/Header.jsx"
import Hero from "../sections/hero/Hero.jsx"
import RecommendProduct from "../sections/recommendProduct/RecommendProduct.jsx";
import Product from "../sections/products/Product.jsx";
import Promotion from "../sections/promotion/Promotion.jsx";


function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Product/>
        <Promotion/>
        <RecommendProduct/>
    </>
  )
}

export default Home;