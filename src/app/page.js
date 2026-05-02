import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";

export default function Home() {
  return (
    <div>
       <Banner/>
       <FeaturedAnimals/>
       <QurbaniTips/>
       <TopBreeds/>

    </div>
  );
}
