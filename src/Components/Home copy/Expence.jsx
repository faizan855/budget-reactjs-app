import React, { useEffect, useRef, useState } from "react";

const Expence = ({ setgetExp }) => {
  // To make an obj //

  const [obj, setObj] = useState({});

  const handlechange = (e) => {
    if (e.target.value !== "")
      setObj({ ...obj, [e.target.name]: e.target.value });
  };

  // To make an obj //

  /////////////////////////////////////////////////////////

  var defaultArry = JSON.parse(localStorage.getItem("Product Detail"));

  // To make an arr //

  const [exp, setExp] = useState(defaultArry ? defaultArry : []);

  const productRef = useRef(null);
  const amountRef = useRef(null);

  const handleclick = () => {
    console.log(!productRef.current.value, "productRef.current.value");
    if (!productRef.current.value || !amountRef.current.value) {
      alert("fill the inputs");
    }
    if (
      Object.entries(obj).length > 0 &&
      productRef.current.value &&
      amountRef.current.value
    ) {
      setExp([...exp, obj]);
      setObj({});
      productRef.current.value = null;
      amountRef.current.value = null;
    }
  };

  // To make an arr //

  /////////////////////////////////////////////////////////

  // To update an local storage //

  useEffect(() => {
    if (exp.length > 0) {
      localStorage.setItem("Product Detail", JSON.stringify(exp));
    }
    var getStorage = JSON.parse(localStorage.getItem("Product Detail"));
    setgetExp(getStorage);
   

  }, [exp]);

  // To update an local storage //

  return (
    <div className="box2-2">
      <h4 style={{ marginBottom: "10px" }}>Expences</h4>
      <input
        onChange={handlechange}
        className="pro"
        placeholder="Product"
        type="string"
        ref={productRef}
        name="product"
        // disabled
      />
      <input
        onChange={handlechange}
        className="pro"
        placeholder="Amount"
        type="number"
        ref={amountRef}
        name="amount"
        // disabled
      />
      <br />
      <button
        onClick={handleclick}
        className="button-3"
        // disabled
      >
        Check Amount
      </button>
    </div>
  );
};

export default Expence;
