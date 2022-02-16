import React from "react";
import "./Mobile_Footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Mobile_Footer(props) {
  return (
    <div>
      <div id="Mobile_Footer_Wrapper">
        <div id="Mobile_Footer_Top">
          <h2 id="Mobile_Footer_h2">
            Let digital assets deploy their full potential
          </h2>
          <h5 id="Mobile_Footer_H5">
            Die Schnittstelle zwischen digitalen Wertpapieren und einer breiten
            Investorencommunity.
          </h5>
          <div id="Mobile_Footer_Top_Spalten">
            <div id="Mobile_Footer_Top_Spalte">
              <h3 id="Mobile_Footer_Spalte_h3">Unternehmen</h3>{" "}
              <HashLink to="../Ueber-uns#">
                <div id="Mobile_Footer_Spalte_Eintrag">
                  <h4 id="Mobile_Footer_Spalte_Eintrag_h4">Über uns</h4>
                </div>{" "}
              </HashLink>
              <HashLink to="../Emittenten#">
                <div id="Mobile_Footer_Spalte_Eintrag">
                  <h4 id="Mobile_Footer_Spalte_Eintrag_h4">Emittenten</h4>
                </div>{" "}
              </HashLink>
              <HashLink to="../FAQ#">
                <div id="Mobile_Footer_Spalte_Eintrag">
                  <h4 id="Mobile_Footer_Spalte_Eintrag_h4">FAQ</h4>
                </div>{" "}
              </HashLink>
              <HashLink to="../Digitale-Wertpapiere#">
                <div id="Mobile_Footer_Spalte_Eintrag">
                  <h4 id="Mobile_Footer_Spalte_Eintrag_h4">Alle Projekte</h4>
                </div>
              </HashLink>
            </div>
            <div id="Mobile_Footer_Top_Spalte">
              <h3 id="Mobile_Footer_Spalte_h3">Social Media</h3>
              <a href="https://de.linkedin.com/company/chainvestcapital">
                <div id="Mobile_Footer_Spalte_Eintrag">
                  <h4 id="Mobile_Footer_Spalte_Eintrag_h4">LinkedIn</h4>
                </div>
              </a>
              <a href="https://medium.com/@chainvestcapital">
                <div id="Mobile_Footer_Spalte_Eintrag">
                  <h4 id="Mobile_Footer_Spalte_Eintrag_h4">Medium</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="Mobile_Footer_Bottom">
          <div id="Mobile_Footer_Bottom_Left">
            <h5 id="Mobile_Footer_Bottom_Left_h5">
              Copyright Chainvest Capital 2022
            </h5>
          </div>
          <div id="Mobile_Footer_Bottom_Right">
            <HashLink to="../Impressum#">
              <div id="Mobile_Footer_Bottom_RightEintrag">
                <h5 id="Mobile_Footer_Bottom_Right_Eintrag_h5">Impressum</h5>
              </div>
            </HashLink>
            <HashLink to="../Datenschutzerklaerung#">
              <div id="Mobile_Footer_Bottom_RightEintrag">
                <h5 id="Mobile_Footer_Bottom_Right_Eintrag_h5">
                  Datenschutzerklärung
                </h5>
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile_Footer;
