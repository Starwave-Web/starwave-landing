import Header from "@/src/components/ui/header";
import TestimonialCard from "../ui/testimonial-card";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { useTranslations } from "next-intl";


const Testimonials = () => {
  const t = useTranslations('testimonialsSection')

  return (
    <section id="testimonials" className="w-full mb-[60px] md:mb-[140px] scroll-mt-28">
      <div className="container flex flex-col gap-10 md:gap-20 mx-auto">
        <Header
          title={t('title')}
          description={t('description')}
        />
        <div className="bg-primary-dark rounded-[45px] flex flex-col gap-40 min-h-[625px] mx-5">
          <Carousel
            opts={{
              startIndex: 2,
              align: "center",
            }}
            className="w-full mx-auto my-auto"
          >
            <CarouselContent className="px-5">
              {t.raw('testimonials').map((testimonial: {name: string, occupation: string, description: string}, index: number) => (
                <CarouselItem
                  className="md:basis-1/2"
                  key={testimonial.name + index}
                >
                  <TestimonialCard
                    name={testimonial.name}
                    occupation={testimonial.occupation}
                    description={testimonial.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-between px-5 mt-20">
              <CarouselPrevious btnLocation="testimonials" />
              <CarouselDots btnLocation="testimonials" />
              <CarouselNext btnLocation="testimonials"/>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
