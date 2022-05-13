import "./Design/LandingPage.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";
import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";
import Footer from "./components/navigation/Footer";
import { HashLink } from "react-router-hash-link";
import CookieConsent from "react-cookie-consent";
import arrow from "./assets/images/Arrow_white.png";
import Landing_Top_Right_ger from "./assets/images/Landing_Top_Right_ger.png";
import Mobile_menue from "./MobileComponents/Mobile_menue";
import Mobile_Footer from "./MobileComponents/Mobile_Footer";
import MOBILE_HOME_PROJEKT_BOX from "./MobileComponents/Mobile_Home_Projekt_Box";

import Landing_Top_Right from "./assets/images/Landing_Top_Right.png";
import LandingPage_Projekt from "./components/LandingPage_Projekt";
import LandingPage_Vergleichen from "./assets/images/LandingPage_Vergleichen.png";
import LandingPage_Academy from "./assets/images/LandingPage_Academy.png";
import Eccplipse_Finden from "./assets/images/Eccplipse_Finden.png";
import Mobile_Landing_Top from "./assets/images/LandingPage_Mobile_Hero_cut_HQ.png";
import Mobile_LandIng_Academy from "./assets/images/LandingPage_Mobile_Academy_cut_HQ.png";
import Mobile_LandIng_Vergleichen from "./assets/images/LandingPage_Mobile_vVergl_cut_HQ.png";

