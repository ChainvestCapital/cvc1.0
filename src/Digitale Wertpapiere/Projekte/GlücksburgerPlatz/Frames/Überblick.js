import "./Überblick.css";

import W20P from "../../../Components/HighlightBox";
import W100_H1 from "../../../Components/W100_h1";
import W100_H2 from "../../../Components/W100_h2";
import W50_h1 from "../../../Components/W50_h1";
function Überblick(props) {
  return props.trigger ? (
    <div>
      <div id="Überblick_Wrapper_GP">
        <div id="GP_Überblick_FirstRow">
          <W20P
            Text="Marktwerteinschätzung liegt 91,4 % über dem Einkaufspreis"
            title="Highlight 1"
          />
          <W20P
            Text="Hoher Wertanstieg nach Wegfall der Mietpreisbindung"
            title="Highlight 2"
          />
          <W20P
            Text="ESG | Sozialer Wohnungsbau mit Mietpreisbindung"
            title="Highlight 3"
          />
          <W20P
            Text="ESG | Nachhaltig durch KFW-55 Bauweise"
            title="Highlight 4"
          />
        </div>
        <div id="margin_top_2vh">
          <W100_H1
            Text="Die aktuelle, indikative Marktwerteinschätzung für die Wohnungen ohne Mietpreisbindung liegt 91,4% über dem Einkaufspreis der Emittentin. Die unabhängige Marktwerteinschätzung finden Sie hier."
            title="Sehr attraktiver Einkaufspreis"
          />
        </div>
        <div id="margin_top_2vh"></div>
        <W100_H2
          Text="Der Hamburger Senat verlängerte die Bindungsfristen im geförderten Wohnungsbau des 1. und 2. Förderwegs im Jahre 2019 auf 20 Jahre. Ab 2021 liegt die Mindestlaufzeit bei mindestens 30 Jahren. Der 15 Jahresvertrag bei dem Projekt Glücksburger Platz!  wurde bereits im Jahre 2018 geschlossen und zählt zu den sehr seltenen Altverträgen mit verkürzter Laufzeit. Verträge mit Bindungsfristen von nur 15 Jahren werden nicht mehr geschlossen - dies ist eine einmalige Möglichkeit."
          title="Öffentlich rechtlicher Vertrag mit kurzer Laufzeit"
        />{" "}
        <div id="margin_top_2vh"></div>
        <div id="GP_Überblick_FirstRow">
          <W20P Text="21 Wohneinheiten" title="Projektumfang " />
          <W20P Text="2.435.000 €" title="Kaufpreis Immobilie" />
          <W50_h1
            Text="Eimsbütteler Straße 135, 22769 Hamburg"
            title="Adresse"
          />
        </div>{" "}
        <div id="margin_top_2vh"></div>
        <W100_H1
          Text="Die Wohneinheiten unterliegen 15 Jahre lang der Mietpreisbindung des 2. Förderwegs, welche eine Nettoanfangsmiete von 9,00€/m2 und eine maximale Nettomiete von 9,80€/m2 vorsieht. Nach Ablauf der 15 Jahren entfällt der öffentlich rechtliche Vertrag mit und die Wohnungen nehmen am regulären Mietmarkt ohne Einschränkungen teil."
          title="Soziale Mietpreisbindung"
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Überblick;
