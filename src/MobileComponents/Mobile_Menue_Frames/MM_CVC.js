import "./Mobile_Menue_Pop_Up_Pop_UP.css";
import Arrow_white_100 from "../../assets/images/Arrow_White_100.png";
import Arrow_black_125 from "../../assets/images/Arrow_black_125.png";
import Arrow_white_50 from "../../assets/images/Arrow_white_50.png";
import { HashLink } from "react-router-hash-link";

function MObile_menue_pop_up_CVC(props) {
  return props.trigger ? (
    <div>
      <div id="MObile_menue_pop_up_Frame_Wrapper">
        <h2 id="MObile_menue_pop_up_h2">Chainvest Capital</h2>
        <div id="MObile_menue_pop_up_Frame_Content_Wrapper_CV">
          <HashLink to="../Ueber-uns">
            {" "}
            <div id="Pop_Up_B_Wrapper_Blue_S">
              <img src={Arrow_white_100} id="Pop_Up_B_Wrapper_Blue_p1"></img>
              <h3 id="Pop_Up_B_Wrapper_Blue_h3">Über uns</h3>
            </div>
          </HashLink>

          <HashLink to="../FAQ">
            {" "}
            <div id="Pop_Up_B_Wrapper_white_S">
              <h3 id="Pop_Up_B_Wrapper_white_h3">FAQ</h3>{" "}
              <img src={Arrow_black_125} id="Pop_Up_B_Wrapper_white_p1"></img>
            </div>
          </HashLink>

          <HashLink to="../Unternehmen">
            {" "}
            <div id="Pop_Up_B_Wrapper_Blue_S">
              <img src={Arrow_white_50} id="Pop_Up_B_Wrapper_Blue_p1"></img>
              <h3 id="Pop_Up_B_Wrapper_Blue_h3">Für Unternehmen</h3>
            </div>
          </HashLink>

          <HashLink to="../App">
            {" "}
            <div id="Pop_Up_B_Wrapper_white_S">
              <h3 id="Pop_Up_B_Wrapper_white_h3">App</h3>{" "}
              <img src={Arrow_black_125} id="Pop_Up_B_Wrapper_white_p1"></img>
            </div>
          </HashLink>

          <HashLink to="../Emittenten">
            {" "}
            <div id="Pop_Up_B_Wrapper_Blue_S">
              <img src={Arrow_white_100} id="Pop_Up_B_Wrapper_Blue_p1"></img>
              <h3 id="Pop_Up_B_Wrapper_Blue_h3">Emittenten</h3>
            </div>
          </HashLink>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default MObile_menue_pop_up_CVC;
