import React from "react";
import "./CampaignSection.scss";
import Leads from '../../assets/Frame.svg';
import Vector from '../../assets/Vector.svg';
import Cal from '../../assets/Cal.svg';
import Graph from '../../assets/Graph.svg';
import Pie from '../../assets/Pie.svg';
import SizeIcon from '../../assets/SizeIcon.svg';
import people from '../../assets/people.svg';
import desc from '../../assets/desc.svg';
import {
  CalendarToday,
  People,
  Description,
  InsertPhoto,
  Mail,
  CurrencyRupee,
  Percent,
  Campaign as CampaignIcon,
  BarChart,
} from "@mui/icons-material";

import { Button } from "@mui/material";

const CampaignSection = () => {
  return (
    <section className="campaign-section">
      {/* =================== PERFORMANCE METRICS =================== */}
      <h3 className="section-title">Performance Metrics</h3>
      <div className="metrics-row">
        {/* Spend */}
        <div className="metric-card is-spend">
          <div className="metric-head">
            <div className="metric-icon">
              <img src={Vector} alt="Vector"/>
            </div>
            <div className="metric-main">
              <div className="metric-value">₹3,225</div>
            </div>
          </div>
          <div className="metric-foot">Spend</div>
        </div>

        {/* Leads */}
        <div className="metric-card is-leads">
          <div className="metric-head">
            <div className="metric-icon">
              <img src={Leads} alt="Spend"/>
            </div>
            <div className="metric-main">
              <div className="metric-value">11 daily avg</div>
            </div>
          </div>
          <div className="metric-foot">Leads</div>
        </div>

        {/* CNV */}
        <div className="metric-card is-cnv">
          <div className="metric-head">
            <div className="metric-icon">
              <img src={Cal} alt="Cal"/>
            </div>
            <div className="metric-main">
              <div className="metric-value">3.4%</div>
            </div>
          </div>
          <div className="metric-foot">CNV</div>
        </div>

        {/* Sales */}
        <div className="metric-card is-sales">
          <div className="metric-head">
            <div className="metric-icon">
              <img src={Graph} alt="Graph"/>
            </div>
            <div className="metric-main">
              <Button className="qty-btn" size="small">Qnty ▾</Button>
              <div className="metric-value">₹4,500</div>
            </div>
          </div>
          <div className="metric-foot">Sales</div>
        </div>
      </div>

      {/* =================== CAMPAIGN =================== */}
      <div className="campaign-header">
        <h4 className="campaign-title">Campaign #01</h4>
        <div className="campaign-tabs">
          <Button className="status-btn active">Active</Button>
          <Button className="status-btn">Ongoing</Button>
          <Button className="status-btn">Completed</Button>
        </div>
      </div>

      <div className="campaign-details">
        <div className="detail-card">
          <span className="icon">
           <img src={Cal} alt="Cal"/>
            </span>
          <span className="text">
            <span className="title">Active Date</span>
            <span className="sub">July-01-2025</span>
          </span>
        </div>

        <div className="detail-card">
          <span className="icon">
           <img src={Pie} alt="Pie"/>
            </span>
          <span className="text">
            <span className="title">Segment Name</span>
            <span className="sub">Insta + Email</span>
          </span>
        </div>

        <div className="detail-card">
          <span className="icon">
            <img src={SizeIcon} alt="Size"/>
            </span>
          <span className="text">
            <span className="title">Size</span>
            <span className="sub">40,0000</span>
          </span>
        </div>

        <div className="detail-card">
          <span className="icon">
            <img src={people} alt="Mail"/>
          </span>
          <span className="text">
            <span className="title">Channels</span>
            <span className="sub">Insta + Email</span>
          </span>
        </div>

        <div className="desc-card">
          <span className="icon">
            <img src={desc} alt="desc"/>
            </span>
          <span className="text">
            <span className="title">Description</span>
            <span className="sub">Lorem Ipsum</span>
          </span>
        </div>
      </div>

      <div className="actions">
        <Button className="clone-btn">CLONE / Q</Button>
        <Button className="report-btn" variant="contained">VIEW REPORT</Button>
      </div>
    </section>
  );
};

export default CampaignSection;

 


// import { Button } from "@mui/material";
// import {
//   CalendarToday,
//   Campaign,
//   PieChart,
//   Description,
//   Straighten,
//   AttachMoney,
//   FilterList,
//   Folder,
//   BarChart,
// } from "@mui/icons-material";

// import "./CampaignSection.scss";

// const CampaignSection = () => {
//   return (
//     <div className="campaign-card">
//       {/* Top Row */}
//       <div className="top-row">
//         <div className="campaign-title">
//           <h3>Campaign #01</h3>
//           <div className="status-buttons">
//             <Button
//               variant="contained"
//               size="small"
//               className="active-btn"
//               sx={{ borderRadius: "12px" }}
//             >
//               Active
//             </Button>
//             <Button
//               variant="outlined"
//               size="small"
//               sx={{ borderRadius: "12px" }}
//             >
//               Ongoing
//             </Button>
//             <Button
//               variant="outlined"
//               size="small"
//               sx={{ borderRadius: "12px" }}
//             >
//               Completed
//             </Button>
//           </div>
//         </div>

//         <h3 className="performance-title">Performance Metrics</h3>
//       </div>

//       <div className="campaign-content">
//         {/* Left Column */}
//         <div className="campaign-info">
//           <div className="info-item">
//             <span className="icon">
//               <CalendarToday />
//             </span>
//             <span className="label">Active Date</span>
//             <span className="value">July - 01 - 2025</span>
//           </div>
//           <div className="info-item">
//             <span className="icon">
//               <Campaign />
//             </span>
//             <span className="label">Channels</span>
//             <span className="value">Insta + Email</span>
//           </div>
//           <div className="info-item">
//             <span className="icon">
//               <PieChart />
//             </span>
//             <span className="label">Segment Name</span>
//             <span className="value">Insta + Email</span>
//           </div>
//           <div className="info-item">
//             <span className="icon">
//               <Description />
//             </span>
//             <span className="label">Description</span>
//             <span className="value">Lorem Ipsum</span>
//           </div>
//           <div className="info-item">
//             <span className="icon">
//               <Straighten />
//             </span>
//             <span className="label">Size</span>
//             <span className="value">Lorem Ipsum</span>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="campaign-metrics">
//           <div className="info-item">
//             <span className="icon">
//               <AttachMoney />
//             </span>
//             <span className="label">Spend</span>
//             <span className="value">₹3,225</span>
//           </div>
//           <div className="info-item">
//             <span className="icon">
//               <FilterList />
//             </span>
//             <span className="label">Leads</span>
//             <span className="value">11 daily avg</span>
//           </div>
//           <div className="info-item">
//             <span className="icon">
//               <Folder />
//             </span>
//             <span className="label">CNV</span>
//             <span className="value">Lorem Ipsum</span>
//           </div>
//           <div className="info-item sales-item">
//             <span className="icon">
//               <BarChart />
//             </span>
//             <span className="label">Sales</span>
//             <Button variant="outlined" size="small">
//               QTY ▼
//             </Button>
//             <span className="value">₹4,500</span>
//           </div>
//           <div className="action-buttons">
//             <Button variant="outlined" className="clone-btn">
//               Clone / Q
//             </Button>
//             <Button variant="contained" className="view-btn">
//               View Report
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignSection;
