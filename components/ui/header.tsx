const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
      <div className="container flex flex-col items-center md:items-start md:flex-row gap-[30px] md:gap-10 mx-auto px-5">
        <h2 className="text-h2-mobile md:text-h2  bg-primary-green px-[7px] rounded-[7px] whitespace-nowrap h-fit ">{title}</h2>
        <p className="text-p-mobile md:text-p text-black w-full whitespace-pre-line">{description}</p>
      </div>
  );
};

export default Header;
