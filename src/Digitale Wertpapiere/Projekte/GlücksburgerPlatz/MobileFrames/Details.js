import "./Details.css";
import FINEXITY_GP_Einzelaufstellung from "../../../../assets/images/FINEXITY_GP_Einzelaufstellung.png";

import W100_HX_HIMG from "../../../MobileComponents/W100_HX_HIMG";

function Details(props) {
  return props.trigger ? (
    <div>
      <div id="GP_M_Details_Wrapper">
        <W100_HX_HIMG
          img={FINEXITY_GP_Einzelaufstellung}
          Title="Einzelaufstellung Wohnungen"
        />
        <W100_HX_HIMG
          img="https://chainvest.s3.eu-central-1.amazonaws.com/Gl%C3%BCcksburgerPlatz/Finexity_GP_Immo_Gallerie/Finexity_GP_Gallerie_1.png"
          Title="Grundrissarten A"
        />
        <W100_HX_HIMG
          img="https://chainvest.s3.eu-central-1.amazonaws.com/Gl%C3%BCcksburgerPlatz/Finexity_GP_Immo_Gallerie/Finexity_GP_Gallerie_3.png"
          Title="Grundrissarten B"
        />
        <W100_HX_HIMG
          img="https://chainvest.s3.eu-central-1.amazonaws.com/Gl%C3%BCcksburgerPlatz/Finexity_GP_Immo_Gallerie/Finexity_GP_Gallerie_4.png"
          Title="Grundrissarten C"
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Details;
