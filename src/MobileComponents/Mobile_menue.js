import "./Mobile_Menue.css";

import logo from "../assets/images/Logo_Trans.png";
import hamburgerimg from "../assets/images/hamburgerimg.png";
import MOBILEPOPUP from "./mobile_menue_pop_up";
import { useState } from "react";
import { Link } from "react-router-dom";

function Mobile_menue(props) {
  const [mobile_menue_popup, setmobile_menue_popup] = useState(false);

  return (
    <div>
      <MOBILEPOPUP
        trigger={mobile_menue_popup}
        setTrigger={setmobile_menue_popup}
      />

      <div id="mobile_menue_wrapper">
        <Link to="../#">
          <img src={logo} id="mobile_menue_wrapper_logo" alt="" />
        </Link>
        <div
          id="mobile_menue_wrapper_hamburger"
          onClick={() => setmobile_menue_popup(true)}
        >
          <img
            src={hamburgerimg}
            id="mobile_menue_wrapper_hamburger_img"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Mobile_menue;
