

const TestimonialCard = ({name, occupation, description}:{name: string, occupation: string, description: string}) => {
  return (
    <div className="flex flex-col gap-[20px]">
        <div className="border border-primary-green rounded-[45px] max-w-[606px] w-full h-full px-[26px] py-6 md:px-[52px] md:py-12">
            <p className="text-p-mobile md:text-p text-white">{description}</p>
        </div>
        <div className="ml-10">
            <h4 className="text-h4-mobile md:text-h4 text-primary-green">{name}</h4>
            <p className="text-p-mobile md:text-p text-white">{occupation}</p>
        </div>
    </div>
  )
}

export default TestimonialCard