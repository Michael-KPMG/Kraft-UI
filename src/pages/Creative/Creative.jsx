
import "./Creative.scss";

import Stepper from "@/components/Stepper/Stepper"; 
import TextBar from "@/components/TextBar/TextBar";
import GenerateCopyButton from "@/components/GenerateCopyButton/GenerateCopyButton";
import ContentCard from "@/components/ContentCard/ContentCard";
import CreativeOptions from "@/components/CreativeOptions/CreativeOptions";
import Preview from "@/components/Preview/Preview";

const CreativePage = () => {
  const labels = ["Creative", "Content", "Preview", "Approve"];
  const activeIndex = 2; // example value from teammate (0-based)
  const completed = [0, 1]; // example indices that are completed

  // Map labels + activeIndex + completed[] -> Stepper's expected shape:
  // Stepper expects: [{ key, label, status: 'done'|'active'|'pending' }, ...]
  const steps = labels.map((label, idx) => {
    const status = completed.includes(idx)
      ? "done"
      : idx === activeIndex
      ? "active"
      : "pending";
    return { key: label.toLowerCase(), label, status };
  });

  return (
    <div className="creative-page">
      <div className="creative-section progress-wrapper">
        <Stepper steps={steps} />
      </div>

      <div className="creative-section">
        <TextBar
          label="Generate a short, authentic Instagram caption (30–50 words)…"
          showRegenerate
        />
        {/* <CreativeOptions/> */}
      </div>

      <div className="creative-section row">
        <GenerateCopyButton />
      </div>

      <div className="creative-section">
        <ContentCard />
      </div>
      {/* <div className="preview-section">
        <Preview/>
      </div> */}
    </div>
  );
};

export default CreativePage;
