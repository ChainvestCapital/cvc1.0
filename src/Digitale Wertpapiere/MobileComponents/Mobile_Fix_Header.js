import React from "react";
import "./Mobile_Fix_Header.css";
import { Link } from "react-router-dom";

import arrow from "../../assets/images/Arrow_white.png";

function Mobile_Fix_Header(props) {
  return (
    <div>
      <div id="Mobile_Fix_Header_Wrapper">
        <div id="Mobile_Fix_Header_Top_Kachel">
          <h3 id="Mobile_Fix_Header_h3">{props.Titel}</h3>
          <h5 id="Mobile_Fix_Header_h5">{props.Beschreibung}</h5>
          <div id="Mobile_Fix_HeaderUnten_Wrapper">
            <a href={props.extLink}>
              <div id="Mobile_Fix_Header_Top_Button_yellow">
                <h3 id="Mobile_Fix_Header_Top_Button_Id">Zum Projekt</h3>
                <img src={arrow} id="Mobile_Fix_Header_Arrow_img" />
              </div>
            </a>
          </div>
        </div>

        <div id="Mobile_Fix_Header_Logo_kATEGORIE_wRAPPER">
          <img src={props.logo} id="Mobile_Fix_Header_Logo" />
          <div id="Mobile_Fix_Header_Kategorie_Wrapper">
            <img
              src={props.kategorieImg}
              id="Mobile_Fix_Header_kategorie_img"
            />{" "}
          </div>
        </div>
        <div id="Mobile_Fix_Header_infos_Wrapper">
          <div id="Mobile_Fix_Header_Kachel">
            <h3 id="Mobile_Fix_Header_H3">{props.Rendite}</h3>
            <h5 id="Mobile_Fix_Header_H5">Erwartete Rendite</h5>
          </div>
          <div id="Mobile_Fix_Header_Kachel">
            <h3 id="Mobile_Fix_Header_H3">{props.Finanzierungsvolumen}</h3>
            <h5 id="Mobile_Fix_Header_H5">Finanzierungsvolumen</h5>
          </div>
          <div id="Mobile_Fix_Header_Kachel">
            <h3 id="Mobile_Fix_Header_H3">{props.Typ}</h3>
            <h5 id="Mobile_Fix_Header_H5">Typ</h5>
          </div>
          <div id="Mobile_Fix_Header_Kachel">
            <h3 id="Mobile_Fix_Header_H3">{props.Mindestinvestition}</h3>
            <h5 id="Mobile_Fix_Header_H5">Mindestinvestition</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile_Fix_Header;
