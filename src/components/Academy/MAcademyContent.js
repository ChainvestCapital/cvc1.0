import "./MAcdemyContent.css";
function AcademyContent(props) {
  return (
    <div>
      <div id="mAcademyContent_Wrapper">
        <div id="mAcademyContent_TOP">
          <h2 id="mAcademyContent_TOP_h2">{props.Heading}</h2>

          <h2 id="mAcademyContent_TOP_h5">{props.Beschreibung}</h2>
        </div>

        <div id="mAcademyContent_BOTTOM">
          <img src={props.bgimg} id="mAcademyContent_BOTTOM_img" />

          <div id="mAcademyContent_BOTTOM_Content">
            <h3 id="mAcademyContent_BOTTOM_h3">Länge: {props.Länge}</h3>

            <div id="mAcademyContent_BOTTOM_Tag_Wrapper">
              <div id="mAcademyContent_BOTTOM_Tag">{props.Tag1}</div>

              <div id="mAcademyContent_BOTTOM_Tag">{props.Tag2}</div>

              <div id="mAcademyContent_BOTTOM_Tag">{props.Tag3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademyContent;
