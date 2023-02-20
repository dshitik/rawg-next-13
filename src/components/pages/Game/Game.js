import React from "react";
import { fetchGameScreenshots } from "~api";
import { useQuery } from "react-query";
import Image from "next/image";
import * as S from "./Game.styled";
import parse from "html-react-parser";

export const Game = ({ details: { name, description, website, slug } }) => {
  const { data: gameScreenshots, isSuccess } = useQuery("todos", () =>
    fetchGameScreenshots({ slug })
  );

  if (isSuccess) {
    console.log(gameScreenshots, "gameScreenshots");
  }
  return (
    <S.Root>
      <S.Name>{name}</S.Name>
      <S.Description>Description: {parse(description)}</S.Description>

      {website ? (
        <S.ExternalLink href={website}>Web site: {website}</S.ExternalLink>
      ) : (
        <p>No link on website</p>
      )}

      <S.Screenshots>
        {isSuccess &&
          gameScreenshots.results.map((screenshot) => (
            <S.ScreenshotContainer>
              <Image src={screenshot.image} loading="lazy" alt="" fill />
            </S.ScreenshotContainer>
          ))}
      </S.Screenshots>

      <S.InternalLink href="/">GO HOME</S.InternalLink>
    </S.Root>
  );
};
