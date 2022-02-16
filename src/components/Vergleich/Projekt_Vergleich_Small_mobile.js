import "./Projekt_Vergleich_Small_mobile.css";

function Home11_Proj_Comp(props) {
  return (
    <div>
      <div id="Vergleichs_Small_Teases1_mobile">
        <div id="Vergleichs_Small_Teaser_Left_mobile">
          <h4 id="Vergleichs_Small_Teaser_h4_mobile">{props.title}</h4>
          <h5 id="Vergleichs_Small_Teaser_h5_mobile">{props.Emittent} </h5>{" "}
        </div>

        <div id="Vergleichs_Small_Teaser_Right_mobile">
          <img
            src={props.KategorieBildLink}
            id="Vergleichs_Small_Teaser_Right_img_mobile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home11_Proj_Comp;
