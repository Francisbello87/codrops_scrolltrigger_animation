import { NAV_DATA } from "@/data/Nav/nav-data";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Nav() {
  const router = useRouter();
  return (
    <div className=" flex w-full mt-8 gap-5 items-center justify-center mb-32">
      {NAV_DATA.map((item) => {
        const { name, route } = item;
        const isActive = router.pathname === route;

        const linkClasses = `border p-4 rounded-md hover:bg-gray-400 hover:font-bold ${
          isActive ? "bg-gray-400 text-black" : "hover:text-black"
        }`;

        return (
          <Link
            key={name}
            href={route}
            // className=" border p-4  rounded-md hover:bg-gray-400 hover:font-bold hover:text-black "
          >
            <span className={linkClasses}>{name}</span>
          </Link>
        );
      })}
    </div>
  );
}
