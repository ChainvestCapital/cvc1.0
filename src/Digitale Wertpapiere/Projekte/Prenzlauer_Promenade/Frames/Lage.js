import "./Lage.css";
import FINEXITY_FH_Mikrolage from "../../../../assets/images/FINEXITY_FH_Mikrolage.jpg";
import FINEXITY_FH_Makrolage from "../../../../assets/images/FINEXITY_FH_Makrolage.jpg";
function Lage(props) {
  return props.trigger ? (
    <div>
      <div id="Lage_Wrapper_GP">
        <div id="Lage_Wrapper_GP_left">
          {" "}
          <h3 id="Lage_Wrapper_GP_h3">Mikrolage</h3>
          <h4 id="Lage_Wrapper_GP_h4">Heinersdorf, Pankow</h4>{" "}
          <div id="margin_top_2vh"></div>
          <div id="margin_top_2vh"></div>
          <h6 id="Lage_Wrapper_GP_h6">
            Heinersdorf gehört zu den aufstrebenden Wohngebieten der Stadt und
            sticht besonders durch die kurze Distanz zum Stadtkern sowie zum
            Szeneviertel Prenzlauer Berg hervor. Durch seine ausgezeichnete
            Infrastruktur und Zentrumsnähe ist eine positive Entwicklung des
            Viertels absehbar, einhergehend mit steigenden Mieten und
            Kaufpreisen. Die Gegend rund um das Objekt bildet durch den hohen
            Anteil an Kleingartenanlagen ein grünes und ruhiges Stadtbild ab –
            eine nachgefragte Seltenheit mitten in der urban geprägten Metropole
            Berlin.
          </h6>{" "}
          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Prenzlauer_Mikro_1.png"
            id="Lage_Wrapper_GP_left_img"
            alt=""
          />{" "}
          <h6 id="Lage_Wrapper_GP_h6">
            Die Treskowstraße ist eine verkehrsberuhigte Seitenstraße der
            Prenzlauer Promenade, welche einer der wichtigsten Straßen der
            Hauptstadt ist und direkt zum Brandenburger Tor führt. In direkter
            Umgebung der Treskowstraße befinden sich verschiedene Einzelhändler
            für Einkäufe des täglichen Bedarfs sowie Apotheken, Ärtze, Bildungs-
            und Freizeiteinrichtungen. In wenigen Minuten lässt sich die
            S-Bahnhaltestelle "Am Steinberg" sowie die U-Bahnhaltestelle
            "Vinetastraße" erreichen.
          </h6>
        </div>

        <div id="Lage_Wrapper_GP_right">
          {" "}
          <h3 id="Lage_Wrapper_GP_h3">Makrolage</h3>{" "}
          <h4 id="Lage_Wrapper_GP_h4">Berlin – Hauptstadt und Weltmetropole</h4>
          <img
            src="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Prenzlauer_Makro_1.jpg"
            id="Lage_Wrapper_GP_left_img"
            alt=""
          />
          <h6 id="Lage_Wrapper_GP_h6">
            Berlin ist Deutschlands Hauptstadt und Zentrum der Politik. Mit rund
            3,8 Millionen Einwohnern und einer Fläche von etwa 892 km² ist sie
            sowohl die bevölkerungsreichste Stadt der Bundesrepublik als auch
            die Gemeinde mit der größten Fläche. Ebenso ist Berlin die zweit
            bevölkerungsreichste Ebenso ist Berlin die zweit
            bevölkerungsreichste und der Fläche nach die fünftgrößte Stadt der
            Europäischen Union. Die Flüsse Havel und Spree fließen durch Berlin,
            welches in 12 Bezirke bzw. 95 Ortsteile unterteilt ist. Berlin hat
            das Flair einer Weltmetropole, ist innovativ und kreativ. Das zeigt
            auch der Titel „Stadt des Designs“, mit dem die UNESCO die
            Bundeshauptstadt ausgezeichnet hat. Verständlich also, dass die
            Stadt nicht nur immer mehr Touristen, sondern auch Arbeiter,
            Studenten und Wohnungssuchende anzieht. Laut offiziellen Schätzungen
            wird die Einwohnerzahl Berlins bis 2030 auf knapp 4 Millionen
            ansteigen. Rund 80% aller Berliner Unternehmen sind im
            Dienstleistungssektor tätig. Der Tourismussektor verzeichnet zuletzt
            33 Millionen Übernachtungen von 13,5 Millionen Besuchern; dies
            allein beschert Berlin eine Bruttowertschöpfung von 11,58 Mrd. Euro.
          </h6>
          <h4 id="Lage_Wrapper_GP_h4">
            {" "}
            <div id="margin_top_2vh"></div>
            Berlin verbindet Kultur, Wirtschaft und Politik
          </h4>{" "}
          <div id="margin_top_2vh"></div>
          <h6 id="Lage_Wrapper_GP_h6">
            {" "}
            Berlin steht für Spannung pur. Eine Kombination aus neu,
            international, überraschend und einzigartig. Inspiration und Impulse
            auf Maximum: Wo sonst in Deutschland gibt es von allem am meisten,
            ist es am buntesten und am intensivsten? Ob Kultur, Entertainment,
            Shopping, Sport oder Gastronomie – für jede Generation und jeden
            Geschmack ist hier inspirierende Abwechslung angesagt. Zudem lockt
            Berlins Start-up-Szene junge, kreative Unternehmer in die Stadt, die
            dort ihr Business auf- und ausbauen wollen. Gemeinsam mit dem
            vielfältigen Bildungs-, Kunst- und Kulturangebot ist Berlin eine der
            attraktivsten Städte für junge Talente. Die Nachfrage nach Wohnraum
            ist dadurch extrem hoch. Schätzungsweise werden in Berlin jährlich
            bis zu 20.000 Wohnungen neu gebaut, um die hohe Nachfrage zu
            befriedigen. Auch die Leerstandsquote von ca. 0,8% spiegelt dies
            wider.
          </h6>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Lage;
