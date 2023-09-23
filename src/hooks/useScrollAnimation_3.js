import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations_3(isLoading) {
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
        mergedItems.forEach((item) => {
          gsap.to(item.wrapper, {
            ease: "none",
            startAt: {
              transformOrigin: `${
                1.5 *
                (window.innerWidth -
                  item.element.getBoundingClientRect()["left"])
              }px 0%`,
            },
            scrollTrigger: {
              trigger: item.element,
              start: "clamp(top bottom)",
              end: "clamp(bottom top)",
              scrub: true,
            },
            rotation: (item.column + 1) * 2,
            xPercent: (item.column + 1) * 14,
            yPercent: item.column * -5,
          });
        });
      };
      scroll();
    }
  }, [isLoading]);
}
