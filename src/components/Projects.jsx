import React from 'react'
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from "../utils/variants";
import { projects } from "../constant";
import { github } from "../assets";
import { FaArrowRight } from "react-icons/fa"


const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
  liveLink,
  live,
}) => (
  <motion.div
    variants={fadeIn("right", 0.1 * index)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className=" bg-black p-5 rounded-2xl sm:w-[350px] w-full min-h-[430px]"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 justify-end flex m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center">
          <h3 className="text-white font-bold text-[24px] flex-1">{name}</h3>
          {live ? (
            <a
              href={liveLink}
              className='mr-10'
              style={{
                animation: `arrowLive 1.5s infinite linear`,
              }}
            >
              <FaArrowRight />
            </a>
          ) : (
            <a
                className='mr-10'
              style={{
                animation: `arrowLive 1.5s infinite linear`,
              }}
            >
              <FaArrowRight />
            </a>
          )}
        </div>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Projects = () => {
  return (
    <div id="portfolio" className='md:px-28 xs:px-10 px-3'>
      <div>
        <div className="w-full text-center relative">
          <h1 className="text-gradient h2">Portfolio</h1>
          <div className="w-[70px] h-[1px] center bg-white top-10"></div>
        </div>
        <div className="py-20">
          <div className='flex flex-wrap justify-center items-center gap-10 '>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects