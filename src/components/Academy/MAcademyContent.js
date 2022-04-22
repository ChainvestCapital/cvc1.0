import "./MAcdemyContent.css";
function AcademyContent(props) {
  return (
    <div>
      <div id="mAcademyContent_Wrapper">
        <div id="mAcademyContent_TOP">
          <h2 id="mAcademyContent_TOP_h2">{props.Heading}</h2>
          <img src={props.bgimg} id="mAcademyContent_BOTTOM_img" />
          <div id="mAcademyContent_BOTTOM_Tag_Wrapper">
            <div id="mAcademyContent_BOTTOM_Tag">{props.Tag1}</div>

            <div id="mAcademyContent_BOTTOM_Tag">{props.Tag2}</div>
          </div>{" "}
          <h2 id="mAcademyContent_TOP_h5">{props.Beschreibung}</h2>
        </div>
      </div>
    </div>
  );
}

export default AcademyContent;
