"use client";

import { useMemo, useState } from "react";
import FAQSelector from "../ui/faq-selector";
import Header from "../ui/header";
import { useTranslations } from "next-intl";
import FAQList from "../ui/faq-list";


// TODO: IMPLEMET A MEMO !!!


const FAQ = () => {
  const [activeId, setActiveId] = useState("prices");
  const t = useTranslations('faq')

  const options = useMemo(
    () => [
      { id: "prices", title: t("categories.prices") },
      { id: "subscriptions", title: t("categories.subscriptions") },
      { id: "webpage", title: t("categories.webpage") },
    ],
    [t]
  );
  return (
    <section id="FAQ" className="w-full scroll-mt-28">
      <Header
        title={t('title')}
        description={
          t('description')
        }
      />
      <div className="container px-5 flex flex-col mx-auto gap-[32px] mb-[96px] md:mb-[100px] mt-10 md:mt-20">
        <FAQSelector
          options={options}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <FAQList activeId={activeId}/>
      </div>
    </section>
  );
};

export default FAQ;
