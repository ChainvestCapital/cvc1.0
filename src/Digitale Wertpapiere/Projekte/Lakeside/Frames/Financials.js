import "./Financials.css";
import W20P from "../../../Components/HighlightBox";

function Financials(props) {
  return props.trigger ? (
    <div>
      <div id="Überblick_UEBER_Wrapper">
        <div id="GP_Überblick_FirstRow">
          <W20P Text="5,95 % p.a." title="Progn. Gesamtrendite" />
          <W20P Text="15 Jahre" title="Laufzeit" />
          <W20P
            Text="
            2,35 %"
            title="Progn. Ausschüttung"
          />
          <W20P Text="3,6 % p.a." title="Progn. Wertentwicklung" />
        </div>
        <div id="margin_top_2vh"></div>
        <div id="UeberSee_Financial_White_Var">
          <h2 id="UeberSee_Financial_White_Var_h3">
            Prog. Durchschnittsrendite 2,35 % p.a.
          </h2>{" "}
          <div id="margin_top_2vh"></div>
          <h5 id="UeberSee_Financial_White_Var_h5">
            Bewirtschaftung Jahresdurchschnitt (15 Jahre Laufzeit)
          </h5>{" "}
          <div id="margin_top_2vh"></div>
          <div id="UeberSee_Financial_White_Var_Bottom">
            <div id="UeberSee_Financial_White_Var_B_Left">
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">
                  Nettokaltmieteeinnahmen
                </h3>
                <h3 id="GP_Financials_Big_Spalte_h3">32.603 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Hausveraltung</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-3.563 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Managementkosten</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-2.539 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">
                  Instandhaltungskosten
                </h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-927 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Mietausfall</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-548 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">
                  Zinszahlung Bankdarlehen
                </h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-7.715 €</h3>
              </div>
              <div id="GP_Financials_Big_Spalte_Gesamt">
                <h3 id="GP_Financials_Big_Spalte_h3">Liquiditätserfolg</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">17.311 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Tilgung Bankdarlehen</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-6.815 €</h3>
              </div>{" "}
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Liquiditätspuffer</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-863 €</h3>
              </div>{" "}
              <div id="GP_Financials_Big_Spalte_Gesamt">
                <h3 id="GP_Financials_Big_Spalte_h3">Ausschüttung</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">9.633 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">In Prozent</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">2,35 %</h3>
              </div>
            </div>
            <div id="margin_top_2vh"></div>
            <div id="margin_top_2vh"></div>
            <div id="UeberSee_Financial_White_Var_Right">
              <h3 id="GP_Financials_Big_Spalte_h3">
                Bewirtschaftung Jahresdurchschnitt (15 Jahre Laufzeit)
              </h3>{" "}
              <div id="margin_top_2vh"></div>
              <div id="margin_top_2vh"></div>
              <h5 id="UeberSee_Financial_White_Var_h5">
                Mit einer prognostizierten Laufzeit von 15 Jahren sind alle
                ersichtlichen Kosten, die während der Bewirtschaftungsphase
                entstehen, nach besten Wissen und Gewissen kalkuliert worden.
                Das Bankdarlehen hat voraussichtlich einen Sollzins von 1,30 %
                p.a. und einer anfänglichen Tilgung von 1,00 % p.a. zzgl.
                ersparter Zinsen. Bei der Kalkulation handelt es sich um einen
                15-Jahres-Durchschnitt. Dieser beinhaltet einen Leerstand in den
                ersten 19 Monaten bis zur angegebenen Fertigstellung und einen
                zusätzlichen kalkulatorischen Sicherheitspuffer von fünf Monaten
                Leerstand.
              </h5>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div id="margin_top_2vh"></div>
        <div id="margin_top_2vh"></div>

        <div id="UeberSee_Financial_White_Var">
          {" "}
          <div id="UeberSee_Financial_White_Var_Bottom">
            <div id="UeberSee_Financial_White_Var_B_Left">
              <h2 id="UeberSee_Financial_White_Var_h3">
                Prog. Wertentwicklung 3,60 % p.a.
              </h2>{" "}
              <div id="margin_top_2vh"></div>
              <div id="margin_top_2vh"></div>
              <div id="margin_top_2vh"></div>{" "}
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Verkaufspreis</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">1.279.076 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Performancekosten</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-61.666 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Restschuld Bank</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-556.003 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">
                  Schuldverschreibungskapital
                </h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-409.906 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Verkaufskosten</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-30.133 €</h3>
              </div>
              <div id="margin_top_2vh"></div>
              <div id="GP_Financials_Big_Spalte_Gesamt">
                <h3 id="GP_Financials_Big_Spalte_h3">Verkaufserlös</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">221.368 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Wertentwicklung</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">3,6 % p.a.</h3>
              </div>
              <div id="margin_top_2vh"></div>
            </div>{" "}
            <div id="margin_top_2vh"></div>
            <div id="margin_top_2vh"></div>{" "}
            <div id="UeberSee_Financial_White_Var_Right">
              <h5 id="UeberSee_Financial_White_Var_h5">
                Die prognostizierte Wertentwicklung von ø 3,60% p.a. ergibt sich
                aus der Wertsteigerung der Immobilie(n) und der Tilgung des
                Bankdarlehens. Diese Verzinsung können Sie über einen
                erfolgreichen Verkauf Ihrer „digitalen Anteile“ auf dem
                Zweitmarkt realisieren, spätestens jedoch durch den Verkauf der
                Immobilie(n) seitens der Emittentin. Es ist kein garantierter
                Festzins. Werden die „digitalen Anteile" auf dem Zweitmarkt
                verkauft, ist die Gesamtrendite abhängig von dem Verkaufspreis.
              </h5>{" "}
              <div id="margin_top_2vh"></div>
              <h3 id="GP_Financials_Small_Spalte_h3">Wertsteigerung</h3>
              <h5 id="UeberSee_Financial_White_Var_h5">
                Es deuten sowohl Marktprognosen als auch zahlreiche weitere
                Indikatoren auf eine sehr positive Wertentwicklung der Immobilie
                hin. Nach Abzug potentieller Risiken prognostizieren wir eine
                durchschnittliche Wertsteigerung der Immobilie(n) von ø 1,94%
                p.a. über einen Zeitraum von 15 Jahren. Weitere Informationen
                dazu finden Sie in unserer Knowledge Base.
              </h5>{" "}
              <div id="margin_top_2vh"></div>
              <h3 id="GP_Financials_Small_Spalte_h3">Tilgung</h3>
              <h5 id="UeberSee_Financial_White_Var_h5">
                Das prognostizierte Bankdarlehen hat einen anfänglichen
                Tilgungssatz von 1,00% p.a. zzgl. ersparter Zinsen. Durch die
                Rückführung des Bankdarlehens wird über einen Zeitraum von 15
                Jahren ein durchschnittlicher Tilgungsgewinn 1,66% p.a.
                prognostiziert.
              </h5>
            </div>{" "}
          </div>
        </div>
      </div>{" "}
    </div>
  ) : (
    ""
  );
}

export default Financials;
