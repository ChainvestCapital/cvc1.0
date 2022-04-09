import "./Non-Financial-Risks-in-DeFi.css";
import FOOTER from "../../components/navigation/Footer";
import TOP_NAV_BAR from "../../components/navigation/Top_Nav_Bar";
import MOBILE_FOOTER from "../../MobileComponents/Mobile_Footer";
import { useState, useEffect } from "react";
import arrow from "../../assets/images/arrow.png";

import MOBILE_MENUE from "../../MobileComponents/Mobile_menue";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Weiss_einfach_Col_1h from "../Components/Weiss_einfach_Col_1h";
import Smart_Contract_Risiken from "../../assets/images/Smart_Contract_Risiken.png";
import Orakelabhängigkeit from "../../assets/images/Orakelabhängigkeit.png";
import { HashLink } from "react-router-hash-link";

import Mobile_white_einfach from "../Components/Mobile_white_einfach.js";

function DEX(props) {
  const NFRID_Konstruktions = [
    "Eng verknüpft mit dem vorherigen Punkt ist das generelle Risiko von Konstruktionsfehlern innerhalb dezentraler Anwendungen. Bei der Entwicklung neuer Programme kann es auch ohne oben skizzierte bösartige Attacken zu Problemen kommen. Insbesondere bei zunehmender Komplexität von Anwendungen ist der Ausgang verschiedener Szenarien nicht in jedem Fall genau determinierbar. Dadurch kann eine Anwendung ungewünschte Aktionen durchführen, schlicht weil sie falsch programmiert wurde. ",
    "",

    "Dieses Risiko entsteht insbesondere dann, wenn innerhalb der Entwicklungsphase technische Expertise im Bereich der Smart-Contract Entwicklung nicht mit Kompetenzen aus der Finanzwelt kombiniert werden.  Des weiteren sind mangelnde Testverfahren und im zu geringen Umfang angeforderte Audits ein Problem im Hinblick auf das Aufspüren von Konstruktionsfehlern.",
  ];
  const NRID_SPOF = [
    "Wie bereits im Kontext der Oracle-Rsisiken erwähnt, kann es auch im DeFi-Raum zu Zentralisierungsproblemen bzw. Single-Points-of-Failure kommen. Dies passiert insbesondere dann, wenn in der Entwicklung der DeFi-Anwendung  Unternehmen beteiligt sind, die sich innerhalb der Governance Struktur bestimmte Rechte einräumen. ",
    "",
    "Sofern diese nicht im Interesse des Nutzers oder gar missbräuchlich verwendet werden, können klassische Zentralisierungsprobleme entstehen. Diese Möglichkeiten sollten durch die wirklich dezentrale Gestaltung der Anwendung ausgeschlossen werden, um letzlich wirklich als De-Fi Konzept zu gelten. ",
    "",
    "Konkret können zentrale Stellen bspw. durch sog. “upgradeable Smart Contracts” später Einfluss nehmen. Auch das Integrieren von zentralisierten Stablecoins wie (USDT, USDC, DAI) birgt Risiken. Des Weiteren kann in der Architektur der Anwendung durch das Verwenden von nicht dezentraler Server-Strukturen ein Zentralisierungsrisiko entstehen.",
  ];
  const NRID_Quellen = [
    "Meegan: Identifying Key Non-Financial Risks in Decentralised Finance on Ethereum Blockchain. 2020",
    "",
    "  https://www.statista.com/statistics/1272181/defi-tvl-in-multiple-blockchains/",
    "",
    "https://www.kaspersky.com/blog/ethereum-ico/19846/",
    "",
    "https://ethereum.org/en/whitepaper/",
  ];
  const NRID_rEGULATORISCH = [
    "Der DeFi-Raum ist aktuell in vielen Bereich weitestgehend unreguliert. Dies bietet einerseits die Möglichkeit der Entwicklung von neuartigen Geschäftsmodellen und Partizipationsmöglichkeiten für Investoren, andererseits können zukünftig eintretende regulatorische Vorschriften für Risiken sorgen. ",
    "",
    "Zwar ist noch nicht geklärt, wie regulatorische Maßnahmen in Bereichen ohne zentrale Instanzen wirken werden - Investoren sollten aber die Möglichkeit der negativen Auswirkungen von zukünftigen Vorschriften bedenken. Neben Geschäftsmodell-betreffenden Regularien können insbesondere auch steuerliche Regelungen für Anleger relevant werden.",
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
        <div id="NFRID_BG_Wrapper">
          {" "}
          <div id="NFRID_BG_Wrapper_White"></div>
          <div id="NFRID_BG_Wrapper_Content">
            <div id="WSDW_Top_Wrapper">
              <div id="WSDW_Top_Wrapper_Left">
                <h2 id="WSDW_Top_Wrapper_h2">Non Financial Risks in DeFi</h2>{" "}
                <h4 id="WSDW_h470">
                  Einer der spannendsten Einsatzbereiche der
                  Blockchain-Technologie stellt der Bereich "Decentralised
                  Finance" (DeFi) dar. Die vergleichsweise hohen Renditen haben
                  seit 2017 viele Anleger in diesen Bereich gelockt. Das
                  innerhalb des DeFi Systems investierte Kapital (Total Value
                  locked) konnte innerhalb weniger Jahre auf weltweit über 270
                  Milliarden USD wachsen.
                  <br />
                  <br />
                  Auch wenn die Idee, zentrale Instanzen aus dem klassischen
                  Finanzwesen zu entfernen, mit etlichen Chancen einhergeht,
                  stehen diesen auch erhebliche Risiken gegenüber.
                  <br />
                  <br />
                  Neben klassischen Investitionsrisiken soll es im Folgenden
                  insbesondere um die Darstellung ausgewählter
                  nicht-finanzieller Risiken gehen.
                </h4>
              </div>
              <div id="WSDW_Top_Wrapper_Right">
                {" "}
                <div id="Div_Home_Top_Section_Layer_Form"></div>
                <HashLink to="#SmartContractRisiken">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">Smart Contract Risiken</h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
                <HashLink to="#Konstruktionsfehler">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">Konstruktionsfehler</h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
                <HashLink to="#Orakelabhängigkeit">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">Orakelabhängigkeit</h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
                <HashLink to="#SinglePointofFailure">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">Single Point of Failure</h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
                <HashLink to="#RegulatorischeRisiken">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">Regulatorische Risiken</h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
                <HashLink to="#WeitereRisiken">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">Weitere Risiken</h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
              </div>
            </div>{" "}
            <div id="SmartContractRisiken"></div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/* Smart Contract */}
            <div id="NFRID_Was_sind_wrapper">
              <h3 id="DEX_Was_sind_Left_h3">Smart Contract Risiken</h3>
              <h5 id="DEX_Was_sind_Left_h5">
                Smart Contracts sind das Herzstück vieler DeFi-Anwendungen.
                Diese “schlauen Verträge” stellen Code-Abschnitte dar, die
                innerhalb eines Blockchain Systems ausgeführt werden können.
                Dank ihnen können komplexe Prozesse durch einprogrammierte Logik
                automatisiert ausgeführt werden, ohne dass zentrale Instanzen
                benötigt werden.
                <br />
                <br />
                Durch das Verwenden von Smart Contracts entstehen Risiken in
                verschiedenen Bereichen. Insbesondere sind diese durch Fehler
                innerhalb der Programmierung zu erklären. Während in klassischen
                Software-Entwicklungen das spätere Beheben von Fehlern möglich
                ist, ist das Ausbessern von Code innerhalb eines Smart Contracts
                im Nachhinein mit großen Problemen verbunden.
              </h5>
              <div id="NFRID_Was_sind_wrapper_Inner">
                <h5 id="DEX_Was_sind_Left_h5">
                  Innerhalb der Entwicklung von Smart Contracts können Fehler an
                  diversen Stellen entstehen. Dazu gehört das bekannte Problem
                  des “Interger Overflow/ Underflow”. Dieses Problem ergibt sich
                  daraus, dass in vielen Programmiersprachen der Umgang mit
                  großen Zahlen zu einem Zurücksetzten des numerischen Wertes
                  führen kann. Sofern der Smart Contract nicht geschützt ist,
                  kann diese Schwachstelle ausgenutzt werden, um bspw.
                  Rechenoperationen bei der Auszahlung zu manipulieren.
                  <br />
                  <br />
                  Ebenfalls problematisch sind von einander abhängige
                  Transaktionen, sofern diese in den selben Smart Contract
                  eingehen und innerhalb des selben Blockes verwendet werden.
                  Problematisch ist dies, weil die Reihenfolge, in der die
                  Transaktionen in einen Block aufgenommen werden, nicht vom
                  Nutzer bestimmt werden kann. Wie die Transaktionen innerhalb
                  des Blockes strukturiert werden, hängt vom Miner ab. Dieses
                  Problem ist auch als “Front-Running” bekannt.
                  <br />
                  <br />
                  Durch die Abhängigkeit der Smart Contracts von Timestamps
                  besteht außerdem das Risiko, dass diese von bösartigen Minern
                  manipuliert werden.
                </h5>

                <img
                  src={Smart_Contract_Risiken}
                  id="NFRID_Was_sind_wrapper_Inner_Img"
                />
              </div>

              <h5 id="DEX_Was_sind_Left_h5">
                Diese Punkte stellen nur eine Auswahl von Risiken dar, die durch
                den Einsatz von Smart Contracts entstehen können. Weitere
                Angriffspunkte ergeben sich durch bspw. die
                “Re-Entrancy-Verwundbarkeit” oder dem teilweise falsch
                konstruierten Umgang mit Exeptions auf Code-Ebene.
              </h5>
            </div>
            <div id="Konstruktionsfehler"></div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/* Konstruktionsfehler */}
            <Weiss_einfach_Col_1h
              Text={NFRID_Konstruktions}
              Heading="Konstruktionsfehler"
            />
            <div id="Orakelabhängigkeit"></div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/* Orakelabhängigkeit */}
            <div id="DEX_Was_sind_wrapper">
              <div id="DEX_Was_sind_Left">
                <h3 id="DEX_Was_sind_Left_h3">Orakelabhängigkeit</h3>
                <h5 id="DEX_Was_sind_Left_h5">
                  Orakel sind eine entscheidene Komponente in der erfolgreichen
                  Umsetzung von DeFi-Anwendungen. Für nahezu jede Applikation
                  müssen Daten in das auszuführende Programm eingeführt werden.
                  Diese Daten können je nach Use-Case verschieden sein. Häufig
                  handelt es sich bspw. um Kursdaten verschiedener Assets.
                  <br />
                  <br />
                  Zugeführt werden diese Daten über sogenannte Oracles. Diese
                  bringen Daten aus verschiedenen Formaten in eine für einen
                  Smart Contract verwertbare Darstellung und sollen die
                  Kommunikation mit Schnittstellen außerhalb der Anwendung
                  gewährleisten.
                  <br />
                  <br />
                  Bei der Nutzung von externen Daten muss sichgestellt werden,
                  dass die Quelle der Daten sowie der Kommunikationsweg nicht
                  manipuliert wird. Sofern innerhalb einer Anwendung
                  verschiedene Aktionen (bspw. die Auszahlung von Mitteln) an
                  den Preis anderer Assets gekoppelt sind, muss die Integrität
                  der Kursdaten jederzeit sichergestellt sein. Problematisch
                  kann es ebenfalls sein, wenn sich auf wenige oder gar einzelne
                  Oracle-Quellen verlassen wird. Diese sind deutlich anfälliger
                  für Manipulationen (Single-Point-of-Failure).
                </h5>
              </div>

              <div id="DEX_Was_sind_Right">
                <img src={Orakelabhängigkeit} id="Orakelabhängigkeit_IMG" />
              </div>
            </div>
            <div id="SinglePointofFailure"></div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Single Point of Failure */}
            <Weiss_einfach_Col_1h
              Heading="Single Point of Failure
            "
              Text={NRID_SPOF.join("\n")}
            />
            <div id="RegulatorischeRisiken"></div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Regulatorische Risiken */}
            <Weiss_einfach_Col_1h
              Heading="Regulatorische Risiken"
              Text={NRID_rEGULATORISCH.join("\n")}
            />{" "}
            <div id="WeitereRisiken"></div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Weitere Risken */}
            <Weiss_einfach_Col_1h
              Heading="Weitere Risken"
              Text="Die vorgestellte Liste an Risiken erhebt keinen Anspruch auf Vollständigkeit. Im Rahmen von DeFi Anwendungen kommen weitere Probleme zum Tragen. Dazu gehören bspw. Risiken in Hinblick auf die mangelnde Skalierungsfähigkeit vieler Netzwerke sowie die Finalität von Transaktionen in Blockchains. Ebenso risikoreich können Verschiebungen im Bereich der finanziellen Incentivierung der im Netzwerk beteiligten Personen sein. Zudem können systematische Risiken entstehen, die aus der Verknüpfung und teilweise Abhängigkeit von DeFi-Anwendungen untereinander resultieren. Ebenso muss davon ausgegangen werden, dass zu diesem frühen Zeitpunkt der DeFi-Entwicklung noch nicht alle Risiken bekannt sind."
            />
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Quellen */}
            <Weiss_einfach_Col_1h
              Heading="Quellen"
              Text={NRID_Quellen.join("\n")}
            />
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
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
            {/*Top */}
            <div id="Mobile_Content_Top_Section">
              <h2 id="Mobile_Content_Top_Section_h2">
                Non Financial Risks in DeFi
              </h2>
              <div id="Margin-Bottom-2vh"></div>
              <div id="Mobile_Content_Top_Section_yellow_lane"></div>

              <h2 id="Mobile_Content_Top_Section_h2_yellow"></h2>
              <h5 id="Mobile_Content_Top_Section_h5">
                Einer der spannendsten Einsatzbereiche der Blockchain
                Technologie stellt der Bereich "Decentralised Finance" (DeFi)
                dar. Die vergleichsweise hohen Renditen haben seit 2017 viele
                Anleger in diesen Bereich gelockt. Das innerhalb des DeFi
                Systems investierte Kapital (Total Value locked) konnte
                innerhalb weniger Jahre auf weltweit über 270 Milliarden USD
                wachsen.
                <br />
                <br />
                Auch wenn die Idee, zentrale Instanzen aus dem klassischen
                Finanzwesen zu entfernen, mit etlichen Chancen einhergeht,
                stehen diesen auch erhebliche Risiken gegenüber.
                <br />
                <br />
                Neben klassischen Investitionsrisiken soll es im Folgenden
                insbesondere um die Darstellung ausgewählter nicht-finanzieller
                Risiken gehen.
              </h5>
            </div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Smart Contract */}
            <div id="NFRID_SM_Wrapper">
              <h2 id="NFRID_SM_h2">Smart Contract Risiken</h2>
              <h5 id="NFRID_SM_h5">
                Smart Contracts sind das Herzstück vieler DeFi-Anwendungen.
                Diese “schlauen Verträge” stellen Code-Abschnitte dar, die
                innerhalb eines Blockchain Systems ausgeführt werden können.
                Dank ihnen können komplexe Prozesse durch einprogrammierte Logik
                automatisiert ausgeführt werden, ohne dass zentrale Instanzen
                benötigt werden.
                <br />
                <br />
                Durch das Verwenden von Smart Contracts entstehen Risiken in
                verschiedenen Bereichen. Insbesondere sind diese durch Fehler
                innerhalb der Programmierung zu erklären. Während in klassischen
                Software-Entwicklungen das spätere Beheben von Fehlern möglich
                ist, ist das Ausbessern von Code innerhalb eines Smart Contracts
                im Nachhinein mit großen Problemen verbunden.
                <br />
                <br />
                Innerhalb der Entwicklung von Smart Contracts können Fehler an
                diversen Stellen entstehen. Dazu gehört das bekannte Problem des
                “Interger Overflow/ Underflow”. Dieses Problem ergibt sich
                daraus, dass in vielen Programmiersprachen der Umgang mit großen
                Zahlen zu einem Zurücksetzten des numerischen Wertes führen
                kann. Sofern der Smart Contract nicht geschützt ist, kann diese
                Schwachstelle ausgenutzt werden, um bspw. Rechenoperationen bei
                der Auszahlung zu manipulieren.
                <br />
                <br />
                Ebenfalls problematisch sind von einander abhängige
                Transaktionen, sofern diese in den selben Smart Contract
                eingehen und innerhalb des selben Blockes verwendet werden.
                Problematisch ist dies, weil die Reihenfolge, in der die
                Transaktionen in einen Block aufgenommen werden, nicht vom
                Nutzer bestimmt werden kann. Wie die Transaktionen innerhalb des
                Blockes strukturiert werden, hängt vom Miner ab. Dieses Problem
                ist auch als “Front-Running” bekannt.
                <br />
                <br />
                Durch die Abhängigkeit der Smart Contracts von Timestamps
                besteht außerdem das Risiko, dass diese von bösartigen Minern
                manipuliert werden.
              </h5>{" "}
              <div id="Margin-Bottom-2vh"></div>
              <div id="Margin-Bottom-2vh"></div>
              <img src={Smart_Contract_Risiken} id="NFRID_SM_IMG" />{" "}
              <div id="Margin-Bottom-2vh"></div>
              <h5 id="NFRID_SM_h5">
                Diese Punkte stellen nur eine Auswahl von Risiken dar, die durch
                den Einsatz von Smart Contracts entstehen können. Weitere
                Angriffspunkte ergeben sich durch bspw. die
                “Re-Entrancy-Verwundbarkeit” oder dem teilweise falsch
                konstruierten Umgang mit Exeptions auf Code-Ebene.
              </h5>
            </div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*KOnsttruktion */}
            <Mobile_white_einfach
              Text={NFRID_Konstruktions}
              Heading="Konstruktionsfehler"
            />
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Orakelabhängigkeit */}
            <div id="NFRID_SM_Wrapper">
              <h2 id="NFRID_SM_h2">Orakelabhängigkeit</h2>
              <h5 id="NFRID_SM_h5">
                {" "}
                Orakel sind eine entscheidene Komponente in der erfolgreichen
                Umsetzung von DeFi-Anwendungen. Für nahezu jede Applikation
                müssen Daten in das auszuführende Programm eingeführt werden.
                Diese Daten können je nach Use-Case verschieden sein. Häufig
                handelt es sich bspw. um Kursdaten verschiedener Assets.
                <br />
                <br />
                Zugeführt werden diese Daten über sogenannte Oracles. Diese
                bringen Daten aus verschiedenen Formaten in eine für einen Smart
                Contract verwertbare Darstellung und sollen die Kommunikation
                mit Schnittstellen außerhalb der Anwendung gewährleisten.
                <br />
                <br />
                Bei der Nutzung von externen Daten muss sichgestellt werden,
                dass die Quelle der Daten sowie der Kommunikationsweg nicht
                manipuliert wird. Sofern innerhalb einer Anwendung verschiedene
                Aktionen (bspw. die Auszahlung von Mitteln) an den Preis anderer
                Assets gekoppelt sind, muss die Integrität der Kursdaten
                jederzeit sichergestellt sein. Problematisch kann es ebenfalls
                sein, wenn sich auf wenige oder gar einzelne Oracle-Quellen
                verlassen wird. Diese sind deutlich anfälliger für
                Manipulationen (Single-Point-of-Failure).
              </h5>
              <div id="Margin-Bottom-2vh"></div>
              <div id="Margin-Bottom-2vh"></div>
              <img src={Orakelabhängigkeit} id="NFRID_SM_IMG" />{" "}
            </div>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*sINGLEpOINT */}{" "}
            <Mobile_white_einfach
              Heading="Single Point of Failure
            "
              Text={NRID_SPOF.join("\n")}
            />
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Regulatorische Risiken */}
            <Mobile_white_einfach
              Heading="Regulatorische Risiken"
              Text={NRID_rEGULATORISCH.join("\n")}
            />
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Weitere Risiken */}
            <Mobile_white_einfach
              Heading="Weitere Risken"
              Text="Die vorgestellte Liste an Risiken erhebt keinen Anspruch auf Vollständigkeit. Im Rahmen von DeFi Anwendungen kommen weitere Probleme zum Tragen. Dazu gehören bspw. Risiken in Hinblick auf die mangelnde Skalierungsfähigkeit vieler Netzwerke sowie die Finalität von Transaktionen in Blockchains. Ebenso risikoreich können Verschiebungen im Bereich der finanziellen Incentivierung der im Netzwerk beteiligten Personen sein. Zudem können systematische Risiken entstehen, die aus der Verknüpfung und teilweise Abhängigkeit von DeFi-Anwendungen untereinander resultieren. Ebenso muss davon ausgegangen werden, dass zu diesem frühen Zeitpunkt der DeFi-Entwicklung noch nicht alle Risiken bekannt sind."
            />
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>{" "}
            <div id="Margin-Bottom-2vh"></div>
            <div id="Margin-Bottom-2vh"></div>
            {/*Quellen */}
            <Mobile_white_einfach
              Heading="Quellen"
              Text={NRID_Quellen.join("\n")}
            />
            <MOBILE_FOOTER />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DEX;
