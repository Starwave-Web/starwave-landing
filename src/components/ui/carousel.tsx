"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import { useEffect } from "react";
import CarouselArrow from "../icons/carousel-arrow";
import sendToMixpanel from "@/src/lib/sendToMixpanel";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  onDotButtonClick: (index: number) => void;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }
      setSelectedIndex(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    const onDotButtonClick = React.useCallback(
      (index: number) => {
        if (!api) return;
        api.scrollTo(index);
      },
      [api]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          onDotButtonClick,
          selectedIndex,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { btnLocation: string }
>(({ className, variant = "outline", size = "icon",btnLocation, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  const handleOnClick = () => {
    sendToMixpanel("carousel_prev_clicked",{location: btnLocation})
    scrollPrev()
  }

  return (
    <button
      ref={ref}
      className={cn(
        className
      )}
      disabled={!canScrollPrev}
      onClick={handleOnClick}
      {...props}
    >
      <CarouselArrow  data-disabled={!canScrollPrev} className="fill-white data-[disabled=true]:fill-[#5E5E65] rotate-180"/>
      <span className="sr-only">Previous slide</span>
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { btnLocation: string }
>(({ className, variant = "outline", size = "icon", btnLocation, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  const handleOnClick = () => {
    sendToMixpanel("carousel_next_clicked",{location: btnLocation})
    scrollNext()
  }

  return (
    <button
      ref={ref}
      className={cn(
        className
      )}
      disabled={!canScrollNext}
      onClick={handleOnClick}
      {...props}
    >
      <CarouselArrow data-disabled={!canScrollNext} className="fill-white data-[disabled=true]:fill-[#5E5E65]" />
      <span className="sr-only">Next slide</span>
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

const CarouselDots = React.forwardRef<
  HTMLDivElement, 
  React.HTMLAttributes<HTMLDivElement>  & { btnLocation: string }
>(({ className, btnLocation, ...props }, ref) => {
  const { api, onDotButtonClick, selectedIndex } = useCarousel();
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);


  const onBtnClick = (index: number, selectedIndex:  number) => {
    sendToMixpanel("carousel_dot_clicked",{location: btnLocation})
    onDotButtonClick(index)
    console.log(index)
    console.log(selectedIndex)
    console.log(index === selectedIndex)
  }

  useEffect(() => {
    setScrollSnaps(api?.scrollSnapList() ?? []);
  }, [api]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <div
          key={index}
          onClick={() => onBtnClick(index, selectedIndex)}
          className={cn(
            "h-2 w-2 rounded-full bg-primary-grey ",
            index === selectedIndex && "h-3 w-3 bg-primary-green",
            "embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )
          )}
        />
      ))}
    </div>
  );
});
CarouselDots.displayName = "CarouselDots";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
};
