import styled from "styled-components";
import { Flex } from "~components/primitives";

export const Root = styled(Flex)({
  flexDirection: "column",
  alignItems: "center",
  margin: "10px",
});

export const GamesGrid = styled.div({
  display: "grid",
  marginTop: "20px",
  "@media(min-width: 320px)": {
    gap: "20px",
    gridTemplateColumns: "repeat(1, 1fr)",
  },

  "@media(min-width: 788px)": {
    gap: "10px",
    gridTemplateColumns: "repeat(2, 2fr)",
  },

  "@media(min-width: 1024px)": {
    gap: "20px",
    gridTemplateColumns: "repeat(3, 2fr)",
  },
});

export const ControlGroups = styled(Flex)({
  gap: "6px",

  "@media(min-width: 320px)": {
    flexDirection: "column",
  },

  "@media(min-width: 788px)": {
    flexDirection: "row",
  },
});
