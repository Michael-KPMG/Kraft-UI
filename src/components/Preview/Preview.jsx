import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CampaignIcon from "@mui/icons-material/Campaign";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventNoteIcon from "@mui/icons-material/EventNote"; 
import Cal from '../../assets/cal_icon.svg';
import Channel from '../../assets/channel_icon.svg';
import clock from '../../assets/clock_icon.svg';
import "./Preview.scss";

const PreviewCard = () => {
  return (
    <div className="preview-container">
      {/* Heading */}
    <div className="preview-heading">
      <img src={Cal} alt="Calendar Icon" style={{ width: 36, height: 36}} />
      <span>Preview</span>
    </div>

      {/* Card */}
      <div className="preview-card">
        <div className="preview-header">
          <span className="status-badge">
           <AccessTimeIcon fontSize="small" />
            Pending Review
          </span>
          <span className="campaign-id">Campaign ID: #CMP-2025-001</span>
        </div>

        <div className="preview-meta">
          <div className="meta-item">
            <img src={Channel} alt="Calendar Icon" style={{ width: 18, height: 17.66}} />
            <span>Channel : Instagram</span>
          </div>
          <div className="meta-separator">|</div>
          <div className="meta-item">
            <img src={clock} alt="Calendar Icon" style={{ width: 18, height: 18}} />
            <span>Created : Jul 18, 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
