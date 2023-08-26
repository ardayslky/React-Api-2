import React from "react";
import "./Searchof.css";

function Searchof({ title, image }) {
  return (
    <div className="searchmain">
      <label className="title" htmlFor="">
        {title}
      </label>
      <img src={image} alt="" />
    </div>
  );
}

export default Searchof;
