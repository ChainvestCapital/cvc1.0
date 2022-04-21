import "./Design/Alle_Projekte.css";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

import Schiffahrtimg from "./assets/images/Schiffahrt.png";
import TechnologieImg from "./assets/images/Technologie.png";
import FinanceImg from "./assets/images/Finance.png";
import ImmobilienImg from "./assets/images/Immobilien.png";
import EnergieImg from "./assets/images/EnergieIconi.png";
import UmweltImg from "./assets/images/Umwelt.png";
import GamingImg from "./assets/images/Gaming.png";
import Slider from "@mui/material/Slider";
import * as React from "react";
import arrow from "./assets/images/arrow.png";

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
import CookieConsent from "react-cookie-consent";
Amplify.configure(awsExports);

function AlleProjekte() {
  useEffect(() => {
    document.title = "Alle Projekte";
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

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  //Advanced Filter Desktop Ready//

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

  //Ende Advanced Filter Desktop Ready//

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  //Beginn Advanced Filter Mobile Ready//

  const [mAktiveGruppe, setmAktiveGruppe] = useState();
  const [maktiverFilter, setmaktiverFilter] = useState("Alle");

  ///Kategorie
  const [mKategorieAlle, setmKategorieAlle] = useState(
    "Mobile_Filter_Kategorien_Filter_Box_clicked"
  );

  const [mKategorieLogistik, setmKategorieLogistik] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mKategorieImmobilien, setmKategorieImmobilien] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mKategorieTechnologie, setmKategorieTechnologie] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mKategorieFinanzen, setmKategorieFinanzen] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mKategorieEnergie, setmKategorieEnergie] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mKategorieUmwelt, setmKategorieUmwelt] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mKategorieGaming, setmKategorieGaming] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  ///Typ
  const [mFilterTypEK, setmFilterTypEK] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mFilterTypFK, setmFilterTypFK] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  ///Rendite

  /// Logik

  ///
  function mhandlehcange(Gruppe, Value) {
    setmAllinaktiv();

    setshownProjects([]);

    setmaktiverFilter(Value);
    if (Gruppe === "Kategorie") {
      setmAktiveGruppe("Kategorie");
    }
    if (Gruppe === "Typ") {
      setmAktiveGruppe("Typ");
    }

    if (Gruppe === "Rendite") {
      setmAktiveGruppe("Rendite");
    }

    if (Gruppe === "Finanzierungsvolumen") {
      setmAktiveGruppe("Finanzierungsvolumen");
    }
  }

  /////////////////////////////////
  function mAlleShown() {
    if (maktiverFilter === "Alle") {
      return (
        <div id="Mobile_AlleP_Projekte_Box_Wrapper">
          <ul id="Mobile_Home_Projekt_Sec_Grid">
            {ProjekteArray.map((Projekt) => (
              <li id="home_mobil_projekte_li_11">
                <HashLink to={Projekt.InternerLink}>
                  <MOBILE_HOME_PROJEKT_BOX
                    title={Projekt.name}
                    KategorieBildLink={Projekt.KategorieBildLink}
                    Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                    ErwarteteRendite={Projekt.ErwRendite}
                    Typ={Projekt.Typ}
                    Logo={Projekt.LogoLink}
                    titleImg={Projekt.TitleLink}
                    Mindestinvestition={Projekt.Mindestinvestition}
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
  function setmAllinaktiv() {
    setmKategorieLogistik("Mobile_Filter_Kategorien_Filter_Box");
    setmKategorieImmobilien("Mobile_Filter_Kategorien_Filter_Box");
    setmKategorieTechnologie("Mobile_Filter_Kategorien_Filter_Box");
    setmKategorieFinanzen("Mobile_Filter_Kategorien_Filter_Box");
    setmKategorieEnergie("Mobile_Filter_Kategorien_Filter_Box");
    setmKategorieUmwelt("Mobile_Filter_Kategorien_Filter_Box");
    setmKategorieGaming("Mobile_Filter_Kategorien_Filter_Box");
    setmFilterTypEK("Mobile_Filter_Kategorien_Filter_Box");
    setmFilterTypFK("Mobile_Filter_Kategorien_Filter_Box");
    setmKategorieAlle("Mobile_Filter_Kategorien_Filter_Box");
    setmFilterTypEK("Mobile_Filter_Kategorien_Filter_Box");
    setmFilterTypFK("Mobile_Filter_Kategorien_Filter_Box");

    setmValue("5");
    setmFVValue("500");
  }
  function mFilterShow(Gruppe, Value) {
    if (maktiverFilter !== "Alle") {
      if (Gruppe === "Kategorie") {
        return (
          <div id="Mobile_AlleP_Projekte_Box_Wrapper">
            <ul id="Mobile_Home_Projekt_Sec_Grid">
              {ProjekteArray.map((Projekt) => {
                if (Projekt.Kategorie === Value) {
                  return (
                    <li id="home_mobil_projekte_li_11">
                      <HashLink to={Projekt.InternerLink}>
                        <MOBILE_HOME_PROJEKT_BOX
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Mindestinvestition={Projekt.Mindestinvestition}
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
          <div id="Mobile_AlleP_Projekte_Box_Wrapper">
            <ul id="Mobile_Home_Projekt_Sec_Grid">
              {ProjekteArray.map((Projekt) => {
                if (Projekt.FilterTyp === Value) {
                  return (
                    <li id="home_mobil_projekte_li_11">
                      <HashLink to={Projekt.InternerLink}>
                        <MOBILE_HOME_PROJEKT_BOX
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Mindestinvestition={Projekt.Mindestinvestition}
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
          <div id="Mobile_AlleP_Projekte_Box_Wrapper">
            <ul id="Mobile_Home_Projekt_Sec_Grid">
              {ProjekteArray.map((Projekt) => {
                if (Projekt.FilterRendite >= Value) {
                  return (
                    <li id="home_mobil_projekte_li_11">
                      <HashLink to={Projekt.InternerLink}>
                        <MOBILE_HOME_PROJEKT_BOX
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Mindestinvestition={Projekt.Mindestinvestition}
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
          <div id="Mobile_AlleP_Projekte_Box_Wrapper">
            <ul id="Mobile_Home_Projekt_Sec_Grid">
              {ProjekteArray.map((Projekt) => {
                if (Projekt.FilterFinanzierungsvolumen / 100 >= Value) {
                  return (
                    <li id="home_mobil_projekte_li_11">
                      <HashLink to={Projekt.InternerLink}>
                        <MOBILE_HOME_PROJEKT_BOX
                          title={Projekt.name}
                          KategorieBildLink={Projekt.KategorieBildLink}
                          Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                          ErwarteteRendite={Projekt.ErwRendite}
                          Typ={Projekt.Typ}
                          Logo={Projekt.LogoLink}
                          titleImg={Projekt.TitleLink}
                          Mindestinvestition={Projekt.Mindestinvestition}
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

  function mshowAll() {
    setmAllinaktiv();
    setmaktiverFilter("Alle");
    setmKategorieAlle("Mobile_Filter_Kategorien_Filter_Box_clicked");
    setmValue("5");
    setmFVValue("500");
  }

  //////////////
  //ClicksOnKategorie
  /////////////

  /////////////
  function mClickKategorieLogistik() {
    mhandlehcange("Kategorie", "Logistik");
    setmKategorieLogistik("Mobile_Filter_Kategorien_Filter_Box_clicked");
  }

  /////////////
  function mClickKategorieImmobilien() {
    mhandlehcange("Kategorie", "Immobilien");
    setmKategorieImmobilien("Mobile_Filter_Kategorien_Filter_Box_clicked");
  }

  /////////////
  function mClickKategorieFinanzen() {
    mhandlehcange("Kategorie", "Finanzen");
    setmKategorieFinanzen("Mobile_Filter_Kategorien_Filter_Box_clicked");
  }

  /////////////
  function mClickKategorieUmwelt() {
    mhandlehcange("Kategorie", "Umwelt");
    setmKategorieUmwelt("Mobile_Filter_Kategorien_Filter_Box_clicked");
  }

  /////////////
  function mClickKategorieEnergie() {
    mhandlehcange("Kategorie", "Energie");
    setmKategorieEnergie("Mobile_Filter_Kategorien_Filter_Box_clicked");
  }

  /////////////
  function mClickKategorieGaming() {
    mhandlehcange("Kategorie", "Gaming");
    setmKategorieGaming("Mobile_Filter_Kategorien_Filter_Box_clicked");
  }

  /////////////
  function mClickKategorieTechnologie() {
    mhandlehcange("Kategorie", "Technologie");
    setmKategorieTechnologie("Mobile_Filter_Kategorien_Filter_Box_clicked");
  }

  //////////////
  //ClicksOnTyp
  /////////////
  function mClickTypEigenkapital() {
    mhandlehcange("Typ", "Eigenkapital");
    setmFilterTypEK("Mobile_Filter_Kategorien_Filter_Box_clicked");
  }
  function mClickTypFremdkapital() {
    mhandlehcange("Typ", "Fremdkapital");
    setmFilterTypFK("Mobile_Filter_Kategorien_Filter_Box_clicked");
  }

  //////////////
  //ClicksSliderRendite
  /////////////

  const [mvalue, setmValue] = React.useState(5);

  const mhandleChange = (event, newValue) => {
    mhandlehcange("Rendite", newValue);
    setmValue(newValue);
  };
  const [mFVvalue, setmFVValue] = React.useState(500);
  //////////////
  //ClicksSliderFinanzierungsvolumen
  /////////////

  const mhandleChangeFV = (event, newValue) => {
    mhandlehcange("Finanzierungsvolumen", newValue);
    setmFVValue(newValue);
  };

  //Ende Advanced Filter Mobile Ready//

  //Filter
  const [LogistikArray, setLogistikArray] = useState([]);
  const [FinanzenArray, setFinanzenArray] = useState([]);
  const [BlockchainArray, setBlockchainArray] = useState([]);
  const [TechnologieArray, setTechnologieArray] = useState([]);
  const [EnergieArray, setEnergieArray] = useState([]);
  const [GamingArray, setGamingArray] = useState([]);
  const [ImmobilienArray, setImmobilienArray] = useState([]);
  const [UmwelttArray, setUmwelttArray] = useState([]);
  //Build up Arrays

  function BuildLogistikArray(AlleProjekte) {
    setLogistikArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Logistik") {
        LogistikArray.push(projektmap);
        console.log(LogistikArray);
        setshownProjects(LogistikArray);
        console.log(shownProjects);
      } else {
        setLogistikArray([]);
      }
    });
  }

  function BuildGamingArray(AlleProjekte) {
    setGamingArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Gaming") {
        GamingArray.push(projektmap);
        setshownProjects(GamingArray);
      } else {
        setGamingArray([]);
      }
    });
    function BuildEnergieArray(AlleProjekte) {
      setEnergieArray([]);
      setshownProjects([]);

      AlleProjekte.map((projektmap) => {
        if (projektmap.Kategorie === "Energie") {
          EnergieArray.push(projektmap);
          setshownProjects(EnergieArray);
        } else {
          setEnergieArray([]);
        }
      });
    }
  }

  function BuildUmweltArray(AlleProjekte) {
    setUmwelttArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Umwelt") {
        UmwelttArray.push(projektmap);
        setshownProjects(UmwelttArray);
      } else {
        setUmwelttArray([]);
      }
    });
  }
  function BuildImmobilienArray(AlleProjekte) {
    setImmobilienArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Immobilien") {
        ImmobilienArray.push(projektmap);

        setshownProjects(ImmobilienArray);
        console.log(shownProjects);
      } else {
        setImmobilienArray([]);
      }
    });
  }

  function BuildEnergieArray(AlleProjekte) {
    setEnergieArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Energie") {
        EnergieArray.push(projektmap);

        setshownProjects(EnergieArray);
        console.log(EnergieArray);
      } else {
        setEnergieArray([]);
      }
    });
  }

  function BuildBlockchainArray(AlleProjekte) {
    setBlockchainArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Blockchain") {
        BlockchainArray.push(projektmap);
        setshownProjects(BlockchainArray);
        console.log(shownProjects);
      } else {
        setBlockchainArray([]);
        console.log("F");
      }
    });
  }

  function BuildFinanzenArray(AlleProjekte) {
    setFinanzenArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Finanzen") {
        FinanzenArray.push(projektmap);
        console.log(FinanzenArray);
        setshownProjects(FinanzenArray);
        console.log(shownProjects);
      } else {
        setFinanzenArray([]);
        console.log("F");
      }
    });
  }
  function BuildTechnologieArray(AlleProjekte) {
    setTechnologieArray([]);
    setshownProjects([]);

    AlleProjekte.map((projektmap) => {
      if (projektmap.Kategorie === "Technologie") {
        TechnologieArray.push(projektmap);
        console.log(TechnologieArray);
        setshownProjects(TechnologieArray);
        console.log(shownProjects);
      } else {
        setTechnologieArray([]);
        console.log("F");
      }
    });
  }

  function BuildAllArray(AlleProjekte) {
    setshownProjects(AlleProjekte);
  }

  function Keinegefunden() {
    if (shownProjects.length === 0) {
      return (
        <div id="KeinegefundenWrapper">
          <h2 id="Keinegefunden_h2">
            Aktuell leider keine Projekte in dieser Kategorie gefunden
          </h2>
        </div>
      );
    }
  }
  function mKeinegefunden() {
    if (shownProjects.length === 0) {
      return (
        <div id="mKeinegefundenWrapper">
          <h2 id="mKeinegefunden_h2">
            Aktuelle leider keine Projekte in dieser Kategorie gefunden
          </h2>
        </div>
      );
    }
  }

  //Filtermenue Links ausklappen

  useEffect(() => {}, LogistikArray);
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  //Filter used

  const [mobileFilterStatus, setmobileFilterStatus] = useState(false);
  const [mobile_Filter_Box_Status, setmobile_Filter_Box_Status] = useState(
    "Menue_Filter_Box_unclicked"
  );

  const [MobMiF1H1, setMobMiF1H1] = useState(1);
  function MobMIR1() {
    setMobMiF1H1(MobMiF1H1 + 1);
    if (MobMiF1H1 % 2 == 0) {
      setmobile_Filter_Box_Status("Menue_Filter_Box_unclicked");
    } else {
      setmobile_Filter_Box_Status("Menue_Filter_Box_clicked");
    }
  }
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////

  const [ValueMindInv, setValueMindInv] = useState([]);
  /*   const [fMI1, setfMI1] = useState("50");
  const [fMI2, setfMI2] = useState("100");
  const [fMI3, setfMI3] = useState("500");
  const [fMI4, setfMI4] = useState("1000");
  const [fMI5, setfMI5] = useState("1000");  
  
  
  const [fER1, setfER1] = useState("4");
  const [fER2, setfER2] = useState("8");
  const [fER3, setfER3] = useState("12");
  const [fER4, setfER4] = useState("500");
  const [fER5, setfER5] = useState("Variabel");
    const [fBC1, setfBC1] = useState("Ethereum");
  const [fBC2, setfBC2] = useState("Stellar");
  const [fBC3, setfBC3] = useState("Private");
  const [fBC4, setfBC4] = useState("Sonstige");
  */

  console.log(ValueMindInv);

  const [ValueRendite, setValueRendite] = useState([]);

  console.log(ValueRendite);

  const [ValueBlockchain, setValueBlockchain] = useState([]);

  const [ValueBlockchainArray, setValueBlockchianArray] = useState([]);
  console.log(ValueBlockchainArray);

  function buildValueBlockchainArray(AlleProjekte, ValueBlockchain, Wert) {
    console.log("StartBuilding");
    setValueBlockchianArray([]);
    setshownProjects([]);
    console.log(AlleProjekte);

    AlleProjekte.map((projektmap) => {
      console.log(projektmap.Blockchain);
      if (projektmap.Blockchain === Wert) {
        ValueBlockchainArray.push(projektmap);
        setshownProjects(ValueBlockchainArray);
        console.log("Work");
        console.log(shownProjects);
      } else {
        console.log("Fehler");
        setValueBlockchianArray([]);
        console.log(Wert);
        console.log(projektmap.id);
      }
    });
  }

  useEffect(() => {}, shownProjects);

  /////////////////////////////////////////////
  /////////////////////////////////////////////
  useEffect(() => {
    BuildLogistikArray(ProjekteArray);
  }, []);
  useEffect(() => {
    BuildTechnologieArray(ProjekteArray);
  }, []);
  useEffect(() => {
    BuildFinanzenArray(ProjekteArray);
  }, []);
  /////////////////////////////////////////////

  /////////////////////////////////////////////

  const [StatusAll, setStatusAll] = useState("clicked");
  const [StatusLog, setStatusLog] = useState("unclicked");
  const [StatusTech, setStatusTech] = useState("unclicked");
  const [StatusFin, setStatusFin] = useState("unclicked");

  const [StatusEner, setStatusEner] = useState("unclicked");
  const [StatusImmo, setStatusImmo] = useState("unclicked");
  const [StatusUmw, setStatusUmw] = useState("unclicked");
  const [StatusGam, setStatusGam] = useState("unclicked");

  const [mStatusAll, setmStatusAll] = useState(
    "Mobile_Filter_Kategorien_Filter_Box_clicked"
  );
  const [mStatusLog, setmStatusLog] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mStatusTech, setmStatusTech] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mStatusFin, setmStatusFin] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );

  const [mStatusEner, setmStatusEner] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mStatusImmo, setmStatusImmo] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mStatusUmw, setmStatusUmw] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );
  const [mStatusGam, setmStatusGam] = useState(
    "Mobile_Filter_Kategorien_Filter_Box"
  );

  /////////////////////////////////////////////

  function filterAll() {
    setshownProjects(ProjekteArray);
    setStatusAll("clicked");
    setStatusLog("unclicked");
    setStatusTech("unclicked");
    setStatusFin("unclicked");
    setStatusEner("unclicked");
    setStatusImmo("unclicked");
    setStatusUmw("unclicked");
    setStatusGam("unclicked");

    setmStatusLog("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusAll("Mobile_Filter_Kategorien_Filter_Box_clicked");
    setmStatusTech("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusFin("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusEner("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusImmo("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusUmw("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusGam("Mobile_Filter_Kategorien_Filter_Box");
  }
  function filterLog() {
    BuildLogistikArray(ProjekteArray);
    setshownProjects(LogistikArray);
    setStatusAll("unclicked");
    setStatusLog("clicked");
    setStatusTech("unclicked");
    setStatusFin("unclicked");
    setStatusEner("unclicked");
    setStatusImmo("unclicked");
    setStatusUmw("unclicked");
    setStatusGam("unclicked");

    setmStatusLog("Mobile_Filter_Kategorien_Filter_Box_clicked");
    setmStatusAll("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusTech("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusFin("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusEner("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusImmo("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusUmw("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusGam("Mobile_Filter_Kategorien_Filter_Box");
  }
  function filterTech() {
    setshownProjects(TechnologieArray);
    BuildTechnologieArray(ProjekteArray);
    setStatusAll("unclicked");
    setStatusLog("unclicked");
    setStatusTech("clicked");
    setStatusFin("unclicked");
    setStatusEner("unclicked");
    setStatusImmo("unclicked");
    setStatusUmw("unclicked");
    setStatusGam("unclicked");

    setmStatusLog("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusAll("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusTech("Mobile_Filter_Kategorien_Filter_Box_clicked");
    setmStatusFin("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusEner("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusImmo("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusUmw("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusGam("Mobile_Filter_Kategorien_Filter_Box");
  }
  function filterFin() {
    setshownProjects(FinanzenArray);
    BuildFinanzenArray(ProjekteArray);
    setStatusAll("unclicked");
    setStatusLog("unclicked");
    setStatusTech("unclicked");
    setStatusFin("clicked");
    setStatusEner("unclicked");
    setStatusImmo("unclicked");
    setStatusUmw("unclicked");
    setStatusGam("unclicked");

    setmStatusLog("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusAll("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusTech("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusFin("Mobile_Filter_Kategorien_Filter_Box_clicked");
    setmStatusEner("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusImmo("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusUmw("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusGam("Mobile_Filter_Kategorien_Filter_Box");
  }
  function filterEner() {
    setshownProjects(EnergieArray);
    BuildEnergieArray(ProjekteArray);
    setStatusAll("unclicked");
    setStatusLog("unclicked");
    setStatusTech("unclicked");
    setStatusFin("unclicked");
    setStatusEner("clicked");
    setStatusImmo("unclicked");
    setStatusUmw("unclicked");
    setStatusGam("unclicked");

    setmStatusLog("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusAll("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusTech("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusFin("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusEner("Mobile_Filter_Kategorien_Filter_Box_clicked");
    setmStatusImmo("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusUmw("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusGam("Mobile_Filter_Kategorien_Filter_Box");
  }
  function filterImmo() {
    setshownProjects(ImmobilienArray);
    BuildImmobilienArray(ProjekteArray);
    setStatusAll("unclicked");
    setStatusLog("unclicked");
    setStatusTech("unclicked");
    setStatusFin("unclicked");
    setStatusEner("unclicked");
    setStatusImmo("clicked");
    setStatusUmw("unclicked");
    setStatusGam("unclicked");

    setmStatusLog("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusAll("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusTech("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusFin("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusEner("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusImmo("Mobile_Filter_Kategorien_Filter_Box_clicked");
    setmStatusUmw("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusGam("Mobile_Filter_Kategorien_Filter_Box");
  }
  function filterUmw() {
    setshownProjects(UmwelttArray);
    BuildUmweltArray(ProjekteArray);
    setStatusAll("unclicked");
    setStatusLog("unclicked");
    setStatusTech("unclicked");
    setStatusFin("unclicked");
    setStatusEner("unclicked");
    setStatusImmo("unclicked");
    setStatusUmw("clicked");
    setStatusGam("unclicked");

    setmStatusLog("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusAll("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusTech("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusFin("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusEner("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusImmo("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusUmw("Mobile_Filter_Kategorien_Filter_Box_clicked");
    setmStatusGam("Mobile_Filter_Kategorien_Filter_Box");
  }
  function filterGam() {
    setshownProjects(GamingArray);
    BuildGamingArray(ProjekteArray);
    setStatusAll("unclicked");
    setStatusLog("unclicked");
    setStatusTech("unclicked");
    setStatusFin("unclicked");
    setStatusEner("unclicked");
    setStatusImmo("unclicked");
    setStatusUmw("unclicked");
    setStatusGam("clicked");

    setmStatusLog("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusAll("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusTech("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusFin("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusEner("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusImmo("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusUmw("Mobile_Filter_Kategorien_Filter_Box");
    setmStatusGam("Mobile_Filter_Kategorien_Filter_Box_clicked");
  }
  /////////////////////////////////////////////

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
          <TOP_NAV_BAR />
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

      <div id="Mobile_Wrapper">
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
            fontSize: "12px",
            borderRadius: "12px",
            background: "#CDF0EA",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontFamily: "Montserrat",
          }}
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
        <div id="Mobile_AlleP_Wrapper">
          {" "}
          <div id="Mobile_AlleP_Layer"></div>
          <MOBILE_MENUE />
          <div id="Mobile_AlleP_Wrapper_Content">
            {" "}
            <div id="Mobile_AlleP_Top_Sec">
              <h2 id="Mobile_AlleP_Top_Sec_H2">Alle</h2>
              <h2 id="Mobile_AlleP_Top_Sec_H2_yellow">Projekte</h2>
            </div>
            <div id="Mobile_AlleP_Filter_Kategorien_Wrapper">
              <h2 id="Mobile_AlleP_Filter_Wrapper_h3">Filter wählen </h2>

              <div id="Mobile_Filter_Kategorie_Group">
                <div id="Mobile_Filter_Group_Heading_Row">
                  <h5 id="Mobile_Filter_Group_Heading_Row_h5">Kategorien</h5>
                  <h5
                    id="Mobile_Filter_Group_Heading_Row_h5"
                    onClick={() => mshowAll()}
                  >
                    Zurücksetzen
                  </h5>{" "}
                </div>{" "}
                <div id="Mobile_Filter_Kategorie_Button_Wrapper">
                  <div id="Mobile_Filter_Kategorie_Button__row">
                    <div
                      id={mKategorieLogistik}
                      onClick={() => mClickKategorieLogistik()}
                    >
                      <img
                        alt=""
                        src={Schiffahrtimg}
                        id="Mobile_Filter_Kategorien_Filter_Box_Img"
                      />
                      <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                        Logistik
                      </h4>
                    </div>
                    <div
                      onClick={() => mClickKategorieTechnologie()}
                      id={mKategorieTechnologie}
                    >
                      <img
                        src={TechnologieImg}
                        id="Mobile_Filter_Kategorien_Filter_Box_Img"
                        alt=""
                      />
                      <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                        Technologie
                      </h4>
                    </div>
                  </div>

                  <div id="Mobile_Filter_Kategorie_Button__row">
                    <div
                      onClick={() => mClickKategorieFinanzen()}
                      id={mKategorieFinanzen}
                    >
                      <img
                        src={FinanceImg}
                        id="Mobile_Filter_Kategorien_Filter_Box_Img"
                        alt=""
                      />
                      <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                        Finanzen
                      </h4>
                    </div>
                    <div
                      id={mKategorieEnergie}
                      onClick={() => mClickKategorieEnergie()}
                    >
                      <img
                        src={EnergieImg}
                        id="Mobile_Filter_Kategorien_Filter_Box_Img"
                        alt=""
                      />
                      <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                        Energie
                      </h4>
                    </div>
                  </div>

                  <div id="Mobile_Filter_Kategorie_Button__row">
                    <div
                      id={mKategorieImmobilien}
                      onClick={() => mClickKategorieImmobilien()}
                    >
                      <img
                        alt=""
                        src={ImmobilienImg}
                        id="Mobile_Filter_Kategorien_Filter_Box_Img"
                      />
                      <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                        Immobilien
                      </h4>
                    </div>
                    <div
                      id={mKategorieUmwelt}
                      onClick={() => mClickKategorieUmwelt()}
                    >
                      <img
                        src={UmweltImg}
                        id="Mobile_Filter_Kategorien_Filter_Box_Img"
                        alt=""
                      />
                      <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                        Umwelt
                      </h4>
                    </div>
                  </div>

                  <div id="Mobile_Filter_Kategorie_Button__row">
                    <div
                      id={mKategorieGaming}
                      onClick={() => mClickKategorieGaming()}
                    >
                      <img
                        src={GamingImg}
                        alt=""
                        id="Mobile_Filter_Kategorien_Filter_Box_Img"
                      />
                      <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                        Gaming
                      </h4>
                    </div>
                    <div id={mKategorieAlle} onClick={() => mshowAll()}>
                      <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4_Center">
                        Alle
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div id="Mobile_Filter_Typ_Group">
                <div id="Mobile_Filter_Group_Heading_Row">
                  <h5 id="Mobile_Filter_Group_Heading_Row_h5">Typ</h5>
                  <h5
                    id="Mobile_Filter_Group_Heading_Row_h5"
                    onClick={() => mshowAll()}
                    onClick={() => mshowAll()}
                  >
                    Zurücksetzen
                  </h5>
                </div>
                <div id="Mobile_Filter_Typ_Group_Button_wRAPPER">
                  <div id="Mobile_Filter_Kategorie_Button__row">
                    <div
                      id={mFilterTypEK}
                      onClick={() => mClickTypEigenkapital()}
                    >
                      <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                        Eigenkapital
                      </h4>
                    </div>
                    <div
                      id={mFilterTypFK}
                      onClick={() => mClickTypFremdkapital()}
                    >
                      <h4 id="Mobile_Filter_Kategorien_Filter_Box_h4">
                        Fremdkapital
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Mobile_Filter_FV_Re_Wrapper">
                <div id="Mobile_Filter_Mindestrendite_Group">
                  <div id="Mobile_Filter_Group_Heading_Row">
                    <h5 id="Mobile_Filter_Group_Heading_Row_h5">
                      Mindestrendite
                    </h5>
                  </div>

                  <Slider
                    size="small"
                    defaultValue={5}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={0}
                    max={+10}
                    value={value}
                    onChange={mhandleChange}
                    step={0.5}
                  />
                </div>

                <div id="Mobile_Filter_Finanzierungsvolumen_Group">
                  <div id="Mobile_Filter_Group_Heading_Row">
                    <h5 id="Mobile_Filter_Group_Heading_Row_h5">
                      Volumen (in TEUR)
                    </h5>
                  </div>{" "}
                  <Slider
                    size="small"
                    defaultValue={500}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={10}
                    max={50000}
                    FVvalue={FVvalue}
                    onChange={mhandleChangeFV}
                    step={500}
                  />
                </div>
              </div>
            </div>
            <div id="Mobile_AlleP_Projekte_Wrapper">
              <div id="Mobile_AlleP_Projekte_Box_Wrapper">
                {mAlleShown()}
                {mFilterShow(mAktiveGruppe, maktiverFilter)}
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <MOBILE_FOOTER />
      </div>
    </div>
  );
}

export default AlleProjekte;
