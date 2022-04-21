import "./Design/About_Us.css";
import { useEffect } from "react";
import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";

import Footer from "./components/navigation/Footer";
import MOBILE_MENUE from "./MobileComponents/Mobile_menue";

import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import Mobile_menue from "./MobileComponents/Mobile_menue";

import Mobile_Footer from "./MobileComponents/Mobile_Footer";

import About_Logo from "./assets/images/About_Logo.png";
import About_Tim from "./assets/images/About_Tim.png";
import About_Lu from "./assets/images/About_Lu.png";
import About_BASH from "./assets/images/About_BASH.png";
import About_DEC from "./assets/images/About_DEC.png";
import About_Standort from "./assets/images/About_Standort.png";
import About_OC from "./assets/images/About_OC.png";

function About() {
  useEffect(() => {
    document.title = "Über uns";
  }, []);
  return (
    <div id="">
      <div id="Desktop_Wrapper">
        <CookieConsent
          location="bottom"
          buttonText="Akzeptieren"
          cookieName="myAwesomeCookieName2"
          style={{
            background: "#2B373B",
            fontSize: "16px",
          }}
          buttonStyle={{ color: "#4e503b", fontSize: "16px" }}
          expires={150}
        >
          Diese Internetseite verwendet Cookies und Google Analytics für die
          Analyse und Statistik. Wir nutzen Cookies zu unterschiedlichen
          Zwecken, unter anderem zur Analyse und für personalisierte
          Marketing-Mitteilungen. Durch die weitere Nutzung der Website stimmen
          Sie der Verwendung zu. Mehr dazu finden sie in unser{" "}
          <Link to="./Datenschutzerklaerung">Datenschutzerklärung</Link>
          <span style={{ fontSize: "10px" }}></span>
        </CookieConsent>{" "}
        <TOP_NAV_BAR />
        <div id="About_Wrapper">
          <div id="About_Top">
            <div id="About_Top_Left">
              <h2 id="About_Top_h2">Wir sind</h2>
              <h2 id="About_Top_h2_yellow">Chainvest Capital</h2>

              <h4 id="About_Top_h4">Zugang zum Kapitalmarkt von morgen</h4>
            </div>

            <div id="About_Top_Right">
              <img src={About_Logo} id="About_Top_Right_IMG" />
            </div>
          </div>

          <div id="About_Vision">
            <div id="About_Vision_Left">
              <h3 id="About_Visionh3">
                Wir machen die Finanzwelt von morgen greifbar!
              </h3>
              <h5 id="About_Visionh5">
                Digitale Vermögensgegenstände revolutionieren die traditionellen
                Kapitalmärkte und eröffnen AnlegerInnen zahlreiche neue
                Investitionsmöglichkeiten. Chainvest Capital bietet eine
                Plattform, welche sowohl Privatpersonen, als auch
                institutionellen InvestorInnen die Vielfalt der regulierten
                digitalen Investitionsprojekte transparent aufzeigt. Dabei
                stellen wir gleichzeitig für Emittenten eine attraktive
                Möglichkeit dar, die Reichweite ihrer Projekte zu erhöhen.
                <br />
                <br />
                Unsere Vision ist es, einen Zugang zu schaffen, Vergleiche zu
                ermöglichen und die individuelle Investitionsentscheidung zu
                unterstützen. Wir möchten die Vorteile der
                Blockchain-Technologie im Finanzbereich nutzbar machen und die
                Zugägnglichkeit zu vorher vorschossenen Anlagebereichen für
                PrivatinvestorenInnen erhöhen. Damit leisten wir einen Beitrag
                zur Demokratisierung des Kapitalmarktes.
              </h5>
            </div>
            <div id="About_Vision_Right"></div>
          </div>

          <div id="About_Personen">
            <div id="About_Person_Kachel">
              <img src={About_Lu} id="About_Person_Kachel_Img" />
              <div id="About_Person_Kachel_Right">
                <h3 id="About_Person_Kachel_Right_h3">Lu-Mieke Ellen</h3>
                <h3 id="About_Person_Kachel_Right_h4">Co-Founder</h3>
                <h3 id="About_Person_Kachel_Right_h5">
                  Lu-Mieke kombiniert Expertise aus der Wirtschaftsprüfung und
                  Transaktionsberatung mit der akademischen Auseinandersetzung
                  bzgl. digital Assets.
                </h3>
              </div>
            </div>
            <div id="About_Person_Kachel">
              <img src={About_Tim} id="About_Person_Kachel_Img" />
              <div id="About_Person_Kachel_Right">
                <h3 id="About_Person_Kachel_Right_h3">Tim Zölitz</h3>
                <h3 id="About_Person_Kachel_Right_h4">Co-Founder</h3>
                <h3 id="About_Person_Kachel_Right_h5">
                  Tim ist seit mehreren Jahren im Blockchain-Bereich tätig und
                  betreut Projekte im DeFi- sowie NFT-Bereich bzgl. technischer
                  & wirtschaftlicher Fragestellungen.
                </h3>
              </div>
            </div>{" "}
          </div>
          <div id="About_Backed">
            <div id="About_Backed_Left">
              <div id="About_Backed_Left_Top">
                <img src={About_OC} id="About_OC" />
                <img src={About_BASH} id="About_BASH" />
              </div>
              <h5 id="About_Backed_Left_h5">Backed by:</h5>
            </div>
            <div id="About_Backed_Kiel">
              <img src={About_Standort} id="About_Standort" />
              <h5 id="About_Backed_Left_h4">Kiel</h5>

              <h5 id="About_Backed_Left_h5">Based in:</h5>
            </div>
            <div id="About_Backed_DEC">
              <div id="About_Backed_DEC_Top">
                <a href="https://certification.mettl.com/dec-institute/applicant/result/download-certificate?key=Et%2FR%2BE0sLHNXhz5cW8Gzfg%3D%3D">
                  <img src={About_DEC} id="About_DEC" />
                </a>
                <div id="About_Backed_DEC_Top_Right">
                  <h3 id="About_Backed_DEC_Top_h3">
                    CHARTERED BLOCKCHAIN EXPERT I (CBX®)
                  </h3>
                  <h5 id="About_Backed_DEC_Top_h5">DLT Education Consortium</h5>
                </div>
              </div>
              <h5 id="About_Backed_Left_h5">Certified by:</h5>
            </div>
          </div>
        </div>{" "}
        <Footer />
      </div>
      <div id="Mobile_Wrapper">
        <div id="About_Mobile_Wrapper">
          <Mobile_menue />

          <div id="About_Mobile_Top">
            <h2 id="About_Mobile_Top_h2">Wir sind</h2>
            <h2 id="About_Mobile_Top_h2_yellow">Chainvest Capital</h2>
            <h3 id="About_Mobile_Top_h3">Zugang zum Kapitalmarkt von morgen</h3>

            <img src={About_Logo} id="About_Logo_Mobile_Img" />
          </div>

          <div id="About_Mobile_Top">
            <h3 id="About_Mobile_Mid_h3">
              Wir machen die Finanzwelt von morgen greifbar!
            </h3>
            <h5 id="About_Mobile_Mid_h5">
              Digitale Vermögensgegenstände revolutionieren die traditionellen
              Kapitalmärkte und eröffnen AnlegerInnen zahlreiche neue
              Investitionsmöglichkeiten. Chainvest Capital bietet eine
              Plattform, welche sowohl Privatpersonen, als auch institutionellen
              InvestorInnen die Vielfalt der regulierten digitalen
              Investitionsprojekte transparent aufzeigt. Gleichzeitig stellen
              wir für Emittenten eine attraktive Möglichkeit dar die Reichweite
              ihrer Projekte zu erhöhen. <br></br>
              <br></br>Unsere Vision ist es, einen Zugang zu schaffen,
              Vergleiche zu ermöglichen und die individuelle
              Investitionsentscheidung zu unterstützen. Wir möchten die Vorteile
              der Blockchain-Technologie im Finanzbereich nutzbar machen und die
              Zugägnglichkeit zu vorher vorschlossenen Anlagebereichen für
              PrivatinvestorenInnen erhöhen. Damit leisten wir einen Beitrag zur
              Demokratisierung des Kapitalmarktes.
            </h5>
          </div>

          <div id="About_Mobile_Personen_Wrapper">
            <div id="About_Mobile_Personen_Card">
              <div id="About_Mobile_Personen_Card_Top">
                <img src={About_Lu} id="About_Lu_mOBILE_Img" />
                <div id="About_Mobile_Personen_Card_Top_Right">
                  Lu-Mieke Ellen
                  <h4 id="About_Mobile_Personen_Card_Top_h4">Co-Founder</h4>
                </div>
              </div>
              <div id="About_Mobile_Personen_Card_Bottom">
                Lu-Mieke kombiniert Expertise aus der Wirtschaftsprüfung und
                Transaktionsberatung mit der akademischen Auseinandersetzung mit
                digital Assets.
              </div>
            </div>

            <div id="About_Mobile_Personen_Card">
              <div id="About_Mobile_Personen_Card_Top">
                <img src={About_Tim} id="About_Lu_mOBILE_Img" />
                <div id="About_Mobile_Personen_Card_Top_Right">
                  Tim Zölitz
                  <h4 id="About_Mobile_Personen_Card_Top_h4">Co-Founder</h4>
                </div>
              </div>
              <div id="About_Mobile_Personen_Card_Bottom">
                Tim ist seit mehreren Jahren im Blockchain-Bereich tätig und
                betreut Projekte im DeFi sowie NFT-Bereich bzgl. technischer &
                wirtschaftlicher Fragestellungen.
              </div>
            </div>
          </div>

          <div id="About_Mobile_Backed_Wrapper">
            <div id="About_Mobile_Backed_OC_BA">
              <div id="About_Mobile_Backed_OC_BA_Col">
                <div id="About_Mobile_Backed_OC_BA_Row">
                  <div id="About_Mobile_Backed_OC_BA_Row_Item">
                    <img src={About_BASH} id="About_BASH_MOB" />
                  </div>
                  <div id="About_Mobile_Backed_OC_BA_Row_Item">
                    <img src={About_OC} id="About_BASH_MOB" />
                  </div>
                </div>{" "}
                Backed by:
              </div>

              <div id="About_Mobile_Backed_OBased">
                <img src={About_Standort} id="About_Standort_img" />
                <div id="About_Mobile_Backed_OBased_Right">
                  <h3 id="About_Mobile_Backed_OBased_Right_h3">Kiel</h3>
                  Based in:
                </div>
              </div>

              <div id="About_Mobile_Backed_OC_BA_Col">
                <div id="About_Mobile_Backed_OC_BA_Row">
                  <div id="About_Mobile_Backed_OC_BA_Row_Item">
                    <a href="https://certification.mettl.com/dec-institute/applicant/result/download-certificate?key=Et%2FR%2BE0sLHNXhz5cW8Gzfg%3D%3D">
                      <img src={About_DEC} id="About_DEC_Mob" />
                    </a>{" "}
                  </div>
                  <div id="About_Mob_DEC_Right">
                    <h3 id="About_Mob_DEC_Right_h3">
                      CHARTERED BLOCKCHAIN EXPERT I (CBX®)
                    </h3>
                    DLT Education Consortium
                  </div>
                </div>{" "}
                Certified by:
              </div>
            </div>
          </div>
        </div>{" "}
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default About;
