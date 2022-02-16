import React from "react";
import "./W100_HX_HIMG.css";

function W100_HX_HIMG(props) {
  return (
    <div>
      <div id="mw100_hx">
        <h3 id="W100_HX_HIMG_H3">{props.Title}</h3>

        <img src={props.img} id="W100_HX_HIMG_Img" alt="" />
      </div>
    </div>
  );
}

export default W100_HX_HIMG;
