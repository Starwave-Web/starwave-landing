const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
      <div className="container flex gap-10 mx-auto">
        <h2 className="text-h2 bg-primary-green px-[7px] rounded-[7px]">{title}</h2>
        <p className="text-p text-black w-full">{description}</p>
      </div>
  );
};

export default Header;
