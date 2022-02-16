import "./Financials.css";

import GS_Financials_Mittelherkunft from "../../../../assets/images/GS_Financials_Mittelherkunft.png";
import GS_Financials_Mittelnutzung from "../../../../assets/images/GS_Financials_Mittelnutzung.png";

function Financials(props) {
  return props.trigger ? (
    <div>
      <div id="GP_MOb_Financials_Wrapper">
        <div id="Mobile_White_W100_HX">
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Kaufpreis</h3>
            <h3 id="GP_FIN_MOB_Big_h2">2.435.000 €</h3>
          </div>

          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">21 Wohnungen</h3>
            <h3 id="GP_FIN_MOB_Small_h2">2.435.000 €</h3>
          </div>
          <div id="GP_MOB_Margin"></div>
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Kaufnebenkosten</h3>
            <h3 id="GP_FIN_MOB_Big_h2">259.894 €</h3>
          </div>
          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Grunderwerbssteuer</h3>
            <h3 id="GP_FIN_MOB_Small_h2">109.575 €</h3>
          </div>

          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Notar</h3>
            <h3 id="GP_FIN_MOB_Small_h2">28.976 €</h3>
          </div>

          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Grundbuch und Grundschuld</h3>
            <h3 id="GP_FIN_MOB_Small_h2">12.175 €</h3>
          </div>

          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Makler</h3>
            <h3 id="GP_FIN_MOB_Small_h2">101.418 €</h3>
          </div>

          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Disagio</h3>
            <h3 id="GP_FIN_MOB_Small_h2">7.750 €</h3>
          </div>
          <div id="GP_MOB_Margin"></div>
          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Ausstattung</h3>
            <h3 id="GP_FIN_MOB_Big_h2">49.980 €</h3>
          </div>

          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Strukturierungskosten</h3>
            <h3 id="GP_FIN_MOB_Big_h2">101.418 €</h3>
          </div>

          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Vermittlungsprovision</h3>
            <h3 id="GP_FIN_MOB_Big_h2">86.930 €</h3>
          </div>

          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Liquiditätsrücklagen</h3>
            <h3 id="GP_FIN_MOB_Big_h2">31.778 €</h3>
          </div>
          <div id="GP_FIN_MOB_Big_ges">
            <h3 id="GP_FIN_MOB_Big_h2">Gesamterwerbs-preis</h3>
            <h3 id="GP_FIN_MOB_Big_h2">2.965.000 €</h3>
          </div>

          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Bankdarlehen</h3>
            <h3 id="GP_FIN_MOB_Big_h2">1.550.000 €</h3>
          </div>

          <div id="GP_FIN_MOB_Big">
            <h3 id="GP_FIN_MOB_Big_h2">Schuldverschrei-bungskapital</h3>
            <h3 id="GP_FIN_MOB_Big_h2">1.415.000 €</h3>
          </div>
          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Tranche A | Club Deal</h3>
            <h3 id="GP_FIN_MOB_Small_h2">995.000 €</h3>
          </div>
          <div id="GP_FIN_MOB_Small">
            <h3 id="GP_FIN_MOB_Small_h2">Tranche B | Retail</h3>
            <h3 id="GP_FIN_MOB_Small_h2">420.000 €</h3>
          </div>
        </div>

        <div id="GP_Mob_White_Row">
          <h3 id="GP_Mob_White_Row_H3">Mittelherkunft</h3>
          <div id="GP_Mob_White_Row_Row">
            <img src={GS_Financials_Mittelherkunft} id="GP_Mob_White_Row_img" />

            <div id="GP_Mob_White_Right_Wrapper">
              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Bankdarlehen</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">52,2 %</h5>
              </div>
              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Club Deal</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">33,6 %</h5>
              </div>
              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Retail</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">14,2 %</h5>
              </div>
            </div>
          </div>{" "}
        </div>

        <div id="GP_Mob_White_Row">
          <h3 id="GP_Mob_White_Row_H3">Mittelnutzung</h3>
          <div id="GP_Mob_White_Row_Row">
            <img src={GS_Financials_Mittelnutzung} id="GP_Mob_White_Row_img" />

            <div id="GP_Mob_White_Right_Wrapper">
              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Kaufpreis</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">82,0 %</h5>
              </div>

              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Kaufnebenkosten</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">8,7 %</h5>
              </div>

              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Ausstattungskosten</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">1,7 %</h5>
              </div>

              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">
                  Strukturierungskosten
                </h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">3,4 %</h5>
              </div>

              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">
                  Vermittlungsprovision
                </h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">2,9 %</h5>
              </div>

              <div id="GP_Mob_White_Row_Right_Row">
                <h5 id="GP_Mob_White_Row_Right_Row_h5">Liquiditätsrücklage</h5>
                <h5 id="GP_Mob_White_Row_Right_Row_h5">1,3 %</h5>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>{" "}
    </div>
  ) : (
    ""
  );
}

export default Financials;
