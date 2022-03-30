import "./Mobile_Menue_Pop_Up_Pop_UP.css";
import Arrow_white_25 from "../../assets/images/Arrow_White_100.png";
import Arrow_black_50 from "../../assets/images/Arrow_black_50.png";
import { HashLink } from "react-router-hash-link";

function MObile_menue_pop_up_Projekte(props) {
  return props.trigger ? (
    <div>
      <HashLink to="../Academy">
        <div id="MObile_menue_pop_up_Frame_Wrapper">
          <h2 id="MObile_menue_pop_up_h2">Academy</h2>
          <div id="MObile_menue_pop_up_Frame_Content_Wrapper">
            <div id="Pop_Up_B_Wrapper_Blue">
              <img src={Arrow_white_25} id="Pop_Up_B_Wrapper_Blue_p1"></img>
              <h3 id="Pop_Up_B_Wrapper_Blue_h3">Academy</h3>
            </div>
          </div>
        </div>{" "}
      </HashLink>
    </div>
  ) : (
    ""
  );
}

export default MObile_menue_pop_up_Projekte;
