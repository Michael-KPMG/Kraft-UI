// src/components/FilterSection/CreativeFilterSection.jsx
import "./FilterSection.scss";
import React, { useState, useEffect, useRef, Fragment } from "react";
import {
  Inventory2, // Brand Kit
  FlipToFront, // Logo Placement
  Campaign, // Channel
  Brush, // Styling
  KeyboardArrowDown,
  KeyboardArrowUp,
  Check,
} from "@mui/icons-material";

const CreativeFilterSection = ({ defaultValues, onChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    brandKit: "",
    logoPlacement: "",
    channel: "",
    styling: "",
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const filterOptions = {
    brandKit: [
      { id: "product-launch-kit", label: "Product Launch Kit" },
      { id: "corporate-comms-kit", label: "Corporate Comms Kit" },
      { id: "festive-promo-kit", label: "Festive Promo Kit" },
      { id: "india-brand-kit", label: "India Brand Kit" },
    ],
    logoPlacement: [
      { id: "top-left", label: "Top Left" },
      { id: "top-right", label: "Top Right" },
      { id: "bottom-left", label: "Bottom Left" },
      { id: "bottom-right", label: "Bottom Right" },
    ],
    channel: [
      { id: "email", label: "Email" },
      { id: "sms", label: "SMS" },
      { id: "instagram", label: "Instagram" },
      { id: "whatsapp", label: "Whatsapp" },
      { id: "google", label: "Google" },
    ],
    styling: [
      { id: "real", label: "Real" },
      { id: "abstract", label: "Abstract" },
      { id: "animation", label: "Animation" },
      { id: "futuristic", label: "Futuristic" },
    ],
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdown &&
        dropdownRefs.current[openDropdown] &&
        !dropdownRefs.current[openDropdown].contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const handleDropdownToggle = (filterType) => {
    setOpenDropdown(openDropdown === filterType ? null : filterType);
  };

  const handleFilterSelect = (filterType, value) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev, [filterType]: value };
      onChange?.(updated);
      return updated;
    });
    setOpenDropdown(null);
  };

  const generateBreadcrumb = () => {
    const parts = [];
    parts.push(selectedFilters.brandKit || "Brand Kit");
    parts.push(selectedFilters.logoPlacement || "Logo Placement");
    parts.push(selectedFilters.channel || "Channel");
    parts.push(selectedFilters.styling || "Styling");
    return parts;
  };

  const renderDropdown = (filterType, icon, label) => {
    const isOpen = openDropdown === filterType;
    const options = filterOptions[filterType];
    const selectedValue = selectedFilters[filterType];

    return (
      <div
        className="filter-dropdown-container"
        ref={(el) => (dropdownRefs.current[filterType] = el)}
      >
        <div
          className={`filter-dropdown ${isOpen ? "open" : ""}`}
          onClick={() => handleDropdownToggle(filterType)}
        >
          {icon}
          <span className="filter-label">{selectedValue || label}</span>
          {isOpen ? (
            <KeyboardArrowUp sx={{ fontSize: 20, color: "#000000" }} />
          ) : (
            <KeyboardArrowDown sx={{ fontSize: 20, color: "#000000" }} />
          )}
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            {options.map((option) => (
              <div
                key={option.id}
                className={`dropdown-item ${
                  selectedValue === option.label ? "selected" : ""
                }`}
                onClick={() => handleFilterSelect(filterType, option.label)}
              >
                <span className="dropdown-item-label">{option.label}</span>
                {selectedValue === option.label && (
                  <Check
                    sx={{
                      fontSize: 16,
                      color: "#4648ff",
                      position: "absolute",
                      right: "12px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const crumb = generateBreadcrumb();

  return (
    <div className="filter-section creative-filter">
      <div className="filter-controls">
        {renderDropdown(
          "brandKit",
          <Inventory2 sx={{ fontSize: 18, color: "#000000" }} />,
          "Brand Kit"
        )}
        {renderDropdown(
          "logoPlacement",
          <FlipToFront sx={{ fontSize: 18, color: "#000000" }} />,
          "Logo Placement"
        )}
        {renderDropdown(
          "channel",
          <Campaign sx={{ fontSize: 18, color: "#000000" }} />,
          "Channel"
        )}
        {renderDropdown(
          "styling",
          <Brush sx={{ fontSize: 18, color: "#000000" }} />,
          "Styling"
        )}
      </div>

      <div className="breadcrumb-path">
        {crumb.map((part, i) => (
          <Fragment key={`${part}-${i}`}>
            <span style={{ color: "#4c5bf7" }}>{part}</span>
            {i < crumb.length - 1 && <span>{" > "}</span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CreativeFilterSection;
