import "./DEX.css";
import FOOTER from "../../components/navigation/Footer";
import TOP_NAV_BAR from "../../components/navigation/Top_Nav_Bar";
import MOBILE_FOOTER from "../../MobileComponents/Mobile_Footer";
import { useState, useEffect } from "react";
import arrow from "../../assets/images/arrow.png";

import MOBILE_MENUE from "../../MobileComponents/Mobile_menue";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Weiss_einfach_Col_1h from "../Components/Weiss_einfach_Col_1h";

import PancakeSwap from "../../assets/images/PancakeSwap.png";
import DYDX from "../../assets/images/DYDX.png";
import CurveFinance from "../../assets/images/CurveFinance.png";
import Uniswap from "../../assets/images/Uniswap.png";
import Mobile_white_einfach from "../Components/Mobile_white_einfach.js";

import Zweier_Spalte_Big from "../Components/Zweier_Spalte_Big";
import { HashLink } from "react-router-hash-link";
function DEX(props) {
  const DEX_Risiken = [
    "Ein Risiko besteht in der sog. Price-Slippage. Damit sind schnelle Preisänderungen der gehandelten Token Paare gemeint. Hierbei geht es allerdings nicht nur um die generelle Volatilität, die beim Handel beim Kryptowährungen auftritt, sondern durch schnelle Preiänderungen in Folge von Liquiditätsschwankungen innerhalb der Pools. Hierbei werden Transaktionen zu anderen Preisen an die Blockchain übertragen, als durch den Nutzer erwünscht. Dies kann insbesondere dann entstehen, wenn die zu Grunde liegenden Liquiditäts Pool kleine Volumen aufweisen. Ebenso kann nicht ausgeschlossen werden, dass bei den teilweise noch sehr jungen Protokollen Fehler im Programm Code vorliegen und diese zum Nachteil der Nutzer ausgenutzt werden könnten. ",

    "Für den DeFi Space allgemein gilt, dass es wenig regulatorische Rahmenbedingungen gibt. Das bietet einerseits die Möglichkeit, bspw. ohne KYC-Prozesse zu handeln, verhindert allerdings auch das Umsetzen von Vebraucherschutzregelungen sowie die Möglichkeit von rechtlichen Schritten gegen die Betreiber der Plattform, da diese im klassischen Rechtssinne nicht existieren. ",
    "Ebenso besteht das Risiko des sog. impermanent Loss. Sofern der Preis auf einer DEX, welcher vom Verhältnis beider Token im Liquidity Pool abhängig ist, von dem Preis auf anderen Tauschplattformen abweicht, kann der Pool insgesamt an Wert verlieren. Hierbei können Liquiditätsbereitsteller bspw. nicht in voller Höhe von Preisanstiegen eines Tokens profitieren und sind durch das Beteiligen am Liquidity Pool schlechter als  gestellt, als wenn die Token nicht eingesetzt werden würden.",
  ];

  const DEX_Funktion = [
    "Um den Handel zwischen verschiedenen Assets, bspw. Kryptowährungen, abzuwickeln, nehmen zentrale Börsen die Position eines Market Makers ein und stellen ein Order Buch sowie ausreichend Liquidität zur Verfügung. ",
    "Dezentrale Börsen ermöglichen einen P2P Handel mit Hilfe von sog. Liquidity Pools. Diese Pools bestehen grundsätzlich aus zwei verschiedenen Token, je nach Trading Paar. Die Token innerhalb der Pools werden von verschiedenen Token Inhabern zur Verfügung gestellt, welche für das temporäre Ausleihen ihrer Token prozentual an den durch die DEX erhobenen Gebühren beteiligt werden. Man nennt diese Token Bereitsteller auch Liquidity Provider.",
    " ",
    "Durch das Hinzufügen und Abziehen von Token aus den Liquidity Pools können Tauschgeschäfte abgewickelt werden. Dabei verändert sich das initiale Verhältnis der Token innerhalb des Pools. Dieses Verhältnis repräsentiert den relativen Preis beider Token zueinander.",
    "",
    "Sämtliche Prozesse zum Abwicklen von Transaktionen basieren auf Smart Contracts und werden vollkommen automatisiert ausgeführt. In diesem Zusammenhang spricht man auch von Automated Market Makers (AMM).",
  ];
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
        <div id="DEX_BG_Wrapper">
          {" "}
          <div id="DEX_BG_Wrapper_White"></div>
          <div id="DEX_BG_Wrapper_Content">
            <div id="WSDW_Top_Wrapper">
              <div id="WSDW_Top_Wrapper_Left">
                <h2 id="WSDW_Top_Wrapper_h2">Decentralised Exchanges </h2>{" "}
                <h1 id="WSDW_Top_Wrapper_h2_Yellow"></h1>
                <h4 id="WSDW_h470">
                  Das Konzept der Dezentralsierung macht auch vor Börsenplätzen
                  (eng. Exchanges) nicht Halt. Durch das große Wachstum des
                  DeFi- Bereichs konnten dezentrale Börsen schnell wachsen und
                  wickeln mittlerweile Transaktionsvolumen in ähnlichen
                  Größenordnungen wie zentrale Börsenplätze im Krypto-Ökosystem
                  ab.
                </h4>
              </div>
              <div id="WSDW_Top_Wrapper_Right">
                <div id="Div_Home_Top_Section_Layer_Form"></div>

                <HashLink to="#WasSind">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">
                      Was sind dezentrale Börsen ?
                    </h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
                <HashLink to="#WieFunktionieren">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">
                      Wie funktionieren dezentrale Börsen ?
                    </h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>

                <HashLink to="#OrganisationDEX">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">Organisation einer DEX</h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>

                <HashLink to="#VorteileDex">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">Vorteile auf einer DEX</h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>

                <HashLink to="#RiskenDEX">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">
                      Risiken bei einer dezentralen Börsen
                    </h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
              </div>
            </div>
            <div id="WasSind"></div>
            {/* Was sind DEX */}
            <div id="DEX_Was_sind_wrapper">
              <div id="DEX_Was_sind_Left">
                <h3 id="DEX_Was_sind_Left_h3">Was sind dezentrale Börsen ?</h3>
                <h5 id="DEX_Was_sind_Left_h5">
                  Dezentrale Börsen ermöglichen, klassische Börsengeschäfte, wie
                  den Handel von verschiedenen Assets, ohne Intermediäre und
                  durch das Nutzen der Blockchain-Technologie sowie Smart
                  Contracts zu organisieren. Das Konzept, klassische Funktionen
                  des Kapitalmarktes ohne zentrale Instanzen zu organisieren,
                  ist auch unter dem Begriff DeFi (Decentralised Finance)
                  bekannt. <br />
                  <br />
                  Aktuell gibt es verschiedene dezentrale Börsenplätze, auf
                  denen Nutzer Kryptowährungen tauschen können. Diese
                  Marktplätze nutzen mehrheitlich die Infrastruktur der Ethereum
                  Blockchain.
                </h5>
              </div>

              <div id="DEX_Was_sind_Right">
                <div id="DEX_Was_sind_Right_Top">
                  <div id="DEX_Was_sind_Right_ITEM">
                    <img src={Uniswap} id="DEX_Was_sind_Right_ITEM_img" />
                    <h5 id="DEX_Was_sind_Right_ITEM_h5">Uniswap</h5>
                  </div>

                  <div id="DEX_Was_sind_Right_ITEM">
                    <img src={CurveFinance} id="DEX_Was_sind_Right_ITEM_img" />
                    <h5 id="DEX_Was_sind_Right_ITEM_h5">Curve Finance</h5>
                  </div>
                </div>
                <div id="DEX_Was_sind_Right_Buttom">
                  <div id="DEX_Was_sind_Right_ITEM">
                    <img src={DYDX} id="DEX_Was_sind_Right_ITEM_img" />
                    <h5 id="DEX_Was_sind_Right_ITEM_h5">DYDX</h5>
                  </div>

                  <div id="DEX_Was_sind_Right_ITEM">
                    <img src={PancakeSwap} id="DEX_Was_sind_Right_ITEM_img" />
                    <h5 id="DEX_Was_sind_Right_ITEM_h5">PancakeSwap</h5>
                  </div>
                </div>
                <h5 id="DEX_Was_sind_Right_ITEM_h5">
                  Beispiele für dezentrale Börsen
                </h5>
              </div>
            </div>
            <div id="WieFunktionieren"> </div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/* wIE FUNKTIONEIREN DEX */}
            <Weiss_einfach_Col_1h
              Heading="Wie funktionieren die dezentrale Börsen ?"
              Text={DEX_Funktion.join("\n")}
            />{" "}
            <div id="OrganisationDEX"></div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/* Organisation und Vorteile */}
            <div id="VorteileDex"></div>
            <Zweier_Spalte_Big
              Heading_L="Organisation einer DEX"
              Text_L="Dezentrale Plattformen sind in der Regel als sogenannte DAO (Dezentrale autonome Organisation) aufgebaut und werden mit Hilfe von eigenen Token, auch Governance Token genannt, verwaltet. Welche Rechte oder Partizipationsmöglichkeiten mit den Token verbunden sind, hängt von der individuellen Ausgestaltung der Projekte zusammen. "
              Heading_R="Vorteile auf einer DEX"
              Text_R="Die Vorteile von dezentralen Plattformen entstehen durch die Abwesenheit von zentralen Instanzen. Durch die automatsierte Abwicklung werden 24/7 Märkte und ein Handel direkt zwischen Nutzern ermöglicht. Aktuell kann durch fehlende KYC-Anforderungen gehandelt werden, ohne seine Identität gegenüber Dritten bekannt zu geben."
            />
            <div id="RiskenDEX"></div>
            {/*Rsiken DEX */}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            <Weiss_einfach_Col_1h
              Heading="Risiken bei dezentralen Börsen"
              Text={DEX_Risiken.join("\n")}
            />
          </div>
        </div>
        <FOOTER />{" "}
      </div>

      <div id="Mobile_Wrapper">
        <div id="Mobile_Background_Grey">
          <div id="Mobile_Background_White_Overlay"></div>
          <div id="Mobile_DEX_Content">
            <MOBILE_MENUE />
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
            <div id="Mobile_Content_Top_Section">
              <h2 id="Mobile_Content_Top_Section_h2">
                Decentralised Exchanges
              </h2>
              <div id="Margin-Bottom-2vh"></div>
              <div id="Mobile_Content_Top_Section_yellow_lane"></div>

              <h2 id="Mobile_Content_Top_Section_h2_yellow"></h2>
              <h5 id="Mobile_Content_Top_Section_h5">
                Das Konzept der Dezentralsierung macht auch vor Börsenplätzen
                (eng. Exchanges) nicht Halt. Durch das große Wachstum des DeFi-
                Bereichs konnten dezentrale Börsen schnell wachsen und wickeln
                mittlerweile Transaktionsvolumen in ähnlichen Größenordnungen
                wie zentrale Börsenplätze im Krypto-Ökosystem ab.
              </h5>
            </div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="DEX_Was_sind_Wrapper">
              <h2 id="NFRID_SM_h2">Was sind dezentrale Börsen ?</h2>
              <h5 id="NFRID_SM_h5">
                Dezentrale Börsen ermöglichen, klassische Börsengeschäfte, wie
                den Handel von verschiedenen Assets, ohne Intermediäre und durch
                das Nutzen der Blockchain-Technologie sowie Smart Contracts zu
                organisieren. Das Konzept, klassische Funktionen des
                Kapitalmarktes ohne zentrale Instanzen zu organisieren, ist auch
                unter dem Begriff DeFi (Decentralised Finance) bekannt. <br />
                <br />
                Aktuell gibt es verschiedene dezentrale Börsenplätze, auf denen
                Nutzer Kryptowährungen tauschen können. Diese Marktplätze nutzen
                mehrheitlich die Infrastruktur der Ethereum Blockchain.
              </h5>

              <div id="DEX_Was_sind_Items_Wrapper">
                <div id="DEX_Was_sind_Items_Row">
                  <div id="DEX_Was_sind_Item">
                    <img src={PancakeSwap} id="DEX_Was_sind_Item_IMG" />
                    <h5 id="DEX_Was_sind_Item_h5">PancakeSwap</h5>
                  </div>

                  <div id="DEX_Was_sind_Item">
                    <img src={Uniswap} id="DEX_Was_sind_Item_IMG" />
                    <h5 id="DEX_Was_sind_Item_h5">Uniswap</h5>
                  </div>
                </div>

                <div id="DEX_Was_sind_Items_Row">
                  <div id="DEX_Was_sind_Item">
                    <img src={CurveFinance} id="DEX_Was_sind_Item_IMG" />
                    <h5 id="DEX_Was_sind_Item_h5">Curve Finance</h5>
                  </div>

                  <div id="DEX_Was_sind_Item">
                    <img src={DYDX} id="DEX_Was_sind_Item_IMG" />
                    <h5 id="DEX_Was_sind_Item_h5">DYDX</h5>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Wie Funktionieren  */}
            <Mobile_white_einfach
              Heading="Wie funktionieren die dezentrale Börsen ?"
              Text={DEX_Funktion.join("\n")}
            />{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Organisation  */}
            <Mobile_white_einfach
              Heading="Organisation einer DEX"
              Text="Dezentrale Plattformen sind in der Regel als sogenannte DAO (Dezentrale autonome Organisation) aufgebaut und werden mit Hilfe von eigenen Token, auch Governance Token genannt, verwaltet. Welche Rechte oder Partizipationsmöglichkeiten mit den Token verbunden sind, hängt von der individuellen Ausgestaltung der Projekte zusammen. "
            />{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Vorteile */}
            <Mobile_white_einfach
              Heading="Vorteile auf einer DEX ?"
              Text="Die Vorteile von dezentralen Plattformen entstehen durch die Abwesenheit von zentralen Instanzen. Durch die automatsierte Abwicklung werden 24/7 Märkte und ein Handel direkt zwischen Nutzern ermöglicht. Aktuell kann durch fehlende KYC-Anforderungen gehandelt werden, ohne seine Identität gegenüber Dritten bekannt zu geben."
            />{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Risiken  */}
            <Mobile_white_einfach
              Heading="Risiken bei dezentralen Börsen"
              Text={DEX_Risiken.join("\n")}
            />{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            <MOBILE_FOOTER />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DEX;
