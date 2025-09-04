import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./NewCampaignButton.scss";

const NewCampaignButton = ({ prefill }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // pass filter context if needed via state
    navigate("/creative-studio", { state: prefill || null });
  };

  return (
    <button className="new-campaign-btn" onClick={handleClick}>
      <Add sx={{ fontSize: 16, color: "#ffffff" }} />
      New Campaign
    </button>
  );
};

export default NewCampaignButton;
