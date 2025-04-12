import React, { useEffect, useState } from "react";

const Balance = ({ gettottal, exp }) => {
  const [red, setRed] = useState("");
  const [remBal, setRemBal] = useState(0);
  const [expTotal, setExpTotal] = useState(0);

  useEffect(() => {
    if (exp && exp.length >= 0) {
      const total = exp.reduce((acc, cur) => acc + parseFloat(cur.amount), 0);
      setExpTotal(total);
      const balance = gettottal - total;
      setRemBal(balance);
      setRed(balance < 0 ? "red" : "");
    }
  }, [exp, gettottal]);

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
          <p id="remaning-bal" className={red}>
            {remBal}
          </p>
        </div>
      </div>
  );
};

export default Balance;



// import React, { useEffect, useState } from "react";
//
// const Balance = ({ gettottal, exp }) => {
//   // const [color, setColor] = useState(null);
//   const [red, setRed] = useState("");
//
//   if (exp) {
//     if (exp.length >= 0) {
//       var expTotal = exp.reduce((acc, cur) => acc + parseFloat(cur.amount), 0);
//       var remaning-bal = gettottal - expTotal;
//       // setColor(remBal);
//     } else {
//       remBal = 0;
//       // setColor(remBal);
//     }
//   }
//
//   useEffect(() => {
//     if (remBal < 0) {
//       setRed("red");
//     }
//   }, [exp]);
//
//   return (
//     <div className="box3-1">
//       <div style={{ textAlign: "center" }}>
//         <h4>Total Budget</h4>
//         <br />
//         <p id="total-budget">{gettottal}</p>
//       </div>
//
//       <div style={{ textAlign: "center" }}>
//         <h4>Expences</h4>
//         <br />
//
//         <p id="total-exp">{expTotal}</p>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <h4>Balance</h4>
//         <br />
//
//         <p id="remaning-bal" className={red}>
//         {remBal}
//         </p>
//       </div>
//     </div>
//   );
// };
//
// export default Balance;


