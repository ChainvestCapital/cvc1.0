import { useEffect, useState } from "react";
import "./Mobile_Vergleichen_Projekt_Comp.css";

function MVergleich_Pop_Up_Projekt(props) {
  const [Proj_Wrapper, setProj_Wrapper] = useState(
    "Mobile_Vergleichen_Projekt_Wrapper"
  );

  function makeYellow() {
    setProj_Wrapper("Mobile_Vergleichen_Projekt_Wrapper_y");
    makeNormal();
  }

  function makeNormal() {
    setTimeout(
      () => setProj_Wrapper("Mobile_Vergleichen_Projekt_Wrapper"),
      1200
    );
  }
  return (
    <div>
      <div id={Proj_Wrapper} onClick={() => makeYellow()}>
        <div id="Mobile_Vergleichen_Projekt_Top">
          <img
            src={props.titleImg}
            id="Mobile_Vergleich_Pop_Up_Projekt_Top_Img"
          />
          <div id="Mobile_Vergleichen_Projekt_Top_Logo_Wrapper">
            <img src={props.Logo} id="Mobile_Vergleichen_Projekt_Top_Logo" />
          </div>
        </div>

        <div id="Mobile_Vergleichen_Projekt_Content">
          <h3 id="Mobile_Vergleichen_Projekt_Content_h3">{props.title}</h3>

          <div id="Mobile_Vergleichen_Projekt_Content_Column">
            <h3 id="Mobile_Vergleichen_Projekt_Content_h4">
              {props.Finanzierungsvolumen}
            </h3>
            <h5 id="Mobile_Vergleichen_Projekt_Content_h5">
              Finanzierungsvolumen
            </h5>
          </div>

          <div id="Mobile_Vergleichen_Projekt_Content_Column">
            <h3 id="Mobile_Vergleichen_Projekt_Content_h4">
              {props.ErwarteteRendite}
            </h3>
            <h5 id="Mobile_Vergleichen_Projekt_Content_h5">Erwartet Rendite</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MVergleich_Pop_Up_Projekt;
