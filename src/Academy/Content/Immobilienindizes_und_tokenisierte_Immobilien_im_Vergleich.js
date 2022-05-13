import "./Design/Immobilienindizes und tokenisierte Immobilien im Vergleich.css";
import FOOTER from "../../components/navigation/Footer";
import TOP_NAV_BAR from "../../components/navigation/Top_Nav_Bar";
import MOBILE_FOOTER from "../../MobileComponents/Mobile_Footer";
import { useState, useEffect } from "react";
import arrow from "../../assets/images/arrow.png";
import Zweier_Spalte_Big from "../Components/Zweier_Spalte_Big";

import MOBILE_MENUE from "../../MobileComponents/Mobile_menue";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Weiss_einfach_Col_1h from "../Components/Weiss_einfach_Col_1h";
import Smart_Contract_Risiken from "../../assets/images/Smart_Contract_Risiken.png";
import Orakelabhängigkeit from "../../assets/images/Orakelabhängigkeit.png";
import { HashLink } from "react-router-hash-link";

import Mobile_white_einfach from "../Components/Mobile_white_einfach.js";

function DEX(props) {
  const Derivate_Intro = [
    "Der Begriff „Derivat“ entstammt dem lateinischen Wort “derivare“, welches sich als “ableiten” übersetzen lässt. Ein Derivat beschreibt also ein abgeleitetes Finanzprodukt, welches wie folgt erklärt werden kann:",
    " Die Entwicklung eines Derivatepreises ist stets an die Entwicklung eines anderen Finanzproduktes, auch Basiswert oder Underlying genannt, gekoppelt.",
    "Der Basiswert kann dabei ein anderes Wertpapier, wie eine Aktie oder Anleihe, ein Rohstoff, eine Währung o.Ä. sein. Ein Derivat beschreibt somit eine indirekte Investition, dessen Bewertung in weiten Teilen von dem zugrunde liegenden Basisprodukt abhängt.",
  ];
  const Immobilienindex_Intro = [
    "Auch Indizes können die Basis eines Derivates darstellen. In diesem Artikel wird fortlaufend auf Immobilienindizes, wie z.B. einen Immobilienpreisindex, Bezug genommen. Bei einem Immobilienindex handelt es sich um einen Index, welcher die Preis- und Wertänderungen am Immobilienmarkt bzw. in dessen Segmenten angibt. Demnach bildet ein Immobilienindex ab, wie sich die Preise oder Werte am Immobilienmarkt innerhalb eines bestimmten Zeitraums verändert haben.",
    "Unterschieden werden kann zwischen 2 verschiedenen Arten von Immobilienindizes: ",
  ];

  const Immobilien_Dig_Wert = [
    "Digitale Wertpapiere und deren Vorteile wurden bereits in einem anderen Artikel der Academy erklärt, welcher hier aufgegriffen wird. Die Tokenisierung ermöglicht den digitalen Verbriefungsprozess von materiellen oder immateriellen Vermögenswerten auf einem dezentralen Transaktionsregister. Die Definition der Bafin lautet: „Tokenisierung: Dabei handelt es sich um die digitalisierte Abbildung eines (Vermögens-)Wertes inklusive der in diesem Wert enthaltenen Rechte und Pflichten sowie dessen hierdurch ermöglichte Übertragbarkeit.“",
    ,
    "",
    "Bezogen auf Immobilien ermöglicht die Tokenisierung also die Digitalisierung einer Immobilie mit einem eindeutig zuordbaren digitalen Abbild (Token) auf einer Blockchain. Die Immobilie kann entweder vollständig oder anteilig in beliebig viele Token aufgeteilt werden. Die Tokenisierung ermöglicht es also Besitzverhältnisse an physischen Vermögenswerten, wie zB. Immobilien digital abzubilden und über die Blockchain digital zu verwalten bzw. an jemand anderen zu übertragen. Wichtig ist also zu verstehen, dass es sich bei einem digitalen Wertpapier um den tatsächlichen Besitznachweis eines Vermögenswertes handelt. Investoren haben also den Vorteil, dass der Erwerb digitaler Vermögenswerte mit bestimmten Rechten und Pflichten einher geht, wie z.B. der Beteiligung an Mieteinnahmen und der Preisentwicklung der Immobilie.",
    ,
    "",
    "Demnach verbleiben dem Investor die Vorteile einer herkömmlichen Immobilieninvestition, sowie die durch die Tokenisierung entstehenden Partizipationsmöglichkeiten. Somit öffnet sich Privatinvestoren ein Markt, welcher vielen bisher vorenthalten war.",
  ];
  const Gemeinsamkeiten_tokWP_ImmoInd = [
    "Neben dem weitgehend  vergleichbaren Vorgehen innerhalb des Investitionsprozesses, haben Immobilienindizes und digitalen Wertpapieren weitere Gemeinsamkeiten. Unter anderem existiert für beide Finanzprodukte ein Sekundärmarkt, auf dem die Produkte in der Regel direkt weiter veräußert werden können. Ebenfalls kann bei in Deutschland handelbaren Vehikeln eine weitgehende Regulierung der BaFin oder vergleichbarer Institutionen vermutet werden. ",
  ];
  const Unterschiede_tokWP_ImmoInd = [
    "Direktinvestition:",
    "",
    "Immobilienindex: Dieser spiegelt eine Auswahl von Basiswerten wider, welcher von dem jeweiligen Emittenten des Index festgelegt wird.",
    "Tokenisierte Immobilien: Diese bieten die Möglichkeit, in Abhängigkeit der jeweiligen Präferenzen, gezielt in eine geeignete Immobilie zu investieren.",
    "",
    "Individuelle Wahl des Investitionsobjektes:",
    "",
    "Immobilienindex: Dieser spiegelt eine Auswahl von Basiswerten wider, welcher von dem jeweiligen Emittenten des Index festgelegt wird.",
    "Tokenisierte Immobilien: Diese bieten die Möglichkeit, in Abhängigkeit der jeweiligen Präferenzen, gezielt in eine geeignete Immobilie zu investieren.",
    "",
    "Frühzeitige Partizipationsmöglichkeiten:",
    "",
    "Immobilienindex: Bei den Immobilien, welche den Basiswert des jeweiligen Index bilden, handelt es sich in der Regel um Bestandsimmobilien. Bestandsimmobilien beschreiben Immobilien, bei denen alle Bautätigkeiten abgeschlossen sind (und welche bereits genutzt bzw. bewohnt werden).",

    "Tokenisierte Immobilien: Bei tokenisierten Immobilien besteht neben der Investition in Bestandsimmobilien auch die Möglichkeit in Projekte zu investieren, welche zukünftig durchgeführt werden sollen. Demnach besteht für einen Investor die Möglichkeit bereits die Entwicklung eines Bauprojekes mitzufinanzieren und an der ggf. entstehenden zusätzlichen Wertentwicklung teilzuhaben. ",
  ];

  const Quellen_tokWP_ImmoInd = [
    "https://deutsche-boerse.com/dbg-de/unternehmen/wissen/deutsche-boerse-aktuell/derivate-1574000",
    "",
    "https://chainvestcapital.com/Academy/Was-sind-digitale-Wertpapiere#WasbedeutetTokenisierung",
    "",
    "https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Fachartikel/2019/fa_bj_1904_Tokenisierung.html",
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
        <div id="Desktop_Academy_Warpper">
          <div id="WSDW_Top_Wrapper">
            <div id="WSDW_Top_Wrapper_Left">
              <h2 id="WSDW_Top_Wrapper_h2">
                Immobilienindizes und tokenisierte Immobilien im{" "}
              </h2>{" "}
              <h1 id="WSDW_Top_Wrapper_h2_Yellow">Vergleich</h1>
              <h4 id="WSDW_h470">
                Eine Investition am Immobilienmarkt ist aus vielerlei Gründen
                attraktiv, allerdings bieten die klassichen Investitionsvehikel
                wie Derivate einige Probleme. Digitale Wertpapiere und
                insbesondere tokenisierte Immobilien, bieten eine neue Art der
                Investition in den Immobiliensektor und scheinen in einigen
                Aspekten revolutionäre Vorteile zu bieten.
              </h4>
            </div>
            <div id="WSDW_Top_Wrapper_Right">
              <div id="Div_Home_Top_Section_Layer_Form"></div>
              <HashLink to="#Derivate">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">Derivate</h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>
              <HashLink to="#Immobilienindizes">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">Immobilienindizes</h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>
              <HashLink to="#TokenisierteImmobilien">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">Tokenisierte Immobilien</h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>

              <HashLink to="#Gemeinsamkeiten">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">Gemeinsamkeiten </h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>

              <HashLink to="#Unterschiede">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">Unterschiede </h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>
            </div>
          </div>
          <div id="Derivate"></div>
          <div id="Margin-Bottom-10vh"></div>
          <Weiss_einfach_Col_1h
            Heading="Was wird unter Derivaten verstanden ? 
            "
            Text={Derivate_Intro.join("\n")}
          />{" "}
          <div id="Immobilienindizes"></div>
          <div id="Margin-Bottom-10vh"></div>
          <Weiss_einfach_Col_1h
            Heading="Was hat ein Immobilienindex damit zu tun ? 

            "
            Text={Immobilienindex_Intro.join("\n")}
          />{" "}
          <div id="Margin-Bottom-10vh"></div>
          <Zweier_Spalte_Big
            Heading_L="Transaktionsbasierte Indizes"
            Text_L="Transaktionsbasierte Indizes werden auf Grundlage von tatsächlich erfolgten Transaktionen mit definierten Kaufpreisen ermittelt.
            Es besteht jedoch das Problem, dass die Kaufpreise von Immobilien in Deutschland in der Regel nicht öffentlich einsehbar sind. 
            Immobilienindizes können also nur von Verkäufern selbst oder Verbänden der Immobilienwirtschaft ermittelt werden. Die Grundstückspreise werden allerdings
            an die jeweiligen Gutachterausschüsse gemeldet und können zur Kalkulation herangezogen werden. 
            
"
            Heading_R="Bewertungsbasierte Indizes "
            Text_R="Bei bewertungsbasierten Indizes werden die Werte von Bestandsimmobilien analog zu der Bewertung von Wertgutachten ermittelt.
            Der Treiber der Wertveränderung ist hier primär die Veränderung der Mieten. Im Gegensatz zur Bewertungsmethode von transaktionsbasierten Indizes wird ein Vorteil darin gesehen, dass die Berechnung mit Hilfe von Mieten an Stelle von Kaufpreisen weniger Einzeleffekte und somit weniger Verzerrungen nach sich zieht. 
            Dennoch ist die Bewertung einer Vielzahl von Immobilien aufwendig und die Genauigkeit gering. 
            "
          />{" "}
          <div id="Margin-Bottom-2vh"></div>
          <div id="WSDW_White_Wrapper">
            <div id="Was_Sind">
              <h5 id="WSDW_WAS_Sind_Inner_h5_thic">
                Systematische Verzerrungen können somit in beiden Fällen nicht
                vollständig ausgeschlossen werden und die richtige Bewertung ist
                aufgrund der simplifizieren Ansätze im Rahmen der komplexen
                Bewertung meist nicht zu gewährleisten. Dies wird insbesondere
                durch starke regionale Gefälle innerhalb der Bewertung
                verstärkt.
                <br />
              </h5>{" "}
            </div>
          </div>
          <div id="Margin-Bottom-10vh"></div>
          <div id="TokenisierteImmobilien"></div>
          <div id="Immobilien in Form von digitalen Wertpapieren"></div>
          <Weiss_einfach_Col_1h
            Heading="Immobilien in Form von digitalen Wertpapieren


            "
            Text={Immobilien_Dig_Wert.join("\n")}
          />{" "}
          <div id="Gemeinsamkeiten"></div>
          <div id="Margin-Bottom-10vh"></div>
          <Weiss_einfach_Col_1h
            Heading="Gemeinsamkeiten 

            "
            Text={Gemeinsamkeiten_tokWP_ImmoInd.join("\n")}
          />{" "}
          <div id="Unterschiede"></div>
          <div id="Margin-Bottom-10vh"></div>
          <div id="WSDW_White_Wrapper">
            <h2 id="Weiss_einfach_Col_1h_Heading">Unterschiede</h2>
            <h5 id="WSDW_WAS_Sind_Inner_h5_thic">Direktinvestition:</h5>{" "}
            <h4 id="Weiss_einfach_Col_1h_Text">
              <strong> Immobilienindex: </strong> Dieser spiegelt eine Auswahl
              von Basiswerten wider, welcher von dem jeweiligen Emittenten des
              Index festgelegt wird.<br></br> <br></br>
              <strong>Tokenisierte Immobilien: </strong>
              Diese bieten die Möglichkeit, in Abhängigkeit der jeweiligen
              Präferenzen, gezielt in eine geeignete Immobilie zu investieren.
            </h4>{" "}
            <br></br>
            <h5 id="WSDW_WAS_Sind_Inner_h5_thic">
              Individuelle Wahl des Investitionsobjektes:
            </h5>{" "}
            <h4 id="Weiss_einfach_Col_1h_Text">
              <strong> Immobilienindex:</strong> Dieser spiegelt eine Auswahl
              von Basiswerten wider, welcher von dem jeweiligen Emittenten des
              Index festgelegt wird. <br></br>
              <br></br>
              <strong>Tokenisierte Immobilien:</strong> Diese bieten die
              Möglichkeit, in Abhängigkeit der jeweiligen Präferenzen, gezielt
              in eine geeignete Immobilie zu investieren.
            </h4>{" "}
            <br></br>
            <h5 id="WSDW_WAS_Sind_Inner_h5_thic">
              Frühzeitige Partizipationsmöglichkeiten:
            </h5>{" "}
            <h4 id="Weiss_einfach_Col_1h_Text">
              <strong>Immobilienindex: </strong> Bei den Immobilien, welche den
              Basiswert des jeweiligen Index bilden, handelt es sich in der
              Regel um Bestandsimmobilien. Bestandsimmobilien beschreiben
              Immobilien, bei denen alle Bautätigkeiten abgeschlossen sind (und
              welche bereits genutzt bzw. bewohnt werden).<br></br>
              <br></br> <strong>Tokenisierte Immobilien: </strong> Bei
              tokenisierten Immobilien besteht neben der Investition in
              Bestandsimmobilien auch die Möglichkeit in Projekte zu
              investieren, welche zukünftig durchgeführt werden sollen. Demnach
              besteht für einen Investor die Möglichkeit bereits die Entwicklung
              eines Bauprojekes mitzufinanzieren und an der ggf. entstehenden
              zusätzlichen Wertentwicklung teilzuhaben.
            </h4>
          </div>
          <div id="Margin-Bottom-10vh"></div>
          <Weiss_einfach_Col_1h
            Heading="Quellen 

            "
            Text={Quellen_tokWP_ImmoInd.join("\n")}
          />{" "}
        </div>{" "}
        <FOOTER />{" "}
      </div>

      <div id="Mobile_Wrapper">
        <div id="Mobile_Academy_Wrapper">
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
          <div id="Mobile_Content_Top_Section">
            <h2 id="Mobile_Content_Top_Section_h2">
              Immobilienindizes und tokenisierte Immobilien im Vergleich
            </h2>
            <div id="Margin-Bottom-2vh"></div>
            <div id="Mobile_Content_Top_Section_yellow_lane"></div>

            <h2 id="Mobile_Content_Top_Section_h2_yellow"></h2>
            <h5 id="Mobile_Content_Top_Section_h5">
              Eine Investition am Immobilienmarkt ist aus vielerlei Gründen
              attraktiv, allerdings bieten die klassichen Investitionsvehikel
              wie Derivate einige Probleme. Digitale Wertpapiere und
              insbesondere tokenisierte Immobilien, bieten eine neue Art der
              Investition in den Immobiliensektor und scheinen in einigen
              Aspekten revolutionäre Vorteile zu bieten.
            </h5>
          </div>
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Heading="Was wird unter Derivaten verstanden ? 
            "
            Text={Derivate_Intro.join("\n")}
          />{" "}
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Heading="Was hat ein Immobilienindex damit zu tun ? 

            "
            Text={Immobilienindex_Intro.join("\n")}
          />{" "}
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Text="Transaktionsbasierte Indizes werden auf Grundlage von tatsächlich erfolgten Transaktionen mit definierten Kaufpreisen ermittelt.
            Es besteht jedoch das Problem, dass die Kaufpreise von Immobilien in Deutschland in der Regel nicht öffentlich einsehbar sind. 
            Immobilienindizes können also nur von Verkäufern selbst oder Verbänden der Immobilienwirtschaft ermittelt werden. Die Grundstückspreise werden allerdings
            an die jeweiligen Gutachterausschüsse gemeldet und können zur Kalkulation herangezogen werden. 
            
"
            Heading="Transaktionsbasierte Indizes"
          />{" "}
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Heading="Bewertungsbasierte Indizes "
            Text="Bei bewertungsbasierten Indizes werden die Werte von Bestandsimmobilien analog zu der Bewertung von Wertgutachten ermittelt.
            Der Treiber der Wertveränderung ist hier primär die Veränderung der Mieten. Im Gegensatz zur Bewertungsmethode von transaktionsbasierten Indizes wird ein Vorteil darin gesehen, dass die Berechnung mit Hilfe von Mieten an Stelle von Kaufpreisen weniger Einzeleffekte und somit weniger Verzerrungen nach sich zieht. 
            Dennoch ist die Bewertung einer Vielzahl von Immobilien aufwendig und die Genauigkeit der Ermittlung der Werte ist oftmals gering. 
            "
          />
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Text="Systematische Verzerrungen können somit in beiden Fällen nicht vollständig ausgeschlossen werden und die richtige Bewertung ist aufgrund der simplifizieren Ansätze im Rahmen der komplexen Bewertung meist nicht zu gewährleisten. Dies wird insbesondere durch starke regionale Gefälle innerhalb der Bewertung verstärkt. 
"
          />
          <div id="Margin-Bottom-2vh"></div>
          {/*Top */}
          <Mobile_white_einfach
            Heading="Immobilien in Form von digitalen Wertpapieren


             "
            Text={Immobilien_Dig_Wert.join("\n")}
          />{" "}
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Heading="Gemeinsamkeiten 

             "
            Text={Gemeinsamkeiten_tokWP_ImmoInd.join("\n")}
          />
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Heading="Unterschiede 

             "
            Text={Unterschiede_tokWP_ImmoInd.join("\n")}
          />
          <Mobile_white_einfach
            Heading="Quellen 

             "
            Text={Quellen_tokWP_ImmoInd.join("\n")}
          />
          <div id="Margin-Bottom-2vh"></div>
          <MOBILE_FOOTER />
        </div>
      </div>
    </div>
  );
}

export default DEX;
