import "./Details.css";
import FH_Details_Whg_1 from "../../../../assets/images/FH_Details_Whg_1.jpg";
import FH_Details_Whg_2 from "../../../../assets/images/FH_Details_Whg_2.png";
import W100_HX_HIMG from "../../../MobileComponents/W100_HX_HIMG";

function Details(props) {
  return props.trigger ? (
    <div>
      <div id="mw100_hx">
        <h2 id="mw100_hx_h2">Wohnungsdetails</h2>{" "}
        <div id="margin_top_2vh"></div>
        <h5 id="w100_hx_h5">
          Mitten im aufstrebenden Ortsteil Heinersdorf (Bezirk Pankow), nur 500
          m entfernt vom Szenebezirk Prenzlauer Berg und doch mitten im Grünen,
          entsteht ein hochwertiges Neubau-Ensemble aus 165 Wohneinheiten. Mit
          standardmäßiger Fußbodenheizung, Echtholzparkett und bodengleicher
          Regenwalddusche trifft eine hochwertige Bauweise auf optimale Lage.
          Das Projekt Prenzlauer Promenade! besteht aus bis zu drei
          Wohneinheiten, welche sich durch effiziente Grundrisse und dem
          niedrigen Einkaufspreis optimal als Kapitalanlage anbieten.
        </h5>{" "}
        <div id="margin_top_2vh"></div>
        <h2 id="mw100_hx_h2">Wohnung 3 - Erdgeschoss</h2>{" "}
        <div id="margin_top_2vh"></div>
        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Prenzlauer_Details_1.png"
          id="_Mobile_Uebersee_Details_img1"
        />{" "}
        <div id="GP_MOB_Margin"></div>
        <div id="GP_MOB_Margin"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Wohnen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">20,64 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Eingang</h3>
          <h3 id="GP_FIN_MOB_Big_h2">5,14 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Küche</h3>
          <h3 id="GP_FIN_MOB_Big_h2">7,48 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Bad</h3>
          <h3 id="GP_FIN_MOB_Big_h2">6,28 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Terasse (50%)</h3>
          <h3 id="GP_FIN_MOB_Big_h2">4,83 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Gesamt:</h3>
          <h3 id="GP_FIN_MOB_Big_h2">44,37 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Kaufpreis</h3>
          <h3 id="GP_FIN_MOB_Big_h2">228.000 €</h3>
        </div>
        <div id="margin_top_2vh"></div>
        <div id="margin_top_2vh"></div>
        <div id="margin_top_2vh"></div>
        <h2 id="mw100_hx_h2">Wohnung 55 - Erdgeschoss</h2>{" "}
        <div id="margin_top_2vh"></div>
        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Prenzlauer_Details_2.png"
          id="_Mobile_Uebersee_Details_img1"
        />{" "}
        <div id="GP_MOB_Margin"></div>
        <div id="GP_MOB_Margin"></div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Wohnen</h3>
          <h3 id="GP_FIN_MOB_Big_h2">23,88 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Eingang</h3>
          <h3 id="GP_FIN_MOB_Big_h2">3,76 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Zimmer</h3>
          <h3 id="GP_FIN_MOB_Big_h2">15,47 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Küche</h3>
          <h3 id="GP_FIN_MOB_Big_h2">6,44 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Bad</h3>
          <h3 id="GP_FIN_MOB_Big_h2">4,59 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Terasse (50%)</h3>
          <h3 id="GP_FIN_MOB_Big_h2">5,07 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Gesamt</h3>
          <h3 id="GP_FIN_MOB_Big_h2">59,21 m²</h3>
        </div>
        <div id="GP_FIN_MOB_Big">
          <h3 id="GP_FIN_MOB_Big_h2">Kaufpreis</h3>
          <h3 id="GP_FIN_MOB_Big_h2">320.000 €</h3>
        </div>
      </div>{" "}
    </div>
  ) : (
    ""
  );
}

export default Details;
