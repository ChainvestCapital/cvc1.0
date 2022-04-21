import "./Projekt_Kachel_Rechts.css";

function Projekt_Kachel_Rechts(props) {
  return (
    <div>
      <div id="Projekt_Kachel_Rechts_Wrapper">
        <img src={props.img} id="Projekt_Kachel_Rechts_BG_IMG" />
        <div id="Projekt_Kachel_Rechts_Filter"></div>
        <div id="Projekt_Kachel_Rechts_Onlay_Content">
          <div id="Projekt_Kachel_Rechts_Onlay_Content_Top">
            <h3 id="Projekt_Kachel_Rechts_Onlay_Content_h3">{props.title}</h3>
            <div id="Projekt_Kachel_Rechts_Onlay_Content_Partner"></div>
          </div>
          <div id="Projekt_Kachel_Rechts_Onlay_Content_Bottom">
            <div id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_Row">
              <div id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_Item">
                <h3 id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_h3">
                  999.000 €
                </h3>

                <h3 id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_h4">
                  Finanzierungsvolumen
                </h3>
              </div>

              <div id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_Item">
                <h3 id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_h3">
                  5,00 %
                </h3>

                <h3 id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_h4">
                  Rendite
                </h3>
              </div>
            </div>

            <div id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_Row">
              <div id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_Item">
                <h3 id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_h3">
                  Schuldverschreibung
                </h3>

                <h3 id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_h4">Typ</h3>
              </div>

              <div id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_Item">
                <h3 id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_h3">
                  500 €
                </h3>

                <h3 id="Projekt_Kachel_Rechts_Onlay_Content_Bottom_h4">
                  Mindestinvestition
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projekt_Kachel_Rechts;
