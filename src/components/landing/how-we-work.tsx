"use client"
import Header from "@/src/components/ui/header";
import WorkStepCard from "../ui/work-step-card";
import { useTranslations } from "next-intl";
import HowWeWorkSelector from "../ui/how-we-work-selector";
import { useMemo, useState } from "react";


const HowWeWork = () => {
  const [activeId, setActiveId] = useState("webdev");
  const t = useTranslations("howWeWork");
  const workSteps = t.raw("workSteps")[activeId] || [];

  
    const options = useMemo(
      () => [
        { id: "webdev", title: t("hwwbuttons.webdev") },
        { id: "onlineMarketing", title: t("hwwbuttons.onlineMarketing") },
      ],
      [t]
    );

  return (
    <section
      id="howWeWork"
      className="w-full mb-[76px] md:mb-[140px] scroll-mt-28"
    >
      <div className="container flex flex-col gap-[35px] md:gap-20 mx-auto">
        <Header
          titleId="howwework"
          title={"Hogyan dolgozunk?"}
          description=""
        />
        <HowWeWorkSelector
          options={options}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <div className="flex flex-col gap-5 md:gap-[30px] px-5">
          {workSteps
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
