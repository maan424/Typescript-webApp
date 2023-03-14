import React,{useState} from 'react';



function ClickButto() { 
const [count1, setCount1]= useState(0);
const [count2, setCount2]= useState(0);
const [count3, setCount3]= useState(0);

function DecrementCount1(){
  if (count1 === 0){
    setCount1 = 0;
    setCount1.restore();
  }
  else{
    setCount1(count1-1).save();
    setCount1.restore();
  }
    
  }
  function IncrementCount1(){
       setCount1(count1+1).save();
       setCount1.restore();    
       
  }
  function DecrementCount2(){
    if (count2 === 0){
      setCount2 = 0;
      setCount2.restore();
    }
    else{
      setCount2(count2-1).save();
      setCount2.restore();
    }
  }
  function IncrementCount2(){
       setCount2(count2+1).save();
       setCount2.restore();    
       
  }
  function DecrementCount3(){
    if (count3 === 0){
      setCount3 = 0;
      setCount3.restore();
    }
    else{
      setCount3(count3-1).save();
      setCount3.restore();
    }
  }
  function IncrementCount3(){
       setCount3(count3+1).save();
       setCount3.restore();    
       
  }



  function Disapear(){  
  var answer = window.confirm("Are you sure to delete This Item?");
  if (answer) {
  const h1 = document.getElementById('thisdiv');
    h1.remove("Counter1");

 
 
}    
}
  return (
    <div className="thisdiv1">
        <div className="Counter1" id="thisdiv">
        <img src="../Images/justapicture.jpg" alt="imagesame" className="imgcart1"></img>
        <button className="button1" onClick={DecrementCount1}>-</button>
        <span class="spanclass">{count1}</span>
        <button className="button2" onClick={IncrementCount1}>+</button>
        <i className="fa-sharp fa-solid fa-trash fa-2xl trashclass" onClick={Disapear}></i>          
       </div>
       <div className="Counter2" id="thisdiv">
       <img src="../Images/justapicture.jpg" alt="imagesame" className="imgcart2"></img>
       <button className="button3" onClick={DecrementCount2}>-</button>
       <span class="spanclass">{count2}</span>
       <button className="button4" onClick={IncrementCount2}>+</button>
       <i className="fa-sharp fa-solid fa-trash fa-2xl trashclass" onClick={Disapear}></i>         
       </div>
        <div className="Counter3" id="thisdiv">
        <img src="../Images/justapicture.jpg" alt="imagesame" className="imgcart3"></img>
        <button className="button5" onClick={DecrementCount3}>-</button>
        <span class="spanclass">{count3}</span>
        <button className="button6" onClick={IncrementCount3}>+</button>
        <i className="fa-sharp fa-solid fa-trash fa-2xl trashclass" onClick={Disapear}></i>          
        </div>
    </div>
    
  );
}

export default ClickButto;