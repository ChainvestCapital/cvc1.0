import React from "react";
import "./Rechtlich.css";
import { Link } from "react-router-dom";
import MRechtliche_Kachel from "../../../MobileComponents/mRechtliche_Kachel";

function Mobile_Fix_Header(props) {
  return props.trigger ? (
    <div>
      <MRechtliche_Kachel
        title="GEGENSTAND DER TOKENISIERTEN GENUSSRECHTE"
        Beschreibung="Bei den tokenisierten Genussrechten handelt es sich um schuldrechtliche, inhaltsgleich ausgestaltete Forderungen,deren Inhaberschaft untrennbar mit den sie repräsentierenden Green Ship Token verknüpft sind. Die tokenisierten Genussrechte gewähren dem Inhaber ausschließlich vertragliche Gläubigerrechte und ausdrücklich keine Gesellschafterrechte,insbesondere kein Teilnahme-,Mitwirkungs- oder Stimmrecht in den Gesellschafterversammlungen der Emittentin. Eine Verbriefung der Genussrechte oder von Teilrechten der Genussrechte in Papierurkunden findet weder vor noch nach der Ausgabe der Green Ship Tokens statt. Genussrechtsinhaber haben keinen Anspruch auf eine Verbriefung der Genussrechte in Papierurkunden."
      />
      <MRechtliche_Kachel
        title="RECHTE DER GENUSSRECHTSGLÄUBIGER AUF VERZINSUNG"
        Beschreibung="Die tokenisierten Genussrechte werden während ihrer Laufzeit jeweils bezogen auf ihren Nennbetrag verzinst.Genussrechtsinhaber erhalten für den Zeitraum ihrer Tokeninhaberschaft während einer Zinsperiode eine fixe Verzinsung in Höhe von 8% p.a. sowie eine darüber hinausgehende variable Gewinnbeteiligung, deren Höhe vom wirtschaftlichen Erfolg der Emittentin nach Maßgabe von Ziffer 3.7 abhängig ist.
      Die Zinsperiode für die Verzinsung in Höhe von 8% p.a. sowie für die variable Gewinnbeteiligung ist das Geschäftsjahr der Emittentin (Kalenderjahr). Die erste Zinsperiode beginnt am 1. Januar 2021.Die Zinsperioden enden mit Ablauf des jeweiligen Geschäftsjahres oder im Fall der unterjährigen Beendigung der Laufzeit mit Ablauf des letzten Tages der Laufzeit. Die Zinsberechnung erfolgt gemäß act/acttag genau, d.h., dass sowohl die Anzahl der Zinstage als auch die Länge der Zinsperiode immer kalendergenau bestimmt wird.
      Soweit Genussrechtsinhaber innerhalb einer Zinsperiode Green Ship Token temporär gehalten haben, sind sie anteilig zins berechtigt. Die Zinsberechtigung in Ansehung der fixen Verzinsung sowie der variablen Gewinnbeteiligung ergibt sich für jeden vollen sowie ab 00:00 Uhr MEZ begonnenen Tag der Inhaberschaft der die Genussrechte repräsentierenden Green Ship Token. Tage, an denen die Tokeninhaberschaft erst nach 00:00 Uhr MEZ begründet wurde, begründen für den neuen Genussrechtsinhaber keine Zinsberechtigung. Zinsansprüche, deren Auszahlung nach Maßgabe von Ziffer 3.4 aufgeschoben wurde, verbleiben bei dem Genussrechtsinhaber, bei dem Sie entstanden sind.
      Soweit das wirtschaftliche Ergebnis der Emittentin in einem Geschäftsjahr die Auszahlung der fixen Verzinsung in Höhe von 8% p.a. nicht zulässt, ist die Emittentin berechtigt, eine geringere, sich nach der Bemessungsgrundlage gemäß Ziffer 3.6 errechnende Verzinsung für die betreffende Zinsperiode, mindestens jedoch eine Verzinsung von 4% p.a.,auszuzahlen. Ein sich ergebender Differenzbetrag gegenüber der fixen Verzinsung von 8% p.a. ist am nächsten Zinstermin auszuzahlen, soweit die Auszahlung nach dem sich gemäß der Bemessungsgrundlage ergebenden Ergebnis nach Zahlung der für die Zinsperiode fälligen Verzinsung in Höhe von 8% p.a. möglich ist. Soweit die Auszahlung des Differenzbetrags auch an diesem Zinstermin nicht möglich ist, ist die Emittentin berechtigt, die Auszahlung des Differenzbetrags erneut auf den nächsten Zinstermin aufzuschieben. Die Auszahlung von Differenzbeträgen kann durch die Emittentin auf diese Weise bis spätestens zum Rückzahlungstermin gemäß Ziffer 4.4 aufgeschoben werden.
      Die Emittentin verzichtet bereits jetzt auf die Einrede der Verjährung in Bezug auf Verzinsungsansprüche, deren Auszahlung nach Maßgabe von Ziffer 3.4 aufgeschoben wurde.
      Die Bemessungsgrundlage für die Berechnung der an den Zinsterminen jeweils auszuzahlenden Beträge bezüglich der fixen Verzinsung von 8% p.a. ergibt sich wie folgt:
       Der Jahresüberschuss der Emittentin aus ihrem Unternehmen gemäß Handelsbilanz;
       vor Abzug der fixen Verzinsung in Höhe von 8% p.a. für das betreffende Geschäftsjahr selbst;
       vor Abzug von Steuern sowie abzüglich eines Fünfzehntels der bei der Emittentin anfallenden Emissionskosten in Höhe von 8,5% des gesamten Emissionserlöses exklusive Agio sowie
       abzüglich etwaig in der Handelsbilanz enthaltender Vertriebskosten im Zusammenhang mit der Platzierung der nachrangigen tokenisierten Genussrechte nach diesen Bedingungen.
      Erlaubt der nach der Bemessungsgrundlage gemäß Ziffer 3.6 berechnete Betrag wirtschaftlich eine Verzinsung innerhalb eines Geschäftsjahres von mehr als 8% p.a. und sind an dem Zinstermin keine nach Ziffer 3.4 aufgeschobenen Zinszahlungen noch zur Auszahlung offen (Hurdle Rate), so wird der über die fixe Verzinsung von 8%p.a. und der nach Maßgabe von Ziffer 3.4 aufgeschobenen, an dem betreffenden Zinstermin auszuzahlenden Zinsansprüche hinausgehende Betrag zu einem Anteil von 50% zusätzlich an die Genussrechtsinhaber entsprechend der Anzahl ihrer Genussrechte und Dauer ihrer Genussrechtsinhaberschaft während der Zinsperiode ausgezahlt. Die verbleibenden 50% des Betrags verbleiben bei der Emittentin.
      Die Berechnung der Zinsen sowie der Bemessungsgrundlage nach Ziffer 3.6 erfolgt durch die Emittentin.
      Die Verzinsung nach Ziffer 3.1 ist in Höhe des nach Maßgabe der Regelung in Ziffer 3.4 auszuzahlenden Betrags jeweils nachträglich zum 30. September des auf das betreffende Geschäftsjahr folgenden Jahres, erstmalig zum 30. September 2022 zahlbar. Sofern der 30. September in einem Jahr kein Bankarbeitstag ist, tritt die Fälligkeit zum nächsten darauffolgenden Bankarbeitstag ein. Ist der Jahresabschluss der Emittentin für das vorausgegangene Geschäftsjahr in einem Jahr bis zum 30. September noch nicht endgültig festgestellt, ist die Verzinsung innerhalb von sieben Bankarbeitstagen nach endgültiger Feststellung des Jahresabschlusses zahlbar.
      Zahlt die Emittentin auf eine nach Maßgabe von Ziffer 3.4 aufgeschobene Schuld, gilt die Erfüllungswirkung jeweils für die älteste Schuld.
      Die Auszahlung von Zinsen durch die Emittentin erfolgt in USD."
      />
      <MRechtliche_Kachel
        title="LAUFZEIT, KÜNDIGUNG UND RÜCKZAHLUNG
        "
        Beschreibung="Die Laufzeit der tokenisierten Genussrechte beginnt am 1. Juli 2020 und endet spätestens mit Ablauf des 30. Juni 2035, ohne dass es einer Kündigung bedarf. Den Genussrechtsinhabern steht ein Recht zur ordentlichen Kündigung der tokenisierten Genussrechte zu keinem Zeitpunkt zu. Das gesetzliche Recht der Genussrechtsinhaber zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Die Emittentin ist zur einheitlichen ordentlichen Kündigung aller tokenisierten Genussrechte unter Einhaltung einer Kündigungsfrist von drei Monaten durch Bekanntmachung gemäß Ziffer 14 berechtigt jeweils zum Ende des Monats Oktober, frühestens jedoch zum Ende des Oktober 2023 berechtigt. Nach der Beendigung der Laufzeit der tokenisierten Genussrechte ist das Genusskapital durch die Emittentin an die Genussrechtsinhaber in Höhe des Nennbetrags der tokenisierten Genussrechte zurückzuzahlen. Der Rückzahlungsanspruch der Genussrechtsinhaber ist 30 Tage nach Eintritt der Beendigung der Laufzeit zur Zahlung fällig. Ist der Fälligkeitstag kein Bankarbeitstag, wird die Zahlung am darauffolgenden Bankarbeitstag fällig. Die Rückzahlung des Genussrechtskapitals durch die Emittentin erfolgt in USD."
      />
      <MRechtliche_Kachel
        title="QUALIFIZIERTER RANGRÜCKTRITT"
        Beschreibung="Die Genussrechtsinhaber treten mit ihren Ansprüchen aus den tokenisierten Genussrechten entsprechend § 39 Abs. 2 der Insolvenzordnung (InsO) dergestalt im Rang hinter die Forderungen aller bestehenden und künftigen Gläubiger der Emittentin zurück, dass sie erst nach Befriedigung sämtlicher Gesellschaftsgläubiger und, soweit ein Liquidationsüberschuss oder ein die sonstigen Verbindlichkeiten übersteigendes Vermögen der Gesellschaft hierfür zur Verfügung steht, nur zugleich mit, im Rang jedoch vor den Einlagerückgewähransprüchen der Gesellschafter der Emittentin Erfüllung dieser Ansprüche verlangen können. Die Geltendmachung von Ansprüchen aus den tokenisierten Genussrechten ist zudem solange und soweit ausgeschlossen, wie die Befriedigung der Ansprüche einen Grund zur Eröffnung eines Insolvenzverfahrens herbeiführen würde."
      />
      <MRechtliche_Kachel
        title="ÜBERTRAGUNG DER TOKENISIERTEN GENUSSRECHTE"
        Beschreibung="Die Übertragung der tokenisierten Genussrechte an Dritte ist für die Genussrechtsinhaber jederzeit möglich.Sie erfolgt im Wege der Abtretung der in den Green Ship Token verkörperten Rechte gemäß §§ 398ff. BGB. Die tokenisierten Genussrechte können jeweils nur mit allen sich aus diesen Bedingungen ergebenden Rechten und Pflichten übertragen werden. Die Emittentin willigt bereits jetzt in die Übertragung der sie treffenden Pflichten nach diesen Bedingungen auf den Dritten gemäß § 185 Abs. 1 BGB ein und verzichtet auf die Widerruflichkeit dieser Einwilligung nach § 183 BGB. Die Abtretung der Rechte und Pflichten aus diesen Bedingungen und damit die Übertragung der tokenisierten Genussrechte kann ausschließlich durch Übertragung des die tokenisierten Genussrechte repräsentierenden Green Ship Token unter zwingender Nutzung der Emissionsplattform an den Erwerber erfolgen. Der Erwerber kann Green Ship Token und die mit ihnen verknüpften Genussrechte ausschließlich nach erfolgreicher Registrierung bei der Emittentin über die Emissionsplattform erwerben. Der Erwerb setzt die Verwendung einer erfolgreich über die Emissionsplattform registrierte Blockchain Adresse für den Empfang der Green Ship Token voraus. Ein Angebot im Sinne des § 145 BGB auf Abtretung der tokenisierten Genussrechte gemäß diesen Bedingungen kann nur durch Übersendung des das tokenisierte Genussrecht repräsentierenden Green Ship Token an den Angebotsempfänger erfolgen. Die Annahme des Angebots durch den Angebotsempfänger erfolgt durch die aktive Erklärung der Annahme durch Bestätigung der Transaktion des Green Ship Token an die Blockchain-Adresse des Angebotsempfängers über die Acceptance-Funktion innerhalb der Emissionsplattform. Die Transaktion eines Green Ship Token wird erst in dem Moment auf der Ethereum-Blockchain ausgelöst, in dem die Annahme des Angebots durch Betätigung der Acceptance-Funktion erfolgt ist. Der Wechsel der Tokeninhaberschaft und damit die Abtretung der tokenisierten Genussrechte gilt als erfolgt, sobald die der Übertragung zugrundeliegende Transaktion mit mindestens zwölf Blocks in der Ethereum-Blockchain bestätigt wurde.Als Transaktionszeitpunkt gilt immer der Ausführungszeitpunkt des Blocks, in dem die Transaktion verarbeitet wurde. Die Aufzeichnung von Transaktionszeitpunkten erfolgt sekundengenau."
      />
      <MRechtliche_Kachel
        title="ZUGANGSVORAUSSETZUNGEN UND REGISTRIERUNG AUF DER EMISSIONSPLATTFORM"
        Beschreibung="Um Green Ship Token erwerben zu können, ist eine erfolgreiche Registrierung des Erwerbers über die Emissionsplattform unter Angabe aller dort abgefragten Daten sowie der Bestätigung erforderlich, dass der Zeichner erwerbsberechtigt nach Ziffer 7.2 ist.
        Zum Erwerb von Green Ship Token berechtigt sind alle natürlichen und juristischen Personen sowie Personengesellschaften mit Rechtspersönlichkeit, soweit sie die nachfolgenden Anforderungen erfüllen:
         Der Erwerber ist kein Staatsbürger der Vereinigten Staaten von Amerika (USA), Kanada, China,Australien oder Iran und hat keinen Wohnsitz bzw. Geschäftssitz im Hoheitsgebiet eines dieser Staaten;
         der Erwerber ist nicht Inhaber einer dauerhaften Aufenthalts oder Arbeitserlaubnis für die USA(Green Card) oder einer vergleichbaren Erlaubnis für Kanada, China, Australien oder Iran;
         der Erwerber ist keine Körperschaft oder sonstige nachdem Recht der USA oder deren Bundesstaaten, dem Recht Kanadas oder Chinas, Australiens oder Irans organisierte Vermögensmasse, deren Einkommen dem Steuerrecht einer der genannten Rechtsordnungen unterliegt;
         der Erwerber wird weder auf einer der Sanktionslisten der Europäischen Union noch der USA geführt.
        Handelt es sich bei dem Erwerber umeine natürliche Person, sind im Rahmender Registrierung nach Ziffer 7.1 folgende Angaben zu machen:
         Sämtliche Vor- und Nachnamen des Erwerbers;
         gemeldeter Erstwohnsitz des Erwerbers mit vollständiger Anschrift;
         Geburtsdatum des Erwerbers;
         Geburtsort des Erwerbers;
         Nationalität des Erwerbers; Nummer eines von der zuständigen Staatsbehörde auf den Erwerber ausgestellten Personalausweises oder Reisepasses;
         E-Mail-Adresse des Erwerbers.
        Handelt es sich bei dem Erwerber umeine juristische Person oder eine Personengesellschaft mit Rechtspersönlichkeit, sind im Rahmen der Registrierung nach Ziffer 7.1 folgende Angaben zu machen:
         Vollständige Firma und Rechtsform des Erwerbers;
         satzungsmäßiger bzw. in einem öffentlichen Register eingetragener Geschäftssitz des Erwerbers mit vollständiger Anschrift;
         (sofern vorhanden)Registernummer des Erwerbers im Handelsregister oder einem vergleichbaren öffentlichen Register;
         Name der satzungsmäßig vertretungsberechtigten Person bzw. Personen des Erwerbers;
         E-Mail-Adresse des Erwerbers.
        Soweit der Erwerber zur Versteuerung der Zahlungen aus den tokenisierten Genussrechten verpflichtet ist, hat der Erwerber im Rahmen der Registrierung zusätzlich folgende Angaben zu machen:
         Angabe der für den Erwerber zuständigen Finanzbehörde;
         Angabe der Steuernummer des Erwerbers bei der zuständigen Finanzbehörde;
         Angabe der persönlichen SteuerIdentifikationsnummer oder vergleichbaren Nummer des Erwerbers.
        Im Rahmen der Registrierung wird der Erwerber aufgefordert, eine Blockchain Adresse auf der Ethereum-Blockchain anzugeben, an die die zu erwerbenden Green Ship Token nach erfolgreicher Registrierung transferiert werden können.
        Der Erwerber hat im Rahmen der Registrierung ferner eine Bankverbindung anzugeben, auf die die Emittentin alle Zahlungen zur Erfüllung ihrer Verbindlichkeiten aus der Emission,insbesondere die Zahlung der Verzinsung sowie am Ende der Laufzeit die Rückzahlung des Nennbetrags überweisen soll. Die angegebene Bankverbindung kann während der Laufzeit der tokenisierten Genussrechte jederzeit über die Emissionsplattform geändert werden.
        Eine erfolgreiche Registrierung setzt voraus, dass die vom Erwerber nach Maßgabe der Ziffern 7.2 bis 7.7 angegebenen Daten vollständig sind und keine Anhaltspunkte dafür gegeben sind, dass der Erwerber fehlerhafte Angaben gemacht hat.Die Emittentin setzt den Erwerber in Kenntnis, sofern seine Registrierung erfolgreich war. Sie ist berechtigt, jedoch nicht verpflichtet, eine Prüfung der während der Registrierung angegebenen Daten durch geeignete Dritte durchführen zu lassen.
        Der Erwerber verpflichtet sich,Änderungen der gemäß 7.2 bis 7.8 gemachten Angaben der Emittentin unverzüglich anzuzeigen. Die Anzeige erfolgt über die Emissionsplattform."
      />
      <MRechtliche_Kachel
        title="VERZICHT AUF EINWENDUNGEN NACH §404 BGB AUSSER EINREDEN DER ERFÜLLUNGU ND VERJÄHRUN"
        Beschreibung="Die Emittentin verzichtet gegenüber dem jeweiligen Genussrechtsinhaber auf die Einwendungen und Einreden, die ihr gegen den vorherigen Genussrechtsinhaber in Ansehung des Genussrechts zustanden, mit Ausnahme der Einrede der Erfüllung der Verbindlichkeit sowie der Einrede der Verjährung. Der Verjährungsverzicht nach Ziffer 3.5 bliebt unberührt Einreden und Einwendungen, die der Emittentin gegen den aktuellen Genussrechtsinhaber direkt zustehen sind nicht Gegenstand des Verzichts nach Ziffer 8.1."
      />
      <MRechtliche_Kachel
        title="AUSZAHLUNG VON ZINSEN,RÜCKZAHLUNG DES GENUSSKAPITALS,TRANSAKTIONSKOSTEN, STEUERN"
        Beschreibung="Zum Empfang des das tokenisierte Genussrecht nach diesen Bedingungen repräsentierenden Green Ship Token und damit zur Erlangung der Gläubigerstellung in Bezug auf das tokenisierte Genussrecht wird entsprechend Ziffer 7.6 zwingend eine Blockchain-Adresse auf der Ethereum Blockchain benötigt, die im Rahmen der Registrierung bei der Emittentin über die Emissionsplattform vom potenziellen Genussrechtserwerber anzugeben ist.Zudem wird der potenzielle Genussrechtserwerber im Rahmen der Registrierung nach Maßgabe von Ziffer 7.7 aufgefordert, ein Bankkonto zu benennen,auf das die Emittentin bei entsprechendem Zahlungsanspruch des Genussrechtsinhabers die Zinsen sowie am Ende der Laufzeit den Rückzahlungsbetrag überweisen soll. Jede registrierte Blockchain-Adresse ist auf diese Weise mit einem Bankkonto verknüpft. Sämtliche Zahlungen der Emittentin zur Erfüllung ihrer Verbindlichkeiten aus den tokenisierten Genussrechten erfolgen in USD von einem USD-Bankkonto der Emittentin ausschließlich auf gemäß 9.1 registrierte Bankkonten. Sämtliche Gebühren und Kosten für eine etwaiger forderliche Währungskonvertierung oder Auslandsüberweisung tragen die Genussrechtsinhaber. .Zahlungen der Emittentin an die in der Emissionsplattform angegebene Bankverbindung zur Erfüllung ihrer Verbindlichkeiten aus den tokenisierten Genussrechten befreien die Emittentin von ihrer Verbindlichkeit gegenüber dem Genussrechtsinhaber. Soweit die Emittentin oder ein von ihr beauftragter Dritter zur Einbehaltung und Abführung von Abzugs- und Ertragssteuern in Bezug auf die Verbindlichkeiten aus den tokenisierten Genussrechten verpflichtet ist, mindern sich die Auszahlungen der Emittentin entsprechend. Die Genussrechtsinhaber tragen sämtliche auf die tokenisierten Genussrechte entfallenden persönlichen Steuern."
      />
      <MRechtliche_Kachel
        title="EINSATZ DES GENUSSKAPITALS"
        Beschreibung="Die Emittentin kann das Genussscheinkapital uneingeschränkt für alle nach ihrer Satzung zulässigen Zwecke einsetzen."
      />
      <MRechtliche_Kachel
        title="AUSGABE WEITERER GENUSSRECHTE"
        Beschreibung="Die Emittentin behält sich vor, weitere Genussrechte zu gleichen oder anderen Bedingungen auszugeben. Die Genussrechtsinhaber haben keinen Anspruch darauf, dass ihre Ansprüche aus den tokenisierten Genussrechten vorrangig vor den Ansprüchen bedient werden, die auf weitere Genussrechte entfallen. Die Ansprüche aus weiteren Genussrechten dürfen nicht vorrangig bedient werden."
      />
      <MRechtliche_Kachel
        title="BESTANDSGARANTIEN"
        Beschreibung="Der Bestand der tokenisierten Genussrechte wird weder durch eine Verschmelzung, eine Rechtsformänderung, eine Umwandlung oder durch eine Änderung des gezeichneten Kapitals der Emittentin berührt. Die gläubigerschützen den Vorschriften der §§ 204, 23 des Umwandlungsgesetzes bleiben unberührt."
      />
      <MRechtliche_Kachel
        title="ERWERB EIGENER TOKENISIERTER GENUSSRECHTE"
        Beschreibung="Mit dem Beschluss der Gesellschafterversammlung vom 6. März 2020 wurde die Geschäftsführung der Emittentin ermächtigt, jederzeit eigene tokenisierte Genussrechte nach diesen Bedingungen zurück zu erwerben. Die Emittentin kann zurück erworbene eigene Genussrechte einziehen oder diese wieder weiterveräußern."
      />
      <MRechtliche_Kachel
        title="MITTELVERWENDUNGSKONTROLLE"
        Beschreibung="Die Emittentin wird eine Wirtschaftsprüfungsgesellschaft, die weder als Jahresabschlussprüferin der Emittentin noch einer der Unternehmensgruppe der Emittentin zugehörigen Gesellschaft bestellt ist und auch im Übrigen in keiner weiteren Geschäftsbeziehung mit der Emittentin steht (Mittelverwendungskontrolleurin),damit beauftragen, jeweils nach Ablauf eines Geschäftsjahres zu prüfen, ob die Emittentin die über die Ausgabe der nachrangigen tokenisierten Genussrechte eingesammelten Gelder entsprechend ihres in ihrer Satzung festgelegten Geschäftsgegenstands verwendet hat.Das Prüfungsergebnis der Mittelverwendungskontrolleurin wird die Emittentin auf ihrer Internetseite https://greenshiptoken.com unverzüglich,spätestens jedoch binnen drei Werktagen nach Erhalt des Prüfungsergebnisses veröffentlichen."
      />
      <MRechtliche_Kachel
        title="BEKANNTMACHUNGEN"
        Beschreibung="Die tokenisierten Genussrechte betreffende Bekanntmachungen (z.B. die Geltendmachung eines Kündigungsrechts gemäß Ziffer 4.3) erfolgen im elektronischen Bundesanzeiger und auf der von der Emittentin betriebenen Internetseite https://greenshiptoken.com. Jede Mitteilung gilt am dritten Tag nachdem Tag ihrer Veröffentlichung als wirksam erfolgt und den Genussrechtsinhabern zugegangen."
      />
    </div>
  ) : (
    ""
  );
}
export default Mobile_Fix_Header;
