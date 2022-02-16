import "./Financials.css";
import W20P from "../../../Components/HighlightBox";

function Financials(props) {
  return props.trigger ? (
    <div>
      <div id="Überblick_UEBER_Wrapper">
        <div id="GP_Überblick_FirstRow">
          <W20P Text="6,10 % p.a." title="Progn. Gesamtrendite" />
          <W20P Text="15 Jahre" title="Laufzeit" />
          <W20P
            Text="
            1,30 %"
            title="Progn. Ausschüttung"
          />
          <W20P Text="4,80 % p.a." title="Progn. Wertentwicklung" />
        </div>
        <div id="margin_top_2vh"></div>
        <div id="UeberSee_Financial_White_Var">
          <h2 id="UeberSee_Financial_White_Var_h3">
            Prog. Durchschnittsrendite 1,3 % p.a.
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
                <h3 id="GP_Financials_Big_Spalte_h3">16.134 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Hausveraltung</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-2.052 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Managementkosten</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-1.269 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">
                  Instandhaltungskosten
                </h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-443 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Mietausfall</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-381 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">
                  Zinszahlung Bankdarlehen
                </h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-2.891 €</h3>
              </div>
              <div id="GP_Financials_Big_Spalte_Gesamt">
                <h3 id="GP_Financials_Big_Spalte_h3">Liquiditätserfolg</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">9.098 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Tilgung Bankdarlehen</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-6.325 €</h3>
              </div>{" "}
              <div id="margin_top_2vh"></div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Liquiditätspuffer</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-651 €</h3>
              </div>
              <div id="margin_top_2vh"></div>
              <div id="GP_Financials_Big_Spalte_Gesamt">
                <h3 id="GP_Financials_Big_Spalte_h3">Ausschüttung</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">3.424 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">In Prozent</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">1,30 %</h3>
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
                Das Bankdarlehen hat voraussichtlich einen Sollzins von 1,11 %
                p.a. und einer anfänglichen Tilgung von 2,00 % p.a. zzgl.
                ersparter Zinsen. Bei der Kalkulation handelt es sich um einen
                15-Jahres-Durchschnitt. Dieser beinhaltet einen Leerstand in den
                ersten 24 Monaten bis zur angegebenen Fertigstellung. *Prognosen
                sind kein zuverlässiger Indikator für die künftige
                Wertentwicklung.
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
                Prog. Wertentwicklung 4,8 % p.a.
              </h2>{" "}
              <div id="margin_top_2vh"></div>
              <div id="margin_top_2vh"></div>
              <div id="margin_top_2vh"></div>{" "}
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Verkaufspreis</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">736.086 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Restschuld Bank</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-215.609 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">
                  Schuldverschreibungskapital
                </h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-264.105 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Performancekosten</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-52.142 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Verkaufskosten</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-13.920 €</h3>
              </div>
              <div id="margin_top_2vh"></div>
              <div id="GP_Financials_Big_Spalte_Gesamt">
                <h3 id="GP_Financials_Big_Spalte_h3">Verkaufserlös</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">190.310 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Wertentwicklung</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">4,80 % p.a.</h3>
              </div>
              <div id="margin_top_2vh"></div>
            </div>{" "}
            <div id="margin_top_2vh"></div>
            <div id="margin_top_2vh"></div>{" "}
            <div id="UeberSee_Financial_White_Var_Right">
              <h5 id="UeberSee_Financial_White_Var_h5">
                Die prognostizierte Wertentwicklung von ø 4,80% p.a. ergibt sich
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
                durchschnittliche Wertsteigerung der Immobilie(n) von ø 2,42%
                p.a. über einen Zeitraum von 15 Jahren. Weitere Informationen
                dazu finden Sie in unserer Knowledge Base.
              </h5>{" "}
              <div id="margin_top_2vh"></div>
              <h3 id="GP_Financials_Small_Spalte_h3">Tilgung</h3>
              <h5 id="UeberSee_Financial_White_Var_h5">
                Das prognostizierte Bankdarlehen hat einen anfänglichen
                Tilgungssatz von 2,00% p.a. zzgl. ersparter Zinsen. Durch die
                Rückführung des Bankdarlehens wird über einen Zeitraum von 15
                Jahren ein durchschnittlicher Tilgungsgewinn 2,38% p.a.
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
