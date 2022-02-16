import "./Lage.css";
import FINEXITY_FH_Mikrolage from "../../../../assets/images/FINEXITY_FH_Mikrolage.jpg";
import FINEXITY_FH_Makrolage from "../../../../assets/images/FINEXITY_FH_Makrolage.jpg";

function Lage(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_White_W100_HX">
        <h3 id="GP_Mob_Lage_W100_h3">Mikrolage</h3>
        <h4 id="GP_Mob_Lage_W100_h4">HafenCity</h4>

        <h5 id="GP_Mob_Lage_W100_h6">
          Die Hafencity ist Europas größtes innerstädtisches
          Stadtentwicklungsvorhaben und dient als Vorzeigemodell für die neue
          nachhaltige europäische City am Wasser. Auf einer Gesamtfläche von 157
          ha entsteht Wohnraum für über 15.000 Menschen sowie
          Dienstleistungsflächen für bis zu 45.000 Arbeitsplätzen. Darüber
          hinaus bietet der Stadtteil am Wasser nicht nur verschiedene
          Bildungseinrichtungen wie Kitas, Schulen und Universitäten, sondern
          empfängt die Bewohner und Touristen mit einem üppigen Angebot an
          Gastronomie, Einzelhandel, Kultur- und Freizeitangebote sowie
          Nah-Erholungszonen wie Parks, Plätze und Promenaden.
        </h5>

        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/%C3%9Cberseealle_Mikro_1.jpg"
          id="Mobile_White_W100_HX_Img"
          alt=""
        />

        <h5 id="GP_Mob_Lage_W100_h6">
          Die Überseeallee führt zentral durch die Hafencity und bietet
          Anbindungen an alle wichtigen Verkehrsknotenpunkte südlich- und
          nördlich der Elbe. In direkter Umgebung finden sich Geschäfte für alle
          Einkäufe des täglichen Bedarfs sowie eine Vielzahl an Kultur- und
          Freizeitangeboten. Direkt vor der Haustür befindet sich die
          U-Bahnstation "Überseequartier", mit welcher der Jungfernstieg und
          weitere Knotenpunkte des öffentlicher Personennahverkehr innerhalb von
          wenigen Minuten zu erreichen sind.
        </h5>

        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/%C3%9Cberseealle_Mikro_2.jpg"
          id="Mobile_White_W100_HX_Img"
          alt=""
        />
      </div>

      <div id="Mobile_White_W100_HX">
        <h3 id="GP_Mob_Lage_W100_h3">Makrolage</h3>
        <h4 id="GP_Mob_Lage_W100_h4">Hamburg – Das Tor zur Welt</h4>

        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/%C3%9Cberseealle_Makro.jpeg"
          id="Mobile_White_W100_HX_Img"
          alt=""
        />
        <h5 id="GP_Mob_Lage_W100_h6">
          Hamburg ist Deutschlands nördlichste A-Stadt, welcher es
          wirtschaftlich und kulturell an nichts mangelt. Mit rund 1,9 Mio.
          Einwohnern bietet die zweitgrößte Stadt Deutschlands alles was das
          Herz begehrt. Erkannt wurde dies schon seit Jahrzehnten, und doch
          zieht es immer noch Menschen aus aller Welt an. Auf der Suche nach
          einem Heim in einer Weltmetropole wird man hier fündig. So wundert es
          nicht, dass bis 2030 mit einem Bevölkerungswachstum von +5,5 %
          gerechnet wird. (Quelle: https://www.statistik-nord.de, 2020).{" "}
        </h5>

        <h4 id="GP_Mob_Lage_W100_h4">Hamburg – Das Tor zur Welt</h4>
        <h5 id="GP_Mob_Lage_W100_h6">
          Als Stadt voller Visionen, Veränderungen und Erneuerungen befindet
          sich Hamburg im ständigen Wandel. Das von Hochschulen, Kunsthäusern
          und Kultur geprägte Stadtbild lockt besonders junge Menschen mit
          vielversprechenden Karrierechancen. Mit einem Durchschnittsalter von
          42,3 Jahren blickt das jüngste Bundesland durch seine Kombination aus
          Weltoffenheit, Diversifikation und Lebensqualität in eine
          vielversprechende Zukunft. Mit einer sehr geringen Leerstandquote von
          0,5% und einem enormen Zuwachs von 20.000 bis 30.000 Einwohnern p.a.
          gehört Hamburg zu den Top-Immobilienstandorten Deutschlands. Aufgrund
          von starken Zuzügen aus dem Umland wird auch in Zukunft mit einer
          steigenden Nachfrage nach Immobilien gerechnet.
        </h5>
        <h4 id="GP_Mob_Lage_W100_h4">Starker Wohn- und Wirtschaftsstandort</h4>
        <h5 id="GP_Mob_Lage_W100_h6">
          Hamburg profitiert vom drittgrößten Containerhafen Europas. Ein
          Umschlagvolumen von jährlich ca. 135 Mio. Tonnen sowie der ideal
          gelegene Hafen verleihen der Stadt den Namen: Das Tor zur Welt. Doch
          nicht nur der Hafen – zahlreiche weitere Arbeitgeber aus
          unterschiedlichen Branchen und das vielfältige Angebot aus Bildung,
          Freizeit und Kultur machen in der Gesamtheit diese Stadt zu einer
          begehrten Metropole.
        </h5>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Lage;
