import styled from "styled-components";
import { Flex } from "~components";

export const Root = styled(Flex)({
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  ["~ *"]: {
    display: "none",
  },
});
