import React, { useState, useEffect } from "react";
import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";
import "./Design/Home.css";

import TL_Img from "./assets/images/TL_Img.png";
import UR_Img from "./assets/images/UR_Img.png";
import Mobil_IT from "./assets/images/Mobil_IT.png";
import OR_Img from "./assets/images/OR_Img.png";

import HOME_PROJEKT_BOX from "./components/Home_Projekte_Box";
import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";

import Footer from "./components/navigation/Footer";

import MOBILE_HOME_PROJEKT_BOX from "./MobileComponents/Mobile_Home_Projekt_Box";
import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import Mobil_Home_png from "./assets/images/Mobil_Home_png.png";

import { HashLink } from "react-router-hash-link";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

import Home_Top_Right_Img from "./assets/images/Home_Top_Right_Img.png";
import Home_Mid_Right_Img from "./assets/images/Home_Mid_Right_Img.png";
import Home_Mid_Left_Img from "./assets/images/Home_Mid_Left_Img.png";
import Home_Bottom_Img from "./assets/images/Home_Bottom_Img.png";

Amplify.configure(awsExports);
function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const [ProjekteArray, setProjekteArray] = useState([]);
  const [DreierProjekteArray, setDreierProjekteArray] = useState([]);
  const [ViererProjekteArray, setViererProjekteArray] = useState([]);

  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
      builddreierArray(ProjekteList);
      buildViererProjekteArray(ProjekteList);
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
  return (
    <div className="App">
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
        <div id="Div_Home_Top_Section">
          <div id="Div_Home_Top_Section_Left">
            <h1 id="CV_h1_dark">Digitale Wertpapiere auf</h1>
            <h1 id="CV_h1_yellow">Chainvest Capital</h1>
            <h3 id="CV_h3_dark_09">
              Chainvest Capital stellt die Schnittstelle zwischen spannenden
              Investitionsprojekten und einer breiten Investorencommunity dar.
              Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen
              digitalen Wertpapieren aus unterschiedlichen Branchen.
            </h3>
          </div>
          <div id="Div_Home_Top_Section_Right">
            <div id="Home_Top_Right_Top">
              <div id="Home_Top_Right_Top_Text_Wrapper">
                <h3 id="Home_Top_Right_Top_Text_Wrapper_h3">
                  Was sind digitale Wertpapiere ?
                </h3>
                <h5 id="Home_Top_Right_Top_Text_Wrapper_h5">
                  Digitale Wertpapiere bringen klassische Finanzprodukte in die
                  digitale Welt. Dabei entstehen durch das Verwenden der
                  Blockchain-Technologie Vorteile für InvestorInnen und
                  EmittentInnen bspw. im Hinblick auf Transaktionskosten.
                </h5>
              </div>
              <div id="Home_Top_Right_Top_Right_Box">
                <img
                  src={Home_Top_Right_Img}
                  id="Home_Top_Right_Top_Right_Box_img"
                />
              </div>
            </div>
            <div id="Home_Top_Right_Mid">
              <div id="Home_Top_Right_Mid_Left">
                <img src={Home_Mid_Left_Img} id="Home_Top_Right_Mid_Left_img" />
              </div>
              <div id="Home_Top_Right_Mid_Right">
                <img
                  src={Home_Mid_Right_Img}
                  id="Home_Top_Right_Mid_Right_img"
                />
              </div>
            </div>
            <div id="Home_Top_Right_Bottom">
              <img src={Home_Bottom_Img} id="Home_Top_Right_Bottom_img" />
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
                  Digitale Wertpapiere bringen klassische Finanzprodukte in die
                  digitale Welt. Dabei entstehen durch das Verwenden der
                  Blockchain-Technologie Vorteile für InvestorInnen und
                  EmittentInnen bspw. im Hinblick auf Transaktionskosten.
                </h5>
              </div>
            </div> <div id="Div_Home_Top_Section_Right_Spalte_right">
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
*/}
          </div>{" "}
          <div id="Div_Home_Top_Section_Layer"></div>
          <div id="Div_Home_Top_Section_Layer_Form"></div>
        </div>
        <div id="Div_Home_Projekt_Section">
          <div id="Div_Home_Projekt_Section_Padding">
            <div id="Div_Home_Projekt_Section_Heading">
              <h5 id="Div_Home_CV_Section_LEFT_h5">Digitale Wertpapiere</h5>
              <h2 id="Div_Home_CV_Section_LEFT_h2">Projekte</h2>
            </div>

            <div id="home_projekte_ul_id_wRAPPER">
              <ul id="home_projekte_ul_id">
                {DreierProjekteArray.map((Projekt) => (
                  <li id="home_projekte_li_11">
                    <HashLink to={Projekt.InternerLink}>
                      <HOME_PROJEKT_BOX
                        title={Projekt.name}
                        KategorieBildLink={Projekt.KategorieBildLink}
                        Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                        ErwarteteRendite={Projekt.ErwRendite}
                        Typ={Projekt.Typ}
                        Logo={Projekt.LogoLink}
                        titleImg={Projekt.TitleLink}
                        Emittent={Projekt.Emittent}
                      />
                    </HashLink>
                  </li>
                ))}
              </ul>{" "}
              <HashLink to="./Digitale-Wertpapiere#">
                <div id="Div_Home_Projekt_Section_ALLE_BUTTON">
                  <h2 id="Div_Home_Projekt_Section_alle_h2">Alle Projekte</h2>
                </div>
              </HashLink>
            </div>
          </div>
          <div id="Div_Home_Projekte_Section_Layer"></div>
          <div id="Div_Home_Projekte_Section_Layer_Form"></div>
          <div id="Div_Home_CV_Section">
            <div id="Hoem_What_is_CV_Wrapper">
              <div id="Hoem_What_is_CV_Wrapper_Left">
                <h5 id="Div_Home_CV_Section_LEFT_h5">Über uns</h5>
                <h2 id="Div_Home_CV_Section_LEFT_h2">
                  Was ist <br />
                  Chainvest
                  <br /> Capital
                </h2>
              </div>

              <div id="Hoem_What_is_CV_Wrapper_right">
                <h4 id="Div_Home_CV_Section_RIGHT_h4">
                  Das disruptive Potenzial der Blockchain-Technologie verändert
                  die bestehende Infrastruktur der Kapitalmärkte. GründerInnen
                  und AnlegerInnen werden neue Möglichkeiten der Kapitalaufnahme
                  eröffnet, losgelöst von zentralen Instanzen. <br />
                  <br />
                  Veränderungsprozesse sind aber auch gleichzeitig mit
                  Unsicherheiten und das Lösen von zentralen Instanzen mit
                  Ungewissheiten verbunden. Mit Chainvest Capital schaffen wir
                  transparentere Rahmenbedingungen auf dem Markt für digitale
                  Wertpapiere und so mehr Vertrauen in die Tokenisierung von
                  Finanzinstrumenten.
                  <br />
                  <br /> Als Informationsplattform für digitalisierte
                  Wertpapiere informiert Chainvest Capital rund um die
                  Fragestellungen der Blockchain-Technologie im
                  Finanzdienstleistungssektor. Mit Chainvest Capital erhalten
                  AnlegerInnen Zugang zu vielfältigen Investitionsprojekten aus
                  unterschiedlichen Branchen.
                </h4>
              </div>
            </div>

            <div id="Div_Home_CV_Section_Layer"></div>
          </div>{" "}
        </div>
        <Footer />
      </div>
      <div id="Mobile_Wrapper">
        <div id="Mobile_Home_Wrapper">
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
          <MOBILE_MENUE />
          <div id="Mobile_Home_Layer"></div>
          <div id="Mobile_Home_Wrapper_Content">
            <div id="Mobile_Home_Top_Sec">
              <h2 id="Mobile_Home_Top_Sec_H2">Digitale</h2>
              <h2 id="Mobile_Home_Top_Sec_H2_yellow">Wertpapiere</h2>
              <h5 id="Mobile_Home_Top_Sec_H5">
                Chainvest Capital stellt die Schnittstelle zwischen spannenden
                Investitionsprojekten und einer breiten Investorencommunity dar.
                Über diese Plattform erhalten AnlegerInnen Zugang zu
                vielfältigen digitalen Wertpapieren aus unterschiedlichen
                Branchen.
              </h5>
              <div id="Mobile_Home_Top_Wertpapiere">
                <div id="Mobile_Home_Top_Kachel">
                  <h3 id="Mobile_Home_Top_Kachel_h3">
                    Was sind digitale Wertpapiere?
                  </h3>
                  <h5 id="Mobile_Home_Top_Kachel_h5">
                    Digitale Wertpapiere bringen klassische Finanzprodukte in
                    die digitale Welt. Dabei entstehen durch das Verwenden der
                    Blockchain-Technologie Vorteile für InvestorInnen und
                    EmittentInnen bspw. im Hinblick auf Transaktionskosten.
                  </h5>
                </div>
                <div id="Mobile_Home_Top_Wertpapiere_Right">
                  <img src={Mobil_Home_png} id="Mobil_KV" alt="" />
                  <img src={Mobil_IT} id="Mobil_IT" alt="" />
                </div>
              </div>
            </div>
            <div id="Mobile_Home_Projekt_Sec">
              <h2 id="Mobile_Home_Projekt_h2">Projekte</h2>
              <ul id="Mobile_Home_Projekt_Sec_Grid">
                {ViererProjekteArray.map((Projekt) => (
                  <li id="home_mobil_projekte_li_11">
                    <HashLink to={Projekt.InternerLink}>
                      <MOBILE_HOME_PROJEKT_BOX
                        title={Projekt.name}
                        KategorieBildLink={Projekt.KategorieBildLink}
                        Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                        ErwarteteRendite={Projekt.ErwRendite}
                        Typ={Projekt.Typ}
                        Logo={Projekt.LogoLink}
                        titleImg={Projekt.TitleLink}
                        Mindestinvestition={Projekt.Mindestinvestition}
                        Emittent={Projekt.Emittent}
                      />
                    </HashLink>
                  </li>
                ))}
              </ul>
              <HashLink to="../Digitale-Wertpapiere#">
                <div id="Mobile_Home_Projekt_Alle">
                  <h3 id="Mobile_Home_Projekt_Alle_H3">
                    Alle Projekte ansehen
                  </h3>
                </div>
              </HashLink>
            </div>
            <div id="Mobile_Home_CV_Sec">
              <h2 id="Mobile_Home_CV_Sec_h2">Was ist Chainvest Capital ?</h2>
              <h5 id="Mobile_Home_CV_Sec_H5">
                Das disruptive Potenzial der Blockchain-Technologie verändert
                die bestehende Infrastruktur der Kapitalmärkte. GründerInnen und
                AnlegerInnen werden neue Möglichkeiten der Kapitalaufnahme
                eröffnet, losgelöst von zentralen Instanzen.
                Veränderungsprozesse sind aber auch gleichzeitig mit
                Unsicherheiten und das Lösen von zentralen Instanzen mit
                Ungewissheiten verbunden. Mit Chainvest Capital schaffen wir
                transparentere Rahmenbedingungen auf dem Markt für digitale
                Wertpapiere und so mehr Vertrauen in die Tokenisierung von
                Finanzinstrumenten. Als Informationsplattform für digitalisierte
                Wertpapiere informiert Chainvest Capital rund um die
                Fragestellungen der Blockchain-Technologie im
                Finanzdienstleistungssektor. Mit Chainvest Capital erhalten
                AnlegerInnen Zugang zu vielfältigen Investitionsprojekten aus
                unterschiedlichen Branchen.
              </h5>
            </div>
          </div>
        </div>
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default App;
