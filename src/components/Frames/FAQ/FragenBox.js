import "./FragenBox.css";

function ChainvestCapital(props) {
  return (
    <div>
      <div id="Fragen_Box_Wrapper">
        <h3 id="Fragen_Box_Wrapper_h3">{props.Frage}</h3>
        <h5 id="Fragen_Box_Wrapper_h5">{props.Antwort}</h5>
      </div>
    </div>
  );
}

export default ChainvestCapital;
