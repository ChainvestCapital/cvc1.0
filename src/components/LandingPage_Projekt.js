import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "./LandingPage_Projekt.css";

function LandingPage_Projekt(props) {
  const [Link, setLink] = useState("");

  function setLinkf() {
    setLink(props.Link);
  }

  return (
    <div>
      <HashLink to={Link}>
        <div id="LandingPage_Projekt_Wrapper" onLoad={() => setLinkf()}>
          <div id="LandingPage_Projekt_Top">
            <img src={props.titleImg} id="LandingPage_Projekt_Top_BG_img" />
            <div id="LandingPage_Projekt_Top_Logo_Wrapper">
              <img src={props.Logo} id="LandingPage_Projekt_Top_Logo_Img" />
            </div>
          </div>
          <div id="LandingPage_Projekt_Title_Row">
            <div id="LandingPage_Projekt_Title_Row_Left">
              <h2 id="LandingPage_Projekt_Title_Row_Title">{props.title}</h2>
              {props.Emittent}
            </div>
            <div id="LandingPage_Projekt_Title_Row_Right">
              <img
                src={props.KategorieBildLink}
                id="LandingPage_Projekt_Title_Row_Right_img"
              />
            </div>
          </div>
          <div id="LandingPage_Projekt_Content">
            <div id="LandingPage_Projekt_Content_Pair">
              <h3 id="LandingPage_Projekt_Content_h3">
                {props.ErwarteteRendite}
              </h3>
              Erwartete Rendite
            </div>

            <div id="LandingPage_Projekt_Content_Pair">
              <h3 id="LandingPage_Projekt_Content_h3">
                {props.Finanzierungsvolumen}
              </h3>
              Finanzierungsvolumen
            </div>
          </div>
        </div>{" "}
      </HashLink>
    </div>
  );
}

export default LandingPage_Projekt;
