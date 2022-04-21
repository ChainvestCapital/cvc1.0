import "./Vergleichen/Vergleichen2.css";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";
import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";
import Footer from "./components/navigation/Footer";
import { HashLink } from "react-router-hash-link";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import Finance_IMG from "./assets/images/Finance.png";
import Übersicht_IMG from "./assets/images/Übersicht.png";
import Auswahl_IMG from "./assets/images/Auswahl.png";
import Projekt_IMG from "./assets/images/Projekt.png";
import Doks_Img from "./assets/images/Doks.png";

import Boernerstraße_Img from "./assets/images/Börnestrasse_Galerie_1.jpg";
import LakeSide_Img from "./assets/images/LakeSide_Img.jpg";
import Slider from "@mui/material/Slider";
import close from "./assets/images/Close.png";
import Projekt_Kachel_Rechts from "./Vergleichen/Components/Projekt_Kachel_Rechts_Small";
import Comp_Overlay_Übersicht from "./Vergleichen/Components/Comp_Overlay_Übersicht.js";
import Comp_Overlay_Projekte from "./Vergleichen/Components/Comp_Overlay_Projekte.js";
import Comp_Overlay_Financial from "./Vergleichen/Components/Comp_Overlay_Financial.js";
import Comp_Overlay_PDokuemnte from "./Vergleichen/Components/Comp_Overlay_PDokuemnte.js";
import { useState, useEffect } from "react";
import Vergleich_Pop_Up_Projekt from "./Vergleichen/Components/Vergleich_Pop_Up_Projekt";
import * as React from "react";
import Vergleich_Scroll_Down from "./assets/images/Vergleich_Scroll_Down.png";

import Mobile_Verg_Financials from "./Vergleichen/MobileComp/Mobile_Verg_Financials.js";
import Mobile_Verg_Dokumente from "./Vergleichen/MobileComp/Mobile_Verg_Dokumente.js";
import Mobile_Verg_Projekt from "./Vergleichen/MobileComp/Mobile_Verg_Projekt.js";
import Mobile_Verg_Übersicht from "./Vergleichen/MobileComp/Mobile_Verg_Übersicht.js";

