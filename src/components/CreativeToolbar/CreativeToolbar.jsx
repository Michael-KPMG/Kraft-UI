import { useState } from "react";
import {
  ArrowDropDown,
  Inventory2Outlined, // Brand Kit
  FlipToFrontOutlined, // Logo Placement
  CampaignOutlined, // Channel
  BrushOutlined, // Styling
} from "@mui/icons-material";
import "./CreativeToolbar.scss";

const Pill = ({ icon, label, isOpen, onToggle, value, options, onSelect }) => {
  return (
    <div className="ct-pill-wrap">
      <button
        type="button"
        className={`ct-pill ${isOpen ? "open" : ""}`}
        onClick={onToggle}
      >
        <span className="ct-icon">{icon}</span>
        <span className="ct-text">{label}</span>
        <ArrowDropDown sx={{ fontSize: 18, color: "#151d48" }} />
      </button>

      {isOpen && (
        <div className="ct-menu">
          {options.map((opt) => (
            <div
              key={opt}
              className={`ct-menu-item ${opt === value ? "active" : ""}`}
              onClick={() => onSelect(opt)}
              role="button"
              tabIndex={0}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CreativeToolbar = ({
  defaultBrandKit = "Corporate Comms Kit",
  defaultLogoPlacement = "Top Left",
  defaultChannel = "Instagram",
  defaultStyling = "Real",
  onChange, // optional callback: ({ brandKit, logoPlacement, channel, styling })
}) => {
  const [open, setOpen] = useState(null);
  const [brandKit, setBrandKit] = useState(defaultBrandKit);
  const [logoPlacement, setLogoPlacement] = useState(defaultLogoPlacement);
  const [channel, setChannel] = useState(defaultChannel);
  const [styling, setStyling] = useState(defaultStyling);

  const brandKitOptions = ["Corporate Comms Kit", "Retail Kit", "Event Kit"];
  const logoOptions = [
    "Top Left",
    "Top Right",
    "Bottom Left",
    "Bottom Right",
    "Centered",
  ];
  const channelOptions = ["Instagram", "Facebook", "WhatsApp", "X", "YouTube"];
  const stylingOptions = ["Real", "Illustrative", "Minimal", "Bold"];

  const closeAll = () => setOpen(null);
  const select = (key, value) => {
    if (key === "brandKit") setBrandKit(value);
    if (key === "logoPlacement") setLogoPlacement(value);
    if (key === "channel") setChannel(value);
    if (key === "styling") setStyling(value);
    closeAll();
    onChange?.({ brandKit, logoPlacement, channel, styling, [key]: value });
  };

  return (
    <div className="creative-toolbar" onMouseLeave={closeAll}>
      <div className="ct-row">
        <Pill
          icon={<Inventory2Outlined sx={{ fontSize: 18, color: "#151d48" }} />}
          label="Brand Kit"
          isOpen={open === "brandKit"}
          onToggle={() => setOpen(open === "brandKit" ? null : "brandKit")}
          value={brandKit}
          options={brandKitOptions}
          onSelect={(v) => select("brandKit", v)}
        />

        <Pill
          icon={<FlipToFrontOutlined sx={{ fontSize: 18, color: "#151d48" }} />}
          label="Logo Placement"
          isOpen={open === "logoPlacement"}
          onToggle={() =>
            setOpen(open === "logoPlacement" ? null : "logoPlacement")
          }
          value={logoPlacement}
          options={logoOptions}
          onSelect={(v) => select("logoPlacement", v)}
        />

        <Pill
          icon={<CampaignOutlined sx={{ fontSize: 18, color: "#151d48" }} />}
          label="Channel"
          isOpen={open === "channel"}
          onToggle={() => setOpen(open === "channel" ? null : "channel")}
          value={channel}
          options={channelOptions}
          onSelect={(v) => select("channel", v)}
        />

        <Pill
          icon={<BrushOutlined sx={{ fontSize: 18, color: "#151d48" }} />}
          label="Styling"
          isOpen={open === "styling"}
          onToggle={() => setOpen(open === "styling" ? null : "styling")}
          value={styling}
          options={stylingOptions}
          onSelect={(v) => select("styling", v)}
        />
      </div>

      <div className="ct-breadcrumb">
        <span className="link">{brandKit}</span>
        <span className="sep">›</span>
        <span className="link">{logoPlacement}</span>
        <span className="sep">›</span>
        <span className="link">{channel}</span>
        <span className="sep">›</span>
        <span className="link">{styling}</span>
      </div>
    </div>
  );
};

export default CreativeToolbar;
