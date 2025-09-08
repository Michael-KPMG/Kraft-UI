import React, { useEffect, useRef, useState } from "react";
import { Check, Close } from "@mui/icons-material";
import "./Stepper.scss";

/**
 * Stepper
 *
 * Props:
 *  - steps: [{ key?, label, status }] where status is one of "done" | "active" | "pending"
 *
 * Visual rules (backend contract):
 *  - done   => solid green circle, black check
 *  - active => solid blue circle, white X
 *  - pending=> solid gray circle, white X
 *
 * The green line (fill) extends up to the center of the "active" step. If no explicit 'active' step
 * is provided, the fill is computed from the number of 'done' steps.
 */
const Stepper = ({ steps = [] }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // pixel positions (left relative to container) for each step dot.
  const [positions, setPositions] = useState([]);

  // Number of segments between dots (n steps -> n-1 segments)
  const totalSegments = Math.max(steps.length - 1, 1);

  // Determine activeIndex (how many segments should be considered completed)
  let activeIndex = steps.findIndex((s) => s.status === "active");
  if (activeIndex === -1) {
    activeIndex = steps.filter((s) => s.status === "done").length;
  }
  activeIndex = Math.min(activeIndex, totalSegments);

  // Progress percentage for the .fill element inside .track
  const progressPct = (activeIndex / totalSegments) * 100;

  // Compute pixel positions for the dots relative to the container
  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const computePositions = () => {
      const container = containerRef.current;
      const track = trackRef.current;

      // track offset relative to container left and width
      const containerRect = container.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      const trackOffsetLeft = Math.round(trackRect.left - containerRect.left);
      const trackWidth = Math.max(0, Math.round(trackRect.width));

      // Avoid division by zero
      const segs = Math.max(steps.length - 1, 1);

      const newPositions = steps.map((_, i) => {
        // position along the track, from 0..trackWidth
        const x = trackOffsetLeft + (i / segs) * trackWidth;
        return Math.round(x); // integer px
      });

      setPositions(newPositions);
    };

    // initial compute
    computePositions();

    // recompute on resize and when steps change
    const onResize = () => computePositions();
    window.addEventListener("resize", onResize);

    // Use ResizeObserver to respond to layout changes of container
    let ro;
    try {
      ro = new ResizeObserver(computePositions);
      ro.observe(containerRef.current);
      ro.observe(trackRef.current);
    } catch (e) {
      // ResizeObserver not supported -> rely on window resize
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (ro) ro.disconnect();
    };
  }, [steps]);

  return (
    <div
      className="stepper"
      ref={containerRef}
      role="group"
      aria-label="Progress steps"
    >
      <div className="track" ref={trackRef} aria-hidden="true">
        <div className="fill" style={{ width: `${progressPct}%` }} />
      </div>

      {steps.map((step, i) => {
        const state = step.status; // expected strings: "done"|"active"|"pending"
        const leftPx = positions[i];
        const leftStyle =
          leftPx != null
            ? { left: `${leftPx}px` }
            : { left: `${(i / totalSegments) * 100}%` };

        return (
          <div
            key={step.key || step.label}
            className="step"
            style={leftStyle}
            aria-current={state === "active" ? "step" : undefined}
          >
            <div className={`dot ${state}`}>
              {state === "done" ? (
                <Check sx={{ fontSize: 20, color: "#111" }} />
              ) : (
                <Close sx={{ fontSize: 20, color: "#fff" }} />
              )}
            </div>
            <div className="label">{step.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
