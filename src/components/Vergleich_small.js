import { useState } from "react";
import "./Vergleich_Small.css";
function Filter_Row(props) {
  return (
    <div id="">
      <div id="Vergleichs_Small_Teaser">
        <div id="Vergleichs_Small_Teaser_Left">
          {props.Titel}
          <h3 id="Vergleichs_Small_Teaser_Small_h3">{props.Emittent}</h3>
        </div>
        <div id="Vergleichs_Small_Teaser_Kategorie">
          <img
            src={props.Kategorie}
            id="Vergleichs_Small_Teaser_Kategorie_Img"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Filter_Row;
