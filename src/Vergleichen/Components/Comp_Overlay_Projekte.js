import "./Comp_Overlay_Projekte.css";
import Standort_yellow from "../../assets/images/Standort_yellow.png";
import Standort_blue from "../../assets/images/Standort_blue.png";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Info_hover from "../../assets/images/Info_Hover.png";

function Comp_Overlay_Projekte(props) {
  const AnzahlderTokenChart = () => {
    return (
      <div id="AnzahlderTokenChart">
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

  const MindestinvestitionChart = () => {
    return (
      <div id="AnzahlderTokenChart">
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
      <div id="Comp_Overlay_Projekte_Wrapper">
        <div id="Comp_Overlay_Left">
          <div id="Comp_Overlay_Left_Standort">
            <div id="Comp_Overlay_Beschreibung_Top">
              <h3 id="Comp_Overlay_Financial_h3">Standort</h3>
              <div id="Comp_Overlay_Financial_Info">
                <div id="Hover_Text_Projektbeschreibung"></div>
              </div>
            </div>
            <div id="Comp_Overlay_Left_Standort_Buttom">
              <div id="Comp_Overlay_Left_Standort_Buttom_Projekt1">
                <div id="Comp_Overlay_Left_Standort_Buttom_Projekt_Top">
                  <img src={Standort_blue} id="Standort_Img" />

                  <h4 id="Comp_Overlay_Left_Standort_Buttom_item_h4">
                    {props.Adress1}
                  </h4>
                </div>

                <div id="Comp_Overlay_Left_Standort_Buttom_Projekt_Bottom">
                  {props.Projekt1}
                </div>
              </div>

              <div id="Comp_Overlay_Left_Standort_Buttom_Projekt1">
                <div id="Comp_Overlay_Left_Standort_Buttom_Projekt_Top">
                  <img src={Standort_yellow} id="Standort_Img" />

                  <h4 id="Comp_Overlay_Left_Standort_Buttom_item_h4">
                    {props.Adress2}
                  </h4>
                </div>

                <div id="Comp_Overlay_Left_Standort_Buttom_Projekt_Bottom">
                  {props.Projekt2}
                </div>
              </div>
            </div>
          </div>

          <div id="Comp_Overlay_Beschreibung">
            <div id="Comp_Overlay_Beschreibung_Top">
              <h3 id="Comp_Overlay_Financial_h3">Projektbeschreibung</h3>
              <div id="Comp_Overlay_Financial_Info">
                <img src={Info_hover} id="Info_hover_Img" />
                <div id="Hover_Text_Projektbeschreibung"></div>
              </div>
            </div>

            <div id="Comp_Overlay_Beschreibung_Bottom">
              <div id="Comp_Overlay_Beschreibung_Projekt">
                <h4 id="Comp_Overlay_Beschreibung_h4">{props.Projekt1}</h4>
                <h3 id="Comp_Overlay_Beschreibung_h3">
                  {props.KurzBeschreibungP1}
                </h3>
              </div>
              <div id="Margin_bottom_2vh"></div>

              <div id="Comp_Overlay_Beschreibung_Projekt">
                <h4 id="Comp_Overlay_Beschreibung_h4">{props.Projekt2}</h4>
                <h3 id="Comp_Overlay_Beschreibung_h3">
                  {props.KurzBeschreibungP2}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div id="Comp_Overlay_Mid">
          <div id="Comp_Overlay_Mid_Small_White">
            <div id="Comp_Overlay_Financial_Top">
              <h3 id="Comp_Overlay_Financial_h3">Laufzeitbeginn</h3>
            </div>

            <div id="Laufzeit_Bottom">
              <div id="Laufzeit_Bottom_Row">
                <h4 id="Laufzeit_Bottom_h4">{props.Projekt1}</h4>
                <h5 id="Laufzeit_Bottom_h5">{props.LFZB1}</h5>
              </div>

              <div id="Laufzeit_Bottom_Row">
                <h4 id="Laufzeit_Bottom_h4">{props.Projekt2}</h4>
                <h5 id="Laufzeit_Bottom_h5">{props.LFZB2}</h5>
              </div>
            </div>
          </div>
          <div id="Margin_bottom_2vh"></div>

          <div id="Comp_Overlay_Mid_Big_White">
            <div id="Comp_Overlay_17vw_Top">
              <h3 id="Comp_Overlay_Financial_h3">Anzahl der Token</h3>
              <div id="Comp_Overlay_Financial_Info">
                <img src={Info_hover} id="Info_hover_Img" />
                <div id="Hover_Text_Projektbeschreibung"></div>
              </div>
            </div>

            <div id="Comp_Overlay_Mid_Big_White_Bottom">
              <div id="C_OL_Token">
                <div id="C_OL_Token_Chart">{AnzahlderTokenChart()} </div>
                <div id="C_OL_Token_Legende">
                  <div id="C_OL_Token_Legende_Projekt">
                    <h3 id="C_OL_Token_Legende_Projekt_h3">
                      {props.TokenAnzahlP1Chart1}
                    </h3>
                    <div id="C_OL_Token_Legende_Projekt_B">
                      <div id="C_OL_Token_Legende_Projekt_B_L1"></div>
                      <h5 id="C_OL_Token_Legende_Projekt_B_h5">
                        {props.Projekt1}
                      </h5>
                    </div>
                  </div>{" "}
                  <div id="C_OL_Token_Legende_Projekt">
                    <h3 id="C_OL_Token_Legende_Projekt_h3">
                      {props.TokenAnzahlP2Chart2}
                    </h3>
                    <div id="C_OL_Token_Legende_Projekt_B">
                      <div id="C_OL_Token_Legende_Projekt_B_L2"></div>
                      <h5 id="C_OL_Token_Legende_Projekt_B_h5">
                        {props.Projekt2}
                      </h5>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="Comp_Overlay_Right">
          <div id="Comp_Overlay_Mid_Big_White">
            <div id="Comp_Overlay_17vw_Top">
              <h3 id="Comp_Overlay_Financial_h3">Mindestinvestition</h3>
              <div id="Comp_Overlay_Financial_Info">
                <img src={Info_hover} id="Info_hover_Img" />
                <div id="Hover_Text_Projektbeschreibung"></div>
              </div>
            </div>

            <div id="Comp_Overlay_Mid_Big_White_Bottom">
              <div id="C_OL_Token">
                <div id="C_OL_Token_Chart">{MindestinvestitionChart()} </div>
                <div id="C_OL_Token_Legende">
                  <div id="C_OL_Token_Legende_Projekt">
                    <h3 id="C_OL_Token_Legende_Projekt_h3">{props.MI1}€</h3>
                    <div id="C_OL_Token_Legende_Projekt_B">
                      <div id="C_OL_Token_Legende_Projekt_B_L1"></div>
                      <h5 id="C_OL_Token_Legende_Projekt_B_h5">
                        {props.Projekt1}
                      </h5>
                    </div>
                  </div>{" "}
                  <div id="C_OL_Token_Legende_Projekt">
                    <h3 id="C_OL_Token_Legende_Projekt_h3">{props.MI2}€</h3>
                    <div id="C_OL_Token_Legende_Projekt_B">
                      <div id="C_OL_Token_Legende_Projekt_B_L2"></div>
                      <h5 id="C_OL_Token_Legende_Projekt_B_h5">
                        {props.Projekt2}
                      </h5>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>

          <div id="Margin_bottom_2vh"></div>
          <div id="Comp_Overlay_Mid_Small_White">
            <div id="Comp_Overlay_Financial_Top">
              <h3 id="Comp_Overlay_Financial_h3">Laufzeitende</h3>{" "}
            </div>

            <div id="Laufzeit_Bottom">
              <div id="Laufzeit_Bottom_Row">
                <h4 id="Laufzeit_Bottom_h4">{props.Projekt1}</h4>
                <h5 id="Laufzeit_Bottom_h5">{props.LFZE1}</h5>
              </div>

              <div id="Laufzeit_Bottom_Row">
                <h4 id="Laufzeit_Bottom_h4">{props.Projekt2}</h4>
                <h5 id="Laufzeit_Bottom_h5">{props.LFZE2}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Comp_Overlay_Projekte;
