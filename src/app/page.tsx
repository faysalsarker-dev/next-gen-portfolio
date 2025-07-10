import { Hero, Services } from "@/components/custom";
import  HowWeWork  from "@/components/custom/HowWeWork";
import OurProjects from "@/components/custom/OurProjects";
import Testimonial from "@/components/custom/Testimonial";

export default function Home() {
  return (
 <div>

<Hero/>
<Services/>
<HowWeWork/>
<Testimonial/>
<OurProjects/>
 </div>
  );
}
