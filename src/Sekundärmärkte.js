import "./Design/Sekundärmärkte.css";

import Footer from "./components/navigation/Footer";

import { useEffect } from "react";
import Coming_Soon_SM from "./assets/images/Sek_Grey.png";

import TOP_MENUE_BAR from "./components/navigation/Top_Nav_Bar";
import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import SekM_Coming_Pic from "./assets/images/SekM_Coming_Pic.png";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

function Sekundärmärkte() {
  useEffect(() => {
    document.title = "Sekundärmärkte";
  }, []);
  return (
    <div>
      <div id="Desktop_Wrapper">
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
            fontSize: "13px",
            borderRadius: "12px",
            background: "#CDF0EA",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "15px",
            paddingBottom: "15px",
            fontFamily: "Montserrat",
          }}
          expires={150}
          family
        >
          Diese Internetseite verwendet Cookies und Google Analytics für die
          Analyse und Statistik. Wir nutzen Cookies zu unterschiedlichen
          Zwecken, unter anderem zur Analyse und für personalisierte
          Marketing-Mitteilungen. Durch die weitere Nutzung der Website stimmen
          Sie der Verwendung zu. Mehr dazu finden sie in unser{" "}
          <Link to="./Datenschutzerklaerung">Datenschutzerklärung</Link>
          <span style={{ fontSize: "10px" }}></span>
        </CookieConsent>{" "}
        <TOP_MENUE_BAR />
        <div id="SecMar_Grey">
          <div id="SecMar_Ecc"></div>
          <div id="SecMar_White"></div>
          <div id="Sekundärmärkte_Wrapper">
            <div id="Sekundärmärkte_top">
              <div id="Sekundärmärkte_top_left">
                <h2 id="Sekundärmärkte_top_h2">
                  Digitale Wertpapiere auf <br />
                  Sekundärmärkten
                </h2>
              </div>
              <div id="Sekundärmärkte_top_RIGHT">
                <h4 id="Sekundärmärkte_top_h4">
                  Chainvest Capital stellt die Schnittstelle zwischen spannenden
                  Investitionsprojekten und einer breiten Investorencommunity
                  dar. Über diese Plattform erhalten AnlegerInnen Zugang zu
                  vielfältigen digitalen Wertpapieren aus unterschiedlichen
                  Branchen.
                </h4>
              </div>
            </div>

            <div id="Sekundärmärkte_Coming_Soon">
              <div id="Sekundärmärkte_Coming_Soon_IMG_Wrapper">
                <img
                  src={Coming_Soon_SM}
                  id="Sekundärmärkte_Coming_Soon_IMG"
                  alt=""
                />
              </div>

              <div id="Sekundärmärkte_Coming_Soon_Overlay">
                <h2 id="Sekundärmärkte_Coming_Soon_Overlay_h2">
                  Cooming
                  <br />{" "}
                </h2>
                <h2 id="Sekundärmärkte_Coming_Soon_Overlay_h2_yellow">Soon </h2>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <Footer />{" "}
      </div>
      <div id="Mobile_Wrapper">
        <div id="Mobile_Background_Grey">
          <div id="Mobile_Background_White_Overlay"></div>
          <div id="Mobile_SekM_Content">
            <MOBILE_MENUE />
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
            <div id="Mobile_SekM_Content_Top">
              <h2 id="Mobile_Home_Top_Sec_H2">Sekundär-</h2>
              <h2 id="Mobile_Home_Top_Sec_H2_yellow">märkte</h2>
              <h5 id="Mobile_SekM_h5">
                Chianvest Capital stellt die Schnittstelle zwischen spannenden
                Investitionsprojekten und einer breiten Investorencommunity dar.
                Über diese Plattform erhalten AnlegerInnen Zugang zu
                vielfältigen Security Token Offerings aus unterschiedlichen
                Branchen.
              </h5>
            </div>
            <div id="Mobile_SekM_Coming_Soon_Sec">
              <img src={SekM_Coming_Pic} id="SekM_Coming_Pic_Img" alt="" />
              <h2 id="SekM_Coming_Pic_h2">Coming Soon</h2>
            </div>
          </div>
        </div>
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default Sekundärmärkte;
