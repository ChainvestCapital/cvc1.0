import React from "react";
import "./mRechtliche_Kachel.css";
import { Link } from "react-router-dom";
import DownloadImg from "../../assets/images/DownloadImg.png";

function mRechtliche_Kachel(props) {
  return (
    <div>
      <div id="mRechtliche_Kachel">
        <h3 id="mRechtliche_Kachelh3">{props.title}</h3>

        <h5 id="mRechtliche_Kachelh5">{props.Beschreibung}</h5>
      </div>
    </div>
  );
}
export default mRechtliche_Kachel;
