import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { TrendingUp } from "@mui/icons-material";

import "./MetricCards.scss";

const MetricCards = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart1Instance = useRef(null);
  const chart2Instance = useRef(null);

  useEffect(() => {
    // Destroy existing charts if they exist
    if (chart1Instance.current) {
      chart1Instance.current.destroy();
    }
    if (chart2Instance.current) {
      chart2Instance.current.destroy();
    }

    // Create first chart (Total Spends)
    if (chart1Ref.current) {
      const ctx1 = chart1Ref.current.getContext("2d");
      chart1Instance.current = new Chart(ctx1, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [45000, 52000, 48000, 61000, 55000, 150000],
              borderColor: "#ffffff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointRadius: 3,
              pointBackgroundColor: "#ffffff",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { display: false },
          },
        },
      });
    }

    // Create second chart (Total Sales)
    if (chart2Ref.current) {
      const ctx2 = chart2Ref.current.getContext("2d");
      chart2Instance.current = new Chart(ctx2, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar"],
          datasets: [
            {
              data: [8500, 11720, 13500],
              borderColor: "#ffffff",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointRadius: 3,
              pointBackgroundColor: "#ffffff",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { display: false },
          },
        },
      });
    }

    return () => {
      if (chart1Instance.current) {
        chart1Instance.current.destroy();
      }
      if (chart2Instance.current) {
        chart2Instance.current.destroy();
      }
    };
  }, []);

  const leadsData = [
    { month: "Jan", value: 85, color: "#ffc107" },
    { month: "Feb", value: 65, color: "rgba(255, 255, 255, 0.9)" },
    { month: "Mar", value: 70, color: "rgba(255, 255, 255, 0.9)" },
  ];

  const conversionData = [
    {
      source: "LinkedIn",
      leads: "72 leads",
      conversions: "32 leads",
      rate: "44%",
    },
    {
      source: "Facebook",
      leads: "180 leads",
      conversions: "55 leads",
      rate: "30%",
    },
    {
      source: "Instagram",
      leads: "123 leads",
      conversions: "49 leads",
      rate: "40%",
    },
  ];

  return (
    <div className="cards-container">
      {/* Total Spends Card */}
      <div className="metric-card card-blue">
        <div className="card-title">Total Spends</div>
        <div className="card-value">₹1,50,000</div>
        <div className="card-chart">
          <canvas ref={chart1Ref}></canvas>
        </div>
        <div className="card-comparison">
          <TrendingUp sx={{ fontSize: 14, marginRight: "4px" }} />
          ₹82,500 last Month
        </div>
      </div>

      {/* Total Leads Card */}
      <div className="metric-card card-orange">
        <div className="card-title">Total Leads</div>
        <div className="card-value">340</div>
        <div className="card-chart">
          {leadsData.map((item, index) => (
            <div key={index} style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  marginBottom: "4px",
                }}
              >
                <span>{item.month}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="card-comparison">vs. 303 last month</div>
      </div>

      {/* Conversion Rate Card */}
      <div className="metric-card card-purple">
        <div className="card-title">Conversion Rate</div>
        <div style={{ marginTop: "20px" }}>
          {conversionData.map((item, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "4px",
                }}
              >
                <span style={{ fontSize: "11px" }}>{item.source}</span>
                <span style={{ fontSize: "11px", fontWeight: 600 }}>
                  {item.rate}
                </span>
              </div>
              <div style={{ fontSize: "10px", opacity: 0.8 }}>
                {item.leads} → {item.conversions}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Sales Card */}
      <div className="metric-card card-green">
        <div className="card-title">Total Sales</div>
        <div className="card-value">₹13,500</div>
        <div className="card-chart">
          <canvas ref={chart2Ref}></canvas>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "11px",
            marginBottom: "8px",
          }}
        >
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
        </div>
        <div className="card-comparison">vs ₹11,720 last Month</div>
      </div>
    </div>
  );
};

export default MetricCards;
