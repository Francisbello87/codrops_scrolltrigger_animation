import { NAV_DATA } from "@/data/Nav/nav-data";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Nav() {
  const router = useRouter();
  return (
    <div className="flex w-full mt-8 md:gap-5 gap-2 items-center flex-wrap justify-center mb-32 ">
      {NAV_DATA.map((item) => {
        const { name, route } = item;
        const isActive = router.pathname === route;

        const isDisabled = route === "";
        const linkClasses = `border border-white border-opacity-30 p-4 rounded-md hover:bg-gray-400 hover:font-bold ${
          isActive ? "bg-gray-400 text-black" : "hover:text-black"
        }`;

        const content = (
          <Link key={name} href={isDisabled ? "#" : route}>
            <span
              className={linkClasses}
              style={{ display: "block", width: "100%" }}
            >
              {name}
            </span>
          </Link>
        );

        return content;
      })}
    </div>
  );
}
