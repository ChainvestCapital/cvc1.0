import "./Projekt_Kachel_Rechts_Small.css";

function Projekt_Kachel_Rechts(props) {
  return (
    <div>
      <div id="Vergleich_Rechts_Projekt_Wrapper">
        <div id="Vergleich_Rechts_Projekt_Top">
          <img src={props.titleImg} id="Vergleich_Rechts_Projekt_Top_Img" />
          <div id="Vergleich_Rechts_Projekt_Top_Logo_Wrapper">
            {props.title}
          </div>
        </div>
        <div id="Vergleich_Rechts_Projekt_Content">
          <h3 id="Vergleich_Rechts_Projekt_Content_h3">
            {props.Finanzierungsvolumen}
          </h3>
          <h3 id="Vergleich_Rechts_Projekt_Content_h4">Finanzierungsvolumen</h3>
          <h3 id="Vergleich_Rechts_Projekt_Content_h3">{props.Rendite}</h3>
          <h3 id="Vergleich_Rechts_Projekt_Content_h4">Erwartete Rendite</h3>
        </div>
      </div>
    </div>
  );
}

export default Projekt_Kachel_Rechts;
