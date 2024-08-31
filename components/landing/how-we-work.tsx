
import Header from '@/components/ui/header'
import WorkStepCard from '../ui/work-step-card'


const workSteps = [
    {   
        stepNr: "01",
        title: "Kick off & Web Design megalkotás",
        description:"A projekt elindítása során közösen meghatározzuk a célokat és követelményeket, majd a kreatív csapat megalkotja a vizuálisan és funkcionálisan kiemelkedő webdesign tervet, amely teljes mértékben igazodik az ügyfél igényeihez." 
    },
    {   
        stepNr: "02",
        title: "Web Design elfogadás",
        description:"A design bemutatását követően az ügyfél visszajelzései alapján véglegesítjük a terveket. Célunk, hogy a végeredmény minden szempontból megfeleljen az elképzeléseknek, biztosítva a maximális elégedettséget." 
    },
    {   
        stepNr: "03",
        title: "Implementáció",
        description:"A végleges design terv alapján megkezdődik a weboldal fejlesztése és implementációja. Minden elem gondos kivitelezése biztosítja a zökkenőmentes működést és a felhasználói élmény magas színvonalát." 
    },
    {   
        stepNr: "04",
        title: "Tesztelés",
        description:"Az implementáció után alapos tesztelés következik, mely során minden funkciót és elemet ellenőrzünk. A cél, hogy a weboldal hibamentesen működjön, és minden technikai követelménynek megfeleljen." 
    },
    {   
        stepNr: "05",
        title: "Termék átadás",
        description:"A sikeres tesztelést követően átadjuk a kész weboldalt az ügyfélnek. Ezzel a lépéssel zárul a projekt fejlesztési szakasza, a fókusz a felhasználói élményre és elégedettségre helyeződik." 
    },
    {   
        stepNr: "06",
        title: "Üzemeltetés",
        description:"Az átadott weboldal folyamatos üzemeltetése során monitorozzuk a teljesítményt és biztosítjuk a szükséges karbantartásokat. Célunk, hogy az oldal mindig naprakész, gyors és felhasználóbarát legyen." 
    },
]


const HowWeWork = () => {
  return (
    <section className='w-full mb-[140px]'>
        <div className='container flex flex-col gap-20 mx-auto'>
            <Header title='Hogyan dolgozunk?' description={'Az árajánlat elfogadása után a közös munka \naz alábbi lépések mentén zajlik:'}/>
            <div className='flex flex-col gap-[30px]'>
                {workSteps.map((workStep) => <WorkStepCard key={workStep.stepNr} stepNr={workStep.stepNr} title={workStep.title} description={workStep.description}/>)}
            </div>
        </div>
    </section>
  )
}

export default HowWeWork