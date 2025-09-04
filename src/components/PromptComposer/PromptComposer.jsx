import {
  MicNone,
  ArrowUpward,
  EditNoteOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import "./PromptComposer.scss";

const PromptComposer = ({ campaignCode, title, prompt }) => {
  const [selectedCampaign, setSelectedCampaign] = useState("Campaign");
  const [isCampaignDropdownOpen, setIsCampaignDropdownOpen] = useState(false);
  const [promptText, setPromptText] = useState(prompt);
  const campaignDropdownRef = useRef(null);
  const textareaRef = useRef(null);

  const campaignOptions = [
    { id: "C1_Insta_001", label: "C1_Insta_001" },
    { id: "N1_Email_001", label: "N1_Email_001" },
    { id: "C2_Insta_002", label: "C2_Insta_002" },
    { id: "N2_Email_001", label: "N2_Email_001" },
    { id: "N1_SMS_001", label: "N1_SMS_001" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        campaignDropdownRef.current &&
        !campaignDropdownRef.current.contains(event.target)
      ) {
        setIsCampaignDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleCampaignDropdown = () =>
    setIsCampaignDropdownOpen(!isCampaignDropdownOpen);

  const handleCampaignSelect = (campaign) => {
    setSelectedCampaign(campaign);
    setIsCampaignDropdownOpen(false);
  };

  // auto-expand textarea height with content
  const handlePromptChange = (e) => {
    setPromptText(e.target.value);
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto"; // reset
      el.style.height = el.scrollHeight + "px"; // set height based on content
    }
  };

  return (
    <div className="prompt-card">
      <div className="row controls">
        {/* Campaign dropdown pill */}
        <div className="filter-dropdown-container" ref={campaignDropdownRef}>
          <div
            className={`filter-dropdown ${
              isCampaignDropdownOpen ? "open" : ""
            }`}
            role="button"
            tabIndex={0}
            aria-haspopup="listbox"
            aria-expanded={isCampaignDropdownOpen}
            onClick={toggleCampaignDropdown}
          >
            <span className="icon">🧰</span>
            <span className="filter-label">{selectedCampaign}</span>
            {isCampaignDropdownOpen ? (
              <KeyboardArrowUp sx={{ fontSize: 20, color: "#000000" }} />
            ) : (
              <KeyboardArrowDown sx={{ fontSize: 20, color: "#000000" }} />
            )}
          </div>

          {isCampaignDropdownOpen && (
            <div className="dropdown-menu" role="listbox">
              {campaignOptions.map((option) => (
                <div
                  key={option.id}
                  className={`dropdown-item ${
                    selectedCampaign === option.label ? "selected" : ""
                  }`}
                  role="option"
                  aria-selected={selectedCampaign === option.label}
                  onClick={() => handleCampaignSelect(option.label)}
                  tabIndex={0}
                >
                  <span className="dropdown-item-label">{option.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Campaign Code pill */}
        <div className="pill input-pill code-pill">{campaignCode}</div>

        {/* Title pill */}
        <div className="pill input-pill title-pill" title={title}>
          {title}
        </div>
      </div>

      {/* Editable expanding prompt textarea */}
      <textarea
        ref={textareaRef}
        className="prompt-input"
        value={promptText}
        onChange={handlePromptChange}
        rows={3} // initial height for 3 lines
      />

      {/* Actions row */}
      <div className="row prompt-actions">
        <button className="outline">
          <EditNoteOutlined sx={{ fontSize: 18 }} />
          Regenerate the prompt
        </button>
        <div className="spacer" />
        <MicNone className="ghost" sx={{ fontSize: 20 }} />
        <div className="submit">
          <ArrowUpward sx={{ fontSize: 18, color: "#555" }} />
        </div>
      </div>
    </div>
  );
};

export default PromptComposer;
