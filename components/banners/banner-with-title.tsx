"use client";

import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

function BannerWithTitle({
  title,
  linkTitle,
  link,
}: {
  title: string;
  linkTitle: string;
  link: string;
}) {
  return (
    <Banner>
      <div className="flex w-full justify-between border-b bg-purple-600 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-slate-50 ">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span className="[&_p]:inline">
              {title}&nbsp;
              <a
                href={link}
                className="decoration-600 dark:decoration-500 inline font-medium text-cyan-500 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                {linkTitle}
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
export default BannerWithTitle;
