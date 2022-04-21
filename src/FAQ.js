import "./App.css";
import React from "react";
import awsExports from "./aws-exports";
import { useState, useEffect } from "react";
import FOOTER from "./components/navigation/Footer";
import "./Design/FAQ.css";
import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";
import Amplify from "aws-amplify";
import TL_Img from "./assets/images/TL_Img.png";
import UR_Img from "./assets/images/UR_Img.png";
import Mobil_IT from "./assets/images/Mobil_IT.png";
import OR_Img from "./assets/images/OR_Img.png";
import ChainvestCapital from "./components/Frames/FAQ/ChainvestCapital";
import DigitaleWP from "./components/Frames/FAQ/Digitale_Wertpapiere";
import Investtition from "./components/Frames/FAQ/Investition";

import MChainvestCapital from "./components/Frames/FAQ/mChainvestCapital";
import MDigitaleWP from "./components/Frames/FAQ/mDigitale_Wertpapiere";
import MInvesttition from "./components/Frames/FAQ/mInvestition";

import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import CookieConsent from "react-cookie-consent";

import FAQArr from "./assets/images/FAQArr.png";
import { Link } from "react-router-dom";
import FAQ_CVC from "./assets/images/FAQ_CVC.png";
import FAQ_DiW from "./assets/images/Finance.png";

