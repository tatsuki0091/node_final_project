import styled from "styled-components";
import { Link } from "react-router-dom";

export const Head = styled.h1`
  font-size: 100px;
  text-align: center;
`;
export const Table = styled.table`
  border: 1px solid black;
  margin: auto;
`;

export const TrHead = styled.tr`
  border: 1px solid black;
  background-color: #ffa500;
`;

export const Tr = styled.tr`
  border: 1px solid black;
`;

// trと同じタグを使う
export const Th = Tr.withComponent("th");
export const Td = Tr.withComponent("td");

export const Button = styled.button`
  background-color: #ffa500;
  border-radius: 3em;
`;

export const RegisterButton = styled.button`
  background-color: #ffa500;
  border-radius: 3em;
  display: block;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 10%;
  padding: 2%;
  font-size: 2rem;
  color: black;
`;

// react-router-domのLinkのstyled-componentのやりかた
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
