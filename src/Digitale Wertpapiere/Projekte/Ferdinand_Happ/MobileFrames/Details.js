import "./Details.css";
import FH_Details_Whg_1 from "../../../../assets/images/FH_Details_Whg_1.jpg";
import FH_Details_Whg_2 from "../../../../assets/images/FH_Details_Whg_2.png";
import W100_HX_HIMG from "../../../MobileComponents/W100_HX_HIMG";

function Details(props) {
  return props.trigger ? (
    <div>
      {" "}
      <div id="mw100_hx">
        <h5 id="w100_hx_h5">
          Das Projekt Ferdinand-Happ-Straße! Ostend besteht aus einer hochwertig
          ausgestattete Wohneinheit mit einer Gesamtwohnfläche von ca. 70,78 m2.
          Durch eine effiziente Gestaltung der Grundrisse bietet die Wohnung auf
          der verfügbaren Fläche drei Zimmer, was bei solch einer Wohnungsgröße
          oft nicht darstellbar ist und daher einer enormen Nachfrage auf dem
          Mietmarkt gegenübersteht.
        </h5>
      </div>{" "}
      <W100_HX_HIMG
        img={FH_Details_Whg_1}
        Title="Wohnung 09.01.04 - 1. Obergeschoss"
      />
      <div id="mw100_hx">
        <h5 id="w100_hx_h5">
          Optional ist bei Überfinanzierung des Projekts der Erwerb einer
          weiteren Wohneinheit geplant. Diese hat eine Gesamtfläche von 49,17m2
          und wird nach aktueller Planung möbliert für einen deutlich höheren
          Mietzins vermietet werden.
        </h5>
      </div>
      <W100_HX_HIMG
        img={FH_Details_Whg_2}
        Title="Wohnung 12.01.06 - 1. Obergeschoss (optional)"
      />
    </div>
  ) : (
    ""
  );
}

export default Details;
