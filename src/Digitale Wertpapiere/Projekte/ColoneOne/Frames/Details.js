import "./Details.css";
import FH_Details_Whg_1 from "../../../../assets/images/FH_Details_Whg_1.jpg";
import FH_Details_Whg_2 from "../../../../assets/images/FH_Details_Whg_2.png";
function Details(props) {
  return props.trigger ? (
    <div>
      <div id="GP_Details_Wrapper">
        <div id="GP_Details_Var_White_col">
          <h3 id="GP_Details_Var_White_h3">Durchdachte Grundrisse</h3>{" "}
          <div id="margin_top_2vh"></div>
          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Details_1.jpg"
            id="Uebersee_Details_img1"
          />{" "}
          <div id="margin_top_2vh"></div> <div id="margin_top_2vh"></div>
          <h3 id="GP_Details_Var_White_h3">
            Moderne und hochwertige Ausstattung
          </h3>{" "}
          <h5 id="FH_Details_h5">
            Neben hochwertigen Sanitärobjekten wird in sämtlichen Wohnungen
            Parkettboden verlegt und bietet in Kombination mit erstklassigen
            Fußbodenheizungen einen besonders attraktiven Wohlfühlfaktor. Decken
            und Wände sind mit praktischem Malervlies verkleidet und die
            bodengleich gefliesten Duschen bieten eine praktische Bleibe.
            Sämtliche Gebäude werden durch eine massive Bauweise in Stein auf
            Stein erstellt.
          </h5>
          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_1.jpg"
            id="Uebersee_Details_img1"
          />
          <div id="margin_top_2vh"></div>
          <div id="margin_top_2vh"></div>
          <div id="margin_top_2vh"></div>
          <div id="margin_top_2vh"></div>
          <div id="margin_top_2vh"></div>
          <div id="margin_top_2vh"></div>
          <h3 id="GP_Details_Var_White_h3">Wohnung 1.13-3.Obergeschoss</h3>{" "}
          <div id="margin_top_2vh"></div> <div id="margin_top_2vh"></div>
          <div id="Uebersee_Details_Under_Wrapper">
            <div id="Uebersee_Details_Under_Wrapper_Left">
              <img
                src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Details_3x.png"
                id="Uebersee_Details_img1"
              />
            </div>
            <div id="Uebersee_Details_Under_Wrapper_Right">
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Küche</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">7,87 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Essen/Wohnen</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">24,00 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Schlafen</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">17,11 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Abstellfläche</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">1,04 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Diele</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">12,54 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Duschbad</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">5,41 m²</h3>
              </div>
              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">WC</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">2,78 m²</h3>
              </div>

              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Balkon Süd (50%)</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">2,65 m²</h3>
              </div>

              <div id="GP_Financials_Big_Spalte">
                <h3 id="GP_Financials_Big_Spalte_h3">Gesamt:</h3>
                <h3 id="GP_Financials_Big_Spalte_h3">76,53 m²</h3>
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
