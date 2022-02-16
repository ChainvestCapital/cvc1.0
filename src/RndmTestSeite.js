import { useState, useEffect } from "react";

function Ueberseeallee() {
  console.log("SFsD");

  function Textx() {
    console.log("Test Funktion");
  }
  useEffect(() => {
    Textx();
  }, []);
  return (
    <div>
      <div id="Desktop_Wrapper">Test Sedite dsfsdf</div>
    </div>
  );
}

export default Ueberseeallee;
