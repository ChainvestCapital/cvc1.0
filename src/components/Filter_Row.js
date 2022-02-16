import { useState } from "react";

function Filter_Row(props) {
  const [f1h1, setf1h1] = useState(1);
  const [clickState, setclickState] = useState("unclicked");
  function AP_FV_E1_K_c() {
    setf1h1(f1h1 + 1);
    if (f1h1 % 2 === 0) {
      setclickState("unclicked");
    } else {
      setclickState("clicked");
    }
  }

  return (
    <div id="Filter_row_wrapper">
      <h3 id="AlleProjekte_e_H3">{props.value}</h3>
      <div id={props.state} onClick={() => AP_FV_E1_K_c()}></div>
    </div>
  );
}

export default Filter_Row;
