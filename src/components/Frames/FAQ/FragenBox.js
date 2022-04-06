import { useState } from "react";
import "./FragenBox.css";
import FAQ_Cross from "../../../assets/images/FAQ_Cross.png";
import FAQ_Line from "../../../assets/images/FAQ_Line.png";
function ChainvestCapital(props) {
  const [FAQ_Bottom, setFAQ_Bottom] = useState(
    "Fragen_Box_Wrapper_Bottom_not_shown"
  );
  const [ClickCount, setClickCount] = useState(2);

  function showBottom() {
    if (ClickCount % 2 == 0) {
      setFAQ_Bottom("Fragen_Box_Wrapper_Bottom_shown");
      setClickCount(ClickCount + 1);
      setFAQ_Line_Wrapper("FAQ_Line_Wrapper");
    } else {
      setFAQ_Bottom("Fragen_Box_Wrapper_Bottom_not_shown");
      setClickCount(ClickCount + 1);
      setFAQ_Line_Wrapper("FAQ_Line_Wrapper_none");
    }
  }

  const [FAQ_Line_Wrapper, setFAQ_Line_Wrapper] = useState(
    "FAQ_Line_Wrapper_none"
  );
  return (
    <div>
      <div id="Fragen_Box_Wrapper">
        <div id="Fragen_Box_Wrapper_Top" onClick={() => showBottom()}>
          <div id="Fragen_Box_Wrapper_IMG_Wrapper">
            <img src={FAQ_Cross} id="FAQ_Cross_Img" />
            <div id={FAQ_Line_Wrapper}>
              <img src={FAQ_Line} id="FAQ_Line_Img" />
            </div>
          </div>
          <h3 id="Fragen_Box_Wrapper_h3">{props.Frage}</h3>
        </div>
        <div id={FAQ_Bottom}>
          <div id="Fragen_Box_Wrapper_Line"></div>{" "}
          <h5 id="Fragen_Box_Wrapper_h5">{props.Antwort}</h5>
        </div>
      </div>
    </div>
  );
}

export default ChainvestCapital;
