import Header from "../ui/header";
import ResearchesCarousel from "../ui/researches-carousel";
import GoToBlogArticleButton from "../ui/go-to-blog-article-button";
import { useTranslations } from "next-intl";

const Researches = () => {
  const t = useTranslations("researchesSection");
  return (
    <section
      id="researches"
      className="w-full mb-[45px] md:mb-[117px] scroll-mt-28"
    >
      <div className="container mx-auto">
        <Header title={t("title")} description={t("description")} />
        <ResearchesCarousel researches={t.raw("researches")} />
        <div className="rounded-[45px] px-[60px] py-[70px] bg-primary-dark mt-[80px] hidden lg:flex mx-5">
          {t
            .raw("researches")
            .map(
              (
                research: { id: string; description: string; link: string },
                index: number
              ) => (
                <div key={research.link + index} className="flex">
                  <div className="flex flex-col justify-between gap-5 w-[210px] min-[1280px]:w-[286px]">
                    <p className="text-p text-white">{research.description}</p>
                    <GoToBlogArticleButton research={research} />
                  </div>
                  {index < t.raw("researches").length - 1 && (
                    <div className="h-full w-[1px] bg-white mx-16" />
                  )}
                </div>
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default Researches;
