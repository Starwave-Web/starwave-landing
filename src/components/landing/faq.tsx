"use client";

import { useState } from "react";
import FAQCard from "../ui/faq-card";
import FAQSelector from "../ui/faq-selector";
import Header from "../ui/header";

const options = [
  { id: "prices", title: "Árak" },
  { id: "subscriptions", title: "Előfizetések" },
  { id: "webpage", title: "Weboldal" },
];

const questions = {
    prices: [
        {
          question: "Meddig tart az előfizetés?",
          answer:
            "Az előfizetési terv legalább 12 hónapra szól, és ezután havonta megújul. A 12 hónap letelte után bármikor lemondható. Ha lemondod, a weboldalt nem tarthatod meg (különben mindenki ezt csinálná, és mi bezárhatnánk a boltot!).",
        },
        {
          question: "Mi történik, ha lemondom a 12 hónap letelte után és vissza szeretnék térni?",
          answer: "Egy új 12 hónapos szerződést kell aláírnod.",
        },
        {
          question: "Mi történik, ha a 12 hónap lejárta előtt mondom le?",
          answer:
            "Ha a 12 hónap letelte előtt mondod le, akkor a weboldal teljes árát 300.000 Ft-ot kell kifizetni, mínusz az eddig befizetett összegek. Mi a hosszú távú üzelti kapcsolatokban vagyunk érdekeltek, szeretnénk, ha ügyfeleink is osztoznának velünk ebben az elvben.",
        },
        {
          question: "Hogyan kezelitek a késedelmes fizetéseket?",
          answer:
            "Minden számlához 7 napos türelmi idő tartozik. Ha a számla 7 napon belül nem kerül kifizetésre, 3.000 Ft késedelmi díjat számítunk fel. Ha előfizető vagy, és több havi számla halmozódik fel, a szerződést felmondhatjuk, és az ügyfélnek a weboldal teljes árát kell kifizetnie. Általában rugalmasak és megértőek vagyunk, és sokszor segítséget is nyújtunk, de ha nincs kommunikáció vagy válasz az üzeneteinkre, kénytelenek vagyunk lépéseket tenni annak érdekében, hogy megkapjuk a fizetséget az időnkért és a munkánkért.",
        },
        {
          question: "Hogyan történik a fizetés és milyen fizetési módokat fogadtok el?",
          answer:
            "Az e-mailes számlákat a Stripe segítségével küldjük, amely tartalmaz egy biztonságos oldalt a fizetési információk megadására. Az előfizetések hitelkártyával vagy betéti kártyával fizethetők. Az egyszeri fizetési projektek esetében banki átutalás lehetséges. Készpénzes fizetést jelenleg nem tudunk fogadni.",
        },
        {
          question: "Az extra oldalak ára egyszeri vagy havi díjas?",
          answer:
            "Az extra oldalak ára 10.000 Ft egyszeri díj, nem ismétlődő. Ha 3 extra oldalra van szükséged, az 30.000 Ft, és kész.",
        },
        {
          question: "Vannak visszatérítések?",
          answer:
            "Ha szerződést írsz alá (akár egyszeri összeg, akár előfizetés esetén), és nem tudunk olyat készíteni, amivel 100%-ban elégedett vagy, akkor visszatérítjük a befizetett kezdő összeget. Ha azonban a munkafolyamat a weboldal fejlesztési fázisába ér, nem áll módunkban visszatéríteni a befizetett összeget, kivéve saját belátásunk alapján.",
        },
      ],
      subscriptions: [
        {
          question: "Ha letelik a 12 hónapos minimum időszak, folytatnom kell a fizetést utána is?",
          answer:
            "Igen, az előfizetések határozatlan időre szólnak. A 12 hónapos minimum után is minden hónapban fizetni kell. Általában 2-3 évbe telik, mire annyi bevételünk lesz, mintha egy összegben fizetted volna ki az oldalt. Ideális esetben szeretnénk, ha az ügyfelek legalább 5 évig maradnának, hogy pénzügyileg kifizetődő legyen számunkra. Ezen a ponton a weboldalad már havonta több értéket fog termelni, mint amennyit az előfizetésed ér, így gyakorlatilag magát fizeti meg.",
        },
        {
          question: "Kivásárolhatom magam az előfizetésből a minimum időszak letelte után?",
          answer:
            "Nem, nincs kivásárlási lehetőség, hogy megszűnjön a havi előfizetés. Ahogy egy másik kérdésben már említettük, 2-3 évbe telik, mire annyit keresünk, mint egy összegben eladott oldal esetén. A havi rendszeres bevételre a pénzügyi stabilitás érdekében támaszkodunk, így nem kell folyamatosan eladnunk, hogy fedezni tudjuk a költségeinket. Ezáltal több időt fordíthatunk meglévő ügyfeleink oldalaira. Ha minden ügyfél havonta kivásárolná magát, a modell összeomlana, és vele együtt a szolgáltatásunk minősége is.",
        },
        {
          question: "Hozzáadhatom a korlátlan szerkesztési és támogatási lehetőséget az egyszeri összegű csomaghoz?",
          answer:
            "Igen! Kínálunk havi 6.000 Ft-ért egy előfizetéses bővítést, amely korlátlan szerkesztést és támogatást biztosít. Ez is 12 hónapos minimum kötelezettséggel jár. Nincs lehetőség arra, hogy minden második hónapban ki-be kapcsolgasd. Ha 12 hónap után lemondod, és később vissza akarod állítani, újabb 12 hónapos kötelezettségvállalást kell aláírnod.",
        },
        {
          question: "Mi a különbség az egyszeri összeg és az előfizetés között?",
          answer:
            "A legnagyobb különbség a hosszú távú és rövid távú költségek között van. Előfizetéssel idővel többet fogsz fizetni, de ezek kis, kezelhető és megfizethető havi összegek. Az egyszeri összeg esetében minden költséget előre kifizetsz, így hosszú távon pénzt takarítasz meg, mert a tervezési és fejlesztési díjat is előre rendezted. A választás attól függ, hogy milyen a pénzügyi helyzeted és a hosszú távú céljaid. Ha nem szeretnél nagy összeget költeni egyszerre, és preferálod a havi csomag szolgáltatásait, akkor az előfizetés a legjobb választás. Ha nincs szükséged a havi szolgáltatáscsomagokra, kifizetheted előre az összeget, és hosszú távon spórolhatsz.",
        },
        {
          question: "Az SEO része a csomagoknak?",
          answer:
            "Igen is meg nem is. Az SEO két részből áll: On-page és Off-page SEO. Az On-page SEO az, ami az oldalon van, például a tartalom, a betöltési idők, az akadálymentesség és az elrendezés. Az Off-page SEO pedig minden, ami az oldalon kívül van, például linképítés, vendégposztok, hivatkozások stb. Mi némi On-page SEO-t végzünk a csomagjainkban, például rendkívül gyors betöltési idők, akadálymentesség, meta tagek, tartalomkészítés.",
        },
        {
          question: "Webshopokkal is foglalkoztok?",
          answer:
            "Csapatunk weboldalak és landing page-ek optimalizálására specializálódott. Jelenleg webshopokkal nem foglalkozunk.",
        },
        {
          question: "Ha lemondom az előfizetést, megtarthatom a domain nevem?",
          answer: "Igen, a domain név mindig a tiéd marad.",
        },
      ],
      "webpage": [
        {
          question: "Mennyi ideig tart a fejlesztési folyamat a kezdetektől a befejezésig?",
          answer: "Általában 2-4 hét alatt elkészítünk egy weboldalt a kezdetektől a befejezésig, de ez attól függ, hogy az ügyfelek milyen gyorsan válaszolnak a tartalom- és képkéréseinkre, valamint hogy a tervezőink és fejlesztőink mennyire elérhetők. Bizonyos esetekben, ha minden gördülékenyen megy, akár 2-3 hét alatt is elkészülhet a weboldal."
        },
        {
          question: "Megtarthatom a weboldalamat, ha lemondom az előfizetést?",
          answer: "Nem, különben mindenki ezt tenné, és a szolgáltatásunk fenntarthatatlanná válna. Azonban a domain név a tiéd marad, és azt megtarthatod, ha lemondod az előfizetést."
        },
        {
          question: "A saját domainünket birtokoljuk?",
          answer: "Igen. Még ha mi is vásároltuk neked a domaint, amikor lemondod az előfizetést, átadjuk neked a tulajdonjogát, így az továbbra is a te neveden marad."
        },
        {
          question: "Használtok WordPress-t vagy oldalépítőket?",
          answer: "Nem! Minden általunk készített weboldal egyedi, kézzel írt kóddal készül. Nincsenek oldalépítők. Ez az egyik legnagyobb különbség közöttünk és más fejlesztők között – mi időt és energiát fektetünk abba, hogy teljesen testreszabott, magas minőségű weboldalt készítsünk ügyfeleink számára."
        },
        {
          question: "Milyen technológiákat használtok?",
          answer: "A legmodernebb technológiákat alkalmazzuk, mint a Next.js, Tailwind CSS, Netlify. Ezek biztosítják a gyors betöltési időket, a reszponzív dizájnt és a pontos nyomon követést, hogy a weboldalad a legjobb teljesítményt nyújtsa."
        },
        {
          question: "Miért egyedi kód a WordPress helyett? Milyen előnyökkel jár?",
          answer: "Egy egyedi kódolt weboldal számos előnnyel rendelkezik a WordPress-alapú oldalakkal szemben. Az egyedi kód gyorsabb, biztonságosabb, teljes mértékben testreszabható, és könnyebben optimalizálható egyedi igények szerint. A jövőben ahogy vállalkozásod növekszik, az egyedi kód alapján készített weboldal egyszerűbben skálázható."
        },
        {
          question: "Van már weboldalam. Felújítást vállaltok?",
          answer: "Csak saját fejlesztésű weboldalakra vállalunk garanciát, ezért felújítást nem végzünk."
        },
        {
          question: "Hogyan kérhetünk módosításokat a weboldalunkra?",
          answer: "Küldj egy e-mailt a starwaveweb@gmail.com címre."
        }
      ]
}


// TODO: IMPLEMET A MEMO !!!


const FAQ = () => {
  const [activeId, setActiveId] = useState("prices");

  return (
    <section id="FAQ" className="w-full scroll-mt-28">
      <Header
        title="FAQ"
        description={
          "Kérdésed van? Nézd át a FAQ szekciónkat ahol részletesebb információt\n biztosítunk arról, hogy mit csinálunk, mennyit kérünk, mi a folyamatunk."
        }
      />
      <div className="container px-5 flex flex-col mx-auto gap-[32px] mb-[96px] md:mb-[100px] mt-10 md:mt-20">
        <FAQSelector
          options={options}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        {questions[activeId as keyof typeof questions].map((question) => (
          <FAQCard
            key={question.question}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
