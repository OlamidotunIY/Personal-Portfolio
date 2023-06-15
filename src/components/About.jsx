import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { pPicture } from "../assets";
const About = () => {
  return (
    <div className="lg:px-10 w-full mb-10 mt-10" id="about">
      <div className="lg:px-[100px] md:px-5 px-5">
        <div className="w-full text-center relative">
          <h1 className="text-gradient h2">About</h1>
          <div className="w-[70px] h-[1px] center bg-white top-10"></div>
        </div>
        <div className="mt-14 flex py-20">
          <div className="flex flex-col gap-10 max-w-[1000px]">
            <motion.p
              className="text-justify text-[25px] leading-10"
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Welcome to my portfolio website. My name is{" "}
              <strong className="h3">IYANDA OLAMIDOTUN KOLAPO</strong>, and I am
              an undergraduate student at the University of Agriculture
              Abeokuta, studying statistics. I am currently in my final year,
              and I am passionate about using data to derive insights that can
              be used to solve real-world problems.
            </motion.p>
            <motion.p
              className="text-justify text-[25px] leading-10"
              variants={fadeIn("right", 0.2)}
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
              className="text-justify text-[25px] leading-10"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am also currently enrolled in the ALX Software Engineering
              program, where I am expanding my skillset to include web
              development. I am proficient in HTML, CSS, JavaScript, Bootstrap,
              and SASS, React and React Native. I am also familiar with Node.js,
              Express.js, MongoDB, and MySQL.
            </motion.p>
            <motion.p
              className="text-justify text-[25px] leading-10"
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              I can create responsive websites and web applications that are
              user-friendly and visually appealing. I am also familiar with
              version control using Git and GitHub. I can create re-useable
              components and implement state management using Redux. I can also
              create mobile applications using React Native.
            </motion.p>
            <motion.p
              className="text-justify text-[25px] leading-10"
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am presently working as an intern at{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
              >
                HiCircle
              </a>{" "}
              Where i am responsible for implementing new function to the Mobile
              Application and also maintain the frontend aspect of the
              Application.
            </motion.p>
            <motion.p
              className="text-justify text-[25px] leading-10"
              variants={fadeIn("right", 0.4)}
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
        </div>
      </div>
    </div>
  );
};

export default About;
