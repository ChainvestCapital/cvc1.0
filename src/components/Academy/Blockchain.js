import "./DigitaleAssets.css";
import AcademyContent from "./AcademyContent";
import ContentImg2 from "../../assets/images/ContentImg2.png";
import { HashLink } from "react-router-hash-link";

import ContentImg1 from "../../assets/images/ContentImg1.png";
function DigitaleAssets(props) {
  return props.trigger ? (
    <div>
      <div id="DigitaleAssets_Wrapper">
        <HashLink to="../Academy/DEX">
          <AcademyContent
            Heading="Decentralised Exchanges"
            Länge="553 Wörter"
            Tag1="DeFi"
            Tag2="Finance"
            bgimg={ContentImg2}
            Tag3="Tokenisierung"
            Beschreibung="Das Konzept der Dezentralisierung macht auch vor Börsenplätzen (eng. Exchanges) nicht Halt. Durch das große Wachstum des DeFi-Bereichs konnten dezentrale Börsen schnell wachsen und wickeln mittlerweile Transaktionsvolumen in ähnlichen Größenordnungen wie zentrale Börsenplätze im Krypto-Ökosystem ab."
          />
        </HashLink>
      </div>{" "}
    </div>
  ) : (
    ""
  );
}

export default DigitaleAssets;
