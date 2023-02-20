import { useState } from "react";
import { useQuery, useInfiniteQuery } from "react-query";

import { fetchGames, fetchAllGames, fetchAllPlatforms } from "~api";

import { PAGE_SIZE } from "./Games.constants";

export const useGamesState = () => {
  const [ordering, setOrdering] = useState("released");
  const [platform, setPlatform] = useState();
  const [search, setSearch] = useState();

  const {
    data: games,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetching,
    isLoading,
    isError,
    isSuccess,
  } = useInfiniteQuery(
    ["games", ordering, platform, search],
    ({ pageParam = 1 }) =>
      fetchGames({
        ordering,
        platform,
        search,
        pageSize: PAGE_SIZE,
        pageParam,
      }),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    }
  );

  const { data: allPlatforms, isSuccess: isSuccessPlatforms } = useQuery(
    "platforms",
    () => fetchAllPlatforms(),
    { refetchOnWindowFocus: false }
  );

  return {
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
  };
};
