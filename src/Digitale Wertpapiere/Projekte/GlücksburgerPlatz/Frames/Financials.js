import "./Financials.css";
import GS_Financials_Mittelherkunft from "../../../../assets/images/GS_Financials_Mittelherkunft.png";
import GS_Financials_Mittelnutzung from "../../../../assets/images/GS_Financials_Mittelnutzung.png";

function Financials(props) {
  return props.trigger ? (
    <div>
      <div id="GP_Financials_Wrapper">
        <div id="GP_Financials_1st"></div>
        <div id="GP_Financials_Big_White">
          <div id="GP_Financials_Big_White_Left">
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Kaufpreis</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">2.435.000 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">21 Wohnungen</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">2.435.000 €</h3>
            </div>

            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Kaufnebenkosten</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">259.894 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">Grunderwerbssteuer</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">109.575 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">Notar</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">28.976 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">
                Grundbuch und Grundschuld
              </h3>
              <h3 id="GP_Financials_Small_Spalte_h3">12.175 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">Makler</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">101.418 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">Disagio</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">7.750 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Ausstattung</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">49.980 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Strukturierungskosten</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">101.418 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Vermittlungsprovision</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">86.930 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Liquiditätsrücklagen</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">31.778 €</h3>
            </div>

            <div id="GP_Financials_Big_Spalte_Gesamt">
              <h3 id="GP_Financials_Big_Spalte_h3">Gesamterwerbspreis</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">2.965.000 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Bankdarlehen</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">1.550.000 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">
                Schuldverschreibungskapital
              </h3>
              <h3 id="GP_Financials_Big_Spalte_h3">1.415.000 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">Tranche A | Club Deal</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">995.000 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">Trnache B | Retail</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">420.000 €</h3>
            </div>
          </div>
          <div id="GP_Financials_Big_White_Right">
            <div id="GP_Financials_Big_White_Right_Top">
              <h3 id="GP_Financials_Big_White_Right_h3">Mittelherkunft</h3>
              <div id="GP_Financials_Big_White_Right_Chart_Wrapper">
                <img
                  src={GS_Financials_Mittelherkunft}
                  id="GP_Financials_Big_White_Right_Chart_Img"
                  alt=""
                />

                <div id="GP_Financials_Big_White_Right_Chart_Text_Wrapper">
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Bankdarlehen
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      52,2 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Schuldverschreibungskapital | Club Deal
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      33,6 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Schuldverschreibungskapital | Retail
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      14,2 %
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div id="GP_Financials_Big_White_Right_Bottom">
              <h3 id="GP_Financials_Big_White_Right_h3">Mittelnutzung</h3>
              <div id="GP_Financials_Big_White_Right_Chart_Wrapper">
                <img
                  src={GS_Financials_Mittelnutzung}
                  id="GP_Financials_Big_White_Right_Chart_Img"
                  alt=""
                />

                <div id="GP_Financials_Big_White_Right_Chart_Text_Wrapper">
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Kaufpreis
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      82,0 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Kaufnebenkosten
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      8,7 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Ausstattungskosten
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      1,7 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Strukturierungskosten
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      3,4 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Vermittlungsprovision
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      2,9 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Liquiditätsrücklagen
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      1,3 %
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Financials;
