import "./Mobile_white_einfach.css";

function Components(props) {
  return (
    <div>
      <div id="Mobile_white_einfach_Wrapper">
        <h2 id="Mobile_white_einfach_Heading">{props.Heading}</h2>

        <h4 id="Mobile_white_einfach_Text">{props.Text}</h4>
      </div>
    </div>
  );
}

export default Components;
