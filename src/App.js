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

import Über_Uns from "./About_Us";
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
import TestFilter from "./FilterTest";
import Prenzlauer_Promande from "./Digitale Wertpapiere/Projekte/Prenzlauer_Promenade/Prenzlauser_Promenade";
import Rndm from "./RndmTestSeite";
import Vergleichstool from "./Vergleichen2";
import Coming_Soon_App from "./Coming_Sonn_App";
import Academy from "./Academy";
import DEX from "./Academy/Content/DEX";
import FarbTesten from "./TestFarben";
import HomeSS from "./LandingPage";
import Metaverse from "./Academy/Content/Metaverse";
import Immobilienindizes_und_tokenisierte_Immobilien_im_Vergleich from "./Academy/Content/Immobilienindizes_und_tokenisierte_Immobilien_im_Vergleich.js";
import NonFinancialRisksinDeFi from "./Academy/Content/Non-Financial-Risks-in-DeFi";
import Testing from "./testing";
import About_Us from "./About_Us.js";

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
      {/* 
             
  <Route path="/xxx/TestFarben" element={<FarbTesten />} />
        <Route path="xxx/TestFilter" element={<TestFilter />} />
        <Route path="/Digitale-Wertpapiere/Rndm" element={<Rndm />} />
                <Route path="xxx/privateTest/Academy" element={<Academy />} />        <Route path="/Sekundaermaerkte" element={<Sekundärmärkte />} />
        <Route path="/testing" element={<Testing />} />{" "}
<Route path="/Local/home" element={<HomeSS />} />
        <Route path="/Local/About" element={<About_Us />} />
      */}
      <Routes>
        {" "}
        <Route path="/" element={<HomeSS />} />{" "}
        <Route path="/Digitale-Wertpapiere/FourTrees" element={<FourTrees />} />
        <Route path="/Digitale-Wertpapiere/FourTrees" element={<FourTrees />} />
        <Route path="/Digitale-Wertpapiere/LakeSide" element={<LakeSide />} />
        <Route path="/Digitale-Wertpapiere/Muster" element={<Muster />} />
        <Route path="/Digitale-Wertpapiere/Bitbond" element={<Bitbond />} />
        <Route path="/Digitale-Wertpapiere/Tomorrow" element={<Tomorrow />} />
        <Route
          path="/Digitale-Wertpapiere/Boernerstrasse-2"
          element={<Boernerstrasse_zwei />}
        />
        <Route path="Vergleichstool" element={<Vergleichstool />} />
        <Route path="App" element={<Coming_Soon_App />} />
        <Route path="Academy" element={<Academy />} />
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
        <Route path="/Emittenten" element={<Emittenten />} />
        <Route
          path="/Datenschutzerklaerung"
          element={<Datenschutzerklärung />}
        />
        <Route
          path="Academy/Was-sind-digitale-Wertpapiere"
          element={<WasSindDigitaleWertpapiere />}
        />
        <Route
          path="Academy/Non-Financial-Risks-in-DeFi"
          element={<NonFinancialRisksinDeFi />}
        />
        <Route path="Academy/DEX" element={<DEX />} />
        <Route path="Academy/Metaverse" element={<Metaverse />} />
        <Route
          path="Academy/Immobilienindizes-und-tokenisierte-Immobilien-im-Vergleich"
          element={
            <Immobilienindizes_und_tokenisierte_Immobilien_im_Vergleich />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
