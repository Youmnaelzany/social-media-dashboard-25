import Image from "next/image";
import type { FC } from "react";

interface TotalCard {
  id: number;
  numbers: string;
  today: number;
  todayColor: string;
  borderColor: string;
  borderGradient?: string;
  name: string;
  icon: string;
  title: string;
  upDownIcon: string;
}

const totalNumbers: TotalCard[] = [
  {
    id: 1,
    numbers: "1987",
    today: 12,
    todayColor: "#1EB589",
    borderColor: "#178FF5",
    name: "@nathanf",
    icon: "/icon-facebook.svg",
    title: "Facebook Account",
    upDownIcon: "/icon-up.svg",
  },
  {
    id: 2,
    numbers: "1044",
    today: 99,
    todayColor: "#1EB589",
    borderColor: "#1DA1F2",
    name: "@nathanf",
    icon: "/icon-twitter.svg",
    title: "Twitter Account",
    upDownIcon: "/icon-up.svg",
  },
  {
    id: 3,
    numbers: "11K",
    today: 1099,
    todayColor: "#1EB589",
    borderColor: "#388FE7",
    borderGradient: "linear-gradient(to right, #388FE7, #69EDDD)",
    name: "@realnathanf",
    icon: "/icon-instagram.svg",
    title: "Instagram Account",
    upDownIcon: "/icon-up.svg",
  },
  {
    id: 4,
    numbers: "8239",
    today: 144,
    todayColor: "#DC414C",
    borderColor: "#C4032B",
    name: "Nathan F.",
    icon: "/icon-youtube.svg",
    title: "YouTube Account",
    upDownIcon: "/icon-down.svg",
  },
];

const Total: FC = () => {
  return (
    <section
      className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4"
      aria-labelledby="total-followers"
    >
      <h2 id="total-followers" className="sr-only">
        Total Followers Overview
      </h2>

      {totalNumbers.map((total) => (
        <article
          key={total.id}
          className="relative flex h-[216px] w-full max-w-[326px] cursor-pointer flex-col items-center justify-center gap-6 rounded-sm bg-[#F1F3FA] text-center transition-opacity duration-300 ease-in-out hover:opacity-80 dark:bg-[#252B42]"
          aria-label={`${total.title}: ${total.numbers} followers`}
        >
          <div
            className="absolute top-0 right-0 left-0 h-[2px]"
            style={{
              background: total.borderGradient ?? total.borderColor,
            }}
          />

          <header className="flex items-center gap-2">
            <Image
              src={total.icon}
              alt={`${total.title} icon`}
              width={20}
              height={20}
              loading="lazy"
            />
            <p className="text-[12px] font-bold tracking-normal text-[#AEB3CB]">
              {total.name}
            </p>
          </header>

          <div className="space-y-4">
            <p className="text-[3.5rem] leading-[85%] font-bold tracking-[-2px] text-[#1D1F29] dark:text-white">
              {total.numbers}
            </p>
            <p className="text-[12px] text-[#848BAB] uppercase dark:text-[#AEB3CB]">
              Followers
            </p>
          </div>

          <footer className="flex items-center gap-2">
            <Image
              src={total.upDownIcon}
              alt={`Trend icon for ${total.title}`}
              width={8}
              height={4}
              loading="lazy"
            />
            <p
              style={{ color: total.todayColor }}
              className="text-[12px] font-bold"
            >
              {total.today} Today
            </p>
          </footer>
        </article>
      ))}
    </section>
  );
};

export default Total;
