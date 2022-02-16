import "./Financials.css";
import FH_Financials_Mittelherkunft from "../../../../assets/images/FH_Mittelherkunft.png";
import FH_Financials_Mittelnutzung from "../../../../assets/images/FH_Mittelverwendung.png";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";

function Financials(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="5,95 % p.a" title="Gesamtrendite" />
        <W50_h1SW Text="15 Jahre" title="Laufzeit" />
      </div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="
      2,35 %"
          title="Progn. Ausschüttung"
        />
        <W50_h1SW Text="3,6 % p.a." title="Progn. Wertentwicklung" />
      </div>
      <div id="Mobile_White_Var_W100">
        <h2 id="mw100_hx_h3"> Prog. Durchschnittsrendite 2,35 % p.a.</h2>{" "}
        <div id="margin_top_2vh"></div>
        <h5 id="mw100_hx_h5">
          Bewirtschaftung Jahresdurchschnitt (15 Jahre Laufzeit)
        </h5>{" "}
        <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Nettokaltmieteeinnahmen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">32.603 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Hausveraltung</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-3.563 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Managementkosten</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-2.539 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Instandhaltungskosten</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-927 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Mietausfall</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-548 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Zinszahlung Bankdarlehen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-7.715 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Liquiditätserfolg</h3>
          <h3 id="GP_FIN_MOB_Big_h2">17.311 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Tilgung Bankdarlehen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-6.815 €</h3>
        </div>{" "}
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Liquiditätspuffer</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-863 €</h3>
        </div>{" "}
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Ausschüttung</h3>
          <h3 id="GP_FIN_MOB_Big_h2">9.633 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">In Prozent</h3>
          <h3 id="GP_FIN_MOB_Big_h2">2,35 %</h3>
        </div>
        <div id="margin_top_2vh"></div>
        <div id="margin_top_2vh"></div>
        <h5 id="mw100_hx_h5">
          Mit einer prognostizierten Laufzeit von 15 Jahren sind alle
          ersichtlichen Kosten, die während der Bewirtschaftungsphase entstehen,
          nach besten Wissen und Gewissen kalkuliert worden. Das Bankdarlehen
          hat voraussichtlich einen Sollzins von 1,30 % p.a. und einer
          anfänglichen Tilgung von 1,00 % p.a. zzgl. ersparter Zinsen. Bei der
          Kalkulation handelt es sich um einen 15-Jahres-Durchschnitt. Dieser
          beinhaltet einen Leerstand in den ersten 19 Monaten bis zur
          angegebenen Fertigstellung und einen zusätzlichen kalkulatorischen
          Sicherheitspuffer von fünf Monaten Leerstand.
        </h5>{" "}
      </div>{" "}
      <div id="margin_top_2vh"></div>
      <div id="margin_top_2vh"></div>
      <div id="Mobile_White_Var_W100">
        <h2 id="mw100_hx_h3"> Prog. Durchschnittsrendite 3,60 % p.a.</h2>{" "}
        <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Verkaufspreis</h3>
          <h3 id="GP_FIN_MOB_Big_h2">1.279.076 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Performancekosten</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-61.666 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Restschuld Bank</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-556.003 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Schuldverschreibungs-kapital</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-409.906 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Verkaufskosten</h3>
          <h3 id="GP_FIN_MOB_Big_h2">-30.133 €</h3>
        </div>
        <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Verkaufserlös</h3>
          <h3 id="GP_FIN_MOB_Big_h2">221.368 €</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Wertentwicklung</h3>
          <h3 id="GP_FIN_MOB_Big_h2">3,6 % p.a.</h3>
        </div>
        <div id="margin_top_2vh"></div>
        <h5 id="mw100_hx_h5">
          Die prognostizierte Wertentwicklung von ø 3,60% p.a. ergibt sich aus
          der Wertsteigerung der Immobilie(n) und der Tilgung des Bankdarlehens.
          Diese Verzinsung können Sie über einen erfolgreichen Verkauf Ihrer
          „digitalen Anteile“ auf dem Zweitmarkt realisieren, spätestens jedoch
          durch den Verkauf der Immobilie(n) seitens der Emittentin. Es ist kein
          garantierter Festzins. Werden die „digitalen Anteile" auf dem
          Zweitmarkt verkauft, ist die Gesamtrendite abhängig von dem
          Verkaufspreis.
        </h5>{" "}
        <div id="margin_top_2vh"></div>
        <h3 id="GP_FIN_MOB_Big_h2">Wertsteigerung</h3>
        <h5 id="mw100_hx_h5">
          Es deuten sowohl Marktprognosen als auch zahlreiche weitere
          Indikatoren auf eine sehr positive Wertentwicklung der Immobilie hin.
          Nach Abzug potentieller Risiken prognostizieren wir eine
          durchschnittliche Wertsteigerung der Immobilie(n) von ø 1,94% p.a.
          über einen Zeitraum von 15 Jahren. Weitere Informationen dazu finden
          Sie in unserer Knowledge Base.
        </h5>{" "}
        <div id="margin_top_2vh"></div>
        <h3 id="GP_FIN_MOB_Big_h2">Tilgung</h3>
        <h5 id="mw100_hx_h5">
          Das prognostizierte Bankdarlehen hat einen anfänglichen Tilgungssatz
          von 1,00% p.a. zzgl. ersparter Zinsen. Durch die Rückführung des
          Bankdarlehens wird über einen Zeitraum von 15 Jahren ein
          durchschnittlicher Tilgungsgewinn 1,66% p.a. prognostiziert.
        </h5>{" "}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Financials;
