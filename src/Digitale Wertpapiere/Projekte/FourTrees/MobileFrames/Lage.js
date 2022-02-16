import "./Lage.css";
import FINEXITY_FH_Mikrolage from "../../../../assets/images/FINEXITY_FH_Mikrolage.jpg";
import FINEXITY_FH_Makrolage from "../../../../assets/images/FINEXITY_FH_Makrolage.jpg";

function Lage(props) {
  return props.trigger ? (
    <div>
      <div id="Mobile_White_W100_HX">
        <h3 id="GP_Mob_Lage_W100_h3">Mikrolage</h3>
        <h4 id="GP_Mob_Lage_W100_h4">
          {" "}
          Prenzlauer Berg – vom Szene- zum Familienbezirk
        </h4>
        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Four_Trees_Mikro.jpg"
          id="Mobile_White_W100_HX_Img"
          alt=""
        />
        <h4 id="GP_Mob_Lage_W100_h4"> Ein Eldorado für Freizeitaktivitäten</h4>
        <h5 id="GP_Mob_Lage_W100_h6">
          Ob zum Joggen oder um mit dem Hund raus zu gehen, der Volkspark
          Prenzlauer Berg und der weitläufige Volkspark Friedrichshain sind
          gleichermaßen nur 200 Meter entfernt. Eine Schwimm- und eine
          Eissporthalle sowie ein Tennisplatz befinden sich fast vor der
          Haustür. Weiterhin laden mehrere Sportvereine in der Nachbarschaft zum
          Mitmachen ein. Und wer Action lieber auf der Leinwand hat, geht ins
          Kino am Friedrichshain oder in die UCI Kinowelt in der Landsberger
          Allee. Alternativ lässt sich das Kulturangebot der ganzen Stadt
          nutzen. Am besten natürlich, indem man per Fahrrad oder mit den
          Öffentlichen unterwegs ist.
        </h5>{" "}
        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/ColoneOne/Colone_One_Mikro_2.png"
          id="Mobile_White_W100_HX_Img"
          alt=""
        />
      </div>

      <div id="Mobile_White_W100_HX">
        <h3 id="GP_Mob_Lage_W100_h3">Makrolage</h3>
        <h4 id="GP_Mob_Lage_W100_h4">Berlin – Hauptstadt und Weltmetropole</h4>

        <img
          src="https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Four_Trees_Makro.jpg"
          id="Mobile_White_W100_HX_Img"
          alt=""
        />
        <h5 id="GP_Mob_Lage_W100_h6">
          Berlin ist Deutschlands Hauptstadt und Zentrum der Politik. Mit rund
          3,8 Millionen Einwohnern und einer Fläche von etwa 892 km² ist sie
          sowohl die bevölkerungsreichste Stadt der Bundesrepublik als auch die
          Gemeinde mit der größten Fläche. Ebenso ist Berlin die zweit
          bevölkerungsreichste Stadt der Europäischen Union und der Fläche nach
          die fünftgrößte Stadt. Die Flüsse Havel und Spree fließen durch
          Berlin, welches in 12 Bezirke bzw. 95 Ortsteile unterteilt ist. Berlin
          hat das Flair einer Weltmetropole, ist innovativ und kreativ. Das
          zeigt auch der Titel „Stadt des Designs“, mit dem die UNESCO Berlin
          ausgezeichnet hat. Verständlich also, dass die Stadt nicht nur immer
          mehr Touristen, sondern auch Arbeiter, Studenten und Wohnungssuchende
          anzieht. Laut offiziellen Schätzungen wird die Einwohnerzahl Berlins
          bis 2030 auf knapp 4 Millionen ansteigen. Rund 80% aller Berliner
          Unternehmen sind im Dienstleistungssektor tätig. Der Tourismussektor
          verzeichnet zuletzt 33 Millionen Übernachtungen von 13,5 Millionen
          Besuchern; dies allein beschert Berlin eine Bruttowertschöpfung von
          11,58 Mrd. Euro.
        </h5>
        <h4 id="GP_Mob_Lage_W100_h4"> Fortschreitende Entwicklung</h4>

        <h5 id="GP_Mob_Lage_W100_h6">
          Eine Besonderheit Berlins gegenüber anderen Städten ist die Synergie
          zwischen Wirtschaft und Wissenschaft. Mit ca. 30 Wissenschafts- und
          Forschungsinstituten gilt Berlin als einer der wichtigsten
          Wissenschaftsstandorte Europas. Wissenschaft und Wirtschaft
          profitieren im hochinnovativen Berliner Umfeld von einzigartigen
          synergetischen Effekten. Auch im Jahr 2019 ist Berlin im Savills IM
          Dynamic Cities Index unter den Top 5 der dynamischsten Städte Europas.
          Berlin liegt dabei nur knapp hinter anderen Weltmetropolen wie London
          und Paris. Als eine der dynamischsten Städte Europas zeichnet sich
          Berlin durch unternehmerischen Einfallsreichtum, geschäftliche
          Innovation und jungen Gründer-Spirit aus. Das Investitionspotenzial im
          Immobilienbereich ist in der Hauptstadt entsprechend hoch.
        </h5>
        <h4 id="GP_Mob_Lage_W100_h4">
          {" "}
          Berlin verbindet Kultur, Wirtschaft und Politik
        </h4>

        <h5 id="GP_Mob_Lage_W100_h6">
          Berlin steht für Spannung pur. Eine Kombination aus neu,
          international, überraschend und einzigartig. Inspiration und Impulse
          auf Maximum: Wo sonst in Deutschland gibt es von allem am meisten, ist
          es am buntesten und am intensivsten? Ob Kultur, Entertainment,
          Shopping, Sport oder Gastronomie – für jede Generation und jeden
          Geschmack ist hier inspirierende Abwechslung angesagt. Zudem lockt
          Berlins Start-up-Szene junge, kreative Unternehmer in die Stadt, die
          dort ihr Business auf- und ausbauen wollen. Gemeinsam mit dem
          vielfältigen Bildungs-, Kunst- und Kulturangebot ist Berlin eine der
          attraktivsten Städte für junge Talente. Die Nachfrage nach Wohnraum
          ist dadurch extrem hoch. Schätzungsweise werden in Berlin jährlich bis
          zu 20.000 Wohnungen neu gebaut, um die hohe Nachfrage zu befriedigen.
          Auch die Leerstandsquote von ca. 0,8% spiegelt dies wider.{" "}
        </h5>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Lage;
