import "./mobile_menue_popup.css";
import { Link } from "react-router-dom";
import Wertpapier from "../assets/images/Wertpapier.png";
import logo from "../assets/images/Logo_Trans.png";
import { HashLink } from "react-router-hash-link";

import CloseImg from "../assets/images/Close.png";
import Menü_Unt from "../assets/images/Menü_Unt.png";
import Menü_Sek from "../assets/images/Menü_Sek.png";
function mobile_menue_pop_up(props) {
  return props.trigger ? (
    <div>
      <div id="mobile_menue_pop_up_wrapper">
        <div id="mobile_menue_pop_up_White"></div>
        <div id="mobile_menue_pop_up_Content">
          <h2 id="mobile_menue_pop_up_Content_h2">Menü</h2>
          <div id="mobile_menue_pop_up_Content_Full_Wrapper">
            <div id="mobile_menue_pop_up_Content_Blue"></div>
            <div id="mobile_menue_pop_up_Content_Wrapper">
              <HashLink to="../Was-sind-digitale-Wertpapiere#">
                <div id="mobile_menue_pop_up_Content_Menue_Box">
                  <img
                    src={Wertpapier}
                    id="mobile_menue_pop_up_Content_Box_img"
                    alt=""
                  />
                  <h3 id="mobile_menue_pop_up_Content_h3">Über digitale</h3>
                  <h3 id="mobile_menue_pop_up_Content_h3_yellow">
                    Wertpapiere
                  </h3>
                </div>
              </HashLink>{" "}
              <HashLink to="../Sekundaermaerkte#">
                <div id="mobile_menue_pop_up_Content_Menue_Box">
                  <img
                    src={Menü_Sek}
                    id="mobile_menue_pop_up_Content_Box_img"
                    alt=""
                  />
                  <h3 id="mobile_menue_pop_up_Content_h3">Sekundär-</h3>
                  <h3 id="mobile_menue_pop_up_Content_h3_yellow">märkte</h3>
                </div>{" "}
              </HashLink>{" "}
              <HashLink to="../Unternehmen#">
                <div id="mobile_menue_pop_up_Content_Menue_Box">
                  <img
                    src={Menü_Unt}
                    alt=""
                    id="mobile_menue_pop_up_Content_Box_img"
                  />
                  <h3 id="mobile_menue_pop_up_Content_h3">Für</h3>
                  <h3 id="mobile_menue_pop_up_Content_h3_yellow">
                    Unternehmen
                  </h3>
                </div>
              </HashLink>
              <HashLink to="../Ueber-uns#">
                <div id="mobile_menue_pop_up_Content_Menue_Box">
                  <img
                    src={logo}
                    id="mobile_menue_pop_up_Content_Box_imgx"
                    alt=""
                  />
                  <h3 id="mobile_menue_pop_up_Content_h3">Über </h3>
                  <h3 id="mobile_menue_pop_up_Content_h3_yellow">Chainvest</h3>
                </div>
              </HashLink>
            </div>
          </div>{" "}
          {props.children}{" "}
          <HashLink to="../Digitale-Wertpapiere#">
            <div id="mobile_menue_pop_up_Content_Alle">
              <h3 id="mobile_menue_pop_up_Content_Aööe_h3">Alle Projekte</h3>
            </div>
          </HashLink>
          <div id="Closing_Wrapper_Wrapper">
            <div id="Closing_Wrapper">
              <button
                className="close-btn"
                id="close-btn"
                onClick={() => props.setTrigger(false)}
              >
                <div id="Closing_Wrapper_Circel">
                  <img src={CloseImg} id="Closing_Wrapper_Circle_Img" alt="" />
                </div>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default mobile_menue_pop_up;
