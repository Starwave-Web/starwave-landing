import Header from "@/components/ui/header";
import PlanCard from "@/components/ui/plan-card";

const plans = [
  {
    id: "basic",
    name: "Alap",
    price: "125.000 Ft",
    featureList: [
      { isIncluded: true, featureName: "Választható design, egyedi kód" },
      { isIncluded: true, featureName: "3 közös átnézés" },
      { isIncluded: false, featureName: "Weboldal szöveg, tartalom" },
      { isIncluded: true, featureName: "Domain, Tárhely" },
      { isIncluded: false, featureName: "Google Analytics" },
      { isIncluded: true, featureName: "12/5 üzemeltetés" },
    ],
  },
  {
    id: "premium",
    name: "Prémium",
    price: "250.000 Ft",
    featureList: [
      { isIncluded: true, featureName: "Választható design, egyedi kód" },
      { isIncluded: true, featureName: "6 közös átnézés" },
      { isIncluded: true, featureName: "Weboldal szöveg, tartalom" },
      { isIncluded: true, featureName: "Domain, Tárhely" },
      { isIncluded: true, featureName: "Google Analytics" },
      { isIncluded: true, featureName: "12/5 üzemeltetés" },
    ],
  },
  {
    id: "custom",
    name: "Egyedi",
    price: "Egyedi árajánlat",
    featureList: [
      { isIncluded: true, featureName: "Egyedi design, egyedi kód" },
      { isIncluded: true, featureName: "Korlátlan átnézés" },
      { isIncluded: true, featureName: "Weboldal szöveg, tartalom" },
      { isIncluded: true, featureName: "Domain, Tárhely" },
      { isIncluded: true, featureName: "Google Analytics" },
      { isIncluded: true, featureName: "24/7 üzemeltetés" },
    ],
  },
];

const Prices = () => {
  return (
    <section className="w-full mb-[208px]">
        <div className="container mx-auto flex flex-col gap-20">
        <Header
        title="Árak"
        description={
          "Válaszd ki ajánlataink közül azt amely legjobban\n támogatná vállalkozásod online fejlesztését."
        }
      />
      <div className="flex gap-10">
        {plans.map((plan) => <PlanCard key={plan.id} id={plan.id} name={plan.name} price={plan.price} featureList={plan.featureList} />)}
      </div>
        </div>
      
    </section>
  );
};

export default Prices;
