import "./Mobile_Menue_Pop_Up_Pop_UP.css";
import Arrow_white_100 from "../../assets/images/Arrow_White_100.png";
import Arrow_black_50 from "../../assets/images/Arrow_black_50.png";
import { HashLink } from "react-router-hash-link";

function MObile_menue_pop_up_Projekte(props) {
  return props.trigger ? (
    <div>
      <div id="MObile_menue_pop_up_Frame_Wrapper">
        <h2 id="MObile_menue_pop_up_h2">Projekte</h2>
        <div id="MObile_menue_pop_up_Frame_Content_Wrapper">
          <HashLink to="../Digitale-Wertpapiere">
            {" "}
            <div id="Pop_Up_B_Wrapper_Blue">
              <img src={Arrow_white_100} id="Pop_Up_B_Wrapper_Blue_p1"></img>
              <h3 id="Pop_Up_B_Wrapper_Blue_h3">Alle Projekte</h3>
            </div>
          </HashLink>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default MObile_menue_pop_up_Projekte;
