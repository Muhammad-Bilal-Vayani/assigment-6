import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import PremiumHome from './Components/PremiumHome/PremiumHome';
import BestSell from './Components/BestSell/BestSell';
import WinterDiscount from './Components/WinterDiscount/WinterDiscount';
import ProductArray from './Components/BestSell/ProductArray';
import AllProductArray from './Components/AllProduct/AllProductArray';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <PremiumHome/>
      <BestSell arrayProduct={ProductArray} title="Best Sell" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
      <WinterDiscount/>
      <BestSell arrayProduct={AllProductArray} title="All Products" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
      <Footer/>
    </>
  )
}

export default App
