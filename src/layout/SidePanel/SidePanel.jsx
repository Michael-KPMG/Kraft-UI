import React, { useState } from "react";
import { Settings, Add, Mic, ArrowUpward } from "@mui/icons-material";
import "./SidePanel.scss";
import collapseIcon from "../../assets/collapse-icon.png";

const SidePanel = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log('Submitted:', inputValue);
      // Handle input submission here
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="side-panel-overlay" onClick={onClose} />}

      {/* Side Panel */}
      <div className={`side-panel ${isOpen ? "side-panel-open" : ""}`}>
        <div className="side-panel-header">
          <div className="side-panel-title">
            <img src={collapseIcon} alt="Collapse" width="20" height="20" />
            <span>Agent K</span>
          </div>
          <button className="settings-button" onClick={onClose}>
            <Settings sx={{ fontSize: 20, color: "#666" }} />
          </button>
        </div>

        <div className="side-panel-content">
          {/* Content will be added when backend is integrated */}
        </div>

        <div className="input-section">
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="What else do you need?"
              className="input-field"
            />
            <div className="input-wrapper">
              <Add
                className="input-plus-icon"
                sx={{ 
                  fontSize: 30, 
                  color: "#2a2a2a",
                  strokeWidth: 1,
                  fontWeight: 300
                }}
              />
              <div className="input-spacer"></div>
              <div className="input-actions">
                <Mic className="input-mic-icon" sx={{ fontSize: 22, color: "#2a2a2a", strokeWidth: 1.5 }} />
                <div className="action-icon-wrapper arrow-wrapper" onClick={handleSubmit}>
                  <ArrowUpward sx={{ fontSize: 18, color: "#555555" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
