import { Button } from "@/components/ui/button";
import FeatureListItem from "@/components/ui/feature-list-item";
import { cn } from "@/lib/utils";

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
    <div className="bg-black pb-[3px] rounded-[45px] w-1/3">
      <div
        className={cn(
          "py-[29.5px] px-[52px] flex flex-col items-center gap-5 border border-black rounded-[45px]",
          id === "premium" ? "bg-primary-green" : "bg-primary-grey"
        )}
      >
        <div className="flex flex-col gap-6 items-center">
          <h3
            data-variant={id}
            className="text-h2 text-white bg-primary-dark rounded-[7px] px-[7px] data-[variant=premium]:text-black data-[variant=premium]:bg-primary-grey "
          >
            {name}
          </h3>
          <p className="text-p-mobile text-black">Indulóár</p>
          <h1 className="whitespace-nowrap  text-h2 text-black">{price}</h1>
          <p className="text-p-mobile text-black">
            {id === "custom"
              ? "+ Egyedi"
              : id === "basic"
              ? "+ Havi 3.500 Ft"
              : "+ Havi 6.000 Ft"}{" "}
            üzemeltetési díj
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
        <Button
          className={cn("py-[20px] px-[35px] h-[68px]",
            id === "premium"
              ? "bg-primary-grey text-black"
              : "bg-primary-dark text-white"
          )}
        >
          Ajánlatkérés
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;
