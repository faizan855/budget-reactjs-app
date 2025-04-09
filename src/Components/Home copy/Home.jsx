import React, { useState } from "react";
import Balance from "./Balance";
import Expence from "./Expence";
import List from "./List";
import TotalBudget from "./TotalBudget";

const Home = () => {
  
  
  var data1 = JSON.parse(localStorage.getItem("Total Budget"));
 
  const [gettottal, setgetTottal] = useState(data1 ? data1 : 0);


  var data2 = JSON.parse(localStorage.getItem("Product Detail"));
  
  const [getexp, setgetExp] = useState(data2 ? data2 : []);







  return (
    <>
      <div className="container main">
        <div className="row box1">
          <div className=" box2 col-sm-12 col-md-6 col-lg-6">
            <TotalBudget setgetTottal={setgetTottal} />
            <Expence setgetExp={setgetExp} />
          </div>
          <div className=" box3 col-sm-12 col-md-6 col-lg-6">
            <Balance gettottal={gettottal} getexp={getexp} />
            <List getexp={getexp} setgetExp={setgetExp}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
