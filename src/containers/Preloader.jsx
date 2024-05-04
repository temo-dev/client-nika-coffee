import React from "react";

const Preloader = () => {
  return (
    <div className="preloader ">
      <button className="th-btn preloaderCls">Cancel Preloader </button>
      <div className="preloader-inner">
        <div className="loader">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
