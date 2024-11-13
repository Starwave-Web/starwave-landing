import Header from "@/src/components/ui/header";
import WorkStepCard from "../ui/work-step-card";
import { useTranslations } from "next-intl";


const HowWeWork = () => {
  const t = useTranslations("howWeWork");

  return (
    <section
      id="howWeWork"
      className="w-full mb-[76px] md:mb-[140px] scroll-mt-28"
    >
      <div className="container flex flex-col gap-[35px] md:gap-20 mx-auto">
        <Header
          titleId="howwework"
          title={"Hogyan dolgozunk?"}
          description={t("description")}
        />
        <div className="flex flex-col gap-5 md:gap-[30px] px-5">
          {t
            .raw("workSteps")
            .map(
              (workStep: {
                stepNr: string;
                title: string;
                description: string;
              }) => (
                <WorkStepCard
                  key={workStep.stepNr}
                  stepNr={workStep.stepNr}
                  title={workStep.title}
                  description={workStep.description}
                />
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
