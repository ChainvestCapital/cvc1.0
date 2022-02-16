import "./Dokumente.css";

import MDOKUMENTE_WRAPPER from "../../../MobileComponents/mDokumente_Wrapper";

function Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Ueber_Mob_Doku_Wrapper">
        <a
          href="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Dokumente/Prenzlauer_BIB.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Basisinformationsblatt "
            Beschreibung="Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. Es handelt sich nicht
            um Werbematerial."
          />
        </a>
        <a
          href="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Dokumente/Prenzlauer_Verbraucherinfos.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Verbraucherinformationen 
               "
            Beschreibung="Verbraucherinformationen für den Fernabsatz der tokenisierten Schuldverschreibungen."
          />
        </a>
        <a
          href="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Dokumente/Prenzlauer_Risiken.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Risiken "
            Beschreibung="Mit dem Wertpapier und der Emittentin und einem etwaigen Garantiegeber verbundene Risiken."
          />
        </a>
        <a
          href="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Dokumente/Marktwerteinsch%C3%A4tzung+KW48.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER title="Markteinschätzung " text="" />
        </a>{" "}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