Amplify.configure(awsExports);
function FAQ() {
  useEffect(() => {
    document.title = "FAQ";
  }, []);

  const [mChainvestCapitalshown, mChainvestCapitalsetshown] = useState(true);
  const [mDigitalwWPshown, msetDigitalwWPshown] = useState(false);

  //////
  /////Mobil
  /////
  const [mFAQ_Menue_Row_Button1, msetFAQ_Menue_Row_Button1] = useState(
    "mFAQ_Menue_Row_Button_Aktiv"
  );
  const [mFAQ_Menue_Row_Button2, msetFAQ_Menue_Row_Button2] = useState(
    "mFAQ_Menue_Row_Button_Inaktiv"
  );

  //////
  /////Mobil
  /////
  function mCVOpen() {
    mChainvestCapitalsetshown(true);
    msetDigitalwWPshown(false);
    msetFAQ_Menue_Row_Button1("mFAQ_Menue_Row_Button_Aktiv");
    msetFAQ_Menue_Row_Button2("mFAQ_Menue_Row_Button_Inaktiv");
  }

  function mDWOpen() {
    mChainvestCapitalsetshown(false);
    msetDigitalwWPshown(true);
    msetFAQ_Menue_Row_Button1("mFAQ_Menue_Row_Button_Inaktiv");
    msetFAQ_Menue_Row_Button2("mFAQ_Menue_Row_Button_Aktiv");
  }

  const [ChainvestCapitalshown, ChainvestCapitalsetshown] = useState(true);
  const [DigitalwWPshown, setDigitalwWPshown] = useState(false);

  const [current_FAQ_Topic, setcurrent_FAQ_Topic] =
    useState("ChainvestCapital");

  function showCVC() {
    ChainvestCapitalsetshown(true);
    setDigitalwWPshown(false);

    setcurrent_FAQ_Topic("ChainvestCapital");
  }
  function showDW() {
    ChainvestCapitalsetshown(false);
    setDigitalwWPshown(true);
    setcurrent_FAQ_Topic("Digitale Wertpapiere");
  }

  function menueCVCak() {
    if (current_FAQ_Topic === "ChainvestCapital") {
      return (
        <div id="FAQ_Menue_Wrapper">
          <div id="FAQ_Menue_CVC_Wrapper_Aktiv">
            <div id="Aktiv_Top_Right">Aktiv</div>
            <div id="FAQ_Menue_CVC_Img_Wrapper_white">
              <img src={FAQ_CVC} id="FAQ_Menue_CVC_Img" />
            </div>
            <div id="FAQ_Menue_CVC_Wrapper_Right">
              <h3 id="FAQ_Menue_CVC_Wrapper_h3">Chainvest Capital</h3>
            </div>
          </div>{" "}
          <div id="FAQ_Menue_CVC_Wrapper" onClick={() => showDW()}>
            <div id="FAQ_Menue_CVC_Img_Wrapper">
              <img src={FAQ_DiW} id="FAQ_Menue_CVC_Img" />
            </div>
            <div id="FAQ_Menue_CVC_Wrapper_Right">
              <h3 id="FAQ_Menue_CVC_Wrapper_h3">Digitale Wertpapiere</h3>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="FAQ_Menue_Wrapper">
          <div id="FAQ_Menue_CVC_Wrapper" onClick={() => showCVC()}>
            <div id="FAQ_Menue_CVC_Img_Wrapper">
              <img src={FAQ_CVC} id="FAQ_Menue_CVC_Img" />
            </div>
            <div id="FAQ_Menue_CVC_Wrapper_Right">
              <h3 id="FAQ_Menue_CVC_Wrapper_h3">Chainvest Capital</h3>
            </div>
          </div>{" "}
          <div id="FAQ_Menue_CVC_Wrapper_Aktiv">
            <div id="Aktiv_Top_Right">Aktiv</div>
            <div id="FAQ_Menue_CVC_Img_Wrapper_white">
              <img src={FAQ_DiW} id="FAQ_Menue_CVC_Img" />
            </div>
            <div id="FAQ_Menue_CVC_Wrapper_Right">
              <h3 id="FAQ_Menue_CVC_Wrapper_h3">Digitale Wertpapiere</h3>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
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
          Marketing-Mitteilungen. Durch die weitere Nutzung der Website stimmen
          Sie der Verwendung zu. Mehr dazu finden sie in unser{" "}
          <Link to="./Datenschutzerklaerung">Datenschutzerklärung</Link>
          <span style={{ fontSize: "10px" }}></span>
        </CookieConsent>{" "}
        <TOP_NAV_BAR />
        <div
          id="FAQ_BG
        "
        >
          {" "}
          <div id="FAQ_BG_Wrapper_White"></div>
          <div id="FAQ_BG_Wrapper_Content">
            <div id="Blue_Absolute"></div>
            <div id="FAQ_TOP">
              <div id="FAQ_TOP_left">
                {" "}
                <h5 id="CV_h5_dark">Häufig gestellte Fragen</h5>
                <h1 id="CV_h1_dark_faq">FAQ</h1>
              </div>
              <div id="Div_Home_Top_Section_Right">
                <div id="FAQ_Content_Wrapper">
                  {menueCVCak()}

                  <div id="FAQ_Fragen">
                    <ChainvestCapital
                      trigger={ChainvestCapitalshown}
                      setTrigger={ChainvestCapitalsetshown}
                    />
                    <DigitaleWP
                      trigger={DigitalwWPshown}
                      setTrigger={setDigitalwWPshown}
                    />
                  </div>
                </div>
                {/*
                <div id="Div_Home_Top_Section_Right_Spalte_left">
                  <div id="Div_Home_Top_Section_Right_TL_Wrapper">
                    <img
                      src={TL_Img}
                      id="Div_Home_Top_Section_Right_TL_Img"
                      alt=""
                    />
                  </div>
                  <div id="Div_Home_Top_Section_Right_BL_Wrapper">
                    <h3 id="Div_Home_Top_Section_Right_BR_Wrapper_h3">
                      Was sind digitale Wertpapiere ?
                    </h3>
                    <h5 id="Div_Home_Top_Section_Right_BR_Wrapper_h5">
                      Digitale Wertpapiere bringen klassische Finanzprodukte in
                      die digitale Welt. Dabei entstehen durch das Verwenden der
                      Blockchain-Technologie Vorteile für InvestorInnen und
                      EmittentInnen bspw. im Hinblick auf Transaktionskosten.
                    </h5>
                  </div>
                </div>

                <div id="Div_Home_Top_Section_Right_Spalte_right">
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
                </div>*/}
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
        <FOOTER />{" "}
      </div>
      <div id="Mobile_Wrapper">
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
          Marketing-Mitteilungen. Durch die weitere Nutzung der Website stimmen
          Sie der Verwendung zu. Mehr dazu finden sie in unser{" "}
          <Link to="./Datenschutzerklaerung">Datenschutzerklärung</Link>
          <span style={{ fontSize: "10px" }}></span>
        </CookieConsent>{" "}
        <div id="Mobile_Background_Grey">
          <div id="Mobile_Background_White_Overlay"></div>
          <div id="Mobile_ÜU_Content">
            <MOBILE_MENUE />
            <div id="Mobile_FAQ_Top">
              <h2 id="Mobile_FAQ_Top_Top_H2">
                Häufig gestellte
                <br /> Fragen
              </h2>{" "}
            </div>
            <div id="Mobile_FAQ_Menue">
              <div onClick={() => mCVOpen()} id={mFAQ_Menue_Row_Button1}>
                Chainvest Capital
              </div>
              <div onClick={() => mDWOpen()} id={mFAQ_Menue_Row_Button2}>
                Digitale Wertpapiere
              </div>
            </div>
            <div id="mobile_FAQ_Content">
              <MChainvestCapital
                trigger={mChainvestCapitalshown}
                setTrigger={mChainvestCapitalsetshown}
              />
              <MDigitaleWP
                trigger={mDigitalwWPshown}
                setTrigger={msetDigitalwWPshown}
              />
            </div>
          </div>{" "}
          <MOBILE_FOOTER />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
