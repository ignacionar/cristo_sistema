import styled from "styled-components";

export const PageItem = styled.li`
  text-align: center;
  height: 50px;
  width: 15%;
  position: relative;
  bottom: 0;
  align-self: flex-end;
  border-top: 2px solid white;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;