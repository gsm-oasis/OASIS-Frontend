import styled from "styled-components";

export const Layout = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  width: 380px;
  white-space: nowrap;
`;

export const Anniversary = styled.div`
  width: 100%;
  height: 90px;
  box-shadow: 0px 2px 15px #f5cacb;
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
  width: 20px;
  height: 20px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #f5cacb;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
