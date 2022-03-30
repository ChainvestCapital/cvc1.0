import "./Design/Coming_Sonn_App.css";
import Coming_Soon_App_Img from "./assets/images/Coming_Soon_App_Logo.png";
import PlayStoreIcon from "./assets/images/PlayStoreIcon.png";
import AppStoreIcon from "./assets/images/AppStoreIcon.png";
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import FOOTER from "./components/navigation/Footer";

import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";

import CookieConsent from "react-cookie-consent";

function Coming_Soon_App(props) {
  useEffect(() => {
    document.title = "App";
  }, []);
  return (
    <div>
      <div id="Coming_Soon_App">
        <div id="Desktop_Wrapper">
          <CookieConsent
            location="bottom"
            buttonText="Akzeptieren"
            cookieName="myAwesomeCookieName2"
            style={{
              background: "#2B373B",
              fontSize: "16px",
            }}
            buttonStyle={{ color: "#4e503b", fontSize: "16px" }}
            expires={150}
          >
            Diese Internetseite verwendet Cookies und Google Analytics für die
            Analyse und Statistik. Wir nutzen Cookies zu unterschiedlichen
            Zwecken, unter anderem zur Analyse und für personalisierte
            Marketing-Mitteilungen. Durch die weitere Nutzung der Website
            stimmen Sie der Verwendung zu. Mehr dazu finden sie in unser{" "}
            <Link to="./Datenschutzerklaerung">Datenschutzerklärung</Link>
            <span style={{ fontSize: "10px" }}></span>
          </CookieConsent>{" "}
          <TOP_NAV_BAR />{" "}
          <div id="CSA_Wrapper_BG">
            <div id="CSA_BG_Wrapper_White"></div>
            <div id="CSA_BG_Wrapper_Content">
              <div id="Coming_Soon_App_Top">
                <div id="Coming_Soon_App_Top_Left">
                  <div id="FU_Top_left">
                    <h1 id="CV_h1_dark">Bald auch als</h1>
                    <h1 id="CV_h1_yellow">App</h1>
                    <h5 id="FU_Top_left_h5">
                      Um das Angebot von Chainvest Capital in Zukunft mobil noch
                      besser nutzen zu können, bieten wir unsere Services in
                      naher Zukunft auch als App an!
                    </h5>
                    <div id="AppStoreIconsWrapper">
                      <div id="GooStoreWrapper">
                        <img src={PlayStoreIcon} id="GooStoreWrapperIMG" />
                        <h5 id="FU_Top_left_h4">Google Play Store</h5>
                      </div>

                      <div id="GooStoreWrapper">
                        <img src={AppStoreIcon} id="GooStoreWrapperIMG" />
                        <h5 id="FU_Top_left_h4">Apple App Store</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="Coming_Soon_App_Top_Right">
                  <img
                    src={Coming_Soon_App_Img}
                    id="Coming_Soon_App_Top_Right_Img"
                  />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <FOOTER />
        </div>

        <div id="Mobile_Wrapper">coMING soo appv</div>
      </div>
    </div>
  );
}

export default Coming_Soon_App;
