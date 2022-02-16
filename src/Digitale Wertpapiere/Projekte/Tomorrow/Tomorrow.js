import Unternehmen from "../../../assets/images/Unternehmen.png";
import Dokumente from "../../../assets/images/Dokumente.png";
import Rechtlich from "../../../assets/images/Rechtlich.png";

import "./Tomorrow.css";
import { useState, useEffect } from "react";
import Börnestrasse_Galerie_1 from "../../../assets/images/Börnestrasse_Galerie_1.jpg";
import Finexity_Logo from "../../../assets/images/Finexity_Logo.png";
import FINEXITY_FHP_Galerie_1 from "../../../assets/images/FINEXITY_FHP_Galerie_1.jpeg";

import DokumenteFrame from "./Frames/Dokumente";
import MRisikoBanner from "../../Components/mRisikoBanner";

import UnternehmenFrame from "./Frames/Unternehmen";
import TOKENSALE_FRAME from "./Frames/Token_Sale";
import RechtlichFrame from "./Frames/Rechtlich";
import RisikoFrame from "./Frames/Risiko";
import RISIKO_BANNER from "../../Components/Risiko_Banner_Unt";

import STARTING_FRAME_CHOICE from "./Frames/Components/Starting_Frame_Choice";
import arrow from "../../../assets/images/Arrow_white.png";

import awsExports from "../../../aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "../../../graphql/queries";
import TOP_NAV_BAR from "../../../components/navigation/Top_Nav_Bar";

import Amplify from "aws-amplify";
import TokenSale from "../../../assets/images/TokenSale.png";

import VogemannImg from "../../../assets/images/VogemannImg.png";
import VogemannLogo from "../../../assets/images/VogemannLogo.png";
import RisikoImg from "../../../assets/images/Risiko.png";
import TOP_HEADER from "../../Components/Top_Header";
import BitbondLogo from "../../../assets/images/BitbondLogo.png";
import BitbondImg from "../../../assets/images/BitbondImg.png";
import Footer from "../../../components/navigation/Footer";

import Finance from "../../../assets/images/Finance.png";

import MOBILE_MENUE from "../../../MobileComponents/Mobile_menue";
import MOBILE_FOOTER from "../../../MobileComponents/Mobile_Footer";
import MOBILE_FIX_HEADER from "../../MobileComponents/Mobile_Fix_Header";

import MobileUnternehmen from "./Mobile_Frames/Unternehmen";
import MobileTokenSale from "./Mobile_Frames/TokenSale";
import MobileDokumente from "./Mobile_Frames/Dokumente";
import MobileRisiko from "./Mobile_Frames/Risiko";
import MobileRechtlich from "./Mobile_Frames/Rechtlich";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
Amplify.configure(awsExports);

