import "./Dokumente.css";

import MDOKUMENTE_WRAPPER from "../../../MobileComponents/mDokumente_Wrapper";

function Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Ueber_Mob_Doku_Wrapper">
        <a
          href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_BIP.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Basisinformationsblatt "
            Beschreibung="Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. Es handelt sich nicht
            um Werbematerial."
          />
        </a>

        <a
          href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_Kurzexpose.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Kurzexpose "
            Beschreibung="Dieses Informationsblatt fasst die wesentlichen Informationen der Immobilie sowie des Investitionsprojekts zusammen."
          />
        </a>

        <a
          href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_Risisken.pdf"
          target="_blank"
        >
          <MDOKUMENTE_WRAPPER
            title="Risiken "
            Beschreibung="Mit dem Wertpapier und der Emittentin und einem etwaigen Garantiegeber verbundene Risiken."
          />
        </a>
      </div>

      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_Schuldverschreibung.pdf"
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
        href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_Verbraucherinformationen.pdf"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Verbraucherinformationen 
            "
          Beschreibung="Verbraucherinformationen für den Fernabsatz der tokenisierten Schuldverschreibungen."
        />
      </a>

      <a
        href="https://chainvest.s3.eu-central-1.amazonaws.com/%C3%9Cberseeallee/Dokumente/%C3%9Cberseealle_Markteinsch%C3%A4tzung.pdf
"
        target="_blank"
      >
        <MDOKUMENTE_WRAPPER
          title="Marktwerteinschätzung
            "
          Beschreibung=""
        />
      </a>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
