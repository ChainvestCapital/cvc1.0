import React from "react";
import "./Mobile_4er_tablr.css";

function Mobile_4er_tablr(props) {
  return (
    <div>
      <div id="Mobile_4er_tablr">
        <div id="Mobile_4er_tablr_Kachel">
          <h5 id="Mobile_4er_tablr_Kachel_h5">{props.Text1} </h5>
          <h3 id="Mobile_4er_tablr_Kachel_h5_h3">{props.Title1}</h3>
        </div>
        <div id="Mobile_4er_tablr_Kachel">
          <h5 id="Mobile_4er_tablr_Kachel_h5">{props.Text2} </h5>
          <h3 id="Mobile_4er_tablr_Kachel_h5_h3">{props.Title2}</h3>
        </div>
        <div id="Mobile_4er_tablr_Kachel">
          <h5 id="Mobile_4er_tablr_Kachel_h5">{props.Text3} </h5>
          <h3 id="Mobile_4er_tablr_Kachel_h5_h3">{props.Title3}</h3>
        </div>
        <div id="Mobile_4er_tablr_Kachel">
          <h5 id="Mobile_4er_tablr_Kachel_h5">{props.Text4} </h5>
          <h3 id="Mobile_4er_tablr_Kachel_h5_h3">{props.Title4}</h3>
        </div>
      </div>
    </div>
  );
}

export default Mobile_4er_tablr;
