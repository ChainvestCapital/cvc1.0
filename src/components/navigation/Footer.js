import "./Footer.css";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer_11(props) {
  return (
    <div>
      <div id="Footer_11_Wrapper">
        <div id="Footer_11_Top">
          <div id="Footer_11_Top_Left">
            <h2 id="Footer_11_Top_h2"> Finden • Vergleichen • Verstehen</h2>

            <h3 id="Footer_11_Top_h3">
              Chainvest Capital - Für mehr Transparenz und <br></br> Übersicht
              im Markt der digitalen Wertpapiere
            </h3>
          </div>
          <div id="Footer_11_Top_Right">
            <div id="Footer_11_Top_Right_Spalte">
              <h3 id="Footer_11_Top_Right_Spalte_h3">Für Investoren</h3>
              <HashLink to="../Digitale-Wertpapiere#">
                <div id="Footer_11_Top_Right_Spalte_Div">
                  <h4 id="Footer_11_Top_Right_Spalte_h4">Alle Projekte</h4>
                </div>
              </HashLink>
              <HashLink to="../Vergleichstool#">
                <div id="Footer_11_Top_Right_Spalte_Div">
                  <h4 id="Footer_11_Top_Right_Spalte_h4">Vergleichen</h4>
                </div>
              </HashLink>
              <HashLink to="../Academy#">
                <div id="Footer_11_Top_Right_Spalte_Div">
                  <h4 id="Footer_11_Top_Right_Spalte_h4">Academy</h4>
                </div>
              </HashLink>
              <HashLink to="../FAQ#">
                {" "}
                <div id="Footer_11_Top_Right_Spalte_Div">
                  <h4 id="Footer_11_Top_Right_Spalte_h4">FAQ</h4>
                </div>
              </HashLink>
            </div>

            <div id="Footer_11_Top_Right_Spalte">
              <h3 id="Footer_11_Top_Right_Spalte_h3">Unternehmen</h3>
              <HashLink to="../Ueber-uns#">
                {" "}
                <div id="Footer_11_Top_Right_Spalte_Div">
                  <h4 id="Footer_11_Top_Right_Spalte_h4">Über uns</h4>
                </div>
              </HashLink>

              <HashLink to="../Unternehmen#">
                {" "}
                <div id="Footer_11_Top_Right_Spalte_Div">
                  <h4 id="Footer_11_Top_Right_Spalte_h4">Für Unternehmen</h4>
                </div>
              </HashLink>

              <HashLink to="../Emittenten#">
                {" "}
                <div id="Footer_11_Top_Right_Spalte_Div">
                  <h4 id="Footer_11_Top_Right_Spalte_h4">Emittenten</h4>
                </div>
              </HashLink>
            </div>

            <div id="Footer_11_Top_Right_Spalte1">
              <h3 id="Footer_11_Top_Right_Spalte_h3">Social Media</h3>
              <a href="https://de.linkedin.com/company/chainvestcapital">
                <div id="Footer_11_Top_Right_Spalte_Div">
                  <h4 id="Footer_11_Top_Right_Spalte_h4">LinkedIn</h4>
                </div>
              </a>{" "}
              <a href="https://medium.com/@chainvestcapital">
                <div id="Footer_11_Top_Right_Spalte_Div">
                  <h4 id="Footer_11_Top_Right_Spalte_h4">Medium</h4>
                </div>{" "}
              </a>
            </div>
          </div>
        </div>
        <div id="Footer_11_Bottom">
          <h3 id="Footer_11_Bottom_h3">Copyright Chainvest Capital 2022</h3>
          <div id="Footer_11_Bottom_Right">
            <HashLink to="../Impressum#">
              <div id="Footer_11_Bottom_Right_Imp">
                <h3 id="Footer_11_Bottom_h3">Impressum</h3>
              </div>
            </HashLink>
            <HashLink to="../Datenschutzerklaerung#">
              <div id="Footer_11_Bottom_Right_Datenschutzerklärung">
                <h3 id="Footer_11_Bottom_h3">Datenschutzerklärung</h3>
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer_11;
