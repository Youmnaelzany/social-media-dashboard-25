"use client";

import Image from "next/image";
import React from "react";

import downIcon from "@/public/icon-down.svg";
import facebookIcon from "@/public/icon-facebook.svg";
import instagramIcon from "@/public/icon-instagram.svg";
import twitterIcon from "@/public/icon-twitter.svg";
import upIcon from "@/public/icon-up.svg";
import youtubeIcon from "@/public/icon-youtube.svg";

const overviewToday = [
  {
    id: 1,
    numbers: "87",
    today: 3,
    up: true,
    platform: "Facebook",
    metric: "Page Views",
    icon: facebookIcon,
  },
  {
    id: 2,
    numbers: "52",
    today: 2,
    up: false,
    platform: "Facebook",
    metric: "Likes",
    icon: facebookIcon,
  },
  {
    id: 3,
    numbers: "5462",
    today: 2257,
    up: true,
    platform: "Instagram",
    metric: "Likes",
    icon: instagramIcon,
  },
  {
    id: 4,
    numbers: "52K",
    today: 2257,
    up: true,
    platform: "Instagram",
    metric: "Profile Views",
    icon: instagramIcon,
  },
  {
    id: 5,
    numbers: "117",
    today: 303,
    up: true,
    platform: "Twitter",
    metric: "Retweets",
    icon: twitterIcon,
  },
  {
    id: 6,
    numbers: "507",
    today: 553,
    up: true,
    platform: "Twitter",
    metric: "Likes",
    icon: twitterIcon,
  },
  {
    id: 7,
    numbers: "107",
    today: 10,
    up: false,
    platform: "YouTube",
    metric: "Likes",
    icon: youtubeIcon,
  },
  {
    id: 8,
    numbers: "1407",
    today: 12,
    up: false,
    platform: "YouTube",
    metric: "Total Views",
    icon: youtubeIcon,
  },
];

const OverView = React.memo(function OverView() {
  return (
    <section aria-labelledby="overview-today" className="pt-8 md:pt-12">
      <h2
        id="overview-today"
        className="text-2xl font-bold text-[#63687D] dark:text-white"
      >
        Overview - Today
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewToday.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between rounded-lg bg-[#F1F3FA] p-6 shadow-sm transition-colors duration-300 ease-in-out hover:opacity-80 dark:bg-[#252B42]"
            aria-label={`${item.metric} on ${item.platform}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#63687D] dark:text-[#AEB3CB]">
                {item.metric}
              </h3>
              <Image
                src={item.icon}
                alt={`${item.platform} icon`}
                width={20}
                height={20}
                loading="lazy"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[2rem] font-bold text-[#1D1F29] dark:text-white">
                {item.numbers}
              </p>
              <div className="flex items-center gap-1">
                <Image
                  src={item.up ? upIcon : downIcon}
                  alt={item.up ? "up arrow" : "down arrow"}
                  width={8}
                  height={4}
                  loading="lazy"
                />
                <span
                  className={`text-[12px] font-bold ${
                    item.up ? "text-[#1EB589]" : "text-[#DC414C]"
                  }`}
                >
                  {item.today} Today
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

export default OverView;
