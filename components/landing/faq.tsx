import FAQCard from "../ui/faq-card"


const questions = [
    {
        question:"Mennyi idő egy új weboldal elkészítése?",
        answer:"A pontos ütemezéshez látnunk kell a funkciókat, oldalak számát. Azzal tudsz számolni, hogy általában 3-4 hét alatt mindennel elkészülünk.",
    },
    {
        question:"Webshopokkal is foglalkoztok?",
        answer:"Csapatunk landing page-ek optimalizálására specializálódott. Jelenleg webshopokkal nem foglalkozunk.",
    },
    {
        question:"Van már weboldalam. Felújítást vállaltok?",
        answer:"Csak saját fejlesztésű weboldalakra vállalunk garanciát, ezért felújítást nem végzünk.",
    },
    {
        question:"Milyen technológiákat használtok?",
        answer:"Next.js, Tailwind, Netlify, Google Analytics",
    },
    {
        question:"Miért jobb egy kódolt weboldal mint egy Wordpress alapú?",
        answer:"Egy kódolt weboldal gyorsabb, biztonságosabb, testreszabhatóbb és könnyebben optimalizálható egyedi igények szerint, mint egy WordPress alapú oldal.",
    },
    
]



const FAQ = () => {
  return (
    <section id="faq" className="w-full scroll-mt-28">
        <div className="container px-5 flex flex-col mx-auto gap-[32px] mb-[96px] md:mb-[100px]">
            {questions.map(question => <FAQCard key={question.question} question={question.question} answer={question.answer}/>)}
        </div>
    </section>
  )
}

export default FAQ