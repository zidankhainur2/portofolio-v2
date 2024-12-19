import { motion } from "framer-motion";

import { styles } from "../styles";
import { dann, cv } from "../assets"; // Ensure the CV is imported here

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Zidan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Fullstack Web Developer <br className="sm:block hidden" />
            specializing in React & NextJS
          </p>

          {/* Download CV Button */}
          <a
            href={cv} // This should be the path to your CV file
            download="CV-Ahmad-Fauzidan.pdf" // Filename when the user downloads the file
            className="mt-5 inline-block px-6 py-3 bg-[#915EFF] text-white font-semibold rounded-lg shadow-md hover:bg-[#7a4ed0] transition"
          >
            Download My CV
          </a>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="absolute top-[70%] left-[50%] sm:top-[50%] sm:left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] sm:max-w-[550px]">
        <img
          src={dann}
          alt="Zidan's Hero Image"
          className="w-full h-auto object-contain rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
