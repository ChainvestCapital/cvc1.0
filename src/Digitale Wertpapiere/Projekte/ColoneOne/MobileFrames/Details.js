import "./Details.css";
import FH_Details_Whg_1 from "../../../../assets/images/FH_Details_Whg_1.jpg";
import FH_Details_Whg_2 from "../../../../assets/images/FH_Details_Whg_2.png";
import W100_HX_HIMG from "../../../MobileComponents/W100_HX_HIMG";

function Details(props) {
  return props.trigger ? (
    <div>
      <div id="mw100_hx">
        <h2 id="mw100_hx_h2">Durchdachte Grundrisse</h2>{" "}
        <div id="margin_top_2vh"></div>
        <div id="margin_top_2vh"></div>
        <h5 id="w100_hx_h5">
          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Details_1.jpg"
            id="_Mobile_Uebersee_Details_img1"
          />{" "}
          <div id="margin_top_2vh"></div>
          <div id="margin_top_2vh"></div>
          <h2 id="mw100_hx_h2">Moderne und hochwertige Ausstattung</h2>{" "}
          <div id="margin_top_2vh"></div>
          Neben hochwertigen Sanitärobjekten wird in sämtlichen Wohnungen
          Parkettboden verlegt und bietet in Kombination mit erstklassigen
          Fußbodenheizungen einen besonders attraktiven Wohlfühlfaktor. Decken
          und Wände sind mit praktischem Malervlies verkleidet und die
          bodengleich gefliesten Duschen bieten eine praktische Bleibe.
          Sämtliche Gebäude werden durch eine massive Bauweise in Stein auf
          Stein erstellt.
        </h5>{" "}
        <div id="margin_top_2vh"></div>
        <h2 id="mw100_hx_h2">Wohnung 3 - Erdgeschoss</h2>{" "}
        <div id="margin_top_2vh"></div>
        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Details_3x.png"
          id="_Mobile_Uebersee_Details_img1"
        />{" "}
        <div id="GP_MOB_Margin"></div>
        <div id="GP_MOB_Margin"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Küche</h3>
          <h3 id="GP_FIN_MOB_Big_h2">7,87 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Essen/Wohnen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">24,00 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Schlafen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">17,11 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Abstellfläche</h3>
          <h3 id="GP_FIN_MOB_Big_h2">1,04 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Diele</h3>
          <h3 id="GP_FIN_MOB_Big_h2">12,54 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Duschbad</h3>
          <h3 id="GP_FIN_MOB_Big_h2">5,41 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">WC</h3>
          <h3 id="GP_FIN_MOB_Big_h2">2,78 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Balkon Süd (50%)</h3>
          <h3 id="GP_FIN_MOB_Big_h2">2,65 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Gesamt:</h3>
          <h3 id="GP_FIN_MOB_Big_h2">76,53 m²</h3>
        </div>
      </div>{" "}
    </div>
  ) : (
    ""
  );
}

export default Details;
