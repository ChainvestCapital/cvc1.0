import "./Dokumente.css";

import MDOKUMENTE_WRAPPER from "../../../MobileComponents/mDokumente_Wrapper";

function Dokumente(props) {
  return props.trigger ? (
    <div>
      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Boernerstrasse2/Doks/FINEXITY_Basisinformationsblatt+(7).pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Basisinformationsblatt "
          Beschreibung="Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. Es handelt sich nicht
            um Werbematerial."
        />
      </a>

      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Boernerstrasse2/Doks/FINEXITY_Boernestrasse2_Kurzexpose+(2).pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Kurzexpose "
          Beschreibung="Dieses Informationsblatt fasst die wesentlichen Informationen der Immobilie sowie des Investitionsprojekts zusammen."
        />
      </a>

      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Boernerstrasse2/Doks/FINEXITY_Risiken+(2).pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Risiken "
          Beschreibung="Mit dem Wertpapier und der Emittentin und einem etwaigen Garantiegeber verbundene Risiken."
        />
      </a>

      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Boernerstrasse2/Doks/FINEXITY_Schuldverschreibungsbedingungen+(7).pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Schuldverschreibungs-bedingungen "
          Beschreibung="Schuldverschreibungsbedingungen
            für
            tokenisierte Schuldverschreibungen
            mit qualifiziertem Rangrücktritt
            
            ."
        />
      </a>
      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Boernerstrasse2/Doks/FINEXITY_Verbraucherinformationen+(4).pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Verbraucher-informationen 
            "
          Beschreibung="Verbraucherinformationen für den Fernabsatz der tokenisierten Schuldverschreibungen."
        />
      </a>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
