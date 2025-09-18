import Stepper from "@/components/Stepper/Stepper";
import Preview from "@/components/Preview/Preview";
import CreativeOptions from "@/components/CreativeOptions/CreativeOptions";
import "./StudioPage.scss";

const CreativeStudioPage = () => {
  const labels = ["Creative", "Content", "Preview", "Approve"];
  const activeIndex = 2; // "Preview" is active (0-based)
  const completed = [0, 1]; // "Creative" & "Content" done

  const steps = labels.map((label, idx) => {
    const status = completed.includes(idx)
      ? "done"
      : idx === activeIndex
      ? "active"
      : "pending";
    return { key: label.toLowerCase(), label, status };
  });

  return (
    <div className="creative-studio-page">
      {/* Progress Bar at top */}
      <Stepper steps={steps} />

      {/* Preview Section */}
      <Preview />

      {/* Creative Options (2 option cards + right panel) */}
      <CreativeOptions />
    </div>
  );
};

export default CreativeStudioPage;
