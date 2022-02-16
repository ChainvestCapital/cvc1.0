import "./Financials.css";
import FH_Financials_Mittelherkunft from "../../../../assets/images/FH_Mittelherkunft.png";
import FH_Financials_Mittelnutzung from "../../../../assets/images/FH_Mittelverwendung.png";
import W50_h1SW from "../../../MobileComponents/W50_H1SWITCH";

function Financials(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW Text="5,00 % p.a." title="Gesamtrendite" />
        <W50_h1SW Text="15 Jahre" title="Laufzeit" />
      </div>
      <div id="Mobile_2_50_Row">
        <W50_h1SW
          Text="
        1,75 %"
          title="Progn. Ausschüttung"
        />
        <W50_h1SW Text="3,25 % p.a." title="Progn. Wertentwicklung" />
      </div>
      <div id="Mobile_White_Var_W100">
        <h2 id="mw100_hx_h3"> Prog. Durchschnittsrendite 1,75 % p.a.</h2>{" "}
        <div id="margin_top_2vh"></div>
        <h5 id="mw100_hx_h5">
          Bewirtschaftung Jahresdurchschnitt (15 Jahre Laufzeit)
        </h5>{" "}
        <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Nettokaltmieteeinnahmen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">20.603 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Hausveraltung</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-3.000 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Managementkosten</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-1.000 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Instandhaltungskosten</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-642 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Mietausfall</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-385 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Zinszahlung Bankdarlehen</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-3.871 €</h3>
        </div>{" "}
        <div id="margin_top_2vh"></div> <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Liquiditätserfolg</h3>
          <h3 id="GP_FIN_MOB_Big_h2">11.705 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Tilgung Bankdarlehen</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-5.391 €</h3>
        </div>{" "}
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Liquiditätspuffer</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-456 €</h3>
        </div>{" "}
        <div id="margin_top_2vh"></div> <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Ausschüttung</h3>
          <h3 id="GP_FIN_MOB_Big_h2">5.858 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">In Prozent</h3>
          <h3 id="GP_FIN_MOB_Small_h2">1,75 %</h3>
        </div>
      </div>{" "}
      <div id="margin_top_2vh"></div>
      <div id="margin_top_2vh"></div>
      <div id="Mobile_White_Var_W100">
        <h2 id="mw100_hx_h3"> Prog. Durchschnittsrendite 3,25 % p.a.</h2>{" "}
        <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Verkaufspreis</h3>
          <h3 id="GP_FIN_MOB_Big_h2">800.163 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Restschuld Bank</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-247.938 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Schuldverschreibungskapital</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-334.586 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Performancekosten</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-40.827 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Verkaufskosten</h3>
          <h3 id="GP_FIN_MOB_Small_h2">-13.503 €</h3>
        </div>
        <div id="margin_top_2vh"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Verkaufserlös</h3>
          <h3 id="GP_FIN_MOB_Big_h2">163.309 €</h3>
        </div>
        <div id="GP_FIN_MOB_Small">
          <h3 id="GP_FIN_MOB_Small_h2">Wertentwicklung</h3>
          <h3 id="GP_FIN_MOB_Small_h2">3,25 % p.a.</h3>
        </div>{" "}
        <div id="margin_top_2vh"></div>
        <h5 id="mw100_hx_h5">
          Die prognostizierte Wertentwicklung von durchschnittlich 3,25 % p.a.
          ergibt sich aus der Wertsteigerung der Immobilie(n) und der Tilgung
          des Bankdarlehens. Diese Verzinsung können Sie über einen
          erfolgreichen Verkauf Ihrer „digitalen Anteile“ auf dem Zweitmarkt
          realisieren, spätestens jedoch durch den Verkauf der Immobilie(n)
          seitens der Emittentin. Es ist kein garantierter Festzins. Werden die
          „digitalen Anteile" auf dem Zweitmarkt verkauft, ist die Gesamtrendite
          abhängig von dem Verkaufspreis.
        </h5>{" "}
        <div id="margin_top_2vh"></div>
        <h3 id="GP_FIN_MOB_Big_h2">Wertsteigerung</h3>
        <h5 id="mw100_hx_h5">
          FINEXITY kalkuliert mit einer durchschnittliche Wertsteigerung von ø
          1,55 % p.a. über einen Zeitraum von 15 Jahren. Weitere Informationen
          dazu finden Sie in unserer Knowledge Base.
        </h5>{" "}
        <div id="margin_top_2vh"></div>
        <h3 id="GP_FIN_MOB_Big_h2">Tilgung</h3>
        <h5 id="mw100_hx_h5">
          Das prognostizierte Bankdarlehen hat einen anfänglichen Tilgungssatz
          von 1,50 % p.a. zzgl. ersparter Zinsen. Durch die Rückführung des
          Bankdarlehens wird über einen Zeitraum von 15 Jahren ein
          durchschnittlicher Tilgungsgewinn 1,70 % p.a. prognostiziert.
        </h5>{" "}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Financials;
