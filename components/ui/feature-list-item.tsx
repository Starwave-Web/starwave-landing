import CheckMarkIcon from "@/components/icons/check-mark-icon"
import XIcon from "@/components/icons/x-icon"


const FeatureListItem = ({featureElement}:{featureElement: {isIncluded: boolean, featureName: string}}) => {
  return (
    <div className="flex gap-[15px] items-center">
        <div>{featureElement.isIncluded ? <CheckMarkIcon className="h-[41px] w-[41px]"/> : <XIcon className="h-[41px] w-[41px]"/>}</div>
        <p className="text-outlaw text-black">{featureElement.featureName}</p>
    </div>
  )
}

export default FeatureListItem