import MetricCards from "@/components/MetricCards/MetricCards";
import FilterSection from "@/components/FilterSection/FilterSection";
import CampaignSection from "@/components/CampaignSection/CampaignSection";
import NewCampaignButton from "@/components/NewCampaignButton/NewCampaignButton";

const HomePage = () => {
  return (
    <>
      <MetricCards />
      <FilterSection />
      <CampaignSection />
      <NewCampaignButton />
    </>
  );
};

export default HomePage;
