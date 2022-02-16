import "./mFragenBox.css";

function mFragenBox(props) {
  return (
    <div>
      <div id="mFragen_Box_Wrapper">
        <h3 id="mFragen_Box_Wrapper_h3">{props.Frage}</h3>
        <h5 id="mFragen_Box_Wrapper_h5">{props.Antwort}</h5>
      </div>
    </div>
  );
}

export default mFragenBox;
