import "./Details.css";
import FH_Details_Whg_1 from "../../../../assets/images/FH_Details_Whg_1.jpg";
import FH_Details_Whg_2 from "../../../../assets/images/FH_Details_Whg_2.png";
function Details(props) {
  return props.trigger ? (
    <div>
      <div id="GP_Details_Wrapper">
        <div id="GP_Details_Var_White">
          <h3 id="GP_Details_Var_White_h3">
            Wohnung 09.01.04 - 1. Obergeschoss
          </h3>
          <h5 id="FH_Details_h5">
            Das Projekt Ferdinand-Happ-Straße! Ostend besteht aus einer
            hochwertig ausgestattete Wohneinheit mit einer Gesamtwohnfläche von
            ca. 70,78 m2. Durch eine effiziente Gestaltung der Grundrisse bietet
            die Wohnung auf der verfügbaren Fläche drei Zimmer, was bei solch
            einer Wohnungsgröße oft nicht darstellbar ist und daher einer
            enormen Nachfrage auf dem Mietmarkt gegenübersteht.
          </h5>
          <img src={FH_Details_Whg_1} alt="" id="FH_Details_Var_White_img" />
          <h5 id="FH_Details_h5">
            Optional ist bei Überfinanzierung des Projekts der Erwerb einer
            weiteren Wohneinheit geplant. Diese hat eine Gesamtfläche von
            49,17m2 und wird nach aktueller Planung möbliert für einen deutlich
            höheren Mietzins vermietet werden.
          </h5>
        </div>

        <div id="GP_Details_Var_White">
          <h3 id="GP_Details_Var_White_h3">
            Wohnung 12.01.06 - 1. Obergeschoss (optional)
          </h3>

          <img src={FH_Details_Whg_2} alt="" id="GP_Details_Var_White_img" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Details;
