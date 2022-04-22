import "./AcademyContent.css";
function AcademyContent(props) {
  return (
    <div>
      <div id="Academy_Content_Wrapper">
        <div id="Academy_Content_Left">
          <img src={props.bgimg} id="Acadmey_Content_bgimg" />
        </div>
        <div id="Academy_Content_Right">
          <div id="Academy_Content_Tags_Bar">
            <div id="Academy_Content_Tag">{props.Tag1}</div>
            <div id="Academy_Content_Tag">{props.Tag2}</div>
          </div>

          <h2 id="Academy_Content_h2">{props.Heading}</h2>

          <h4 id="Academy_Content_h4">{props.Beschreibung}</h4>
        </div>
      </div>
    </div>
  );
}

export default AcademyContent;
