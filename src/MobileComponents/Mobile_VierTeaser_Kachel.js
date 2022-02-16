import "./Mobile_VierTeaser_Kachel.css";
import TEASER_PROJEKT_BOX from "../components/Teaser_Projekt_Box";
import React, { useState, useEffect } from "react";
import awsExports from "../aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import arrow from "../assets/images/Arrow_white.png";
import MOBILE_HOME_PROJEKT_BOX from "./Mobile_Home_Projekt_Box";

import { listProjekts } from "../graphql/queries";
import { HashLink } from "react-router-hash-link";

function Mobile_VierTeaser_kACHEL(props) {
  const [ProjekteArray, setProjekteArray] = useState([]);
  const [DreierProjekteArray, setDreierProjekteArray] = useState([]);
  const [ViererProjekteArray, setViererProjekteArray] = useState([]);

  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
      builddreierArray(ProjekteList);
      buildViererProjekteArray(ProjekteList);
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
  return (
    <div>
      <div id="MVier_Teaser_Kachel">
        <div id="MVier_Teaser_Kachel_Top">
          <h4 id="MVier_Teaser_Kachel_h4">{props.Title}</h4>
        </div>

        <div id="MVier_Teaser_Kachel_Button">
          <ul id="Mobile_Home_Projekt_Sec_Grid">
            {ViererProjekteArray.map((Projekt) => (
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
      </div>
    </div>
  );
}

export default Mobile_VierTeaser_kACHEL;
