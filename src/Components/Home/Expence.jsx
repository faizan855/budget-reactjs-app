import { useState, useRef, useEffect } from "react";

const Expence = ({ exp, setExp, expIndex, expId, setExpIndex }) => {
  const [obj, setObj] = useState({});

  const productRef = useRef(null);
  const amountRef = useRef(null);
  const expBtn = useRef(null);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setObj({ ...obj, [e.target.name]: e.target.value });
    }
  };

  const handleClick = () => {
    if (!productRef.current.value || !amountRef.current.value) {
      alert("Fill the inputs");
      return;
    }

    if (Object.entries(obj).length > 0) {
      // Get current time and date
      const initTime = new Date();
      const hour = initTime.getHours();
      const isPM = hour >= 12;
      const dateString = `${("0" + initTime.getDate()).slice(-2)}/${(
          "0" +
          (initTime.getMonth() + 1)
      ).slice(-2)}/${initTime.getFullYear()}`;
      const timeString = `${hour % 12 || 12}:${(
          "0" + initTime.getMinutes()
      ).slice(-2)} ${isPM ? "PM" : "AM"}`;

      const idObj = {
        ...obj,
        id: exp.length + 1,
        date: dateString,
        time: timeString,
      };

      if (expIndex !== null && expIndex >= 0) {
        const updatedObj = exp.find((e) => e.id === expId);
        const storageArry = JSON.parse(localStorage.getItem("Product Detail"));
        const indexNum = storageArry.findIndex((x) => x.id === expId);

        updatedObj.product = idObj.product;
        updatedObj.amount = idObj.amount;

        const updatedExp = [...exp];
        updatedExp[indexNum] = updatedObj;

        setExp(updatedExp);
        setExpIndex(null);
      } else {
        setExp([...exp, idObj]);
      }

      // Reset form
      setObj({ product: "", amount: "" });
      productRef.current.value = null;
      amountRef.current.value = null;
      expBtn.current.textContent = "Add Expence";
    }
  };

  useEffect(() => {
    if (exp.length > 0) {
      localStorage.setItem("Product Detail", JSON.stringify(exp));
    }
  }, [exp]);

  useEffect(() => {
    const storageArry = JSON.parse(localStorage.getItem("Product Detail"));
    const indexNum = storageArry?.findIndex((x) => x.id === expId);

    if (exp[expIndex]) {
      productRef.current.value = exp[indexNum].product;
      amountRef.current.value = exp[indexNum].amount;
      expBtn.current.textContent = "Update";
    }
  }, [expIndex, exp, expId]);

  return (
      <div className="box2-2">
        <h4 style={{ marginBottom: "10px" }}>Expences</h4>
        <input
            onChange={handleChange}
            className="pro"
            placeholder="Product"
            type="text"
            ref={productRef}
            name="product"
        />
        <input
            onChange={handleChange}
            className="pro"
            placeholder="Amount"
            type="number"
            ref={amountRef}
            name="amount"
        />
        <br />
        <button onClick={handleClick} className="button-3" ref={expBtn}>
          Add Expence
        </button>
      </div>
  );
};

export default Expence;


// import { useState, useRef, useEffect } from "react";
//
// const Expence = ({ exp, setExp, expIndex, expId, setExpIndex }) => {
//   const [obj, setObj] = useState({});
//
//   const handlechange = (e) => {
//     if (e.target.value !== "") {
//       setObj({ ...obj, [e.target.name]: e.target.value });
//     }
//   };
//
//   const productRef = useRef(null);
//   const amountRef = useRef(null);
//   const expBtn = useRef(null);
//
//   const handleclick = () => {
//     if (!productRef.current.value || !amountRef.current.value) {
//       alert("fill the inputs");
//     }
//     if (
//       Object.entries(obj).length > 0 &&
//       productRef.current.value &&
//       amountRef.current.value
//     ) {
//       ////////////////////Time Function/////////////////////////
//
//       const initTime = new Date();
//       const hour = initTime.getHours();
//       const isPM = hour >= 12;
//       const dateString =
//         ("0" + initTime.getDate()).slice(-2) +
//         "/" +
//         ("0" + (initTime.getMonth() + 1)).slice(-2) +
//         "/" +
//         initTime.getFullYear();
//       const timeString =
//         (hour % 12 || 12) +
//         ":" +
//         ("0" + initTime.getMinutes()).slice(-2) +
//         " " +
//         (isPM ? "PM" : "AM");
//
//       ///////////////////////Time Function//////////////////////
//
//       const idObj = {
//         ...obj,
//         id: exp.length + 1,
//         date: dateString,
//         time: timeString,
//       };
//       if (expIndex !== null && expIndex >= 0) {
//         var updatedObj = exp.find((e) => {
//           return e.id === expId;
//         });
//         // console.log(updatedObj, "old object");
//
//         var storageArry = JSON.parse(localStorage.getItem("Product Detail"));
//
//         var indexNum = storageArry.findIndex((x) => x.id === expId);
//
//         // console.log(indexNum, newarray, "indexNum....");
//
//         updatedObj.product = idObj.product;
//         updatedObj.amount = idObj.amount;
//
//         var updatedExp = [...exp];
//
//         updatedExp[indexNum] = updatedObj;
//
//         // console.log(updatedObj, "new object");
//
//         setExp(updatedExp);
//
//         setExpIndex(null);
//       } else {
//         setExp([...exp, idObj]);
//       }
//
//       setObj({ product: "", amount: "" });
//       productRef.current.value = null;
//       amountRef.current.value = null;
//       expBtn.current.textContent = "Add Expence";
//     }
//   };
//
//
//   useEffect(() => {
//     if (exp.length > 0) {
//       localStorage.setItem("Product Detail", JSON.stringify(exp));
//     }
//   }, [exp]);
//
//   useEffect(() => {
//     var storageArry = JSON.parse(localStorage.getItem("Product Detail"));
//
//     var indexNum = storageArry.findIndex((x) => x.id === expId);
//
//     if (exp[expIndex]) {
//       productRef.current.value = exp[indexNum].product;
//       amountRef.current.value = exp[indexNum].amount;
//       expBtn.current.textContent = "Update";
//     }
//   }, [expIndex]);
//
//   return (
//     <div className="box2-2">
//       <h4 style={{ marginBottom: "10px" }}>Expences</h4>
//       <input
//         onChange={handlechange}
//         className="pro"
//         placeholder="Product"
//         type="string"
//         ref={productRef}
//         name="product"
//       />
//       <input
//         onChange={handlechange}
//         className="pro"
//         placeholder="Amount"
//         type="number"
//         ref={amountRef}
//         name="amount"
//       />
//       <br />
//       <button onClick={handleclick} className="button-3" ref={expBtn}>
//         Add Expence
//       </button>
//     </div>
//   );
// };
//
// export default Expence;
