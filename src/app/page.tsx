import { Hero, Services } from "@/components/custom";
import FAQ from "@/components/custom/FAQ";
import  HowWeWork  from "@/components/custom/HowWeWork";
import OurProjects from "@/components/custom/OurProjects";
import TechStack from "@/components/custom/TechStack";
import Testimonial from "@/components/custom/Testimonial";

export default function Home() {
  return (
 <div>

<Hero/>
<Services/>
<HowWeWork/>
<Testimonial/>
<OurProjects/>
<TechStack />
<FAQ/>
 </div>
  );
}
