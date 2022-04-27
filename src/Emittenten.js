import "./Design/Emittenten.css";
import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";
import arrow from "./assets/images/Arrow_white.png";
import Token_Klassen_Img from "./assets/images/Token_Klassen_Img.png";
import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import { useState, useEffect } from "react";
import Mobil_IT from "./assets/images/Mobil_IT.png";

import Mobil_Home_png from "./assets/images/Mobil_Home_png.png";

import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import Footer from "./components/navigation/Footer";
import Mobile_menue from "./MobileComponents/Mobile_menue";
import TL_Img from "./assets/images/TL_Img.png";
import UR_Img from "./assets/images/UR_Img.png";
import OR_Img from "./assets/images/OR_Img.png";
import { HashLink } from "react-router-hash-link";
import MRECHTLICH from "./Digitale Wertpapiere/MobileComponents/mRechtliche_Kachel";
import Emittenten_Soon from "./assets/images/Emittenten_Soon.png";
import Finexeity_Logo from "./assets/images/Finexity_Logo.png";
import Drei_Teaser_Kachel from "./components/Drei_Teaser_Kachel";
import Mobile_VierTeaser_kACHEL from "./MobileComponents/Mobile_VierTeaser_Kachel";
import Emi_Top_right_Img from "./assets/images/Emi_Top_right.png";

