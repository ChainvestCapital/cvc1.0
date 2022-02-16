import "./Design/Dateschutzerklärung.css";

import Footer from "./components/navigation/Footer";
import Mobile_menue from "./MobileComponents/Mobile_menue";
import CookieConsent from "react-cookie-consent";

import { useEffect } from "react";
import Mobile_Footer from "./MobileComponents/Mobile_Footer";
import { Link } from "react-router-dom";

import Top_nav_Bar from "./components/navigation/Top_Nav_Bar";
function Datenschutzerklärung() {
  useEffect(() => {
    document.title = "Datenschutzerklärung";
  }, []);
  return (
    <div>
      <div id="Desktop_Wrapper">
        {" "}
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
        <Top_nav_Bar />
        <div id="DatenschutzWrapper">
          <h2 id="Datenschutzerklärung_h2">Datenschutzerklärung</h2>
          <div id="Datenschutz_Content_Wrapper">
            <h4 id="Datenschutzerklärung_h4">
              Allgemeine Hinweise: <br />
              <br />
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung. <br />
              <br />
              Datenerfassung auf dieser Website: <br />
              <br />
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?{" "}
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen. <br />
              <br />
              Wie erfassen wir Ihre Daten? <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben. Andere Daten werden automatisch oder
              nach Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
              Website betreten. <br />
              <br />
              Wofür nutzen wir Ihre Daten? <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden. Welche Rechte
              haben Sie bezüglich Ihrer Daten? <br />
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema
              Datenschutz können Sie sich jederzeit unter der im Impressum
              angegebenen Adresse an uns wenden. <br />
              <br />
              Analyse-Tools und Tools von Drittanbietern: <br />
              <br />
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit sogenannten
              Analyseprogrammen. Detaillierte Informationen zu diesen
              Analyseprogrammen finden Sie in der folgenden
              Datenschutzerklärung. 2. Hosting und Content Delivery Networks
              (CDN) <br />
              Externes Hosting <br />
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta-
              und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Websitezugriffe und sonstige Daten, die über eine Website
              generiert werden, handeln. Der Einsatz des Hosters erfolgt zum
              Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres
              Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs.
              1 lit. f DSGVO). Unser Hoster wird Ihre Daten nur insoweit
              verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
              erforderlich ist und unsere Weisungen in Bezug auf diese Daten
              befolgen. Wir setzen folgenden Hoster ein: Sitz der
              Aktiengesellschaft: STRATO AG Pascalstraße 10 10587 Berlin
              Telefon:030-300 146 0 3. <br />
              <br />
              Allgemeine Hinweise und Pflichtinformationen Datenschutz: <br />
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn
              Sie diese Website benutzen, werden verschiedene personenbezogene
              Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
              persönlich identifiziert werden können. Die vorliegende
              Datenschutzerklärung erläutert, welche Daten wir erheben und wofür
              wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
              geschieht. Wir weisen darauf hin, dass die Datenübertragung im
              Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten
              vor dem Zugriff durch Dritte ist nicht möglich. <br />
              <br />
              Hinweis zur verantwortlichen Stelle: <br />
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist: <br />
              Chainvest Capital UG <br />
              Kuhnkestraße 6 <br />
              24106 Kiel <br />
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet. <br />
              <br />
              Speicherdauer: <br />
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keinen anderen rechtlich zulässigen Gründe
              für die Speicherung Ihrer personenbezogenen Daten haben (z.B.
              steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
              Gründe. Widerruf Ihrer Einwilligung zur Datenverarbeitung. <br />{" "}
              <br />
              Widerruf Ihrer Einwilligung zur Datenverarbeitung: <br /> Viele
              Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt. Widerspruchsrecht gegen die Datenerhebung in besonderen
              Fällen sowie gegen Direktwerbung (Art. 21 DSGVO) Wenn die
              Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 Lit. E oder F
              DSVGO erfolgt, Haben Sie jederzeit das Recht, aus Gründen, die
              sich aus ihrer besonderen Situation ergeben, gegen die
              Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen;
              Dies gilt auch für ein auf diese Bestimmungen gestütztes
              Profiling. Die jeweilige Rechtsgrundlage, auf denen eine
              Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung.
              Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
              personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir
              können zwingende schutzwürdige Gründe für die Verarbeitung
              nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen
              oder die Verarbeitung dient der Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1
              DSVGO). Werden Ihre personenbezogenen Daten verarbeitet, um
              Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
              Widerspruch gegen die Verarbeitung Sie betreffender
              personenbezogener Daten zum Zwecke derartiger Werbung einzulegen;
              dies gilt auch für das Profiling, soweit es mit solcher
              Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden
              Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke
              der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2
              DSVGO). <br /> <br />
              Beschwerderecht bei der zuständigen Aufsichtsbehörde: <br /> Im
              Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe. <br /> <br /> Recht auf
              Datenübertragbarkeit: <br /> Sie haben das Recht, Daten, die wir
              auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
              automatisiert verarbeiten, an sich oder an einen Dritten in einem
              gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern
              Sie die direkte Übertragung der Daten an einen anderen
              Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
              machbar ist. Auskunft, Löschung und Berichtigung Sie haben im
              Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht
              auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger und den
              Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
              oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
              Thema personenbezogene Daten können Sie sich jederzeit unter der
              im Impressum angegebenen Adresse an uns wenden. <br /> <br />
              Recht auf Einschränkung der Verarbeitung: <br /> Sie haben das
              Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
              Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im
              Impressum angegebenen Adresse an uns wenden. Das Recht auf
              Einschränkung der Verarbeitung besteht in folgenden Fällen: Wenn
              Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
              Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
              überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Wenn die Verarbeitung Ihrer personenbezogenen Daten
              unrechtmäßig geschah/geschieht, können Sie statt der Löschung die
              Einschränkung der Datenverarbeitung verlangen. Wenn wir Ihre
              personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
              Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen
              benötigen, haben Sie das Recht, statt der Löschung die
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
              eingelegt haben, muss eine Abwägung zwischen Ihren und unseren
              Interessen vorgenommen werden. Solange noch nicht feststeht,
              wessen Interessen überwiegen, haben Sie das Recht, die
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
              abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
              der Rechte einer anderen natürlichen oder juristischen Person oder
              aus Gründen eines wichtigen öffentlichen Interesses der
              Europäischen Union oder eines Mitgliedstaats verarbeitet werden.{" "}
              <br /> <br /> Newsletter: <br /> Um den auf unserer Webseite
              angebotenen Newsletter zu beziehen, können Sie sich über unser
              Formular anmelden. Dabei nutzen wir das sogenannte Double-Opt-In
              Verfahren. Hier wird zunächst eine Bestätigungsmail an Ihre
              angegebene E-Mail Adresse gesendet, mit der Bitte um Bestätigung.
              Die Anmeldung wird erst wirksam, wenn Sie den in der
              Bestätigungsmail enthaltenen Aktivierungslink anklicken. Wir
              verwenden Ihre an uns übertragenen Daten ausschließlich für den
              Versand des Newsletters, der Informationen oder Angebot enthalten
              kann. Sie können Ihre Einwilligung zur Speicherung der Daten und
              deren Nutzung zum Newsletter-Versand jederzeit widerrufen, z.B.
              über den Abmelde-Link im Newsletter. Wir verwenden rapidmail, um
              unseren Newsletter zu versenden. Ihre Daten werden daher an die
              Rocket Science Group übermittelt. Dabei ist es der Rocket Science
              Group untersagt, Ihre Daten für andere Zwecke als für den Versand
              des Newsletters zu nutzen. Eine Weitergabe oder ein Verkauf Ihrer
              Daten ist der Rocket Science Group nicht gestattet. Rocket Science
              Group ist ein Newsletter Software Anbieter, welcher nach den
              Anforderungen der DSGVO sorgfältig ausgewählt wurde. <br /> <br />{" "}
              4. Datenerfassung auf dieser Website <br /> <br />
              Cookies: <br />
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies
              sind kleine Textdateien und richten auf Ihrem Endgerät keinen
              Schaden an. Sie werden entweder vorübergehend für die Dauer einer
              Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
              Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres
              Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem
              Endgerät gespeichert, bis Sie diese selbst löschen oder eine
              automatische Löschung durch Ihren Webbrowser erfolgt. Teilweise
              können auch Cookies von Drittunternehmen auf Ihrem Endgerät
              gespeichert werden, wenn Sie unsere Seite betreten
              (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die
              Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B.
              Cookies zur Abwicklung von Zahlungsdienstleistungen). Cookies
              haben verschiedene Funktionen. Zahlreiche Cookies sind technisch
              notwendig, da bestimmte Websitefunktionen ohne diese nicht
              funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige
              von Videos). Andere Cookies dienen dazu, das Nutzer verhalten
              auszuwerten oder Werbung anzuzeigen. Cookies, die zur Durchführung
              des elektronischen Kommunikationsvorgangs (notwendige Cookies)
              oder zur Bereitstellung bestimmter, von Ihnen erwünschter
              Funktionen (funktionale Cookies, z. B. für die Warenkorbfunktion)
              oder zur Optimierung der Website (z.B. Cookies zur Messung des
              Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
              Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
              berechtigtes Interesse an der Speicherung von Cookies zur
              technisch fehlerfreien und optimierten Bereitstellung seiner
              Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
              abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies
              ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1
              lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar. Sie
              können Ihren Browser so einstellen, dass Sie über das Setzen von
              Cookies informiert werden und Cookies nur im Einzelfall erlauben,
              die Annahme von Cookies für bestimmte Fälle oder generell
              ausschließen sowie das automatische Löschen der Cookies beim
              Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
              Soweit Cookies von Drittunternehmen oder zu Analysezwecken
              eingesetzt werden, werden wir Sie hier über im Rahmen dieser
              Datenschutzerklärung gesondert informieren und ggf. eine
              Einwilligung abfragen. <br /> <br />
              Quelle: eRecht24
            </h4>
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
        <Mobile_menue />
        <div id="Mobile_Datenschutz_Wrapper">
          <h2 id="Mobile_Impressum_h2">Datenschutzerklärung </h2>
          <h4 id="Mobile_Impressum_h4">
            Allgemeine Hinweise: <br />
            <br />
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung. <br />
            <br />
            Datenerfassung auf dieser Website: <br />
            <br />
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?{" "}
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen. <br />
            <br />
            Wie erfassen wir Ihre Daten? <br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben. Andere Daten werden automatisch oder
            nach Ihrer Einwilligung beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
            Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
            betreten. <br />
            <br />
            Wofür nutzen wir Ihre Daten? <br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden. Welche Rechte haben Sie bezüglich
            Ihrer Daten? <br />
            <br />
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
            Datenverarbeitung erteilt haben, können Sie diese Einwilligung
            jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
            unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu
            sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an uns wenden.{" "}
            <br />
            <br />
            Analyse-Tools und Tools von Drittanbietern: <br />
            <br />
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit sogenannten
            Analyseprogrammen. Detaillierte Informationen zu diesen
            Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
            2. Hosting und Content Delivery Networks (CDN) <br />
            Externes Hosting <br />
            Diese Website wird bei einem externen Dienstleister gehostet
            (Hoster). Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters gespeichert.
            Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und
            Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
            Websitezugriffe und sonstige Daten, die über eine Website generiert
            werden, handeln. Der Einsatz des Hosters erfolgt zum Zwecke der
            Vertragserfüllung gegenüber unseren potenziellen und bestehenden
            Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
            schnellen und effizienten Bereitstellung unseres Online-Angebots
            durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
            Erfüllung seiner Leistungspflichten erforderlich ist und unsere
            Weisungen in Bezug auf diese Daten befolgen. Wir setzen folgenden
            Hoster ein: Sitz der Aktiengesellschaft: STRATO AG Pascalstraße 10
            10587 Berlin Telefon:030-300 146 0 3. <br />
            <br />
            Allgemeine Hinweise und Pflichtinformationen Datenschutz: <br />
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie
            diese Website benutzen, werden verschiedene personenbezogene Daten
            erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich
            identifiziert werden können. Die vorliegende Datenschutzerklärung
            erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
            erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen
            darauf hin, dass die Datenübertragung im Internet (z. B. bei der
            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
            lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            möglich. <br />
            <br />
            Hinweis zur verantwortlichen Stelle: <br />
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist: <br />
            Chainvest Capital UG <br />
            Kuhnkestraße 6 <br />
            24106 Kiel <br />
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z. B. Namen,
            E-Mail-Adressen o. Ä.) entscheidet. <br />
            <br />
            Speicherdauer: <br />
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
            ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
            zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
            wir keinen anderen rechtlich zulässigen Gründe für die Speicherung
            Ihrer personenbezogenen Daten haben (z.B. steuer- oder
            handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
            erfolgt die Löschung nach Fortfall dieser Gründe. Widerruf Ihrer
            Einwilligung zur Datenverarbeitung. <br /> <br />
            Widerruf Ihrer Einwilligung zur Datenverarbeitung: <br /> Viele
            Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
            gegen Direktwerbung (Art. 21 DSGVO) Wenn die Datenverarbeitung auf
            Grundlage von Art. 6 Abs. 1 Lit. E oder F DSVGO erfolgt, Haben Sie
            jederzeit das Recht, aus Gründen, die sich aus ihrer besonderen
            Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen
            Daten Widerspruch einzulegen; Dies gilt auch für ein auf diese
            Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage,
            auf denen eine Verarbeitung beruht, entnehmen Sie dieser
            Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre
            betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei
            denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
            nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen
            oder die Verarbeitung dient der Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1
            DSVGO). Werden Ihre personenbezogenen Daten verarbeitet, um
            Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
            Widerspruch gegen die Verarbeitung Sie betreffender
            personenbezogener Daten zum Zwecke derartiger Werbung einzulegen;
            dies gilt auch für das Profiling, soweit es mit solcher
            Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden
            Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der
            Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSVGO).{" "}
            <br /> <br />
            Beschwerderecht bei der zuständigen Aufsichtsbehörde: <br /> Im
            Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
            Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
            oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
            besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
            gerichtlicher Rechtsbehelfe. <br /> <br /> Recht auf
            Datenübertragbarkeit: <br /> Sie haben das Recht, Daten, die wir auf
            Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
            automatisiert verarbeiten, an sich oder an einen Dritten in einem
            gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie
            die direkte Übertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            Auskunft, Löschung und Berichtigung Sie haben im Rahmen der
            geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
            Daten, deren Herkunft und Empfänger und den Zweck der
            Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung
            dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
            personenbezogene Daten können Sie sich jederzeit unter der im
            Impressum angegebenen Adresse an uns wenden. <br /> <br />
            Recht auf Einschränkung der Verarbeitung: <br /> Sie haben das
            Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im
            Impressum angegebenen Adresse an uns wenden. Das Recht auf
            Einschränkung der Verarbeitung besteht in folgenden Fällen: Wenn Sie
            die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
            bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen.
            Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn die
            Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
            geschah/geschieht, können Sie statt der Löschung die Einschränkung
            der Datenverarbeitung verlangen. Wenn wir Ihre personenbezogenen
            Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
            Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen,
            haben Sie das Recht, statt der Löschung die Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie
            einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss
            eine Abwägung zwischen Ihren und unseren Interessen vorgenommen
            werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
            haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Wenn Sie die Verarbeitung
            Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese
            Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung
            oder zur Geltendmachung, Ausübung oder Verteidigung von
            Rechtsansprüchen oder zum Schutz der Rechte einer anderen
            natürlichen oder juristischen Person oder aus Gründen eines
            wichtigen öffentlichen Interesses der Europäischen Union oder eines
            Mitgliedstaats verarbeitet werden. <br /> <br /> Newsletter: <br />{" "}
            Um den auf unserer Webseite angebotenen Newsletter zu beziehen,
            können Sie sich über unser Formular anmelden. Dabei nutzen wir das
            sogenannte Double-Opt-In Verfahren. Hier wird zunächst eine
            Bestätigungsmail an Ihre angegebene E-Mail Adresse gesendet, mit der
            Bitte um Bestätigung. Die Anmeldung wird erst wirksam, wenn Sie den
            in der Bestätigungsmail enthaltenen Aktivierungslink anklicken. Wir
            verwenden Ihre an uns übertragenen Daten ausschließlich für den
            Versand des Newsletters, der Informationen oder Angebot enthalten
            kann. Sie können Ihre Einwilligung zur Speicherung der Daten und
            deren Nutzung zum Newsletter-Versand jederzeit widerrufen, z.B. über
            den Abmelde-Link im Newsletter. Wir verwenden rapidmail, um unseren
            Newsletter zu versenden. Ihre Daten werden daher an die Rocket
            Science Group übermittelt. Dabei ist es der Rocket Science Group
            untersagt, Ihre Daten für andere Zwecke als für den Versand des
            Newsletters zu nutzen. Eine Weitergabe oder ein Verkauf Ihrer Daten
            ist der Rocket Science Group nicht gestattet. Rocket Science Group
            ist ein Newsletter Software Anbieter, welcher nach den Anforderungen
            der DSGVO sorgfältig ausgewählt wurde. <br /> <br /> 4.
            Datenerfassung auf dieser Website <br /> <br />
            Cookies: <br />
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
            kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.
            Sie werden entweder vorübergehend für die Dauer einer Sitzung
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
            Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
            automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
            gespeichert, bis Sie diese selbst löschen oder eine automatische
            Löschung durch Ihren Webbrowser erfolgt. Teilweise können auch
            Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden,
            wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese
            ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen
            des Drittunternehmens (z.B. Cookies zur Abwicklung von
            Zahlungsdienstleistungen). Cookies haben verschiedene Funktionen.
            Zahlreiche Cookies sind technisch notwendig, da bestimmte
            Websitefunktionen ohne diese nicht funktionieren würden (z.B. die
            Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies
            dienen dazu, das Nutzer verhalten auszuwerten oder Werbung
            anzuzeigen. Cookies, die zur Durchführung des elektronischen
            Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung
            bestimmter, von Ihnen erwünschter Funktionen (funktionale Cookies,
            z. B. für die Warenkorbfunktion) oder zur Optimierung der Website
            (z.B. Cookies zur Messung des Webpublikums) erforderlich sind,
            werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert,
            sofern keine andere Rechtsgrundlage angegeben wird. Der
            Websitebetreiber hat ein berechtigtes Interesse an der Speicherung
            von Cookies zur technisch fehlerfreien und optimierten
            Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
            Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der
            betreffenden Cookies ausschließlich auf Grundlage dieser
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist
            jederzeit widerrufbar. Sie können Ihren Browser so einstellen, dass
            Sie über das Setzen von Cookies informiert werden und Cookies nur im
            Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle
            oder generell ausschließen sowie das automatische Löschen der
            Cookies beim Schließen des Browsers aktivieren. Bei der
            Deaktivierung von Cookies kann die Funktionalität dieser Website
            eingeschränkt sein. Soweit Cookies von Drittunternehmen oder zu
            Analysezwecken eingesetzt werden, werden wir Sie hier über im Rahmen
            dieser Datenschutzerklärung gesondert informieren und ggf. eine
            Einwilligung abfragen. <br /> <br />
            Quelle: eRecht24
          </h4>
        </div>
        <Mobile_Footer />{" "}
      </div>
    </div>
  );
}

export default Datenschutzerklärung;
