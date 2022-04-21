import { useEffect, useState } from "react";
import "./Mobile_Verg_Financials.css";
import { Bar } from "react-chartjs-2";

function mVergleichen_Financials(props) {
  const RenditeP1 = () => {
    return (
      <div id="Mobile_Chart_Wrapper_Fin">
        <Bar
          data={{
            labels: ["%", "%", "%"],
            datasets: [
              {
                data: [props.gesRendite1, props.DurchRendite1, props.WertEnt1],

                backgroundColor: [
                  "rgba(205, 240, 234, 1)",
                  "rgba(255, 176, 0, 1)",
                  "rgba(205, 240, 234, 0.44)",
                ],
                barThickness: 20,
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

  const RenditeP2 = () => {
    return (
      <div id="Mobile_Chart_Wrapper_Fin">
        <Bar
          data={{
            labels: ["%", "%", "%"],
            datasets: [
              {
                data: [props.gesRendite2, props.DurchRendite2, props.WertEnt2],

                backgroundColor: [
                  "rgba(205, 240, 234, 1)",
                  "rgba(255, 176, 0, 1)",
                  "rgba(205, 240, 234, 0.44)",
                ],
                barThickness: 20,
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
  const mFinanzierungsvolumenChart = () => {
    return (
      <div id="Mobile_Fin_FV_Wrapper">
        <Bar
          data={{
            labels: [props.FVChart1, props.FVChart2],

            datasets: [
              {
                data: [props.FVChart1, props.FVChart2],

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
      <div id="Mobile_Vergleichen_Financial_Wrapper">
        <div id="Vergleichen_White_Mobile_Wrapper">
          <h2 id="Vergleichen_White_Mobile_Wrapper_title">Rendite</h2>
          <div id="Mobile_Vergleichen_Fin_Rendite_Legende">
            <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Item">
              <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube1"></div>
              Gesamtrendite
            </div>
            <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Item">
              <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube2"></div>
              ø-Rendite
            </div>
            <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Item">
              <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube3"></div>
              Wertentwicklung
            </div>
          </div>

          <div id="Mobile_Vergleichen_Fin_Rendite_Chart_Row">
            <div id="Mobile_Vergleichen_Fin_Rendite_Chart_Wrapper_1">
              {RenditeP1()}
            </div>

            <div id="Mobile_Vergleichen_Fin_Rendite_Chart_Wrapper_2">
              {RenditeP2()}
            </div>
          </div>

          <div id="Mobile_Vergleichen_Fin_Rendite_Namen_Row">
            <div id="Mobile_Vergleichen_Fin_Rendite_Namen_Row_Item_1">
              {props.Projekt1}
            </div>
            <div id="Mobile_Vergleichen_Fin_Rendite_Namen_Row_Item_2">
              {props.Projekt2}
            </div>
          </div>
          <div id="Mobile_Vergleichen_Fin_Vlaues_Wrapper">
            <div id="Mobile_Vergleichen_Fin_Rendite_Value_Row">
              <div id="Mobile_Vergleichen_Fin_Rendite_Value_Row_Item_1">
                {props.gesRendite1} %
              </div>
              <div id="Mobile_Vergleichen_Fin_Rendite_Value_Row_Item_2">
                {props.gesRendite2} %
              </div>
            </div>
            <div id="Mobile_Vergleichen_Fin_Values_Legende_Row">
              Gesamtrendite p.a.
            </div>

            <div id="Mobile_Vergleichen_Fin_Rendite_Value_Row">
              <div id="Mobile_Vergleichen_Fin_Rendite_Value_Row_Item_1">
                {props.DurchRendite1} %
              </div>
              <div id="Mobile_Vergleichen_Fin_Rendite_Value_Row_Item_2">
                {props.DurchRendite2} %
              </div>
            </div>
            <div id="Mobile_Vergleichen_Fin_Values_Legende_Row">
              Durchschnittsrendite p.a.
            </div>

            <div id="Mobile_Vergleichen_Fin_Rendite_Value_Row">
              <div id="Mobile_Vergleichen_Fin_Rendite_Value_Row_Item_1">
                {props.WertEnt1} %
              </div>
              <div id="Mobile_Vergleichen_Fin_Rendite_Value_Row_Item_2">
                {props.WertEnt2} %
              </div>
            </div>
            <div id="Mobile_Vergleichen_Fin_Values_Legende_Row">
              Wertentwicklung p.a.
            </div>
          </div>
        </div>

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
                {props.Finanzierungsvolumen1}
                <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item_Unten">
                  <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube1"></div>
                  {props.Projekt1}
                </div>
              </div>

              <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item">
                {props.Finanzierungsvolumen2}
                <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item_Unten">
                  <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube2"></div>
                  {props.Projekt2}
                </div>
              </div>
            </div>
          </div>
          <div id="CBCACE80vw_Row"></div>

          <div id="Vergleichen_Mobile_Finanzierungsvolumen_Bottom">
            <h3 id="Vergleichen_Mobile_Finanzierungsvolumen_Bottom_h3">
              Davon bereits finanziert:
            </h3>
            <div id="Vergleichen_Mobile_Finanzierungsvolumen_Bottom_Projekt">
              <div id="Vergleichen_Mobile_Finanzierungsvolumen_Bottom_Projekt_Row">
                <div id="Vergleichen_Mobile_Finanzierungsvolumen_Bottom_Projekt_Bar1"></div>
                {props.davonFinanziert1}
              </div>
              {props.Projekt1}
            </div>

            <div id="Vergleichen_Mobile_Finanzierungsvolumen_Bottom_Projekt">
              <div id="Vergleichen_Mobile_Finanzierungsvolumen_Bottom_Projekt_Row">
                <div id="Vergleichen_Mobile_Finanzierungsvolumen_Bottom_Projekt_Bar2"></div>
                {props.davonFinanziert2}
              </div>
              {props.Projekt2}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default mVergleichen_Financials;
