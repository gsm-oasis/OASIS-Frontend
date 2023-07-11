import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  width: 380px;
  white-space: nowrap;
`;

export const Anniversary = styled.div`
  width: 100%;
  height: 90px;
  box-shadow: 0px 1px 6px #f5cacb;
  background: #ffffff;
  border-radius: 18px;
  margin-top: 20px;
  h3 {
    color: #444444;
    margin: 18px;
    font-size: 18px;
    margin-bottom: -8px;
  }
  p {
    font-size: 14px;
    color: #666666;
    font-weight: 600;
  }
`;

export const Add = styled.div`
  position: absolute;
  top: -64px;
  right: 0;
  width: 20px;
  height: 20px;
  padding: 6px;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #f5cacb;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #f5cacb;
    box-shadow: none;
    transform: scale(1.15);
  }
`;
