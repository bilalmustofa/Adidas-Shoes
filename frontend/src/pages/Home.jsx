import Header from "../sections/Headers/Header.jsx"
import Hero from "../sections/hero/Hero.jsx"
import RecommendProduct from "../sections/recommendProduct/RecommendProduct.jsx";
import Product from "../sections/products/Product.jsx";
import Promotion from "../sections/promotion/Promotion.jsx";
import History from "../sections/history/History.jsx";
import MostInteresting from "../sections/MostInteresting/MostInteresting.jsx";
import Footer from "../sections/footer/Footer.jsx";


function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Product/>
        <Promotion/>
        <RecommendProduct/>
        <History/>
        <MostInteresting/>
        <Footer/>
    </>
  )
}

export default Home;