"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TopRightArrow from "@/components/icons/top-right-arrow";
import Image, { type StaticImageData } from "next/image";
import { Button } from "./button";
export type ServiceCardVariants = "grey" | "green" | "dark";

const ServiceCard = ({
  id,
  title,
  illustration,
  description,
  variant,
}: {
  id:number,
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
    <div className="flip-card h-[480px] min-[353px]:h-[450px] min-[398px]:h-[430px] min-[459px]:h-[390px] min-[470px]:h-[410px] sm:h-[330px] w-[580px]">
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
            <div className="flex flex-col items-start justify-between h-full w-full sm:w-auto">
              <div className="flex flex-col items-start">
                {title.map((titlet, index) => (
                  <h3
                    key={titlet + index}
                    className="text-h3-mobile whitespace-nowrap md:text-h3 text-black px-[7px] rounded-[7px] group-data-[variant=grey]:bg-primary-green group-data-[variant=green]:bg-white group-data-[variant=dark]:bg-primary-green w-fit"
                  >
                    {titlet}
                  </h3>
                ))}
              </div>
              <div className="flex w-full justify-between min-[398px]:items-end flex-col-reverse min-[398px]:flex-row gap-8 min-[398px]:gap-0">
                <button
                  className="flex items-center gap-[15px]"
                  onClick={handleFlipAnimation}
                >
                  <div className="h-[41px] w-[41px] rounded-full bg-black group-data-[variant=dark]:bg-white flex justify-center items-center">
                    <TopRightArrow className="fill-primary-green group-data-[variant=dark]:fill-black" />
                  </div>
                  <p className="text-outlaw text-black group-data-[variant=dark]:text-white hidden sm:block">
                    Bővebben
                  </p>
                </button>
                <div data-id={id} className="w-[220px] sm:hidden self-center">
                  <Image src={illustration} alt={title[0] + "_illustartion"} />
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <Image src={illustration} alt={title[0] + "_illustartion"} />
            </div>
          </div>
        </div>
        <div
          data-variant={variant}
          className="flip-card-back w-[100%] h-[100%]  rounded-[45px] group border border-black bg-black"
        >
          <div className="flex flex-col justify-between rounded-[45px] p-[30px] w-[100%] h-[98%] group-data-[variant=grey]:bg-primary-grey group-data-[variant=green]:bg-primary-green group-data-[variant=dark]:bg-primary-dark">
            <p className="text-p-mobile text-black group-data-[variant=dark]:text-white whitespace-pre-wrap">
              {description}
            </p>
            <Button
              onClick={handleFlipAnimation}
              className="self-end bg-black text-primary-green group-data-[variant=dark]:bg-primary-green group-data-[variant=dark]:text-black"
            >
              Vissza
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
