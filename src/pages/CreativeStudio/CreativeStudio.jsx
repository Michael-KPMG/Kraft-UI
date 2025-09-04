import { useLocation } from "react-router-dom";
import { ImageOutlined, CalendarMonth, Refresh } from "@mui/icons-material";

import Stepper from "@/components/Stepper/Stepper";
import PromptComposer from "@/components/PromptComposer/PromptComposer";
import CreativeFilterSection from "@/components/FilterSection/CreativeFilterSection";
import ImageGrid from "@/components/ImageGrid/ImageGrid";

import "./CreativeStudio.scss";

const CreativeStudio = () => {
  const location = useLocation();
  const prefill = location.state || {};

  const steps = [
    { key: "creative", label: "Creative", status: "done" },
    { key: "content", label: "Content", status: "pending" },
    { key: "preview", label: "Preview", status: "pending" },
    { key: "approve", label: "Approve", status: "pending" },
  ];

  const images = [
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546817377-47e2b8dc1d0d?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <div className="creative-studio">
      <div className="top-line">
        <span className="page-title">Creative studio</span>
      </div>

      <Stepper steps={steps} currentIndex={0} />

      <PromptComposer
        campaignCode={prefill.campaignCode || "C1_Insta_001"}
        title={
          prefill.title ||
          "Instagram Post for Working Male Millennials promoting Deli2go"
        }
        prompt={
          prefill.prompt ||
          "Visualize a shot of a Indian millennial man leaning against his car at a Shell station, holding a coffee cup from the convenience store. He’s on his phone, perhaps sharing a quick update with a partner or friend, or looking at a map for a planned outing."
        }
      />

      <CreativeFilterSection
        defaultValues={{
          brandKit: "Corporate Comms Kit",
          logoPlacement: "Top Left",
          channel: "Instagram",
          styling: "Real",
        }}
      />

      <div className="cta-row">
        <button className="primary-cta">
          <ImageOutlined sx={{ fontSize: 18, color: "#fff" }} />
          Generate the image
        </button>
      </div>

      <div className="section-heading">
        <div className="left">
          <CalendarMonth sx={{ fontSize: 18, color: "#4648ff" }} />
          <span>Creative</span>
        </div>
      </div>

      <ImageGrid
        title="Generation for Instagram"
        images={images}
        actions={[
          {
            key: "regen",
            label: "Regenerate",
            icon: <Refresh sx={{ fontSize: 18 }} />,
          },
          {
            key: "save",
            label: "Save the image",
            primary: true,
            icon: <ImageOutlined sx={{ fontSize: 18 }} />,
          },
        ]}
      />
    </div>
  );
};

export default CreativeStudio;
