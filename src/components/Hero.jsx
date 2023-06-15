import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Hero = () => {
  return (
    <div
      className="md:p-10 px-5 md:min-h-[80vh] min-h-[100vh] lg:min-h-[100vh] flex items-center pt-16 lg:pt-24 "
      id="home"
    >
      <div className="relative">
        <div className="sm:leading-[46px] leading-[30px] lg:px-[120px]">
          <motion.h1
            className="sm:text-[23px]"
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Hello, My Name is
            <span className="block text-gradient uppercase h4 sm:h2 leading-[30px] sm:leading-[46px]">
              Iyanda olamidotun Kolapo
            </span>
          </motion.h1>
          <motion.h2
            className="h4 text-[18px] sm:text-[24px] capitalize leading-[30px] sm:leading-[46px] "
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            A frontend software developer
          </motion.h2>
          <motion.h2
            className="h4 text-[18px] sm:text-[24px] capitalize leading-[30px] sm:leading-[46px]"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Alx Software engineering student
          </motion.h2>
          <motion.p
            className="text-[16px] sm:text-[18px] max-w-[800px] capitalize"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            i am proefficient in HTML, CSS, JavaScript, Boothstrap, SASS,
            Tailwind, React, three.js and framer motion. I'm presently enrolled
            in the ALX software engneering program to increase my knowlegde and
            become a full stack developer
          </motion.p>
          <motion.button
            className="btn md:btn-lg btn-sm mt-8"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <a href="https://drive.google.com/file/d/1enb1_vUFobRMkgOZwVgzpm3vu28IpRrI/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </motion.button>
        </div>

        {/* Social Icons */}
        <motion.div
          className="flex lg:flex-col gap-10 items-center max-w-[50px] lg:fixed bottom-4 ml-4"
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="flex lg:flex-col lg:gap-5 gap-8 mt-10">
            <a href="https://github.com/OlamidotunIY" target="_blank" rel="noopener noreferrer"  className="text-white text-decoration-none">
              <FaGithub className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] hover:text-[#0f9403] hover:scale-[1.2] transition-all cursor-pointer" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
              <FaTwitter className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] hover:text-[#0f9403] hover:scale-[1.2] transition-all cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/iyanda-olamidotun-531399257/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
              <FaLinkedin className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] hover:text-[#0f9403] hover:scale-[1.2] transition-all cursor-pointer" />
            </a>
          </div>
          <div className="w-[1px] h-[250px] bg-white hidden lg:block"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
