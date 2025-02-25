"use client";
import Header from "@/src/components/ui/header";
import PlanCard from "@/src/components/ui/plan-card";

import { useTranslations } from "next-intl";
import GoToFAQButton from "../ui/go-to-faq-button";
// import { useStripePrices } from "@/src/hooks/stripe";
import PlansSelector from "./plans-selector";
import { useMemo, useState } from "react";
import DetailedPricesList from "../ui/detailed-prices-list";

type PlanType = {
  id: string;
  name: string;
  price: string;
  featureList: { isIncluded: boolean; featureName: string }[];
};
const Prices = () => {
  const [activeId, setActiveId] = useState("monthly");
  const t = useTranslations("prices");
  const plans = t.raw("plans")[activeId] || [];

  const options = useMemo(
    () => [
      { id: "monthly", title: t("selectPeriod.monthly") },
      { id: "yearly", title: t("selectPeriod.yearly") },
    ],
    [t]
  );
  // const { prices, loading, error } = useStripePrices();

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  // console.log(prices);

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
        <div className="container px-5 flex flex-col mx-auto gap-[32px]">
        <PlansSelector
          options={options}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <div className="flex flex-col sm:flex-row gap-5 md:gap-10">
          {plans.map((plan: PlanType) => (
            <PlanCard
              activeId={activeId}
              key={plan.id}
              id={plan.id}
              name={plan.name}
              price={plan.price}
              featureList={plan.featureList}
            />
          ))}
        </div>
        <div>
          <DetailedPricesList/>
        </div>
        <div className="flex gap-1.5 items-center flex-col lg:flex-row px-5 text-center md:text-left text-outlaw">
          {t("ctaGoToFAQ")}
          <GoToFAQButton />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
