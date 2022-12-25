import styled from "styled-components";

export const Box = styled.div`
  margin-top: 50px;
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.25);
  border-radius: 20px;
`;

export const BoxText = styled.div`
  margin-top: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #646464;
`;

export const BoxDescription = styled.div`
  width: 210px;
  margin-top: 10px;
  font-size: 14px;
  color: #959595;
`;

export const Bt = styled.button`
  width: 300px;
  height: 45px;
  border-style: none;
  color: #fff;
  background: #f4cacc;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 30px;
  font-weight: 600;
`;
