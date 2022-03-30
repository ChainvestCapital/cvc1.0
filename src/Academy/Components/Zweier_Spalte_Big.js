import "./Zweier_Spalte_Big.css";

function Components(props) {
  return (
    <div>
      <div id="Zweier_Spalte_Big_Wrapper">
        <div id="Zweier_Spalte_Big_Left_Wrapper">
          <h4 id="Zweier_Spalte_Big_h4">{props.Heading_L}</h4>
          <h5 id="Zweier_Spalte_Big_h5">{props.Text_L}</h5>
        </div>
        <div id="Zweier_Spalte_Big_Right_Wrapper">
          <h4 id="Zweier_Spalte_Big_h4">{props.Heading_R}</h4>
          <h5 id="Zweier_Spalte_Big_h5">{props.Text_R}</h5>
        </div>
      </div>
    </div>
  );
}

export default Components;
