import check from "./assets/images/check.png";
import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";
import Kontaktaufnahme from "./assets/images/Kontaktaufnahme.png";
import Listing from "./assets/images/Listing.png";
import React, { useEffect } from "react";

import LivePic from "./assets/images/LivePic.png";
import Informationsaustausch from "./assets/images/Informationsaustausch.png";
import Footer from "./components/navigation/Footer";
import TL_Img from "./assets/images/TL_Img.png";
import UR_Img from "./assets/images/UR_Img.png";
import OR_Img from "./assets/images/OR_Img.png";
import arrow from "./assets/images/arrow.png";
import Mail_Img from "./assets/images/Mail.png";
import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import FU_Mobile from "./assets/images/FU_Mobile.png";

import Projekt_Bild from "./assets/images/FU_FilterBild.png";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

import "./Design/Unternehmen.css";
function FoFUnternehmen(props) {
  useEffect(() => {
    document.title = "Für Unternehmen";
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
        <div id="FU_BG_Wrapper_diese">
          <div id="FU_BG_Wrapper_White_diese"></div>
          <div id="FU_BG_Wrapper_Content">
            <TOP_NAV_BAR />
            <div id="FU_Top_Wrapper">
              <div id="FU_Top_left">
                <h1 id="CV_h1_dark">Ihr Projekt auf</h1>
                <h1 id="CV_h1_yellow">Chainvest Capital</h1>
                <h5 id="FU_Top_left_h5">
                  Gewinnen Sie mit einer Platzierung auf Chainvest Capital
                  frühzeitig das Interesse potenzieller Investoren und
                  profitieren Sie von unserem starken Netzwerk.
                </h5>
              </div>

              <div id="FU_Top_right">
                <div id="FU_Top_right_Spalte1">
                  <div id="Div_Home_Top_Section_Right_TL_Wrapper">
                    <img
                      src={TL_Img}
                      id="Div_Home_Top_Section_Right_TL_Img"
                      alt=""
                    />
                  </div>
                </div>
                <div id="FU_Top_right_Spalte 2">
                  <div id="Div_Home_Top_Section_Right_TR_Wrapper">
                    <img
                      src={OR_Img}
                      id="Div_Home_Top_Section_Right_OR_Img"
                      alt=""
                    />
                  </div>
                  <div id="Div_Home_Top_Section_Right_BR_Wrapper">
                    <img
                      src={UR_Img}
                      id="Div_Home_Top_Section_Right_UR_Img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div id="FU_Vorteile_Wrapper">
              <div id="FU_Vorteile_Innner">
                <div id="FU_Vorteile_Innner_left">
                  <h5 id="Div_Home_CV_Section_LEFT_h5">
                    Warum Chainvest Capital
                  </h5>

                  <h3 id="FU_Vorteile_Innner_left_h3">
                    Ihre Vorteile auf Chainvest Capital
                  </h3>
                  <h5 id="FU_Vorteile_Innner_left_h5">
                    Chainvest Capital stellt die Schnittstelle zwischen
                    spannenden Investitionsprojekten und einer breiten
                  </h5>
                </div>
                <div id="FU_Vorteile_Innner_Right">
                  <div id="FU_Vorteile_Innner_Right_Wrapper">
                    <div id="FU_Vorteile_Innner_Right_Wrapper_Left">
                      <img
                        src={check}
                        id="FU_Vorteile_Innner_Right_Wrapper_Left_Img"
                        alt=""
                      />
                    </div>
                    <div id="FU_Vorteile_Innner_Right_Wrapper_Right">
                      <h3 id="FU_Vorteile_Innner_Right_Wrapper_h3">
                        Eiffizienter Listingprozess
                      </h3>
                      <h5 id="FU_Vorteile_Innner_Right_Wrapper_h5">
                        Um die Kapitalaufnahme so leicht wie möglich zu
                        gestalten, haben wir für Sie einen schnellen und
                        unkomplizierten Listingprozess entwickelt. Welches
                        Projekt Sie listen, bleibt Ihnen überlassen. Auf
                        Chainvest Capital listen wir vielfältige Projekte aus
                        unterschiedlichen Branchen.
                      </h5>
                    </div>
                  </div>
                  <div id="FU_Vorteile_Innner_Right_Wrapper">
                    <div id="FU_Vorteile_Innner_Right_Wrapper_Left">
                      <img
                        src={check}
                        id="FU_Vorteile_Innner_Right_Wrapper_Left_Img"
                        alt=""
                      />
                    </div>
                    <div id="FU_Vorteile_Innner_Right_Wrapper_Right">
                      <h3 id="FU_Vorteile_Innner_Right_Wrapper_h3">
                        Marketing
                      </h3>
                      <h5 id="FU_Vorteile_Innner_Right_Wrapper_h5">
                        Bei Chainvest Capital unterstützten wir Sie bei der
                        Vermarktung Ihres Digitalen Wertpapaiers und finden
                        individuellen Marketinglösungen für Ihr
                        Investitionsprojekt für eine effiziente Kapitalaufnahme.
                        Gewinnen Sie mit einer Platzierung das
                        Investoreninteresse und schaffen Sie Vertrauen.
                      </h5>
                    </div>
                  </div>
                  <div id="FU_Vorteile_Innner_Right_Wrapper">
                    <div id="FU_Vorteile_Innner_Right_Wrapper_Left">
                      <img
                        src={check}
                        id="FU_Vorteile_Innner_Right_Wrapper_Left_Img"
                        alt=""
                      />
                    </div>
                    <div id="FU_Vorteile_Innner_Right_Wrapper_Right">
                      <h3 id="FU_Vorteile_Innner_Right_Wrapper_h3">Wachstum</h3>
                      <h5 id="FU_Vorteile_Innner_Right_Wrapper_h5">
                        Erreichen Sie mit einer Platzierung Ihres digitlaen
                        Wertpapaiers bei Chainvest Capital mehr Sichtbarkeit und
                        setzen Sie ein Zeichen für Transparenz. Nutzen Sie unser
                        Netzwerk für eine erfolgreiche Unternehmensfinanzierung
                        und steigern Sie das Wachstumspotenzial Ihres
                        Investitionsprojekts.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div id="FU_Ablauf_Wrapper">
              <div id="FU_Ablauf_Inner">
                <div id="FU_Ablauf_Inner_left">
                  <h3 id="FU_Vorteile_Innner_left_h3">
                    Der Ablauf ihres Listingsprozesses
                  </h3>
                  <h5 id="FU_Vorteile_Innner_left_h5">
                    Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne per
                    E-Mail zur Verfügung. Häufig gestellte Fragen zum
                    Listingprozess haben wir für Sie hier zusammengefasst.
                  </h5>
                  <div id="FU_Kontakt_Inner_Left_Boxes_Wrapper">
                    <div id="FU_Kontakt_Inner_Left_Box">
                      <div id="FU_Kontakt_Inner_Left_Box_Left">
                        <img
                          src={Kontaktaufnahme}
                          id="FU_Kontakt_Inner_Left_Box_Img"
                          alt=""
                        />
                      </div>
                      <div id="FU_Kontakt_Inner_Left_Box_Left_Right">
                        <h4 id="FU_Kontakt_Inner_Left_Box_h4">
                          Kontaktaufnahme
                        </h4>
                        <h5 id="FU_Kontakt_Inner_Left_Box_h5">
                          Sie nehmen formlos Kontakt mit uns auf
                        </h5>
                      </div>
                    </div>
                    <div id="FU_Kontakt_Inner_Left_Box">
                      <div id="FU_Kontakt_Inner_Left_Box_Left_Info">
                        <img
                          src={Informationsaustausch}
                          alt=""
                          id="FU_Kontakt_Inner_Left_Box_Img"
                        />
                      </div>
                      <div id="FU_Kontakt_Inner_Left_Box_Left_Right">
                        <h4 id="FU_Kontakt_Inner_Left_Box_h4">
                          Informationsaustausch
                        </h4>
                        <h5 id="FU_Kontakt_Inner_Left_Box_h5">
                          Wir tauschen die relevanten Informationen
                        </h5>
                      </div>
                    </div>
                    <div id="FU_Kontakt_Inner_Left_Box">
                      <div id="FU_Kontakt_Inner_Left_Box_Left_Listing">
                        <img
                          src={Listing}
                          id="FU_Kontakt_Inner_Left_Box_Img"
                          alt=""
                        />
                      </div>
                      <div id="FU_Kontakt_Inner_Left_Box_Left_Right">
                        <h4 id="FU_Kontakt_Inner_Left_Box_h4">Listing</h4>
                        <h5 id="FU_Kontakt_Inner_Left_Box_h5">
                          Wir nehmen das Projekt auf unser Plattform auf
                        </h5>
                      </div>
                    </div>
                    <div id="FU_Kontakt_Inner_Left_Box">
                      <div id="FU_Kontakt_Inner_Left_Box_Left_Live">
                        <img
                          src={LivePic}
                          id="FU_Kontakt_Inner_Left_Box_Img"
                          alt=""
                        />
                      </div>
                      <div id="FU_Kontakt_Inner_Left_Box_Left_Right">
                        <h4 id="FU_Kontakt_Inner_Left_Box_h4">
                          Ihr Projekt ist live!
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div id="FU_Ablauf_Inner_Right">
                  <img src={Projekt_Bild} id="FU_Projekt_Bild_img" alt="" />
                  <div id="FU_Ablauf_Inner_Right_Unten">
                    <div id="FU_Ablauf_Inner_Right_Unten_Left">
                      <img
                        src={arrow}
                        id="FU_Ablauf_Inner_Right_Unten_Left_img"
                        alt=""
                      />
                    </div>
                    <h4 id="FU_Ablauf_Inner_Right_Unten_h4">
                      Mehr Informationen zu ihrem Listing finden Sie{" "}
                      <a
                        id="UnderlIne"
                        href="https://uploads-ssl.webflow.com/5f8025558e24206e1d526137/6064224aab76709cd9d956ef_FAQ%20Listing%20von%20Finanzinstrumenten.pdf"
                      >
                        hier
                      </a>
                      .
                    </h4>
                  </div>
                </div>
              </div>
              <div id="FU_Kontakt_Wrapper_Wrapper">
                <div id="FU_Kontakt_Wrapper">
                  <div id="FU_Kontakt_Inner">
                    <div id="FU_Kontakt_Inner_top">
                      <h3 id="FU_Kontakt_Inner_top_h3">Kontaktaufnahme</h3>
                      <h5 id="FU_Kontakt_Inner_top_h5">
                        Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne
                        per E-Mail zur Verfügung. Häufig gestellte Fragen zum
                        Listingprozess haben wir für Sie{" "}
                        <a
                          id="UnderlIne"
                          href="https://uploads-ssl.webflow.com/5f8025558e24206e1d526137/6064224aab76709cd9d956ef_FAQ%20Listing%20von%20Finanzinstrumenten.pdf"
                        >
                          hier
                        </a>{" "}
                        zusammengefasst.
                      </h5>
                    </div>
                  </div>
                  <div id="FU_Kontakt_Inner_bottom">
                    <div id="Mail_Bild_Wrapper">
                      <img src={Mail_Img} id="Mail_Img_ABlauf" alt=""></img>
                    </div>
                    <h5 id="Mail_h5">kontakt@chainvestcapital.de</h5>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
        <Footer />
      </div>
      <div id="Mobile_Wrapper">
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
          Marketing-Mitteilungen. Durch die weitere Nutzung der Website stimmen
          Sie der Verwendung zu. Mehr dazu finden sie in unser{" "}
          <Link to="./Datenschutzerklaerung">Datenschutzerklärung</Link>
          <span style={{ fontSize: "10px" }}></span>
        </CookieConsent>{" "}
        <div id="Mobile_Background_Grey">
          <div id="Mobile_Background_White_Overlay"></div>
          <div id="Mobile_FU_Content">
            {" "}
            <MOBILE_MENUE />
            <div id="Mobile_FU_top">
              <h2 id="Mobile_Home_Top_Sec_H2">Ihr Projekt auf</h2>
              <h2 id="Mobile_Home_Top_Sec_H2_yellow">Chainvest Capital</h2>
              <h5 id="Mobile_Home_Top_Sec_H5">
                Chianvest Capital stellt die Schnittstelle zwischen spannenden
                Investitionsprojekten und einer breiten Investorencommunity dar.
                Über diese Plattform erhalten AnlegerInnen Zugang zu
                vielfältigen Security Token Offerings aus unterschiedlichen
                Branchen.
              </h5>{" "}
            </div>
            <div id="Mobile_FU_IMG_Wrapper">
              <img src={FU_Mobile} id="Mobile_FU_IMG_Wrapper_Img" alt="" />
            </div>
            <div id="Mobile_FU_Vorteile_Wrapper">
              <div id="Mobile_FU_Vorteile_Inner">
                <div id="Mobile_FU_Vorteile_Inner_yellow">
                  <h5 id="Mobile_FU_Vorteile_Inner_yellow_h5">
                    Warum Chainvest Capital
                  </h5>
                </div>
                <h3 id="Mobile_FU_Vorteile_Inner_h3">
                  Ihr Vorteile auf Chainvest Capital
                </h3>
                <h5 id="Mobile_FU_Vorteile_Inner_h5">
                  Chainvest Capital stellt die Schnittstelle zwischen spannenden
                  Investitionsprojekten und einer breiten{" "}
                </h5>
                <div id="Mobile_FU_Vorteile_Inner_Box_Wrapper">
                  <div id="Mobile_FU_Vorteile_Inner_Box_Top">
                    {" "}
                    <img
                      src={check}
                      id="Mobile_FU_Vorteile_Inner_Box_Img"
                      alt=""
                    />
                    <h4 id="Mobile_FU_Vorteile_Inner_Box_Top_h4">
                      Eiffizienter Listingprozess
                    </h4>
                  </div>
                  <h5 id="Mobile_FU_Vorteile_Inner_Box_Bottom_h5">
                    Um die Kapitalaufnahme so leicht wie möglich zu gestalten,
                    haben wir für Sie einen schnellen und unkomplizierten
                    Listingprozess entwickelt. Welches Projekt Sie listen,
                    bleibt Ihnen überlassen. Auf Chainvest Capital listen wir
                    vielfältige Projekte aus unterschiedlichen Branchen.
                  </h5>
                </div>
                <div id="Mobile_FU_Vorteile_Inner_Box_Wrapper">
                  <div id="Mobile_FU_Vorteile_Inner_Box_Top">
                    {" "}
                    <img
                      src={check}
                      id="Mobile_FU_Vorteile_Inner_Box_Img"
                      alt=""
                    />
                    <h4 id="Mobile_FU_Vorteile_Inner_Box_Top_h4">Marketing</h4>
                  </div>
                  <h5 id="Mobile_FU_Vorteile_Inner_Box_Bottom_h5">
                    Bei Chainvest Capital unterstützten wir Sie bei der
                    Vermarktung Ihres Digitalen Wertpapaiers und finden
                    individuellen Marketinglösungen für Ihr Investitionsprojekt
                    für eine effiziente Kapitalaufnahme. Gewinnen Sie mit einer
                    Platzierung das Investoreninteresse und schaffen Sie
                    Vertrauen.
                  </h5>
                </div>
                <div id="Mobile_FU_Vorteile_Inner_Box_Wrapper">
                  <div id="Mobile_FU_Vorteile_Inner_Box_Top">
                    {" "}
                    <img
                      src={check}
                      id="Mobile_FU_Vorteile_Inner_Box_Img"
                      alt=""
                    />
                    <h4 id="Mobile_FU_Vorteile_Inner_Box_Top_h4">Wachstum</h4>
                  </div>
                  <h5 id="Mobile_FU_Vorteile_Inner_Box_Bottom_h5">
                    Erreichen Sie mit einer Platzierung Ihres digitlaen
                    Wertpapaiers bei Chainvest Capital mehr Sichtbarkeit und
                    setzen Sie ein Zeichen für Transparenz. Nutzen Sie unser
                    Netzwerk für eine erfolgreiche Unternehmensfinanzierung und
                    steigern Sie das Wachstumspotenzial Ihres
                    Investitionsprojekts.
                  </h5>
                </div>
              </div>
            </div>
            <div id="Mobile_FU_Ablauf_Wrapper">
              <div id="Mobile_FU_Ablauf_Inner">
                <h2 id="Mobile_FU_Ablauf_Inner_h2">
                  Der Ablauf ihres Listings
                </h2>
                <div id="Mobile_FU_Ablauf_Inner_Box">
                  <div id="Mobile_FU_Ablauf_Inner_Box_Left">
                    <img
                      src={Kontaktaufnahme}
                      alt=""
                      id="Mobile_FU_Ablauf_Inner_Box_img"
                    />
                  </div>
                  <div id="Mobile_FU_Ablauf_Inner_Box_Right">
                    <h4 id="Mobile_FU_Ablauf_Inner_Box_Right_h4">
                      Kontaktaufnahme
                    </h4>
                    <h5 id="Mobile_FU_Ablauf_Inner_Box_Right_h5">
                      Sie nehmen formlos Kontakt mit uns auf
                    </h5>
                  </div>
                </div>
                <div id="Mobile_FU_Ablauf_Inner_Box">
                  <div id="Mobile_FU_Ablauf_Inner_Box_Left_Info">
                    <img
                      alt=""
                      src={Informationsaustausch}
                      id="Mobile_FU_Ablauf_Inner_Box_img"
                    />
                  </div>
                  <div id="Mobile_FU_Ablauf_Inner_Box_Right">
                    <h4 id="Mobile_FU_Ablauf_Inner_Box_Right_h4">
                      Informationsaustausch
                    </h4>
                    <h5 id="Mobile_FU_Ablauf_Inner_Box_Right_h5">
                      Wir tauschen die relevanten Informationen
                    </h5>
                  </div>
                </div>
                <div id="Mobile_FU_Ablauf_Inner_Box">
                  <div id="Mobile_FU_Ablauf_Inner_Box_Left_Listing">
                    <img
                      src={Listing}
                      id="Mobile_FU_Ablauf_Inner_Box_img"
                      alt=""
                    />
                  </div>
                  <div id="Mobile_FU_Ablauf_Inner_Box_Right">
                    <h4 id="Mobile_FU_Ablauf_Inner_Box_Right_h4">Listing</h4>
                    <h5 id="Mobile_FU_Ablauf_Inner_Box_Right_h5">
                      Wir nehmen das Projekt auf unser Plattform auf
                    </h5>
                  </div>
                </div>
                <div id="Mobile_FU_Ablauf_Inner_Box">
                  <div id="Mobile_FU_Ablauf_Inner_Box_Left_Live">
                    <img
                      src={LivePic}
                      id="Mobile_FU_Ablauf_Inner_Box_img"
                      alt=""
                    />
                  </div>
                  <div id="Mobile_FU_Ablauf_Inner_Box_Right">
                    <h4 id="Mobile_FU_Ablauf_Inner_Box_Right_h4">
                      Ihr Projekt ist live
                    </h4>
                  </div>
                </div>
                <h4 id="Mobile_FU_Ablauf_Inner_Box_Right_h5">
                  Mehr Informationen zu ihrem Listing finden Sie{" "}
                  <a
                    id="UnderlIne"
                    href="https://uploads-ssl.webflow.com/5f8025558e24206e1d526137/6064224aab76709cd9d956ef_FAQ%20Listing%20von%20Finanzinstrumenten.pdf"
                  >
                    hier
                  </a>
                  .
                </h4>
              </div>
            </div>
          </div>
        </div>
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default FoFUnternehmen;
