import React from "react";
import "@/app/load.css";

function Loading() {
  return (
    <>
    
    <div className="container">

      <div className="wrap">
        <div className="loading">
          <div className="bounceball"></div>
          <div className="text">NOW LOADING</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Loading;
