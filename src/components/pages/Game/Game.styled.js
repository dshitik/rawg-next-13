import styled from "styled-components";
import Link from "next/link";
import { Flex } from "~components";

export const Root = styled(Flex)({
  flexDirection: "column",
  margin: "10px",
  gap: "10px",
});
export const Name = styled(Flex)({
  fontSize: "22px",
});
export const Description = styled(Flex)({
  fontSize: "16px",
});
export const ExternalLink = styled.a({
  fontSize: "14px",
  fontStyle: "italic",
});
export const InternalLink = styled(Link)({});

export const Screenshots = styled.div({
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

export const ScreenshotContainer = styled(Flex)({
  width: "100%",
  height: "200px",
  position: "relative",
  img: { objectFit: "cover" },
});
