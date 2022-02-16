import "./Design/testing.css";
import AlleProjekte_Projekt from "./components/Alle_Projekte_Projekt_Box";
import Vergleichs_Small from "./components/Vergleich_small";
import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";
import * as React from "react";

import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";

function Impressum() {
  const [ProjekteArray, setProjekteArray] = useState([]);

  const [DreierProjekteArray, setDreierProjekteArray] = useState([]);
  const [ViererProjekteArray, setViererProjekteArray] = useState([]);
  const [shownProjects, setshownProjects] = useState([]);
  const [emptyArray, setemptyArray] = useState([]);

  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
      setshownProjects(ProjekteList);
    } catch (error) {}
  };

  const [helping1, sethelping1] = useState([]);
  function builddreierArray(GanzesArray) {
    for (var i = 0; i < 3; i++) {
      helping1.push(GanzesArray[i]);
    }
    setDreierProjekteArray(helping1);
  }
  const [helping2, sethelping2] = useState([]);
  function buildViererProjekteArray(GanzesArray) {
    for (var i = 0; i < 4; i++) {
      helping2.push(GanzesArray[i]);
    }
    setViererProjekteArray(helping2);
  }
  useEffect(() => {
    fetchProjekte();
  }, []);

  const [ChooseProjekt1, setChooseProjekt1] = useState([]);
  function handleClick1(Projekt) {
    setChooseProjekt1(Projekt);
  }
  const [ChooseProjekt2, setChooseProjekt2] = useState([]);

  function handleClick2(Projekt) {
    setChooseProjekt2(Projekt);
  }
  /////////////////////////////////////////////////////

  const [aktiverFilter, setaktiverFilter] = useState("Alle");
  const [checked, setchecked] = useState("true");
  /*
  function handlehcange(Gruppe, Value) {
    console.log("handleChange");

    console.log(Gruppe);
    console.log(Value);
    setaktiverFilter(Value);
    setshownProjects();
    console.log(shownProjects);

    if (Gruppe === "Kategorie") {
      console.log("Strart  mit Kategorie look");
      setshownProjects([]);
      console.log(shownProjects);

      // Style Options//
      ProjekteArray.map((projektmap) => {
        if (projektmap.Kategorie === Value) {
          shownProjects.push(projektmap);
          console.log(shownProjects);
        }
      });
      console.log("Ende  mit Kategorie look");
    }

    if (Gruppe === "Finanzierungsvolumen") {
      console.log("Strart  mit Finanzierungsvolumen look");
    }

    if (Gruppe === "Rendite") {
      console.log("Strart  mit Rendite look");
    }

    if (Gruppe === "Typ") {
      console.log("Strart  mit Typ look" + Value);
      ProjekteArray.map((projektmap) => {
        console.log(projektmap.FilterTyp);
        if (projektmap.FilterTyp === Value) {
          shownProjects.push(projektmap);
        }
      });
    }

    console.log("Final ShownProj" + shownProjects);
  }
*/
  const [AktiveGruppe, setAktiveGruppe] = useState();

  ////Kategorie

  const [Kategorie1, setKategorie1] = useState("TT_k_inaktiv");
  const [Kategorie2, setKategorie2] = useState("TT_k_inaktiv");
  const [Kategorie3, setKategorie3] = useState("TT_k_inaktiv");
  const [Kategorie4, setKategorie4] = useState("TT_k_inaktiv");

  ////Typ

  const [Typ1, setTyp1] = useState("TT_k_inaktiv");
  const [Typ2, setTyp2] = useState("TT_k_inaktiv");

  function handlehcange(Gruppe, Value) {
    setAllinaktiv();

    console.log("handleChange");
    setshownProjects([]);
    console.log(Gruppe);
    console.log(Value);

    setaktiverFilter(Value);
    if (Gruppe === "Kategorie") {
      setAktiveGruppe("Kategorie");
    }
    if (Gruppe === "Typ") {
      setAktiveGruppe("Typ");
    }

    if (Gruppe === "Rendite") {
      setAktiveGruppe("Rendite");
    }

    if (Gruppe === "Finanzierungsvolumen") {
      setAktiveGruppe("Finanzierungsvolumen");
    }
  }

  /////////////////////////////////
  function AlleShown() {
    if (aktiverFilter === "Alle") {
      console.log(" alle");
      console.log(ProjekteArray);
      return ProjekteArray.map((Projekt) => (
        <li id="alle_projekte_li">
          <Vergleichs_Small
            Titel={Projekt.name}
            Kategorie={Projekt.KategorieBildLink}
            Emittent={Projekt.Emittent}
          />
        </li>
      ));
    }
  }
  function setAllinaktiv() {
    setKategorie1("TT_k_inaktiv");
    setKategorie2("TT_k_inaktiv");
    setKategorie3("TT_k_inaktiv");
    setKategorie4("TT_k_inaktiv");
    setTyp1("TT_k_inaktiv");
    setTyp2("TT_k_inaktiv");
    setValue("5");
  }
  function FilterShow(Gruppe, Value) {
    if (aktiverFilter !== "Alle") {
      if (Gruppe === "Kategorie") {
        console.log("Start Kategorie");
        return ProjekteArray.map((Projekt) => {
          if (Projekt.Kategorie === Value) {
            console.log(Value);
            return (
              <li id="alle_projekte_li">
                <Vergleichs_Small
                  Titel={Projekt.name}
                  Kategorie={Projekt.KategorieBildLink}
                  Emittent={Projekt.Emittent}
                />
              </li>
            );
          }
        });
      }

      //Typ
      if (Gruppe === "Typ") {
        console.log("Start Typ");
        return ProjekteArray.map((Projekt) => {
          if (Projekt.FilterTyp === Value) {
            console.log(Value);
            return (
              <li id="alle_projekte_li">
                <Vergleichs_Small
                  Titel={Projekt.name}
                  Kategorie={Projekt.KategorieBildLink}
                  Emittent={Projekt.Emittent}
                />
              </li>
            );
          }
        });
      }

      // Renidte
      if (Gruppe === "Rendite") {
        return ProjekteArray.map((Projekt) => {
          console.log(Value + "Map");
          console.log(Projekt.FilterRendite);

          if (Projekt.FilterRendite >= Value) {
            console.log(Value + "SFDSACFS");
            return (
              <li id="alle_projekte_li">
                <Vergleichs_Small
                  Titel={Projekt.name}
                  Kategorie={Projekt.KategorieBildLink}
                  Emittent={Projekt.Emittent}
                />
              </li>
            );
          }
        });
      }

      //FV

      if (Gruppe === "Finanzierungsvolumen") {
        return ProjekteArray.map((Projekt) => {
          console.log(Value + "FVMap");
          console.log(Projekt.FilterFinanzierungsvolumen);

          if (Projekt.FilterFinanzierungsvolumen >= Value) {
            console.log(Value + "SFDSACFS");
            return (
              <li id="alle_projekte_li">
                <Vergleichs_Small
                  Titel={Projekt.name}
                  Kategorie={Projekt.KategorieBildLink}
                  Emittent={Projekt.Emittent}
                />
              </li>
            );
          }
        });
      }
    }
  }
  function showAll() {
    setAllinaktiv();
    setaktiverFilter("Alle");
  }
  function ClickKategorie1() {
    handlehcange("Kategorie", "Immobilien");
    setKategorie1("TT_k_aktiv");
  }
  function ClickKategorie2() {
    handlehcange("Kategorie", "Technologie");
    setKategorie2("TT_k_aktiv");
  }
  function ClickKategorie3() {
    handlehcange("Kategorie", "Finance");
    setKategorie3("TT_k_aktiv");
  }
  function ClickKategorie4() {
    handlehcange("Kategorie", "Logistik");
    setKategorie4("TT_k_aktiv");
  }

  function ClickTyp1() {
    handlehcange("Typ", "Fremdkapital");
    setTyp1("TT_k_aktiv");
  }
  function ClickTyp2() {
    handlehcange("Typ", "Eigenkapital");
    setTyp2("TT_k_aktiv");
  }
  const [value, setValue] = React.useState(5);

  const handleChange = (event, newValue) => {
    console.log("SD");
    handlehcange("Rendite", newValue);
    setValue(newValue);
  };
  const [FVvalue, setFVValue] = React.useState([20, 137]);

  const handleChangeFV = (event, newValue) => {
    console.log("FV");
    handlehcange("Finanzierungsvolumen", newValue);
    setFVValue(newValue);
  };

  return (
    <div>
      <div id="testting_wrapper">
        <div id="testing_choose_box">
          <ul id="testing_choose_box_ul">
            {ViererProjekteArray.map((Projekt) => (
              <li id="alle_projekte_li" onClick={() => handleClick1(Projekt)}>
                <Vergleichs_Small
                  Titel={Projekt.name}
                  Kategorie={Projekt.KategorieBildLink}
                  Emittent={Projekt.Emittent}
                />
              </li>
            ))}
          </ul>
          <div id="Choose_P_1">{ChooseProjekt1.name}</div>

          <div id="Choose_P_2">{ChooseProjekt2.name}</div>
          <ul id="testing_choose_box_ul">
            {ViererProjekteArray.map((Projekt) => (
              <li id="alle_projekte_li" onClick={() => handleClick2(Projekt)}>
                <Vergleichs_Small
                  Titel={Projekt.name}
                  Kategorie={Projekt.KategorieBildLink}
                  Emittent={Projekt.Emittent}
                />
              </li>
            ))}
          </ul>
        </div>
        <div id="testing_content_box">
          <div id="testing_content_box_c1"></div>
          {ChooseProjekt1.name}
          {ChooseProjekt1.Finanzierungsvolumen}

          <div id="testing_content_box_c2"></div>

          <div id="testing_content_box_c3">
            {ChooseProjekt2.name}
            {ChooseProjekt2.Finanzierungsvolumen}
          </div>
        </div>
      </div>

      <div id="FiltertEEEST">
        <div id="FiltertEEEST_left">
          {aktiverFilter}
          Filter Menue<br></br>
          {/* Filter Group 1 */}
          Kategorie
          <div onClick={() => ClickKategorie1()} id={Kategorie1}>
            Immobilien
          </div>
          <div onClick={() => ClickKategorie2()} id={Kategorie2}>
            Technologie
          </div>
          <div onClick={() => ClickKategorie3()} id={Kategorie3}>
            Finance
          </div>
          <div onClick={() => ClickKategorie4()} id={Kategorie4}>
            Logistik
          </div>
          {/* Filter Group 2 */}
          <br></br>
          Typ
          <div onClick={() => ClickTyp1()} id={Typ1}>
            Fremdkapital
          </div>
          <div onClick={() => ClickTyp2()} id={Typ2}>
            Eigenkapital
          </div>
          {/* Filter Group 3 */}
          <br></br>Mindest Rendite<br></br>
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
          Finanzierungsvolumen
          <Slider
            size="small"
            defaultValue={50}
            aria-label="Small"
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            FVvalue={value}
            onChange={handleChangeFV}
          />
        </div>
        <div id="FiltertEEES_Right">
          <ul id="testing_choose_box_ul">
            {AlleShown()}
            {FilterShow(AktiveGruppe, aktiverFilter)}

            <div onClick={() => showAll()} id="SDSADF">
              Alle {value}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
