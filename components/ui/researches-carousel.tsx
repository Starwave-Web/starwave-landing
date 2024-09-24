import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Link from "next/link"
import { Button } from "./button"


const ResearchesCarousel = ({researches}: {researches: {description: string, link: string}[]}) => {
  return (
    <Carousel className="w-full max-w-full lg:hidden mt-[35px] md:mt-20 px-5">
      <CarouselContent className="gap-5 px-4">
        {researches.map((research, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 bg-primary-dark rounded-[45px] flex items-center justify-center p-[50px]">
            <div className="flex flex-col justify-between gap-5">
                <p className="text-p-mobile text-white">{research.description}</p>
                <Link href={research.link}>
                  <Button
                    className="bg-transparent text-outlaw text-primary-green border-none p-0"
                    variant="link"
                  >
                    Bővebben
                  </Button>
                </Link>
              </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default ResearchesCarousel