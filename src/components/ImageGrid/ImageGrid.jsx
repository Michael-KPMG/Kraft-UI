// src/components/ImageGrid/ImageGrid.jsx
import { CheckCircle } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageGrid.scss";

const ImageGrid = ({ title, images = [], actions = [] }) => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  // Minimal action handler: only redirect for "save".
  const handleAction = (actionKey) => {
    if (actionKey === "save") {
      // Simple redirect to the new page
      navigate("/creative-studio/save-image");

      // If you want to send the selected image (or other data) to the new page,
      // use location.state like this instead:
      // navigate("/creative-studio/save-image", { state: { selectedImage: images[selected] } });
      return;
    }

    // Keep original (no-op) behavior for other actions for now
    // You can add handling for 'regen' etc. here if needed.
  };

  return (
    <div className="image-grid-card">
      <div className="header">{title}</div>

      <div className="grid">
        {images.map((src, idx) => (
          <div
            key={src}
            className={`item ${selected === idx ? "selected" : ""}`}
            onClick={() => setSelected(idx)}
          >
            <img src={src} alt={`creative-${idx}`} />
            {selected === idx && (
              <div className="selected-mark">
                <CheckCircle sx={{ fontSize: 20, color: "#4648ff" }} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="actions">
        {actions.map((a) => (
          <button
            key={a.key}
            className={a.primary ? "btn primary" : "btn outline"}
            onClick={() => handleAction(a.key)}
          >
            {a.icon} {a.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
