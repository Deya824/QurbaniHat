import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";

// 1. Data moved outside or kept as a constant to keep the component clean
const steps = [
    { title: "Choose Wisely", desc: "Select animals with clear eyes and active movement." },
    { title: "Check Teeth", desc: "Ensure the animal has reached the required age (2 years for cows)." },
    { title: "Verify Health", desc: "Our animals come with weight and health certifications." }
];

export default function Home() {
  return (
    <div className="space-y-0">
        {/* Banner Section */}
        <Banner/>

        

        
        <FeaturedAnimals/>
       
       
        <QurbaniTips/>
        <TopBreeds/>
    </div>
  );
}