import "./Beitrag_Box.css";

function Beitrag_Box(props) {
  return (
    <div>
      <div id="Beitrag_Box_Wrapper">
        <div id="Beitrag_Box_Left">
          <h3 id="Beitrag_Box_H3">{props.Heading}</h3>
          <h5 id="Beitrag_Box_h5">{props.Beschreibung}</h5>
        </div>
        <div id="Beitrag_Box_Right">
          {" "}
          <img src={props.BG_Bild} id="Beitrag_Box_Right_Img" />
          <div id="Beitrag_Box_Right_Content">
            <h4 id="Beitrag_Box__H4">Länge: {props.Länge}</h4>
            <div id="Tag_Wrapper">
              <div id="Tag_Box">
                <div id="Tag_Box_h4">{props.Tag}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beitrag_Box;
