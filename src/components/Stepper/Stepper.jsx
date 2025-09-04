import { CheckCircle, Close } from "@mui/icons-material";
import "./Stepper.scss";

const Stepper = ({ steps = [], currentIndex = 0 }) => {
  const total = Math.max(steps.length - 1, 1);
  const progressPct = (currentIndex / total) * 100;

  return (
    <div className="stepper">
      <div className="track">
        <div className="fill" style={{ width: `${progressPct}%` }} />
      </div>

      {steps.map((s, i) => {
        const isDone = s.status === "done";
        const left = (i / total) * 100;
        return (
          <div
            className="step"
            key={s.key || s.label}
            style={{ left: `${left}%` }}
          >
            <div className={`dot ${isDone ? "done" : "pending"}`}>
              {isDone ? (
                <CheckCircle sx={{ fontSize: 16, color: "#23C55E" }} />
              ) : (
                <Close sx={{ fontSize: 14, color: "rgba(0,0,0,0.35)" }} />
              )}
            </div>
            <div className="label">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
