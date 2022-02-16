import React from "react";
import MRisikoBanner from "../../Components/mRisikoBanner";

import { useState, useEffect } from "react";
import awsExports from "../../../aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "../../../graphql/queries";
import Amplify from "aws-amplify";

import "./Boernerstrasse.css";
import TOP_NAV_BAR from "../../../components/navigation/Top_Nav_Bar";
import Footer from "../../../components/navigation/Footer";
import Top_Header_IMMO from "../../Components/TOP_HEADER_IMMO";
import Immobilien from "../../../assets/images/Immobilien.png";
import Überseeallee_Galerie_1 from "../../../assets/images/Überseeallee_Galerie_1.jpeg";
import Finexity_Logo from "../../../assets/images/Finexity_Logo.png";
import FINEXITY_FHP_Galerie_1 from "../../../assets/images/FINEXITY_FHP_Galerie_1.jpeg";

import ÜberblickImg from "../../../assets/images/Überblick.png";
import DetailsImg from "../../../assets/images/Details.png";
import DokumenteImg from "../../../assets/images/Dokumente.png";
import GalerieImg from "../../../assets/images/Galerie.png";
import FinancialsImg from "../../../assets/images/Finance.png";
import LageImg from "../../../assets/images/Lage.png";

import Überblick from "./Frames/Überblick";
import Details from "./Frames/Details";
import Dokumente from "./Frames/Dokumente";
import Financials from "./Frames/Financials";
import Lage from "./Frames/Lage";
import Galerie from "./Frames/Galerie";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import MÜberblick from "./MobileFrames/Überblick";
import MDetails from "./MobileFrames/Details";
import MDokumente from "./MobileFrames/Dokumente";
import MFinancials from "./MobileFrames/Financials";
import MLage from "./MobileFrames/Lage";
import MGalerie from "./MobileFrames/Galerie";

import MOBILE_MENUE from "../../../MobileComponents/Mobile_menue";
import MOBILE_FOOTER from "../../../MobileComponents/Mobile_Footer";
import MOBILE_FIX_HEADER from "../../MobileComponents/Mobile_Fix_Header";
import RISIKO_BANNER from "../../Components/Risiko_Banner";

Amplify.configure(awsExports);

