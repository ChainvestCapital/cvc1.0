import "./mobile_menue_popup.css";
import { Link } from "react-router-dom";
import Wertpapier from "../assets/images/Wertpapier.png";
import logo from "../assets/images/Logo_Trans.png";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import CloseImg from "../assets/images/Close.png";
import Menü_Unt from "../assets/images/Menü_Unt.png";
import Menü_Sek from "../assets/images/Menü_Sek.png";

import Mobile_menue_popup_Projektex from "./Mobile_Menue_Frames/MM_Projekte";
import Mobile_menue_popup_Vergleichenx from "./Mobile_Menue_Frames/MM_Vergleichen";
import Mobile_menue_popup_Academyx from "./Mobile_Menue_Frames/MM_Academy";
import Mobile_menue_popup_CVCx from "./Mobile_Menue_Frames/MM_CVC";

import MM_Academy from "../assets/images/MM_Academy.png";
import MM_Projekte from "../assets/images/MM_Projekte.png";
import MM_Vergleichen from "../assets/images/MM_Vergleichen.png";
import MM_CVC from "../assets/images/MM_CVC.png";

import MM_Home from "../assets/images/MM_Home.png";

function Mobile_menue_pop_up(props) {
  const [Mobile_menue_popup_Projekte, setmobile_menue_popup_Projekte] =
    useState(true);
  const [Mobile_menue_popup_CVC, setmobile_menue_popup_CVC] = useState(false);
  const [Mobile_menue_popup_Vergleichen, setmobile_menue_popup_Vergleichen] =
    useState(false);
  const [Mobile_menue_popup_Academy, setmobile_menue_popup_Academy] =
    useState(false);

  ////Buttoms

  const [AcademyButtom, setAcademyButtom] = useState("MenueButton_INaktiv");
  const [ProjekteButtom, setProjekteButtom] = useState("MenueButton_aktiv");
  const [CVCButtom, setCVCButtom] = useState("MenueButton_INaktiv");
  const [VergleichenButtom, setVergleichenButtom] = useState(
    "MenueButton_INaktiv"
  );

  //ClickHandler

  function openProjekt() {
    setmobile_menue_popup_Projekte(true);
    setmobile_menue_popup_CVC(false);
    setmobile_menue_popup_Vergleichen(false);
    setmobile_menue_popup_Academy(false);

    setVergleichenButtom("MenueButton_INaktiv");
    setCVCButtom("MenueButton_INaktiv");
    setProjekteButtom("MenueButton_aktiv");
    setAcademyButtom("MenueButton_INaktiv");
  }
  function openVergleichen() {
    setmobile_menue_popup_Projekte(false);
    setmobile_menue_popup_CVC(false);
    setmobile_menue_popup_Vergleichen(true);
    setmobile_menue_popup_Academy(false);
    setVergleichenButtom("MenueButton_aktiv");
    setCVCButtom("MenueButton_INaktiv");
    setProjekteButtom("MenueButton_INaktiv");
    setAcademyButtom("MenueButton_INaktiv");
  }

  function openCVC() {
    setmobile_menue_popup_Projekte(false);
    setmobile_menue_popup_CVC(true);
    setmobile_menue_popup_Vergleichen(false);
    setmobile_menue_popup_Academy(false);
    setVergleichenButtom("MenueButton_INaktiv");
    setCVCButtom("MenueButton_aktiv");
    setProjekteButtom("MenueButton_INaktiv");
    setAcademyButtom("MenueButton_INaktiv");
  }
  function openAcademy() {
    setmobile_menue_popup_Projekte(false);
    setmobile_menue_popup_CVC(false);
    setmobile_menue_popup_Vergleichen(false);
    setmobile_menue_popup_Academy(true);
    setVergleichenButtom("MenueButton_INaktiv");
    setCVCButtom("MenueButton_INaktiv");
    setProjekteButtom("MenueButton_INaktiv");
    setAcademyButtom("MenueButton_aktiv");
  }
  function openHome() {}
  return props.trigger ? (
    <div>
      <div id="mobile_menue_pop_up_wrapper">
        <div id="mobile_menue_pop_up_White"></div>
        <div id="mobile_menue_pop_up_Content">
          <div id="mobile_menue_pop_up_Content_Full_Wrapper">
            {props.children}{" "}
            <div id="mobile_menue_pop_up_Content_wrapper">
              <div id="mobile_menue_pop_up_Content_Top">
                <button
                  className="close-btn"
                  id="Closing_Wrapper_Circel"
                  onClick={() => props.setTrigger(false)}
                >
                  <img src={CloseImg} id="Closing_Wrapper_Circle_Img" alt="" />
                </button>
              </div>

              <div id="mobile_menue_pop_up_Content_Frame_wRAPPER">
                <Mobile_menue_popup_Projektex
                  trigger={Mobile_menue_popup_Projekte}
                  setTrigger={setmobile_menue_popup_Projekte}
                />
                <Mobile_menue_popup_CVCx
                  trigger={Mobile_menue_popup_CVC}
                  setTrigger={setmobile_menue_popup_CVC}
                />

                <Mobile_menue_popup_Vergleichenx
                  trigger={Mobile_menue_popup_Vergleichen}
                  setTrigger={setmobile_menue_popup_Vergleichen}
                />

                <Mobile_menue_popup_Academyx
                  trigger={Mobile_menue_popup_Academy}
                  setTrigger={setmobile_menue_popup_Academy}
                />
              </div>

              <div id="mobile_menue_pop_up_Content_Buttom">
                <div id="mobile_menue_pop_up_Content_Buttom_LEFT">
                  <div id={ProjekteButtom} onClick={() => openProjekt()}>
                    <img
                      src={MM_Projekte}
                      id="mobile_menue_pop_up_Content_Buttom_Bottom_img"
                    />
                    <h3 id="mobile_menue_pop_up_Content_Buttom_Bottom_h3">
                      Projekte
                    </h3>
                  </div>

                  <div id={VergleichenButtom} onClick={() => openVergleichen()}>
                    <img
                      src={MM_Vergleichen}
                      id="mobile_menue_pop_up_Content_Buttom_Bottom_img"
                    />

                    <h3 id="mobile_menue_pop_up_Content_Buttom_Bottom_h3">
                      Vergleichen
                    </h3>
                  </div>
                </div>

                <div id="mobile_menue_pop_up_Content_Buttom_MID">
                  <HashLink to="../#">
                    <div
                      id="mobile_menue_pop_up_Content_Buttom_MID_Home"
                      onClick={() => props.setTrigger(false)}
                    >
                      <img
                        src={MM_Home}
                        id="mobile_menue_pop_up_Content_Buttom_Bottom_img_Home"
                      />
                    </div>{" "}
                  </HashLink>
                </div>
                <div id="mobile_menue_pop_up_Content_Buttom_Right">
                  <div id={AcademyButtom} onClick={() => openAcademy()}>
                    <img
                      src={MM_Academy}
                      id="mobile_menue_pop_up_Content_Buttom_Bottom_img"
                    />
                    <h3 id="mobile_menue_pop_up_Content_Buttom_Bottom_h3">
                      Academy
                    </h3>
                  </div>

                  <div id={CVCButtom} onClick={() => openCVC()}>
                    <img
                      src={MM_CVC}
                      id="mobile_menue_pop_up_Content_Buttom_Bottom_img"
                    />
                    <h3 id="mobile_menue_pop_up_Content_Buttom_Bottom_h3">
                      Chainvest
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Mobile_menue_pop_up;
