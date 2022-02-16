import "./Galerie.css";
import GalerieComp from "../Components/MobileGalerieComp";

function Galerie(props) {
  return props.trigger ? (
    <div>
      <div id="GP_Mob_Galerie_Wrapper">
        <div id="Mobile_White_W100_HX_Ind">
          <GalerieComp />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Galerie;
