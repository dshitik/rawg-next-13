import { rawgAPI } from "~services/api";

export const fetchGameDetails = async ({ slug }) => {
  const res = await rawgAPI(`games/${slug}`);
  return res;
};
export const fetchGameScreenshots = async ({ slug }) => {
  const res = await rawgAPI(`games/${slug}/screenshots`);
  return res;
};

export const fetchGames = async ({
  ordering,
  platform,
  search,
  pageSize,
  pageParam,
}) => {
  const res = rawgAPI(
    `games`,
    [
      ordering && `ordering=${ordering}`,
      platform && `platforms=${platform}`,
      search && `search=${search}`,
      pageSize && `page_size=${pageSize}`,
      pageSize && pageParam && `page=${pageParam}`,
    ].filter((el) => !!el)
  );
  return res;
};

export const fetchAllGames = async () => {
  const res = rawgAPI(`games`);
  return res;
};

export const fetchAllPlatforms = async () => {
  const res = rawgAPI("platforms");
  console.log({ platforms: res });
  return res;
};

// Mock;

// export const allGames = async () => {
//   const res = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Call of dytu", released: "2023-02-15" },
//         { name: "Dragon", released: "2023-02-05" },
//       ]);
//     }, 500);
//   });

//   return res;
// };

// export const searchGame = (game) => rawgAPI(`games/${game}`);

// export const allGames = () => rawgAPI(`games`);
