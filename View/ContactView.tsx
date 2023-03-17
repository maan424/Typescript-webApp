import AppLogo from "../components/Header_logo";
import AppMenu from "../components/Header_menu";
import AppSearch from "../components/Header_search";
import AppFooter from "../components/Footer";
import AppFormPage from "../components/Form_page";
import Home from "../components/HomeContact";


const  Contact : React.FC = () => {
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
        <Home/>
        <AppFormPage/>  
        <AppFooter/>
        </>

    );
  }
  
  export default Contact;