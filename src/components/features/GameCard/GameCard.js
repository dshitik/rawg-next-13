import React from "react";
import * as S from "./GameCard.styled";

export const GameCard = ({ name, rating, released, img, slug }) => {
  return (
    <S.Root href={`/games/${slug}`}>
      {img && (
        <S.ImageContainer>
          <S.Image src={img} alt="" width={200} height={200} />
        </S.ImageContainer>
      )}
      <S.Info>
        <S.Name>Name: {name}</S.Name>
        <S.Rating>Rating: {rating}</S.Rating>
        <S.Released>Released: {released}</S.Released>
      </S.Info>
    </S.Root>
  );
};
