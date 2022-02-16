import "./Design/Alle_Projekte.css";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

import Schiffahrtimg from "./assets/images/Schiffahrt.png";
import TechnologieImg from "./assets/images/Technologie.png";
import FinanceImg from "./assets/images/Finance.png";
import ImmobilienImg from "./assets/images/Immobilien.png";
import EnergieImg from "./assets/images/EnergieIconi.png";
import Slider from "@mui/material/Slider";
import * as React from "react";

import UmweltImg from "./assets/images/Umwelt.png";
import GamingImg from "./assets/images/Gaming.png";

import Filtertrigger from "./assets/images/filtertrigger.png";

import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";
import { useState, useEffect } from "react";

import AlleProjekte_Projekt from "./components/Alle_Projekte_Projekt_Box";
import TOP_NAV_BAR from "./components/navigation/Top_Nav_Bar";
import Footer from "./components/navigation/Footer";
import KATEGORIEN_FILTER from "./components/Kategorien_Filter";

import MOBILE_MENUE from "./MobileComponents/Mobile_menue";
import MOBILE_FOOTER from "./MobileComponents/Mobile_Footer";
import MOBILE_HOME_PROJEKT_BOX from "./MobileComponents/Mobile_Home_Projekt_Box";
import arrow from "./assets/images/arrow.png";
import Test_Menue from "./components/Test_Menue";
import CookieConsent from "react-cookie-consent";
Amplify.configure(awsExports);

