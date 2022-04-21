import "./Design/Coming_Sonn_App.css";
import Coming_Soon_App_Img from "./assets/images/Coming_Soon_App_Logo.png";
import PlayStoreIcon from "./assets/images/PlayStoreIcon.png";
import AppStoreIcon from "./assets/images/AppStoreIcon.png";
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import FOOTER from "./components/navigation/Footer";

import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";

import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import CookieConsent from "react-cookie-consent";
import App_MockUp from "./assets/images/App_MockUp.png";

import checkGreen from "./assets/images/checkGreen.png";

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

              <div id="Coming_App_Teaser2">
                <div id="Coming_App_Teaser2_Left">
                  <img src={App_MockUp} id="Coming_App_Teaser2_Img" />
                </div>
                <div id="Coming_App_Teaser2_Right">
                  <h2 id="Coming_App_Teaser2_Right_h2">
                    Eine App - Alle Projekte
                  </h2>

                  <div id="Coming_App_Teaser2_Right_Grid">
                    <div id="Coming_App_Teaser2_Right_Grid_Row">
                      <div id="Coming_App_Teaser2_Right_Grid_Item">
                        <img
                          id="Coming_App_Teaser2_Right_Haken"
                          src={checkGreen}
                        />{" "}
                        <h3 id="Coming_App_Teaser2_Right_h3">Schnell</h3>
                      </div>

                      <div id="Coming_App_Teaser2_Right_Grid_Item">
                        <img
                          id="Coming_App_Teaser2_Right_Haken"
                          src={checkGreen}
                        />{" "}
                        <h3 id="Coming_App_Teaser2_Right_h3">
                          Push-Benachrichtigungen bei neuen Listings
                        </h3>
                      </div>
                    </div>

                    <div id="Coming_App_Teaser2_Right_Grid_Row">
                      <div id="Coming_App_Teaser2_Right_Grid_Item">
                        <img
                          id="Coming_App_Teaser2_Right_Haken"
                          src={checkGreen}
                        />{" "}
                        <h3 id="Coming_App_Teaser2_Right_h3">Intuitiv</h3>
                      </div>

                      <div id="Coming_App_Teaser2_Right_Grid_Item">
                        <img
                          id="Coming_App_Teaser2_Right_Haken"
                          src={checkGreen}
                        />{" "}
                        <h3 id="Coming_App_Teaser2_Right_h3">
                          Personalisierter Zugriff auf Projekte
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <FOOTER />
        </div>
        <div id="Mobile_Wrapper">
          {" "}
          <CookieConsent
            location="bottom"
            buttonText="Akzeptieren"
            cookieName="myAwesomeCookieName2"
            style={{
              background: "#eee",
              color: "#000",
              textAlign: "start",
              fontFamily: "Montserrat",
              fontSize: "13px",
            }}
            buttonStyle={{
              color: "#434343",
              fontSize: "12px",
              borderRadius: "12px",
              background: "#CDF0EA",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontFamily: "Montserrat",
            }}
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
          <div id="Mobile_App_Wrapper">
            <MOBILE_MENUE />
            <div id="Mobile_App_Content">
              <h2 id="Mobile_Home_Top_Sec_H2">Bald auch als </h2>
              <h2 id="Mobile_Home_Top_Sec_H2_yellow">App</h2>

              <div id="Mobile_App_Content_White_Wrapper">
                <img
                  src={Coming_Soon_App_Img}
                  id="Mobile_App_Content_White_Wrapper_IMG"
                />
                Um das Angebot von Chainvest Capital in Zukunft mobil noch
                besser nutzen zu können, bieten wir unsere Services in naher
                Zukunft auch als App an!
              </div>
              <div id="Mobile_App_Content_White_Wrapper_PlayApple">
                <img
                  src={PlayStoreIcon}
                  id="Mobile_App_Content_White_Wrapper_PlayApple_G"
                />
                Google Play Store
                <img
                  src={AppStoreIcon}
                  id="Mobile_App_Content_White_Wrapper_PlayApple_A"
                />
                Apple App Store
              </div>

              <div id="Mobile_App_Content_Teaser">
                <img src={App_MockUp} id="Teasder_mOBILE_MockUp" />
                <div id="Mobile_App_Content_Teaser_Row_Wrapper">
                  {" "}
                  <div id="Mobile_App_Content_Teaser_Row">
                    <img
                      id="Coming_App_Teaser2_Right_Haken_mobile"
                      src={checkGreen}
                    />{" "}
                    Intuitiv
                  </div>
                  <div id="Mobile_App_Content_Teaser_Row">
                    <img
                      id="Coming_App_Teaser2_Right_Haken_mobile"
                      src={checkGreen}
                    />{" "}
                    Push-Benachrichtigungen bei neuen Listings
                  </div>
                  <div id="Mobile_App_Content_Teaser_Row">
                    <img
                      id="Coming_App_Teaser2_Right_Haken_mobile"
                      src={checkGreen}
                    />{" "}
                    Schnell
                  </div>
                  <div id="Mobile_App_Content_Teaser_Row">
                    <img
                      id="Coming_App_Teaser2_Right_Haken_mobile"
                      src={checkGreen}
                    />{" "}
                    Personalisierter Zugriff auf Projekte
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MOBILE_FOOTER />
        </div>{" "}
      </div>
    </div>
  );
}

export default Coming_Soon_App;
