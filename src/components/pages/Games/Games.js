import React from "react";
import { GameCard } from "~components/features";
import { Select, InfiniteScroll, LoaderBox } from "~components/base";
import * as S from "./Games.styled";
import { useGamesState } from "./Games.state";
import { useGamesHandlers } from "./Games.handlers";

export const Games = () => {
  const {
    // platforms
    allPlatforms,
    isSuccessPlatforms,
    // games
    games,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    refetch,
    // useState
    setOrdering,
    setPlatform,
    setSearch,
  } = useGamesState();

  const { handleSortChange, handlePlatformsChange, handleSearchChange } =
    useGamesHandlers({ setOrdering, setPlatform, setSearch, refetch });

  return (
    <S.Root>
      <h1>Games</h1>
      <S.ControlGroups>
        <Select onChange={handleSortChange}>
          <option value="released">New released</option>
          <option value="-released">Old released</option>
          <option value="rating">Hight rate</option>
          <option value="-rating">Low rate</option>
        </Select>
        <Select onChange={handlePlatformsChange}>
          {isSuccessPlatforms &&
            allPlatforms.results.map((platform) => (
              <option value={platform.id} key={platform.id}>
                {platform.name}
              </option>
            ))}
        </Select>
        <input onChange={handleSearchChange} />
      </S.ControlGroups>

      {isSuccess && (
        <InfiniteScroll
          loading={isFetching}
          onLoadMore={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
        >
          <S.GamesGrid>
            {games.pages.map((page) => {
              return page.results.map((game) => (
                <GameCard
                  key={game.name}
                  slug={game.slug}
                  name={game.name}
                  rating={game.rating}
                  released={game.released}
                  img={game.background_image}
                />
              ));
            })}
          </S.GamesGrid>
        </InfiniteScroll>
      )}
      {isError && <p>Something wrong</p>}
      <LoaderBox loading={isLoading} />
    </S.Root>
  );
};
