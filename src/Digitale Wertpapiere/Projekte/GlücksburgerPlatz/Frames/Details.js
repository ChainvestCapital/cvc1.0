import "./Details.css";
import FINEXITY_GP_Einzelaufstellung from "../../../../assets/images/FINEXITY_GP_Einzelaufstellung.png";
function Details(props) {
  return props.trigger ? (
    <div>
      <div id="GP_Details_Wrapper">
        <div id="GP_Details_Var_White">
          <h3 id="GP_Details_Var_White_h3">
            Einzelaufstellung der Wohneinheiten
          </h3>

          <img
            src={FINEXITY_GP_Einzelaufstellung}
            alt=""
            id="GP_Details_Var_White_img_big"
          />
        </div>
        <div id="GP_Details_Var_White">
          <h3 id="GP_Details_Var_White_h3">Grundrissarten A</h3>

          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/Gl%C3%BCcksburgerPlatz/Finexity_GP_Immo_Gallerie/Finexity_GP_Gallerie_1.png"
            alt=""
            id="GP_Details_Var_White_img"
          />
        </div>
        <div id="GP_Details_Var_White">
          <h3 id="GP_Details_Var_White_h3">Grundrissarten B</h3>

          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/Gl%C3%BCcksburgerPlatz/Finexity_GP_Immo_Gallerie/Finexity_GP_Gallerie_3.png"
            alt=""
            id="GP_Details_Var_White_img"
          />
        </div>

        <div id="GP_Details_Var_White">
          <h3 id="GP_Details_Var_White_h3">Grundrissarten C</h3>

          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/Gl%C3%BCcksburgerPlatz/Finexity_GP_Immo_Gallerie/Finexity_GP_Gallerie_4.png"
            alt=""
            id="GP_Details_Var_White_img"
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Details;