function AlleProjekte() {
  useEffect(() => {
    document.title = "TestAlle Projekte";
  }, []);

  const [shownProjects, setshownProjects] = useState([]);
  const [ProjekteArray, setProjekteArray] = useState([]);
  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
      setshownProjects(ProjekteList);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProjekte();
  }, []);

  /////////////////////////////////////////////////////

  //Filter

  const [AktiveGruppe, setAktiveGruppe] = useState();
  const [aktiverFilter, setaktiverFilter] = useState("Alle");

  ///Kategorie
  const [KategorieAlle, setKategorieAlle] = useState("Kategorie_aktiv");

  const [KategorieLogistik, setKategorieLogistik] =
    useState("Kategorie_inaktiv");
  const [KategorieImmobilien, setKategorieImmobilien] =
    useState("Kategorie_inaktiv");
  const [KategorieTechnologie, setKategorieTechnologie] =
    useState("Kategorie_inaktiv");
  const [KategorieFinanzen, setKategorieFinanzen] =
    useState("Kategorie_inaktiv");
  const [KategorieEnergie, setKategorieEnergie] = useState("Kategorie_inaktiv");
  const [KategorieUmwelt, setKategorieUmwelt] = useState("Kategorie_inaktiv");
  const [KategorieGaming, setKategorieGaming] = useState("Kategorie_inaktiv");
  ///Typ
  const [FilterTypEK, setFilterTypEK] = useState("FilterTyp_inaktiv");
  const [FilterTypFK, setFilterTypFK] = useState("FilterTyp_inaktiv");
  ///Rendite

  ///Finanzierungsvolumen

  /// Logik

  ///
  function handlehcange(Gruppe, Value) {
    setAllinaktiv();

    setshownProjects([]);

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
      return (
        <div id="alle_projekte_projekte_wrapper_projekte">
          <ul id="alle_projekte_ul">
            {ProjekteArray.map((Projekt) => (
              <li id="alle_projekte_li">
                <HashLink to={Projekt.InternerLink}>
                  <AlleProjekte_Projekt
                    title={Projekt.name}
                    KategorieBildLink={Projekt.KategorieBildLink}
                    Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                    ErwarteteRendite={Projekt.ErwRendite}
                    Typ={Projekt.Typ}
                    Logo={Projekt.LogoLink}
                    titleImg={Projekt.TitleLink}
                    Emittent={Projekt.Emittent}
                  />
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  function setAllinaktiv() {
    setKategorieLogistik("Kategorie_inaktiv");
    setKategorieImmobilien("Kategorie_inaktiv");
    setKategorieTechnologie("Kategorie_inaktiv");
    setKategorieFinanzen("Kategorie_inaktiv");
    setKategorieEnergie("Kategorie_inaktiv");
    setKategorieUmwelt("Kategorie_inaktiv");
    setKategorieGaming("Kategorie_inaktiv");
    setFilterTypEK("Kategorie_inaktiv");
    setFilterTypFK("Kategorie_inaktiv");
    setKategorieAlle("Kategorie_inaktiv");
    setFilterTypEK("FilterTyp_inaktiv");
    setFilterTypFK("FilterTyp_inaktiv");

    setValue("5");
    setFVValue("500");
  }
  function FilterShow(Gruppe, Value) {
    if (aktiverFilter !== "Alle") {
      if (Gruppe === "Kategorie") {
        return (
          <div id="alle_projekte_projekte_wrapper_projekte">
            <ul id="alle_projekte_ul">
              {ProjekteArray.map((Projekt) => {
                if (Projekt.Kategorie === Value) {
                  return (
                    <li id="alle_projekte_li">
                      <HashLink to={Projekt.InternerLink}>
                        <AlleProjekte_Projekt
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Emittent={Projekt.Emittent}
                        />
                      </HashLink>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        );
      }

      //Typ
      if (Gruppe === "Typ") {
        return (
          <div id="alle_projekte_projekte_wrapper_projekte">
            <ul id="alle_projekte_ul">
              {ProjekteArray.map((Projekt) => {
                if (Projekt.FilterTyp === Value) {
                  return (
                    <li id="alle_projekte_li">
                      <HashLink to={Projekt.InternerLink}>
                        <AlleProjekte_Projekt
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Emittent={Projekt.Emittent}
                        />
                      </HashLink>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        );
      }

      // Renidte
      if (Gruppe === "Rendite") {
        return (
          <div id="alle_projekte_projekte_wrapper_projekte">
            <ul id="alle_projekte_ul">
              {ProjekteArray.map((Projekt) => {
                if (Projekt.FilterRendite >= Value) {
                  return (
                    <li id="alle_projekte_li">
                      <HashLink to={Projekt.InternerLink}>
                        <AlleProjekte_Projekt
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Emittent={Projekt.Emittent}
                        />
                      </HashLink>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        );
      }

      //FV

      if (Gruppe === "Finanzierungsvolumen") {
        return (
          <div id="alle_projekte_projekte_wrapper_projekte">
            <ul id="alle_projekte_ul">
              {ProjekteArray.map((Projekt) => {
                if (Projekt.FilterFinanzierungsvolumen / 100 >= FVvalue) {
                  return (
                    <li id="alle_projekte_li">
                      <HashLink to={Projekt.InternerLink}>
                        <AlleProjekte_Projekt
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Emittent={Projekt.Emittent}
                        />
                      </HashLink>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        );
      }
    }
  }
  //////////////
  //Alle zeigen
  /////////////

  function showAll() {
    setAllinaktiv();
    setaktiverFilter("Alle");
    setKategorieAlle("Kategorie_aktiv");
    setValue("5");
    setFVValue("500");
  }

  //////////////
  //ClicksOnKategorie
  /////////////

  /////////////
  function ClickKategorieLogistik() {
    handlehcange("Kategorie", "Logistik");
    setKategorieLogistik("Kategorie_aktiv");
  }

  /////////////
  function ClickKategorieImmobilien() {
    handlehcange("Kategorie", "Immobilien");
    setKategorieImmobilien("Kategorie_aktiv");
  }

  /////////////
  function ClickKategorieFinanzen() {
    handlehcange("Kategorie", "Finanzen");
    setKategorieFinanzen("Kategorie_aktiv");
  }

  /////////////
  function ClickKategorieUmwelt() {
    handlehcange("Kategorie", "Umwelt");
    setKategorieUmwelt("Kategorie_aktiv");
  }

  /////////////
  function ClickKategorieEnergie() {
    handlehcange("Kategorie", "Energie");
    setKategorieEnergie("Kategorie_aktiv");
  }

  /////////////
  function ClickKategorieGaming() {
    handlehcange("Kategorie", "Gaming");
    setKategorieGaming("Kategorie_aktiv");
  }

  /////////////
  function ClickKategorieTechnologie() {
    handlehcange("Kategorie", "Technologie");
    setKategorieTechnologie("Kategorie_aktiv");
  }

  //////////////
  //ClicksOnTyp
  /////////////
  function ClickTypEigenkapital() {
    handlehcange("Typ", "Eigenkapital");
    setFilterTypEK("FilterTyp_aktiv");
  }
  function ClickTypFremdkapital() {
    handlehcange("Typ", "Fremdkapital");
    setFilterTypFK("FilterTyp_aktiv");
  }

  //////////////
  //ClicksSliderRendite
  /////////////

  const [value, setValue] = React.useState(5);

  const handleChange = (event, newValue) => {
    handlehcange("Rendite", newValue);
    setValue(newValue);
  };
  const [FVvalue, setFVValue] = React.useState(500);
  //////////////
  //ClicksSliderFinanzierungsvolumen
  /////////////

  const handleChangeFV = (event, newValue) => {
    handlehcange("Finanzierungsvolumen", newValue);
    setFVValue(newValue);
  };

  return (
    <div>
      <div id="Desktop_Wrapper">
        <div id="alle_projekte_ALL_wrapper">
          <div id="alle_projekte_Layer"></div>
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
            Marketing-Mitteilungen. Durch die weitere Nutzung der Website
            stimmen Sie der Verwendung zu. Mehr dazu finden sie in unser{" "}
            <Link to="./Datenschutzerklaerung">Datenschutzerklärung</Link>
            <span style={{ fontSize: "10px" }}></span>
          </CookieConsent>{" "}
          <Test_Menue />
          <div id="alle_projekte_wrapper">
            {" "}
            <div id="alle_projekte_filter_wrapper">
              <div id="Filter_Kategorien_Left">
                {/* Filter Kategorie*/}
                <div id="FilterGruppeLategorie_Wrapper">
                  <div id="FilterGruppe_Überschrift">
                    <h5 id="FilterGruppe_Überschrift_h5">Kategorie</h5>

                    <h5
                      onClick={() => showAll()}
                      id="FilterGruppe_Überschrift_h5_pointer"
                    >
                      Zurücksetzen
                    </h5>
                  </div>
                  <div id="FilterKategorieRowWrapper">
                    <div id={KategorieAlle} onClick={() => showAll()}>
                      <img src={arrow} id="KategorieFilterImg" />
                      <h4 id="KategorieFilterH4">Alle</h4>
                    </div>
                    <div
                      id={KategorieLogistik}
                      onClick={() => ClickKategorieLogistik()}
                    >
                      <img src={Schiffahrtimg} id="KategorieFilterImg" />
                      <h4 id="KategorieFilterH4">Logistik</h4>
                    </div>
                  </div>
                  <div id="FilterKategorieRowWrapper">
                    <div
                      id={KategorieImmobilien}
                      onClick={() => ClickKategorieImmobilien()}
                    >
                      <img src={ImmobilienImg} id="KategorieFilterImg" />
                      <h4 id="KategorieFilterH4">Immobilien</h4>
                    </div>
                    <div
                      id={KategorieFinanzen}
                      onClick={() => ClickKategorieFinanzen()}
                    >
                      <img src={FinanceImg} id="KategorieFilterImg" />
                      <h4 id="KategorieFilterH4">Finanzen</h4>
                    </div>{" "}
                  </div>

                  <div id="FilterKategorieRowWrapper">
                    <div
                      id={KategorieUmwelt}
                      onClick={() => ClickKategorieUmwelt()}
                    >
                      <img src={UmweltImg} id="KategorieFilterImg" />
                      <h4 id="KategorieFilterH4">Umwelt</h4>
                    </div>
                    <div
                      id={KategorieEnergie}
                      onClick={() => ClickKategorieEnergie()}
                    >
                      <img src={EnergieImg} id="KategorieFilterImg" />
                      <h4 id="KategorieFilterH4">Energie</h4>
                    </div>{" "}
                  </div>

                  <div id="FilterKategorieRowWrapper">
                    <div
                      id={KategorieGaming}
                      onClick={() => ClickKategorieGaming()}
                    >
                      <img src={GamingImg} id="KategorieFilterImg" />
                      <h4 id="KategorieFilterH4">Gaming</h4>
                    </div>
                    <div
                      id={KategorieTechnologie}
                      onClick={() => ClickKategorieTechnologie()}
                    >
                      <img src={TechnologieImg} id="KategorieFilterImg" />
                      <h4 id="KategorieFilterH4">Technologie</h4>
                    </div>{" "}
                  </div>
                </div>
                {/* Filter Typ*/}
                <div id="FilterGruppeTyp_Wrapper">
                  <div id="FilterGruppe_Überschrift">
                    <h5 id="FilterGruppe_Überschrift_h5">Typ</h5>

                    <h5
                      onClick={() => showAll()}
                      id="FilterGruppe_Überschrift_h5_pointer"
                    >
                      Zurücksetzen
                    </h5>
                  </div>{" "}
                  <div id="FilterKategorieRowWrapper">
                    <div
                      id={FilterTypEK}
                      onClick={() => ClickTypEigenkapital()}
                    >
                      <h5 id="FilterTyp_h5">Eigenkapital</h5>
                    </div>
                    <div
                      id={FilterTypFK}
                      onClick={() => ClickTypFremdkapital()}
                    >
                      <h5 id="FilterTyp_h5">Fremdkapital</h5>
                    </div>{" "}
                  </div>
                </div>
                {/* Filter Rendite*/}
                <div id="FilterGruppeRenidte_Wrapper">
                  <div id="FilterGruppe_Überschrift">
                    <h5 id="FilterGruppe_Überschrift_h5">Rendite</h5>

                    <h5
                      onClick={() => showAll()}
                      id="FilterGruppe_Überschrift_h5_pointer"
                    >
                      Zurücksetzen
                    </h5>
                  </div>{" "}
                  <div id="FilterGruppeRenditeSlider">
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
                  </div>{" "}
                </div>{" "}
                {/* Filter Finanzierungsvolumen*/}
                <div id="FilterGruppe_Finanzierungsvolumen_Wrapper">
                  <div id="FilterGruppe_Überschrift">
                    <h5 id="FilterGruppe_Überschrift_h5">
                      Finanzierungsvolumen (in TEUR)
                    </h5>
                    <h5
                      onClick={() => showAll()}
                      id="FilterGruppe_Überschrift_h5_pointer"
                    >
                      Zurücksetzen
                    </h5>
                  </div>{" "}
                  <div id="FilterGruppeFVSlider">
                    <Slider
                      size="small"
                      defaultValue={500}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      min={10}
                      max={50000}
                      FVvalue={FVvalue}
                      onChange={handleChangeFV}
                      step={500}
                    />
                  </div>{" "}
                </div>
              </div>
            </div>
            <div id="alle_projekte_projekte_wrapper">
              {AlleShown()}
              {FilterShow(AktiveGruppe, aktiverFilter)}
            </div>
          </div>
        </div>{" "}
        <Footer />
      </div>
    </div>
  );
}

export default AlleProjekte;
