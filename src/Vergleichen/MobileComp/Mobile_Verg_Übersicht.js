import { useEffect, useState } from "react";
import "./Mobile_Verg_Financials.css";
import { Bar } from "react-chartjs-2";

function mVergleichen_Übersicht(props) {
  const mFinanzierungsvolumenChart = () => {
    return (
      <div id="Mobile_Fin_FV_Wrapper">
        <Bar
          data={{
            labels: [props.FV1, props.FV2],

            datasets: [
              {
                data: [props.FV1, props.FV2],

                backgroundColor: [
                  "rgba(205, 240, 234, 1)",
                  "rgba(255, 176, 0, 1)",
                ],
                barThickness: 30,
                borderRadius: 12,
              },
            ],
          }}
          options={{
            categoryPercentage: 0.5,
            scales: {
              x: {
                display: false,
                grid: {
                  display: false,
                  drawBorder: false,
                },
              },
              y: {
                display: false,
                grid: {
                  display: false,
                  drawBorder: false,
                },
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    );
  };
  return props.trigger ? (
    <div>
      <div id="MObile_Vergleichen_Übersicht_Wrapper">
        <div id="Vergleichen_White_Mobile_Wrapper">
          <h2 id="Vergleichen_White_Mobile_Wrapper_title">
            Finanzierungsvolumen
          </h2>
          <div id="Vergleichen_Mobile_Finanzierungsvolumen_Top">
            <div id="Vergleichen_Mobile_Finanzierungsvolumen_Chart_Wrapper">
              {mFinanzierungsvolumenChart()}
            </div>
            <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende">
              <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item">
                {props.FV1} €
                <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item_Unten">
                  <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube1"></div>
                  {props.titleP1}
                </div>
              </div>

              <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item">
                {props.FV2} €
                <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item_Unten">
                  <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube2"></div>
                  {props.titleP2}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Vergleichen_White_Mobile_Wrapper">
          <h2 id="Vergleichen_White_Mobile_Wrapper_title">
            Projektbeschreibung
          </h2>
          <h3 id="Vergleichen_Mobile_Beschreibung_title_h3">{props.titleP1}</h3>

          <h3 id="Vergleichen_Mobile_Beschreibung_title_h5">
            {props.KurzBeschreibungP1}
          </h3>

          <h3 id="Vergleichen_Mobile_Beschreibung_title_h3">{props.titleP2}</h3>

          <h3 id="Vergleichen_Mobile_Beschreibung_title_h5">
            {props.KurzBeschreibungP2}
          </h3>
        </div>
        <div id="Vergleichen_White_Mobile_Wrapper">
          <h2 id="Vergleichen_White_Mobile_Wrapper_title">Dokumente</h2>
          <div id="Mobile_Vergleichen_Doks_Wrapper">
            <div id="Mobile_Vergleichen_Doks_Item">
              <div id="Mobile_Vergleichen_Dokumente_Heading_Row_Counter">
                {props.DoksCounter1}
              </div>
              {props.titleP1}
            </div>

            <div id="Mobile_Vergleichen_Doks_Item">
              <div id="Mobile_Vergleichen_Dokumente_Heading_Row_Counter">
                {props.DoksCounter2}
              </div>
              {props.titleP2}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default mVergleichen_Übersicht;
