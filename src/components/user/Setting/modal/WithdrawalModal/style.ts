import styled from "styled-components";

export const Modal = styled.div`
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 190px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 2px 18px #d3d3d3;
  text-align: center;
  h3 {
    font-size: 16px;
    color: #646464;
    margin-top: 36px;
  }
  p {
    margin-top: -10px;
    font-size: 12px;
    font-weight: 600;
    color: #959595;
  }
  button {
    margin-top: 26px;
    width: 320px;
    height: 46px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background: #d9d9d9;
    color: #ffffff;
    font-weight: 600;
  }
`;