function LandingPage() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const [ProjekteArray, setProjekteArray] = useState([]);

  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));
      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekte([ProjekteList]);
      console.log(ProjekteList);
      buildViererProjekteArray(ProjekteList);
    } catch (error) {}
  };

  const [Projekt1, setProjekt1] = useState([]);
  const [Projekt2, setProjekt2] = useState([]);
  const [Projekt3, setProjekt3] = useState([]);
  const [Projekt4, setProjekt4] = useState([]);

  function setProjekte([ProjekteList]) {
    setProjekt1(ProjekteList[0]);
    setProjekt2(ProjekteList[1]);
    setProjekt3(ProjekteList[2]);
    setProjekt4(ProjekteList[3]);
  }
  useEffect(() => {
    fetchProjekte();
  }, []);

  const [ViererProjekteArray, setViererProjekteArray] = useState([]);
  const [helping2, sethelping2] = useState([]);
  function buildViererProjekteArray(GanzesArray) {
    for (var i = 0; i < 4; i++) {
      helping2.push(GanzesArray[i]);
    }
    setViererProjekteArray(helping2);
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
        <div id="LandingPage_Wrapper">
          <div id="LandingPage_Top">
            <div id="LandingPage_Top_Left">
              <div id="LandingPage_Top_Left_Pre_Heading">
                Finden • Vergleichen • Verstehen
              </div>
              <h1 id="LandingPage_Top_Left_h1">Digitale Wertpapiere auf</h1>
              <h1 id="LandingPage_Top_Left_Yellow">Chainvest Capital</h1>

              <h4 id="LandingPage_Top_Left_h4">
                Digitale Vermögensgegenstände revolutionieren die traditionellen
                Kapitalmärkte und eröffnen AnlegerInnen zahlreiche neue
                Investitionsmöglichkeiten. Chainvest Capital bietet eine
                Plattform, welche sowohl Privatpersonen, als auch
                institutionellen InvestorInnen die Vielfalt der regulierten
                digitalen Investitionsprojekte transparent aufzeigt.
              </h4>
              <div id="LandingPage_Top_Left_Bottom_Wrapper">
                <HashLink to="../Digitale-Wertpapiere#">
                  <div id="LandingPage_Top_Left_Button">
                    Alle Projekte{" "}
                    <img src={arrow} id="LandingPage_Top_Left_Button_IMG" />{" "}
                  </div>
                </HashLink>{" "}
                <HashLink to="../Academy/Was-sind-digitale-Wertpapiere#">
                  <div id="LandingPage_Top_Left_Button_Trans">
                    Was sind digitale Wertpapiere ?
                  </div>{" "}
                </HashLink>{" "}
              </div>
            </div>

            <div id="LandingPage_Top_Right">
              <img src={Landing_Top_Right} id="LandingPage_Top_Right_IMG"></img>
            </div>
          </div>
          <div id="LandingPage_Projekte">
            <div id="LandingPage_Projekte_Left">
              <img src={Eccplipse_Finden} id="Eccplipse_Finden_IMG" />
              <div id="LandingPage_Projekte_Left_Left">
                <LandingPage_Projekt
                  title={Projekt1.name}
                  KategorieBildLink={Projekt1.KategorieBildLink}
                  Finanzierungsvolumen={Projekt1.Finanzierungsvolumen}
                  ErwarteteRendite={Projekt1.ErwRendite}
                  Typ={Projekt1.Typ}
                  Logo={Projekt1.LogoLink}
                  titleImg={Projekt1.TitleLink}
                  Mindestinvestition={Projekt1.Mindestinvestition}
                  Emittent={Projekt1.Emittent}
                  Link={Projekt1.InternerLink}
                />
                <LandingPage_Projekt
                  title={Projekt2.name}
                  KategorieBildLink={Projekt2.KategorieBildLink}
                  Finanzierungsvolumen={Projekt2.Finanzierungsvolumen}
                  ErwarteteRendite={Projekt2.ErwRendite}
                  Typ={Projekt2.Typ}
                  Logo={Projekt2.LogoLink}
                  titleImg={Projekt2.TitleLink}
                  Mindestinvestition={Projekt2.Mindestinvestition}
                  Emittent={Projekt2.Emittent}
                  Link={Projekt2.InternerLink}
                />
              </div>

              <div id="LandingPage_Projekte_Left_Right">
                <LandingPage_Projekt
                  title={Projekt3.name}
                  KategorieBildLink={Projekt3.KategorieBildLink}
                  Finanzierungsvolumen={Projekt3.Finanzierungsvolumen}
                  ErwarteteRendite={Projekt3.ErwRendite}
                  Typ={Projekt3.Typ}
                  Logo={Projekt3.LogoLink}
                  titleImg={Projekt3.TitleLink}
                  Mindestinvestition={Projekt3.Mindestinvestition}
                  Emittent={Projekt3.Emittent}
                  Link={Projekt3.InternerLink}
                />
                <LandingPage_Projekt
                  Link={Projekt4.InternerLink}
                  title={Projekt4.name}
                  KategorieBildLink={Projekt4.KategorieBildLink}
                  Finanzierungsvolumen={Projekt4.Finanzierungsvolumen}
                  ErwarteteRendite={Projekt4.ErwRendite}
                  Typ={Projekt4.Typ}
                  Logo={Projekt4.LogoLink}
                  titleImg={Projekt4.TitleLink}
                  Mindestinvestition={Projekt4.Mindestinvestition}
                  Emittent={Projekt4.Emittent}
                />{" "}
              </div>
            </div>

            <div id="LandingPage_Projekte_Right">
              <h3 id="LandingPage_h3">Digitale Wertpapiere</h3>
              <h3 id="LandingPage_h3_yellow">Finden</h3>
              <h4 id="LandingPage_h4">
                Chainvest Capital bietet einen umfassenden Überblick diverser
                Anbieter und Investitionsprojekte des digitalen
                Wertpapiermarktes und fasst dabei alle relevanten Informationen
                kompakt zusammen, um die Entscheidungsfindung zu unterstützen.
              </h4>
              <div id="LandingPage_Under_Button_Wrapper">
                <HashLink to="../Digitale-Wertpapiere#">
                  <div id="LandingPage_Top_Left_Button">
                    Alle Projekte{" "}
                    <img src={arrow} id="LandingPage_Top_Left_Button_IMG" />{" "}
                  </div>{" "}
                </HashLink>{" "}
              </div>
            </div>
          </div>

          <div id="LandingPage_Vergleichen">
            <div id="LandingPage_Vergleichen_Left">
              <h3 id="LandingPage_h3">Digitale Wertpapiere</h3>
              <h3 id="LandingPage_h3_yellow">Vergleichen</h3>
              <h4 id="LandingPage_h4">
                Um passende Investitionsmöglichkeiten zu finden, ermöglicht
                Chainvest Capital den kompakten Vergleich zahleicher Projekte
                hinsichtlich relevanter, projektabhängig variierender Größen.
                Segmentiert wird dabei in geeignete Kategorien, welche die
                Unterschiede der zahlreichen digitalen Wertpapiere übersichtlich
                offenlegen.
              </h4>
              <div id="LandingPage_Under_Button_Wrapper">
                <HashLink to="../Vergleichstool#">
                  <div id="LandingPage_Top_Left_Button">
                    Vergleichen{" "}
                    <img src={arrow} id="LandingPage_Top_Left_Button_IMG" />{" "}
                  </div>{" "}
                </HashLink>
              </div>
            </div>

            <div id="LandingPage_Vergleichen_Right">
              <img
                src={LandingPage_Vergleichen}
                id="LandingPage_Vergleichen_Img"
              />
            </div>
          </div>

          <div id="LandingPage_Academy">
            <div id="LandingPage_Academy_Left">
              <img src={LandingPage_Academy} id="LandingPage_Academy_Img" />
            </div>

            <div id="LandingPage_Academy_Right">
              <h3 id="LandingPage_h3">Digitale Wertpapiere</h3>
              <h3 id="LandingPage_h3_yellow">Verstehen</h3>
              <h4 id="LandingPage_h4">
                Der digitale Kapitalmarkt ist extrem schnelllebig und für viele
                Marktteilnehmer nur schwer verständlich. Wir möchten Abhilfe
                schaffen und durch unsere Academy das Verständnis diverser
                Themenbereiche rund um die Blockchain fördern, um so zu einer
                optimalen Investitionsentscheidung beizutragen.
              </h4>
              <div id="LandingPage_Under_Button_Wrapper">
                <HashLink to="../Academy#">
                  <div id="LandingPage_Top_Left_Button">
                    Academy{" "}
                    <img src={arrow} id="LandingPage_Top_Left_Button_IMG" />{" "}
                  </div>{" "}
                </HashLink>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div id="Mobile_Wrapper">
        <div id="Mobile_LandingPage">
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
          </CookieConsent>
          <Mobile_menue />
          <div id="Mobile_LandingPage_Top">
            <div id="Mobile_LandingPage_Top_Top">
              <h4 id="Mobile_LandingPage_Top_Pre_Heading">
                Finden • Vergleichen • Verstehen
              </h4>
              <h1 id="Mobile_LandingPage_Top_Pre_Heading_h1">
                Digitale Wertpapiere auf
              </h1>
              <h1 id="Mobile_LandingPage_Top_Pre_Heading_h1_yellow">
                Chainvest Capital
              </h1>
              <h4 id="Mobile_LandingPage_Top_Pre_Heading_h4">
                Digitale Vermögensgegenstände revolutionieren die traditionellen
                Kapitalmärkte und eröffnen AnlegerInnen zahlreiche neue
                Investitionsmöglichkeiten. Chainvest Capital bietet eine
                Plattform, welche sowohl Privatpersonen, als auch
                institutionellen InvestorInnen die Vielfalt der regulierten
                digitalen Investitionsprojekte transparent aufzeigt.
              </h4>
            </div>

            <div id="Mobile_LandingPage_Top_Bottom">
              <img src={Mobile_Landing_Top} id="Mobile_Landing_Top_img" />
              <div id="Mobile_LandingPage_Top_Button_Wrapper">
                {" "}
                <HashLink to="../Digitale-Wertpapiere#">
                  <div id="Mobile_LandingPage_Top_Button">
                    Alle Projekte{" "}
                    <img src={arrow} id="Mobile_LandingPage_Top_Button_img" />
                  </div>{" "}
                </HashLink>{" "}
                <HashLink to="../Academy/Was-sind-digitale-Wertpapiere#">
                  <div id="Mobile_LandingPage_Top_Button_trans">
                    Was sind digitale Wertpapiere?
                  </div>{" "}
                </HashLink>
              </div>{" "}
            </div>
          </div>
          <div id="Mobile_LandingPage_Finden">
            <h2 id="Mobile_Landing_h2">Digitale Wertpapiere</h2>
            <h2 id="Mobile_Landing_h2_yellow">Finden</h2>
            <h4 id="Mobile_Landing_h4">
              Chainvest Capital bietet einen umfassenden Überblick diverser
              Anbieter und Investitionsprojekte des digitalen Wertpapiermarktes
              und fasst dabei alle relevanten Informationen kompakt zusammen, um
              die Entscheidungsfindung zu unterstützen.
            </h4>

            <div id="Mobile_Landing_Finden_Proejkt_Wrapper">
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
                <div id="Mobile_LandingPage_Vergleichen_Bottom_o">
                  Alle Projekte{" "}
                  <img src={arrow} id="Mobile_LandIng_Vergleichen_Button_img" />
                </div>{" "}
              </HashLink>
            </div>
          </div>
          <div id="Mobile_LandingPage_Vergleichen">
            <div id="Mobile_LandingPage_Vergleichen_top">
              <h2 id="Mobile_Landing_h2">Digitale Wertpapiere</h2>
              <h2 id="Mobile_Landing_h2_yellow">Vergleichen</h2>
              <h4 id="Mobile_Landing_h4">
                Um passende Investitionsmöglichkeiten zu finden, ermöglicht
                Chainvest Capital den kompakten Vergleich zahleicher Projekte
                hinsichtlich relevanter, projektabhängig variierender Größen.
                Segmentiert wird dabei in geeignete Kategorien, welche die
                Unterschiede der zahlreichen digitalen Wertpapiere übersichtlich
                offenlegen.
              </h4>
            </div>
            <div id="Mobile_LandingPage_Vergleichen_Buttom">
              <img
                src={Mobile_LandIng_Vergleichen}
                id="Mobile_Lanidng_Vergleichen_IMG"
              />{" "}
              <HashLink to="../Vergleichstool#">
                <div id="Mobile_LandingPage_Vergleichen_Bottom_s">
                  Vergleichen{" "}
                  <img src={arrow} id="Mobile_LandIng_Vergleichen_Button_img" />
                </div>
              </HashLink>
            </div>
          </div>
          <div id="Mobile_LandingPage_Academy">
            <div id="Mobile_LandingPage_Vergleichen_top">
              <h2 id="Mobile_Landing_h2">Digitale Wertpapiere</h2>
              <h2 id="Mobile_Landing_h2_yellow">Verstehen</h2>
              <h4 id="Mobile_Landing_h4">
                Chainvest Capital bietet einen umfassenden Überblick diverser
                Anbieter und Investitionsprojekte des digitalen
                Wertpapiermarktes und fasst dabei alle relevanten Informationen
                kompakt zusammen, um die Entscheidungsfindung zu unterstützen.
              </h4>
            </div>
            <div id="Mobile_LandingPage_Academy_Button">
              <img
                src={Mobile_LandIng_Academy}
                id="Mobile_Lanidng_Academy_IMG"
              />
              <HashLink to="../Academy#">
                <div id="Mobile_LandingPage_Vergleichen_Bottom_sb">
                  Academy{" "}
                  <img src={arrow} id="Mobile_LandIng_Vergleichen_Button_img" />
                </div>{" "}
              </HashLink>
            </div>
          </div>{" "}
        </div>
        <Mobile_Footer />
      </div>
    </div>
  );
}

export default LandingPage;
