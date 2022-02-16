import "./Drei_Teaser_Kachel.css";
import TEASER_PROJEKT_BOX from "./Teaser_Projekt_Box";
import React, { useState, useEffect } from "react";
import awsExports from "../aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import arrow from "../assets/images/Arrow_white.png";

import { listProjekts } from "../graphql/queries";
import { HashLink } from "react-router-hash-link";

import Amplify from "aws-amplify";

function Drei_Teaser_Kachel(props) {
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
      <div id="Drei_Teaser_Kachel">
        <div id="Drei_Teaser_Kachel_Left">
          <h4 id="Drei_Teaser_Kachel_Left_h4">{props.Title}</h4>
          <HashLink to="../Digitale-Wertpapiere#">
            {" "}
            <div id="Top_Menue_Bar_Button_yellow_teaser">
              <h3 id="Top_Menue_Bar_h3_white">Alle Projekte</h3>
              <img src={arrow} id="Top_Menue_Bar_Button_yellow_IMG" alt="" />
            </div>
          </HashLink>
        </div>

        <div id="Drei_Teaser_Kachel_Right">
          <ul id="teaser_projekte_ul_id">
            {DreierProjekteArray.map((Projekt) => (
              <li id="teaser_projekte_li_11">
                <HashLink to={Projekt.InternerLink}>
                  <TEASER_PROJEKT_BOX
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
      </div>
    </div>
  );
}

export default Drei_Teaser_Kachel;
