import "./Lage.css";
import FINEXITY_FH_Mikrolage from "../../../../assets/images/FINEXITY_FH_Mikrolage.jpg";
import FINEXITY_FH_Makrolage from "../../../../assets/images/FINEXITY_FH_Makrolage.jpg";

function Lage(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_White_W100_HX">
        <h3 id="GP_Mob_Lage_W100_h3">Mikrolage</h3>
        <h4 id="GP_Mob_Lage_W100_h4">Ehrenfeld (Stadtbezirk)</h4>
        <h5 id="GP_Mob_Lage_W100_h6">
          Der Stadtbezirk Ehrenfeld grenzt nordwestlich an den Innenstadt Kölns
          und umfasst die sechs Stadtteile Bickendorf, Bocklermünd/Mengenich,
          Ehrenfeld, Neuehrenfeld, Ossendorf und Vogelsang. Insgesamt leben
          innerhalb des Stadtbezirks über 110.000 Einwohner auf einer
          Gesamtfläche von 23,98 km².
        </h5>
        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Mikro_1.png"
          id="Mobile_White_W100_HX_Img"
          alt=""
        />
        <h4 id="GP_Mob_Lage_W100_h4">
          {" "}
          Köln-Ehrenfeld: Bunt, kreativ, angesagt
        </h4>
        <h5 id="GP_Mob_Lage_W100_h6">
          Der Stadtteil Ehrenfeld gilt als Szeneviertel und ist vor allem für
          seine ausgeprägte Kultur- und Kreativszene bekannt. Das ehemalige
          Arbeiterviertel durchlebt seit Jahren einen kulturellen Wandel und
          entwickelt sich immer mehr zu einem der angesagten Standorte für
          kreatives Schaffen. Das Projekt Kwartier Werk gliedert sich mit acht
          charakteristischen, verbunden durch den Innenhof als Ort der Begegnung
          und Vielfalt hervorragend in die bestehenden Strukturen ein. Zudem
          überzeugt es durch eine ausgezeichnete Bildungsinfrastruktur sowie den
          zahlreichen Einkaufsmöglichkeiten in nächster Nähe.
        </h5>{" "}
        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Mikro_2.png"
          id="Mobile_White_W100_HX_Img"
          alt=""
        />
      </div>

      <div id="Mobile_White_W100_HX">
        <h3 id="GP_Mob_Lage_W100_h3">Makrolage</h3>
        <h4 id="GP_Mob_Lage_W100_h4">Köln – Metropole am Rhein</h4>

        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Makro_1.jpg"
          id="Mobile_White_W100_HX_Img"
          alt=""
        />
        <h4 id="GP_Mob_Lage_W100_h4">
          {" "}
          Köln – Rheinmetropole mit viel Anziehungskraft
        </h4>

        <h5 id="GP_Mob_Lage_W100_h6">
          Mit rund 1,1 Millionen Einwohnern ist Köln nicht nur die viertgrößte
          Stadt Deutschlands, sondern gleichzeitig auch die bevölkerungsreichste
          Kommune des Bundeslandes Nordrhein-Westfalen. Das Stadtgebiet, welches
          sich über 405,15km² erstreckt und aus neun Stadtbezirken besteht und
          macht Köln flächenmäßig zur drittgrößten Großstadt Deutschlands. Seit
          über 2000 Jahren spielt die Metropole am Rhein, die in der römischen
          Zeit unter dem Namen Oppidum Ubiorum gegründet wurde, eine wichtige
          Rolle für das Umland - sowohl in kultureller als auch in
          wirtschaftlicher Hinsicht. Beispielsweise gelten die Rheinhäfen bis
          heute zu den wichtigsten Binnenhäfen in ganz Europa. Neben den
          bekannten Sehenswürdigkeiten wie dem Kölner Dom beherbergt die
          Karnevalshochburg eine Reihe von Verbänden und Medienunternehmen. Auch
          in Zukunft rechnet die Stadt mit einem kontinuierlichen Wachstum der
          Bevölkerung.
        </h5>

        <h4 id="GP_Mob_Lage_W100_h4"> Immobilienwirtschaft Köln</h4>
        <h5 id="GP_Mob_Lage_W100_h6">
          Das traditionsreiche Köln zieht Menschen nicht zuletzt wegen der
          vielfältigen Karrierechancen an, die sich bei den Medienunternehmen,
          aber auch den zahlreichen anderen hier ansässigen großen Firmen
          ergeben. Gleichzeitig zeichnet sich die Stadt durch ihren ganz eigenen
          und weltoffenen Charakter aus. In puncto Lebensqualität kann Köln mit
          den Top-Standorten Deutschlands problemlos mithalten, was sich auch in
          der Nachfrage nach Immobilien widerspiegelt. Mit einer Leerstandsquote
          von zuletzt zirka 1 % und Top-Quadratmeterpreisen für nachgefragte
          Wohnungen in starken Lagen von bis zu 12.000 Euro präsentiert sich
          Köln als attraktive Stadt für Investitionen in Immobilien.
        </h5>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Lage;
