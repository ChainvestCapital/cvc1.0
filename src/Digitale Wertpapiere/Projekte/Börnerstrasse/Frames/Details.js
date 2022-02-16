import "./Details.css";
import FH_Details_Whg_1 from "../../../../assets/images/FH_Details_Whg_1.jpg";
import FH_Details_Whg_2 from "../../../../assets/images/FH_Details_Whg_2.png";
function Details(props) {
  return props.trigger ? (
    <div>
      <div id="GP_Details_Wrapper">
        <div id="GP_Details_Var_White_col">
          <h3 id="GP_Details_Var_White_h3">Wohnungsdetails</h3>
          <h3 id="GP_Details_Var_White_h3">Hochwertig und komfortabel</h3>{" "}
          <h5 id="FH_Details_h5">
            Bei der Wohneinheit handelt sich um eine großzügig geschnittene
            3-Zimmerwohnung mit zwei Schlafzimmern, Bad, Gäste-WC und einem
            lichtdurchfluteten Wohn-Ess-Bereich. Highlight bildet der in den
            ruhigen Innenhof gewandte Balkon, welcher mit seinen 23
            Quadratmetern zum Verweilen einlädt. Um zukünftigen Mietern ein
            komfortables Wohngefühl zu bieten, verfügen sämtliche Zimmer über
            bodentiefe Fenster mit elektrischen Rollläden sowie einer
            Fußbodenheizung.
          </h5>
          <div id="margin_top_2vh"></div>
          <h3 id="GP_Details_Var_White_h3">Wohnung 4 - 2. Obergeschoss</h3>{" "}
          <div id="margin_top_2vh"></div> <div id="margin_top_2vh"></div>
          <div id="Uebersee_Details_Under_Wrapper">
            <div id="Uebersee_Details_Under_Wrapper_Left">
              <img
                src="https://chainvest.s3.eu-central-1.amazonaws.com/B%C3%B6rnerstrasse/B%C3%B6rnerstrasse_Details.png"
                id="Uebersee_Details_img1"
              />
            </div>
            <div id="Uebersee_Details_Under_Wrapper_Right">
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Küche/Wohnen</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">27,83 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Schlafen</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">15,12 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Abstellfläche</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">5,14 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Diele</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">8,00 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Duschbad</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">6,96 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">WC</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">2,57 m²</h3>
              </div>

              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Flur</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">7,25 m²</h3>
              </div>

              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Gästezimmer</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">12,03 m²</h3>
              </div>

              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Balkon Süd (50%)</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">23,40 m²</h3>
              </div>

              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Gesamt:</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">96,60 m²</h3>
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

export default Details;
