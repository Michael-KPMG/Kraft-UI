import { CheckCircle } from "@mui/icons-material";
import { useState } from "react";
import "./ImageGrid.scss";

const ImageGrid = ({ title, images = [], actions = [] }) => {
  const [selected, setSelected] = useState(0);

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
            onClick={() => {}}
          >
            {a.icon} {a.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
