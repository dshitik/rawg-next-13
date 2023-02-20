export const rawgAPI = async (url, queryParams) =>
  await fetch(
    `https://api.rawg.io/api/${url}?key=a32992669d9e4df583fd19efdf94b9a0&${
      queryParams ? queryParams.join("&") : ""
    }`
  ).then((res) => res.json());
