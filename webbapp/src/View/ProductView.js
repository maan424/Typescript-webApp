import AppLogo from "../components/Header_logo";
import AppMenu from "../components/Header_menu";
import AppSearch from "../components/Header_search";
import AppFooter from "../components/Footer";

import "./ProductView.css";
import ClickButto from "../components/ShopCart";
import HomePro from "../components/HomeProduct";


const  Product= () => {
    return (
        <>
        <header >
        <div className = "main-menu" >
            <div className = "flex-container" >
              <AppLogo/>
              <AppMenu/> 
              <AppSearch/>  
            </div>
        </div>         
        </header> 
        <HomePro/>
        <ClickButto/>
        <AppFooter/>
        </>

    );
  }
 
  export default Product;