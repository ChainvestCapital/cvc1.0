import "./Test_Menue.css";
import { useState } from "react";
import logo from "../assets/images/Logo_Trans.png";
import arrow from "../assets/images/Arrow_white.png";

function Menue_Bar(props) {
  const [MenueItems2, setMenueItems2] = useState("MenueItemsListe2notSHOW");
  const [MenueItems1, setMenueItems1] = useState("MenueItemsListe1notSHOW");

  return (
    <div>
      <div id="Menue_Bar_Wrapper">
        <div id="Menue_Bar_Content_Wrapper">
          <div id="Menue_Bar_Logo_Wrapper">
            <img src={logo} id="Menue_Bar_Logo" />
          </div>

          <div id="Menue_Bar_Menue_Wrapper">
            <div
              id="Menue_Bar_Menue_Item_1"
              onMouseEnter={() => setMenueItems1("MenueItemsListe1SHOW")}
              onMouseLeave={() => setMenueItems1("MenueItemsListe1notSHOW")}
            >
              <h3 id="Menue_Bar_Menue__h3">Academy</h3>
              <div id={MenueItems1}>
                <div id="ItemListeItem">Digitale Wertpapiere</div>

                <div id="ItemListeItem">Alle</div>
              </div>
            </div>
            <div
              id="Menue_Bar_Menue_Item_2"
              onMouseEnter={() => setMenueItems2("MenueItemsListe2SHOW")}
              onMouseLeave={() => setMenueItems2("MenueItemsListe2notSHOW")}
            >
              <h3 id="Menue_Bar_Menue__h3">Chainvest Capital</h3>

              <div id={MenueItems2}>
                <div id="ItemListeItem">Über uns</div>

                <div id="ItemListeItem">FAQ</div>
                <div id="ItemListeItem">Für Unternehmen</div>
                <div id="ItemListeItem">Emittenten</div>
              </div>
            </div>{" "}
            <div id="Top_Menue_Bar_Button_yellow">
              <h3 id="Top_Menue_Bar_h3_white">Alle Projekte</h3>
              <img src={arrow} id="Top_Menue_Bar_Button_yellow_IMG" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menue_Bar;
