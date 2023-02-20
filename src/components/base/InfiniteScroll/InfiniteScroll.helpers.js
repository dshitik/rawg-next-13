import { useCallback, useEffect, useRef } from "react";

/**
 * @source https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a
 */
export const useInfiniteScroll = ({ onLoadMore }) => {
  const scrollDetector = useRef(null);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        onLoadMore();
      }
    },
    [onLoadMore]
  );

  useEffect(() => {
    if (scrollDetector.current) {
      const observer = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: "20px",
        threshold: 0,
      });

      observer.observe(scrollDetector.current);

      return () => {
        scrollDetector.current && observer.unobserve(scrollDetector.current);
        observer.disconnect();
      };
    }
  }, [handleObserver]);

  return { scrollDetector };
};
