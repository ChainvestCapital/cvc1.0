import "./AcademyContent.css";
function AcademyContent(props) {
  return (
    <div>
      <div id="AcademyContent_Wrapper">
        <div id="AcademyContent_Left">
          <h2 id="AcademyContent_Left_H2">{props.Heading}</h2>

          <h5 id="AcademyContent_Left_H5">{props.Beschreibung}</h5>
        </div>
        <div id="AcademyContent_Right">
          <img src={props.bgimg} id="AcademyContent_Right_IMG" />
          <div id="AcademyContent_Right_Content">
            <h3 id="AcademyContent_Right_Content_Länge">
              Länge: {props.Länge}
            </h3>
            <div id="AcademyContent_Right_Tag_Wrapper">
              <div id="AcademyContent_Right_Tag">{props.Tag1}</div>

              <div id="AcademyContent_Right_Tag">{props.Tag2}</div>

              <div id="AcademyContent_Right_Tag">{props.Tag3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademyContent;
