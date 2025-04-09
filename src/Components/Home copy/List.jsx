import React, { useEffect, useState } from "react";

const List = ({ getexp, setgetExp }) => {
  console.log(getexp,"main");
  // var data2 = JSON.parse(localStorage.getItem("Product Detail"));
  
  // const [myArray, setMyArray] = useState(getexp);

  const handledel = (indexToDelete) => {
    const updatedArray = getexp.filter(
      (items, index) => index !== indexToDelete
    );
    console.log(indexToDelete, "handledel");
    setgetExp(updatedArray);
  };

  useEffect(() => {
    localStorage.setItem("Product Detail", JSON.stringify(getexp));
    console.log(getexp,"use effect");
    setgetExp(getexp)
  }, [getexp]);

  // useEffect(() => {
  // 
  // }, [getexp]);
  console.log(getexp,"if k upper");
  if (getexp) {

    console.log(getexp,"if k anadarr");
    var render = getexp.map((items, index) => {
      const { product, amount } = items;
      return (
        <>
          <div className="append-div">
            <h1>{index}</h1>
            {/* <div  className="append-div1 fa-solid fa-file"></div> */}
            <div className="append-div2">{product}</div>
            <div className="append-div3">{amount}</div>
            {/* <div className="append-div4 fa-solid fa-pen-to-square"></div> */}
            <div
              className="append-div5 fa-regular fa-trash-can"
              // onClick={() => handledel(product)}
              onClick={() => handledel(index)}
            ></div>
            {/* <div className="append-div6 fa-solid fa-arrow-up"></div>
            <div className="append-div7 fa-solid fa-arrow-down"></div> */}
            {/* <div className="date-div">time</div> */}
            {/* <div className="time-div">date</div> */}
          </div>
        </>
      );
    });
  } else {
    render = "no data";
  }

  return (
    <div className="box3-2">
      <div className="underline">
        <h4>Expence List</h4>
      </div>

      <div id="append-expence">{render}</div>
    </div>
  );
};

export default List;
