import "./Financials.css";
import FH_Financials_Mittelherkunft from "../../../../assets/images/FH_Mittelherkunft.png";
import FH_Financials_Mittelnutzung from "../../../../assets/images/FH_Mittelverwendung.png";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";

function Financials(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="5,75 % p.a." title="Gesamtrendite" />
        <W50_h1SW Text="15 Jahre" title="Laufzeit" />
      </div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="
          2,25 %"
          title="Progn. Ausschüttung"
        />
        <W50_h1SW Text="3,5 % p.a." title="Progn. Wertentwicklung" />
      </div>
      <div id="Mobile_White_Var_W100">
        <h2 id="mw100_hx_h3"> Prog. Durchschnittsrendite 2,25 % p.a.</h2>{" "}
        <div id="margin_top_2vh"></div>
        <h5 id="mw100_hx_h5">
          Bewirtschaftung Jahresdurchschnitt (15 Jahre Laufzeit)
        </h5>{" "}
        <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Nettokaltmieteeinnahmen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">36.288 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Hausveraltung</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-2.607 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Managementkosten</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-3.868 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Instandhaltungskosten</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-2.078 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Mietausfall</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-774 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Zinsen Bankdarlehen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-7.118 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Liquiditätserfolg</h3>
          <h3 id="GP_FIN_MOB_Big_h2">19.842 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Tilgung Bankdarlehen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-8.057 €</h3>
        </div>{" "}
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Ausschüttung</h3>
          <h3 id="GP_FIN_MOB_Big_h2">11.784 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">In Prozent</h3>
          <h3 id="GP_FIN_MOB_Big_h2">2,25 %</h3>
        </div>
        <div id="margin_top_2vh"></div>
        <div id="margin_top_2vh"></div>
        <h5 id="mw100_hx_h5">
          In dem Fall, dass die Emittentin keine Bankenfinanzierung aufgrund von
          verschlechterten Finanzierungskonditionen annimmt oder ihr kein
          Bankdarlehen gewährt wird, würde der Erwerb der Wohnungen überwiegend
          oder vollständig aus im Rahmen der tokenisierten Schuldverschreibungen
          eingesammeltem Kapital finanziert werden. Möglicherweise wirkt sich
          dies negativ auf sowohl die Ausschüttung als auch Wertentwicklung aus.
          Insbesondere kann nicht ausgeschlossen werden, dass mangels
          Bankenfinanzierung weniger Immobilien als ursprünglich geplant
          erworben werden. *Prognosen sind kein zuverlässiger Indikator für die
          künftige Wertentwicklung.
        </h5>{" "}
      </div>{" "}
      <div id="margin_top_2vh"></div>
      <div id="margin_top_2vh"></div>
      <div id="Mobile_White_Var_W100">
        <h2 id="mw100_hx_h3"> Prog. Durchschnittsrendite 3,50 % p.a.</h2>{" "}
        <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Verkaufspreis</h3>
          <h3 id="GP_FIN_MOB_Big_h2">1.408.462 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Performancegebühr</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-123.667 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Schuldverschreibungs-kapital</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-523.219 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Tilgung Bankdarlehen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-488.206 €</h3>
        </div>
        <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Verkaufserlös</h3>
          <h3 id="GP_FIN_MOB_Big_h2">273.370 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Wertentwicklung</h3>
          <h3 id="GP_FIN_MOB_Big_h2">3,5 % p.a.</h3>
        </div>
        <div id="margin_top_2vh"></div>
        <h5 id="mw100_hx_h5">
          So ergibt sich bei einem 15-Jahres-Durchschnitt für das Projekt Four
          Trees! eine prognostizierte Wertentwicklung von ø 3,5 % pro Jahr.
          Diese Verzinsung können Sie über einen erfolgreichen Verkauf Ihrer
          Schuldverschreibungen auf dem Zweitmarkt realisieren, spätestens
          jedoch durch den Verkauf der Immobilie(n) seitens der Emittentin. Es
          ist kein garantierter
        </h5>{" "}
        <div id="margin_top_2vh"></div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Financials;
