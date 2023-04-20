import {motion} from "framer-motion";
import { fadeIn } from "../utils/variants"
import { pPicture } from "../assets"
const About = () => {
	return (
    <div className="lg:px-10 w-full mb-10 mt-10" id="about">
      <div className="lg:px-[100px] md:px-5 px-5">
        <div className="w-full text-center relative">
          <h1 className="text-gradient h2">About</h1>
          <div className="w-[70px] h-[1px] center bg-white top-10"></div>
        </div>
        <div className="mt-14 flex flex-col md:flex-row gap-10 py-20">
          <div className="flex-1 max-w-[700px]">
            <motion.p
              className="text-justify"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Welcome to my portfolio website. My name is{" "}
              <strong>IYANDA OLAMIDOTUN KOLAPO</strong>, and I am an
              undergraduate student at the University of Agriculture Abeokuta,
              studying statistics. I am currently in my final year, and I am
              passionate about using data to derive insights that can be used to
              solve real-world problems.
            </motion.p>
            <motion.p
              className="text-justify"
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              As a data analyst, I have experience using SPSS, R, and Excel to
              analyze data and generate actionable insights. My ability to
              manipulate and analyze data has enabled me to develop a deep
              understanding of statistical concepts, which I leverage to provide
              accurate and insightful analysis.
            </motion.p>
            <motion.p
              className="text-justify"
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am also currently enrolled in the ALX Software Engineering
              program, where I am expanding my skillset to include web
              development. I am proficient in HTML, CSS, JavaScript, Bootstrap,
              and SASS, and I am continuously learning and exploring new
              technologies to stay up-to-date with the latest trends and
              developments in the field.
            </motion.p>
            <motion.p
              className="text-justify"
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Thank you for visiting my website, and I hope that you find my
              work and experience valuable. Please feel free to contact me if
              you have any questions or would like to discuss a potential
              project.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:flex items-center md:justify-end justify-center hidden"
          >
            <div className="">
              <img
                src={pPicture}
                alt=""
                className="lg:w-[400px] lg:h-[450px] border-8 border-[#41e132] rounded-2xl grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
