import "./Kategorien_Filter.css";
import { useState } from "react";

function Kategorien_Filter(props) {
  const [f1h1, setf1h1] = useState(1);
  const [clickState, setclickState] = useState("unclicked");
  function AP_FV_E1_K_c() {
    setf1h1(f1h1 + 1);
    if (f1h1 % 2 === 0) {
      setclickState("unclicked");
    } else {
      setclickState("clicked");
    }
  }
  return (
    <div>
      <div id="Kategorien_Filter_Wrapper" onClick={() => AP_FV_E1_K_c()}>
        <div id="Kategorien_Filter_Wrapper_Left">
          <img src={props.Img} id="Kategorie_Wrapper_imgx" alt="" />

          <h3 id="Kategorien_Filter_h3">{props.HoverText}</h3>
        </div>
        <div id="KategorienFiltercheckbox">
          <div id={props.state}></div>
        </div>
      </div>
    </div>
  );
}

export default Kategorien_Filter;
