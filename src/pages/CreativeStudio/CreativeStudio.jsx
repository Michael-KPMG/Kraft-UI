// src/pages/CreativeStudio/CreativeStudio.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { ImageOutlined, CalendarMonth, Refresh } from "@mui/icons-material";

import Stepper from "@/components/Stepper/Stepper";
import PromptComposer from "@/components/PromptComposer/PromptComposer";
import CreativeFilterSection from "@/components/FilterSection/CreativeFilterSection";
import ImageGrid from "@/components/ImageGrid/ImageGrid";

import "./CreativeStudio.scss";

const CreativeStudio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prefill = location.state || {};

  // Default values (same as used for PromptComposer)
  const campaignCodeDefault = prefill.campaignCode || "C1_Insta_001";
  const titleDefault =
    prefill.title ||
    "Instagram Post for Working Male Millennials promoting Deli2go";
  const promptDefault =
    prefill.prompt ||
    "Visualize a shot of a Indian millennial man leaning against his car at a Shell station, holding a coffee cup from the convenience store. He’s on his phone, perhaps sharing a quick update with a partner or friend, or looking at a map for a planned outing.";

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
    "https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?q=80&w=800&auto=format&fit=crop",
  ];

  // Handler called when ImageGrid action button is clicked.
  // actionKey: the action key from actions[] (e.g. 'save' or 'regen')
  // image: the image url for that card
  const handleImageAction = (actionKey, image) => {
    if (actionKey === "save") {
      // navigate to the new page and pass useful state (prefill values + selected image)
      navigate("/creative-studio/save-image", {
        state: {
          campaignCode: campaignCodeDefault,
          title: titleDefault,
          prompt: promptDefault,
          selectedImage: image,
        },
      });
      return;
    }

    if (actionKey === "regen") {
      // You can implement regeneration logic here (API call, re-request generation, etc.)
      console.log("Regenerate image:", image);
      // Example: open a spinner, call API then refresh that image.
      return;
    }

    // handle other actions as needed
    console.log("Action", actionKey, "on", image);
  };

  return (
    <div className="creative-studio">
      <Stepper steps={steps} />

      <PromptComposer
        campaignCode={campaignCodeDefault}
        title={titleDefault}
        prompt={promptDefault}
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
        <button
          className="primary-cta"
          onClick={() => {
            // Example: clicking generate can navigate or trigger generation flow.
            // For now leave as console (or navigate to creative page)
            console.log("generate the image clicked");
          }}
        >
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
        // our callback for action clicks
        onAction={handleImageAction}
      />
    </div>
  );
};

export default CreativeStudio;
