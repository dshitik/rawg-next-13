import React, { memo } from "react";

import { LoaderBox } from "~components/base/LoaderBox";

import { useInfiniteScroll } from "./InfiniteScroll.helpers";
import * as S from "./InfiniteScroll.styled";

const InfiniteScrollView = ({ children, className, loading, ...props }) => {
  const { scrollDetector } = useInfiniteScroll(props);

  return (
    <>
      {children}
      <LoaderBox className={className} loading={loading}>
        <S.ScrollDetector ref={scrollDetector} />
      </LoaderBox>
    </>
  );
};

export const InfiniteScroll = memo(InfiniteScrollView);
