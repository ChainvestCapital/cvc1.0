import { useEffect, useState } from "react";
import "./Mobile_Verg_Dokumente.css";

import checkGreen from "../../assets/images/checkGreen.png";
import ncheckRed from "../../assets/images/ncheckRed.png";
function mVergleichen_Dokumente(props) {
  function P1_BIB() {
    if (props.P1_BIB === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P1_Risk() {
    if (props.P1_Risk === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P1_VI() {
    if (props.P1_VI === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P1_SVB() {
    if (props.P1_SVB === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P1_KE() {
    if (props.P1_KE === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P1_MWE() {
    if (props.P1_MWE === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_BIB() {
    if (props.P2_BIB === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_Risk() {
    if (props.P2_Risk === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_VI() {
    if (props.P2_VI === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_SVB() {
    if (props.P2_SVB === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_KE() {
    if (props.P2_KE === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_MWE() {
    if (props.P2_MWE === "Vorhanden") {
      return <img src={checkGreen} id="mOverlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="mOverlay_Doks_RednCheck_Img" />;
    }
  }

  return props.trigger ? (
    <div>
      <div id="Vergleichen_White_Mobile_Wrapper">
        <h2 id="Vergleichen_White_Mobile_Wrapper_title">
          Verfügbare Dokumente
        </h2>
        <div id="Mobile_Vergleichen_Dokumente_Heading_Row">
          {" "}
          {props.Projekt1}
          <div id="Mobile_Vergleichen_Dokumente_Heading_Row_Counter">
            {props.P1_DoksCounter}
          </div>
        </div>{" "}
        <div id="CBCACE80vw_Row"></div>
        <div id="Mobile_Vergleichen_Row_Wrapper">
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Basisinformationsblatt {P1_BIB()}
          </div>
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Schuldverschreibungs-<br></br> bedingungen {P1_SVB()}
          </div>
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Risikohinweise {P1_Risk()}
          </div>
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Kurzexposé {P1_KE()}
          </div>
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Verbraucherinformationen {P1_VI()}
          </div>
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Marktwerteinschätzung {P1_MWE()}
          </div>
        </div>
        <div id="Mobile_Vergleichen_Dokumente_Heading_Row">
          {" "}
          {props.Projekt2}
          <div id="Mobile_Vergleichen_Dokumente_Heading_Row_Counter">
            {props.P2_DoksCounter}
          </div>
        </div>{" "}
        <div id="CBCACE80vw_Row"></div>
        <div id="Mobile_Vergleichen_Row_Wrapper">
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Basisinformationsblatt {P2_BIB()}
          </div>
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Schuldverschreibungs-<br></br> bedingungen {P2_SVB()}
          </div>
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Risikohinweise {P2_Risk()}
          </div>
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Kurzexposé {P2_KE()}
          </div>
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Verbraucherinformationen {P2_VI()}
          </div>
          <div id="Mobile_Vergleichen_Dokumente_Content_Row">
            Marktwerteinschätzung {P2_MWE()}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default mVergleichen_Dokumente;
