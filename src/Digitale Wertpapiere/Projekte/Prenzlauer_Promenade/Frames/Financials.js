import "./Financials.css";
import W20P from "../../../Components/HighlightBox";

function Financials(props) {
  return props.trigger ? (
    <div>
      <div id="Überblick_UEBER_Wrapper">
        <div id="GP_Überblick_FirstRow">
          <W20P Text="5,00 % p.a." title="Progn. Gesamtrendite" />
          <W20P Text="15 Jahre" title="Laufzeit" />
          <W20P
            Text="
            1,75 %"
            title="Progn. Ausschüttung"
          />
          <W20P Text="3,25 % p.a." title="Progn. Wertentwicklung" />
        </div>
        <div id="margin_top_2vh"></div>
        <div id="UeberSee_Financial_White_Var">
          <h2 id="UeberSee_Financial_White_Var_h3">
            Prog. Durchschnittsrendite 1,75 % p.a.
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
                <h3 id="GP_Financials_Big_Spalte_h3">20.603 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Hausveraltung</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-3.000 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Managementkosten</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-1.000 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">
                  Instandhaltungskosten
                </h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-642 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Mietausfall</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-385 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">
                  Zinszahlung Bankdarlehen
                </h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-3.871 €</h3>
              </div>
              <div id="margin_top_2vh"></div>
              <div id="GP_Financials_Big_Spalte_Gesamt">
                <h3 id="GP_Financials_Big_Spalte_h3">Liquiditätserfolg</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">11.705 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Tilgung Bankdarlehen</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-5.391 €</h3>
              </div>{" "}
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Liquiditätspuffer</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-456 €</h3>
              </div>
              <div id="margin_top_2vh"></div>
              <div id="GP_Financials_Big_Spalte_Gesamt">
                <h3 id="GP_Financials_Big_Spalte_h3">Ausschüttung</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">5.858 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">In Prozent</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">1,75 %</h3>
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
                entstehen, nach bestem Wissen und Gewissen kalkuliert worden.
                Das Bankdarlehen hat voraussichtlich einen Sollzins von 1,32 %
                p.a. und eine anfängliche Tilgung von 1,50 % p.a. zzgl.
                ersparter Zinsen. Bei der Kalkulation handelt es sich um einen
                15-Jahres-Durchschnitt. Als Sicherheitspuffer wurde mit einem
                zusätzlichen anfänglichen Leerstand von drei Monaten ab der
                angegebenen Fertigstellung gerechnet. *Prognosen sind kein
                zuverlässiger Indikator für die künftige Wertentwicklung.
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
                Prog. Durchschnittsrendite 3,25 % p.a.
              </h2>{" "}
              <div id="margin_top_2vh"></div>
              <div id="margin_top_2vh"></div>
              <div id="margin_top_2vh"></div>{" "}
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Verkaufspreis</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">800.163 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Restschuld Bank</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-247.938 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">
                  Schuldverschreibungskapital
                </h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-334.586 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Performancekosten</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-40.827 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Verkaufskosten</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">-13.503 €</h3>
              </div>
              <div id="margin_top_2vh"></div>
              <div id="GP_Financials_Big_Spalte_Gesamt">
                <h3 id="GP_Financials_Big_Spalte_h3">Verkaufserlös</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">163.309 €</h3>
              </div>
              <div id="GP_Financials_Small_Spalte">
                <h3 id="GP_Financials_Small_Spalte_h3">Wertentwicklung</h3>
                <h3 id="GP_Financials_Small_Spalte_h3">3,25 % p.a.</h3>
              </div>
              <div id="margin_top_2vh"></div>
            </div>{" "}
            <div id="margin_top_2vh"></div>
            <div id="margin_top_2vh"></div>{" "}
            <div id="UeberSee_Financial_White_Var_Right">
              <h5 id="UeberSee_Financial_White_Var_h5">
                Die prognostizierte Wertentwicklung von durchschnittlich 3,25 %
                p.a. ergibt sich aus der Wertsteigerung der Immobilie(n) und der
                Tilgung des Bankdarlehens. Diese Verzinsung können Sie über
                einen erfolgreichen Verkauf Ihrer „digitalen Anteile“ auf dem
                Zweitmarkt realisieren, spätestens jedoch durch den Verkauf der
                Immobilie(n) seitens der Emittentin. Es ist kein garantierter
                Festzins. Werden die „digitalen Anteile" auf dem Zweitmarkt
                verkauft, ist die Gesamtrendite abhängig von dem Verkaufspreis.
              </h5>{" "}
              <div id="margin_top_2vh"></div>
              <h3 id="GP_Financials_Small_Spalte_h3">Wertsteigerung</h3>
              <h5 id="UeberSee_Financial_White_Var_h5">
                FINEXITY kalkuliert mit einer durchschnittliche Wertsteigerung
                von ø 1,55 % p.a. über einen Zeitraum von 15 Jahren. Weitere
                Informationen dazu finden Sie in unserer Knowledge Base.
              </h5>{" "}
              <div id="margin_top_2vh"></div>
              <h3 id="GP_Financials_Small_Spalte_h3">Tilgung</h3>
              <h5 id="UeberSee_Financial_White_Var_h5">
                Das prognostizierte Bankdarlehen hat einen anfänglichen
                Tilgungssatz von 1,50 % p.a. zzgl. ersparter Zinsen. Durch die
                Rückführung des Bankdarlehens wird über einen Zeitraum von 15
                Jahren ein durchschnittlicher Tilgungsgewinn 1,70 % p.a.
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
