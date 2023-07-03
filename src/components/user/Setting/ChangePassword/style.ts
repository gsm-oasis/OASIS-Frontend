import styled from "styled-components";

export const ChangePasswordForm = styled.form`
  width: 100%;
  margin-top: 9vh;
  label {
    display: block;
    font-size: 14px;
    text-align: left;
    margin-left: 70px;
    color: #939393;
    margin-bottom: 10px;
    font-weight: 600;
  }
  input {
    border-style: none;
    width: 340px;
    height: 60px;
    background: #ffffff;
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    padding: 0px 20px;
    font-size: 13px;
    color: #000;
    line-height: 13px;
    margin-bottom: 24px;
    transition: 0.3s;
    &:focus {
      border: none;
      outline: none;
      box-shadow: 0px 0px 13px #b6d0e8;
    }
  }
  button {
    display: block;
    margin: 0 auto;
    margin-top: 100px;
    width: 380px;
    height: 60px;
    border-style: none;
    border-radius: 16px;
    background: linear-gradient(271.91deg, #f5c8c9 0%, #cce1f4 100%);
    color: #ffff;
    line-height: 16px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`;
