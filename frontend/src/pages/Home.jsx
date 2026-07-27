import Header from "../sections/Headers/Header.jsx"
import Hero from "../sections/hero/Hero.jsx"
import LikeProduct from "../sections/likeProduct/LikeProduct.jsx";
import Product from "../sections/products/Product.jsx";
import Promotion from "../sections/promotion/Promotion.jsx";


function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Product/>
        <Promotion/>
        <LikeProduct/>
    </>
  )
}

export default Home;