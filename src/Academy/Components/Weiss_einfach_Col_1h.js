import "./Weiss_einfach_Col_1h.css";

function Components(props) {
  return (
    <div>
      <div id="Weiss_einfach_Col_1h_Wrapper">
        <h2 id="Weiss_einfach_Col_1h_Heading">{props.Heading}</h2>

        <h4 id="Weiss_einfach_Col_1h_Text">{props.Text}</h4>
      </div>
    </div>
  );
}

export default Components;
