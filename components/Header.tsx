import { ModeToggle } from "./ModeToggle";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <header className="overflow-hidden px-7 py-8 md:px-12 lg:px-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="">
          <h1 className="text-2xl leading-[125%] font-bold tracking-normal text-[#1D1F29] md:text-[1.75rem] dark:text-white">
            Social Media Dashboard
          </h1>
          <h2 className="text-sm leading-[125%] tracking-normal text-[#63687D] dark:text-[#AEB3CB]">
            Total Followers: 23,004
          </h2>
        </div>
        <Separator className="lg:hidden" />
        <div className="flex items-center justify-between gap-6">
          <h3 className="text-sm leading-[125%] font-bold tracking-normal text-[#AEB3CB] dark:text-[#848BAB]">
            Dark Mood
          </h3>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
