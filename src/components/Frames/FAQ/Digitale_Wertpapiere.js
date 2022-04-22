import "./ChainvestCapital.css";
import FragenBox from "./FragenBox";

function ChainvestCapital(props) {
  return props.trigger ? (
    <div>
      <div id="Fragen_Wrapper">
        <FragenBox
          Frage="Bin ich nach dem Erwerb von digitalen Vermögenswerten an eine Mindesthaltedauer
          gebunden?"
          Antwort="Die Mindesthaltedauer von digitalen Vermögenswerten kann je nach Anbieter und dem zu
finanzierenden Projekt variieren.
Unser Partner FINEXITY bietet in der Regel z.B. die Möglichkeit, Ihre digitalen Anteile jederzeit auf dem
FINEXITY Marktplatz zum Verkauf anzubieten."
        />{" "}
        <FragenBox
          Frage="Brauche ich für das Verwahren der digitalen Vermögenswerte ein eigenes Wallet ? 
          "
          Antwort="In der Regel bietet der Emittent die Möglichkeit der Verwahrung der Security Token auf
         seiner eigenen Plattform an.
         Demnach würde hier kein eigenes Wallet zur Verwahrung digitaler Vermögenswerte benötigt
         werden."
        />
        <FragenBox
          Frage="Gibt es einen Mindestbetrag, welchen ich investieren muss ?"
          Antwort="Die Forderung eines zu investierenden Mindestbetrags kann abhängig vom Emittenten der
         Security Token bzw. der jeweiligen Handelsplattform variieren.
         FINEXITY bietet z.B. die Möglichkeit ab einem Betrag von 500 € in digitale
         Vermögenswerte zu investieren."
        />
        <FragenBox
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
