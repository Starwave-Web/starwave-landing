"use client"

import {  useState } from "react";
import { motion } from "framer-motion";
import TopRightArrow from "@/components/icons/top-right-arrow";
import Image, { type StaticImageData } from "next/image";
import { Button } from "./button";
export type ServiceCardVariants = "grey" | "green" | "dark";

const ServiceCard = ({
  title,
  illustration,
  description,
  variant,
}: {
  title: [string, string];
  illustration: StaticImageData;
  description: string;
  variant: ServiceCardVariants;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipAnimation = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div className="flip-card h-[310px] w-[600px]">
      <motion.div
        className="flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          data-variant={variant}
          className="flip-card-front w-[100%] h-[100%] rounded-[45px] group border border-black bg-black"
        >
          <div className="p-[50px] rounded-[45px]  w-[100%] h-[98%] group-data-[variant=grey]:bg-primary-grey group-data-[variant=green]:bg-primary-green group-data-[variant=dark]:bg-primary-dark flex justify-between items-center">
            <div className="flex flex-col items-start justify-between h-full">
              <div className="flex flex-col items-start">
                {title.map((titlet, index) => (
                  <h3 key={titlet + index} className="text-h3 text-black px-[7px] rounded-[7px] group-data-[variant=grey]:bg-primary-green group-data-[variant=green]:bg-white group-data-[variant=dark]:bg-primary-green">
                    {titlet}
                  </h3>
                ))}
              </div>
              <button
                className="flex items-center gap-[15px]"
                onClick={handleFlipAnimation}
              >
                <div className="h-[41px] w-[41px] rounded-full bg-black group-data-[variant=dark]:bg-white flex justify-center items-center">
                  <TopRightArrow className="fill-primary-green group-data-[variant=dark]:fill-black" />
                </div>
                <p className="text-outlaw text-black group-data-[variant=dark]:text-white">
                  Bővebben
                </p>
              </button>
            </div>
            <div>
                <Image src={illustration} alt={title[0] + "_illustartion"}/>
            </div>
          </div>
        </div>
        <div
          data-variant={variant}
          className="flip-card-back w-[100%] h-[100%]  rounded-[45px] group border border-black bg-black"
          
        >
          <div className="flex flex-col rounded-[45px] p-[30px] w-[100%] h-[98%] group-data-[variant=grey]:bg-primary-grey group-data-[variant=green]:bg-primary-green group-data-[variant=dark]:bg-primary-dark">
            <p className="text-p-mobile text-black group-data-[variant=dark]:text-white whitespace-pre-wrap">
              {description}
            </p>
            <Button onClick={handleFlipAnimation} className="self-end bg-black text-primary-green group-data-[variant=dark]:bg-primary-green group-data-[variant=dark]:text-black">Vissza</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
