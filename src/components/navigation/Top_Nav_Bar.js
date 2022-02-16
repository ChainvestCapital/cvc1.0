import "./Top_Nav_Bar.css";
import logo from "../../assets/images/Logo_Trans.png";
import arrow from "../../assets/images/Arrow_white.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Top_Menue_Bar(props) {
  return (
    <div>
      <div id="Top_Navigation_Bar">
        <HashLink to="../#">
          <img src={logo} id="Top_Menue_Bar_logo_imgx" alt="" />
        </HashLink>
        <div id="Top_Navigation_Bar_RightWrapper_INNer">
          <div id="Top_Navigation_Bar_Spalte1">
            {" "}
            <h3 id="Top_Menue_Bar_h3">Digitale Wertpapiere</h3>{" "}
            <HashLink to="../Was-sind-digitale-Wertpapiere#">
              <div id="Top_Navigation_Bar_Spalte1_Item1">
                <h3 id="Top_Menue_Bar_h3">Was ist das?</h3>
              </div>{" "}
            </HashLink>
            <HashLink to="../Digitale-Wertpapiere#">
              <div id="Top_Navigation_Bar_Spalte1_Item1">
                <h3 id="Top_Menue_Bar_h3">Alle Projekte</h3>
              </div>
            </HashLink>
            <HashLink to="../Sekundaermaerkte#">
              <div id="Top_Navigation_Bar_Spalte1_Item1">
                <h3 id="Top_Menue_Bar_h3">Sekundärmärkte</h3>
              </div>
            </HashLink>
          </div>{" "}
          <div id="Top_Navigation_Bar_RightWrapper_INNerx">
            <HashLink to="../Unternehmen#">
              <div id="Top_Navigation_Bar_Spalte2">
                {" "}
                <h3 id="Top_Menue_Bar_h3">Für Unternehmen</h3>
              </div>{" "}
            </HashLink>
            <HashLink to="../Ueber-uns#">
              {" "}
              <div id="Top_Navigation_Bar_Spalte3">
                {" "}
                <h3 id="Top_Menue_Bar_h3">Über Uns</h3>
              </div>{" "}
            </HashLink>
            <HashLink to="../Digitale-Wertpapiere#">
              {" "}
              <div id="Top_Menue_Bar_Button_yellow">
                <h3 id="Top_Menue_Bar_h3_white">Alle Projekte</h3>
                <img src={arrow} id="Top_Menue_Bar_Button_yellow_IMG" alt="" />
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top_Menue_Bar;
