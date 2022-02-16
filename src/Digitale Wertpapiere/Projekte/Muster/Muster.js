import Top_nav_Bar from "../../../components/navigation/Top_Nav_Bar";
import Unternehmen from "../../../assets/images/Unternehmen.png";
import Risiko from "../../../assets/images/PL_Risiko.png";
import Dokumente from "../../../assets/images/Dokumente.png";
import Token from "../../../assets/images/Unternehmen.png";
import Rechtlich from "../../../assets/images/Rechtlich.png";

import "./Muster.css";
import { useState } from "react/cjs/react.development";

import DokumenteFrame from "./Frames/Dokumente";
import UnternehmenFrame from "./Frames/Unternehmen";
import Token_SaleFrame from "./Frames/Token_Sale";
import RechtlichFrame from "./Frames/Rechtlich";
import RisikoFrame from "./Frames/Risiko";

import Starting_Frame_Choice from "./Frames/Components/Starting_Frame_Choice";
import arrow from "../../../assets/images/Arrow_white.png";
import Footer from "../../../components/navigation/Footer";

import Top_Section from "../../Components/Top_Section";

function Kategorien_Filter() {
  function openFrame_Unternehmen() {
    setUnternehmen_isShown(true);
    setDokumente_isShown(false);

    setToken_Sale_isShown(false);
    setRechtlich_isShown(false);
    setRisiko_isShown(false);

    setProjekt_Starting_Frame("Projekt_Starting_Frame_inaktiv");
    setMenue_Row1_Zustand("aktivMenüRow");
    setMenue_Row2_Zustand("inaktivMenüRow");
    setMenue_Row3_Zustand("inaktivMenüRow");
    setMenue_Row4_Zustand("inaktivMenüRow");
    setMenue_Row5_Zustand("inaktivMenüRow");
  }
  function openFrame_Token_Sale() {
    setToken_Sale_isShown(true);
    setDokumente_isShown(false);
    setUnternehmen_isShown(false);

    setRechtlich_isShown(false);
    setRisiko_isShown(false);
    setProjekt_Starting_Frame("Projekt_Starting_Frame_inaktiv");
    setMenue_Row1_Zustand("inaktivMenüRow");
    setMenue_Row2_Zustand("aktivMenüRow");
    setMenue_Row3_Zustand("inaktivMenüRow");
    setMenue_Row4_Zustand("inaktivMenüRow");
    setMenue_Row5_Zustand("inaktivMenüRow");
  }
  function openFrame_Dokumentee() {
    setDokumente_isShown(true);
    setUnternehmen_isShown(false);
    setToken_Sale_isShown(false);
    setRechtlich_isShown(false);
    setRisiko_isShown(false);
    setProjekt_Starting_Frame("Projekt_Starting_Frame_inaktiv");
    setMenue_Row1_Zustand("inaktivMenüRow");
    setMenue_Row2_Zustand("inaktivMenüRow");
    setMenue_Row3_Zustand("aktivMenüRow");
    setMenue_Row4_Zustand("inaktivMenüRow");
    setMenue_Row5_Zustand("inaktivMenüRow");
  }
  function openFrame_Rechtlich() {
    setRechtlich_isShown(true);
    setDokumente_isShown(false);
    setUnternehmen_isShown(false);
    setToken_Sale_isShown(false);

    setRisiko_isShown(false);
    setProjekt_Starting_Frame("Projekt_Starting_Frame_inaktiv");
    setMenue_Row1_Zustand("inaktivMenüRow");
    setMenue_Row2_Zustand("inaktivMenüRow");
    setMenue_Row3_Zustand("inaktivMenüRow");
    setMenue_Row4_Zustand("aktivMenüRow");
    setMenue_Row5_Zustand("inaktivMenüRow");
  }
  function openFrame_Risiko() {
    setRisiko_isShown(true);
    setDokumente_isShown(false);
    setUnternehmen_isShown(false);
    setToken_Sale_isShown(false);
    setRechtlich_isShown(false);
    setProjekt_Starting_Frame("Projekt_Starting_Frame_inaktiv");

    setMenue_Row1_Zustand("inaktivMenüRow");
    setMenue_Row2_Zustand("inaktivMenüRow");
    setMenue_Row3_Zustand("inaktivMenüRow");
    setMenue_Row4_Zustand("inaktivMenüRow");
    setMenue_Row5_Zustand("aktivMenüRow");
  }

  const [Dokumente_isShown, setDokumente_isShown] = useState(false);
  const [Unternehmen_isShown, setUnternehmen_isShown] = useState(false);
  const [Token_Sale_isShown, setToken_Sale_isShown] = useState(false);
  const [Rechtlich_isShown, setRechtlich_isShown] = useState(false);
  const [Risiko_isShown, setRisiko_isShown] = useState(false);

  const [Menue_Row1_Zustand, setMenue_Row1_Zustand] =
    useState("inaktivMenüRow");
  const [Menue_Row2_Zustand, setMenue_Row2_Zustand] =
    useState("inaktivMenüRow");
  const [Menue_Row3_Zustand, setMenue_Row3_Zustand] =
    useState("inaktivMenüRow");
  const [Menue_Row4_Zustand, setMenue_Row4_Zustand] =
    useState("inaktivMenüRow");
  const [Menue_Row5_Zustand, setMenue_Row5_Zustand] =
    useState("inaktivMenüRow");

  const [Projekt_Starting_Frame, setProjekt_Starting_Frame] = useState(
    "Projekt_Starting_Frame"
  );
  return (
    <div>
      <div id="Desktop_Wrapper">
        <Top_nav_Bar />
        <Top_Section />

        <div id="Projekt_Projekt_Section_Wrapper">
          <div id="Projekt_Top_Fix_Section_Content_Layer"></div>

          <div id={Projekt_Starting_Frame}>
            <div id="Projekt_Starting_Frame_Inner">
              <div id="Projekt_Starting_Frame_Layer"></div>
              <div id="Projekt_Starting_Frame_Content">
                <div onClick={() => openFrame_Unternehmen()}>
                  <Starting_Frame_Choice
                    img={Unternehmen}
                    title="Unternehmen"
                    BGColor="Starting_Frame_Choice_Circle_blue"
                    text="Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne per E-Mail zur Verfügung. Häufig gestellte Fragen zum Listingprozess."
                  />
                </div>
                <div onClick={() => openFrame_Token_Sale()}>
                  <Starting_Frame_Choice
                    img={Token}
                    title="Token Ssssale"
                    BGColor="Starting_Frame_Choice_Circle_blue"
                    text="Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne per E-Mail zur Verfügung. Häufig gestellte Fragen zum Listingprozess."
                  />
                </div>{" "}
                <div onClick={() => openFrame_Dokumentee()}>
                  <Starting_Frame_Choice
                    img={Dokumente}
                    BGColor="Starting_Frame_Choice_Circle_blue"
                    title="Dokumente"
                    text="Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne per E-Mail zur Verfügung. Häufig gestellte Fragen zum Listingprozess."
                  />{" "}
                </div>{" "}
                <div onClick={() => openFrame_Rechtlich()}>
                  <Starting_Frame_Choice
                    img={Rechtlich}
                    title="Rechtlich"
                    BGColor="Starting_Frame_Choice_Circle_blue"
                    text="Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne per E-Mail zur Verfügung. Häufig gestellte Fragen zum Listingprozess."
                  />
                </div>
                <a href="">
                  <Starting_Frame_Choice
                    img={arrow}
                    title="Zum Projekt"
                    BGColor="Starting_Frame_Choice_Circle_yellow"
                    text="Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne per E-Mail zur Verfügung. Häufig gestellte Fragen zum Listingprozess."
                  />
                </a>
                <div onClick={() => openFrame_Risiko()}>
                  <Starting_Frame_Choice
                    img={Risiko}
                    title="Risiko"
                    BGColor="Starting_Frame_Choice_Circle_blue"
                    text="Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne per E-Mail zur Verfügung. Häufig gestellte Fragen zum Listingprozess."
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="Projekt_After_Start_Ansicht">
            <div id="Projekt_Left_Menue">
              <div
                id={Menue_Row1_Zustand}
                onClick={() => openFrame_Unternehmen()}
              >
                <img src={Unternehmen} id="Projekt_Left_Menue_Row_img" alt="" />
                <h3 id="Projekt_Left_Menue_Row_h3">Unternehmen</h3>
              </div>{" "}
              <div
                id={Menue_Row2_Zustand}
                onClick={() => openFrame_Token_Sale()}
              >
                <img src={Token} id="Projekt_Left_Menue_Row_img" alt="" />
                <h3 id="Projekt_Left_Menue_Row_h3">Token Sale</h3>
              </div>
              <div
                id={Menue_Row3_Zustand}
                onClick={() => openFrame_Dokumentee()}
              >
                <img src={Dokumente} id="Projekt_Left_Menue_Row_img" alt="" />
                <h3 id="Projekt_Left_Menue_Row_h3">Dokumente</h3>
              </div>
              <div
                id={Menue_Row4_Zustand}
                onClick={() => openFrame_Rechtlich()}
              >
                <img src={Rechtlich} id="Projekt_Left_Menue_Row_img" alt="" />
                <h3 id="Projekt_Left_Menue_Row_h3">Rechtlich</h3>
              </div>
              <div id={Menue_Row5_Zustand} onClick={() => openFrame_Risiko()}>
                <img src={Risiko} id="Projekt_Left_Menue_Row_img" alt="" />
                <h3 id="Projekt_Left_Menue_Row_h3">Risiko</h3>
              </div>
            </div>

            <div id="Projekt_Right_Content">
              {" "}
              <UnternehmenFrame
                trigger={Unternehmen_isShown}
                setTrigger={setUnternehmen_isShown}
              />
              <DokumenteFrame
                trigger={Dokumente_isShown}
                setTrigger={setDokumente_isShown}
              />
              <Token_SaleFrame
                trigger={Token_Sale_isShown}
                setTrigger={setToken_Sale_isShown}
              />
              <RechtlichFrame
                trigger={Rechtlich_isShown}
                setTrigger={setRechtlich_isShown}
              />
              <RisikoFrame
                trigger={Risiko_isShown}
                setTrigger={setRisiko_isShown}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <div id="Mobile_Wrapper">Mobile</div>
    </div>
  );
}

export default Kategorien_Filter;
