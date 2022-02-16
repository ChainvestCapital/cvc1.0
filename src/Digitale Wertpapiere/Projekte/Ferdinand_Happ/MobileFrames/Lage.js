import "./Lage.css";
import FINEXITY_FH_Mikrolage from "../../../../assets/images/FINEXITY_FH_Mikrolage.jpg";
import FINEXITY_FH_Makrolage from "../../../../assets/images/FINEXITY_FH_Makrolage.jpg";

function Lage(props) {
  return props.trigger ? (
    <div>
      <div id="GP_Mob_Lage_Wrapper">
        <div id="Mobile_White_W100_HX">
          <h3 id="GP_Mob_Lage_W100_h3">Mikrolage</h3>
          <h4 id="GP_Mob_Lage_W100_h4">Innenstadt IV - Ostend</h4>
          <img
            src={FINEXITY_FH_Mikrolage}
            id="Mobile_White_W100_HX_Img"
            alt=""
          />
          <h5 id="GP_Mob_Lage_W100_h6">
            Das ehemalige Arbeiterviertel Ostend durchlief in den letzten
            Jahrzehnten einen enormen Wandel und zählt heute zu den gefragtesten
            Trendvierteln der Finanzmetropole. Neben einem direkten Zugang zum
            Main und der guten Anbindung durch den Frankfurter Ostbahnhof ist
            das Viertel vor allem durch den Hauptsitz der Europäischen
            Zentralbank (EZB) bekannt. Zu dem großen Angebot an Freizeit- und
            Kulturangeboten zählen unter anderem der beliebte Ostpark oder der
            Frankfurter Zoo. Zu den bekanntesten Arbeitgebern des Stadtteils
            zählen neben der EZB vor allem die regionalen Hauptniederlassungen
            bekannter Automobilhersteller wie Porsche, Audi und BMW.
          </h5>
        </div>

        <div id="Mobile_White_W100_HX">
          <h3 id="GP_Mob_Lage_W100_h3">Makrolage</h3>
          <h4 id="GP_Mob_Lage_W100_h4">
            Frankfurt – Das Zentrum der Finanzwelt
          </h4>
          <img
            src={FINEXITY_FH_Makrolage}
            id="Mobile_White_W100_HX_Img"
            alt=""
          />

          <h5 id="GP_Mob_Lage_W100_h5">
            Frankfurt – Finanzzentrum Deutschlands und Drehscheibe Europas
          </h5>
          <h5 id="GP_Mob_Lage_W100_h6">
            Frankfurt ist der Wirtschaftsmotor des Rhein-Main-Gebiets und mit
            knapp 900.000 Einwohnern die fünftgrößte Stadt Deutschlands. Bekannt
            ist Frankfurt zudem als das Finanzzentrum Deutschlands, mit einer
            Ansammlung an international renommierten Banken und Versicherungen.
            651.800 Arbeitnehmer sind für 63.644 Unternehmen in Frankfurt tätig.
            Allein die Top 10 Unternehmen Frankfurts (1. Deutsche Lufthansa AG,
            ca. 37.400 Mitarbeiter; 2. Deutsche Bahn AG, ca. 25.100 Mitarbeiter;
            3. Fraport Konzern, ca. 20.700 Mitarbeiter, etc.) können mehr als
            175.300 Angestellte vorweisen. Dies bedeutet eine Arbeitslosenquote
            von 4,8% und eine Kaufkraft von 26.265 € pro Einwohner.
            <br></br> <br></br>
            91.000 nationale wie internationale Berufstätige Zuzügler suchen
            jährlich nach Wohnraum in der Mainmetropole. Weiterhin sind viele
            weitere produzierende Unternehmen in der Umgebung rund um Frankfurt
            angesiedelt, welche durch das Bahnnetz gut zu erreichen sind.
            Darüber hinaus ist der Flughafen, als umschlagstärkster Flughafen
            Europas, eine treibende Kraft hinter dem Erfolg der Region und
            bietet sowohl produzierenden Unternehmen, als auch Dienstleistern
            einen Wettbewerbsvorteil. Zusätzlich wird Frankfurt durch 13
            ICE-Linien mit anderen deutschen Metropolen verbunden. Destinationen
            wie Hamburg sind in weniger als 4 Stunden, Köln in 1,5 Stunden und
            bspw. Paris in nur 3,5 Stunden zu erreichen. Durch die
            wirtschaftliche Stärke der Region mitsamt ihrer Vielzahl und
            Vielfalt an Arbeitsplätzen erfreut sich Frankfurt einer ungebremsten
            Immobiliennachfrage. Weitere Effekte, wie der bevorstehende Brexit,
            verstärken diese Nachfrage zusehends.
          </h5>

          <h5 id="GP_Mob_Lage_W100_h5">Erholung und Natur</h5>
          <h5 id="GP_Mob_Lage_W100_h6">
            Neben der wirtschaftlichen Stärke bietet der Großraum Frankfurt auch
            ein breites Angebot für Naturfreunde. Die direkte Nähe zum Taunus
            ermöglicht es leicht, Wanderungen im Grünen zu unternehmen.
            Weiterhin bietet die Region rund um den Main ein bestens ausgebautes
            Fahrradwegenetz. Frankfurt kann auch mit Sehenswürdigkeiten und
            kulturellem Angebot überzeugen. Beispiele sind zahlreiche Messen,
            wie die Buchmesse, der Palmengarten, die alte Oper, das Museumsufer,
            die Paulskirche und die Katharinenkirche, der Frankfurter Römerberg
            mit der „neuen Altstadt“ oder der Frankfurter Zoo. Das
            Museumsuferfest in Frankfurt ist eines der größten städtischen Feste
            Deutschlands. Darüber hinaus ist auch das Berger Straßenfest und das
            Worldclubdome-Festival überregional bekannt.
          </h5>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Lage;
