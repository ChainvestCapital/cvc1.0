import "./Comp_Overlay_PDokuemnte.css";
import checkGreen from "../../assets/images/checkGreen.png";
import ncheckRed from "../../assets/images/ncheckRed.png";
import React, { useState, useEffect } from "react";
import Doks_Ov_Bild from "../../assets/images/Doks_Ov_Bild.png";
import Info_hover from "../../assets/images/info.png";

function Comp_Overlay_Dokumente(props) {
  const [Doks_Counter_1, setDoks_Counter_1] = useState(5);
  const [Doks_Counter_2, setDoks_Counter_2] = useState(5);

  /*   Set Dokuemnten Verfügabrkeit       */

  function P1_BIB() {
    if (props.P1_BIB === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P1_Risk() {
    if (props.P1_Risk === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P1_VI() {
    if (props.P1_VI === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P1_SVB() {
    if (props.P1_SVB === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P1_KE() {
    if (props.P1_KE === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P1_MWE() {
    if (props.P1_MWE === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_BIB() {
    if (props.P2_BIB === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_Risk() {
    if (props.P2_Risk === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_VI() {
    if (props.P2_VI === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_SVB() {
    if (props.P2_SVB === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_KE() {
    if (props.P2_KE === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }

  function P2_MWE() {
    if (props.P2_MWE === "Vorhanden") {
      return <img src={checkGreen} id="Overlay_Doks_GreenCheck_Img" />;
    } else {
      return <img src={ncheckRed} id="Overlay_Doks_RednCheck_Img" />;
    }
  }
  const [cshow_hower_doks, setcshow_hower_doks] = useState(
    "show_hower_Dokumente_not"
  );
  return props.trigger ? (
    <div>
      <div id="Comp_Overlay_Dokumente_Wrapper">
        <div id={cshow_hower_doks}>
          <div id="Hover_Doks_Item_Wrapper">
            {" "}
            <h5 id="Hover_Doks_Item_h5">Basisinformationsblatt:</h5>
            Das Basisinformationsblatt stellt die wesentlichen Informationen des
            jeweiligen Anlageprodukts zur Verfügung. Die enthaltenen, gesetzlich
            vorgeschriebenen Informationen helfen dabei, die Art, das Risiko,
            die Kosten, sowie die möglichen Gewinne und Verluste des Produkts zu
            verstehen.
          </div>

          <div id="Hover_Doks_Item_Wrapper">
            {" "}
            <h5 id="Hover_Doks_Item_h5">Schuldverschreibungsbedingungen:</h5>
            Es handelt sich dabei um ein rechtliches Dokument, welches die
            Rechte und Pflichten des Emittenten, sowie des Käufers aufzeigt.{" "}
          </div>

          <div id="Hover_Doks_Item_Wrapper">
            {" "}
            <h5 id="Hover_Doks_Item_h5">Risken:</h5>
            Die Risikohinweise des jeweiligen Anlageprojekts informieren über
            die mit dem Wertpapier, der Emittentin und einem etwaigen
            Garantiegeber verbundenen Risiken. (Dabei können nicht sämtliche,
            sondern nur die wesentlichen, mit der Anlage verbundenen, Risiken
            aufgeführt werden)
          </div>

          <div id="Hover_Doks_Item_Wrapper">
            <h5 id="Hover_Doks_Item_h5">Kurzexposé:</h5>
            Es handelt sich dabei um eine kurze Beschreibung der Immobilie,
            welche Fotos, sowie die wichtigsten Informationen des jeweiligen
            Anlageprojekts enthält.
          </div>

          <div id="Hover_Doks_Item_Wrapper">
            {" "}
            <h5 id="Hover_Doks_Item_h5">Verbraucherinformationen:</h5>
            Es handelt sich dabei um Informationen, welche die Transparenz
            hinsichtlich der Eigenschaften, sowie Stärken und Schwächen der
            Produkte und Leistungen erhöhen.{" "}
          </div>

          <div id="Hover_Doks_Item_Wrapper">
            {" "}
            <h5 id="Hover_Doks_Item_h5">Marktwerteinschätzung:</h5>
            Bei einer Marktwerteinschätzung handelt es sich um eine Ermittlung
            des Marktwerts des jeweiligen Anlageprojekts.{" "}
          </div>
        </div>
        <div id="Comp_Overlay_Dokumente_Top">
          <h2 id="Vergleichen2_h2">Verfügbare Dokumente</h2>
          <div id="Comp_Overlay_Dokumente_Info">
            <div
              id="Comp_Overlay_Financial_Info"
              onMouseEnter={() => setcshow_hower_doks("show_hower_Dokumente")}
              onMouseLeave={() =>
                setcshow_hower_doks("show_hower_Dokumente_not")
              }
            >
              {" "}
              <img src={Info_hover} id="Info_hover_Img" />
            </div>
          </div>
        </div>
        <div id="Comp_Overlay_Dokumente_Bottom">
          <div id="Comp_Overlay_Dokumente_Bottom_Left">
            <div id="Comp_Overlay_Dokumente_Bottom_Projekt">
              <div id="Comp_Overlay_Dokumente_Bottom_Left_Table">
                <div id="Comp_Overlay_Dokumente_Bottom_Left_Table_row"></div>{" "}
                <div id="Comp_Overlay_Dokumente_Bottom_Left_Table_row">
                  <div id="Comp_Overlay_Dokumente_Bottom_Left_Table_row_Col">
                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P1_BIB()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Basisinformationsblatt
                      </h4>
                    </div>

                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P1_SVB()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Schuldverschreibungs-<br></br> bedingungen
                      </h4>
                    </div>
                  </div>
                  <div id="Comp_Overlay_Dokumente_Bottom_Left_Table_row_Col">
                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P1_Risk()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Risikohinweise
                      </h4>
                    </div>

                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P1_KE()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Kurzexposé
                      </h4>
                    </div>
                  </div>
                  <div id="Comp_Overlay_Dokumente_Bottom_Left_Table_row_Col">
                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P1_VI()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Verbraucherinformationen
                      </h4>
                    </div>{" "}
                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P1_MWE()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Marktwerteinschätzung
                      </h4>
                    </div>{" "}
                  </div>
                </div>
              </div>

              <div id="Comp_Overlay_Dokumente_Bottom_Left_Counter">
                <div id="Projekt_Doks_Counter">{props.P1_DoksCounter}</div>
                <h3 id="Comp_Overlay_Dokumente_Bottom_Left_Counter_h3">
                  {props.Projekt1}
                </h3>
              </div>
            </div>

            <div id="Comp_Overlay_Dokumente_Bottom_Left_Divide"></div>
            <div id="Comp_Overlay_Dokumente_Bottom_Projekt">
              <div id="Comp_Overlay_Dokumente_Bottom_Left_Table">
                <div id="Comp_Overlay_Dokumente_Bottom_Left_Table_row"></div>{" "}
                <div id="Comp_Overlay_Dokumente_Bottom_Left_Table_row">
                  <div id="Comp_Overlay_Dokumente_Bottom_Left_Table_row_Col">
                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P2_BIB()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Basisinformationsblatt
                      </h4>
                    </div>

                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P2_SVB()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Schuldverschreibungs-<br></br> bedingungen
                      </h4>
                    </div>
                  </div>
                  <div id="Comp_Overlay_Dokumente_Bottom_Left_Table_row_Col">
                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P2_Risk()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Risikohinweise
                      </h4>
                    </div>

                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P2_KE()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Kurzexposé
                      </h4>
                    </div>
                  </div>
                  <div id="Comp_Overlay_Dokumente_Bottom_Left_Table_row_Col">
                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P2_VI()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Verbraucherinformationen
                      </h4>
                    </div>{" "}
                    <div id="Comp_Overlay_Dokumente_Table_Item">
                      {P2_MWE()}
                      <h4 id="Comp_Overlay_Dokumente_Table_Item_h4">
                        Marktwerteinschätzung
                      </h4>
                    </div>{" "}
                  </div>
                </div>
              </div>

              <div id="Comp_Overlay_Dokumente_Bottom_Left_Counter">
                <div id="Projekt_Doks_Counter">{props.P2_DoksCounter}</div>
                <h3 id="Comp_Overlay_Dokumente_Bottom_Left_Counter_h3">
                  {props.Projekt2}
                </h3>
              </div>
            </div>
          </div>
          <div id="Comp_Overlay_Dokumente_Bottom_Right">
            <img src={Doks_Ov_Bild} id="Doks_Ov_Bild_Img" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Comp_Overlay_Dokumente;
