import "./Comp_Overlay_Übersicht.css";
import Info_hover from "../../assets/images/Info_Hover.png";
import yellow_Arrow from "../../assets/images/yellow_Arrow.png";
import { Bar } from "react-chartjs-2";
import { HashLink } from "react-router-hash-link";

function Comp_Overlay_Übersicht(props) {
  const Übersicht_MindestInvestition = () => {
    return (
      <div id="Übersicht_Mind_Chart_Wrapper">
        <Bar
          data={{
            labels: [props.titleP1, props.titleP2],
            datasets: [
              {
                data: [props.MI1, props.MI2],

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
            events: [],

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

  const Übersicht_Finanzierungsvolumen = () => {
    return (
      <div id="Übersicht_Mind_Chart_Wrapper">
        <Bar
          data={{
            labels: ["T€  " + props.titleP1, "T€  " + props.titleP2],
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
            events: [],
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
      <div id="VG_Übersicht_Wrapper">
        <div id="VG_Übersicht_Left">
          <div id="VG_Übersicht_Beschreibung">
            <div id="Comp_Overlay_Beschreibung_Top">
              <h3 id="Comp_Overlay_Financial_h3">Projektbeschreibung</h3>
            </div>

            <div id="Comp_Overlay_Beschreibung_Bottom">
              <div id="Comp_Overlay_Beschreibung_Projekt">
                <h4 id="Comp_Overlay_Beschreibung_h4">{props.titleP1}</h4>
                <h3 id="Comp_Overlay_Beschreibung_h3">
                  {props.KurzBeschreibungP1}
                </h3>
              </div>
              <div id="Margin_bottom_2vh"></div>

              <div id="Comp_Overlay_Beschreibung_Projekt">
                {" "}
                <h4 id="Comp_Overlay_Beschreibung_h4">{props.titleP2}</h4>
                <h3 id="Comp_Overlay_Beschreibung_h3">
                  {props.KurzBeschreibungP2}
                </h3>
              </div>
            </div>
          </div>

          <div id="VG_Übersicht_ZuP">
            <div id="Comp_Overlay_Beschreibung_Top">
              <h3 id="Comp_Overlay_Financial_h3">Zu den Projeken</h3>
            </div>
            <div id="VG_Übersicht_ZuP_Bottom">
              {" "}
              <div id="VG_Übersicht_ZuP_Bottom_Button">
                {props.titleP1}
                <img
                  src={yellow_Arrow}
                  id="VG_Übersicht_ZuP_Bottom_Button_Img"
                />
              </div>
              <div id="VG_Übersicht_ZuP_Bottom_Button">
                {props.titleP2}
                <img
                  src={yellow_Arrow}
                  id="VG_Übersicht_ZuP_Bottom_Button_Img"
                />
              </div>
            </div>{" "}
          </div>
        </div>

        <div id="VG_Übersicht_Mid">
          <div id="VG_Übersicht_Mid_Top">
            <div id="Comp_Overlay_Übersicht_Smal_Top">
              <h3 id="Comp_Overlay_Financial_h3">Mindestinvestition</h3>
            </div>
            <div id="VG_Übersicht_Midest_Bottom">
              <div id="VG_Übersicht_Midest_Bottom_Chart_Wrapper">
                {Übersicht_MindestInvestition()}
              </div>

              <div id="VG_Übersicht_Midest_Bottom_Legende">
                <h3 id="VG_Über_FV_Mid_h3">{props.MindestinvestitionP1}</h3>
                <div id="VG_Übersicht_Midest_Bottom_Legende_Row">
                  <div id="VG_Übersicht_Legende_1"></div>
                  {props.titleP1}{" "}
                </div>{" "}
                <div id="VG_Über_Mar2"></div>{" "}
                <h3 id="VG_Über_FV_Mid_h3">{props.MindestinvestitionP2}</h3>
                <div id="VG_Übersicht_Midest_Bottom_Legende_Row">
                  <div id="VG_Übersicht_Legende_2"></div>
                  {props.titleP2}
                </div>
              </div>
            </div>
          </div>

          <div id="VG_Übersicht_Mid_Bottom">
            <div id="Comp_Overlay_Übersicht_Smal_Top">
              <h3 id="Comp_Overlay_Financial_h3">Finanzierungsvolumen</h3>
            </div>
            <div id="VG_Übersicht_Midest_Bottom">
              <div id="VG_Übersicht_Midest_Bottom_Chart_Wrapper">
                {Übersicht_Finanzierungsvolumen()}
              </div>

              <div id="VG_Übersicht_Midest_Bottom_Legende">
                <h3 id="VG_Über_FV_Mid_h3">{props.FinanzierungsvolumenP1}</h3>
                <div id="VG_Übersicht_Midest_Bottom_Legende_Row">
                  <div id="VG_Übersicht_Legende_1"></div>
                  {props.titleP1}{" "}
                </div>{" "}
                <div id="VG_Über_Mar2"></div>
                <h3 id="VG_Über_FV_Mid_h3">{props.FinanzierungsvolumenP2}</h3>
                <div id="VG_Übersicht_Midest_Bottom_Legende_Row">
                  <div id="VG_Übersicht_Legende_2"></div>
                  {props.titleP2}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="VG_Übersicht_Right">
          <div id="VG_Übersicht_Mid_Top">
            <div id="Comp_Overlay_Übersicht_Smal_Top">
              <h3 id="Comp_Overlay_Financial_h3">Dokumente</h3>
              <div id="Comp_Overlay_Financial_Info"></div>
            </div>
            <div id="Übersicht_Dokuemnte_Bottom">
              <div id="Übersicht_Dokuemnte_Projekt">
                <h3 id="Übersicht_Dokuemnte_h3">{props.titleP1}</h3>
                <div id="Projekt_Doks_Counter">{props.DoksCounter1}</div>
              </div>

              <div id="Übersicht_Dokuemnte_Projekt">
                <h3 id="Übersicht_Dokuemnte_h3">{props.titleP2}</h3>
                <div id="Projekt_Doks_Counter">{props.DoksCounter2}</div>
              </div>
            </div>{" "}
          </div>

          <div id="VG_Übersicht_Mid_Bottom">
            <div id="Comp_Overlay_Übersicht_Smal_Top">
              <h3 id="Comp_Overlay_Financial_h3">Laufzeit</h3>
            </div>
            <div id="VG_Übersicht_Laufzeit_Bottom">
              <div id="VG_Übersicht_Laufzeit_Bottom_Row">
                <h3 id="VG_Übersicht_Laufzeit_Bottom_h3">{props.titleP1}</h3>
                <h3 id="VG_Übersicht_Laufzeit_Bottom_h2">{props.LFZB1}</h3>
              </div>

              <div id="VG_Übersicht_Laufzeit_Bottom_Row">
                <h3 id="VG_Übersicht_Laufzeit_Bottom_h3">{props.titleP2}</h3>
                <h3 id="VG_Übersicht_Laufzeit_Bottom_h2">{props.LFZB2}</h3>
              </div>

              <h2 id="VG_Übersicht_Laufzeit_Bottom__Bottom_h2">
                Laufzeitbeginn
              </h2>

              <div id="VG_Übersicht_Laufzeit_Bottom_Row">
                <h3 id="VG_Übersicht_Laufzeit_Bottom_h3">{props.titleP1}</h3>
                <h3 id="VG_Übersicht_Laufzeit_Bottom_h2">{props.LFZE1}</h3>
              </div>

              <div id="VG_Übersicht_Laufzeit_Bottom_Row">
                <h3 id="VG_Übersicht_Laufzeit_Bottom_h3">{props.titleP2}</h3>
                <h3 id="VG_Übersicht_Laufzeit_Bottom_h2">{props.LFZE2}</h3>
              </div>

              <h2 id="VG_Übersicht_Laufzeit_Bottom__Bottom_h2">Laufzeitende</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Comp_Overlay_Übersicht;
