import styled from "styled-components";
import ImageLib from "next/image";
import Link from "next/link";
import { Flex, Box } from "~components";

export const Root = styled(Link)({
  display: "flex",
  background: "hsl(0, 0%, 30%)",
  border: "solid 1px hsl(0, 0%, 38%)",
  borderRadius: "4px",
  gap: "10px",
  cursor: "pointer",
});

export const Info = styled(Flex)({
  width: "50%",
  flexDirection: "column",
  gap: "6px",
  padding: "6px",
});

export const ImageContainer = styled(Flex)({
  // width: "50%",
});

export const Image = styled(ImageLib)({
  objectFit: "cover",
  borderRadius: "4px 0px 0px 4px",
});

export const Name = styled(Flex)({});

export const Rating = styled(Flex)({});

export const Released = styled(Flex)({});