function Emittenten(props) {
  useEffect(() => {
    document.title = "Emittenten";
  }, []);

  return (
    <div>
      <div id="Desktop_Wrapper">
        <div id="WSDW_Emii_Wrapper">
          {" "}
          <div id="WSDW_BG_Wrapper_White"></div>
          <div id="WSDW_BG_Wrapper_Content">
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
              Marketing-Mitteilungen. Durch die weitere Nutzung der Website
              stimmen Sie der Verwendung zu. Mehr dazu finden sie in unser{" "}
              <Link to="./Datenschutzerklaerung">Datenschutzerklärung</Link>
              <span style={{ fontSize: "10px" }}></span>
            </CookieConsent>{" "}
            <TOP_NAV_BAR />
            <div id="FU_Top_Wrapper">
              <div id="FU_Top_left">
                <h1 id="CV_h1_dark">Emittenten auf</h1>
                <h1 id="CV_h1_yellow">Chainvest Capital</h1>
                <h5 id="FU_Top_left_h5">
                  Chainvest Capital stellt Ihnen auf dieser Webseite digitale
                  Wertpapiere von Partner Unternehmen vor. In unserer
                  Zusammenarbeit spielen die Transparenz und die Erfüllung
                  regulatorischer Standards eine zentrale Rolle. Hier erfahren
                  Sie mehr über diese Unternehmen.
                </h5>
              </div>

              <div id="FU_Top_right">
                <img src={Emi_Top_right_Img} id="Emi_Top_right_Img" />
              </div>
            </div>
            <div id="White_Wrapper">
              <div id="Finexity_Wrapper">
                <div id="Finexity_Wrapper_Left">
                  <h3 id="Finexity_Wrapper_h3">Finexity</h3>
                  <h5 id="Finexity_Wrapper_h5">
                    Finexity stellt mit über 6000 registrierten Kunden eine der
                    entscheidenen Plattformen für die Emission und
                    Projektdurchführung von digitalen Wertpapieren dar. Durch
                    das erfolgreiche Management von spannenden Projekten konnte
                    das durch Finexity verwaltete Vermögen auf über 10.000.000 €
                    steigen. Die hohe Qualität der Plattform wurde ebenfalls
                    durch Auszeichnungen als bestes Finanz-Start-Up oder
                    innovativste Immobilieninvestitionsplattform bestätigt.{" "}
                  </h5>
                </div>
                <div id="Finexity_Wrapper_Right">
                  <img src={Finexeity_Logo} id="Finexity_Wrapper_Logo" />
                  <HashLink to="../Digitale-Wertpapiere#">
                    {" "}
                    <div id="Top_Menue_Bar_Button_yellow">
                      <h3 id="Top_Menue_Bar_h3_white">Alle Projekte</h3>
                      <img
                        src={arrow}
                        id="Top_Menue_Bar_Button_yellow_IMG"
                        alt=""
                      />
                    </div>
                  </HashLink>
                </div>
              </div>
            </div>
            <div id="Teaser_Wrapper">
              <Drei_Teaser_Kachel
                Title="Aktuelle Projekte von Finexity auf
            Chainvest Capital"
              />
            </div>
            <div id="Finexity_Fragen_Wrapper">
              <div id="Finexity_Fragen_Wrapper_Inner">
                <h3 id="Finexity_Fragen_Wrapper_Inner_h3">
                  In welchem Verhältnis steht Chainvest Capital zu Finexity ?
                </h3>
                <h5 id="Finexity_Fragen_Wrapper_Inner_h5">
                  Chainvest Capital ist ein von Finexity rechtlich unabhängiges
                  Unternehmen. Im Rahmen des Listings der Projekte von Finexity
                  gibt es Kooperationsvereinbarungen, die Chainvest Capital für
                  die Beteiligung unserer Nutzer an Projekten von Finexity
                  entlohnt.
                </h5>
              </div>
              <div id="Finexity_Fragen_Wrapper_Inner">
                <h3 id="Finexity_Fragen_Wrapper_Inner_h3">
                  Werden Projekte von Finexity auf Chainvest Capital empfohlen?{" "}
                </h3>
                <h5 id="Finexity_Fragen_Wrapper_Inner_h5">
                  Nein, die auf Chainvest Capital dargestellten Projekte stellen
                  generell keine Empfehlung durch unser Unternehmen dar. Wir
                  achten insbesondere auf die Bereitstellung der notwendigen
                  regulatorischen Dokumente durch unseren Partner, geben
                  allerdings keinerlei Empfehlung bzgl. des Erfolges des
                  Projekts ab.
                </h5>
              </div>
            </div>
            <div id="Emittenten_Cooming_Soon">
              <h3 id="Finexity_Fragen_Wrapper_Inner_h3">
                Weitere Emittenten folgen in Kürze!{" "}
              </h3>
              <h5 id="Finexity_Fragen_Wrapper_Inner_h5_CS">
                Chainvest Capital ist eine Vergleichsplattform für Projekte
                verschiedener Emittenten. Um einen umfangreichen Vergleich zu
                ermöglichen, arbeiten wir kontinuierlich daran, neue Partner und
                Projekte zu integrieren. Sofern Sie Ihr Projekte bei uns listen
                möchten, finden Sie unten weitere Informationen dazu.
              </h5>
              <HashLink to="../Unternehmen#">
                <div id="Emittenten_Cooming_Soon_Button">
                  Mehr Informationen
                </div>
              </HashLink>
              <img src={Emittenten_Soon} id="Emittenten_Cooming_Soon_IMg" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <Footer />
      </div>

      <div id="Mobile_Wrapper">
        <Mobile_menue />
        <div id="Emittenten_Mobile_Wrapper">
          <div id="Mobile_Emittenten_Top_Sec">
            <h2 id="Mobile_Home_Top_Sec_H2">Emittenten auf</h2>
            <h2 id="Mobile_Home_Top_Sec_H2_yellow">Chainvest Capital</h2>
            <h5 id="Mobile_Home_Top_Sec_H5">
              Chainvest Capital stellt Ihnen auf dieser Webseite digitale
              Wertpapiere von Partner Unternehmen vor. In unserer Zusammenarbeit
              spielen die Transparenz und die Erfüllung regulatorischer
              Standards eine zentrale Rolle. Hier erfahren Sie mehr über diese
              Unternehmen.{" "}
            </h5>
            <div id="Mobile_Home_Top_Wertpapiere">
              <div id="Mobile_Home_Top_Kachel">
                <h3 id="Mobile_Home_Top_Kachel_h3">Finexity</h3>
                <h5 id="Mobile_Home_Top_Kachel_h5">
                  Finexity stellt mit über 6000 registrierten Kunden eine der
                  entscheidenen Plattformen für die Emission und
                  Projektdurchführung von digitalen Wertpapieren dar. Durch das
                  erfolgreiche Management von spannenden Projekten konnte das
                  durch Finexity verwaltete Vermögen auf über 10.000.000 €
                  steigen. Die hohe Qualität der Plattform wurde ebenfalls durch
                  Auszeichnungen als bestes Finanz-Start-Up oder innovativste
                  Immobilieninvestitionsplattform bestätigt.
                </h5>
              </div>
              <div id="Mobile_Home_Top_Wertpapiere_Right">
                <img src={Mobil_Home_png} id="Mobil_KV" alt="" />
                <img src={Mobil_IT} id="Mobil_IT" alt="" />
              </div>
            </div>
            <Mobile_VierTeaser_kACHEL Title="Aktuelle Projekte von Finexity auf Chainvest Capital" />
            <div id="Mobile_Emittenten_Fragen">
              {" "}
              <MRECHTLICH
                title="In welchem Verhältnis steht Chainvest Capital zu Finexity ?"
                Beschreibung="Chainvest Capital ist ein von Finexity rechtlich unabhängiges Unternehmen. Im Rahmen des Listings der Projekte von Finexity gibt es Kooperationsvereinbarungen, die Chainvest Capital für die Beteiligung unserer Nutzer an Projekten von Finexity entlohnt."
              />
              <MRECHTLICH
                title="Werden Projekte von Finexity auf Chainvest Capital empfohlen?"
                Beschreibung="Nein, die auf Chainvest Capital dargestellten Projekte stellen generell keine Empfehlung durch unser Unternehmen dar. Wir achten insbesondere auf die Bereitstellung der notwendigen regulatorischen Dokumente durch unseren Partner, geben allerdings keinerlei Empfehlung bzgl. des Erfolges des Projekts ab."
              />{" "}
            </div>
            <div id="mEmittenten_Cooming_Soon">
              <h3 id="mFinexity_Fragen_Wrapper_Inner_h3">
                Weitere Emittenten folgen in Kürze!{" "}
              </h3>
              <h5 id="mFinexity_Fragen_Wrapper_Inner_h5_CS">
                Chainvest Capital ist eine Vergleichsplattform für Projekte
                verschiedener Emittenten. Um einen umfangreichen Vergleich zu
                ermöglichen, arbeiten wir kontinuierlich daran, neue Partner und
                Projekte zu integrieren. Sofern Sie Ihr Projekte bei uns listen
                möchten, finden Sie unten weitere Informationen dazu.
              </h5>
              <HashLink to="../Unternehmen#">
                <div id="mEmittenten_Cooming_Soon_Button">
                  Mehr Informationen
                </div>
              </HashLink>
              <img src={Emittenten_Soon} id="mEmittenten_Cooming_Soon_IMg" />
            </div>{" "}
          </div>
        </div>
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default Emittenten;
