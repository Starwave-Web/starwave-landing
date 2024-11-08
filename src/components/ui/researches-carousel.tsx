import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/src/components/ui/carousel"

import GoToBlogArticleButton from "./go-to-blog-article-button"


const ResearchesCarousel = ({researches}: {researches: {id: string, description: string, link: string}[]}) => {
  return (
    <Carousel className="w-full max-w-full lg:hidden mt-[35px] md:mt-20 px-5">
      <CarouselContent className="gap-5 px-4">
        {researches.map((research, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 bg-primary-dark rounded-[45px] flex items-center justify-center p-[50px]">
            <div className="flex flex-col justify-between gap-5">
                <p className="text-p-mobile text-white">{research.description}</p>
                <GoToBlogArticleButton research={research}/>
              </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default ResearchesCarousel