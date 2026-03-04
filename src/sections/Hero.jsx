import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
// import { words } from "../constants";
import MyPhoto from "../components/models/hero_models/MyPhoto";
import {Typewriter} from 'react-simple-typewriter';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-blue-800 via-black to-black pt-4"
    >
      {/* Background image */}
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="Background" />
      </div>

      {/* Layout container */}
      {/* <div className="hero-layout relative z-10 flex flex-col md:flex-row items-start justify-between gap-12 px-5 md:px-20 mt-24"> */}
      <div className="hero-layout relative z-10 flex flex-col items-center justify-center text-center gap-12 px-5 mt-6 min-h-[80vh]">

        {/* <header className="w-full mt-[80px] ml-0 lg:ml-[80px] md:w-1/2 flex flex-col justify-center gap-7">
          <div className="hero-text text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <h1 className="ml-[80px] md:ml-0 "> Hi, I'm
              <span className="slide ml-[50px] md:ml-0">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                      <img src={word.imgPath} alt="person"
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>menjadi Project Nyata</h1>
            <h1>yang Memberi Dampak</h1>
          </div>

          <p className="text-white-50 text-center md:text-left md:text-xl relative z-10 pointer-events-none">
            Designing, Building, and Deploying Ideas into Real Experiences.
          </p>

          <Button
            text="See My Work"
            className="md:w-80 md:h-16 w-60 h-12 self-center md:self-start"
            id="counter"
          />
        </header> */}

        <header className="w-full max-w-3xl flex flex-col items-center gap-7">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Hai, Saya {' '}
            <span className="text-blue-400">
              <Typewriter
                words={['Rayyan Ardiano', 'Front-End Dev', 'UI/UX Designer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="text-white-50 md:text-xl">
          Merancang, Membangun, dan Menghadirkan Ide menjadi Pengalaman Nyata.
          </p>

          <Button
            text="Lihat Portofolio"
            className="md:w-80 md:h-16 w-60 h-12"
            id="counter"
          />
        </header>

        {/* RIGHT: Hero Photo */}
        {/* <figure className="w-full md:w-1/2 flex justify-center md:justify-end">
          <MyPhoto />
        </figure> */}
      </div>
      
      {/* ini about us nya */}


      {/* <AnimatedCounter /> */}
    </section>
  );
};

export default Hero;
