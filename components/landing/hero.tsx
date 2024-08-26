import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="w-full">
        <div className="container flex justify-between mx-auto">
            <div>
                <h1 className="text-h1">Hozd ki a cégedben rejlő potenciált.</h1>
                <h5 className="text-[20px]/[28px]">A Starwave csapata lenyűgöző és eredményorientált landing page-eket készít. Skálázd a céged online jelenlétét és konverziós arányát kreatív és felhasználóbarát megoldásainkkal!</h5>
                <Button>Szolgáltatások és árak</Button>
            </div>
        </div>
    </section>
  )
}

export default Hero