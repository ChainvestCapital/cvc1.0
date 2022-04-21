import "./Comp_Overlay_Financial.css";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Info_hover from "../../assets/images/Info_Hover.png";

function Comp_Overlay_Financial(props) {
  const BarChart1 = () => {
    return (
      <div id="ChartwRAPPER">
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

  const BarChart2 = () => {
    return (
      <div id="ChartwRAPPER">
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
  const FinanzierungsvolumenChart = () => {
    return (
      <div id="Finanzierungsvolumen_Mid_Mid_CHART">
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
      <div id="Comp_Overlay_Financial_Wrapper">
        <div id="Comp_Overlay_Financial_Left_Box">
          <div id="Comp_Overlay_Financial_Top">
            <h3 id="Comp_Overlay_Financial_h3">Rendite</h3>

            <div id="Comp_Overlay_Financial_Info">
              {" "}
              <img src={Info_hover} id="Info_hover_Img" />
              <div id="Hover_Text_Projektbeschreibung"></div>
            </div>
          </div>

          <div id="Comp_Overlay_Financial_Rendite_Mid">
            <div id="Comp_Overlay_Financial_Rendite_Mid_Legende">
              <div id="Comp_Overlay_Financial_Rendite_Mid_Legende_Row">
                <div id="Comp_Overlay_Financial_Rendite_Mid_Legende_1"></div>
                <h5 id="Comp_Overlay_Financial_Rendite_Mid_Legende_h5">
                  Gesamtrendite
                </h5>
              </div>

              <div id="Comp_Overlay_Financial_Rendite_Mid_Legende_Row">
                <div id="Comp_Overlay_Financial_Rendite_Mid_Legende_2"></div>
                <h5 id="Comp_Overlay_Financial_Rendite_Mid_Legende_h5">
                  Durchschnittsrendite
                </h5>
              </div>

              <div id="Comp_Overlay_Financial_Rendite_Mid_Legende_Row">
                <div id="Comp_Overlay_Financial_Rendite_Mid_Legende_3"></div>
                <h5 id="Comp_Overlay_Financial_Rendite_Mid_Legende_h5">
                  Wertentwicklung
                </h5>
              </div>
            </div>
            <div id="Comp_Overlay_Financial_Rendite_Mid_Proj_Wrapper">
              <div id="Comp_Overlay_Financial_Rendite_Mid_Projekt">
                <div id="Comp_Overlay_Financial_Rendite_Mid_Projekt_Chart_Wrapper">
                  {BarChart1()}
                </div>
                <h3 id="Comp_Overlay_Financial_Rendite_Mid_Projekt_h3">
                  {props.Projekt1}
                </h3>{" "}
              </div>

              <div id="Comp_Overlay_Financial_Rendite_Mid_Projekt">
                <div id="Comp_Overlay_Financial_Rendite_Mid_Projekt_Chart_Wrapper">
                  {" "}
                  {BarChart2()}
                </div>
                <h3 id="Comp_Overlay_Financial_Rendite_Mid_Projekt_h3">
                  {props.Projekt2}
                </h3>
              </div>
            </div>
          </div>

          <div id="Comp_Overlay_Financial_Rendite_Bottom">
            <div id="Comp_Overlay_Financial_Rendite_Bottom_Row">
              <h3 id="Comp_Overlay_Financial_Rendite_Bottom_h3">
                Gesamtrendite p.a.
              </h3>
              <h3 id="Comp_Overlay_Financial_Rendite_Bottom_h3_2">
                {props.gesRendite1}%
              </h3>

              <h3 id="Comp_Overlay_Financial_Rendite_Bottom_h3_3">
                {props.gesRendite2}%
              </h3>
            </div>
            <div id="Rendite_Divider"></div>

            <div id="Comp_Overlay_Financial_Rendite_Bottom_Row">
              <h3 id="Comp_Overlay_Financial_Rendite_Bottom_h3">
                Durchschnittsrendite p.a.{" "}
              </h3>
              <h3 id="Comp_Overlay_Financial_Rendite_Bottom_h3_2">
                {props.DurchRendite1}%
              </h3>

              <h3 id="Comp_Overlay_Financial_Rendite_Bottom_h3_3">
                {props.DurchRendite2}%
              </h3>
            </div>
            <div id="Rendite_Divider"></div>

            <div id="Comp_Overlay_Financial_Rendite_Bottom_Row">
              <h3 id="Comp_Overlay_Financial_Rendite_Bottom_h3">
                Wertentwicklung p.a.
              </h3>
              <h3 id="Comp_Overlay_Financial_Rendite_Bottom_h3_2">
                {props.WertEnt1}%
              </h3>

              <h3 id="Comp_Overlay_Financial_Rendite_Bottom_h3_3">
                {props.WertEnt2}%
              </h3>
            </div>
          </div>
        </div>

        <div id="Comp_Overlay_Financial_Right_Box">
          {" "}
          <div id="Comp_Overlay_Financial_Top">
            <h3 id="Comp_Overlay_Financial_h3">Finanzierungsvolumen</h3>
            <div id="Comp_Overlay_Financial_Info">
              {" "}
              <img src={Info_hover} id="Info_hover_Img" />
              <div id="Hover_Text_Projektbeschreibung"></div>
            </div>
          </div>
          <div id="VG_FV_Mid">
            <div id="VG_FV_Mid_Left">
              <h3 id="VG_FV_Mid_h3">{props.Finanzierungsvolumen1}</h3>
              <div id="VG_FV_Mid_Row">
                <div id="Comp_Overlay_Financial_Finanzierungsvolumen_Mid_Legende_1"></div>
                <h5 id="VG_FV_Mid_h5">{props.Projekt1}</h5>
              </div>
            </div>

            <div id="VG_FV_Mid_Mid"> {FinanzierungsvolumenChart()}</div>

            <div id="VG_FV_Mid_Right">
              <h3 id="VG_FV_Mid_h3">{props.Finanzierungsvolumen2}</h3>
              <div id="VG_FV_Mid_Row">
                <div id="Comp_Overlay_Financial_Finanzierungsvolumen_Mid_Legende_2"></div>
                <h5 id="VG_FV_Mid_h5">{props.Projekt2}</h5>
              </div>
            </div>
          </div>
          <div id="Finanzierungsvolumen_Bottom">
            <h3 id="VG_FV_Mid_h3">Davon bereits finanziert:</h3>
            <div id="Finanzierungsvolumen_Bottom_Row">
              <h3 id="Finanzierungsvolumen_Bottom_Row_h3">{props.Projekt1}</h3>
              <div id="VG_FV_Prozent_Filler"></div>
              <h3 id="VG_FV_Mid_h3">{props.davonFinanziert1}</h3>
            </div>

            <div id="Finanzierungsvolumen_Bottom_Row">
              <h3 id="Finanzierungsvolumen_Bottom_Row_h3">{props.Projekt2}</h3>
              <div id="VG_FV_Prozent_Filler2"></div>
              <h3 id="VG_FV_Mid_h3">{props.davonFinanziert2}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Comp_Overlay_Financial;
