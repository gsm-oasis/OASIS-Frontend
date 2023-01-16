import styled from "styled-components";

export const ScrollBox = styled.div`
  /* width: 375px; */
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 395px;
  height: 840px;
  white-space: nowrap;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    height: 100px;
    background: #f2c3c3;
    border-radius: 10px;
  }
`;
