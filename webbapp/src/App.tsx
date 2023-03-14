import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './View/HomeView';
import Contact from './View/ContactView';
import NotFound from './View/NotFoundView';
import Product from './View/ProductView';


function App() {
  return (
    < BrowserRouter>
      <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </ BrowserRouter>  
    
  );
}
export default App;
