import React from "react";
import "./mDokumente_Wrapper.css";
import { Link } from "react-router-dom";
import DownloadImg from "../../assets/images/DownloadImg.png";

function mDokumente_Wrapper(props) {
  return (
    <div>
      <div id="mDokumente_Wrapper">
        <h3 id="mDokumente_Wrapper_h3">{props.title}</h3>
        <div id="mDokumente_Wrapper_Circle">
          <img src={DownloadImg} id="mDokumente_Wrapper_Cricle_img" />
        </div>
        <h5 id="mDokumente_Wrapper_h5">{props.Beschreibung}</h5>
      </div>
    </div>
  );
}
export default mDokumente_Wrapper;
