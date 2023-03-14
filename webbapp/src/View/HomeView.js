import AppLogo from "../components/Header_logo";
import AppMenu from "../components/Header_menu";
import AppSearch from "../components/Header_search";
import AppShowcase from "../components/Showcase";
import AppTwoBigWindows from "../components/Two_big_windows";
import AppFourSupport from "../components/Four_support";
import AppFooter from "../components/Footer";
import Feature from "../components/FeatureProduct";
import LeftRi from "../components/LeftRightWindows";

const  Home= () => {
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
        <AppShowcase/> 
        <Feature/> 
        <AppTwoBigWindows/>
        <LeftRi/>
        <AppFourSupport/>
        <AppFooter/>
        </>

    );
  }
  
  export default Home;