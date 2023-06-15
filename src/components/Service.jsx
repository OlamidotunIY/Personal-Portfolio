import React from "react";
import { services } from "../constant"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/variants"



const ServiceCard = ({icon, title, desc, index}) => {
    const Icon = icon;
    return (
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
          className="w-[250px] min-h-[300px] gradient rounded-xl p-5 sm:w-[350px] sm:min-h-[350px]"
        >
          <div className="flex flex-col h-[300px] items-center justify-center gap-6 sm:gap-10">
            <Icon className="text-[40px]" />
            <h1 className="sm:text-[32px] text-[22px] text-black font-bold">{title}</h1>
            <p className="text-[10px] sm:text-[15px] leading-3 text-justify font-tertiary sm:leading-7">
              {desc}
            </p>
          
          </div>
        </Tilt>
      </motion.div>
    );
};


const Service = () => {
  return (
    <div id="services" className="mt-20 mb-10 lg:px-24 px-10">
      <div>
        <div className="w-full text-center relative">
          <h1 className="text-gradient h2">Services</h1>
          <div className="w-[70px] h-[1px] center bg-white top-10"></div>
        </div>
        <div className="flex items-center justify-center py-20">
          <div className="mt-16 flex flex-wrap gap-10 justify-center">
            {services.map((service, index) => {
              return <ServiceCard key={index} {...service} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
