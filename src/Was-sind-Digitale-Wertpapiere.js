import FOOTER from "./components/navigation/Footer";
import "./Design/WasSindDigitaleWertpapiere.css";
import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";
import arrow from "./assets/images/arrow.png";
import Token_Klassen_Img from "./assets/images/Token_Klassen_Img.png";
import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
function WasSindDigitaleWertpapiere(props) {
  useEffect(() => {
    document.title = "Digitale Wertpapiere";
  }, []);

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
        <div id="WSDW_BG_Wrapper">
          {" "}
          <div id="WSDW_BG_Wrapper_White"></div>
          <div id="WSDW_BG_Wrapper_Content">
            <div id="WSDW_Top_Wrapper">
              <div id="WSDW_Top_Wrapper_Left">
                <h2 id="WSDW_Top_Wrapper_h2">Digitale Wertpapiere </h2>{" "}
                <h4 id="WSDW_h470">
                  In den letzten Jahren hat die Anwendung der
                  Blockchain-Technologie in unterschiedlichen Bereichen
                  zugenommen und dabei unter Beweis gestellt, dass diese
                  geeignet ist, um effizient und transparent Daten zu
                  transferieren. Neben vielen Anwendungsmöglichkeiten hat sich
                  insbesondere die Tokenisierung von Vermögenswerten als einer
                  der Anwendungsfälle mit dem höchsten Disruptionspotential
                  herausgestellt.
                  <br />
                  Durch die Tokenisierung entstehen sog. digitale Wertpapiere,
                  die sowohl Vermögenswerte als auch klassische Wertpapiere in
                  die digitale Welt bringen. Dabei entstehen durch das Verwenden
                  der Blockchain-Technologie Vorteile für InvestorInnen und
                  EmittentInnen.
                </h4>
              </div>
              <div id="WSDW_Top_Wrapper_Right">
                <div id="Div_Home_Top_Section_Layer_Form"></div>
                <HashLink to="#WasbedeutetTokenisierung">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">
                      Was bedeutet Tokenisierung
                    </h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
                <HashLink to="#Was_Sind">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">
                      Was sind digitale Wertpapiere ?
                    </h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
                <HashLink to="#WasVorteilebietetdieTokenisierung">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">
                      Was Vorteile bietet die <br />
                      Tokenisierung ?
                    </h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
                <HashLink to="#WiekönnendigitaleWertpapiereausgestaltetsein">
                  <div id="WSDW_Top_Row_Button">
                    <h3 id="WSDW_Top_Row_Button_h3">
                      Wie können digitale Wertpapiere ausgestaltet sein ?
                    </h3>

                    <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                      <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                    </div>
                  </div>
                </HashLink>
              </div>
            </div>
            <div id="WasbedeutetTokenisierung"></div>
            <div id="WSDW_WAS_Sind_Wrapper">
              <div id="WSDW_WAS_Sind_Inner">
                <div id="WSDW_WAS_Sind_Inner_Left">
                  <h3 id="WSDW_WAS_Sind_Inner_h3">
                    Was bedeutet Tokenisierung?
                  </h3>
                </div>
                <div id="WSDW_WAS_Sind_Inner_Right">
                  <h5 id="WSDW_WAS_Sind_Inner_h5_thic">
                    Unter Tokenisierung versteht man den digitalen
                    Verbriefungsprozess von materiellen oder immateriellen
                    Vermögenswerten auf einem dezentralen Transaktionsregister.
                    <br /> <br />
                  </h5>
                  <h5 id="WSDW_WAS_Sind_Inner_h5">
                    Ein Vermögenswert wird somit mit einem eindeutig
                    zuordenbaren digitalen Abbild (Token) auf einer Blockchain
                    verknüpft und entweder vollständig oder anteilig in beliebig
                    viele Token aufgeteilt. Dadurch können AnlegerInnen bereits
                    eine geringe Anzahl von Anteilen erwerben. Diese Token (im
                    Folgenden digitale Wertpapiere) können dann vom Inhaber
                    genutzt, besessen und übertragen werden. Intermediäre und
                    analoge Eigentumsnachweise verlieren damit an Bedeutung oder
                    werden nicht mehr benötigt.
                    <br /> <br />
                    Die Tokenisierung ermöglicht es somit Besitzverhältnisse an
                    physischen Vermögenswerten, wie z.B. Immobilien, Schiffen,
                    Wertpapieren, Rechten oder auch Kunstwerken digital
                    abzubilden und über die Blockchain digital zu verwalten bzw.
                    an jemand anderen zu übertragen.
                    <br /> <br />
                    Die Definition der Bafin lautet: „Tokenisierung: Dabei
                    handelt es sich um die digitalisierte Abbildung eines
                    (Vermögens-)Wertes inklusive der in diesem Wert enthaltenen
                    Rechte und Pflichten sowie dessen hierdurch ermöglichte
                    Übertragbarkeit.“ Branchen.
                  </h5>
                </div>
              </div>
            </div>{" "}
            <div id="WSDW_White_Wrapper">
              <div id="Was_Sind">
                <h3 id="WSDW_WAS_Sind_Inner_h3">
                  Was sind digitale <br />
                  Wertpapiere?
                </h3>
                <div id="Was_Sind_Right">
                  <h5 id="WSDW_WAS_Sind_Inner_h5_thic">
                    Digitale Wertpapiere – Digitale Abbilder von Vermögenswerten
                    <br />
                  </h5>{" "}
                  <h5 id="WSDW_WAS_Sind_Inner_h5">
                    Digitale Wertpapiere verleihen dem Inhaber Eigentumsrechte
                    an einem Vermögenswert oder bilden Wertpapiere ab. Damit
                    gehen bspw. Nutzungsrechte, Stimmrechte und Rechte an
                    künftigen Cashflows an die InhaberInnen über.
                    <br /> <br />
                    Technisch gesehen handelt es sich um Datenbank-Einträge
                    (meist auf einer Blockchain), die den Anteil eines
                    Vermögenswertes repräsentieren und als Besitznachweis
                    geführt werden können.
                    <br /> <br />
                    Der Begriff “digitale Wertpapiere” beinhaltet sowohl
                    vermögenswertbezogene Token als auch Token, die Wertpapiere,
                    wie Aktien, privates Beteiligungskapital und Anleihen
                    abbilden.
                    <br /> <br />
                    Bei vermögenswertbezogenen Token handelt es sich um Token,
                    die direkt durch einen Vermögenswert unterlegt sind. Diese
                    Token ermöglichen die Aufteilung von Vermögenswerten, so
                    dass AnlegerInnen in einen kleinen prozentualen Teil von
                    tokenisierten Vermögenswerten investieren können. Dadurch
                    wird es ermöglicht, dass AnlegerInnen bereits geringe
                    Beträge investiert können. Am Markt lassen sich bspw.
                    Immobilienprojekte beobachten, an denen bereits mit einem
                    Betrag von 50 Euro partizipiert werden kann.
                    <br /> <br />
                    Mit digitalen Wertpapieren können Vermögenswerte und ihr
                    wirtschaftlicher Wert virtuell, d. h. auf einer Blockchain,
                    dargestellt werden. Dies ermöglicht es, die
                    Eigentumsstrukturen dieser Vermögenswerte über ein
                    dezentrales Hauptbuch ohne eine zentralisierte dritte Partei
                    auf dem neuesten Stand zu halten.
                    <br />
                  </h5>
                </div>{" "}
              </div>
            </div>
            <div id="WasVorteilebietetdieTokenisierung"></div>
            <div id="WSDW_White_Wrapper">
              <div id="Tokenisierung_Vorteile_Inner">
                <h3 id="WSDW_WAS_Sind_Inner_h3">
                  Welche Vorteile bietet die Tokenisierung?
                </h3>

                <div id="Tokenisierung_Vorteile_Top">
                  <div id="Tokenisierung_Vorteile_Top_LEFT">
                    <div id="Tokenisierung_Vorteile_Top_LEFT_1">
                      <div id="WSDW_Security_Token_Vorteile_Box_top">
                        <h5 id="WSDW_WAS_Sind_Inner_h5_thic_om">
                          Kostenreduzierung <br />
                        </h5>{" "}
                        <div id="WSDW_Security_Token_Vorteile_Box_top_Corner">
                          <h5 id="WSDW_WAS_Sind_Inner_h5_thic_om">1</h5>
                        </div>
                      </div>

                      <div id="WSDW_Security_Token_Vorteile_Box_BOTTOM">
                        <h5 id="WSDW_WAS_Sind_Inner_h5">
                          Die Tokenisierung kann zu erheblichen
                          Effizienzsteigerungen führen, da die derzeit
                          erforderlichen Zwischenhändler und Verwahrer
                          wegfallen. Die zugrunde liegende Blockchain ermöglicht
                          beispielsweise die Automatisierung von Prozessen. Dies
                          beschleunigt bestimmte Schritte der
                          Transaktions-Wertschöpfungskette und kann zu
                          erheblichen Kosteneinsparungen führen.
                        </h5>
                      </div>
                    </div>
                    <div id="Tokenisierung_Vorteile_Top_LEFT_3">
                      <div id="WSDW_Security_Token_Vorteile_Box_top">
                        <h5 id="WSDW_WAS_Sind_Inner_h5_thic_om">
                          Zugänglichkeit <br />
                        </h5>{" "}
                        <div id="WSDW_Security_Token_Vorteile_Box_top_Corner">
                          <h5 id="WSDW_WAS_Sind_Inner_h5_thic_om">3</h5>
                        </div>
                      </div>

                      <div id="WSDW_Security_Token_Vorteile_Box_BOTTOM">
                        <h5 id="WSDW_WAS_Sind_Inner_h5">
                          Mit Hilfe der Tokenisierung erhöht sich die Anzahl der
                          Anlagemöglichkeiten - insbesondere für Vermögenswerte,
                          die auf den traditionellen Kapitalmärkten nicht zu
                          finden sind. Dies bedeutet, dass mehr (Klein-)Anleger
                          Zugang zu Anlageklassen erhalten, die sonst außerhalb
                          ihrer finanziellen Möglichkeiten liegen würden, wie z.
                          B. Oldtimer, Kunstwerke und große Immobilien- oder
                          Infrastrukturprojekte.
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div id="Tokenisierung_Vorteile_Top_Right">
                    <div id="Tokenisierung_Vorteile_Top_2">
                      <div id="WSDW_Security_Token_Vorteile_Box_top">
                        <h5 id="WSDW_WAS_Sind_Inner_h5_thic_om">
                          Handelbarkeit und <br />
                          Abwicklungsgeschwindigkeit
                        </h5>{" "}
                        <div id="WSDW_Security_Token_Vorteile_Box_top_Corner">
                          <h5 id="WSDW_WAS_Sind_Inner_h5_thic_om">2</h5>
                        </div>
                      </div>

                      <div id="WSDW_Security_Token_Vorteile_Box_BOTTOM_BIG">
                        <h5 id="WSDW_WAS_Sind_Inner_h5">
                          Die Tokenisierung und der nachgelagerte Handel der
                          digitalen Assets führt zu einer Verschlankung der
                          Prozesse und der Eliminierung von zentralen Instanzen.
                          <br />
                          <br />
                          Dadurch können mit Hilfe von automatisierten Systemen
                          höhere Geschwindigkeiten zur Abwicklung von
                          Asset-Deals ermöglicht werden.
                          <br />
                          <br />
                          Anders als auf klassischen Börsen können digitale
                          Vermögenswerte, die auf einer Blockchain abgebildet
                          werden, rund um die Uhr gehandelt werden. Dies ist ein
                          wesentlicher Unterschied zu dem klassischen
                          Wertpapierhandel an einer Börse.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="Tokenisierung_Vorteile_Bottom">
                  <div id="Tokenisierung_Vorteile_Top_LEFT_4">
                    <div id="WSDW_Security_Token_Vorteile_Box_top">
                      <h5 id="WSDW_WAS_Sind_Inner_h5_thic_om">
                        Erhöhte Transparenz
                      </h5>{" "}
                      <div id="WSDW_Security_Token_Vorteile_Box_top_Corner">
                        <h5 id="WSDW_WAS_Sind_Inner_h5_thic_om">4</h5>
                      </div>
                    </div>

                    <div id="WSDW_Security_Token_Vorteile_Box_BOTTOM">
                      <h5 id="WSDW_WAS_Sind_Inner_h5">
                        Der Tokenisierungsprozess beruht auf der Erfassung
                        erweiterter Informationen und der gemeinsamen Nutzung
                        von Transaktionsdaten (in Bezug auf Emittent, Anleger,
                        Art des Vermögenswerts usw.), die automatisiert auf dem
                        Blockchain-Transaktionsnetzwerk erfasst werden. Dies
                        eröffnet die Möglichkeit auf eine transparente und
                        unveränderbare Transaktionshistorie zuzugreifen.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="WiekönnendigitaleWertpapiereausgestaltetsein"></div>
            <div id="WSDW_WAS_Sind_Wrapper">
              <div id="WSDW_WAS_Sind_Inner">
                <div id="WSDW_WAS_Sind_Inner_Left">
                  <h3 id="WSDW_WAS_Sind_Inner_h3">
                    Wie können digitale Wertpapiere ausgestaltet sein?
                  </h3>
                </div>
                <div id="WSDW_WAS_Sind_Inner_Right">
                  <h5 id="WSDW_WAS_Sind_Inner_h5">
                    Digitale Wertpapiere können unterschiedliche Ausprägungen
                    aufweisen. Sowohl der Vermögenswert, der digital abgebildet
                    wird, als auch die mit diesem verbundenen Rechten und
                    Pflichten variieren stark.
                    <br />
                    <br />
                    Je nach Ausgestaltung werden digitale Wertpapiere von
                    Aufsichtsbehörden wie traditionelle Wertpapiere behandelt.
                    In diesem Fall müssen regulatorische Voraussetzungen
                    (Erstellung eines entsprechenden Wertpapierprospekts sowie
                    der Zustimmung der Bafin) erfüllt werden, bevor eine
                    Emission begonnen werden kann.
                  </h5>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
        <FOOTER />{" "}
      </div>{" "}
      <div id="Mobile_Wrapper">
        <div id="Mobile_Background_Grey">
          <div id="Mobile_Background_White_Overlay"></div>
          <div id="Mobile_WASDW_Content">
            {" "}
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
            <div id="Mobile_WASDW_Content_Top_Sec">
              <h2 id="Mobile_Home_Top_Sec_H2">Was sind digitale</h2>
              <h2 id="Mobile_Home_Top_Sec_H2_yellow"> Wertpapiere ?</h2>

              <h5 id="Mobile_Home_Top_Sec_H5">
                In den letzten Jahren hat die Anwendung der
                Blockchain-Technologie in unterschiedlichen Bereichen zugenommen
                und dabei unter Beweis gestellt, dass diese geeignet ist, um
                effizient und transparent Daten zu transferieren. Neben vielen
                Anwendungsmöglichkeiten hat sich insbesondere die Tokenisierung
                von Vermögenswerten als einer der Anwendungsfälle mit dem
                höchsten Disruptionspotential herausgestellt.
                <br></br>
                <br></br>
                Durch die Tokenisierung entstehen sog. digitale Wertpapiere, die
                sowohl Vermögenswerte als auch klassische Wertpapiere in die
                digitale Welt bringen. Dabei entstehen durch das Verwenden der
                Blockchain-Technologie Vorteile für InvestorInnen und
                EmittentInnen.
              </h5>
            </div>
            <div id="Mobile_margn5_top"></div>
            <div id="Mobile_Padding_Wrapper">
              <div id="Mobile_White_Wrapper_Column">
                <h3 id="Mobile_White_Wrapper_Column_h3">
                  Was bedeutet Tokenisierung?
                </h3>
                <h4 id="Mobile_White_Wrapper_Column_h4">
                  Unter Tokenisierung versteht man den digitalen
                  Verbriefungsprozess von materiellen oder immateriellen
                  Vermögenswerten auf einem dezentralen Transaktionsregister.
                </h4>
                <h5 id="Mobile_White_Wrapper_Column_h5">
                  Ein Vermögenswert wird somit mit einem eindeutig zuordenbaren
                  digitalen Abbild (Token) auf einer Blockchain verknüpft und
                  entweder vollständig oder anteilig in beliebig viele Token
                  aufgeteilt. Dadurch können AnlegerInnen bereits eine geringe
                  Anzahl von Anteilen erwerben. Diese Token (im Folgenden
                  digitale Wertpapiere) können dann vom Inhaber genutzt,
                  besessen und übertragen werden. Intermediäre und analoge
                  Eigentumsnachweise verlieren damit an Bedeutung oder werden
                  nicht mehr benötigt.
                  <br></br>
                  Die Tokenisierung ermöglicht es somit Besitzverhältnisse an
                  physischen Vermögenswerten, wie z.B. Immobilien, Schiffen,
                  Wertpapieren, Rechten oder auch Kunstwerken digital abzubilden
                  und über die Blockchain digital zu verwalten bzw. an jemand
                  anderen zu übertragen.
                  <br></br>
                  Die Definition der Bafin lautet: „Tokenisierung: Dabei handelt
                  es sich um die digitalisierte Abbildung eines
                  (Vermögens-)Wertes inklusive der in diesem Wert enthaltenen
                  Rechte und Pflichten sowie dessen hierdurch ermöglichte
                  Übertragbarkeit.“ Branchen.
                </h5>
              </div>
            </div>
            <div id="Mobile_margn5_top"></div>
            <div id="Mobile_Padding_Wrapper">
              <div id="Mobile_White_Wrapper_Column">
                <h3 id="Mobile_White_Wrapper_Column_h3">
                  Was sind digitale Wertpapiere?{" "}
                </h3>
                <h4 id="Mobile_White_Wrapper_Column_h4">
                  Digitale Wertpapiere – Digitale Abbilder von Vermögenswerten
                </h4>
                <h5 id="Mobile_White_Wrapper_Column_h5">
                  Digitale Wertpapiere verleihen dem Inhaber Eigentumsrechte an
                  einem Vermögenswert oder bilden Wertpapiere ab. Damit gehen
                  bspw. Nutzungsrechte, Stimmrechte und Rechte an künftigen
                  Cashflows an die InhaberInnen über.
                  <br></br>
                  Technisch gesehen handelt es sich um Datenbank-Einträge (meist
                  auf einer Blockchain), die den Anteil eines Vermögenswertes
                  repräsentieren und als Besitznachweis geführt werden können.
                  <br></br>
                  Der Begriff “digitale Wertpapiere” beinhaltet sowohl
                  vermögenswertbezogene Token als auch Token, die Wertpapiere,
                  wie Aktien, privates Beteiligungskapital und Anleihen
                  abbilden.
                  <br></br>
                  Bei vermögenswertbezogenen Token handelt es sich um Token, die
                  direkt durch einen Vermögenswert unterlegt sind. Diese Token
                  ermöglichen die Aufteilung von Vermögenswerten, so dass
                  AnlegerInnen in einen kleinen prozentualen Teil von
                  tokenisierten Vermögenswerten investieren können. Dadurch wird
                  es ermöglicht, dass AnlegerInnen bereits geringe Beträge
                  investiert können. Am Markt lassen sich bspw.
                  Immobilienprojekte beobachten, an denen bereits mit einem
                  Betrag von 50 Euro partizipiert werden kann.
                  <br></br>
                  Mit digitalen Wertpapieren können Vermögenswerte und ihr
                  wirtschaftlicher Wert virtuell, d. h. auf einer Blockchain,
                  dargestellt werden. Dies ermöglicht es, die
                  Eigentumsstrukturen dieser Vermögenswerte über ein dezentrales
                  Hauptbuch ohne eine zentralisierte dritte Partei auf dem
                  neuesten Stand zu halten.
                </h5>
              </div>
            </div>
            <div id="Mobile_margn5_top"></div>
            <div id="Mobile_Padding_Wrapper">
              <div id="Mobile_White_Wrapper_Column">
                <h3 id="Mobile_White_Wrapper_Column_h3">
                  Welche Vorteile bietet die Tokenisierung?{" "}
                </h3>
                <h4 id="Mobile_White_Wrapper_Column_h4">
                  1. Kostenreduzierung{" "}
                </h4>
                <h5 id="Mobile_White_Wrapper_Column_h5">
                  Die Tokenisierung kann zu erheblichen Effizienzsteigerungen
                  führen, da die derzeit erforderlichen Zwischenhändler und
                  Verwahrer wegfallen. Die zugrunde liegende Blockchain
                  ermöglicht beispielsweise die Automatisierung von Prozessen.
                  Dies beschleunigt bestimmte Schritte der
                  Transaktions-Wertschöpfungskette und kann zu erheblichen
                  Kosteneinsparungen führen.
                </h5>

                <h4 id="Mobile_White_Wrapper_Column_h4">
                  2. Handelbarkeit und Abwicklungsgeschwindigkeit{" "}
                </h4>
                <h5 id="Mobile_White_Wrapper_Column_h5">
                  Die Tokenisierung und der nachgelagerte Handel der digitalen
                  Assets führt zu einer Verschlankung der Prozesse und der
                  Eliminierung von zentralen Instanzen.
                  <br></br>
                  Dadurch können mit Hilfe von automatisierten Systemen höhere
                  Geschwindigkeiten zur Abwicklung von Asset-Deals ermöglicht
                  werden.
                  <br></br>
                  Anders als auf klassischen Börsen können digitale
                  Vermögenswerte, die auf einer Blockchain abgebildet werden,
                  rund um die Uhr gehandelt werden. Dies ist ein wesentlicher
                  Unterschied zu dem klassischen Wertpapierhandel an einer
                  Börse.
                </h5>

                <h4 id="Mobile_White_Wrapper_Column_h4">3. Zugänglichkeit </h4>
                <h5 id="Mobile_White_Wrapper_Column_h5">
                  Mit Hilfe der Tokenisierung erhöht sich die Anzahl der
                  Anlagemöglichkeiten - insbesondere für Vermögenswerte, die auf
                  den traditionellen Kapitalmärkten nicht zu finden sind. Dies
                  bedeutet, dass mehr (Klein-)Anleger Zugang zu Anlageklassen
                  erhalten, die sonst außerhalb ihrer finanziellen Möglichkeiten
                  liegen würden, wie z. B. Oldtimer, Kunstwerke und große
                  Immobilien- oder Infrastrukturprojekte.
                </h5>

                <h4 id="Mobile_White_Wrapper_Column_h4">
                  4. Erhöhte Transparenz{" "}
                </h4>
                <h5 id="Mobile_White_Wrapper_Column_h5">
                  Der Tokenisierungsprozess beruht auf der Erfassung erweiterter
                  Informationen und der gemeinsamen Nutzung von
                  Transaktionsdaten (in Bezug auf Emittent, Anleger, Art des
                  Vermögenswerts usw.), die automatisiert auf dem
                  Blockchain-Transaktionsnetzwerk erfasst werden. Dies eröffnet
                  die Möglichkeit auf eine transparente und unveränderbare
                  Transaktionshistorie zuzugreifen.
                </h5>
              </div>
            </div>
            <div id="Mobile_margn5_top"></div>
            <div id="Mobile_Padding_Wrapper">
              <div id="Mobile_White_Wrapper_Column">
                <h3 id="Mobile_White_Wrapper_Column_h3">
                  Wie können digitale Wertpapiere ausgestaltet sein?
                </h3>

                <h5 id="Mobile_White_Wrapper_Column_h5">
                  Digitale Wertpapiere können unterschiedliche Ausprägungen
                  aufweisen. Sowohl der Vermögenswert, der digital abgebildet
                  wird, als auch die mit diesem verbundenen Rechten und
                  Pflichten variieren stark.
                  <br></br>
                  Je nach Ausgestaltung werden digitale Wertpapiere von
                  Aufsichtsbehörden wie traditionelle Wertpapiere behandelt. In
                  diesem Fall müssen regulatorische Voraussetzungen (Erstellung
                  eines entsprechenden Wertpapierprospekts sowie der Zustimmung
                  der Bafin) erfüllt werden, bevor eine Emission begonnen werden
                  kann.
                </h5>
              </div>
            </div>
          </div>{" "}
          <MOBILE_FOOTER />
        </div>
      </div>
    </div>
  );
}

export default WasSindDigitaleWertpapiere;
