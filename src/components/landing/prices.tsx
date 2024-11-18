import Header from "@/src/components/ui/header";
import PlanCard from "@/src/components/ui/plan-card";

import CustomQuoteLink from "../ui/custom-quote-link";
import { useTranslations } from "next-intl";
import GoToFAQButton from "../ui/go-to-faq-button";

type PlanType = {
  id: string;
  name: string;
  price: string;
  featureList: { isIncluded: boolean; featureName: string }[];
};
const Prices = () => {
  const t = useTranslations("prices");
  return (
    <section
      id="prices"
      className="w-full mb-[76px] md:mb-[208px] -scroll-mt-24 sm:-scroll-mt-5"
    >
      <div className="container mx-auto flex flex-col gap-[35px] md:gap-20">
        <Header
          title={t("pricingTitle")}
          description={t("pricingDescription")}
        />
        <div className="flex flex-col sm:flex-row gap-5 md:gap-10 px-5">
          {t.raw("plans").map((plan: PlanType) => (
            <PlanCard
              key={plan.id}
              id={plan.id}
              name={plan.name}
              price={plan.price}
              featureList={plan.featureList}
            />
          ))}
        </div>
        <div className="container lg:hidden mt-[29px]">
          <CustomQuoteLink />
        </div>
        <div className="flex gap-1.5 items-center flex-col lg:flex-row px-5 text-center md:text-left text-outlaw">
          {t("ctaGoToFAQ")}
          <GoToFAQButton />
        </div>
      </div>
    </section>
  );
};

export default Prices;
