import { Hero, Services } from "@/components/custom";
import FAQ from "@/components/custom/FAQ";
import  HowWeWork  from "@/components/custom/HowWeWork";
import OurProjects from "@/components/custom/OurProjects";
import TechStack from "@/components/custom/TechStack";
import Testimonial from "@/components/custom/Testimonial";
import WhyChooseMe from "@/components/custom/AboutMe";
import GetInTouch from "@/components/custom/GetInTouch";

export default function Home() {
  return (
 <div>

<Hero/>
<Services/>
<WhyChooseMe/>
<HowWeWork/>
<Testimonial/>
<OurProjects/>
<TechStack />
<FAQ/>
<GetInTouch />
 </div>
  );
}
