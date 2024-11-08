const Header = ({
  titleId,
  title,
  description,
}: {
  titleId?: string;
  title: string;
  description: string;
}) => {

  return (
    <div
      data-title={titleId}
      className="container flex flex-col items-center md:items-start md:flex-row gap-[30px] md:gap-10 mx-auto px-5 group"
    >
      <h2 className="text-h2-mobile md:text-h2  bg-primary-green px-[7px] rounded-[7px] whitespace-nowrap group-data-[title=howwework]:hidden">
        {title}
      </h2>
      <div className="group-data-[title=howwework]:flex hidden flex-col items-center md:items-start">
        <h2 className="text-h2-mobile md:text-h2  bg-primary-green px-[7px] rounded-[7px] w-fit h-fit ">
          Hogyan
        </h2>
        <h2 className="text-h2-mobile md:text-h2  bg-primary-green px-[7px] rounded-[7px] w-fit h-fit ">
          dolgozunk?
        </h2>
      </div>

      <p className="text-p-mobile md:text-p text-black w-full whitespace-pre-line text-center md:text-left">
        {description}
      </p>
    </div>
  );
};

export default Header;
