import Header from "@/components/ui/header";
import TestimonialCard from "../ui/testimonial-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Kovács András",
    occupation: "Marketing Manager",
    description:
      "Lenyűgözött a csapat kreativitása és szakértelme! A webdesign teljes mértékben megfelelt az elvárásainknak, és az oldalunk konverziói jelentősen megnőttek. Mindenképpen ajánlom őket mindenkinek, aki profi webfejlesztő csapatot keres.",
  },
  {
    name: "Szabó Éva",
    occupation: "Vállalkozó",
    description:
      "Professzionális és gyors szolgáltatás! A teljes folyamatot gördülékenyen vezették, és mindig figyelembe vették az igényeimet. Az új weboldalunk fantasztikus lett, az ügyfeleink is imádják. Köszönöm a remek munkát!",
  },
  {
    name: "Tóth Gábor",
    occupation: "Ügyvezető igazgató",
    description:
      "A csapat nagyon jól megértette az üzleti igényeinket és kiváló weboldalt készített számunkra. Az implementáció gyors és hibátlan volt, a weboldalunk már az első naptól kezdve hozza az eredményeket. Nagyon elégedettek vagyunk!",
  },
  {
    name: "Nagy Petra",
    occupation: "Digitális Stratéga",
    description:
      "Kivételes figyelmet kaptunk a projekt minden szakaszában. A tesztelési fázis során is alaposan figyeltek minden részletre, ami az oldal hibamentes működését garantálja. A végeredmény minden várakozásunkat felülmúlta. Nagyszerű csapat!",
  },
  {
    name: "Varga Bence",
    occupation: "Projektmenedzser",
    description:
      "Az új weboldal üzemeltetése zökkenőmentesen indult, hála a precíz és részletes átadásnak. Az oldal gyors és felhasználóbarát, az analitikák is kiválóan működnek. Elégedett vagyok a szolgáltatással és biztosan dolgozunk még együtt.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full mb-[140px]">
      <div className="container flex flex-col gap-20 mx-auto">
        <Header
          title="Visszajelzések"
          description={
            "Ügyfeleink elégedettsége számunkra a legfontosabb,\n néhány visszajelzés az elmúlt időszakból:"
          }
        />
        <div className="bg-primary-dark rounded-[45px] flex flex-col gap-40 min-h-[625px]">
          <Carousel
            opts={{
                startIndex: 2,
              align: "center",
            }}
            className="w-full mx-auto my-auto"
          >
            <CarouselContent className="">
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="basis-[63%]" key={testimonial.name + index}>
                  <TestimonialCard
                    name={testimonial.name}
                    occupation={testimonial.occupation}
                    description={testimonial.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;