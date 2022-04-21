import { useState } from "react";

function Vergleich_Pop_Up_Projekt(props) {
  const [compvalue, setcompvalue] = useState(0);

  function erhöhen() {
    setcompvalue(compvalue + 1);
  }
  return (
    <div>
      Test components
      {props.Value} {compvalue}
      <div id="" onClick={() => erhöhen()}>
        Plus
      </div>
    </div>
  );
}

export default Vergleich_Pop_Up_Projekt;
