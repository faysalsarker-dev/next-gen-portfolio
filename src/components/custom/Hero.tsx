"use client";
import { Typewriter } from "react-simple-typewriter";


export default function Hero() {
  return (
    <section className="flex bg-[#0D0914]  items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center ">
      <div className="max-w-2xl space-y-4">
       
 <h1  className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Grow Your Business <br />
with  
          <span className="italic text-green-500"> Lightning-Fast</span>
           , Custom <br/>
       {"{"}   <Typewriter
                        words={['Websites', 'Automation', 'Applications','Solutions','Designs']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}

                    />
          
          
           {"}"}
        </h1>




        <div>
         
        </div>
      </div>
    </section>
  );
}
