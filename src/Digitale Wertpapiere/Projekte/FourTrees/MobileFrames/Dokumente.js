import "./Dokumente.css";

import MDOKUMENTE_WRAPPER from "../../../MobileComponents/mDokumente_Wrapper";

function Dokumente(props) {
  return props.trigger ? (
    <div>
      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Doks/FINEXITY_Basisinformationsblatt+(8).pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Basisinformationsblatt "
          Beschreibung="Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. Es handelt sich nicht
            um Werbematerial."
        />
      </a>

      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Doks/FINEXITY_Expose_FourTrees.pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Kurzexpose "
          Beschreibung="Dieses Informationsblatt fasst die wesentlichen Informationen der Immobilie sowie des Investitionsprojekts zusammen."
        />
      </a>

      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Doks/FINEXITY_Risiken+(3).pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Risiken "
          Beschreibung="Mit dem Wertpapier und der Emittentin und einem etwaigen Garantiegeber verbundene Risiken."
        />
      </a>
      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Doks/FINEXITY_Schuldverschreibungsbedingungen+(8).pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Schuldverschreibungsbedingungen "
          Beschreibung="Schuldverschreibungsbedingungen
            für
            tokenisierte Schuldverschreibungen
            mit qualifiziertem Rangrücktritt
            
            ."
        />
      </a>
      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Doks/FINEXITY_Verbraucherinformationen+(5).pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Verbraucherinformationen 
            "
          Beschreibung="Verbraucherinformationen für den Fernabsatz der tokenisierten Schuldverschreibungen."
        />
      </a>

      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Doks/Marktwerteinscha%CC%88tzung+KW48.pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Marktwerteinschätzung 
            "
        />
      </a>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
