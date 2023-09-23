import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations_1(isLoading) {
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

      columns.forEach((column, pos) => {
        gsap.to(column, {
          ease: "none",
          yPercent: -1 * pos * 10,
          scrollTrigger: {
            trigger: grid,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });
      });

      mergedItems.forEach((item) => {
        gsap.to(item, {
          ease: "none",
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: item.element,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        });
      });
      scroll();
    }
  }, [isLoading]);
}
