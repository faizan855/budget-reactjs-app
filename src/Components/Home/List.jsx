import React, { useEffect, useRef, useState } from "react";

const List = ({ exp, setExp, setExpIndex, setExpId }) => {
  /* Delete Function */

  const handleDel = (product) => {
    const updatedArray = exp.filter((e, i) => e.product !== product);
    setExp(updatedArray);
  };

  /* Edit Function */

  const handleEdit = (i, id) => {
    setExpIndex(i);
    setExpId(id);
  };

  /* Up Function */

  const handleUp = (i) => {
    if (i <= 0) {
      alert("not allowed");
    } else {
      const updatedArray = [...exp];
      var up = updatedArray[i];
      updatedArray[i] = updatedArray[i - 1];
      updatedArray[i - 1] = up;

      setExp(updatedArray);
    }
  };

  /* Down Function */

  const handleDwn = (i) => {
    if (i === exp.length - 1) {
      alert("not allowed");
    } else {
      const updatedArray = [...exp];
      var down = updatedArray[i];
      updatedArray[i] = updatedArray[i + 1];
      updatedArray[i + 1] = down;

      setExp(updatedArray);
    }
  };

  useEffect(() => {
    localStorage.setItem("Product Detail", JSON.stringify(exp));
  }, [exp]);

  /* Sort Function */

  const handleClick = () => {
    const sortedArray = [...exp].sort((a, b) =>
      a.product.localeCompare(b.product)
    );
    setExp(sortedArray);
  };

  /* Filter Function */

  const [findData, setFindData] = useState([]);

  const sbRef = useRef(null);

  const handleChange = (e) => {
    const filteredData = exp.filter((item) => {
      return item.product.toLowerCase().includes(e.target.value.toLowerCase());
    });
    // if (
    //   // sbRef.current.value !== "" ||
    //   // sbRef.current.value !== " " ||
    //   // sbRef.current.value !== null ||
    //   // sbRef.current.value !== undefined ||
    //   // sbRef.current.value !== NaN
      
    // ) {
      console.log(sbRef.current.value.length, "sbRef");
    // }
    setFindData(filteredData);
  };

  // var a = parseInt(sbRef.current.value)

  /* Filter Function */

  if (exp) {
    if (findData.length > 0) {
      var render = findData.map((items, index) => {
        const { product, amount, id, date, time } = items;
        return (
          <div key={index}>
            <div className="append-div">
              <div className="append-div1 fa-solid fa-file"></div>
              <div className="append-div2">{product}</div>
              <div className="append-div3">{amount}</div>
              <div
                className="append-div4 fa-solid fa-pen-to-square"
                onClick={() => handleEdit(index, id)}
              ></div>
              <div
                className="append-div5 fa-regular fa-trash-can"
                onClick={() => handleDel(product)}
              ></div>
              if()
              {
                {
                  /* <div
                className="append-div6 fa-solid fa-arrow-up"
                onClick={() => handleUp(index)}
              ></div>
              <div
                className="append-div7 fa-solid fa-arrow-down"
                onClick={() => handleDwn(index)}
              ></div> */
                }
              }
              <div className="date-div">{time}</div>
              <div className="time-div">{date}</div>
            </div>
          </div>
        );
      });
    } else {
      render = exp.map((items, index) => {
        const { product, amount, id, date, time } = items;
        return (
          <div key={index}>
            <div className="append-div">
              <div className="append-div1 fa-solid fa-file"></div>
              <div className="append-div2">{product}</div>
              <div className="append-div3">{amount}</div>
              <div
                className="append-div4 fa-solid fa-pen-to-square"
                onClick={() => handleEdit(index, id)}
              ></div>
              <div
                className="append-div5 fa-regular fa-trash-can"
                onClick={() => handleDel(product)}
              ></div>
              <div
                className="append-div6 fa-solid fa-arrow-up"
                onClick={() => handleUp(index)}
              ></div>
              <div
                className="append-div7 fa-solid fa-arrow-down"
                onClick={() => handleDwn(index)}
              ></div>
              <div className="date-div">{time}</div>
              <div className="time-div">{date}</div>
            </div>
          </div>
        );
      });
    }
  } else {
    render = "no data";
  }

  return (
    <div className="box3-2">
      {/* ///////////////////////////////////////////////////////// */}

      <div className="row mb-3">
        <div className="col-9">
          <input
            type="search"
            ref={sbRef}
            // defaultValue="0"
            // value='0'
            className="form-control"
            placeholder="Find your Desired Product"
            onChange={handleChange}
          />
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary "
            // ref={sortRef}
            onClick={handleClick}
          >
            <i className="fa-solid fa-sort"></i>
          </button>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////// */}

      <div className="underline">
        <h4>Expence List</h4>
      </div>

      <div id="append-expence">{render}</div>
    </div>
  );
};

export default List;

// const [data, setData] = useState(exp);
// const [searchTerm, setSearchTerm] = useState("");

// const handleChange = (e) => {
//   setSearchTerm(e.target.value);
//   const filteredData = exp.filter((item) => {
//     return item.product.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   setData(filteredData);

//   console.log(data);
// };
