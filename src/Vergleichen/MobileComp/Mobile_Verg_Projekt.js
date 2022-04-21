import { useEffect, useState } from "react";
import "./Mobile_Verg_Projekt.css";
import { Bar } from "react-chartjs-2";

import Standort_yellow from "../../assets/images/Standort_yellow.png";
import Standort_blue from "../../assets/images/Standort_blue.png";
function mVergleichen_Projekt(props) {
  const mAnzahlderTokenChart = () => {
    return (
      <div id="Mobile_AnzahlderTokenChart">
        <Bar
          data={{
            labels: [props.TokenAnzahlP1Chart1, props.TokenAnzahlP2Chart2],

            datasets: [
              {
                data: [props.TokenAnzahlP1Chart1, props.TokenAnzahlP2Chart2],

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

  const mMindestInv = () => {
    return (
      <div id="Mobile_AnzahlderTokenChart">
        <Bar
          data={{
            labels: [props.MindestInv1, props.MindestInv2],

            datasets: [
              {
                data: [props.MindestInv1, props.MindestInv2],

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
      <div id="Vergleichen_White_Mobile_Wrapper">
        <h2 id="Vergleichen_White_Mobile_Wrapper_title">Projektbeschreibung</h2>
        <h3 id="Vergleichen_Mobile_Beschreibung_title_h3">{props.Projekt1}</h3>

        <h3 id="Vergleichen_Mobile_Beschreibung_title_h5">
          {props.KurzBeschreibungP1}
        </h3>

        <h3 id="Vergleichen_Mobile_Beschreibung_title_h3">{props.Projekt2}</h3>

        <h3 id="Vergleichen_Mobile_Beschreibung_title_h5">
          {props.KurzBeschreibungP2}
        </h3>
      </div>
      <div id="Vergleichen_White_Mobile_Wrapper">
        <h2 id="Vergleichen_White_Mobile_Wrapper_title">Projektstandort</h2>

        <div id="Mobile_Vergleichen_Standort_Row">
          <div id="Mobile_Vergleichen_Standort_Row_Left">
            <img
              src={Standort_blue}
              id="Mobile_Vergleichen_Standort_Row_Left_img"
            />{" "}
            {props.Projekt1}
          </div>
          {props.Adress1}
        </div>

        <div id="Mobile_Vergleichen_Standort_Row">
          <div id="Mobile_Vergleichen_Standort_Row_Left">
            <img
              src={Standort_yellow}
              id="Mobile_Vergleichen_Standort_Row_Left_img"
            />{" "}
            {props.Projekt2}
          </div>
          {props.Adress2}
        </div>
      </div>
      <div id="Vergleichen_White_Mobile_Wrapper">
        <h2 id="Vergleichen_White_Mobile_Wrapper_title">Anzahl der Token</h2>{" "}
        <div id="Vergleichen_Mobile_Finanzierungsvolumen_Top">
          <div id="Vergleichen_Mobile_Finanzierungsvolumen_Chart_Wrapper">
            {mAnzahlderTokenChart()}
          </div>
          <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende">
            <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item">
              {props.TokenAnzahlP1}
              <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item_Unten">
                <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube1"></div>
                {props.Projekt1}
              </div>
            </div>

            <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item">
              {props.TokenAnzahlP2}
              <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item_Unten">
                <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube2"></div>
                {props.Projekt2}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Vergleichen_White_Mobile_Wrapper">
        <h2 id="Vergleichen_White_Mobile_Wrapper_title">Laufzeitbeginn</h2>{" "}
        <div id="Mobile_Vergleich_Laufzeit_Row">
          <h4 id="Mobile_Vergleich_Laufzeit_Row_h4">{props.Projekt1}</h4>
          <h5 id="Mobile_Vergleich_Laufzeit_Row_h5">{props.LFZB1}</h5>
        </div>
        <div id="Mobile_Vergleich_Laufzeit_Row">
          <h4 id="Mobile_Vergleich_Laufzeit_Row_h4">{props.Projekt2}</h4>
          <h5 id="Mobile_Vergleich_Laufzeit_Row_h5">{props.LFZB2}</h5>
        </div>
      </div>
      <div id="Vergleichen_White_Mobile_Wrapper">
        <h2 id="Vergleichen_White_Mobile_Wrapper_title">Mindesinvestition</h2>{" "}
        <div id="Vergleichen_Mobile_Finanzierungsvolumen_Top">
          <div id="Vergleichen_Mobile_Finanzierungsvolumen_Chart_Wrapper">
            {mMindestInv()}
          </div>
          <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende">
            <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item">
              {props.MindestInv1} €
              <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item_Unten">
                <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube1"></div>
                {props.Projekt1}
              </div>
            </div>

            <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item">
              {props.MindestInv2} €
              <div id="Vergleichen_Mobile_Finanzierungsvolumen_Legende_Item_Unten">
                <div id="Mobile_Vergleichen_Fin_Rendite_Legende_Cube2"></div>
                {props.Projekt2}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Vergleichen_White_Mobile_Wrapper">
        <h2 id="Vergleichen_White_Mobile_Wrapper_title">Laufzeitende</h2>{" "}
        <div id="Mobile_Vergleich_Laufzeit_Row">
          <h4 id="Mobile_Vergleich_Laufzeit_Row_h4">{props.Projekt1}</h4>
          <h5 id="Mobile_Vergleich_Laufzeit_Row_h5">{props.LFZE1}</h5>
        </div>
        <div id="Mobile_Vergleich_Laufzeit_Row">
          <h4 id="Mobile_Vergleich_Laufzeit_Row_h4">{props.Projekt2}</h4>
          <h5 id="Mobile_Vergleich_Laufzeit_Row_h5">{props.LFZE2}</h5>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default mVergleichen_Projekt;
