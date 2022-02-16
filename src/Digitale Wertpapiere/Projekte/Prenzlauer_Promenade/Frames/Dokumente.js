import "./Dokumente.css";
import DOKUMENTE_WRAPPER_BOX from "../../../Components/Dokumente_Wrapper_Box ";

function Dokumente(props) {
  return props.trigger ? (
    <div>
      <div id="Dokumente_GP_Wrapper">
        <div id="PrenzlauerPro_Dokuemnte_Row">
          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Dokumente/Prenzlauer_BIB.pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Basisinformationsblatt "
              text="Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. Es handelt sich nicht
            um Werbematerial."
            />
          </a>

          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Dokumente/Prenzlauer_Verbraucherinfos.pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Verbraucher-informationen 
               "
              text="Verbraucherinformationen für den Fernabsatz der tokenisierten Schuldverschreibungen."
            />
          </a>

          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Dokumente/Prenzlauer_Risiken.pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX
              title="Risiken "
              text="Mit dem Wertpapier und der Emittentin und einem etwaigen Garantiegeber verbundene Risiken."
            />
          </a>
        </div>
        <div id="Dokumente_GP_Wrapper_R2">
          <a
            href="https://chainvest.s3.eu-central-1.amazonaws.com/Prenzlauer+Promenade/Dokumente/Marktwerteinsch%C3%A4tzung+KW48.pdf"
            target="_blank"
          >
            <DOKUMENTE_WRAPPER_BOX title="Markteinschätzung " text="" />
          </a>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Dokumente;
