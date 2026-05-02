import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import Image from "next/image";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
       <Banner/>
    </div>
  );
}
