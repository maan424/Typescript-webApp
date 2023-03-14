import React from "react";
import "./Showcase.css";


const showcase = () => {
    return (
<div className="_showcase">
  <div className="flex-container">
    <div>
    <img src="Images/img-2.svg" alt="two people standing" />
    </div>
    <div className="showcase-body">
      <h1>
        <strong>Sale Up</strong>
      </h1>
      <h1>
        <strong>To 50% Off</strong>
      </h1>
      <p>lorem Ipsum is simply dummy. Lmmy text ever since the</p>    
      <button className="btn btn-secondary" >Shop Now</button>
         
    </div>
    <div>
      <img src="Images/img-1.svg" alt="two people standing" />
    </div>
  </div>
</div>
    );
  }
  
  export default showcase;