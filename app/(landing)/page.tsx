import LandingHero from "@/components/LandingHero";
import { LandingNavbar } from "@/components/LandingNavbar";

const landingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
    </div>
  );
};
``
export default landingPage;
