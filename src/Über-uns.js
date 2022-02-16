import "./Design/Über-uns.css";

import awsExports from "./aws-exports";

import Amplify from "aws-amplify";

import AboutImg from "./assets/images/About_Cut.png";
import MobileÜUTop from "./assets/images/Mobile_ÜU_Topx.png";
import MobileÜUIMG from "./assets/images/Mobile_ÜU_IMG.png";
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import TOP_MENUE_BAR from "./components/navigation/Top_Nav_Bar";
import Footer from "./components/navigation/Footer";
import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import Drei_Teaser_Kachel from "./components/Drei_Teaser_Kachel";

Amplify.configure(awsExports);

function Home() {
  useEffect(() => {
    document.title = "Über uns";
  }, []);
  return (
    <div>
      <div id="Desktop_Wrapper">
        {" "}
        <CookieConsent
          location="bottom"
          buttonText="Akzeptieren"
          cookieName="myAwesomeCookieName2"
          style={{
            background: "#eee",
            color: "#000",
            textAlign: "start",
            fontFamily: "Montserrat",
            fontSize: "13px",
          }}
          buttonStyle={{
            color: "#434343",
            fontSize: "13px",
            borderRadius: "12px",
            background: "#CDF0EA",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "15px",
            paddingBottom: "15px",
            fontFamily: "Montserrat",
          }}
          expires={150}
          family
        >
          Diese Internetseite verwendet Cookies und Google Analytics für die
          Analyse und Statistik. Wir nutzen Cookies zu unterschiedlichen
          Zwecken, unter anderem zur Analyse und für personalisierte
          Marketing-Mitteilungen. Durch die weitere Nutzung der Website stimmen
          Sie der Verwendung zu. Mehr dazu finden sie in unser{" "}
          <Link to="./Datenschutzerklaerung">Datenschutzerklärung</Link>
          <span style={{ fontSize: "10px" }}></span>
        </CookieConsent>{" "}
        <div id="alle_projekte_ALL_wrapper">
          <div id="alle_projekte_Layer"></div> <TOP_MENUE_BAR />{" "}
          <div id="Über_uns_content_wrapper">
            <div id="Padding6u6">
              <div id="Aabout_White_horz_wrapper">
                <div id="Aabout_White_horz_wrapper_left">
                  <h4 id="Aabout_White_horz_wrapper_left_h5">
                    Chainvest Capital
                  </h4>
                  <h2 id="Aabout_White_horz_wrapper_left_h2">Über uns</h2>
                </div>
                <div id="Aabout_White_horz_wrapper_Right">
                  <h5 id="Aabout_White_horz_wrapper_Right_h5">
                    Mit unserer Plattform schaffen wir einen Rahmen, in dem
                    Unternehmen und InvestorInnen sich zum Zweck des
                    Kapitalaustauschs treffen und mehr Transparenz und
                    Investitionssicherheit gewährleistet wird. So stärken wir
                    das Vertrauen in eine dezentrale Kapitalaufnahme und fördern
                    das Wachstum von blockchain-basierten Finanzinstrumenten.
                  </h5>
                </div>
              </div>{" "}
              <div id="About_Foto_Wrapper">
                <div id="About_Foto_Wrapper_Left">
                  <img src={AboutImg} id="About_Foto_WrapperImg" alt="" />
                </div>
                <div id="About_Foto_Wrapper_Right">
                  <div id="About_Foto_Wrapper_Right_Spalte">
                    <h3 id="About_Foto_Wrapper_Right_Spalte_h3">Tim Zölitz</h3>
                    <h5 id="About_Foto_Wrapper_Right_Spalte_h5">Co-Founder</h5>
                  </div>
                  <div id="About_Foto_Wrapper_Right_Spalte">
                    <h3 id="About_Foto_Wrapper_Right_Spalte_h3">
                      Lu-Mieke Ellen
                    </h3>
                    <h5 id="About_Foto_Wrapper_Right_Spalte_h5">Co-Founder</h5>
                  </div>
                </div>
              </div>
              <div id="About_Antribe_Wrapper">
                <h3 id="About_Antrieb_h3">Das treibt uns an</h3>
                <div id="About_Antrieb_h3_Button_Text">
                  <h4 id="About_Antrieb_h3_Button_Text_h4">
                    Digitale Investitionsprojekte verändern die Kapitalmärkte
                    und ermöglichen AnlegerInnen unmittelbar am wirtschaftlichen
                    Erfolg von dynamischen Startups bis hin zu etablierten
                    Unternehmen beteiligt zu werden. Die Ausgabe von eigen- bzw.
                    fremdkapitalähnlichen
                  </h4>

                  <h4 id="About_Antrieb_h3_Button_Text_h4">
                    Finanzinstrumenten in Form von Security Token stellt eine
                    neue Art der Unternehmensfinanzierung dar. Security Token
                    ermöglichen eine kostengünstige und schnelle Ausgabe von
                    tradierten Finanzinstrumenten und KMU am Kapitalmarkt
                    teilzunehmen.
                  </h4>
                </div>{" "}
              </div>{" "}
              <Drei_Teaser_Kachel />
            </div>
            <Footer />
          </div>{" "}
        </div>
      </div>{" "}
      <div id="Mobile_Wrapper">
        <div id="Mobile_Background_Grey">
          <div id="Mobile_Background_White_Overlay"></div>
          <div id="Mobile_ÜU_Content">
            <CookieConsent
              location="bottom"
              buttonText="Akzeptieren"
              cookieName="myAwesomeCookieName2"
              style={{
                background: "#eee",
                color: "#000",
                textAlign: "start",
                fontFamily: "Montserrat",
                fontSize: "13px",
              }}
              buttonStyle={{
                color: "#434343",
                fontSize: "12px",
                borderRadius: "12px",
                background: "#CDF0EA",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontFamily: "Montserrat",
              }}
              expires={150}
            >
              Diese Internetseite verwendet Cookies und Google Analytics für die
              Analyse und Statistik. Wir nutzen Cookies zu unterschiedlichen
              Zwecken, unter anderem zur Analyse und für personalisierte
              Marketing-Mitteilungen. Durch die weitere Nutzung der Website
              stimmen Sie der Verwendung zu. Mehr dazu finden sie in unser{" "}
              <Link to="./Datenschutzerklaerung">Datenschutzerklärung</Link>
              <span style={{ fontSize: "10px" }}></span>
            </CookieConsent>{" "}
            <MOBILE_MENUE />
            <div id="Mobile_ÜU_Top">
              <h2 id="Mobile_ÜU_h2">Über Chainvest</h2>
              <img src={MobileÜUTop} id="MobileÜUTop_Img" alt="" />
              <div id="Mobile_ÜU_Blue_Box">
                <h4 id="Mobile_ÜU_h4">
                  Mit unserer Plattform schaffen wir einen Rahmen, in dem
                  Unternehmen und InvestorInnen sich zum Zweck des
                  Kapitalaustauschs treffen und mehr Transparenz und
                  Investitionssicherheit gewährleistet wird. So stärken wir das
                  Vertrauen in eine dezentrale Kapitalaufnahme und fördern das
                  Wachstum von blockchain-basierten Finanzinstrumenten.
                </h4>
              </div>
            </div>
            <div id="Mobile_ÜU_Antrieb_Inner">
              <h3 id="Mobile_ÜU_Antrieb_Inner_h3">Das treibt uns an</h3>
              <h5 id="Mobile_ÜU_Antrieb_Inner_h5">
                Digitale Investitionsprojekte verändern die Kapitalmärkte und
                ermöglichen AnlegerInnen unmittelbar am wirtschaftlichen Erfolg
                von dynamischen Startups bis hin zu etablierten Unternehmen
                beteiligt zu werden.
              </h5>
              <img src={MobileÜUIMG} id="Mobile_ÜU_Antrieb_Inner_Img" alt="" />
              <div id="Mobile_ÜU_Name_Wrapper">
                <div id="Mobile_ÜU_Name_Box_Wrapper">
                  <h3 id="Mobile_ÜU_Name_Box_h3">Tim Zölitz</h3>
                  <h5 id="Mobile_ÜU_Name_Box_h5">Co-Founder</h5>
                </div>
                <div id="Mobile_ÜU_Name_Box_Wrapper">
                  <h3 id="Mobile_ÜU_Name_Box_h3">Lu-Mieke Ellen</h3>
                  <h5 id="Mobile_ÜU_Name_Box_h5">Co-Founder</h5>
                </div>
              </div>
              <h5 id="Mobile_ÜU_Antrieb_Inner_h5">
                Die Ausgabe von eigen- bzw. fremdkapitalähnlichen
                Finanzinstrumenten in Form von Security Token stellt eine neue
                Art der Unternehmensfinanzierung dar. Security Token ermöglichen
                eine kostengünstige und schnelle Ausgabe von tradierten
                Finanzinstrumenten und KMU am Kapitalmarkt teilzunehmen.
              </h5>
            </div>
          </div>{" "}
        </div>{" "}
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default Home;
