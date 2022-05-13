import "./Design/Metaverse.css";
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
import Metaverse_Ev_Internet from "../../assets/images/Metaverse_Ev_Internet.png";
import Decentraland from "../../assets/images/Decentraland.png";
import Meta from "../../assets/images/Meta.png";
import Sandbox from "../../assets/images/Sandbox.png";
import LunaLabs from "../../assets/images/LunaLabs.png";

import Mobile_white_einfach from "../Components/Mobile_white_einfach.js";

function DEX(props) {
  const Metaverse_Interoperabilität = [
    "Die Notwendigkeit der Kommunikation verschiedener Netzwerke wird von vielen Akteuren als ein entscheidendes Kriterium wahrgenommen:",
    "",
    "“In the Metaverse, users are meant to own their digital identities, complete with data, history, and assets to use anywhere. That would be unlike today's Internet, where your customers and employees can have an identity unique to your company, a specific platform, or a specific application” – PWC",
    "",
    "Um ein angemessenes Benutzererlebnis bieten zu können, müssen verschiedene Netzwerke also miteinander kommunizieren und Daten barrierefrei übertragen werden können. Cross-Chain-Lösungen, wie Wormhole, bieten zwar schon heute die Möglichkeit Token auf eine nicht native Blockchain zu transferieren, kommen jedoch mit einigen Sicherheitslücken daher. Multi-Chan-Lösungen, wie Quant Network, wirken zwar vielversprechend, bieten nach heutigem Stand jedoch keine finale Lösung, welche ein nahtloses Zusammenspiel diverser Netzwerke ermöglichen könnte. Demnach ist derzeit noch unklar, wie das Problem der Interoperabilität langfristig gelöst werden könnte.",
  ];
  const Metaverse_Risiken = [
    "Wie bei jeder neuen technologischen Entwicklung gibt es auch im Bereich des Metaverse  Risiken, sowie ungelöste Fragestellungen.",
    "",
    "“metaverse is evolving to become a new, three-dimensional digital world, unbound by geography and currently without clear rules and regulations.” - PWC",
    "",
    "Eine dreidimensionale digitale Welt, mit digitalen Vermögenswerten und der Macht Teile bisheriger Kommunikationswege zu ersetzen, birgt bspw. durch die wei­test­ge­hend noch ausstehende Regulierung Risiken. Ohne eine klare Jurisdiktion bietet das Metaverse eine große Angriffsfläche für Hackerangriffe, Verletzungen der Privatsphäre sowie verschiedener Formen des Datenmissbrauchs. Entitäten, welche derzeit an der Konzeption des Metaverse arbeiten, streben danach Risikofaktoren zu eliminieren und auftretende Trade-Offs zu lösen.",
  ];

  const Metaverse_Fragestellungen = [
    "Durch das noch frühe Stadium der Entwicklung im Bereich des Metaverse sind viele Fragen rund um die zukünftige Gestaltung noch ungeklärt. Dazu gehören bspw. Fragestellungen rund um die Anonymität von Nutzern und der Transparenz von Inhalten innerhalb des Netzwerks: Bewegen sich die Nutzer anonym, pseudo-Anonym, oder doch vollkommen transparent in dieser neuen Welt?",

    "Weitere offene Punkte ergeben sich in der Netzwerkarchitektur eines Metaverse: Ist die digitale Welt komplett dezentral oder bilden sich innerhalb des Netzwerkes zentrale Instanzen?",

    "Auch innerhalb von dezentralen Systemen gibt es Spezifizierungmöglichkeiten: Welche Art von Blockchain wird verwendet oder wird auf eine andere Distributed-Ledger-Technologie zurückgegriffen?",
    "Zudem sind wie bereits erwähnt rechtliche Fragestellungen ungeklärt: Sind heutige Regelungen direkt auf das Metaverse anwendbar oder müssen die erweitert oder gar ersetzt werden? Neben diesen Beispielen existieren noch viele weitere konzeptionelle Unklarheiten im Kontext des Metaverse. ",
  ];

  const Metaverse_Fazit = [
    "Metaverse Projekte, wie Sandbox und Decentraland, gewinnen hinsichtlich des Träumens von einer digitalen Zukunft immer mehr an Relevanz.",
    "Doch welche Konzepte könnten Realität werden und welche Ansätze sind doch nur reine Spekulation?",
    "Zum jetzigen Zeitpunkt ist es zu früh Aussagen darüber zu treffen, wie das zukünftige Metaverse aussehen könnte, doch digitale Vermögenswerte und Kryptowährungen implementieren sich immer weiter in die eingefahrenen Strukturen der herkömmlichen Welt. Die Digitalisierung ist dabei ein fortlaufender Prozess, welcher immer weitere Teile traditioneller Systeme revolutioniert und in einem nahtlosen Zusammenspiel der realen und der digitalen Welt resultieren könnte.",
    "",
    "Wie das Metaverse genau konzipiert sein wird, ist bis dato reine Spekulation und heute revolutionär erscheinende Ansichten, könnten schon bald überholt sein.",
    "Es kann somit festgehalten werden, dass die Blockchain, Web 3.0, tokenisierte Vermögenswerte und viele weitere Technologien wesentliche Bausteine einer digitalen Zukunft darstellen, welche den Platz traditioneller Systeme einnehmen, sowie den herkömmlichen Umgang mit digitalen Inhalten grundlegend verändern könnten. Dennoch erscheint eine zeitnahe komplette Verlagerung des täglichen Lebens in die digitale Welt eines Metaverse zum heutigen Zeitpunkt wenig realistisch.",
  ];
  const MV_Quellen = [
    "Meet Me in the Metaverse (Technology Visision 2022) - accenture.",
    "New trend report: Into the Metaverse - Trust and risks in the metaverse: 6 key considerations.",
    "Trust and risks in the metaverse: 6 key considerations- pwc.",
    "Oppurtunities in the Metaverse - JP Morgan.",
    "The Corporate Hitchhiker’s Guide to the Metaverse - Boston Consulting Group.",
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
              <h2 id="WSDW_Top_Wrapper_h2">Das Metaverse und Web 3.0 im </h2>{" "}
              <h1 id="WSDW_Top_Wrapper_h2_Yellow">Überblick</h1>
              <h4 id="WSDW_h470">
                Die Digitalisierung verläuft rasend schnell und mit ihr die
                Anwendungsmöglichkeiten, welche Technologien zukünftig bieten
                könnten. Die digitale Identität ist schon lange ein wichtiger
                Bestandteil des Lebens vieler Nutzer und scheint sich schon
                heute immer weiter in herkömmliche Strukturen zu implementieren.
                Konzeptionen, wie das Metaverse, lassen Nutzer spekulieren, wie
                ein nahtloses Zusammenspiel zwischen der herkömmlichen und
                digitalen Welt Realität werden könnte.
              </h4>
            </div>
            <div id="WSDW_Top_Wrapper_Right">
              <div id="Div_Home_Top_Section_Layer_Form"></div>
              <HashLink to="#WasistWeb3">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">
                    Was wird unter dem Web 3.0 verstanden ?
                  </h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>
              <HashLink to="#WasistMV">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">
                    Was wird unter dem Metaverse verstanden ?
                  </h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>
              <HashLink to="#Interoperabilität">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">Interoperabilität</h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>

              <HashLink to="#MV_Risiken">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">Risiken </h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>

              <HashLink to="#OffeneFragestellungen">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">Offene Fragestellungen </h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>

              <HashLink to="#Fazit">
                <div id="WSDW_Top_Row_Button">
                  <h3 id="WSDW_Top_Row_Button_h3">Fazit</h3>

                  <div id="WSDW_Top_Row_Button_Arrow_Wrapper">
                    <img src={arrow} id="WSDW_Top_Row_Button_img" alt="" />
                  </div>
                </div>
              </HashLink>
            </div>
          </div>
          <div id="Margin-Bottom-10vh"></div>
          <div id="WasistWeb3"></div>
          <div id="NFRID_Was_sind_wrapper">
            <h3 id="DEX_Was_sind_Left_h3">
              Was wird unter dem Web 3.0 verstanden ?
            </h3>
            <h5 id="DEX_Was_sind_Left_h5">
              Um die Konzeption des Metaverse zu verstehen, sollte zunächst die
              bisherige Evolution des Internets verstanden werden.
              <br />
            </h5>
            <div id="NFRID_Was_sind_wrapper_Inner">
              <h5 id="DEX_Was_sind_Left_h5">
                Das ursprüngliche Internet, also das Web 1.0, wurde mit der
                Intention ins Leben gerufen, Benutzern die Möglichkeit zu geben,
                digitale, von ausgewählten Publishern veröffentlichte, Inhalte
                einzusehen. Dieses Konzept ist vergleichbar mit einer
                Online-Bibliothek.<br></br>
                <br></br>
                Web 2.0 erweiterte diese Konzeption und ermöglichte es Benutzern
                zusätzlich sowohl eigene Inhalte zu erstellen, als auch die
                Inhalte anderer zu konsumieren. Die Kontrolle behielten dabei
                jedoch stets zentralisierte Netzwerke.<br></br>
                <br></br> Das Web 2.0 beschreibt demnach die Konzeption des
                Internets, wie es heute Verwendung findet, inklusive den damit
                einhergehenden Problemen und Einschränkungen. <br></br>
                <br></br>Das Web 3.0 verändert diese Konzeption des Internets
                jedoch grundsätzlich: Nutzer des Web 3.0 haben weiterhin die
                Möglichkeit digitale Inhalte zu erstellen und zu konsumieren,
                doch bietet sich Ihnen künftig zusätzlich die Möglichkeit diese
                digitalen Inhalte tatsächlich zu besitzen.<br></br>
                <br></br>
                Dezentralisierte Netzwerke (DLTs), wie die Blockchain, ersetzen
                dabei zentrale Vermittler, schaffen eine Form des Vertrauens und
                ermöglichen den Konsum und Austausch digitaler Inhalte.{" "}
                <br></br>
                <br></br>Auch wenn sich das Web 3.0 bisher noch in der
                Konzeption befindet, gewinnt die Blockchain in der digitalen
                Welt immer mehr an Relevanz.<br></br>
                <br></br> Der Blockchain entspringende Kryptowährungen, NFTs,
                digitale Wertpapiere und andere Arten von Token bieten dabei
                eine Reihe neuer Anwendungsmöglichkeiten.
              </h5>

              <img
                src={Metaverse_Ev_Internet}
                id="NFRID_Was_sind_wrapper_Inner_Img"
              />
            </div>

            <h5 id="DEX_Was_sind_Left_h5">
              Entwicklungen im Bereich von dezentralen Netzwerken und weiteren
              Zukunftstechnologien, wie bspw. Quanten-Computer, könnten in
              Zukunft die Annäherung der analogen an die digitale Welt
              ermöglichen.
            </h5>
          </div>
          <div id="Margin-Bottom-10vh"></div>
          <div id="WasistMV"></div>
          <div id="DEX_Was_sind_wrapper">
            <div id="DEX_Was_sind_Left">
              <h3 id="DEX_Was_sind_Left_h3">
                Was wird unter dem Metaverse verstanden ?
              </h3>
              <h5 id="DEX_Was_sind_Left_h5">
                Wenn von „dem Metaverse“ die Rede ist, geht es weniger um DAS
                EINE Metaverse, sondern vielmehr um eine neue Art das Internet
                wahrzunehmen und die digitale Welt zu erleben. Das Metaverse
                beschreibt ein nahtloses Zusammenspiel zwischen der Realität und
                der immer relevanter werdenden digitalen Welt.<br></br>
                <br></br> Das herkömmliche Internet mit Seiten und Apps, welche
                Benutzer durch die digitale Welt navigieren, könnten einer
                dreidimensionalen Umgebung weichen, was in einer grundlegenden
                Veränderung der Wahrnehmung digitaler Inhalte resultieren würde.
                Das Metaverse wird vereinfachend gerne als ein solches
                dreidimensionales Internet beschrieben, in dem Menschen
                arbeiten, spielen, ausruhen und soziale Interaktionen
                durchführen können. <br></br>
                <br></br>
                Ereignisse, wie COVID-19 , führen dazu, dass die Implementierung
                der digitalen Welt in unseren Alltag fortschreitend an Relevanz
                gewinnt und Dinge wie virtuelle Meetings über Zoom alltäglich
                werden.<br></br> Ein weiteres Beispiel bieten soziale Netzwerke,
                wie Facebook oder Instagram, welche Schritt für Schritt die
                traditionelle Art der sozialen Interaktion digitalisieren.
                Innerhalb des Reports der Boston Consulting Group beschreibt
                Daniel Miller die Entwicklung folgendermaßen:<br></br>
                <br></br> “The smartphone is no longer just a device that we
                use, It’s become the place where we live.” <br></br>
                <br></br>AR,VR und MR (zusammengefasst als XR bezeichnet)
                ermöglichen es dabei die digitale Welt auf eine neue Art und
                Weise zu erleben und tragen zu dem Wechsel von einer
                zweidimensionalen in eine dreidimensionale digitale Welt bei.
                <br></br> Aktuell befinden sich die Hürden der Massenadaption
                insbesondere innerhalb der limitierten User-Experience, der
                eingeschränkten Inhalte, sowie der teilweise ungelösten Probleme
                innerhalb der technischen Konzeption und Umsetzung von
                XR-Technologien. Der Aufbau des Web 3.0 bietet dabei eine
                konzeptionelle Grundlage, welche Vertrauen und Sicherheit
                schafft.
              </h5>
            </div>

            <div id="DEX_Was_sind_Right">
              <div id="DEX_Was_sind_Right_Top">
                <div id="DEX_Was_sind_Right_ITEM">
                  <img src={Decentraland} id="DEX_Was_sind_Right_ITEM_img" />
                  <h5 id="DEX_Was_sind_Right_ITEM_h5">Decentraland</h5>
                </div>

                <div id="DEX_Was_sind_Right_ITEM">
                  <img src={Sandbox} id="DEX_Was_sind_Right_ITEM_img" />
                  <h5 id="DEX_Was_sind_Right_ITEM_h5">Sandbox</h5>
                </div>
              </div>
              <div id="DEX_Was_sind_Right_Buttom">
                <div id="DEX_Was_sind_Right_ITEM">
                  <img src={Meta} id="Meta_Img" />
                  <h5 id="DEX_Was_sind_Right_ITEM_h5">Meta</h5>
                </div>

                <div id="DEX_Was_sind_Right_ITEM">
                  <img src={LunaLabs} id="DEX_Was_sind_Right_ITEM_img" />
                  <h5 id="DEX_Was_sind_Right_ITEM_h5">Yuga Labs</h5>
                </div>
              </div>
              <h5 id="DEX_Was_sind_Right_ITEM_h5">Anbieter von Metaverses</h5>
            </div>
          </div>{" "}
          <div id="Margin-Bottom-10vh"></div>
          <div id="Interoperabilität"></div>
          <Weiss_einfach_Col_1h
            Heading="Die Interoperabilität als Notwendigkeit im Metaverse ?
              "
            Text={Metaverse_Interoperabilität.join("\n")}
          />{" "}
          <div id="Margin-Bottom-10vh"></div>
          <div id="MV_Risiken"></div>
          <Weiss_einfach_Col_1h
            Heading="Welche Risiken gibt es im Metaverse ?"
            Text={Metaverse_Risiken.join("\n")}
          />{" "}
          <div id="Margin-Bottom-10vh"></div>
          <div id="OffeneFragestellungen"></div>
          <Weiss_einfach_Col_1h
            Heading="Offene Fragestellungen bzgl. der Konzeption des Metaverse "
            Text={Metaverse_Fragestellungen.join("\n")}
          />{" "}
          <div id="Margin-Bottom-10vh"></div>
          <div id="Fazit"></div>
          <Weiss_einfach_Col_1h
            Heading="Fazit"
            Text={Metaverse_Fazit.join("\n")}
          />{" "}
          <div id="Margin-Bottom-10vh"></div>
          <Weiss_einfach_Col_1h
            Heading="Quellen"
            Text={MV_Quellen.join("\n")}
          />{" "}
        </div>
        <FOOTER />{" "}
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
        {/*Top */}
        <div id="Mobile_Academy_Wrapper">
          <MOBILE_MENUE />
          <div id="Mobile_Content_Top_Section">
            <h2 id="Mobile_Content_Top_Section_h2">
              Das Metaverse und Web 3.0 im Überblick
            </h2>
            <div id="Mobile_Content_Top_Section_yellow_lane"></div>

            <h2 id="Mobile_Content_Top_Section_h2_yellow"></h2>
            <h5 id="Mobile_Content_Top_Section_h5">
              Die Digitalisierung verläuft rasend schnell und mit ihr die
              Anwendungsmöglichkeiten, welche Technologien zukünftig bieten
              könnten. Die digitale Identität ist schon lange ein wichtiger
              Bestandteil des Lebens vieler Nutzer und scheint sich schon heute
              immer weiter in herkömmliche Strukturen zu implementieren.
              Konzeptionen, wie das Metaverse, lassen Nutzer spekulieren, wie
              ein nahtloses Zusammenspiel zwischen der herkömmlichen und
              digitalen Welt Realität werden könnte.
            </h5>
          </div>
          <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div> <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div>
          <div id="DEX_Was_sind_Wrapper">
            <h2 id="NFRID_SM_h2"> Was wird unter dem Web 3.0 verstanden ?</h2>
            <h5 id="NFRID_SM_h5">
              Um die Konzeption des Metaverse zu verstehen, sollte zunächst die
              bisherige Evolution des Internets verstanden werden. Das
              ursprüngliche Internet, also das Web 1.0, wurde mit der Intention
              ins Leben gerufen, Benutzern die Möglichkeit zu geben, digitale,
              von ausgewählten Publishern veröffentlichte, Inhalte einzusehen.
              Dieses Konzept ist vergleichbar mit einer Online-Bibliothek.
              <br></br>
              <br />
              Web 2.0 erweiterte diese Konzeption und ermöglichte es Benutzern
              zusätzlich sowohl eigene Inhalte zu erstellen, als auch die
              Inhalte anderer zu konsumieren. Die Kontrolle behielten dabei
              jedoch stets zentralisierte Netzwerke.
              <br></br>
              <br></br> Das Web 2.0 beschreibt demnach die Konzeption des
              Internets, wie es heute Verwendung findet, inklusive den damit
              einhergehenden Problemen und Einschränkungen. <br></br>
              <br></br>Das Web 3.0 verändert diese Konzeption des Internets
              jedoch grundsätzlich: Nutzer des Web 3.0 haben weiterhin die
              Möglichkeit digitale Inhalte zu erstellen und zu konsumieren, doch
              bietet sich Ihnen künftig zusätzlich die Möglichkeit diese
              digitalen Inhalte tatsächlich zu besitzen.<br></br>
              <br></br>
              Dezentralisierte Netzwerke (DLTs), wie die Blockchain, ersetzen
              dabei zentrale Vermittler, schaffen eine Form des Vertrauens und
              ermöglichen den Konsum und Austausch digitaler Inhalte. <br></br>
              <br></br>Auch wenn sich das Web 3.0 bisher noch in der Konzeption
              befindet, gewinnt die Blockchain in der digitalen Welt immer mehr
              an Relevanz.<br></br>
              <br></br> Der Blockchain entspringende Kryptowährungen, NFTs,
              digitale Wertpapiere und andere Arten von Token bieten dabei eine
              Reihe neuer Anwendungsmöglichkeiten.
              <br />
              <br />
              Entwicklungen im Bereich von dezentralen Netzwerken und weiteren
              Zukunftstechnologien, wie bspw. Quanten-Computer, könnten in
              Zukunft die Annäherung der analogen an die digitale Welt
              ermöglichen.
            </h5>
          </div>{" "}
          <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div> <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div>
          <div id="DEX_Was_sind_Wrapper">
            <h2 id="NFRID_SM_h2"> Was wird unter dem Metaverse verstanden ?</h2>
            <h5 id="NFRID_SM_h5">
              Wenn von „dem Metaverse“ die Rede ist, geht es weniger um DAS EINE
              Metaverse, sondern vielmehr um eine neue Art das Internet
              wahrzunehmen und die digitale Welt zu erleben. Das Metaverse
              beschreibt ein nahtloses Zusammenspiel zwischen der Realität und
              der immer relevanter werdenden digitalen Welt.<br></br>
              <br></br> Das herkömmliche Internet mit Seiten und Apps, welche
              Benutzer durch die digitale Welt navigieren, könnten einer
              dreidimensionalen Umgebung weichen, was in einer grundlegenden
              Veränderung der Wahrnehmung digitaler Inhalte resultieren würde.
              Das Metaverse wird vereinfachend gerne als ein solches
              dreidimensionales Internet beschrieben, in dem Menschen arbeiten,
              spielen, ausruhen und soziale Interaktionen durchführen können.{" "}
              <br></br>
              <br></br>
              Ereignisse, wie COVID-19 , führen dazu, dass die Implementierung
              der digitalen Welt in unseren Alltag fortschreitend an Relevanz
              gewinnt und Dinge wie virtuelle Meetings über Zoom alltäglich
              werden.<br></br> Ein weiteres Beispiel bieten soziale Netzwerke,
              wie Facebook oder Instagram, welche Schritt für Schritt die
              traditionelle Art der sozialen Interaktion digitalisieren.
              Innerhalb des Reports der Boston Consulting Group beschreibt
              Daniel Miller die Entwicklung folgendermaßen:<br></br>
              <br></br> “The smartphone is no longer just a device that we use,
              It’s become the place where we live.” <br></br>
              <br></br>AR,VR und MR (zusammengefasst als XR bezeichnet)
              ermöglichen es dabei die digitale Welt auf eine neue Art und Weise
              zu erleben und tragen zu dem Wechsel von einer zweidimensionalen
              in eine dreidimensionale digitale Welt bei.
              <br></br> Aktuell befinden sich die Hürden der Massenadaption
              insbesondere innerhalb der limitierten User-Experience, der
              eingeschränkten Inhalte, sowie der teilweise ungelösten Probleme
              innerhalb der technischen Konzeption und Umsetzung von
              XR-Technologien. Der Aufbau des Web 3.0 bietet dabei eine
              konzeptionelle Grundlage, welche Vertrauen und Sicherheit schafft.
            </h5>

            <div id="DEX_Was_sind_Items_Wrapper">
              <div id="DEX_Was_sind_Items_Row">
                <div id="DEX_Was_sind_Item">
                  <img src={Decentraland} id="DEX_Was_sind_Item_IMG" />
                  <h5 id="DEX_Was_sind_Item_h5">Decentraland</h5>
                </div>

                <div id="DEX_Was_sind_Item">
                  <img src={Sandbox} id="DEX_Was_sind_Item_IMG" />
                  <h5 id="DEX_Was_sind_Item_h5">Sandbox</h5>
                </div>
              </div>

              <div id="DEX_Was_sind_Items_Row">
                <div id="DEX_Was_sind_Item">
                  <img src={Meta} id="DEX_Was_sind_Item_IMG" />
                  <h5 id="DEX_Was_sind_Item_h5">Meta</h5>
                </div>

                <div id="DEX_Was_sind_Item">
                  <img src={LunaLabs} id="DEX_Was_sind_Item_IMG" />
                  <h5 id="DEX_Was_sind_Item_h5">Yuga Labs</h5>
                </div>
              </div>
            </div>
          </div>{" "}
          <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div> <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Heading="Die Interoperabilität als Notwendigkeit im Metaverse "
            Text={Metaverse_Interoperabilität.join("\n")}
          />{" "}
          <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div> <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Heading="Welche Risiken gibt es im Metaverse ?"
            Text={Metaverse_Risiken.join("\n")}
          />{" "}
          <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div> <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Heading="Offene Fragestellungen bzgl. der Konzeption des Metaverse "
            Text={Metaverse_Fragestellungen.join("\n")}
          />{" "}
          <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div> <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Heading="Fazit"
            Text={Metaverse_Fazit.join("\n")}
          />{" "}
          <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div> <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div>
          <Mobile_white_einfach
            Heading="Quellen"
            Text={MV_Quellen.join("\n")}
          />{" "}
          <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div> <div id="Margin-Bottom-2vh"></div>
          <div id="Margin-Bottom-2vh"></div>
          <MOBILE_FOOTER />{" "}
        </div>
      </div>
    </div>
  );
}

export default DEX;
