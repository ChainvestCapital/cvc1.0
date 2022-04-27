import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import FOOTER from "./components/navigation/Footer";
import "./Design/FAQ.css";
import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";
import Amplify from "aws-amplify";
import TL_Img from "./assets/images/TL_Img.png";
import UR_Img from "./assets/images/UR_Img.png";
import OR_Img from "./assets/images/OR_Img.png";
import CookieConsent from "react-cookie-consent";
import "./Design/Vergleichstool.css";
import { Link } from "react-router-dom";
import PROJEKT_CHOOSEN from "./components/Vergleich/Projekt_Vergleich";
import PROJEKT_SMALL from "./components/Vergleich/Projekt_Vergleich_Small";

import PROJEKT_CHOOSEN_mobile from "./components/Vergleich/Projekt_Vergleich_mobile";
import PROJEKT_SMALL_mobile from "./components/Vergleich/Projekt_Vergleich_Small_mobile";

import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import Mobile_Footer from "./MobileComponents/Mobile_Footer";

import VT_LeftBottom from "./assets/images/VT_LeftBottom.png";
import VT_RightBottom from "./assets/images/VT_RightBottom.png";
import VT_RightTop from "./assets/images/VT_RightTop.png";

Amplify.configure(awsExports);
function FAQ() {
  const [ProjekteArray, setProjekteArray] = useState([]);

  const [DreierProjekteArray, setDreierProjekteArray] = useState([]);
  const [ViererProjekteArray, setViererProjekteArray] = useState([]);
  const [shownProjects, setshownProjects] = useState([]);
  const [emptyArray, setemptyArray] = useState([]);
  const [ChooseProjekt1, setChooseProjekt1] = useState([]);
  const [ChooseProjekt2, setChooseProjekt2] = useState([]);

  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
      setshownProjects(ProjekteList);
      setChooseProjekt1(ProjekteList[0]);
      setChooseProjekt2(ProjekteList[1]);
    } catch (error) {}
  };

  const [helping1, sethelping1] = useState([]);
  function builddreierArray(GanzesArray) {
    for (var i = 0; i < 3; i++) {
      helping1.push(GanzesArray[i]);
    }
    setDreierProjekteArray(helping1);
  }
  const [helping2, sethelping2] = useState([]);
  function buildViererProjekteArray(GanzesArray) {
    for (var i = 0; i < 4; i++) {
      helping2.push(GanzesArray[i]);
    }
    setViererProjekteArray(helping2);
  }
  useEffect(() => {
    fetchProjekte();
  }, []);

  function chooseProjekt1(Projekt) {
    setChooseProjekt1(Projekt);
  }

  function chooseProjekt2(Projekt) {
    setChooseProjekt2(Projekt);
  }
  useEffect(() => {
    document.title = "Vergleichen";
  }, []);

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
        <TOP_NAV_BAR />{" "}
        <div id="VT_Wrapper_BG">
          <div id="VT_BG_Wrapper_White"></div>
          <div id="VT_BG_Wrapper_Content">
            <div id="Vergleichstool_top">
              <div id="FU_Top_left">
                <h1 id="CV_h1_dark">Projekte</h1>
                <h1 id="CV_h1_yellow">vergleichen</h1>
                <h5 id="FU_Top_left_h5">
                  Nutzen Sie unser Vergleichstool, um verschiedene digitale
                  Wertpapiere miteinander zu vergleichen. Für möglichst
                  aussagekräftige Ergebisse empfehlen wir die sachliche
                  Entsprechung der Projekte zu beachten.
                </h5>
              </div>

              <div id="FU_Top_right">
                <div id="VT_Box_Wrapper">
                  <div id="VT_Box_Wrapper_Left">
                    <div id="VT_Box_White">
                      <img src={VT_LeftBottom} id="VT_LeftBottom" />
                    </div>
                  </div>

                  <div id="VT_Box_Wrapper_Right">
                    <div id="VT_Box_White">
                      <img src={VT_RightTop} id="VT_LeftBottom" />
                    </div>
                    <div id="VT_Box_White">
                      <img src={VT_RightBottom} id="VT_RightBottom" />
                    </div>
                  </div>
                </div>

                <div id="VT_Ecclipse"></div>
              </div>
            </div>
            <div id="Vergleichstool_Choice_Wrapper">
              <div id="Vergleichstool_Choice_White">
                <div id="Vergleichstool_Choice_Top">
                  <h5 id="Vergleichstool_Choice_Top_h5">Projekt 1</h5>

                  <h5 id="Vergleichstool_Choice_Top_h5">Projekte wählen</h5>

                  <h5 id="Vergleichstool_Choice_Top_h5">Projekt 2</h5>
                </div>

                <div id="Vergleichstool_Choice__Bottom">
                  <div id="Vergleichstool_Choice_Left">
                    <div id="Vergleichstool_Choice_PickedProjekt1">
                      <PROJEKT_CHOOSEN
                        title={ChooseProjekt1.name}
                        KategorieBildLink={ChooseProjekt1.KategorieBildLink}
                        Finanzierungsvolumen={
                          ChooseProjekt1.Finanzierungsvolumen
                        }
                        ErwarteteRendite={ChooseProjekt1.ErwRendite}
                        Typ={ChooseProjekt1.Typ}
                        Logo={ChooseProjekt1.LogoLink}
                        titleImg={ChooseProjekt1.TitleLink}
                        Mindestinvestition={ChooseProjekt1.Mindestinvestition}
                        Emittent={ChooseProjekt1.Emittent}
                        KurzBeschreibung={ChooseProjekt1.KurzBeschreibung}
                      />
                    </div>{" "}
                    <div id="Vergleichstool_Choice_ProjektChoicer1">
                      <ul id="Vergleichstool_Choice_ProjektChoicer_ul">
                        {ProjekteArray.map((Projekt) => (
                          <li
                            id="Vergleichstool_Choice_ProjektChoicer_li"
                            onClick={() => chooseProjekt1(Projekt)}
                          >
                            <PROJEKT_SMALL
                              title={Projekt.name}
                              KategorieBildLink={Projekt.KategorieBildLink}
                              Emittent={Projekt.Emittent}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div id="Vergleichstool_Choice_Right">
                    <div id="Vergleichstool_Choice_ProjektChoicer2">
                      <ul id="Vergleichstool_Choice_ProjektChoicer_ul">
                        {ProjekteArray.map((Projekt) => (
                          <li
                            id="Vergleichstool_Choice_ProjektChoicer_li"
                            onClick={() => chooseProjekt2(Projekt)}
                          >
                            <PROJEKT_SMALL
                              title={Projekt.name}
                              KategorieBildLink={Projekt.KategorieBildLink}
                              Emittent={Projekt.Emittent}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div id="Vergleichstool_Choice_PickedProjekt2">
                      <PROJEKT_CHOOSEN
                        title={ChooseProjekt2.name}
                        KategorieBildLink={ChooseProjekt2.KategorieBildLink}
                        Finanzierungsvolumen={
                          ChooseProjekt2.Finanzierungsvolumen
                        }
                        ErwarteteRendite={ChooseProjekt2.ErwRendite}
                        Typ={ChooseProjekt2.Typ}
                        Logo={ChooseProjekt2.LogoLink}
                        titleImg={ChooseProjekt2.TitleLink}
                        Mindestinvestition={ChooseProjekt2.Mindestinvestition}
                        Emittent={ChooseProjekt2.Emittent}
                        KurzBeschreibung={ChooseProjekt2.KurzBeschreibung}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Vergleichstool_Ergebnisse_Wrapper">
              <div id="Vergleichstool_Ergebnisse_Box_Row_Wrapper">
                <div id="Vergleichstool_Ergebnis_Box_Wrapper">
                  <div id="Vergleichstool_Ergebnis_Box_Top">
                    <div id="Vergleichstool_Ergebnis_Box_Top_Blue">
                      Überblick
                    </div>
                  </div>
                  <div id="Vergleichstool_Ergebnis_Box_Content_Wrapper">
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt1.Finanzierungsvolumen}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Finanzierungsvolumen
                        </h5>
                      </div>
                      <div id="Third_Right">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt2.Finanzierungsvolumen}
                        </h3>
                      </div>
                    </div>

                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt1.ErwRendite}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">Rendite</h5>
                      </div>
                      <div id="Third_Right">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt2.ErwRendite}
                        </h3>
                      </div>
                    </div>

                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt1.Typ}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">Typ</h5>
                      </div>
                      <div id="Third_Right">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt2.Typ}
                        </h3>
                      </div>
                    </div>

                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt1.Emittent}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">Emittent</h5>
                      </div>
                      <div id="Third_Right">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt2.Emittent}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div id="Content_Box_Projekt_Names">
                    <h3 id="Vergleichstool_Ergebnis_Box_h3_small">
                      {ChooseProjekt1.name}
                    </h3>
                    <h3 id="Vergleichstool_Ergebnis_Box_h3_small">
                      {ChooseProjekt2.name}
                    </h3>
                  </div>
                </div>
                <div id="Vergleichstool_Ergebnis_Box_Wrapper">
                  <div id="Vergleichstool_Ergebnis_Box_Top">
                    <div id="Vergleichstool_Ergebnis_Box_Top_Blue">
                      Financials
                    </div>
                  </div>
                  <div id="Vergleichstool_Ergebnis_Box_Content_Wrapper">
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt1.ProgDurchschnittsrendite}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Prog. Durchschnittsrendite{" "}
                        </h5>
                      </div>
                      <div id="Third_Right">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt2.ProgDurchschnittsrendite}
                        </h3>
                      </div>
                    </div>
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt1.ProgWertentwicklung}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Prognostizierte Wertentwicklung
                        </h5>
                      </div>
                      <div id="Third_Right">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt2.ProgWertentwicklung}
                        </h3>
                      </div>
                    </div>
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt1.Finanzierungsvolumen}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Finanzierungsvolumen
                        </h5>
                      </div>
                      <div id="Third_Right">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt2.Finanzierungsvolumen}
                        </h3>
                      </div>
                    </div>{" "}
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt1.Mindestinvestition}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Mindestinvestition
                        </h5>
                      </div>
                      <div id="Third_Right">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt2.Mindestinvestition}
                        </h3>
                      </div>
                    </div>{" "}
                  </div>
                  <div id="Content_Box_Projekt_Names">
                    <h3 id="Vergleichstool_Ergebnis_Box_h3_small">
                      {ChooseProjekt1.name}
                    </h3>
                    <h3 id="Vergleichstool_Ergebnis_Box_h3_small">
                      {ChooseProjekt2.name}
                    </h3>
                  </div>
                </div>
              </div>
              <div id="Vergleichstool_Ergebnisse_Box_Row_Wrapper">
                <div id="Vergleichstool_Ergebnis_Box_Wrapper">
                  <div id="Vergleichstool_Ergebnis_Box_Top">
                    <div id="Vergleichstool_Ergebnis_Box_Top_Blue">Projekt</div>
                  </div>
                  <div id="Vergleichstool_Ergebnis_Box_Content_Wrapper">
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt1.Laufzeitbeginn}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Laufzeitbeginn
                        </h5>
                      </div>
                      <div id="Third_Right">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt2.Laufzeitbeginn}
                        </h3>
                      </div>
                    </div>
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt1.Max_Token_Anzahl}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Anzahl Token
                        </h5>
                      </div>
                      <div id="Third_Right">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt2.Max_Token_Anzahl}
                        </h3>
                      </div>
                    </div>
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt1.NaechsteAusschuettung}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Nächste Ausschüttung
                        </h5>
                      </div>
                      <div id="Third_Right">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt2.NaechsteAusschuettung}
                        </h3>
                      </div>
                    </div>
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt1.Laufzeitende}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Progn. Laufzeitende
                        </h5>
                      </div>
                      <div id="Third_Right">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {" "}
                          {ChooseProjekt2.Laufzeitende}
                        </h3>
                      </div>
                    </div>{" "}
                  </div>
                  <div id="Content_Box_Projekt_Names">
                    <h3 id="Vergleichstool_Ergebnis_Box_h3_small">
                      {ChooseProjekt1.name}
                    </h3>
                    <h3 id="Vergleichstool_Ergebnis_Box_h3_small">
                      {ChooseProjekt2.name}
                    </h3>
                  </div>
                </div>
                <div id="Vergleichstool_Ergebnis_Box_Wrapper">
                  <div id="Vergleichstool_Ergebnis_Box_Top">
                    <div id="Vergleichstool_Ergebnis_Box_Top_Blue">
                      Dokumente
                    </div>
                  </div>
                  <div id="Vergleichstool_Ergebnis_Box_Content_Wrapper">
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt1.checkBasisinformationsblatt}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Basisinformationsblatt
                        </h5>
                      </div>
                      <div id="Third_Right">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt2.checkBasisinformationsblatt}
                        </h3>
                      </div>
                    </div>
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt1.checkWertpapierprospekt}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Wertpapierprospekt
                        </h5>
                      </div>
                      <div id="Third_Right">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt1.checkWertpapierprospekt}
                        </h3>
                      </div>
                    </div>
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt2.checkRisiken}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Risikohinweis
                        </h5>
                      </div>
                      <div id="Third_Right">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt1.checkRisiken}
                        </h3>
                      </div>
                    </div>
                    <div id="Vergleichstool_Ergebnis_Box_Content_Row">
                      <div id="Third_Left">
                        {" "}
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt1.checkSchuldverschreibungsbedingungen}
                        </h3>
                      </div>
                      <div id="Third_Mid">
                        {" "}
                        <h5 id="Vergleichstool_Ergebnis_Box_H5">
                          Schuldverschreibungsbedingungen
                        </h5>
                      </div>
                      <div id="Third_Right">
                        <h3 id="Vergleichstool_Ergebnis_Box_h3">
                          {ChooseProjekt2.checkSchuldverschreibungsbedingungen}
                        </h3>
                      </div>
                    </div>{" "}
                  </div>{" "}
                  <div id="Content_Box_Projekt_Names">
                    <h3 id="Vergleichstool_Ergebnis_Box_h3_small">
                      {ChooseProjekt1.name}
                    </h3>
                    <h3 id="Vergleichstool_Ergebnis_Box_h3_small">
                      {ChooseProjekt2.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <FOOTER />{" "}
          </div>
        </div>
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
          <div id="Mobile_VG_Content">
            {" "}
            <MOBILE_MENUE />{" "}
            <div id="Mobile_Vergleichstool_Top">
              <h2 id="Mobile_Home_Top_Sec_H2">Projekte</h2>
              <h2 id="Mobile_Home_Top_Sec_H2_yellow">vergleichen</h2>
              <h5 id="Mobile_Home_Top_Sec_H5">
                Nutzen Sie unser Vergleichstool, um verschiedene digitale
                Wertpapiere miteinander zu vergleichen. Für möglichst
                aussagekräftige Ergebisse empfehlen wir die sachliche
                Entsprechung der Projekte zu beachten.
              </h5>{" "}
            </div>
            <div id="Mobile_Vergleichstool_Projekt_Choice">
              <div id="Mobile_Vergleichstool_Wrapper">
                <div id="Mobile_Vergleichstool_Projekt1">
                  <div id="Mobile_Vergleich_MidHeading">Projekt 1 wählen</div>
                  <div id="Mobile_Vergleichstool_Projekt1_Slider">
                    <ul id="Vergleichstool_Choice_ProjektChoicer_ul_mobile">
                      {ProjekteArray.map((Projekt) => (
                        <li
                          id="Vergleichstool_Choice_ProjektChoicer_li_mobile"
                          onClick={() => chooseProjekt1(Projekt)}
                        >
                          <PROJEKT_SMALL_mobile
                            title={Projekt.name}
                            KategorieBildLink={Projekt.KategorieBildLink}
                            Emittent={Projekt.Emittent}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>{" "}
                  <div id="Mobile_Vergleichstool_Projekt1_Projekt">
                    <PROJEKT_CHOOSEN_mobile
                      title={ChooseProjekt1.name}
                      KategorieBildLink={ChooseProjekt1.KategorieBildLink}
                      Finanzierungsvolumen={ChooseProjekt1.Finanzierungsvolumen}
                      ErwarteteRendite={ChooseProjekt1.ErwRendite}
                      Typ={ChooseProjekt1.Typ}
                      Logo={ChooseProjekt1.LogoLink}
                      titleImg={ChooseProjekt1.TitleLink}
                      Mindestinvestition={ChooseProjekt1.Mindestinvestition}
                      Emittent={ChooseProjekt1.Emittent}
                      KurzBeschreibung={ChooseProjekt1.KurzBeschreibung}
                    />
                  </div>
                </div>

                <div id="Mobile_Vergleichstool_Projekt1">
                  <div id="Mobile_Vergleich_MidHeading2">Projekt 2 wählen</div>
                  <div id="Mobile_Vergleichstool_Projekt1_Slider">
                    <ul id="Vergleichstool_Choice_ProjektChoicer_ul_mobile">
                      {ProjekteArray.map((Projekt) => (
                        <li
                          id="Vergleichstool_Choice_ProjektChoicer_li_mobile"
                          onClick={() => chooseProjekt2(Projekt)}
                        >
                          <PROJEKT_SMALL_mobile
                            title={Projekt.name}
                            KategorieBildLink={Projekt.KategorieBildLink}
                            Emittent={Projekt.Emittent}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>{" "}
                  <div id="Mobile_Vergleichstool_Projekt1_Projekt">
                    <PROJEKT_CHOOSEN_mobile
                      title={ChooseProjekt2.name}
                      KategorieBildLink={ChooseProjekt2.KategorieBildLink}
                      Finanzierungsvolumen={ChooseProjekt2.Finanzierungsvolumen}
                      ErwarteteRendite={ChooseProjekt2.ErwRendite}
                      Typ={ChooseProjekt2.Typ}
                      Logo={ChooseProjekt2.LogoLink}
                      titleImg={ChooseProjekt2.TitleLink}
                      Mindestinvestition={ChooseProjekt2.Mindestinvestition}
                      Emittent={ChooseProjekt2.Emittent}
                      KurzBeschreibung={ChooseProjekt2.KurzBeschreibung}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="Mobile_Vergleichstool_Vergleich_Ergebnis">
              <div id="Mobile_Vergleichstool_Vergleich_White_Box">
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Top">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Top_Blue">
                    Überblick
                  </div>
                </div>{" "}
                <div id="Mobile_Vergleich_Name_Row">
                  <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5_name">
                    {ChooseProjekt1.name}{" "}
                  </h4>

                  <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5_name">
                    {ChooseProjekt2.name}{" "}
                  </h4>
                </div>
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.Finanzierungsvolumen}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Finanzierungsvolumen
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.Finanzierungsvolumen}
                    </h4>
                  </div>
                </div>
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.ErwRendite}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Rendite
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.ErwRendite}
                    </h4>
                  </div>
                </div>
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.Typ}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Typ
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.Typ}
                    </h4>
                  </div>
                </div>
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.Emittent}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Emittent
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.Emittent}
                    </h4>
                  </div>
                </div>
              </div>

              <div id="Mobile_Vergleichstool_Vergleich_White_Box">
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Top">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Top_Blue">
                    Financials
                  </div>
                </div>{" "}
                <div id="Mobile_Vergleich_Name_Row">
                  <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5_name">
                    {ChooseProjekt1.name}{" "}
                  </h4>

                  <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5_name">
                    {ChooseProjekt2.name}{" "}
                  </h4>
                </div>
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.ProgDurchschnittsrendite}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Prog. Durchschnittsrendite
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.ProgDurchschnittsrendite}
                    </h4>
                  </div>
                </div>
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.ProgWertentwicklung}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Prognostizierte Wertentwicklung
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.ProgWertentwicklung}
                    </h4>
                  </div>
                </div>
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.Finanzierungsvolumen}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Finanzierungsvolumen
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.Finanzierungsvolumen}
                    </h4>
                  </div>
                </div>
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.Mindestinvestition}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Mindestinvestition
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.Mindestinvestition}
                    </h4>
                  </div>
                </div>
              </div>

              <div id="Mobile_Vergleichstool_Vergleich_White_Box">
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Top">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Top_Blue">
                    Projekt
                  </div>
                </div>
                <div id="Mobile_Vergleich_Name_Row">
                  <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5_name">
                    {ChooseProjekt1.name}{" "}
                  </h4>

                  <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5_name">
                    {ChooseProjekt2.name}{" "}
                  </h4>
                </div>

                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.Laufzeitbeginn}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Laufzeitbeginn
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.Laufzeitbeginn}
                    </h4>
                  </div>
                </div>

                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.Max_Token_Anzahl}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Anzahl Token
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.Max_Token_Anzahl}
                    </h4>
                  </div>
                </div>

                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.NaechsteAusschuettung}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Nächste Ausschüttung
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.NaechsteAusschuettung}
                    </h4>
                  </div>
                </div>

                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.Laufzeitende}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Progn. Laufzeitende{" "}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.Laufzeitende}
                    </h4>
                  </div>
                </div>
              </div>

              <div id="Mobile_Vergleichstool_Vergleich_White_Box">
                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Top">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Top_Blue">
                    Dokumente
                  </div>
                </div>
                <div id="Mobile_Vergleich_Name_Row">
                  <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5_name">
                    {ChooseProjekt1.name}{" "}
                  </h4>

                  <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5_name">
                    {ChooseProjekt2.name}{" "}
                  </h4>
                </div>

                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.checkBasisinformationsblatt}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Basisinformationsblatt
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.checkBasisinformationsblatt}
                    </h4>
                  </div>
                </div>

                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.checkWertpapierprospekt}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Wertpapierprospekt
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.checkWertpapierprospekt}
                    </h4>
                  </div>
                </div>

                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.checkRisiken}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Risikohinweis
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.checkRisiken}
                    </h4>
                  </div>
                </div>

                <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row">
                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Left">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt1.checkSchuldverschreibungsbedingungen}
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Mid">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h5">
                      Schuldverschreibungsbedingungen
                    </h4>
                  </div>

                  <div id="Mobile_Vergleichstool_Vergleich_White_Box_Row_Right">
                    <h4 id="Mobile_Vergleichstool_Vergleich_White_Box_Row_h4">
                      {ChooseProjekt2.checkSchuldverschreibungsbedingungen}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <Mobile_Footer />
      </div>{" "}
    </div>
  );
}

export default FAQ;
