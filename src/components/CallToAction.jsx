"use client";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import starImage from "../assets/star.png";
import springImage from "../assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: null,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
	<section ref={sectionRef} className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
    <div className="container">
      <div className="section-heading relative">
      <h2 className='section-title'>Sign up for Free today!</h2>
      <p className='section-description mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
      <motion.img src={starImage} alt="Star" width={340} className="absolute -left-[390px] -top-[50px]" style={{translateY,}} />
      <motion.img src={springImage} alt="Star" width={340} className="absolute -right-[360px] -top-[2px]" style={{translateY,}} />
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <button className='btn btn-primary'>Get for Free</button>
        <button className='btn btn-text gap-1'><span>Learn more</span><ArrowRightIcon className="h-5 w-5" /></button>
      </div>
    </div>
  </section>
  )
}

export default CallToAction