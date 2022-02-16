import "./App.css";
import React from "react";

import { useState, useEffect } from "react";
import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Emittenten from "./Emittenten";

import Bitbond from "./Digitale Wertpapiere/Projekte/Bitbond/Bitbond.js";
import Tomorrow from "./Digitale Wertpapiere/Projekte/Tomorrow/Tomorrow.js";
import Muster from "./Digitale Wertpapiere/Projekte/Muster/Muster.js";
import Vogemann from "./Digitale Wertpapiere/Projekte/Vogemann/Vogemann";
import GlückburgerPlatz from "./Digitale Wertpapiere/Projekte/GlücksburgerPlatz/GlücksburgerPlatz";
import AlleProjekte from "./Alle_Projekte.js";
import Impressum from "./Impressum.js";
import Datenschutzerklärung from "./Datenschutzerklärung.js";
import FAQ from "./FAQ.js";

import Über_Uns from "./Über-uns.js";
import Sekundärmärkte from "./Sekundärmärkte";
import FürUnternehmen from "./FürUnternehmen.js";
import WasSindDigitaleWertpapiere from "./Was-sind-Digitale-Wertpapiere";
import Ueberseeallee from "./Digitale Wertpapiere/Projekte/Ueberseeallee/Ueberseeallee";
import Ferdinand_Happ_Straße from "./Digitale Wertpapiere/Projekte/Ferdinand_Happ/Ferdinand_Happ";
import Boernerstrasse from "./Digitale Wertpapiere/Projekte/Börnerstrasse/Boernerstrasse";
import Boernerstrasse_zwei from "./Digitale Wertpapiere/Projekte/Börerstrasse2_0/Boernerstrasse";
import Colone_One from "./Digitale Wertpapiere/Projekte/ColoneOne/ColoneOne";
import FourTrees from "./Digitale Wertpapiere/Projekte/FourTrees/FourTrees";
import LakeSide from "./Digitale Wertpapiere/Projekte/Lakeside/Lakeside";
import Academy from "./Content/Landing";
import TestFilter from "./FilterTest";
import Prenzlauer_Promande from "./Digitale Wertpapiere/Projekte/Prenzlauer_Promenade/Prenzlauser_Promenade";
import Rndm from "./RndmTestSeite";
import Vergleichstool from "./Vergleichstool";
import Coming_Soon_App from "./Coming_Sonn_App";

import Testing from "./testing";

Amplify.configure(awsExports);
function App() {
  const [ProjekteArray, setProjekteArray] = useState([]);
  const fetchProjekte = async () => {
    try {
      const ProjekteData = await API.graphql(graphqlOperation(listProjekts));

      const ProjekteList = ProjekteData.data.listProjekts.items;
      setProjekteArray(ProjekteList);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProjekte();
  }, []);
  //  205.251.192.0 //
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/testing" element={<Testing />} />{" "}
        <Route path="/Digitale-Wertpapiere/FourTrees" element={<FourTrees />} />
        <Route path="/Digitale-Wertpapiere/FourTrees" element={<FourTrees />} />
        <Route path="/Digitale-Wertpapiere/LakeSide" element={<LakeSide />} />
        <Route path="/Digitale-Wertpapiere/Muster" element={<Muster />} />
        <Route path="/Digitale-Wertpapiere/Bitbond" element={<Bitbond />} />
        <Route path="/Digitale-Wertpapiere/Tomorrow" element={<Tomorrow />} />
        <Route path="xxx/TestFilter" element={<TestFilter />} />
        <Route
          path="/Digitale-Wertpapiere/Boernerstrasse-2"
          element={<Boernerstrasse_zwei />}
        />
        <Route
          path="xx/privateTestting/Vergleichstool"
          element={<Vergleichstool />}
        />
        <Route
          path="xx/privateTestting/Coming_Soon_App"
          element={<Coming_Soon_App />}
        />
        <Route
          path="/Digitale-Wertpapiere/Colone-One"
          element={<Colone_One />}
        />
        <Route
          path="/Digitale-Wertpapiere/Boernerstrasse"
          element={<Boernerstrasse ProjekeArray={ProjekteArray} />}
        />
        <Route path="/Digitale-Wertpapiere/Vogemann" element={<Vogemann />} />
        <Route
          path="/Digitale-Wertpapiere/Prenzlauer-Promenade"
          element={<Prenzlauer_Promande />}
        />
        <Route path="/Digitale-Wertpapiere/Rndm" element={<Rndm />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route
          path="/Digitale-Wertpapiere/Ueberseeallee"
          element={<Ueberseeallee />}
        />
        <Route
          path="/Digitale-Wertpapiere/Gluecksburger-Platz"
          element={<GlückburgerPlatz />}
        />
        <Route
          path="/Digitale-Wertpapiere/FerdinandHapp"
          element={<Ferdinand_Happ_Straße />}
        />
        <Route path="/Digitale-Wertpapiere" element={<AlleProjekte />} />
        <Route path="/Impressum" element={<Impressum />} />
        <Route path="/Unternehmen" element={<FürUnternehmen />} />
        <Route path="/Ueber-uns" element={<Über_Uns />} />
        <Route path="/Sekundaermaerkte" element={<Sekundärmärkte />} />
        <Route path="/Emittenten" element={<Emittenten />} />
        <Route path="xxx/privateTest/Academy" element={<Academy />} />
        <Route
          path="/Datenschutzerklaerung"
          element={<Datenschutzerklärung />}
        />
        <Route
          path="/Was-sind-digitale-Wertpapiere"
          element={<WasSindDigitaleWertpapiere />}
        />
      </Routes>
    </div>
  );
}

export default App;
