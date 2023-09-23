import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations_2(isLoading) {
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
        gsap.to(columns[1], {
          ease: "none",
          scrollTrigger: {
            trigger: grid,
            start: "clamp(top bottom)",
            end: "clamp(bottom top)",
            scrub: true,
          },
          yPercent: -20,
        });

        mergedItems.forEach((item) => {
          if (item.column === 1) return;

          gsap.to(item.wrapper, {
            ease: "none",
            startAt: {
              transformOrigin: item.column === 0 ? "0% 100%" : "100% 100%",
            },
            scrollTrigger: {
              trigger: item.element,
              start: "clamp(top bottom)",
              end: "clamp(bottom top)",
              scrub: true,
            },
            rotation: item.column === 0 ? -6 : 6,
            xPercent: item.column === 0 ? -10 : 10,
          });
        });
      };
      scroll();
    }
  }, [isLoading]);
}
