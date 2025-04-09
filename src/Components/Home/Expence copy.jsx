import React, { useEffect, useRef, useState } from "react";
// import uuid from 'react-uuid';
import { v4 as uuidv4 } from 'uuid';

const Expence = ({ exp, setExp, expIndex, setExpIndex }) => {
  // To make an obj //

  const [obj, setObj] = useState({});

  const handlechange = (e) => {
    if (e.target.value !== "") {
      setObj({ ...obj, [e.target.name]: e.target.value });
    }
  };

  // To make an obj //

  /////////////////////////////////////////////////////////

  /* To make an arr */
  const productRef = useRef(null);
  const amountRef = useRef(null);
  const expBtn = useRef(null);

  // const handleclick = () => {
  //   if (!productRef.current.value || !amountRef.current.value) {
  //     alert("fill the inputs");
  //   }
  //   if (
  //     Object.entries(obj).length > 0 &&
  //     productRef.current.value &&
  //     amountRef.current.value
  //   ) {
  //     if (expIndex !== null && expIndex >= 0) {
  //       const updatedExp = [...exp]; // make a copy of the array to avoid mutation
  //       updatedExp[expIndex] = obj; // update the object at the specified index
  //       setExp(updatedExp);
  //       setExpIndex(null);
  //       expBtn.current.textContent = "Add Expence";
  //     } else {
  //       setExp([...exp, obj]);
  //     }

  //     setObj({});
  //     productRef.current.value = null;
  //     amountRef.current.value = null;
  //   }
  // };

  const handleclick = () => {
    if (!productRef.current.value || !amountRef.current.value) {
      alert("fill the inputs");
    }
    if (
      Object.entries(obj).length > 0 &&
      productRef.current.value &&
      amountRef.current.value
    ) {
      const newObj = { ...obj, id: parseInt(uuidv4().replace(/-/g, ''), 16) };
      if (expIndex !== null && expIndex >= 0) {
        const updatedExp = [...exp]; // make a copy of the array to avoid mutation
        updatedExp[expIndex] = newObj; // update the object at the specified index
        setExp(updatedExp);
        setExpIndex(null);
        expBtn.current.textContent = "Add Expence";
      } else {
        setExp([...exp, newObj]);
      }

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
  }, [exp]);

  useEffect(() => {
    if (exp[expIndex]) {
      productRef.current.value = exp[expIndex].product;
      amountRef.current.value = exp[expIndex].amount;
      expBtn.current.textContent = "Update";
    }
  }, [expIndex]);

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
        ref={expBtn}
        // disabled
      >
        Add Expence
      </button>
    </div>
  );
};

export default Expence;
