import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import "./MetricCards.scss";

const MetricCards = () => {
  const chartSpendsRef = useRef(null);
  const chartSalesRef = useRef(null);
  const chartSpendsInstance = useRef(null);
  const chartSalesInstance = useRef(null);

  useEffect(() => {
    if (chartSpendsInstance.current) chartSpendsInstance.current.destroy();
    if (chartSalesInstance.current) chartSalesInstance.current.destroy();

    // --- Chart 1: Total Spends ---
    if (chartSpendsRef.current) {
      const ctx = chartSpendsRef.current.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, 95);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      const dataPoints = [400000, 1100000, 600000, 1000000, 900000, 800000];
      const labels = ["Jan", "", "Feb", "", "Mar", ""];

      chartSpendsInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              data: dataPoints,
              borderColor: "#ffffff",
              backgroundColor: gradient,
              borderWidth: 2.5,
              fill: true,
              tension: 0.4,
              pointRadius: (ctx) => (ctx.dataIndex === 3 ? 6 : 0),
              pointBackgroundColor: "#ffffff",
              pointBorderColor: "#4a41a9",
              pointBorderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: {
            x: {
              ticks: {
                font: {
                  family: "'Poppins', sans-serif",
                  size: 11,
                  weight: 500,
                },
                color: "rgba(255,255,255,0.9)",
                callback: (val, i) => labels[i] || null,
              },
              grid: { display: false },
              border: { display: false },
            },
            y: {
              min: 400000,
              max: 1200000,
              ticks: {
                font: {
                  family: "'Poppins', sans-serif",
                  size: 11,
                  weight: 500,
                },
                color: "rgba(255,255,255,0.9)",
                stepSize: 400000,
                callback: (value) => {
                  if (value === 400000) return "4L";
                  if (value === 800000) return "8L";
                  if (value === 1200000) return "12L";
                  return null;
                },
              },
              grid: { display: false },
              border: { display: false },
            },
          },
          layout: { padding: { top: 10, left: 5, right: 10 } },
        },
      });
    }

    // --- Chart 2: Total Sales ---
    if (chartSalesRef.current) {
      const ctx = chartSalesRef.current.getContext("2d");
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 85);
      gradientFill.addColorStop(0, "rgba(52, 199, 89, 0.3)");
      gradientFill.addColorStop(1, "rgba(52, 199, 89, 0)");

      const salesData = [9500, 11720, 13500];

      chartSalesInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar"],
          datasets: [
            {
              data: salesData,
              borderColor: "#34C759",
              backgroundColor: gradientFill,
              borderWidth: 2.5,
              fill: true,
              tension: 0.1,
              pointRadius: 6,
              pointBackgroundColor: "#34C759",
              pointBorderColor: "#34C759",
              pointBorderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 15,
              right: 10,
              left: 10,
              bottom: 0,
            },
          },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: { x: { display: false }, y: { display: false } },
        },
      });
    }

    return () => {
      if (chartSpendsInstance.current) chartSpendsInstance.current.destroy();
      if (chartSalesInstance.current) chartSalesInstance.current.destroy();
    };
  }, []);

  const leadsData = [
    { month: "Jan", value: 95, color: "#FFA756" },
    { month: "Feb", value: 80, color: "#8A63F2" },
    { month: "Mar", value: 70, color: "#2962FF" },
  ];

  const conversionData = [
    {
      source: "Email",
      leads: 60,
      conversions: 3,
      rate: "5%",
      color: "purple",
      width: 45,
    },
    {
      source: "WhatsApp",
      leads: 140,
      conversions: 6,
      rate: "4.3%",
      color: "blue",
      width: 85,
    },
    {
      source: "Instagram",
      leads: 140,
      conversions: 6,
      rate: "4.3%",
      color: "purple",
      width: 15,
    },
  ];

  const salesChartValues = ["₹ 9,500", "₹ 11,720", "₹ 13,500"];

  return (
    <div className="metric-cards-root">
      <div className="cards-container">
        {/* Card 1 */}
        <div className="metric-card card-blue">
          <div className="card-content">
            <div className="card-main-content">
              <div className="card-title">Total Spends</div>
              <div className="card-value">₹11,00,000</div>
              <div className="card-chart chart-spends">
                <canvas ref={chartSpendsRef}></canvas>
              </div>
            </div>
            <div className="card-footer">vs ₹9,50,000 last Month</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="metric-card card-orange">
          <div className="card-content">
            <div className="card-main-content">
              <div className="card-title">Total Leads</div>
              <div className="card-value">340</div>
              <div className="leads-list">
                {leadsData.map((item, index) => (
                  <div className="leads-item" key={index}>
                    <span className="leads-month">{item.month}</span>
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
            </div>
            <div className="card-footer">vs 303 last month</div>
          </div>
        </div>

        {/* Card 3 - Total Sales */}
        <div className="metric-card card-green">
          <div className="card-content">
            <div className="card-main-content">
              <div className="card-title">Total Sales</div>
              <div className="card-value">₹ 13,500</div>
              <div className="sales-chart-wrapper">
                <div className="sales-chart-values">
                  {salesChartValues.map((val, i) => (
                    <span key={i}>{val}</span>
                  ))}
                </div>
                <div className="card-chart chart-sales">
                  <canvas ref={chartSalesRef}></canvas>
                </div>
                <div className="chart-xaxis">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                </div>
              </div>
            </div>
            <div className="card-footer">vs ₹ 11,720 last Month</div>
          </div>
        </div>

        {/* Card 4 - Conversion Rate */}
        <div className="metric-card card-purple">
          <div className="card-content">
            <div className="card-main-content">
              <div className="card-title">Conversion Rate</div>
              <div className="conversions-list">
                {conversionData.map((item, index) => (
                  <div key={index} className="conversion-item">
                    <div className="conversion-header">
                      <span className="source">{item.source}</span>
                      <span className="details">
                        {item.leads} leads → {item.conversions} Sales
                      </span>
                      <span className="rate">{item.rate}</span>
                    </div>
                    <div className="conversion-bar">
                      <div
                        className={`progress-fill ${item.color}`}
                        style={{ width: `${item.width}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer">vs Feb month lead to sale - 120/5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCards;
