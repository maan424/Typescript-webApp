
import "./Header_menu.css";

const menu : React.FC = () => {
    return (
<div className="main-menu">
  <div className="flex-container">
    <div className="topnav">
      <a className="nav-link" href="/">Home</a>
      <a className="nav-link" href="categories">Categories</a>
      <a className="nav-link" href="product">Products</a>
      <a className="nav-link" href="contact">Contacts</a>
    </div>
  </div>
</div>
    );
  }
  
  export default menu;