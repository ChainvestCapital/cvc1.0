import "./Projekt_Vergleich.css";

function Home11_Proj_Comp(props) {
  return (
    <div>
      <div id="Vergleich_Proj_Comp_Wrapper">
        <div id="Vergleich_Proj_Comp_Wrapper_top">
          <img src={props.titleImg} id="Vergleich_Proj_Comp_img" alt="" />
          <div id="Vergleich_Proj_Comp_Logo_Wrapper">
            <img src={props.Logo} id="Vergleich_Proj_Comp_Logo_img" alt="" />
          </div>
        </div>
        <div id="Vergleich_Proj_Comp_Mid">
          <div id="Home11_Proj_Comp_Mid_Left">
            <h2 id="Vergleich_Proj_Comp_Mid_h2">{props.title} </h2>
            <h4 id="Vergleich_Proj_Comp_Mid_h4">{props.Emittent}</h4>
          </div>
          <div id="Vergleich_Proj_Comp_Mid_Kategorie">
            <img
              src={props.KategorieBildLink}
              id="Vergleich_Proj_Comp_Mid_Kategorie_img"
              alt=""
            />
          </div>
        </div>
        <div id="Vergleich_Proj_Comp_Bottom">
          <h5 id="Vergleich_Proj_Comp_Bottom_h5">{props.KurzBeschreibung}</h5>
        </div>
      </div>
    </div>
  );
}

export default Home11_Proj_Comp;
