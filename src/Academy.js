import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";
import React, { useEffect } from "react";
import { useState } from "react";

import Footer from "./components/navigation/Footer";

import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";

import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import MChainvestCapital from "./components/Frames/FAQ/mChainvestCapital";
import MDigitaleWP from "./components/Frames/FAQ/mDigitale_Wertpapiere";
import Blockchain from "./components/Academy/Blockchain";
import DeFi from "./components/Academy/DeFi";
import DigitaleAssets from "./components/Academy/DigitaleAssets";

import MBlockchain from "./components/Academy/mBlockchain";
import MDeFi from "./components/Academy/mDeFi";
import MDigitaleAssets from "./components/Academy/mDigitaleAssets";
import Mobile_Academy_Top_Img from "./assets/images/Academy_Img.png";
import "./Design/Academy.css";
function FoFUnternehmen(props) {
  useEffect(() => {
    document.title = "Academy";
  }, []);
  const [showDigitaleAssets, setshowDigitaleAssets] = useState(true);
  const [showDeFi, setshowDeFi] = useState(false);
  const [showBlockchain, setshowBlockchain] = useState(false);

  const [mshowDigitaleAssets, setmshowDigitaleAssets] = useState(true);
  const [mshowDeFi, setmshowDeFi] = useState(false);
  const [mshowBlockchain, setmshowBlockchain] = useState(false);

  const [Current_active_topic, setCurrent_active_topic] =
    useState("Digitale Assets");
  const [Current_inactive_Topic_1, setCurrent_inactive_Topic_1] = useState(
    "Decentralised Finance"
  );
  const [Current_inactive_Topic_2, setCurrent_inactive_Topic_2] =
    useState("Blockchain");

  function showBlockchainFrame() {
    setmshowDigitaleAssets(false);
    setmshowDeFi(false);
    setmshowBlockchain(true);

    setshowDigitaleAssets(false);
    setshowDeFi(false);
    setshowBlockchain(true);

    setCurrent_active_topic("Blockchain");
  }
  function showDeFiFrame() {
    setshowDigitaleAssets(false);
    setshowDeFi(true);
    setshowBlockchain(false);

    setmshowDigitaleAssets(false);
    setmshowDeFi(true);
    setmshowBlockchain(false);
    setCurrent_active_topic("Decentralised Finance");
  }
  function showDigitaleAssetsFrame() {
    setshowDigitaleAssets(true);
    setshowDeFi(false);
    setshowBlockchain(false);

    setmshowDigitaleAssets(true);
    setmshowDeFi(false);
    setmshowBlockchain(false);
    setCurrent_active_topic("Digitale Assets");
  }
  function buildMenue() {
    if (Current_active_topic === "Digitale Assets") {
      return (
        <div id="innerMenue">
          <h3 id="Academy_Current_Aktive">Digitale Assets</h3>

          <div id="Academy_Mini_Menue">
            <h3 id="Academy_Current_Aktive">Wechseln zu:</h3>

            <div id="ChoiceWrapper">
              <h5 id="Academy_Mini_Menue_h5" onClick={() => showDeFiFrame()}>
                Decentralised Finance
              </h5>

              <h5
                id="Academy_Mini_Menue_h5"
                onClick={() => showBlockchainFrame()}
              >
                Blockchain
              </h5>
            </div>
          </div>
        </div>
      );
    }

    if (Current_active_topic === "Decentralised Finance") {
      return (
        <div id="innerMenue">
          <h3 id="Academy_Current_Aktive">Decentralised Finance</h3>

          <div id="Academy_Mini_Menue">
            <h3 id="Academy_Current_Aktive">Wechseln zu:</h3>

            <div id="ChoiceWrapper">
              <h5
                id="Academy_Mini_Menue_h5"
                onClick={() => showDigitaleAssetsFrame()}
              >
                Digitale Assets
              </h5>

              <h5
                id="Academy_Mini_Menue_h5"
                onClick={() => showBlockchainFrame()}
              >
                Blockchain
              </h5>
            </div>
          </div>
        </div>
      );
    }

    if (Current_active_topic === "Blockchain") {
      return (
        <div id="innerMenue">
          <h3 id="Academy_Current_Aktive">Blockchain</h3>

          <div id="Academy_Mini_Menue">
            <h3 id="Academy_Current_Aktive">Wechseln zu:</h3>

            <div id="ChoiceWrapper">
              <h5 id="Academy_Mini_Menue_h5" onClick={() => showDeFiFrame()}>
                Decentralised Finance
              </h5>

              <h5
                id="Academy_Mini_Menue_h5"
                onClick={() => showDigitaleAssetsFrame()}
              >
                Digitale Assets
              </h5>
            </div>
          </div>
        </div>
      );
    }
  }

  function buildMenuem() {
    if (Current_active_topic === "Digitale Assets") {
      return (
        <div id="minnerMenue">
          <h3 id="mAcademy_Current_Aktive">Digitale Assets</h3>

          <div id="mAcademy_Mini_Menue">
            <h3 id="mAcademy_Mini_Menue_h5">Wechseln zu:</h3>

            <div id="mChoiceWrapper">
              <h5 id="mAcademy_Mini_Menue_h5" onClick={() => showDeFiFrame()}>
                Decentralised Finance
              </h5>

              <h5
                id="mAcademy_Mini_Menue_h5"
                onClick={() => showBlockchainFrame()}
              >
                Blockchain
              </h5>
            </div>
          </div>
        </div>
      );
    }

    if (Current_active_topic === "Decentralised Finance") {
      return (
        <div id="minnerMenue">
          <h3 id="mAcademy_Current_Aktive">Decentralised Finance</h3>

          <div id="mAcademy_Mini_Menue">
            <h3 id="mAcademy_Mini_Menue_h5">Wechseln zu:</h3>

            <div id="mChoiceWrapper">
              <h5
                id="mAcademy_Mini_Menue_h5"
                onClick={() => showDigitaleAssetsFrame()}
              >
                Digitale Assets
              </h5>

              <h5
                id="mAcademy_Mini_Menue_h5"
                onClick={() => showBlockchainFrame()}
              >
                Blockchain
              </h5>
            </div>
          </div>
        </div>
      );
    }

    if (Current_active_topic === "Blockchain") {
      return (
        <div id="minnerMenue">
          <h3 id="mAcademy_Current_Aktive">Blockchain</h3>

          <div id="mAcademy_Mini_Menue">
            <h3 id="mAcademy_Mini_Menue_h5">Wechseln zu:</h3>

            <div id="mChoiceWrapper">
              <h5 id="mAcademy_Mini_Menue_h5" onClick={() => showDeFiFrame()}>
                Decentralised Finance
              </h5>

              <h5
                id="mAcademy_Mini_Menue_h5"
                onClick={() => showDigitaleAssetsFrame()}
              >
                Digitale Assets
              </h5>
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
        <div id="Academy_BG_Wrapper_diese">
          <div id="Academy_BG_Wrapper_White_diese"></div>
          <div id="Academy_BG_Wrapper_Content">
            <TOP_NAV_BAR />
            <div id="Academy_Top">
              <div id="Academy_Top_LeFT">
                <h1 id="CV_h1_dark">Chainvest Capital</h1>
                <h1 id="CV_h1_yellow">Academy</h1>
                <h5 id="FU_Top_left_h5">
                  Chainvest Capital möchte über die transparente Darstellung von
                  unseren Projekten zu besseren Investitionsentscheidung
                  beitragen. Dafür stellen wir Ihnen hilfreiche Informtionen zu
                  diversen Themenbereichen zur Verfügung. Wählen Sie zwischen
                  den drei Kategorien aus, über welches Thema Sie sich
                  informieren wollen.
                </h5>
              </div>
              <div id="Academy_Top_Right">
                <img src={Mobile_Academy_Top_Img} id="Mobile_Academy_Top_Img" />
              </div>
            </div>
            <div id="Academy_Heading_Bar">{buildMenue()}</div>
            <div id="Academy_Top_Boxes_Wrapper">
              <Blockchain
                trigger={showBlockchain}
                setTrigger={setshowBlockchain}
              />
              <DigitaleAssets
                trigger={showDigitaleAssets}
                setTrigger={setshowDigitaleAssets}
              />
              <DeFi trigger={showDeFi} setTrigger={setshowDeFi} />
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
          <div id="Mobile_Background_White_Overlay"></div> <MOBILE_MENUE />
          <div id="Mobile_Academy_Content">
            {" "}
            <div id="Mobile_Academy_Top">
              <h2 id="Mobile_Home_Top_Sec_H2"></h2>
              <h2 id="Mobile_Home_Top_Sec_H2_yellow">Academy</h2>
              <h5 id="Mobile_Home_Top_Sec_H5">
                Chainvest Capital möchte über die transparente Darstellung von
                unseren Projekten zu besseren Investitionsentscheidung
                beitragen. Dafür stellen wir Ihnen hilfreiche Informtionen zu
                diversen Themenbereichen zur Verfügung. Wählen Sie zwischen den
                drei Kategorien aus, über welches Thema Sie sich informieren
                wollen. wollen.
              </h5>{" "}
            </div>
            <div id="Mobile_Academy_Menue">
              <div id="Mobile_Academy_Menue_White">{buildMenuem()}</div>
            </div>
            <div id="Mobile_Academy_Content">
              <MBlockchain
                trigger={mshowBlockchain}
                setTrigger={setmshowBlockchain}
              />
              <MDigitaleAssets
                trigger={mshowDigitaleAssets}
                setTrigger={setmshowDigitaleAssets}
              />
              <MDeFi trigger={mshowDeFi} setTrigger={setmshowDeFi} />
            </div>
          </div>
        </div>
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default FoFUnternehmen;
