import "./Galerie.css";
import GalerieComp from "../Components/GalerieComp";

function Galerie(props) {
  return props.trigger ? (
    <div>
      {" "}
      <div id="GalerieWrapper">
        <GalerieComp />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Galerie;
