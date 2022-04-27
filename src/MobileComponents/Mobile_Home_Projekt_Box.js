import "./Mobile_Home_Projekt_Box.css";
import { HashLink } from "react-router-hash-link";
import React, { useState, useEffect } from "react";

function Mobile_Home_Projekt_Box(props) {
  const [Link, setLink] = useState("");

  function setLinkf() {
    setLink(props.Link);
  }

  return (
    <div>
      <div id="Mobile_Home_Projekt_Box_Wrapper" onLoad={() => setLinkf()}>
        <div id="Mobile_Home_Projekt_Box_top">
          <img
            src={props.titleImg}
            id="Mobile_Home_Projekt_Box_Wrapper_BGImg"
            alt=""
          />
          <div id="Mobile_Home_Projekt_Box_top_Logo_Wrapper">
            <img
              src={props.Logo}
              id="Mobile_Home_Projekt_Box_Wrapper_LogoImg"
              alt=""
            />
          </div>
        </div>
        <div id="Mobile_Home_Projekt_Box_MID">
          <div id="Mobile_Home_Projekt_Box_MID_Left">
            <h3 id="Mobile_Home_Projekt_Box_MID_h3">{props.title}</h3>
            <h3 id="Mobile_Home_Projekt_Box_MID_h5">{props.Emittent}</h3>
          </div>
          <div id="Mobile_Home_Projekt_Box_MID_Kategorie_Wrapper">
            <img
              src={props.KategorieBildLink}
              id="Mobile_Home_Projekt_Box_MID_img"
              alt=""
            />
          </div>
        </div>
        <div id="Mobile_Home_Projekt_Box_BOTTOM">
          <div id="Mobile_Home_Projekt_Box_BOTTOM_Item">
            <h3 id="Mobile_Home_Projekt_Box_BOTTOM_Item_H3">
              {props.ErwarteteRendite}
            </h3>
            <h5 id="Mobile_Home_Projekt_Box_BOTTOM_Item_H5">
              Erwartete Rendite
            </h5>
          </div>
          <div id="Mobile_Home_Projekt_Box_BOTTOM_Item">
            <h3 id="Mobile_Home_Projekt_Box_BOTTOM_Item_H3">
              {props.Mindestinvestition}
            </h3>
            <h5 id="Mobile_Home_Projekt_Box_BOTTOM_Item_H5">
              Mindestinvestition
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile_Home_Projekt_Box;
