import "./Financials.css";
import FH_Financials_Mittelherkunft from "../../../../assets/images/FH_Mittelherkunft.png";
import FH_Financials_Mittelnutzung from "../../../../assets/images/FH_Mittelverwendung.png";
function Financials(props) {
  return props.trigger ? (
    <div>
      {" "}
      <div id="GP_Financials_Wrapper">
        <div id="GP_Financials_1st"></div>
        <div id="GP_Financials_Big_White">
          <div id="GP_Financials_Big_White_Left">
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Kaufpreis</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">593.000 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">Wohnungen</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">553.000 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">Stellplatz</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">40.000 €</h3>
            </div>{" "}
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Kaufnebenkosten</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">45.602 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">Grunderwerbssteuer</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">35.580 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">Notar</h3>
              <h3 id="GP_Financials_Small_Spalte_h3">7.057 €</h3>
            </div>
            <div id="GP_Financials_Small_Spalte">
              <h3 id="GP_Financials_Small_Spalte_h3">
                Grundbuch und Grundschuld
              </h3>
              <h3 id="GP_Financials_Small_Spalte_h3">2.965 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Ausstattung</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">9.520 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Strukturierungskosten</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">31.755 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Vermittlungsprovision</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">17.642 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Liquiditätsrücklagen</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">2.481 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte_Gesamt">
              <h3 id="GP_Financials_Big_Spalte_h3">Gesamterwerbspreis</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">700.000 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">Bankdarlehen</h3>
              <h3 id="GP_Financials_Big_Spalte_h3">355.000 €</h3>
            </div>
            <div id="GP_Financials_Big_Spalte">
              <h3 id="GP_Financials_Big_Spalte_h3">
                Schuldverschreibungskapital
              </h3>
              <h3 id="GP_Financials_Big_Spalte_h3">345.000 €</h3>
            </div>
          </div>
          <div id="GP_Financials_Big_White_Right">
            <div id="GP_Financials_Big_White_Right_Top">
              <h3 id="GP_Financials_Big_White_Right_h3">Mittelherkunft</h3>
              <div id="GP_Financials_Big_White_Right_Chart_Wrapper">
                <img
                  src={FH_Financials_Mittelherkunft}
                  id="GP_Financials_Big_White_Right_Chart_Img"
                  alt=""
                />

                <div id="GP_Financials_Big_White_Right_Chart_Text_Wrapper">
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Bankdarlehen
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      50,71 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Schuldverschreibungskapital
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      49,29 %
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div id="GP_Financials_Big_White_Right_Bottom">
              <h3 id="GP_Financials_Big_White_Right_h3">Mittelnutzung</h3>
              <div id="GP_Financials_Big_White_Right_Chart_Wrapper">
                <img
                  src={FH_Financials_Mittelnutzung}
                  id="GP_Financials_Big_White_Right_Chart_Img"
                  alt=""
                />

                <div id="GP_Financials_Big_White_Right_Chart_Text_Wrapper">
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Kaufpreis
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      84,72 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Kaufnebenkosten
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      6,51 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Ausstattungskosten
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      1,36 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Strukturierungskosten
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      4,54 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Vermittlungsprovision
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      2,52 %
                    </h4>
                  </div>
                  <div id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row">
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h4">
                      Liquiditätsrücklagen
                    </h4>
                    <h4 id="GP_Financials_Big_White_Right_Chart_Wrapper_Test_Row_h45">
                      0,35 %
                    </h4>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Financials;
