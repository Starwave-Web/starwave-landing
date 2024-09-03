

const TestimonialCard = ({name, occupation, description}:{name: string, occupation: string, description: string}) => {
  return (
    <div className="flex flex-col gap-[20px]">
        <div className="border border-primary-green rounded-[45px] max-w-[606px] w-full min-h-[266px] h-full px-[52px] py-12">
            <p className="text-p text-white">{description}</p>
        </div>
        <div className="ml-10">
            <h4 className="text-h4 text-primary-green">{name}</h4>
            <p className="text-p text-white">{occupation}</p>
        </div>
    </div>
  )
}

export default TestimonialCard