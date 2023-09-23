import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations_4(isLoading) {
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
        let maxColumns = columns.length;
        let middleColumn = Math.floor(maxColumns / 2);
        let xIncrement = maxColumns > 1 ? 400 / (maxColumns - 1) : 0;

        mergedItems.forEach((item) => {
          gsap.set(item.element, {
            perspective: 1500,
          });

          let xPercentValue = 0;
          let rotationXValue = 0;
          let zValue = 0;

          if (item.column === 0) {
            xPercentValue = -250;
          } else if (item.column === middleColumn) {
            xPercentValue = 0;
          } else if (item.column === maxColumns - 1) {
            xPercentValue = 250;
          } else {
            xPercentValue = -250 + item.column * xIncrement;
          }

          rotationXValue = -45 * (item.column + 1);
          zValue = 34 * (item.column + 1);

          gsap
            .timeline({
              defaults: {
                ease: "power2",
              },
              scrollTrigger: {
                trigger: item.element,
                start: "top bottom",
                end: "clamp(center top)",
                scrub: true,
              },
            })
            .fromTo(
              item.wrapper,
              {
                rotationX: rotationXValue,
                z: zValue,
                yPercent: 30,
                xPercent: xPercentValue,
              },
              {
                startAt: { transformOrigin: "50% 100%" },
                rotationX: 0,
                z: 0,
                yPercent: 0,
                xPercent: 0,
              },
              0
            )
            .fromTo(
              item.image,
              {
                filter: "hue-rotate(90deg)",
                scale: 3,
              },
              {
                filter: "hue-rotate(0deg)",
                scale: 1,
              },
              0
            );
        });
      };
      scroll();
    }
  }, [isLoading]);
}
