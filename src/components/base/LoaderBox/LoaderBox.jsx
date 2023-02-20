// import { Loader } from '~components';
import React from "react";
import Image from "next/image";
import * as S from "./LoaderBox.styled";

export const LoaderBox = ({ children, loading, ...props }) => (
  <>
    {loading && (
      <S.Root {...props}>
        <Image
          priority
          src="/loading.svg"
          height={32}
          width={32}
          alt="Loading"
        />
      </S.Root>
    )}
    {children}
  </>
);
