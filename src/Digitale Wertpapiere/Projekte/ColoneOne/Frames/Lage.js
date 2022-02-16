import "./Lage.css";
import FINEXITY_GS_Mikrolage from "../../../../assets/images/FINEXITY_GS_Mikrolage.png";
import FINEXITY_GS_14 from "../../../../assets/images/FINEXITY_GS_14.jpg";
function Lage(props) {
  return props.trigger ? (
    <div>
      <div id="Lage_Wrapper_GP">
        <div id="Lage_Wrapper_GP_left">
          <h3 id="Lage_Wrapper_GP_h3">Mikrolage</h3>
          <h4 id="Lage_Wrapper_GP_h4">Ehrenfeld (Stadtbezirk)</h4>{" "}
          <div id="Margin_LageComp"></div>
          <h6 id="Lage_Wrapper_GP_h6">
            Der Stadtbezirk Ehrenfeld grenzt nordwestlich an den Innenstadt
            Kölns und umfasst die sechs Stadtteile Bickendorf,
            Bocklermünd/Mengenich, Ehrenfeld, Neuehrenfeld, Ossendorf und
            Vogelsang. Insgesamt leben innerhalb des Stadtbezirks über 110.000
            Einwohner auf einer Gesamtfläche von 23,98 km².
          </h6>
          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Mikro_1.png"
            id="Lage_Wrapper_GP_left_img"
            alt=""
          />{" "}
          <h4 id="Lage_Wrapper_GP_h4">
            Köln-Ehrenfeld: Bunt, kreativ, angesagt
          </h4>{" "}
          <div id="Margin_LageComp"></div>
          <h6 id="Lage_Wrapper_GP_h6">
            Der Stadtteil Ehrenfeld gilt als Szeneviertel und ist vor allem für
            seine ausgeprägte Kultur- und Kreativszene bekannt. Das ehemalige
            Arbeiterviertel durchlebt seit Jahren einen kulturellen Wandel und
            entwickelt sich immer mehr zu einem der angesagten Standorte für
            kreatives Schaffen. Das Projekt Kwartier Werk gliedert sich mit acht
            charakteristischen, verbunden durch den Innenhof als Ort der
            Begegnung und Vielfalt hervorragend in die bestehenden Strukturen
            ein. Zudem überzeugt es durch eine ausgezeichnete
            Bildungsinfrastruktur sowie den zahlreichen Einkaufsmöglichkeiten in
            nächster Nähe
          </h6>{" "}
          <div id="Margin_LageComp"></div>
          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Mikro_2.png"
            alt=""
          />
        </div>
        <div id="Lage_Wrapper_GP_right">
          <h3 id="Lage_Wrapper_GP_h3">Makrolage</h3>
          <h4 id="Lage_Wrapper_GP_h4">Köln – Metropole am Rhein</h4>
          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Makro_1.jpg"
            alt=""
            id="Lage_Wrapper_GP_RIGHT_img"
          />{" "}
          <div id="Margin_LageComp"></div>
          <h5 id="Lage_Wrapper_GP_h5">
            Köln – Rheinmetropole mit viel Anziehungskraft
          </h5>
          <h6 id="Lage_Wrapper_GP_h6">
            Mit rund 1,1 Millionen Einwohnern ist Köln nicht nur die viertgrößte
            Stadt Deutschlands, sondern gleichzeitig auch die
            bevölkerungsreichste Kommune des Bundeslandes Nordrhein-Westfalen.
            Das Stadtgebiet, welches sich über 405,15km² erstreckt und aus neun
            Stadtbezirken besteht und macht Köln flächenmäßig zur drittgrößten
            Großstadt Deutschlands. Seit über 2000 Jahren spielt die Metropole
            am Rhein, die in der römischen Zeit unter dem Namen Oppidum Ubiorum
            gegründet wurde, eine wichtige Rolle für das Umland - sowohl in
            kultureller als auch in wirtschaftlicher Hinsicht. Beispielsweise
            gelten die Rheinhäfen bis heute zu den wichtigsten Binnenhäfen in
            ganz Europa. Neben den bekannten Sehenswürdigkeiten wie dem Kölner
            Dom beherbergt die Karnevalshochburg eine Reihe von Verbänden und
            Medienunternehmen. Auch in Zukunft rechnet die Stadt mit einem
            kontinuierlichen Wachstum der Bevölkerung.
          </h6>
          <div id="Margin_LageComp"></div>
          <div id="Margin_LageComp"></div>
          <h5 id="Lage_Wrapper_GP_h5">Immobilienwirtschaft Köln</h5>
          <h6 id="Lage_Wrapper_GP_h6">
            Das traditionsreiche Köln zieht Menschen nicht zuletzt wegen der
            vielfältigen Karrierechancen an, die sich bei den Medienunternehmen,
            aber auch den zahlreichen anderen hier ansässigen großen Firmen
            ergeben. Gleichzeitig zeichnet sich die Stadt durch ihren ganz
            eigenen und weltoffenen Charakter aus. In puncto Lebensqualität kann
            Köln mit den Top-Standorten Deutschlands problemlos mithalten, was
            sich auch in der Nachfrage nach Immobilien widerspiegelt. Mit einer
            Leerstandsquote von zuletzt zirka 1 % und Top-Quadratmeterpreisen
            für nachgefragte Wohnungen in starken Lagen von bis zu 12.000 Euro
            präsentiert sich Köln als attraktive Stadt für Investitionen in
            Immobilien.
          </h6>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Lage;