function FerdinandHappStraße(props) {
  ///////////////////////////////        Getting Infos

  const [ProjekteArray, setProjekteArray] = useState([]);
  const [DreierProjekteArray, setDreierProjekteArray] = useState([]);
  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
      fillFelder(ProjekteList);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProjekte();
  }, []);
  const [Mindestinvestition, setMindestinvestition] =
    useState("Nicht verfügbar");
  const [Finanzierungsvolumen, setFinanzierungsvolumen] =
    useState("Nicht verfügbar");
  const [Typ, setTyp] = useState("Nicht verfügbar");
  const [Rendite, setRendite] = useState("Nicht verfügbar");
  const [BeschreibungTop, setBeschreibungTop] = useState("Nicht verfügbar");
  const [Logo, setLogo] = useState();

  const [FirmenName, setFirmenName] = useState("Nicht verfügbar");
  const [Emittent, setEmittent] = useState("Nicht verfügbar");
  const [Rechtsform, setRechtsform] = useState("Nicht verfügbar");
  const [Emissionszeitraum, setEmissionszeitraum] = useState("Nicht verfügbar");
  const [ISIN, setISIN] = useState("Nicht verfügbar");
  const [ITIN, setITIN] = useState("Nicht verfügbar");
  const [Geschaeftstaetigkeit, setGeschaeftstaetigkeit] =
    useState("Nicht verfügbar");
  const [Kurzbeschreibung, setKurzbeschreibung] = useState("Nicht verfügbar");
  const [Ort, setOrt] = useState("Nicht verfügbar");
  const [Gruendung, setGruendung] = useState("Nicht verfügbar");
  const [MaxTokenAnzahl, setMaxTokenAnzahl] = useState("Nicht verfügbar");
  const [RechtlicheBezeichnung, setRechtlicheBezeichnung] =
    useState("Nicht verfügbar");
  const [WppG, setWppG] = useState("Nicht verfügbar");
  const [Zahlungsmoeglichkeiten, setZahlungsmoeglichkeiten] =
    useState("Nicht verfügbar");
  const [Token_Ticker, setToken_Ticker] = useState("Nicht verfügbar");
  const [Blockchain, setBlockchain] = useState("Nicht Verfügbar");
  const [Kategorie, setKategorie] = useState("Nicht Verfügbar");

  const title = "Börnerstraße";

  function fillFelder(AlleProjekte) {
    AlleProjekte.map((Projekt) => {
      if (Projekt.id === title) {
        setMindestinvestition(Projekt.Mindestinvestition);
        setFinanzierungsvolumen(Projekt.Finanzierungsvolumen);
        setTyp(Projekt.Typ);
        setRendite(Projekt.ErwRendite);
        setBeschreibungTop(Projekt.Beschreibung);
        setLogo(Projekt.LogoLink);

        setFirmenName(Projekt.Firmenname);
        setEmittent(Projekt.Emittent);
        setRechtsform(Projekt.Rechtsform);
        setEmissionszeitraum(Projekt.Emissionszeitraum);
        setISIN(Projekt.ISIN);
        setITIN(Projekt.ITIN);
        setGeschaeftstaetigkeit(Projekt.Geschaeftstaetigkeit);
        setKurzbeschreibung(Projekt.KurzBeschreibung);
        setOrt(Projekt.Ort);
        setGruendung(Projekt.Gruendung);
        setMaxTokenAnzahl(Projekt.MaxTokenAnzahl);
        setRechtlicheBezeichnung(Projekt.Rechtliche_Bezeichnung);
        setWppG(Projekt.WppG);
        setZahlungsmoeglichkeiten(Projekt.Zahlungsmoeglichkeiten);
        setToken_Ticker(Projekt.Token_Ticker);
        setBlockchain(Projekt.Blockchain);
        setKategorie(Projekt.Kategorie);
      } else {
      }
    });
  }
  useEffect(() => {
    document.title = "Börnerstraße";
  }, []);
  ///////////////////////////////////
  ///////////////////////////////////

  /* Menü Funktionen*/

  const [Überblickshown, setÜberblickshown] = useState(true);
  const [Detailsshown, setDetailsshown] = useState(false);

  const [Lageshown, setLageshown] = useState(false);
  const [Financialsshown, setFinancialsshown] = useState(false);
  const [Dokumenteshown, setDokumenteshown] = useState(false);
  const [Galerieshown, setGalerieshown] = useState(false);

  function showÜerblickFrame() {
    setÜberblickshown(true);
    setDetailsshown(false);
    setLageshown(false);
    setFinancialsshown(false);
    setDokumenteshown(false);
    setGalerieshown(false);

    setMenue_Row1_Zustand("aktiv1MenüRow");
    setMenue_Row2_Zustand("inaktiv1MenüRow");
    setMenue_Row3_Zustand("inaktiv1MenüRow");
    setMenue_Row4_Zustand("inaktiv1MenüRow");
    setMenue_Row5_Zustand("inaktiv1MenüRow");
    setMenue_Row6_Zustand("inaktiv1MenüRow");
  }
  function showDetailsFrame() {
    setÜberblickshown(false);
    setDetailsshown(true);
    setLageshown(false);
    setFinancialsshown(false);
    setDokumenteshown(false);
    setGalerieshown(false);

    setMenue_Row1_Zustand("inaktiv1MenüRow");
    setMenue_Row2_Zustand("aktiv1MenüRow");
    setMenue_Row3_Zustand("inaktiv1MenüRow");
    setMenue_Row4_Zustand("inaktiv1MenüRow");
    setMenue_Row5_Zustand("inaktiv1MenüRow");
    setMenue_Row6_Zustand("inaktiv1MenüRow");
  }
  function showDokumenteFrame() {
    setÜberblickshown(false);
    setDetailsshown(false);
    setLageshown(false);
    setFinancialsshown(false);
    setDokumenteshown(true);
    setGalerieshown(false);

    setMenue_Row1_Zustand("inaktiv1MenüRow");
    setMenue_Row2_Zustand("inaktiv1MenüRow");
    setMenue_Row3_Zustand("inaktiv1MenüRow");
    setMenue_Row4_Zustand("aktiv1MenüRow");
    setMenue_Row5_Zustand("inaktiv1MenüRow");
    setMenue_Row6_Zustand("inaktiv1MenüRow");
  }
  function showFinancialsFrame() {
    setÜberblickshown(false);
    setDetailsshown(false);
    setLageshown(false);
    setFinancialsshown(true);
    setDokumenteshown(false);
    setGalerieshown(false);

    setMenue_Row1_Zustand("inaktiv1MenüRow");
    setMenue_Row2_Zustand("inaktiv1MenüRow");
    setMenue_Row3_Zustand("aktiv1MenüRow");
    setMenue_Row4_Zustand("inaktiv1MenüRow");
    setMenue_Row5_Zustand("inaktiv1MenüRow");
    setMenue_Row6_Zustand("inaktiv1MenüRow");
  }
  function showLageFrame() {
    setÜberblickshown(false);
    setDetailsshown(false);
    setLageshown(true);
    setFinancialsshown(false);
    setDokumenteshown(false);
    setGalerieshown(false);

    setMenue_Row1_Zustand("inaktiv1MenüRow");
    setMenue_Row2_Zustand("inaktiv1MenüRow");
    setMenue_Row3_Zustand("inaktiv1MenüRow");
    setMenue_Row4_Zustand("inaktiv1MenüRow");
    setMenue_Row5_Zustand("aktiv1MenüRow");
    setMenue_Row6_Zustand("inaktiv1MenüRow");
  }
  function showGalerieFrame() {
    setÜberblickshown(false);
    setDetailsshown(false);
    setLageshown(false);
    setFinancialsshown(false);
    setDokumenteshown(false);
    setGalerieshown(true);

    setMenue_Row1_Zustand("inaktiv1MenüRow");
    setMenue_Row2_Zustand("inaktiv1MenüRow");
    setMenue_Row3_Zustand("inaktiv1MenüRow");
    setMenue_Row4_Zustand("inaktiv1MenüRow");
    setMenue_Row5_Zustand("inaktiv1MenüRow");
    setMenue_Row6_Zustand("aktiv1MenüRow");
  }
  const [Menue_Row1_Zustand, setMenue_Row1_Zustand] = useState("aktiv1MenüRow");
  const [Menue_Row2_Zustand, setMenue_Row2_Zustand] =
    useState("inaktiv1MenüRow");
  const [Menue_Row3_Zustand, setMenue_Row3_Zustand] =
    useState("inaktiv1MenüRow");
  const [Menue_Row4_Zustand, setMenue_Row4_Zustand] =
    useState("inaktiv1MenüRow");
  const [Menue_Row5_Zustand, setMenue_Row5_Zustand] =
    useState("inaktiv1MenüRow");
  const [Menue_Row6_Zustand, setMenue_Row6_Zustand] =
    useState("inaktiv1MenüRow");
  ///////////////////////////////////
  ///////////////////////////////////

  ///////////////////////////////////
  ///////////////////////////////////

  /* Mobile Menü Funktionen*/
  const [mÜberblickshown, setmÜberblickshown] = useState(true);
  const [mDetailsshown, setmDetailsshown] = useState(false);
  const [mLageshown, setmLageshown] = useState(false);
  const [mFinancialsshown, setmFinancialsshown] = useState(false);
  const [mDokumenteshown, setmDokumenteshown] = useState(false);
  const [mGalerieshown, setmGalerieshown] = useState(false);

  function showMÜerblickFrame() {
    setmÜberblickshown(true);
    setmDetailsshown(false);
    setmLageshown(false);
    setmFinancialsshown(false);
    setmDokumenteshown(false);
    setmGalerieshown(false);

    setMMenue_Row1_Zustand("Mobile_Menue_Aktiv");
    setMMenue_Row2_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row3_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row4_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row5_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row6_Zustand("Mobile_Menue_inAktiv");

    setCurrentFrame("Überblick");
  }

  function showMDetailsFrame() {
    setmÜberblickshown(false);
    setmDetailsshown(true);
    setmLageshown(false);
    setmFinancialsshown(false);
    setmDokumenteshown(false);
    setmGalerieshown(false);

    setMMenue_Row1_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row2_Zustand("Mobile_Menue_Aktiv");
    setMMenue_Row3_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row4_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row5_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row6_Zustand("Mobile_Menue_inAktiv");

    setCurrentFrame("Details");
  }

  function showMLageFrame() {
    setmÜberblickshown(false);
    setmDetailsshown(false);
    setmLageshown(true);
    setmFinancialsshown(false);
    setmDokumenteshown(false);
    setmGalerieshown(false);

    setMMenue_Row1_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row2_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row3_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row4_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row5_Zustand("Mobile_Menue_Aktiv");
    setMMenue_Row6_Zustand("Mobile_Menue_inAktiv");

    setCurrentFrame("Lage");
  }

  function showMFinancialsFrame() {
    setmÜberblickshown(false);
    setmDetailsshown(false);
    setmLageshown(false);
    setmFinancialsshown(true);
    setmDokumenteshown(false);
    setmGalerieshown(false);

    setMMenue_Row1_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row2_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row3_Zustand("Mobile_Menue_Aktiv");
    setMMenue_Row4_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row5_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row6_Zustand("Mobile_Menue_inAktiv");

    setCurrentFrame("Financials");
  }

  function showMDokumenteFrame() {
    setmÜberblickshown(false);
    setmDetailsshown(false);
    setmLageshown(false);
    setmFinancialsshown(false);
    setmDokumenteshown(true);
    setmGalerieshown(false);

    setMMenue_Row1_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row2_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row3_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row4_Zustand("Mobile_Menue_Aktiv");
    setMMenue_Row5_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row6_Zustand("Mobile_Menue_inAktiv");

    setCurrentFrame("Dokumente");
  }

  function showMGalerieFrame() {
    setmÜberblickshown(false);
    setmDetailsshown(false);
    setmLageshown(false);
    setmFinancialsshown(false);
    setmDokumenteshown(false);
    setmGalerieshown(true);

    setMMenue_Row1_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row3_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row3_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row4_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row5_Zustand("Mobile_Menue_inAktiv");
    setMMenue_Row6_Zustand("Mobile_Menue_Aktiv");

    setCurrentFrame("Galerie");
  }

  //////////////////////////////

  const [MMenue_Row1_Zustand, setMMenue_Row1_Zustand] =
    useState("Mobile_Menue_Aktiv");
  const [MMenue_Row2_Zustand, setMMenue_Row2_Zustand] = useState(
    "Mobile_Menue_inAktiv"
  );
  const [MMenue_Row3_Zustand, setMMenue_Row3_Zustand] = useState(
    "Mobile_Menue_inAktiv"
  );
  const [MMenue_Row4_Zustand, setMMenue_Row4_Zustand] = useState(
    "Mobile_Menue_inAktiv"
  );
  const [MMenue_Row5_Zustand, setMMenue_Row5_Zustand] = useState(
    "Mobile_Menue_inAktiv"
  );
  const [MMenue_Row6_Zustand, setMMenue_Row6_Zustand] = useState(
    "Mobile_Menue_inAktiv"
  );

  ///////////////////////////////////
  /////////////////////////////////// ///////////////////////////////////
  ///////////////////////////////////

  const [CurrentFrame, setCurrentFrame] = useState("Überblick");

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
        <div id="Desktop_BG_Grey">
          <div id="Desktop_BG_White">
            <TOP_NAV_BAR />
            <Top_Header_IMMO
              kategorieImg={Immobilien}
              logo={Logo}
              Titel={FirmenName}
              Beschreibung={Kurzbeschreibung}
              extLink="https://finexity.com/marketplace/DE-HH-06"
              Kategorie={Kategorie}
              Rendite={Rendite}
              Finanzierungsvolumen={Finanzierungsvolumen}
              Mindestinvestition={Mindestinvestition}
              Typ={Typ}
              weiterebg={Überseeallee_Galerie_1}
              weitereLogo={Finexity_Logo}
              weiterebg2={FINEXITY_FHP_Galerie_1}
              weitereLogo2={Finexity_Logo}
              weitereLink="../Digitale-Wertpapiere/FerdinandHapp"
              weitereLink2="../Digitale-Wertpapiere/Ueberseeallee"
            />

            <div id="Projekt_Content_Wrapperx">
              <div id="Projekt_Content_Menü_Wrapper">
                {" "}
                <h3 id="Menue_h3">Menü</h3>
                <div
                  id={Menue_Row1_Zustand}
                  onClick={() => showÜerblickFrame()}
                >
                  <img
                    src={ÜberblickImg}
                    id="Projekt_Left_Menue_Row_img"
                    alt=""
                  />
                  <h3 id="Projekt_Left_Menue_Row_h3">Überblick</h3>
                </div>{" "}
                <div id={Menue_Row2_Zustand} onClick={() => showDetailsFrame()}>
                  <img
                    src={DetailsImg}
                    id="Projekt_Left_Menue_Row_img"
                    alt=""
                  />
                  <h3 id="Projekt_Left_Menue_Row_h3">Details</h3>
                </div>
                <div
                  id={Menue_Row3_Zustand}
                  onClick={() => showFinancialsFrame()}
                >
                  <img
                    src={FinancialsImg}
                    id="Projekt_Left_Menue_Row_img"
                    alt=""
                  />
                  <h3 id="Projekt_Left_Menue_Row_h3">Financials</h3>
                </div>
                <div
                  id={Menue_Row4_Zustand}
                  onClick={() => showDokumenteFrame()}
                >
                  <img
                    src={DokumenteImg}
                    id="Projekt_Left_Menue_Row_img"
                    alt=""
                  />
                  <h3 id="Projekt_Left_Menue_Row_h3">Dokumente</h3>
                </div>
                <div id={Menue_Row5_Zustand} onClick={() => showLageFrame()}>
                  <img src={LageImg} id="Projekt_Left_Menue_Row_img" alt="" />
                  <h3 id="Projekt_Left_Menue_Row_h3">Lage</h3>
                </div>
                <div id={Menue_Row6_Zustand} onClick={() => showGalerieFrame()}>
                  <img
                    src={GalerieImg}
                    id="Projekt_Left_Menue_Row_img"
                    alt=""
                  />
                  <h3 id="Projekt_Left_Menue_Row_h3">Galerie</h3>
                </div>
              </div>
              <div id="Projekt_Content_Frame_Wrapper">
                <Überblick
                  trigger={Überblickshown}
                  setTrigger={setÜberblickshown}
                />

                <Details trigger={Detailsshown} setTrigger={setDetailsshown} />
                <Financials
                  trigger={Financialsshown}
                  setTrigger={setFinancialsshown}
                />
                <Dokumente
                  trigger={Dokumenteshown}
                  setTrigger={setDokumenteshown}
                />
                <Lage trigger={Lageshown} setTrigger={setLageshown} />
                <Galerie trigger={Galerieshown} setTrigger={setGalerieshown} />
                <RISIKO_BANNER />
              </div>
            </div>
          </div>
        </div>
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
        <div id="Mobile_Projekt_Wrapper_BG">
          {" "}
          <MOBILE_MENUE /> <div id="Mobile_Projekt_Layer"></div>
          <div id="Mobile_Projekt_Content">
            {" "}
            <MOBILE_FIX_HEADER
              kategorieImg={Immobilien}
              logo={Logo}
              Titel={FirmenName}
              Beschreibung={Kurzbeschreibung}
              extLink="https://finexity.com/marketplace/DE-HH-07"
              Kategorie={Kategorie}
              Rendite={Rendite}
              Finanzierungsvolumen={Finanzierungsvolumen}
              Mindestinvestition={Mindestinvestition}
              Typ={Typ}
            />{" "}
            <div id="Mobile_Immo_Projekt_Section">
              <div id="Mobile_Projekt_Menue_Unten">
                <div
                  id={MMenue_Row1_Zustand}
                  onClick={() => showMÜerblickFrame()}
                >
                  <img
                    src={ÜberblickImg}
                    id="Mobile_Projekt_Menue_Unten_Column_Img"
                    alt=""
                  />
                </div>
                <div
                  id={MMenue_Row2_Zustand}
                  onClick={() => showMDetailsFrame()}
                >
                  <img
                    src={DetailsImg}
                    id="Mobile_Projekt_Menue_Unten_Column_Img"
                    alt=""
                  />
                </div>
                <div
                  id={MMenue_Row3_Zustand}
                  onClick={() => showMFinancialsFrame()}
                >
                  <img
                    src={FinancialsImg}
                    id="Mobile_Projekt_Menue_Unten_Column_Img"
                    alt=""
                  />
                </div>
                <div
                  id={MMenue_Row4_Zustand}
                  onClick={() => showMDokumenteFrame()}
                >
                  <img
                    src={DokumenteImg}
                    id="Mobile_Projekt_Menue_Unten_Column_Img"
                    alt=""
                  />
                </div>
                <div id={MMenue_Row5_Zustand} onClick={() => showMLageFrame()}>
                  <img
                    src={LageImg}
                    id="Mobile_Projekt_Menue_Unten_Column_Img"
                    alt=""
                  />
                </div>
                <div
                  id={MMenue_Row6_Zustand}
                  onClick={() => showMGalerieFrame()}
                >
                  <img
                    src={GalerieImg}
                    id="Mobile_Projekt_Menue_Unten_Column_Img"
                    alt=""
                  />
                </div>
              </div>
              <div id="Mobile_Current_Aktiv">
                <h3 id="Mobile_Current_Aktiv_H3">{CurrentFrame}</h3>
              </div>
              <div id="Mobile_Immo_Projekt_Section_Frames">
                <MÜberblick
                  trigger={mÜberblickshown}
                  setTrigger={setmÜberblickshown}
                />

                <MDetails
                  trigger={mDetailsshown}
                  setTrigger={setmDetailsshown}
                />
                <MFinancials
                  trigger={mFinancialsshown}
                  setTrigger={setmFinancialsshown}
                />
                <MDokumente
                  trigger={mDokumenteshown}
                  setTrigger={setmDokumenteshown}
                />
                <MLage trigger={mLageshown} setTrigger={setmLageshown} />
                <MGalerie
                  trigger={mGalerieshown}
                  setTrigger={setmGalerieshown}
                />
              </div>{" "}
              <MRisikoBanner />
            </div>
          </div>
        </div>{" "}
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default FerdinandHappStraße;
