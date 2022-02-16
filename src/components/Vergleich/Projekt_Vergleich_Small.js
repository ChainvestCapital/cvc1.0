import "./Projekt_Vergleich_Small.css";

function Home11_Proj_Comp(props) {
  return (
    <div>
      <div id="Vergleichs_Small_Teases1">
        <div id="Vergleichs_Small_Teaser_Left">
          <h4 id="Vergleichs_Small_Teaser_h4">{props.title}</h4>
          <h5 id="Vergleichs_Small_Teaser_h5">{props.Emittent} </h5>{" "}
        </div>

        <div id="Vergleichs_Small_Teaser_Right">
          <img
            src={props.KategorieBildLink}
            id="Vergleichs_Small_Teaser_Right_img"
          />
        </div>
      </div>
    </div>
  );
}

export default Home11_Proj_Comp;
