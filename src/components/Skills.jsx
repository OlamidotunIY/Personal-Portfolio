import React from 'react'
import { skills } from "../constant"
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const SkillCard = ({name, icon, index}) => {
    return (
      <motion.div
        className="flex flex-col items-center justify-center md:gap-5 gap-2 cursor-pointer gradient md:min-w-[120px] min-w-[70px] pt-5 pb-2 round"
        variants={fadeIn("up", 0.1 * (index + 1))}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <img
          src={icon}
          alt={name}
          className="md:w-[50px] w-[30px]"
          style={{
            animation: `rotate 10s infinite linear`,
            animationDelay: "10s",
          }}
        />
        <h1 className="text-[14px] md:text-[16px]">{name}</h1>
      </motion.div>
    );
}
const Skills = () => {
  return (
    <div id="skills">
      <div className="w-full mt-20">
        <div className="w-full text-center relative">
          <h1 className="text-gradient h2">Skills</h1>
          <div className="w-[70px] h-[1px] center bg-white top-10"></div>
        </div>
        <div className="flex gap-14 flex-wrap py-[120px] px-5 justify-center md:px-20 lg:px-28">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;