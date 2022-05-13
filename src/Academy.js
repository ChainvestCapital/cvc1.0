import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";
import React, { useEffect } from "react";
import { useState } from "react";

import Footer from "./components/navigation/Footer";

import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import MAcademyContent from "./components/Academy/MAcademyContent";

import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import MChainvestCapital from "./components/Frames/FAQ/mChainvestCapital";
import MDigitaleWP from "./components/Frames/FAQ/mDigitale_Wertpapiere";
import Blockchain from "./components/Academy/Blockchain";
import DeFi from "./components/Academy/DeFi";
import DigitaleAssets from "./components/Academy/DigitaleAssets";
import { HashLink } from "react-router-hash-link";

import MBlockchain from "./components/Academy/mBlockchain";
import MDeFi from "./components/Academy/mDeFi";
import MDigitaleAssets from "./components/Academy/mDigitaleAssets";
import Mobile_Academy_Top_Img from "./assets/images/Academy_Img.png";
import ContentImg1 from "./assets/images/Content/Content_Dig_Wp.png";
import ContentImg2 from "./assets/images/Content/Content_exchange.png";
import ContentImg3 from "./assets/images/Content/Content_NFRIDF.png";
import Content_Immobilienindizes from "./assets/images/Content/Content_Immobilienindizes.png";
import Content_Metaverse from "./assets/images/Content/Content_Metaverse.png";

import AcademyAcademyTop_Right from "./assets/images/Academy-Top_Right.png";

