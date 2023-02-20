export const useGamesHandlers = ({
  setOrdering,
  setPlatform,
  setSearch,
  refetch,
}) => {
  const handleSortChange = (e) => {
    console.log("value", e.currentTarget.value);
    setOrdering(e.currentTarget.value, () => refetch());
  };
  const handlePlatformsChange = (e) => {
    console.log("value", e.currentTarget.value);
    setPlatform(e.currentTarget.value, () => refetch());
  };
  const handleSearchChange = (e) => {
    console.log("value", e.currentTarget.value);
    setSearch(e.currentTarget.value, () => refetch());
  };

  return { handleSortChange, handlePlatformsChange, handleSearchChange };
};
