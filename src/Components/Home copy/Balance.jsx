import React from "react";

const Balance = ({ gettottal, getexp }) => {
  console.log(getexp,"getexp balacnceeeeeeeee");


  
  if (getexp) {
    if (getexp.length >= 0) {
      var expTotal = getexp.reduce(
        (acc, cur) => acc + parseFloat(cur.amount),
        0
      );
      var remBal = gettottal - expTotal;
    } else {
      remBal = 0;
    }
  }

  return (
    <div className="box3-1">
      <div style={{ textAlign: "center" }}>
        <h4>Total Budget</h4>
        <br />
        <p id="total-budget">{gettottal}</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <h4>Expences</h4>
        <br />

        <p id="total-exp">{expTotal}</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <h4>Balance</h4>
        <br />

        <p id="remaning-bal">{remBal}</p>
      </div>
    </div>
  );
};

export default Balance;
