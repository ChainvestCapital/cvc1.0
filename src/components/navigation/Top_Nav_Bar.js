import "./Top_Nav_Bar.css";
import { useState } from "react";
import logo from "../../assets/images/Logo_Trans.png";
import arrow from "../../assets/images/Arrow_white.png";
import { HashLink } from "react-router-hash-link";
import { SentimentNeutralOutlined } from "@mui/icons-material";

function Menue_Bar(props) {
  const [MenueItems2, setMenueItems2] = useState("MenueItemsListe2notSHOW");
  const [MenueItems1, setMenueItems1] = useState("MenueItemsListe1notSHOW");
  const [MenueOpacityOverlay, setMenueOpacityOverlay] =
    useState("menueOpacityNS");
  const [menueID, setmenueID] = useState("Menue_Bar_Wrapper");
  window.onscroll = function () {
    menueScroll();
  };

  function menueScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setMenueOpacityOverlay("menueOpacityS");
    } else {
      setMenueOpacityOverlay("menueOpacityNS");
    }
  }

  return (
    <div>
      <div
        id={menueID}
        onMouseEnter={() => setMenueOpacityOverlay("menueOpacityNS")}
      >
        <div id={MenueOpacityOverlay}></div>
        <div id="Menue_Bar_Content_Wrapper">
          <HashLink to="../#">
            <div id="Menue_Bar_Logo_Wrapper">
              <img src={logo} id="Menue_Bar_Logo" />
            </div>
          </HashLink>
          <div id="Menue_Bar_Menue_Wrapper">
            <div
              id="Menue_Bar_Menue_Item_1"
              onMouseEnter={() => setMenueItems1("MenueItemsListe1SHOW")}
              onMouseLeave={() => setMenueItems1("MenueItemsListe1notSHOW")}
            >
              <HashLink to="../Academy#">
                <h3 id="Menue_Bar_Menue__h3">Academy</h3>{" "}
              </HashLink>

              <div id={MenueItems1}></div>
            </div>
            <div
              id="Menue_Bar_Menue_Item_2"
              onMouseEnter={() => setMenueItems2("MenueItemsListe2SHOW")}
              onMouseLeave={() => setMenueItems2("MenueItemsListe2notSHOW")}
            >
              <h3 id="Menue_Bar_Menue__h3">Chainvest Capital</h3>

              <div id={MenueItems2}>
                <HashLink to="../Ueber-uns#">
                  {" "}
                  <div id="ItemListeItem">Über uns</div>
                </HashLink>

                <HashLink to="../FAQ#">
                  {" "}
                  <div id="ItemListeItem">FAQ</div>
                </HashLink>
                <HashLink to="../Unternehmen#">
                  {" "}
                  <div id="ItemListeItem">Für Unternehmen</div>
                </HashLink>
                <HashLink to="../Emittenten#">
                  <div id="ItemListeItem">Emittenten</div>
                </HashLink>
                <HashLink to="../App#">
                  {" "}
                  <div id="ItemListeItem">App</div>
                </HashLink>
              </div>
            </div>{" "}
            <div
              id="Menue_Bar_Menue_Item_1"
              onMouseEnter={() => setMenueItems1("MenueItemsListe1SHOW")}
              onMouseLeave={() => setMenueItems1("MenueItemsListe1notSHOW")}
            >
              <HashLink to="../Vergleichstool#">
                {" "}
                <h3 id="Menue_Bar_Menue__h3">Vergleichen</h3>
              </HashLink>
              <div id={MenueItems1}></div>
            </div>
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

export default Menue_Bar;
