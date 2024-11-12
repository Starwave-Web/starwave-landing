import Header from "@/src/components/ui/header";
import PlanCard from "@/src/components/ui/plan-card";

import CustomQuoteLink from "../ui/custom-quote-link";
import { useTranslations } from "next-intl";

// const plans = [
//   {
//     id: "basic",
//     name: "Egyösszegű",
//     price: "300.000 Ft",
//     featureList: [
//       { isIncluded: true, featureName: "Választható design, egyedi kód" },
//       { isIncluded: true, featureName: "+ Havi 3.500 Ft üzemeltetési díj " },
//       { isIncluded: true, featureName: "+ 10.000 Ft oldalanként 5 oldal után" },
//       { isIncluded: true, featureName: "+ Havi 6.000 Ft végtelen változtatás" },
//       { isIncluded: false, featureName: "24/7 üzemeltetés" },
//       { isIncluded: false, featureName: "Folyamatos frissítés" },
//     ],
//   },
//   {
//     id: "premium",
//     name: "Havonta",
//     price: "15.000 Ft",
//     featureList: [
//       { isIncluded: true, featureName: "Választható design, egyedi kód" },
//       { isIncluded: true, featureName: "Tárhely" },
//       { isIncluded: true, featureName: "+ 10.000 Ft oldalanként 5 oldal után" },
//       { isIncluded: true, featureName: "Végtelen változtatás" },
//       { isIncluded: true, featureName: "24/7 üzemeltetés" },
//       { isIncluded: true, featureName: "Folyamatos frissítés" },
//     ],
//   },
//   {
//     id: "custom",
//     name: "Egyedi",
//     price: "Egyedi árajánlat",
//     featureList: [
//       { isIncluded: true, featureName: "Egyedi design, egyedi kód" },
//       { isIncluded: true, featureName: "Tárhely" },
//       { isIncluded: true, featureName: "Oldalak száma egyedi ajánlat alapján" },
//       { isIncluded: true, featureName: "Végtelen változtatás" },
//       { isIncluded: true, featureName: "24/7 üzemeltetés" },
//       { isIncluded: true, featureName: "Folyamatos frissítés" },
//     ],
//   },
// ];
type PlanType = {
  id: string,
  name: string,
  price: string,
  featureList: { isIncluded: boolean, featureName: string }[],
}
const Prices = () => {
  const t = useTranslations("prices")
  return (
    <section id="prices" className="w-full mb-[76px] md:mb-[208px] -scroll-mt-24 sm:-scroll-mt-5">
      <div className="container mx-auto flex flex-col gap-[35px] md:gap-20">
        <Header
          title={t('pricingTitle')}
          description={t('pricingDescription')}
        />
        <div className="flex flex-col sm:flex-row gap-5 md:gap-10 px-5">
         {/* {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              id={plan.id}
              name={plan.name}
              price={plan.price}
              featureList={plan.featureList}
            />
          ))} */}
          {t.raw('plans').map((plan: PlanType) => (
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
          <CustomQuoteLink/>
        </div>
      </div>
    </section>
  );
};

export default Prices;
