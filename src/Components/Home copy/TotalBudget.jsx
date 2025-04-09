import React, { useState } from "react";

const TotalBudget = ({ setgetTottal }) => {
  const [tottal, setTottal] = useState(0);

  const handlechange = (e) => {
    setTottal(e.target.value);
  };

  const handleclick = () => {
    localStorage.setItem("Total Budget", JSON.stringify(tottal));
    setgetTottal(JSON.parse(localStorage.getItem("Total Budget")));
  };

  //   var a = JSON.parse(localStorage.getItem("Total Budget"));

  //   const [change, setChange] = useState(0);

  //   const [tottal, setTottal] = useState(a);

  //   const handlechange = (e) => {
  //     setChange(e.target.value);
  //     console.log(change);
  //   };

  //   const handleclick = () => {
  //     // if (change === null || change === undefined) {
  //       // alert("Please Enter Budget");
  //       // setTottal("25000");
  //     // } else {
  //       setTottal(change);

  //     // }
  //   };
  //   useEffect(() => {
  //     // if (a === null || a === undefined) {
  //     //   setTottal("25000");
  //     // }
  // console.log("yes");
  //     localStorage.setItem("Total Budget", JSON.stringify(tottal));
  //     setgetTottal(JSON.parse(localStorage.getItem("Total Budget")));
  //   }, [tottal]);

  return (
    <>
      <div className="box2-1">
        <h4 style={{ marginBottom: "10px" }}>Total Budget</h4>
        <input
          onChange={handlechange}
          className="bud"
          placeholder="Enter Total Amount"
          type="number"
          defaultValue={"25"}
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
