import { useEffect, useState } from "react";
import { useLinkClickHandler } from "react-router-dom";
import "./Vergleich_Pop_Up_Projekt.css";

function Vergleich_Pop_Up_Projekt(props) {
  const [Proj_Wrapper, setProj_Wrapper] = useState(
    "Vergleich_Pop_Up_Projekt_Wrapper"
  );

  function makeYellow() {
    setProj_Wrapper("Vergleich_Pop_Up_Projekt_Wrapper_M");
    makeNormal();
  }

  function makeNormal() {
    setTimeout(() => setProj_Wrapper("Vergleich_Pop_Up_Projekt_Wrapper"), 1200);
  }
  return (
    <div>
      <div id={Proj_Wrapper} onClick={() => makeYellow()}>
        <div id="Vergleich_Pop_Up_Projekt_Top">
          <img src={props.titleImg} id="Vergleich_Pop_Up_Projekt_Top_Img" />
          <div id="Vergleich_Pop_Up_Projekt_Top_Logo_Wrapper">
            <img src={props.Logo} id="Vergleich_Pop_Up_Projekt_Top_Logo_Img" />
          </div>
        </div>
        <div id="Vergleich_Pop_Up_Projekt_Mid">{props.title}</div>
        <div id="Vergleich_Pop_Up_Projekt_Content">
          <h3 id="Vergleich_Pop_Up_Projekt_Content_h3">
            {props.Finanzierungsvolumen}
          </h3>
          <h3 id="Vergleich_Pop_Up_Projekt_Content_h4">Finanzierungsvolumen</h3>
          <h3 id="Vergleich_Pop_Up_Projekt_Content_h3">
            {props.ErwarteteRendite}
          </h3>
          <h3 id="Vergleich_Pop_Up_Projekt_Content_h4">Erwartete Rendite</h3>
        </div>
        <div id="Vergleich_Pop_Up_Projekt_Bottom">Projekt auswählen -> </div>
      </div>
    </div>
  );
}

export default Vergleich_Pop_Up_Projekt;
