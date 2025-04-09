import React, { useState, useRef } from "react";

const TotalBudget = ({ setgetTottal }) => {
  const [tottal, setTottal] = useState(0);

  const handlechange = (e) => {
    setTottal(e.target.value);
  };

  const budRef = useRef(null);

  const handleclick = () => {
    if (budRef.current.value <= 0) {
      alert("Please Enter Budget Amount");
    } else {
      localStorage.setItem("Total Budget", JSON.stringify(tottal));
      setgetTottal(JSON.parse(localStorage.getItem("Total Budget")));
    }
  };

  return (
    <>
      <div className="box2-1">
        <h4 style={{ marginBottom: "10px" }}>Total Budget</h4>
        <input
          onChange={handlechange}
          className="bud"
          placeholder="Enter Total Amount"
          type="number"
          ref={budRef}
          // defaultValue={"25"}
        />
        <br />

        <button onClick={handleclick} className="button-3">
          Set Budget
        </button>
      </div>
    </>
  );
};

export default TotalBudget;
