import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Header} from './component/Header/Header';
import HeroSection from './component/HeroSection/HeroSection';
import PremiumHome from "./component/PremiumHome/PremiumHome";
import BestSell from './component/BestSell/BestSell';
 import ProductArray from './component/BestSell/ProductArray';
import WinterDiscount from './component/WinterDiscount/WinterDiscount';
import AllProductArray from './component/AllProduct/AllProductArray';
import Footer from './component/Footer/Footer';
import { useState } from 'react';
import HeroSection2 from "./component/hero2.js/HeroSection2";
function App() {

  let [showData,setShowData]=useState(null);
  let [showCount,setShowCount]=useState(0);


  let handleData=(data)=>
  {
    setShowData(data)

  }

  let countFun=()=>
  {
    setShowCount(showCount+1)
  }

  let increment=()=>
  {
    setShowCount(showCount+1)
  }

  let decrement=()=>
  {
    setShowCount(showCount-1)
  }

  let goBack=()=>
  {
    setShowData(null)
  }

  return (
    <>
      <Header countValue={showCount}/>
    {
      showData?
      <div className="singleProductDetails">
        <div className="container">
        <HeroSection2 />
          <div className="row">
            <div className="col-md-7">
            <img width={500} src={showData.product.img} alt="" />
            </div>
            <div className="col-md-5">
              <h1>{showData.product.title}</h1>
              <h2> <strong>Price: </strong> {showData.product.actualPrice}</h2>
              <h6> <strong>Category: </strong> { showData.product.category}</h6>

              <div className="widthDiv">
                <h3>{showCount}</h3>
                  <div className="incDecBtn">
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                  </div>
              </div>
              <button onClick={goBack}>Go Back</button>
            </div>
          </div>
          <BestSell handleData={handleData} arrayProduct={AllProductArray} title="Related product"/>
        </div>


      </div> :

      <div className="allData">
        <HeroSection/>
        <PremiumHome />
        <BestSell handleData={handleData} count={countFun} arrayProduct={ProductArray} title="Best Sell" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
        <WinterDiscount/>
        <BestSell handleData={handleData} arrayProduct={AllProductArray} title="All Products" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
      </div>
      }
  
        <Footer/> 

    </>
  )
}

export default App
