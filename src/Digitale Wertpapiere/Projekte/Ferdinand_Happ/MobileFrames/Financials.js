import "./Financials.css";
import FH_Financials_Mittelherkunft from "../../../../assets/images/FH_Mittelherkunft.png";
import FH_Financials_Mittelnutzung from "../../../../assets/images/FH_Mittelverwendung.png";

function Financials(props) {
  return props.trigger ? (
    <div>
      <div id="GP_MOb_Financials_Wrapper">
        <div id="Mobile_White_W100_HX">
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Kaufpreis</h3>
            <h3 id="GP_FIN_MOB_Big_h2">593.000 €</h3>
          </div>
          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Wohnungen</h3>
            <h3 id="GP_FIN_MOB_Small_h2">553.000 €</h3>
          </div>
          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Stellplatz</h3>
            <h3 id="GP_FIN_MOB_Small_h2">40.000 €</h3>
          </div>{" "}
          <div id="GP_MOB_Margin"></div>
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Kaufnebenkosten</h3>
            <h3 id="GP_FIN_MOB_Big_h2">45.602 €</h3>
          </div>
          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Grunderwerbssteuer</h3>
            <h3 id="GP_FIN_MOB_Small_h2">35.580 €</h3>
          </div>
          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Notar</h3>
            <h3 id="GP_FIN_MOB_Small_h2">7.057 €</h3>
          </div>
          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Grundbuch und Grundschuld</h3>
            <h3 id="GP_FIN_MOB_Small_h2">2.965 €</h3>
          </div>{" "}
          <div id="GP_MOB_Margin"></div>
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Ausstattung</h3>
            <h3 id="GP_FIN_MOB_Big_h2">9.520 €</h3>
          </div>
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Strukturierungskosten</h3>
            <h3 id="GP_FIN_MOB_Big_h2">31.755 €</h3>
          </div>
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Vermittlungsprovision</h3>
            <h3 id="GP_FIN_MOB_Big_h2">17.642 €</h3>
          </div>
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Liquiditätsrücklagen</h3>
            <h3 id="GP_FIN_MOB_Big_h2">2.481 €</h3>
          </div>
          <div id="GP_FIN_MOB_Big_ges">
            <h3 id="GP_FIN_MOB_Big_h2">Gesamterwerbspreis</h3>
            <h3 id="GP_FIN_MOB_Big_h2">700.000 €</h3>
          </div>
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Bankdarlehen</h3>
            <h3 id="GP_FIN_MOB_Big_h2">355.000 €</h3>
          </div>
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Schuldverschrei-bungskapital</h3>
            <h3 id="GP_FIN_MOB_Big_h2">345.000 €</h3>
          </div>
        </div>

        <div id="GP_Mob_White_Row">
          <h3 id="GP_Mob_White_Row_H3">Mittelherkunft</h3>
          <div id="GP_Mob_White_Row_Row">
            <img src={FH_Financials_Mittelherkunft} id="GP_Mob_White_Row_img" />

            <div id="GP_Mob_White_Right_Wrapper">
              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Bankdarlehen</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">50,71%</h5>
              </div>
              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">
                  Schuldverschrei-bungskapital
                </h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">49,29%</h5>
              </div>
            </div>
          </div>{" "}
        </div>

        <div id="GP_Mob_White_Row">
          <h3 id="GP_Mob_White_Row_H3">Mittelnutzung</h3>
          <div id="GP_Mob_White_Row_Row">
            <img src={FH_Financials_Mittelnutzung} id="GP_Mob_White_Row_img" />

            <div id="GP_Mob_White_Right_Wrapper">
              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Kaufpreis</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">84,72%</h5>
              </div>

              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Kaufnebenkosten</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">6,51%</h5>
              </div>

              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Ausstattungskosten</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">1,36%</h5>
              </div>

              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">
                  Strukturierungskosten
                </h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">4,54%</h5>
              </div>

              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">
                  Vermittlungsprovision
                </h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">2,52%</h5>
              </div>

              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Liquiditätsrücklage</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">0,35%</h5>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Financials;
