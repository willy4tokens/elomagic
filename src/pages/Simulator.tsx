import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrowthSimulator from "@/components/GrowthSimulator";

const SimulatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <GrowthSimulator />
      </div>
      <Footer />
    </div>
  );
};

export default SimulatorPage;
