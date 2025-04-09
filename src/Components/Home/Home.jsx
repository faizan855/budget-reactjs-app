import React, { useState } from "react";
import Balance from "./Balance";
import Expence from "./Expence";
import List from "./List";
import TotalBudget from "./TotalBudget";

const Home = () => {
  
  var budgetTotal = JSON.parse(localStorage.getItem("Total Budget"));
  const [gettottal, setgetTottal] = useState(budgetTotal ? budgetTotal : 0);

  var productData = JSON.parse(localStorage.getItem("Product Detail"));
  const [exp, setExp] = useState(productData ? productData : []);

  const [expIndex, setExpIndex] = useState(null);

  const [expId, setExpId] = useState(null);

  

  return (
    <>
      <div className="container main">
        <div className="row box1">
          <div className=" box2 col-sm-12 col-md-6 col-lg-6">
            <TotalBudget setgetTottal={setgetTottal} />
            <Expence
              exp={exp}
              setExp={setExp}
              expIndex={expIndex}
              expId={expId}
              setExpIndex={setExpIndex}
            />
          </div>
          <div className=" box3 col-sm-12 col-md-6 col-lg-6">
            <Balance gettottal={gettottal} exp={exp} />
            <List exp={exp} setExp={setExp} setExpIndex={setExpIndex} setExpId={setExpId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
