import "./Projekt_Vergleich_mobile.css";

function Home11_Proj_Comp(props) {
  return (
    <div>
      <div id="Vergleich_Proj_Comp_Wrapper_Mobile">
        <div id="Vergleich_Proj_Comp_Mid_Mobile">
          <div id="Home11_Proj_Comp_Mid_Left_Mobile">
            <h2 id="Vergleich_Proj_Comp_Mid_h2_Mobile">{props.title} </h2>
            <h4 id="Vergleich_Proj_Comp_Mid_h4_Mobile">{props.Emittent}</h4>
          </div>
          <div id="Vergleich_Proj_Comp_Mid_Kategorie_Mobile">
            <img
              src={props.KategorieBildLink}
              id="Vergleich_Proj_Comp_Mid_Kategorie_img_Mobile"
              alt=""
            />
          </div>
        </div>
        <div id="Vergleich_Proj_Comp_Bottom_Mobile">
          <h5 id="Vergleich_Proj_Comp_Bottom_h5_Mobile">
            {props.KurzBeschreibung}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Home11_Proj_Comp;