import Mobile_menue from "./MobileComponents/Mobile_menue";
import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import Mobile_Footer from "./MobileComponents/Mobile_Footer";
import Mobile_Vergleichen_Projekt_Comp from "./Vergleichen/MobileComp/Mobile_Vergleichen_Projekt_Comp.js";
import { SettingsEthernet } from "@mui/icons-material";
function Vergleichen2(props) {
  /*    Menü      */
  const [Menue_Choice1, setMenue_Choice1] = useState(
    "Vergleichen_Results_Menue_Item_choosen"
  );
  const [Menue_Choice2, setMenue_Choice2] = useState(
    "Vergleichen_Results_Menue_Item"
  );
  const [Menue_Choice3, setMenue_Choice3] = useState(
    "Vergleichen_Results_Menue_Item"
  );
  const [Menue_Choice4, setMenue_Choice4] = useState(
    "Vergleichen_Results_Menue_Item"
  );

  function openÜbersicht() {
    setMenue_Choice1("Vergleichen_Results_Menue_Item_choosen");
    setMenue_Choice2("Vergleichen_Results_Menue_Item");
    setMenue_Choice3("Vergleichen_Results_Menue_Item");
    setMenue_Choice4("Vergleichen_Results_Menue_Item");

    setOverlay_Übersicht(true);
    setOverlay_Projekte(false);
    setOverlay_Financial(false);
    setOverlay_Dokumente(false);
  }

  function openProjekt() {
    setMenue_Choice1("Vergleichen_Results_Menue_Item");
    setMenue_Choice2("Vergleichen_Results_Menue_Item_choosen");
    setMenue_Choice3("Vergleichen_Results_Menue_Item");
    setMenue_Choice4("Vergleichen_Results_Menue_Item");
    setOverlay_Übersicht(false);
    setOverlay_Projekte(true);
    setOverlay_Financial(false);
    setOverlay_Dokumente(false);
  }

  function openFinancial() {
    setMenue_Choice1("Vergleichen_Results_Menue_Item");
    setMenue_Choice2("Vergleichen_Results_Menue_Item");
    setMenue_Choice3("Vergleichen_Results_Menue_Item_choosen");
    setMenue_Choice4("Vergleichen_Results_Menue_Item");

    setOverlay_Übersicht(false);
    setOverlay_Projekte(false);
    setOverlay_Financial(true);
    setOverlay_Dokumente(false);
  }

  function openDokumente() {
    setMenue_Choice1("Vergleichen_Results_Menue_Item");
    setMenue_Choice2("Vergleichen_Results_Menue_Item");
    setMenue_Choice3("Vergleichen_Results_Menue_Item");
    setMenue_Choice4("Vergleichen_Results_Menue_Item_choosen");
    setOverlay_Übersicht(false);
    setOverlay_Projekte(false);
    setOverlay_Financial(false);
    setOverlay_Dokumente(true);
  }

  /*      Content_Comp          */

  const [Overlay_Übersicht, setOverlay_Übersicht] = useState(true);
  const [Overlay_Projekte, setOverlay_Projekte] = useState(false);
  const [Overlay_Financial, setOverlay_Financial] = useState(false);
  const [Overlay_Dokumente, setOverlay_Dokumente] = useState(false);

  /*       Projekt Auswahl         */
  /*  AWS Fetching  */

  useEffect(() => {
    fetchProjekte();
  }, []);
  const [shownProjects2, setshownProjects2] = useState([]);
  const [ProjekteArray2, setProjekteArray2] = useState([]);

  const [shownProjects, setshownProjects] = useState([]);
  const [ProjekteArray, setProjekteArray] = useState([]);
  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setshownProjects(ProjekteList);
      setProjekteArray(ProjekteList);
      setshownProjects2(ProjekteList);
      setProjekteArray2(ProjekteList);
    } catch (error) {}
  };
  /*  Filter  */

  const [chossenProjekt1, setchossenProjekt1] = useState([]);
  const [chossenProjekt1yellowMark, setchossenProjekt1yellowMark] = useState(
    []
  );

  const [chossenProjekt2, setchossenProjekt2] = useState([]);
  /*      Projekt 1 ausgewählt        */
  function P1_ausgewählt(Projekt) {
    setchossenProjekt1(Projekt);
    setchossenProjekt1yellowMark(Projekt.name);
  }
  /*      Projekt 2 ausgewählt        */

  function P2_ausgewählt(Projekt) {
    setchossenProjekt2(Projekt);
  }
  /*      Standard Ansicht Grid 1      */
  function P1_AlleShown() {
    if (aktiverFilter === "Alle") {
      return (
        <div id="Vegleich_Prop_Up_Projekte_Grid_Wrapper">
          <div id="Vegleich_Prop_Up_Projekte_Grid">
            <ul id="Vegleich_Prop_Up_Projekte_Grid_ul">
              {shownProjects.map((Projekt) => {
                if (Projekt.Kategorie === "Immobilien") {
                  return (
                    <li
                      id="Vegleich_Prop_Up_Projekte_Grid_li"
                      onClick={() => P1_ausgewählt(Projekt)}
                    >
                      <Vergleich_Pop_Up_Projekt
                        title={Projekt.name}
                        KategorieBildLink={Projekt.KategorieBildLink}
                        Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                        ErwarteteRendite={Projekt.ErwRendite}
                        Typ={Projekt.Typ}
                        Logo={Projekt.LogoLink}
                        titleImg={Projekt.TitleLink}
                        Emittent={Projekt.Emittent}
                        chossen={chossenProjekt1yellowMark}
                      />
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div id="Vegleich_Prop_Up_Projekte_Grid_Übergang_Wrapper">
            {" "}
            <div id="Vegleich_Prop_Up_Projekte_Grid_Übergang">
              {" "}
              <img src={Vergleich_Scroll_Down} id="Vergleich_Scroll_Down_IMG" />
            </div>
          </div>
        </div>
      );
    }
  }
  /*      Standard Ansicht Grid 2      */

  function P2_AlleShown() {
    if (aktiverFilter2 === "Alle") {
      return (
        <div id="Vegleich_Prop_Up_Projekte_Grid_Wrapper">
          <div id="Vegleich_Prop_Up_Projekte_Grid">
            <ul id="Vegleich_Prop_Up_Projekte_Grid_ul">
              {shownProjects.map((Projekt) => {
                if (Projekt.Kategorie === "Immobilien") {
                  return (
                    <li
                      id="Vegleich_Prop_Up_Projekte_Grid_li"
                      onClick={() => P2_ausgewählt(Projekt)}
                    >
                      <Vergleich_Pop_Up_Projekt
                        title={Projekt.name}
                        KategorieBildLink={Projekt.KategorieBildLink}
                        Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                        ErwarteteRendite={Projekt.ErwRendite}
                        Typ={Projekt.Typ}
                        Logo={Projekt.LogoLink}
                        titleImg={Projekt.TitleLink}
                        Emittent={Projekt.Emittent}
                      />
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div id="Vegleich_Prop_Up_Projekte_Grid_Übergang_Wrapper">
            {" "}
            <div id="Vegleich_Prop_Up_Projekte_Grid_Übergang">
              {" "}
              <img src={Vergleich_Scroll_Down} id="Vergleich_Scroll_Down_IMG" />
            </div>
          </div>
        </div>
      );
    }
  }
  function showAll2() {
    setaktiverFilter2("Alle");
  }
  function showAll1() {
    setaktiverFilter("Alle");
  }
  function startAll() {}

  useEffect(() => {}, []);

  /************************/
  /*      Projekte        */
  /************************/
  const [ImmobilienArray, setImmobilienArray] = useState([]);
  function BuildImmobilienArray(AlleProjekte) {
    setImmobilienArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Immobilien") {
        ImmobilienArray.push(projektmap);
        setshownProjects(ImmobilienArray);
      } else {
        setImmobilienArray([]);
      }
    });
  }
  const [AktiveGruppe, setAktiveGruppe] = useState();
  const [aktiverFilter, setaktiverFilter] = useState("Alle");
  const [value, setValue] = React.useState(5);
  const [AktiveGruppe2, setAktiveGruppe2] = useState();
  const [aktiverFilter2, setaktiverFilter2] = useState("Alle");
  const [value2, setValue2] = React.useState(5);

  const handleChange = (event, newValue) => {
    handlehcange("Rendite", newValue);
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    handlehcange2("Rendite", newValue);
    setValue2(newValue);
  };
  function handlehcange(Gruppe, Value) {
    setaktiverFilter(Value);

    if (Gruppe === "Rendite") {
      setAktiveGruppe("Rendite");
      returnFilterArray("Renidte", Value);
    }

    if (Gruppe === "Finanzierungsvolumen") {
      setAktiveGruppe("Finanzierungsvolumen");
    }
  }
  function handlehcange2(Gruppe, Value) {
    setaktiverFilter2(Value);

    if (Gruppe === "Rendite") {
      setAktiveGruppe2("Rendite");
      returnFilterArray2("Renidte", Value);
    }

    if (Gruppe === "Finanzierungsvolumen") {
      setAktiveGruppe2("Finanzierungsvolumen");
    }
  }
  const [FVvalue, setFVValue] = React.useState(500);
  const [FVvalue2, setFVValue2] = React.useState(500);

  //////////////
  //ClicksSliderFinanzierungsvolumen
  /////////////

  const handleChangeFV = (event, newValue) => {
    handlehcange("Finanzierungsvolumen", newValue);
    setFVValue(newValue);
  };
  const handleChangeFV2 = (event, newValue) => {
    handlehcange2("Finanzierungsvolumen", newValue);
    setFVValue2(newValue);
  };
  //////////////
  //ClicksSliderFinanzierungsvolumen
  /////////////

  function returnFilterArray(Gruppe, Value) {
    if (aktiverFilter !== "Alle") {
      if (Gruppe === "Rendite") {
        return (
          <div id="Vegleich_Prop_Up_Projekte_Grid">
            <ul id="Vegleich_Prop_Up_Projekte_Grid_ul">
              {shownProjects.map((Projekt) => {
                if (Projekt.Kategorie === "Immobilien") {
                  if (Projekt.FilterRendite >= Value) {
                    return (
                      <li
                        id="Vegleich_Prop_Up_Projekte_Grid_li"
                        onClick={() => P1_ausgewählt(Projekt)}
                      >
                        <Vergleich_Pop_Up_Projekt
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Emittent={Projekt.Emittent}
                        />
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        );
      }
    }
    if (aktiverFilter !== "Alle") {
      if (Gruppe === "Finanzierungsvolumen") {
        return (
          <div id="Vegleich_Prop_Up_Projekte_Grid">
            <ul id="Vegleich_Prop_Up_Projekte_Grid_ul">
              {shownProjects.map((Projekt) => {
                if (Projekt.Kategorie === "Immobilien") {
                  if (Projekt.FilterFinanzierungsvolumen / 1000 >= FVvalue) {
                    return (
                      <li
                        id="Vegleich_Prop_Up_Projekte_Grid_li"
                        onClick={() => P1_ausgewählt(Projekt)}
                      >
                        <Vergleich_Pop_Up_Projekt
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Emittent={Projekt.Emittent}
                        />
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        );
      }
    }
  }

  function returnFilterArray2(Gruppe, Value) {
    if (aktiverFilter2 !== "Alle") {
      if (Gruppe === "Rendite") {
        return (
          <div id="Vegleich_Prop_Up_Projekte_Grid">
            <ul id="Vegleich_Prop_Up_Projekte_Grid_ul">
              {shownProjects2.map((Projekt) => {
                if (Projekt.Kategorie === "Immobilien") {
                  if (Projekt.FilterRendite >= Value) {
                    return (
                      <li
                        id="Vegleich_Prop_Up_Projekte_Grid_li"
                        onClick={() => P2_ausgewählt(Projekt)}
                      >
                        <Vergleich_Pop_Up_Projekt
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Emittent={Projekt.Emittent}
                        />
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        );
      }
    }
    if (aktiverFilter2 !== "Alle") {
      if (Gruppe === "Finanzierungsvolumen") {
        return (
          <div id="Vegleich_Prop_Up_Projekte_Grid">
            <ul id="Vegleich_Prop_Up_Projekte_Grid_ul">
              {shownProjects2.map((Projekt) => {
                if (Projekt.Kategorie === "Immobilien") {
                  if (Projekt.FilterFinanzierungsvolumen / 1000 >= Value) {
                    return (
                      <li
                        id="Vegleich_Prop_Up_Projekte_Grid_li"
                        onClick={() => P2_ausgewählt(Projekt)}
                      >
                        <Vergleich_Pop_Up_Projekt
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Emittent={Projekt.Emittent}
                        />
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        );
      }
    }
  }

  //////////////
  //Mobile
  /////////////
  //////////////
  //Mobile
  /////////////
  //////////////
  //Mobile
  /////////////
  const [mAktiveGruppe, setmAktiveGruppe] = useState();
  const [maktiverFilter, setmaktiverFilter] = useState("Alle");
  const [mvalue, setmValue] = React.useState(5);
  const [mAktiveGruppe2, setmAktiveGruppe2] = useState();
  const [maktiverFilter2, setmaktiverFilter2] = useState("Alle");
  const [mvalue2, setmValue2] = React.useState(5);
  const [mFVvalue, setmFVValue] = React.useState(500);
  const [mFVvalue2, setmFVValue2] = React.useState(500);

  const mhandleChangeFV = (event, newValue) => {
    mhandlehcange("Finanzierungsvolumen", newValue);
    setmFVValue(newValue);
  };
  const mhandleChangeFV2 = (event, newValue) => {
    mhandlehcange2("Finanzierungsvolumen", newValue);
    setmFVValue2(newValue);
  };
  const mhandleChange = (event, newValue) => {
    mhandlehcange("Rendite", newValue);
    setmValue(newValue);
  };

  const mhandleChange2 = (event, newValue) => {
    mhandlehcange2("Rendite", newValue);
    setmValue2(newValue);
  };
  function mhandlehcange(Gruppe, Value) {
    setmaktiverFilter(Value);

    if (Gruppe === "Rendite") {
      setmAktiveGruppe("Rendite");
      mreturnFilterArray("Renidte", Value);
    }

    if (Gruppe === "Finanzierungsvolumen") {
      setmAktiveGruppe("Finanzierungsvolumen");
    }
  }

  function mhandlehcange2(Gruppe, Value) {
    setmaktiverFilter2(Value);

    if (Gruppe === "Rendite") {
      setmAktiveGruppe2("Rendite");
      mreturnFilterArray2("Renidte", Value);
    }

    if (Gruppe === "Finanzierungsvolumen") {
      setmAktiveGruppe2("Finanzierungsvolumen");
    }
  }
  function mreturnFilterArray(Gruppe, Value) {
    if (maktiverFilter !== "Alle") {
      if (Gruppe === "Rendite") {
        return (
          <ul id="Mobile_Vergleichen_Auswahl_Grid1_ul">
            {shownProjects.map((Projekt) => {
              if (Projekt.Kategorie === "Immobilien") {
                if (Projekt.FilterRendite >= Value) {
                  return (
                    <li
                      id="Mobile_Vergleichen_Auswahl_Grid1_li"
                      onClick={() => mFunctionProjekt1click(Projekt)}
                    >
                      <Mobile_Vergleichen_Projekt_Comp
                        title={Projekt.name}
                        Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                        ErwarteteRendite={Projekt.ErwRendite}
                        Logo={Projekt.LogoLink}
                        titleImg={Projekt.TitleLink}
                      />
                    </li>
                  );
                }
              }
            })}
          </ul>
        );
      }
    }
    if (maktiverFilter !== "Alle") {
      if (Gruppe === "Finanzierungsvolumen") {
        return (
          <ul id="Mobile_Vergleichen_Auswahl_Grid1_ul">
            {shownProjects.map((Projekt) => {
              if (Projekt.Kategorie === "Immobilien") {
                if (Projekt.FilterFinanzierungsvolumen / 1000 >= mFVvalue) {
                  return (
                    <li
                      id="Mobile_Vergleichen_Auswahl_Grid1_li"
                      onClick={() => mFunctionProjekt1click(Projekt)}
                    >
                      <Mobile_Vergleichen_Projekt_Comp
                        title={Projekt.name}
                        Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                        ErwarteteRendite={Projekt.ErwRendite}
                        Logo={Projekt.LogoLink}
                        titleImg={Projekt.TitleLink}
                      />
                    </li>
                  );
                }
              }
            })}
          </ul>
        );
      }
    }
  }
  function mreturnFilterArray2(Gruppe, Value) {
    if (maktiverFilter2 !== "Alle") {
      if (Gruppe === "Rendite") {
        return (
          <ul id="Mobile_Vergleichen_Auswahl_Grid1_ul">
            {shownProjects.map((Projekt) => {
              if (Projekt.Kategorie === "Immobilien") {
                if (Projekt.FilterRendite >= Value) {
                  return (
                    <li
                      id="Mobile_Vergleichen_Auswahl_Grid1_li"
                      onClick={() => mFunctionProjekt2click(Projekt)}
                    >
                      <Mobile_Vergleichen_Projekt_Comp
                        title={Projekt.name}
                        Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                        ErwarteteRendite={Projekt.ErwRendite}
                        Logo={Projekt.LogoLink}
                        titleImg={Projekt.TitleLink}
                      />
                    </li>
                  );
                }
              }
            })}
          </ul>
        );
      }
    }
    if (maktiverFilter2 !== "Alle") {
      if (Gruppe === "Finanzierungsvolumen") {
        return (
          <ul id="Mobile_Vergleichen_Auswahl_Grid1_ul">
            {shownProjects.map((Projekt) => {
              if (Projekt.Kategorie === "Immobilien") {
                if (Projekt.FilterFinanzierungsvolumen / 1000 >= mFVvalue2) {
                  return (
                    <li
                      id="Mobile_Vergleichen_Auswahl_Grid1_li"
                      onClick={() => mFunctionProjekt2click(Projekt)}
                    >
                      {" "}
                      <Mobile_Vergleichen_Projekt_Comp
                        title={Projekt.name}
                        Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                        ErwarteteRendite={Projekt.ErwRendite}
                        Logo={Projekt.LogoLink}
                        titleImg={Projekt.TitleLink}
                      />
                    </li>
                  );
                }
              }
            })}
          </ul>
        );
      }
    }
  }
  function mP1_AlleShown() {
    if (maktiverFilter === "Alle") {
      return (
        <ul id="Mobile_Vergleichen_Auswahl_Grid1_ul">
          {shownProjects.map((Projekt) => {
            if (Projekt.Kategorie === "Immobilien") {
              return (
                <li
                  id="Mobile_Vergleichen_Auswahl_Grid1_li"
                  onClick={() => mFunctionProjekt1click(Projekt)}
                >
                  <Mobile_Vergleichen_Projekt_Comp
                    title={Projekt.name}
                    Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                    ErwarteteRendite={Projekt.ErwRendite}
                    Logo={Projekt.LogoLink}
                    titleImg={Projekt.TitleLink}
                  />
                </li>
              );
            }
          })}
        </ul>
      );
    }
  }
  function mP2_AlleShown() {
    if (maktiverFilter2 === "Alle") {
      return (
        <ul id="Mobile_Vergleichen_Auswahl_Grid1_ul">
          {shownProjects.map((Projekt) => {
            if (Projekt.Kategorie === "Immobilien") {
              return (
                <li
                  id="Mobile_Vergleichen_Auswahl_Grid1_li"
                  onClick={() => mFunctionProjekt2click(Projekt)}
                >
                  <Mobile_Vergleichen_Projekt_Comp
                    title={Projekt.name}
                    Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                    ErwarteteRendite={Projekt.ErwRendite}
                    Logo={Projekt.LogoLink}
                    titleImg={Projekt.TitleLink}
                  />
                </li>
              );
            }
          })}
        </ul>
      );
    }
  }
  const [mOverlay_Übersicht, msetOverlay_Übersicht] = useState(false);
  const [mOverlay_Projekt, msetmOverlay_Projekt] = useState(true);
  const [mOverlay_Financials, msetmOverlay_Financials] = useState(false);
  const [mOverlay_Dokumente, msetOverlay_Dokumente] = useState(false);
  //////////////
  //Mobile Projekt Auswahl
  /////////////
  const [mobileChoosen1, setmobileChoosen1] = useState([]);
  const [mobileChoosen2, setmobileChoosen2] = useState([]);
  function mFunctionProjekt1click(Projekt) {
    setmobileChoosen1(Projekt);
  }
  function mFunctionProjekt2click(Projekt) {
    setmobileChoosen2(Projekt);
  }

  function mopenDokumente() {
    msetOverlay_Übersicht(false);
    msetmOverlay_Projekt(false);
    msetmOverlay_Financials(false);
    msetOverlay_Dokumente(true);
  }

  function mopenProjekt() {
    msetOverlay_Übersicht(false);
    msetmOverlay_Projekt(true);
    msetmOverlay_Financials(false);
    msetOverlay_Dokumente(false);
  }
  function mopenFinancials() {
    msetOverlay_Übersicht(false);
    msetmOverlay_Projekt(false);
    msetmOverlay_Financials(true);
    msetOverlay_Dokumente(false);
  }
  function mopenÜbersicht() {
    msetOverlay_Übersicht(true);
    msetmOverlay_Projekt(false);
    msetmOverlay_Financials(false);
    msetOverlay_Dokumente(false);
  }

  return (
    <div>
      <div id="Desktop_Wrapper">
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
        <div id="Vergleichen_Background_Wrapper">
          <TOP_NAV_BAR />

          {/*           Projekt Auswhal Section          */}

          <div id="Projekt-Auswahl">
            <div id="Pop_Up_Projekt_Wahl_WTop">
              <h2 id="Pop_Up_Projekt_Wahl_h2">Projekte auswählen</h2>
              <div id="Pop_Up_Projekt_Wahl_Closer"></div>
            </div>

            <div id="Top_ProjektWahl">
              <div id="ProjektWahl_P">
                <div id="ProjektWahl_P_Top">
                  <h3 id="ProjektWahl_P_h3">Projekt 1</h3>
                  <h3 id="ProjektWahl_P_h4">Filter auswählen</h3>
                </div>
                <div id="ProjektWahl_P_Bottom">
                  <div id="Filter_Rendite_Vergleich_Slider">
                    <Slider
                      size="small"
                      defaultValue={5}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      min={0}
                      max={+10}
                      value={value}
                      onChange={handleChange}
                      step={0.5}
                    />
                    <div id="Filter_Finanzierungsvolumen_Text_Wrapper">
                      <h5 id="Filter_Finanzierungsvolumen_h5">
                        Rendite p.a. <br></br>[%]
                      </h5>
                      <h5
                        id="Filter_Finanzierungsvolumen_h5_Cursor"
                        onClick={() => showAll1()}
                      >
                        {" "}
                        Zurücksetzen
                      </h5>
                    </div>{" "}
                  </div>

                  <div id="Filter_FV_Vergleich_Slider">
                    <Slider
                      size="small"
                      defaultValue={500}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      min={10}
                      max={1500}
                      FVvalue={FVvalue}
                      onChange={handleChangeFV}
                      step={50}
                    />
                    <div id="Filter_Finanzierungsvolumen_Text_Wrapper">
                      <h5 id="Filter_Finanzierungsvolumen_h5">
                        Finanzierungsvolumen [T€]
                      </h5>
                      <h5
                        id="Filter_Finanzierungsvolumen_h5_Cursor"
                        onClick={() => showAll1()}
                      >
                        Zurücksetzen
                      </h5>
                    </div>{" "}
                  </div>
                </div>{" "}
              </div>

              <div id="ProjektWahl_P">
                <div id="ProjektWahl_P_Top">
                  <h3 id="ProjektWahl_P_h3">Projekt 2</h3>
                  <h3 id="ProjektWahl_P_h4">Filter auswählen</h3>
                </div>
                <div id="ProjektWahl_P_Bottom">
                  <div id="Filter_Rendite_Vergleich_Slider">
                    <Slider
                      size="small"
                      defaultValue={5}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      min={0}
                      max={+10}
                      value={value2}
                      onChange={handleChange2}
                      step={0.5}
                    />
                    <div id="Filter_Finanzierungsvolumen_Text_Wrapper">
                      <h5 id="Filter_Finanzierungsvolumen_h5">
                        Rendite p.a. <br></br>[%]
                      </h5>
                      <h5
                        id="Filter_Finanzierungsvolumen_h5_Cursor"
                        onClick={() => showAll2()}
                      >
                        Zurücksetzen
                      </h5>
                    </div>{" "}
                  </div>

                  <div id="Filter_FV_Vergleich_Slider">
                    <Slider
                      size="small"
                      defaultValue={500}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      min={10}
                      max={1500}
                      FVvalue={FVvalue2}
                      onChange={handleChangeFV2}
                      step={50}
                    />
                    <div id="Filter_Finanzierungsvolumen_Text_Wrapper">
                      <h5 id="Filter_Finanzierungsvolumen_h5">
                        Finanzierungsvolumen <br></br> [T]
                      </h5>
                      <h5
                        id="Filter_Finanzierungsvolumen_h5_Cursor"
                        onClick={() => showAll2()}
                      >
                        Zurücksetzen
                      </h5>
                    </div>{" "}
                  </div>
                </div>{" "}
              </div>
            </div>

            <div id="Pop_Up_Projekt_Wahl_Section">
              <div id="Pop_Up_Projekt_Wahl_Section_Left">
                <div id="Projekt_Auswahl_Grid">
                  {P1_AlleShown()}
                  {returnFilterArray(AktiveGruppe, aktiverFilter)}
                </div>
              </div>

              <div id="Pop_Up_Projekt_Wahl_Section_Right">
                <div id="Projekt_Auswahl_Grid">
                  {P2_AlleShown()}{" "}
                  {returnFilterArray2(AktiveGruppe2, aktiverFilter2)}
                </div>
              </div>
            </div>
          </div>

          <div id="Vergleichen_Dashbaord">
            <div id="Vergleichen_Results">
              <div id="Vergleichen_Results_Menue">
                <div id={Menue_Choice1} onClick={() => openÜbersicht()}>
                  Übersicht
                </div>
                <div id={Menue_Choice2} onClick={() => openProjekt()}>
                  Projekt
                </div>
                <div id={Menue_Choice3} onClick={() => openFinancial()}>
                  Financial
                </div>
                <div id={Menue_Choice4} onClick={() => openDokumente()}>
                  Dokumente
                </div>
              </div>
              <div id="Vergleichen_Results_Content">
                <Comp_Overlay_Übersicht
                  trigger={Overlay_Übersicht}
                  setTrigger={setOverlay_Übersicht}
                  titleP1={chossenProjekt1.name}
                  KategorieBildLinkP1={chossenProjekt1.KategorieBildLink}
                  FinanzierungsvolumenP1={chossenProjekt1.Finanzierungsvolumen}
                  ErwarteteRenditeP1={chossenProjekt1.ErwRendite}
                  TypP1={chossenProjekt1.Typ}
                  LogoP1={chossenProjekt1.LogoLink}
                  titleImgP1={chossenProjekt1.TitleLink}
                  MindestinvestitionP1={chossenProjekt1.Mindestinvestition}
                  KurzBeschreibungP1={chossenProjekt1.KurzBeschreibung}
                  DoksCounter1={chossenProjekt1.Doks_Counter}
                  titleP2={chossenProjekt2.name}
                  KategorieBildLinkP2={chossenProjekt2.KategorieBildLink}
                  FinanzierungsvolumenP2={chossenProjekt2.Finanzierungsvolumen}
                  ErwarteteRenditeP2={chossenProjekt2.ErwRendite}
                  TypP2={chossenProjekt2.Typ}
                  LogoP2={chossenProjekt2.LogoLink}
                  titleImgP2={chossenProjekt2.TitleLink}
                  MindestinvestitionP2={chossenProjekt2.Mindestinvestition}
                  KurzBeschreibungP2={chossenProjekt2.KurzBeschreibung}
                  DoksCounter2={chossenProjekt2.Doks_Counter}
                  LFZB2={chossenProjekt2.LaufzeitBeginMMMJJJJ}
                  LFZE2={chossenProjekt2.LaufzeitEndeMMMJJJJ}
                  LFZB1={chossenProjekt1.LaufzeitBeginMMMJJJJ}
                  LFZE1={chossenProjekt1.LaufzeitEndeMMMJJJJ}
                  MI1={chossenProjekt1.MIohneEuro}
                  MI2={chossenProjekt2.MIohneEuro}
                  FV2={chossenProjekt2.FVohneEuro}
                  FV1={chossenProjekt1.FVohneEuro}
                  ProjektLink1={chossenProjekt1.InternerLink}
                  ProjektLink2={chossenProjekt2.InternerLink}
                />

                <Comp_Overlay_Projekte
                  trigger={Overlay_Projekte}
                  setTrigger={setOverlay_Projekte}
                  Projekt1={chossenProjekt1.name}
                  Projekt2={chossenProjekt2.name}
                  TokenAnzahlP1={chossenProjekt2.TokenAnzahlOhneFormat}
                  TokenAnzahlP2={chossenProjekt2.TokenAnzahlOhneFormat}
                  TokenAnzahlP1Chart1={chossenProjekt1.TokenAnzahlOhneFormat}
                  TokenAnzahlP2Chart2={chossenProjekt2.TokenAnzahlOhneFormat}
                  MindestInv1={chossenProjekt1.MIohneEuro}
                  MindestInv2={chossenProjekt2.MIohneEuro}
                  Adress1={chossenProjekt1.Ort}
                  Adress2={chossenProjekt2.Ort}
                  KurzBeschreibungP1={chossenProjekt1.KurzBeschreibung}
                  KurzBeschreibungP2={chossenProjekt2.KurzBeschreibung}
                  LFZB2={chossenProjekt2.LaufzeitBeginMMMJJJJ}
                  LFZE2={chossenProjekt2.LaufzeitEndeMMMJJJJ}
                  LFZB1={chossenProjekt1.LaufzeitBeginMMMJJJJ}
                  LFZE1={chossenProjekt1.LaufzeitEndeMMMJJJJ}
                  MI1={chossenProjekt1.MIohneEuro}
                  FV1={chossenProjekt1.FVohneEuro}
                  MI2={chossenProjekt2.MIohneEuro}
                  FV2={chossenProjekt2.FVohneEuro}
                />

                <Comp_Overlay_Financial
                  trigger={Overlay_Financial}
                  setTrigger={setOverlay_Financial}
                  Projekt1={chossenProjekt1.name}
                  Projekt2={chossenProjekt2.name}
                  gesRendite1={chossenProjekt1.gesRendite}
                  DurchRendite1={chossenProjekt1.DurchschnittRendite}
                  WertEnt1={chossenProjekt1.Wertentwicklung}
                  gesRendite2={chossenProjekt2.gesRendite}
                  DurchRendite2={chossenProjekt2.DurchschnittRendite}
                  WertEnt2={chossenProjekt2.Wertentwicklung}
                  Finanzierungsvolumen1={chossenProjekt1.Finanzierungsvolumen}
                  Finanzierungsvolumen2={chossenProjekt2.Finanzierungsvolumen}
                  davonFinanziert1="100%"
                  davonFinanziert2="100%"
                  FVChart1={chossenProjekt1.FVohneEuro}
                  FVChart2={chossenProjekt2.FVohneEuro}
                />

                <Comp_Overlay_PDokuemnte
                  trigger={Overlay_Dokumente}
                  setTrigger={setOverlay_Dokumente}
                  Projekt1={chossenProjekt1.name}
                  Projekt2={chossenProjekt2.name}
                  P1_BIB={chossenProjekt1.checkBasisinformationsblatt}
                  P1_SVB={chossenProjekt1.checkSchuldverschreibungsbedingungen}
                  P1_Risk={chossenProjekt1.checkRisiken}
                  P1_VI={chossenProjekt1.check_VI}
                  P1_KE={chossenProjekt1.check_KE}
                  P1_MWE={chossenProjekt1.check_MWE}
                  P2_BIB={chossenProjekt1.checkBasisinformationsblatt}
                  P2_Risk={chossenProjekt2.checkRisiken}
                  P2_VI={chossenProjekt2.check_VI}
                  P2_SVB={chossenProjekt2.checkSchuldverschreibungsbedingungen}
                  P2_KE={chossenProjekt2.check_KE}
                  P2_MWE={chossenProjekt2.check_MWE}
                  P1_DoksCounter={chossenProjekt1.Doks_Counter}
                  P2_DoksCounter={chossenProjekt2.Doks_Counter}
                />
              </div>
            </div>
            <div id="Vergleichen_Projekt_Auswahl">
              <div id="Vergleichen_Projekt_Auswahl_Top">
                <h2 id="Vergleichen_Projekt_Auswahl_h2">Projekte</h2>
                <HashLink to="#Projekt-Auswahl">
                  <div id="Vergleichen_Projekt_Auswahl_Neue_Button">
                    Projekt auswählen
                  </div>
                </HashLink>
              </div>

              <div id="Vergleichen_Projekt_Auswahl_Projekte">
                <div id="Vergleichen_Projekt_Auswahl_Projekte_RowX">
                  <Projekt_Kachel_Rechts
                    titleImg={chossenProjekt1.TitleLink}
                    title={chossenProjekt1.name}
                    Finanzierungsvolumen={chossenProjekt1.Finanzierungsvolumen}
                    Rendite={chossenProjekt1.ErwRendite}
                  />
                  <div id="Vergleichen_Projekt_Auswahl_Projekte_Row">
                    <div id="Vergleichen_Projekt_Auswahl_Projekte_Row_Button">
                      Zum Projekt
                    </div>
                    <h3 id="Vergleichen_Projekt_Auswahl_Projekte_h3">
                      Projekt 1
                    </h3>
                  </div>
                </div>
                <div id="Vergleichen_Projekt_Auswahl_Projekte_RowX2">
                  <Projekt_Kachel_Rechts
                    titleImg={chossenProjekt2.TitleLink}
                    title={chossenProjekt2.name}
                    Finanzierungsvolumen={chossenProjekt2.Finanzierungsvolumen}
                    Rendite={chossenProjekt2.ErwRendite}
                  />

                  <div id="Vergleichen_Projekt_Auswahl_Projekte_Row">
                    <div id="Vergleichen_Projekt_Auswahl_Projekte_Row_Button">
                      Zum Projekt
                    </div>
                    <h3 id="Vergleichen_Projekt_Auswahl_Projekte_h3">
                      Projekt 2
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <Footer />
      </div>

      <div id="Mobile_Wrapper">
        <div id="Mobile_Vergleichen_Wrapper">
          <Mobile_menue />

          <div id="Mobile_Vergleichen_Projekt_Auswahl">
            <h3 id="Mobile_Vergleichen_Heading_H3">Projekte auswählen:</h3>
            <div id="Mobile_Vergleichen_Auswahl_Projekt">
              <div id="Mobile_Vergleichen_Auswahl_Projekt_Row1">
                <h2 id="Mobile_Vergleichen_Auswahl_Projekt_Row1_h3">
                  Projekt 1
                </h2>
                <div id="Mobile_Vergleichen_Auswahl_Projekt_Row1_Right">
                  <h2 id="Mobile_Vergleichen_Auswahl_Projekt_Row1_h4">
                    {mobileChoosen1.name}
                  </h2>
                  <h2 id="Mobile_Vergleichen_Auswahl_Projekt_Row1_h5">
                    Aktuell:
                  </h2>
                </div>
              </div>
              <div id="Mobile_Vergleichen_Auswahl_Projekt_Row2">
                <div id="Mobile_Vergleichen_Auswahl_Finanzierungsvolumen">
                  <Slider
                    size="small"
                    defaultValue={500}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={10}
                    max={1500}
                    FVvalue={mFVvalue}
                    onChange={mhandleChangeFV}
                    step={50}
                  />
                  <h5 id="Mobile_Vergleichen_Auswahl_Projekt_Row1_h5">
                    Finanzierungsvolumen [T€]
                  </h5>
                </div>

                <div id="Mobile_Vergleichen_Auswahl_Rendite">
                  <Slider
                    size="small"
                    defaultValue={5}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={0}
                    max={+10}
                    value={mvalue}
                    onChange={mhandleChange}
                    step={0.5}
                  />
                  <h5 id="Mobile_Vergleichen_Auswahl_Projekt_Row1_h5">
                    Rendite <br></br>[%]
                  </h5>
                </div>
              </div>

              <div id="Mobile_Vergleichen_Auswahl_Grid1">
                {mP1_AlleShown()}
                {mreturnFilterArray(mAktiveGruppe, maktiverFilter)}
                <div id="Mobile_Vergleichen_Auswahl_Grid1_Abs">
                  <img
                    src={Vergleich_Scroll_Down}
                    id="Vergleich_Scroll_Down_mobile"
                  />
                </div>
              </div>
            </div>

            <div id="Mobile_Vergleichen_Auswahl_Projekt">
              <div id="Optical_Divide"></div>
              <div id="Mobile_Vergleichen_Auswahl_Projekt_Row1">
                <h2 id="Mobile_Vergleichen_Auswahl_Projekt_Row1_h3">
                  Projekt 2
                </h2>
                <div id="Mobile_Vergleichen_Auswahl_Projekt_Row1_Right">
                  <h2 id="Mobile_Vergleichen_Auswahl_Projekt_Row1_h4">
                    {mobileChoosen2.name}
                  </h2>
                  <h2 id="Mobile_Vergleichen_Auswahl_Projekt_Row1_h5">
                    Aktuell:
                  </h2>
                </div>
              </div>
              <div id="Mobile_Vergleichen_Auswahl_Projekt_Row2">
                <div id="Mobile_Vergleichen_Auswahl_Finanzierungsvolumen">
                  <Slider
                    size="small"
                    defaultValue={500}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={10}
                    max={1500}
                    FVvalue={mFVvalue2}
                    onChange={mhandleChangeFV2}
                    step={50}
                  />
                  <h5 id="Mobile_Vergleichen_Auswahl_Projekt_Row1_h5">
                    Finanzierungsvolumen [T€]
                  </h5>
                </div>

                <div id="Mobile_Vergleichen_Auswahl_Rendite">
                  <Slider
                    size="small"
                    defaultValue={5}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={0}
                    max={+10}
                    value={mvalue2}
                    onChange={mhandleChange2}
                    step={0.5}
                  />
                  <h5 id="Mobile_Vergleichen_Auswahl_Projekt_Row1_h5">
                    Rendite <br></br>[%]
                  </h5>
                </div>
              </div>

              <div id="Mobile_Vergleichen_Auswahl_Grid1">
                {mP2_AlleShown()}
                {mreturnFilterArray2(mAktiveGruppe2, maktiverFilter2)}
                <div id="Mobile_Vergleichen_Auswahl_Grid1_Abs">
                  <img
                    src={Vergleich_Scroll_Down}
                    id="Vergleich_Scroll_Down_mobile"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="Mobile_Vergleichen_Projekte_Wrapper">
            <div id="Mobile_Vergleichen_Projekte_Menue">
              <div id="Mobile_Vergleichen_Projekte_Menue_Column">
                <div
                  id="Mobile_Vergleichen_Projekte_Menue_Button"
                  onClick={() => mopenÜbersicht()}
                >
                  <img
                    src={Übersicht_IMG}
                    id="Mobile_Vergleichen_Projekte_Menue_Button_IMG"
                  />
                  Übersicht
                </div>
                <div
                  id="Mobile_Vergleichen_Projekte_Menue_Button"
                  onClick={() => mopenProjekt()}
                >
                  <img
                    src={Projekt_IMG}
                    id="Mobile_Vergleichen_Projekte_Menue_Button_IMG"
                  />
                  Projekt
                </div>
              </div>
              <div id="">
                <div id="Mobile_Vergleichen_Projekte_Menue_Column_mid">
                  <HashLink to="#Mobile_Vergleichen_Projekt_Auswahl">
                    <div id="Mobile_Vergleichen_Projekte_Menue_Button_mid">
                      <img
                        src={Auswahl_IMG}
                        id="Mobile_Vergleichen_Projekte_Menue_Button_IMG_MID"
                      />
                      Auswahl
                    </div>
                  </HashLink>
                </div>
              </div>

              <div id="Mobile_Vergleichen_Projekte_Menue_Column">
                <div
                  id="Mobile_Vergleichen_Projekte_Menue_Button"
                  onClick={() => mopenFinancials()}
                >
                  <img
                    src={Finance_IMG}
                    id="Mobile_Vergleichen_Projekte_Menue_Button_IMG"
                  />{" "}
                  Financials
                </div>
                <div
                  id="Mobile_Vergleichen_Projekte_Menue_Button"
                  onClick={() => mopenDokumente()}
                >
                  <img
                    src={Doks_Img}
                    id="Mobile_Vergleichen_Projekte_Menue_Button_IMG"
                  />
                  Dokumente
                </div>
              </div>
            </div>
            <Mobile_Verg_Financials
              trigger={mOverlay_Financials}
              setTrigger={msetmOverlay_Financials}
              Projekt1={mobileChoosen1.name}
              Projekt2={mobileChoosen2.name}
              gesRendite1={mobileChoosen1.gesRendite}
              DurchRendite1={mobileChoosen1.DurchschnittRendite}
              WertEnt1={mobileChoosen1.Wertentwicklung}
              gesRendite2={mobileChoosen2.gesRendite}
              DurchRendite2={mobileChoosen2.DurchschnittRendite}
              WertEnt2={mobileChoosen2.Wertentwicklung}
              Finanzierungsvolumen1={mobileChoosen1.Finanzierungsvolumen}
              Finanzierungsvolumen2={mobileChoosen2.Finanzierungsvolumen}
              davonFinanziert1="100%"
              davonFinanziert2="100%"
              FVChart1={mobileChoosen1.FVohneEuro}
              FVChart2={mobileChoosen2.FVohneEuro}
            />
            <Mobile_Verg_Dokumente
              trigger={mOverlay_Dokumente}
              setTrigger={msetOverlay_Dokumente}
              Projekt1={mobileChoosen1.name}
              Projekt2={mobileChoosen2.name}
              P1_BIB={mobileChoosen1.checkBasisinformationsblatt}
              P1_SVB={mobileChoosen1.checkSchuldverschreibungsbedingungen}
              P1_Risk={mobileChoosen1.checkRisiken}
              P1_VI={mobileChoosen1.check_VI}
              P1_KE={mobileChoosen1.check_KE}
              P1_MWE={mobileChoosen1.check_MWE}
              P2_BIB={mobileChoosen1.checkBasisinformationsblatt}
              P2_Risk={mobileChoosen2.checkRisiken}
              P2_VI={mobileChoosen2.check_VI}
              P2_SVB={mobileChoosen2.checkSchuldverschreibungsbedingungen}
              P2_KE={mobileChoosen2.check_KE}
              P2_MWE={mobileChoosen2.check_MWE}
              P1_DoksCounter={mobileChoosen2.Doks_Counter}
              P2_DoksCounter={mobileChoosen2.Doks_Counter}
            />

            <Mobile_Verg_Projekt
              trigger={mOverlay_Projekt}
              setTrigger={msetmOverlay_Projekt}
              Projekt1={mobileChoosen1.name}
              Projekt2={mobileChoosen2.name}
              TokenAnzahlP1={mobileChoosen1.TokenAnzahlOhneFormat}
              TokenAnzahlP2={mobileChoosen2.TokenAnzahlOhneFormat}
              TokenAnzahlP1Chart1={mobileChoosen1.TokenAnzahlOhneFormat}
              TokenAnzahlP2Chart2={mobileChoosen2.TokenAnzahlOhneFormat}
              MindestInv1={mobileChoosen1.MIohneEuro}
              MindestInv2={mobileChoosen2.MIohneEuro}
              Adress1={mobileChoosen1.Ort}
              Adress2={mobileChoosen2.Ort}
              KurzBeschreibungP1={mobileChoosen1.KurzBeschreibung}
              KurzBeschreibungP2={mobileChoosen2.KurzBeschreibung}
              LFZB2={mobileChoosen2.LaufzeitBeginMMMJJJJ}
              LFZE2={mobileChoosen2.LaufzeitEndeMMMJJJJ}
              LFZB1={mobileChoosen1.LaufzeitBeginMMMJJJJ}
              LFZE1={mobileChoosen1.LaufzeitEndeMMMJJJJ}
              MI1={mobileChoosen1.MIohneEuro}
              FV1={mobileChoosen1.FVohneEuro}
              MI2={mobileChoosen2.MIohneEuro}
              FV2={mobileChoosen2.FVohneEuro}
            />

            <Mobile_Verg_Übersicht
              trigger={mOverlay_Übersicht}
              setTrigger={msetOverlay_Übersicht}
              titleP1={mobileChoosen1.name}
              KategorieBildLinkP1={mobileChoosen1.KategorieBildLink}
              FinanzierungsvolumenP1={mobileChoosen1.Finanzierungsvolumen}
              ErwarteteRenditeP1={mobileChoosen1.ErwRendite}
              TypP1={mobileChoosen1.Typ}
              LogoP1={mobileChoosen1.LogoLink}
              titleImgP1={mobileChoosen1.TitleLink}
              MindestinvestitionP1={mobileChoosen1.Mindestinvestition}
              KurzBeschreibungP1={mobileChoosen1.KurzBeschreibung}
              DoksCounter1={mobileChoosen1.Doks_Counter}
              titleP2={mobileChoosen2.name}
              KategorieBildLinkP2={mobileChoosen2.KategorieBildLink}
              FinanzierungsvolumenP2={mobileChoosen2.Finanzierungsvolumen}
              ErwarteteRenditeP2={mobileChoosen2.ErwRendite}
              TypP2={mobileChoosen2.Typ}
              LogoP2={mobileChoosen2.LogoLink}
              titleImgP2={mobileChoosen2.TitleLink}
              MindestinvestitionP2={mobileChoosen2.Mindestinvestition}
              KurzBeschreibungP2={mobileChoosen2.KurzBeschreibung}
              DoksCounter2={mobileChoosen2.Doks_Counter}
              LFZB2={mobileChoosen2.LaufzeitBeginMMMJJJJ}
              LFZE2={mobileChoosen2.LaufzeitEndeMMMJJJJ}
              LFZB1={mobileChoosen1.LaufzeitBeginMMMJJJJ}
              LFZE1={mobileChoosen1.LaufzeitEndeMMMJJJJ}
              MI1={mobileChoosen1.MIohneEuro}
              MI2={mobileChoosen2.MIohneEuro}
              FV2={mobileChoosen2.FVohneEuro}
              FV1={mobileChoosen1.FVohneEuro}
              ProjektLink1={mobileChoosen1.InternerLink}
              ProjektLink2={mobileChoosen2.InternerLink}
            />
          </div>
        </div>
        <Mobile_Footer />
      </div>
    </div>
  );
}

export default Vergleichen2;
