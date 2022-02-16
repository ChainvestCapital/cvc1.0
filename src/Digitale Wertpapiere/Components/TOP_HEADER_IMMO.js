import "./Top_Header.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/Arrow_white.png";

function Top_Header(props) {
  return (
    <div>
      <div id="Top_Header_Wrapper">
        <div id="Top_Header_Background">
          <div id="Top_Header_Background_Grey"></div>
          <div id="Top_Header_Background_White"></div>
          <div id="Top_Header_Background_Solid"></div>
          <div id="Top_Header_BackgroundLinear"></div>
        </div>
        <div id="Top_Header_Content">
          <div id="Top_Header_Content_Left">
            <div id="Top_Header_Content_Left_Top">
              <div id="Top_Header_Content_Left_Top_inner">
                <h3 id="Top_Header_Content_Left_Top_h3">Über {props.Titel}</h3>
                <h5 id="Top_Header_Content_Left_Top_h5">
                  {props.Beschreibung}
                </h5>
              </div>
            </div>
            <div id="Top_Header_Content_LeftbOTTOM">
              <div id="Top_Header_Content_LeftbOTTOM_Left_Inner">
                <img
                  alt=""
                  src={props.logo}
                  id="Top_Header_Content_LeftbOTTOM_Left_Inner_Img"
                />
                <a href={props.extLink}>
                  <div id="Top_Header_Content_LeftbOTTOM_Left_Inner_Zum_Proj">
                    <h4 id="Top_Header_Content_LeftbOTTOM_Left_Inner_h4">
                      Zum Projekt
                    </h4>
                    <img src={arrow} id="Arrow_Img" alt="" />
                  </div>
                </a>
              </div>
              <div id="Top_Header_Content_LeftbOTTOM_Right_Inner">
                <div id="Top_Header_Content_LeftbOTTOM_Right_Inner_Left">
                  <h3 id="Top_Header_Content_LeftbOTTOM_Right_Inner_h3">
                    {props.Kategorie}
                  </h3>
                  <h4 id="Top_Header_Content_LeftbOTTOM_Right_Inner_h4">
                    Kategorie
                  </h4>
                </div>
                <div id="Top_Header_Content_LeftbOTTOM_Right_InnerKat_Warpper">
                  <img
                    alt=""
                    src={props.kategorieImg}
                    id="Top_Header_Content_LeftbOTTOM_Right_Inner_Img"
                  />
                </div>
              </div>
            </div>{" "}
          </div>
          <div id="Top_Header_Content_Right">
            <div id="Top_Header_Content_Right_Top">
              <div id="Top_Header_Content_Right_Top_Inner">
                <h3 id="Top_Header_Content_Right_Top_Inner_h2">
                  Weitere Projekte
                </h3>
                <div id="Top_Header_Content_Left_Top_Projekte_Wrapper">
                  <Link to={props.weitereLink}>
                    <div id="Top_Header_Content_Left_Top_Projekt">
                      <img
                        alt=""
                        src={props.weiterebg2}
                        id="Top_Header_Content_Left_Top_Projekt_bg"
                      />
                      <div id="Top_Header_Content_LeftbOTTOM_Left_right_Logo">
                        <img
                          alt=""
                          src={props.weitereLogo2}
                          id="Top_Header_Content_Left_Top_Projekt_Logo"
                        />
                      </div>
                      <img
                        alt=""
                        src={arrow}
                        id="Top_Header_Content_Left_Top_Projekt_Arrow"
                      />
                    </div>
                  </Link>{" "}
                  <Link to={props.weitereLink2}>
                    <div id="Top_Header_Content_Left_Top_Projekt">
                      <img
                        alt=""
                        src={props.weiterebg}
                        id="Top_Header_Content_Left_Top_Projekt_bg"
                      />
                      <div id="Top_Header_Content_LeftbOTTOM_Left_right_Logo">
                        <img
                          alt=""
                          src={props.weitereLogo}
                          id="Top_Header_Content_Left_Top_Projekt_Logo"
                        />
                      </div>
                      <img
                        alt=""
                        src={arrow}
                        id="Top_Header_Content_Left_Top_Projekt_Arrow"
                      />
                    </div>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div id="Top_Header_Content_Right_Bottom">
              <div id="Top_Header_Content_Right_Bottom_Inner">
                <div id="Top_Header_Content_Right_Bottom_Inner_Kachel">
                  <h3 id="Top_Header_Content_Right_Bottom_h3">
                    {props.Rendite}
                  </h3>
                  <h4 id="Top_Header_Content_Right_Bottom_h4">
                    Erwartete Rendite
                  </h4>
                </div>
                <div id="Top_Header_Content_Right_Bottom_Inner_Kachel">
                  <h3 id="Top_Header_Content_Right_Bottom_h3">
                    {props.Finanzierungsvolumen}
                  </h3>
                  <h4 id="Top_Header_Content_Right_Bottom_h4">
                    Finanzierungsvolumen
                  </h4>
                </div>
                <div id="Top_Header_Content_Right_Bottom_Inner_Kachel">
                  <h3 id="Top_Header_Content_Right_Bottom_h3">{props.Typ}</h3>
                  <h4 id="Top_Header_Content_Right_Bottom_h4">Typ</h4>
                </div>
                <div id="Top_Header_Content_Right_Bottom_Inner_Kachel">
                  <h3 id="Top_Header_Content_Right_Bottom_h3">
                    {props.Mindestinvestition}
                  </h3>
                  <h4 id="Top_Header_Content_Right_Bottom_h4">
                    Mindestinvestition
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top_Header;