function Tomorrow() {
  function openFrame_Unternehmen() {
    setUnternehmen_isShown(true);
    setDokumente_isShown(false);

    setToken_Sale_isShown(false);
    setRechtlich_isShown(false);
    setRisiko_isShown(false);

    setProjekt_Starting_Frame("Projekt_Starting_Frame_inaktiv");
    setMenue_Row1_Zustand("aktiv1MenüRow");
    setMenue_Row2_Zustand("inaktiv1MenüRow");
    setMenue_Row3_Zustand("inaktiv1MenüRow");
    setMenue_Row4_Zustand("inaktiv1MenüRow");
    setMenue_Row5_Zustand("inaktiv1MenüRow");
    setAktiverFrame("Unternehmen");
  }
  function openFrame_Token_Sale() {
    setToken_Sale_isShown(true);
    setDokumente_isShown(false);
    setUnternehmen_isShown(false);

    setRechtlich_isShown(false);
    setRisiko_isShown(false);
    setProjekt_Starting_Frame("Projekt_Starting_Frame_inaktiv");
    setMenue_Row1_Zustand("inaktiv1MenüRow");
    setMenue_Row2_Zustand("aktiv1MenüRow");
    setMenue_Row3_Zustand("inaktiv1MenüRow");
    setMenue_Row4_Zustand("inaktiv1MenüRow");
    setMenue_Row5_Zustand("inaktiv1MenüRow");
    setAktiverFrame("Token Sale");
  }
  function openFrame_Dokumentee() {
    setDokumente_isShown(true);
    setUnternehmen_isShown(false);
    setToken_Sale_isShown(false);
    setRechtlich_isShown(false);
    setRisiko_isShown(false);
    setProjekt_Starting_Frame("Projekt_Starting_Frame_inaktiv");
    setMenue_Row1_Zustand("inaktiv1MenüRow");
    setMenue_Row2_Zustand("inaktiv1MenüRow");
    setMenue_Row3_Zustand("aktiv1MenüRow");
    setMenue_Row4_Zustand("inaktiv1MenüRow");
    setMenue_Row5_Zustand("inaktiv1MenüRow");
    setAktiverFrame("Dokumente");
  }
  function openFrame_Rechtlich() {
    setRechtlich_isShown(true);
    setDokumente_isShown(false);
    setUnternehmen_isShown(false);
    setToken_Sale_isShown(false);

    setRisiko_isShown(false);
    setProjekt_Starting_Frame("Projekt_Starting_Frame_inaktiv");
    setMenue_Row1_Zustand("inaktiv1MenüRow");
    setMenue_Row2_Zustand("inaktiv1MenüRow");
    setMenue_Row3_Zustand("inaktiv1MenüRow");
    setMenue_Row4_Zustand("aktiv1MenüRow");
    setMenue_Row5_Zustand("inaktiv1MenüRow");
    setAktiverFrame("Rechtlich");
  }
  function openFrame_Risiko() {
    setRisiko_isShown(true);
    setDokumente_isShown(false);
    setUnternehmen_isShown(false);
    setToken_Sale_isShown(false);
    setRechtlich_isShown(false);
    setProjekt_Starting_Frame("Projekt_Starting_Frame_inaktiv");

    setMenue_Row1_Zustand("inaktiv1MenüRow");
    setMenue_Row2_Zustand("inaktiv1MenüRow");
    setMenue_Row3_Zustand("inaktiv1MenüRow");
    setMenue_Row4_Zustand("inaktiv1MenüRow");
    setMenue_Row5_Zustand("aktiv1MenüRow");
    setAktiverFrame("Risiko");
  }

  const [Dokumente_isShown, setDokumente_isShown] = useState(false);
  const [Unternehmen_isShown, setUnternehmen_isShown] = useState(true);
  const [Token_Sale_isShown, setToken_Sale_isShown] = useState(false);
  const [Rechtlich_isShown, setRechtlich_isShown] = useState(false);
  const [Risiko_isShown, setRisiko_isShown] = useState(false);

  const [Menue_Row1_Zustand, setMenue_Row1_Zustand] = useState("aktiv1MenüRow");
  const [Menue_Row2_Zustand, setMenue_Row2_Zustand] =
    useState("inaktiv1MenüRow");
  const [Menue_Row3_Zustand, setMenue_Row3_Zustand] =
    useState("inaktiv1MenüRow");
  const [Menue_Row4_Zustand, setMenue_Row4_Zustand] =
    useState("inaktiv1MenüRow");
  const [Menue_Row5_Zustand, setMenue_Row5_Zustand] =
    useState("inaktiv1MenüRow");

  const [Projekt_Starting_Frame, setProjekt_Starting_Frame] = useState(
    "Projekt_Starting_Frame_inaktiv"
  );

  /*       Getting Infos       */
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
  const [TitleImg, setTitleImg] = useState();
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

  const title = "Tomorrow1";

  function fillFelder(AlleProjekte) {
    AlleProjekte.map((Projekt) => {
      if (Projekt.id === title) {
        setMindestinvestition(Projekt.Mindestinvestition);
        setFinanzierungsvolumen(Projekt.Finanzierungsvolumen);
        setTyp(Projekt.Typ);
        setRendite(Projekt.ErwRendite);
        setBeschreibungTop(Projekt.Beschreibung);
        setLogo(Projekt.LogoLink);
        setTitleImg(Projekt.TitleLink);
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
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////Copy MEEEEEEEEEEEEEE
  const [mobileUnternehmenshown, setmobileUnternehmenshown] = useState(true);
  const [mobileTokenSaleshown, setmobileTokenSaleshown] = useState(false);
  const [mobileDokumenteshown, setmobileDokumenteshown] = useState(false);
  const [mobileRechtlichshown, setmobileRechtlichshown] = useState(false);
  const [mobileRisikoshown, setmobileRisikoshown] = useState(false);

  const [mobileUnternehmenaktiv, setmobileUnternehmenaktiv] =
    useState("Mobile_Menue_Aktiv");
  const [MobileTokenSaleaktiv, setMobileTokenSaleaktiv] = useState(
    "Mobile_Menue_inAktiv"
  );
  const [MobileDokumenteaktiv, setMobileDokumenteaktiv] = useState(
    "Mobile_Menue_inAktiv"
  );
  const [MobileRechtlichaktiv, setMobileRechtlichaktiv] = useState(
    "Mobile_Menue_inAktiv"
  );
  const [MobileRisikoaktiv, setMobileRisikoaktiv] = useState(
    "Mobile_Menue_inAktiv"
  );
  const [CurrentFrame, setCurrentFrame] = useState("Unternehmen");

  function MobileShowUnternehmen() {
    setmobileUnternehmenshown(true);
    setmobileTokenSaleshown(false);
    setmobileDokumenteshown(false);
    setmobileRechtlichshown(false);
    setmobileRisikoshown(false);

    setmobileUnternehmenaktiv("Mobile_Menue_Aktiv");
    setMobileTokenSaleaktiv("Mobile_Menue_inAktiv");
    setMobileDokumenteaktiv("Mobile_Menue_inAktiv");
    setMobileRechtlichaktiv("Mobile_Menue_inAktiv");
    setMobileRisikoaktiv("Mobile_Menue_inAktiv");
    setCurrentFrame("Unternehmen");
  }
  function MobileShowTokenSale() {
    setmobileUnternehmenshown(false);
    setmobileTokenSaleshown(true);
    setmobileDokumenteshown(false);
    setmobileRechtlichshown(false);
    setmobileRisikoshown(false);
    setmobileUnternehmenaktiv("Mobile_Menue_inAktiv");
    setMobileTokenSaleaktiv("Mobile_Menue_Aktiv");
    setMobileDokumenteaktiv("Mobile_Menue_inAktiv");
    setMobileRechtlichaktiv("Mobile_Menue_inAktiv");
    setMobileRisikoaktiv("Mobile_Menue_inAktiv");
    setCurrentFrame("Token Sale");
  }
  function MobileShowDokumente() {
    setmobileUnternehmenshown(false);
    setmobileTokenSaleshown(false);
    setmobileDokumenteshown(true);
    setmobileRechtlichshown(false);
    setmobileRisikoshown(false);
    setmobileUnternehmenaktiv("Mobile_Menue_inAktiv");
    setMobileTokenSaleaktiv("Mobile_Menue_inAktiv");
    setMobileDokumenteaktiv("Mobile_Menue_Aktiv");
    setMobileRechtlichaktiv("Mobile_Menue_inAktiv");
    setMobileRisikoaktiv("Mobile_Menue_inAktiv");
    setCurrentFrame("Dokumente");
  }
  function MobileShowRisiko() {
    setmobileUnternehmenshown(false);
    setmobileTokenSaleshown(false);
    setmobileDokumenteshown(false);
    setmobileRechtlichshown(false);
    setmobileRisikoshown(true);
    setmobileUnternehmenaktiv("Mobile_Menue_inAktiv");
    setMobileTokenSaleaktiv("Mobile_Menue_inAktiv");
    setMobileDokumenteaktiv("Mobile_Menue_inAktiv");
    setMobileRechtlichaktiv("Mobile_Menue_inAktiv");
    setMobileRisikoaktiv("Mobile_Menue_Aktiv");
    setCurrentFrame("Risiko");
  }
  function MobileShowRechtlich() {
    setmobileUnternehmenshown(false);
    setmobileTokenSaleshown(false);
    setmobileDokumenteshown(false);
    setmobileRechtlichshown(true);
    setmobileRisikoshown(false);
    setmobileUnternehmenaktiv("Mobile_Menue_inAktiv");
    setMobileTokenSaleaktiv("Mobile_Menue_inAktiv");
    setMobileDokumenteaktiv("Mobile_Menue_inAktiv");
    setMobileRechtlichaktiv("Mobile_Menue_Aktiv");
    setMobileRisikoaktiv("Mobile_Menue_inAktiv");
    setCurrentFrame("Rechtlich");
  }
  useEffect(() => {
    document.title = "Tomorrow";
  }, []);

  const [AktiverFrame, setAktiverFrame] = useState("Unternehmen");
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
        <TOP_NAV_BAR />
        <TOP_HEADER
          kategorieImg={Finance}
          logo={Logo}
          Titel={FirmenName}
          Beschreibung={Kurzbeschreibung}
          extLink="https://www.tomorrow.one/de-DE/ueber-uns/crowdinvesting/#news"
          Kategorie={Kategorie}
          Rendite={Rendite}
          Finanzierungsvolumen={Finanzierungsvolumen}
          Mindestinvestition={Mindestinvestition}
          Typ={Typ}
          weiterebg={Börnestrasse_Galerie_1}
          weitereLogo={Finexity_Logo}
          weiterebg2={FINEXITY_FHP_Galerie_1}
          weitereLogo2={Finexity_Logo}
          weitereLink="../Digitale-Wertpapiere/FerdinandHapp"
          weitereLink2="../Digitale-Wertpapiere/Boernerstrasse"
        />
        <div id="Projekt_Projekt_Section_Wrapper">
          <div id="Projekt_Top_Fix_Section_Content_Layer"></div>

          <div id={Projekt_Starting_Frame}>
            <div id="Projekt_Starting_Frame_Inner">
              <div id="Projekt_Starting_Frame_Layer"></div>
              <div id="Projekt_Starting_Frame_Content">
                <div onClick={() => openFrame_Unternehmen()}>
                  <STARTING_FRAME_CHOICE
                    img={Unternehmen}
                    title="Unternehmen"
                    BGColor="Starting_Frame_Choice_Circle_blue"
                    text="Informationen über das hinter der Emission stehende Unternehmen. Dazu zählen beispielsweise eine Beschreibung der Geschäftstätigkeit."
                  />
                </div>
                <div onClick={() => openFrame_Token_Sale()}>
                  <STARTING_FRAME_CHOICE
                    img={TokenSale}
                    title="Token Sale"
                    BGColor="Starting_Frame_Choice_Circle_blue"
                    text="Alle Fakten zur Emission. Dazu zählen fixe Rahmendaten sowie Informationen über die Kostenstruktur des Angebots."
                  />
                </div>{" "}
                <div onClick={() => openFrame_Dokumentee()}>
                  <STARTING_FRAME_CHOICE
                    img={Dokumente}
                    BGColor="Starting_Frame_Choice_Circle_blue"
                    title="Dokumente"
                    text="Bereitstellung der für die Emission relevanten Dokumente. Dazu zählen bspw. der Wertpapierprospekt."
                  />{" "}
                </div>{" "}
                <div onClick={() => openFrame_Rechtlich()}>
                  <STARTING_FRAME_CHOICE
                    img={Rechtlich}
                    title="Rechtlich"
                    BGColor="Starting_Frame_Choice_Circle_blue"
                    text="Die rechtlichen Gegebenheit bzgl. der Emission aus den rechtlichen Dokumenten."
                  />
                </div>
                <a href="https://www.tomorrow.one/de-DE/ueber-uns/crowdinvesting/#news">
                  <STARTING_FRAME_CHOICE
                    img={arrow}
                    title="Zum Projekt"
                    BGColor="Starting_Frame_Choice_Circle_yellow"
                    text="Auflistung der möglichen Risiken bei einer Investition in dieses digitale Wertpapier."
                  />
                </a>
                <div onClick={() => openFrame_Risiko()}>
                  <STARTING_FRAME_CHOICE
                    img={RisikoImg}
                    title="Risiko"
                    BGColor="Starting_Frame_Choice_Circle_blue"
                    text="Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne per E-Mail zur Verfügung. Häufig gestellte Fragen zum Listingprozess."
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="Projekt_After_Start_Ansicht">
            <div id="Projekt_Left_Menue">
              <h3 id="Menue_h3">Menü</h3>
              <div
                id={Menue_Row1_Zustand}
                onClick={() => openFrame_Unternehmen()}
              >
                <img src={Unternehmen} id="Projekt_Left_Menue_Row_img" alt="" />
                <h3 id="Projekt_Left_Menue_Row_h3">Unternehmen</h3>
              </div>{" "}
              <div
                id={Menue_Row2_Zustand}
                onClick={() => openFrame_Token_Sale()}
              >
                <img src={TokenSale} id="Projekt_Left_Menue_Row_img" alt="" />
                <h3 id="Projekt_Left_Menue_Row_h3">Token Sale</h3>
              </div>
              <div
                id={Menue_Row3_Zustand}
                onClick={() => openFrame_Dokumentee()}
              >
                <img src={Dokumente} id="Projekt_Left_Menue_Row_img" alt="" />
                <h3 id="Projekt_Left_Menue_Row_h3">Dokumente</h3>
              </div>
              <div
                id={Menue_Row4_Zustand}
                onClick={() => openFrame_Rechtlich()}
              >
                <img src={Rechtlich} id="Projekt_Left_Menue_Row_img" alt="" />
                <h3 id="Projekt_Left_Menue_Row_h3">Rechtlich</h3>
              </div>
              <div id={Menue_Row5_Zustand} onClick={() => openFrame_Risiko()}>
                <img src={RisikoImg} id="Projekt_Left_Menue_Row_img" alt="" />
                <h3 id="Projekt_Left_Menue_Row_h3">Risiko</h3>
              </div>
            </div>

            <div id="Projekt_Right_Content">
              <UnternehmenFrame
                trigger={Unternehmen_isShown}
                setTrigger={setUnternehmen_isShown}
                Gruendung={Gruendung}
                Rechtsform={Rechtsform}
                Firmenname={FirmenName}
                Ort={Ort}
                Geschaeftstaetigkeit={Geschaeftstaetigkeit}
              />
              <DokumenteFrame
                trigger={Dokumente_isShown}
                setTrigger={setDokumente_isShown}
              />
              <TOKENSALE_FRAME
                trigger={Token_Sale_isShown}
                setTrigger={setToken_Sale_isShown}
                ISIN={ISIN}
                Zahlungsmoeglichkeiten={Zahlungsmoeglichkeiten}
                Rechtliche_Bezeichnung={RechtlicheBezeichnung}
                ITIN={ITIN}
                Emissionszeitraum={Emissionszeitraum}
                Token_Ticker={Token_Ticker}
                Max_Anzahl={MaxTokenAnzahl}
                Blockchain={Blockchain}
              />
              <RechtlichFrame
                trigger={Rechtlich_isShown}
                setTrigger={setRechtlich_isShown}
              />
              <RisikoFrame
                trigger={Risiko_isShown}
                setTrigger={setRisiko_isShown}
              />{" "}
              <RISIKO_BANNER />
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
              kategorieImg={Finance}
              logo={Logo}
              Titel={FirmenName}
              Beschreibung={Kurzbeschreibung}
              extLink="https://www.tomorrow.one/de-DE/ueber-uns/crowdinvesting/#news"
              Kategorie={Kategorie}
              Rendite={Rendite}
              Finanzierungsvolumen={Finanzierungsvolumen}
              Mindestinvestition={Mindestinvestition}
              Typ={Typ}
            />{" "}
            <div id="Mobile_Projekt_Menue_Unten">
              <div
                id={mobileUnternehmenaktiv}
                onClick={() => MobileShowUnternehmen()}
              >
                <img
                  src={Unternehmen}
                  id="Mobile_Projekt_Menue_Unten_Column_Img"
                  alt=""
                />
              </div>
              <div
                id={MobileTokenSaleaktiv}
                onClick={() => MobileShowTokenSale()}
              >
                <img
                  src={TokenSale}
                  id="Mobile_Projekt_Menue_Unten_Column_Img"
                  alt=""
                />
              </div>
              <div
                id={MobileDokumenteaktiv}
                onClick={() => MobileShowDokumente()}
              >
                <img
                  src={Dokumente}
                  id="Mobile_Projekt_Menue_Unten_Column_Img"
                  alt=""
                />
              </div>
              <div id={MobileRisikoaktiv} onClick={() => MobileShowRisiko()}>
                <img
                  src={RisikoImg}
                  id="Mobile_Projekt_Menue_Unten_Column_Img"
                  alt=""
                />
              </div>
              <div
                id={MobileRechtlichaktiv}
                onClick={() => MobileShowRechtlich()}
              >
                <img
                  src={Rechtlich}
                  id="Mobile_Projekt_Menue_Unten_Column_Img"
                  alt=""
                />
              </div>
            </div>
            <div id="Mobile_Current_Aktiv">
              <h3 id="Mobile_Current_Aktiv_H3">{CurrentFrame}</h3>
            </div>
            <div id="Mobile_Projekt_Variabel_Wrapper">
              <MobileUnternehmen
                trigger={mobileUnternehmenshown}
                setTrigger={setmobileUnternehmenshown}
                Gruendung={Gruendung}
                Rechtsform={Rechtsform}
                FirmenName={FirmenName}
                Ort={Ort}
                Geschaeftstaetigkeit={Geschaeftstaetigkeit}
              />
              <MobileTokenSale
                trigger={mobileTokenSaleshown}
                setTrigger={setmobileTokenSaleshown}
                ISIN={ISIN}
                Zahlungsmoeglichkeiten={Zahlungsmoeglichkeiten}
                Rechtliche_Bezeichnung={RechtlicheBezeichnung}
                ITIN={ITIN}
                Emissionszeitraum={Emissionszeitraum}
                Token_Ticker={Token_Ticker}
                Max_Anzahl={MaxTokenAnzahl}
                Blockchain={Blockchain}
              />
              <MobileDokumente
                trigger={mobileDokumenteshown}
                setTrigger={setmobileDokumenteshown}
              />
              <MobileRisiko
                trigger={mobileRisikoshown}
                setTrigger={setmobileRisikoshown}
              />
              <MobileRechtlich
                trigger={mobileRechtlichshown}
                setTrigger={setmobileRechtlichshown}
              />
            </div>{" "}
            <MRisikoBanner />
          </div>
        </div>
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default Tomorrow;
