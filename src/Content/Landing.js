import "./Design/Landing.css";

import MOBILE_FOOTER from "../MobileComponents/Mobile_Footer";
import { useState, useEffect } from "react";
import TOP_NAV_BAR from "../components/navigation/Top_Nav_Bar";

import Footer from "../components/navigation/Footer";
import Mobile_menue from "../MobileComponents/Mobile_menue";
import Content_Box from "./Components/Beitrag_Box";

import BG_Line from "../assets/images/BG_Line.png";
import Digitale_Assets from "../assets/images/Digitale_Assets.png";

import arrow from "../assets/images/arrow.png";
function Emittenten(props) {
  useEffect(() => {
    document.title = "Acadmey";
  }, []);

  return (
    <div>
      <div id="Desktop_Wrapper">
        {" "}
        <TOP_NAV_BAR />
        <div id="Acadmey_BG_Wrapper">
          {" "}
          <div id="Academy_BG_Wrapper_White"></div>
          <div id="Academy_Content">
            <div id="Acadmey_Top">
              <div id="Acadmey_Top_Left">
                <h2 id="WSDW_Top_Wrapper_h2">Academy </h2>{" "}
                <h4 id="WSDW_h470">
                  Chainvest Capital möchte über die transparente Darstellung von
                  unseren Projekten zu besseren Investitionsentscheidung
                  beitragen. Dafür stellen wir Ihnen hilfreiche Informtionen zu
                  diversen Themenbereichen zur Verfügung. Wählen Sie zwischen
                  den drei Kategorien aus, über welches Thema Sie sich
                  informieren wollen.
                </h4>
              </div>
              <div id="Acadmey_Top_Right">
                <div id="Acadmey_Top_Right_Left">
                  <div id="Acadmey_Top_Right_Box_Wrapper">
                    <h4 id="Acadmey_Top_Right_Box_h4">Digitale Assets</h4>
                    <img src={Digitale_Assets} id="Acadmey_Top_Right_Box_Img" />
                    <h5 id="Acadmey_Top_Right_Box__h5">
                      Mit der Hilfe von modernen Technologien können klassiche
                      Anlageobjekte in die digitale Welt gebracht werden.
                    </h5>
                    <div id="Acadmey_Top_Right_Box_Bottom">
                      <div id="Acadmey_Top_Right_Box_Bottom_Button">
                        <div id="Top_Menue_Bar_Button_yellow">
                          <h3 id="Top_Menue_Bar_h3_white">Mehr</h3>
                          <img
                            src={arrow}
                            id="Top_Menue_Bar_Button_yellow_IMG"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="Acadmey_Top_Right_Right"></div>
              </div>
            </div>

            <div id="Academy_Content_Wrapper">
              <div id="Academy_Content_Heading">
                <h2 id="Academy_Content_Heading_h2">Digitale Wertpapiere</h2>
              </div>{" "}
              <Content_Box
                Heading="Was sind digitale Wertpapiere ?"
                Beschreibung="Chianvest Capital stellt die Schnittstelle zwischen spannenden Investitionsprojekten und einer breiten Investorencommunity dar. Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen Security Token Offerings aus unterschiedlichen Branchen."
                BG_Bild={BG_Line}
                Länge="800 Wörter"
                Tag="Wertpapiere"
              />
            </div>
          </div>
          <Footer />
        </div>{" "}
      </div>

      <div id="Mobile_Wrapper">
        <Mobile_menue />
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default Emittenten;
