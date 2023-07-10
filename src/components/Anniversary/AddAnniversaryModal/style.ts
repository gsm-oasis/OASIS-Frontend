import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #737373;
  opacity: 0.3;
  z-index: 9000;
`;

export const Modal = styled.form<{ height?: string }>`
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: ${(props) => (props.height ? props.height : "340px")};
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
  input {
    margin-top: 20px;
    width: 280px;
    height: 46px;
    border-radius: 8px;
    border: 0.3px solid #dadada;
    outline: none;
    background: #fafafa;
    padding: 1px 10px;
    text-align: center;
    color: #000000;
  }
  button {
    margin-top: 30px;
    width: 300px;
    height: 50px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background: #f5cacb;
    color: #ffffff;
    font-weight: 600;
  }
`;
