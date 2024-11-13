import Header from "@/src/components/ui/header";

import Magnifier from "@/assets/images/magnifier.png";
import Illustration2 from "@/assets/images/illustration2.png";
import Illustration3 from "@/assets/images/illustration3.png";
import Illustration4 from "@/assets/images/illustration4.png";
import ServiceCard, { type ServiceCardVariants } from "../ui/service-card";
import { type StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

type ServiceType = {
  id: number;
  title: [string, string];
  illustration: StaticImageData;
  description: string;
  variant: ServiceCardVariants;
};



const Services = () => {
  const t = useTranslations("servicesSection");

  const services: ServiceType[] = [
    {
      id: t.raw('services')[0].id,
      title: t.raw('services')[0].title,
      illustration: Magnifier,
      description:
        t.raw('services')[0].description,
      variant: "grey",
    },
    {
      id: t.raw('services')[1].id,
      title: t.raw('services')[1].title,
      illustration: Illustration2,
      description:
      t.raw('services')[1].description,
      variant: "green",
    },
    {
      id: t.raw('services')[2].id,
      title: t.raw('services')[2].title,
      illustration: Illustration3,
      description:
      t.raw('services')[2].description,
      variant: "green",
    },
    {
      id: t.raw('services')[3].id,
      title: t.raw('services')[3].title,
      illustration: Illustration4,
      description:
      t.raw('services')[3].description,
      variant: "dark",
    },
  ];

  return (
    <section id="services" className="w-full scroll-mt-28">
      <Header
        title={t('title')}
        description={t('description')}
      />
      <div className="container mx-auto flex fle-row flex-wrap justify-center gap-10 mt-10 md:mt-20 mb-[70px] md:mb-[100px] px-5">
        {services.map((service, index) => (
          <ServiceCard
            id={service.id}
            key={service.title[0] + service.title[1] + index}
            title={service.title}
            illustration={service.illustration}
            description={service.description}
            variant={service.variant}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
