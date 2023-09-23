import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { getGrid } from "@/utils/preloaded-img";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations_5(isLoading) {
  useEffect(() => {
    if (!isLoading) {
      const grid = document.querySelector(".columns");
      const columns = Array.from(grid.querySelectorAll(".column"));

      const items = columns.map((column, pos) => {
        return Array.from(column.querySelectorAll(".column__item")).map(
          (item) => ({
            element: item,
            column: pos,
            wrapper: item.querySelector(".column__item-imgwrap"),
            image: item.querySelector(".column__item-img"),
          })
        );
      });
      const mergedItems = items.flat();

      gsap.set(mergedItems, { y: 30, opacity: 0 });

      const scroll = () => {
        const gridObj = getGrid(mergedItems.map((item) => item.element));

        const rowMapping = {
          even: {
            skewX: 10,
            xPercent: 3,
            transformOrigin: "0% 50%",
          },
          odd: {
            skewX: -10,
            xPercent: -2,
            transformOrigin: "100% 50%",
          },
        };

        ["even", "odd"].forEach((type) => {
          gridObj
            .rows(type)
            .flat()
            .forEach((row) => {
              gsap
                .timeline({
                  defaults: { ease: "none" },
                  scrollTrigger: {
                    trigger: row,
                    start: "top bottom",
                    end: "clamp(bottom top)",
                    scrub: true,
                  },
                })
                .fromTo(
                  row.querySelector(".column__item-imgwrap"),
                  {
                    transformOrigin: rowMapping[type].transformOrigin,
                    opacity: 0.1,
                    xPercent: rowMapping[type].xPercent,
                    skewX: rowMapping[type].skewX,
                  },
                  {
                    opacity: 1,
                    xPercent: 0,
                    skewX: 0,
                  },
                  0
                )
                .fromTo(
                  row.querySelector(".column__item-img"),
                  {
                    scaleY: 1.2,
                  },
                  {
                    scaleY: 1,
                  },
                  0
                );
            });
        });
      };
      scroll();
    }
  }, [isLoading]);
}
