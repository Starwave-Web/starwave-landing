import { useTranslations } from "next-intl";
import FAQCard from "./faq-card";

const FAQList = ({ activeId }: { activeId: string }) => {
  const t = useTranslations("faq.questions");
  return (
    <>
      {t.raw(activeId).map((question: any) => (
        <FAQCard
          key={question.question}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </>
  );
};

export default FAQList;
