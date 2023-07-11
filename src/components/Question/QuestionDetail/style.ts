import styled from "styled-components";

export const CommentBox = styled.div`
  width: 360px;
  padding-right: 15px;
  margin-top: 25px;
  min-height: 60px;
  background: #ffffff;
  box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Name = styled.div`
  color: #4b4b4b;
  font-size: 14px;
  margin-left: 20px;
  margin-top: 20px;
  font-weight: 700;
`;

export const Answer = styled.div`
  width: 335px;
  font-size: 12px;
  font-weight: 700;
  padding: 12px 20px 20px 20px;
  color: #777777;
  overflow-wrap: normal;
`;