import "./Design/Academy.css";
function FoFUnternehmen(props) {
  useEffect(() => {
    document.title = "Academy";
  }, []);
  const [showDigitaleAssets, setshowDigitaleAssets] = useState(true);
  const [showDeFi, setshowDeFi] = useState(false);
  const [showBlockchain, setshowBlockchain] = useState(false);

  const [mshowDigitaleAssets, setmshowDigitaleAssets] = useState(false);
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
          <div id="Academy_BG_Wrapper_Content">
            <TOP_NAV_BAR />
            <div id="Academy_Top">
              <div id="Academy_Top_LeFT">
                <h1 id="CV_h1_dark">Chainvest Capital</h1>
                <h1 id="CV_h1_yellow">Academy</h1>
                <h5 id="FU_Top_left_h5">
                  Der digitale Kapitalmarkt ist extrem schnelllebig und für
                  viele Marktteilnehmer nur schwer verständlich. Wir möchten
                  Abhilfe schaffen und durch unsere Academy das Verständnis
                  diverser Themenbereiche rund um die Blockchain fördern, um so
                  zu einer optimalen Investitionsentscheidung beizutragen.
                </h5>
              </div>
              <div id="Academy_Top_Right">
                <img src={AcademyAcademyTop_Right} id="Academy-Top_Right_IMG" />
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
        <div id="Mobile_Academy_Wrapper">
          <MOBILE_MENUE />
          <div id="Mobile_Academy_Content">
            {" "}
            <div id="Mobile_Academy_Top">
              <h2 id="Mobile_Home_Top_Sec_H2"></h2>
              <h2 id="Mobile_Home_Top_Sec_H2_yellow">Academy</h2>
              <h5 id="Mobile_Home_Top_Sec_H5">
                Der digitale Kapitalmarkt ist extrem schnelllebig und für viele
                Marktteilnehmer nur schwer verständlich. Wir möchten Abhilfe
                schaffen und durch unsere Academy das Verständnis diverser
                Themenbereiche rund um die Blockchain fördern, um so zu einer
                optimalen Investitionsentscheidung beizutragen.
              </h5>{" "}
            </div>
            <div id="Mobile_Academy_Menue">
              <div id="Mobile_Academy_Menue_White">{buildMenuem()}</div>
            </div>
            <div id="Mobile_Academy_Content_bOTTOM">
              <HashLink to="../Academy/Was-sind-digitale-Wertpapiere#">
                <MAcademyContent
                  Heading="Was sind digitale Wertpapiere ?"
                  Länge="653 Wörter"
                  Tag1="Digitale Wertpapiere"
                  Tag2="Security Token"
                  bgimg={ContentImg1}
                  Tag3="Tokenisierung"
                  Beschreibung="In den letzten Jahren hat die Anwendung der Blockchain-Technologie in unterschiedlichen Bereichen zugenommen und dabei unter Beweis gestellt, dass diese geeignet ist, um effizient und transparent Daten zu transferieren. Neben vielen Anwendungsmöglichkeiten hat sich insbesondere die Tokenisierung von Vermögenswerten als einer der Anwendungsfälle mit dem höchsten Disruptionspotential herausgestellt. 

      Durch die Tokenisierung entstehen sog. digitale Wertpapiere, die sowohl Vermögenswerte als auch klassische Wertpapiere in die digitale Welt bringen. Dabei entstehen durch das Verwenden der Blockchain-Technologie Vorteile für InvestorInnen und EmittentInnen.
      "
                />
              </HashLink>
              <HashLink to="../Academy/Non-Financial-Risks-in-DeFi#">
                <MAcademyContent
                  Heading="Non Financial Risks 
          in DeFi"
                  Länge="855 Wörter"
                  Tag1="DeFi"
                  Tag2="Tech"
                  bgimg={ContentImg2}
                  Tag3="Tokenisierung"
                  Beschreibung="Einer der spannendsten Einsatzbereiche der Blockchain Technologie stellt der Bereich des Decentralised Finance (DeFi) dar. Die vergleichsweise hohen Renditen haben seit 2017 viele Anleger in diesen Bereich gelockt. Das innerhalb des DeFi Systems investierte Kapital (Total Value locked) konnte innerhalb weniger Jahre auf weltweit über 270 Milliarden USD wachsen. "
                />{" "}
              </HashLink>
              <div id="Margin-Bottom-2vh"></div>
              <div id="Margin-Bottom-2vh"></div>{" "}
              <HashLink to="../Academy/DEX#">
                <MAcademyContent
                  Heading="Decentralised Exchanges"
                  Länge="553 Wörter"
                  Tag1="DeFi"
                  Tag2="Finance"
                  bgimg={ContentImg3}
                  Tag3="Tokenisierung"
                  Beschreibung="Das Konzept der Dezentralisierung macht auch vor Börsenplätzen (eng. Exchanges) nicht Halt. Durch das große Wachstum des DeFi-Bereichs konnten dezentrale Börsen schnell wachsen und wickeln mittlerweile Transaktionsvolumen in ähnlichen Größenordnungen wie zentrale Börsenplätze im Krypto-Ökosystem ab."
                />
              </HashLink>
              <HashLink to="../Academy/Metaverse#">
                <MAcademyContent
                  Heading="Das Metaverse und Web 3.0 im Überblick
                  "
                  Länge="553 Wörter"
                  Tag1="Metaverse"
                  Tag2="Tokenisierung"
                  bgimg={Content_Metaverse}
                  Beschreibung="Die Digitalisierung verläuft rasend schnell und mit ihr die Anwendungsmöglichkeiten, welche Technologien zukünftig bieten könnten. Die digitale Identität ist schon lange ein wichtiger Bestandteil des Lebens vieler Nutzer und scheint sich schon heute immer weiter in herkömmliche Strukturen zu implementieren. Konzeptionen, wie das Metaverse, lassen Nutzer spekulieren, wie ein nahtloses Zusammenspiel zwischen der herkömmlichen und digitalen Welt Realität werden könnte ab."
                />
              </HashLink>
              <HashLink to="../Academy/Immobilienindizes-und-tokenisierte-Immobilien-im-Vergleich#">
                <MAcademyContent
                  Heading="Immobilienindizes und tokenisierte Immobilien im
                  Vergleich"
                  Länge="553 Wörter"
                  Tag1="Tokenisierung"
                  Tag2="Finance"
                  bgimg={Content_Immobilienindizes}
                  Beschreibung="Eine Investition am Immobilienmarkt ist aus vielerlei Gründen attraktiv, allerdings bieten die klassichen Investitionsvehikel wie Derivate einige Probleme. Digitale Wertpapiere und insbesondere tokenisierte Immobilien, bieten eine neue Art der Investition in den Immobiliensektor und scheinen in einigen Aspekten revolutionäre Vorteile zu bieten."
                />
              </HashLink>
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
