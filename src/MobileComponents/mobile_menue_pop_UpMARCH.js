import "./mobile_menue_pop_UpMARCH.css";
import { Link } from "react-router-dom";
import Wertpapier from "../assets/images/Wertpapier.png";
import logo from "../assets/images/Logo_Trans.png";
import { HashLink } from "react-router-hash-link";

import CloseImg from "../assets/images/Close.png";
import Menü_Unt from "../assets/images/Menü_Unt.png";
import Menü_Sek from "../assets/images/Menü_Sek.png";
import { useState } from "react";
import Mobile_menue_popup_Projektex from "./Mobile_Menue_Frames/MM_Projekte";
import Mobile_menue_popup_Vergleichenx from "./Mobile_Menue_Frames/MM_Vergleichen";
import Mobile_menue_popup_Academyx from "./Mobile_Menue_Frames/MM_Academy";
import Mobile_menue_popup_CVCx from "./Mobile_Menue_Frames/MM_CVC";

function Mobile_menue_pop_up(props) {
  const [Mobile_menue_popup_Projekte, setmobile_menue_popup_Projekte] =
    useState(true);
  const [Mobile_menue_popup_CVC, setmobile_menue_popup_CVC] = useState(true);
  const [Mobile_menue_popup_Vergleichen, setmobile_menue_popup_Vergleichen] =
    useState(true);
  const [Mobile_menue_popup_Academy, setmobile_menue_popup_Academy] =
    useState(true);

  return props.trigger ? (
    <div>
      <div id="mobile_menue_Wrapper_popUP">
        <div id="mobile_menue_TOP_Content">
          <div id="mobile_menue_TOP_Content_Top">Closing</div>

          <div id="mobile_menue_TOP_Content_Frames">
            <Mobile_menue_popup_Projektex
              trigger={Mobile_menue_popup_Projekte}
              setTrigger={setmobile_menue_popup_Projekte}
            />

            <Mobile_menue_popup_CVCx
              trigger={Mobile_menue_popup_CVC}
              setTrigger={setmobile_menue_popup_CVC}
            />

            <Mobile_menue_popup_Vergleichenx
              trigger={Mobile_menue_popup_Vergleichen}
              setTrigger={setmobile_menue_popup_Vergleichen}
            />

            <Mobile_menue_popup_Academyx
              trigger={Mobile_menue_popup_Academy}
              setTrigger={setmobile_menue_popup_Academy}
            />
          </div>
        </div>
        <div id="mobile_menue_Button_Menue">
          <div id="mobile_menue_Button_Menue_Left">Left</div>
          <div id="mobile_menue_Button_Menue_Mid">MID</div>
          <div id="mobile_menue_Button_Menue_Right">Right</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Mobile_menue_pop_up;
