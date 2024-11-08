import { Button } from "@/src/components/ui/button";
import FeatureListItem from "@/src/components/ui/feature-list-item";
import { cn } from "@/src/lib/utils";
import GiveQuoteIcon from "./give-quote-button";
import GiveQuoteButton from "./give-quote-button";

const PlanCard = ({
  id,
  name,
  price,
  featureList,
}: {
  id: string;
  name: string;
  price: string;
  featureList: { isIncluded: boolean; featureName: string }[];
}) => {
  return (
    <div
      data-variant={id}
      className="bg-black pb-[3px] rounded-[45px] w-full sm:w-1/2 lg:w-1/3 group data-[variant=custom]:hidden lg:data-[variant=custom]:block"
    >
      <div
        className={cn(
          "py-[29.5px] px-[29.5px] md:px-[52px] flex flex-col items-center justify-between gap-8 border border-black rounded-[45px] h-full",
          id === "premium" ? "bg-primary-green" : "bg-primary-grey"
        )}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col gap-6 items-center ">
            <h3 className="text-h2-mobile md:text-h2 text-white bg-primary-dark rounded-[7px] px-[7px] group-data-[variant=premium]:text-black group-data-[variant=premium]:bg-primary-grey ">
              {name}
            </h3>
            <p className="text-p-mobile text-black group-data-[variant=premium]:hidden">Indulóár</p>
            <p className="text-p-mobile text-black hidden group-data-[variant=premium]:block">Havonta</p>
            <h1 className="text-h2-mobile md:text-h2 text-black text-center whitespace-nowrap group-data-[variant=custom]:whitespace-normal">
              {price}
            </h1>
            <p className="text-p-mobile text-black text-center">
              {id === "custom"
                ? "+ Egyedi üzemeltetési díj"
                : id === "basic"
                ? "+ Havi 3.500 Ft üzemeltetési díj"
                : "Minimum 1 éves szerződés"}
              
            </p>
          </div>
          <div className="flex flex-col gap-3 max-w-[283px]">
            {featureList.map((featureElement) => (
              <FeatureListItem
                key={featureElement.featureName}
                featureElement={featureElement}
              />
            ))}
          </div>
        </div>
        <GiveQuoteButton id={id}/>
      </div>
    </div>
  );
};

export default PlanCard;
