import "./mChainvestCapital.css";
import MFragenBox from "./mFragenBox";
function ChainvestCapital(props) {
  return props.trigger ? (
    <div>
      <div id="mFragen_Wrapper">
        <MFragenBox
          Frage="Bin ich nach dem Erwerb von digitalen Vermögenswerten an eine Mindesthaltedauer
          gebunden?"
          Antwort="Die Mindesthaltedauer von digitalen Vermögenswerten kann je nach Anbieter und dem zu finanzierenden Projekt variieren. Unser Partner FINEXITY bietet in der Regel z.B. die Möglichkeit, Ihre digitalen Anteile jederzeit auf dem FINEXITY Marktplatz zum Verkauf anzubieten."
        />{" "}
        <MFragenBox
          Frage="Brauche ich für das Verwahren der digitalen Vermögenswerte ein eigenes Wallet ? 
          "
          Antwort="In der Regel bietet der Emittent die Möglichkeit der Verwahrung der digitalen Wertpapiere auf einer eigenen Plattform an. Demnach würde hier kein eigenes Wallet zur Verwahrung digitaler Vermögenswerte benötigt
         werden."
        />
        <MFragenBox
          Frage="Gibt es einen Mindestbetrag, welchen ich investieren muss ?"
          Antwort="Die Forderung eines zu investierenden Mindestbetrags kann abhängig vom Emittenten der digitalen Wertpapiere bzw. der jeweiligen Handelsplattform variieren. FINEXITY bietet z.B. die Möglichkeit ab einem Betrag von 500 € in digitale Vermögenswerte zu investieren."
        />
        <MFragenBox
          Frage="Welche Kosten entstehen bei der Investition in digitale Wertpapiere?"
          Antwort="In der Regel werden von den Emittenten keine zusätzlichen Gebühren für den Erwerb verlangt."
        />{" "}
      </div>
    </div>
  ) : (
    ""
  );
}

export default ChainvestCapital;
