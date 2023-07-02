import { styled } from 'styled-components';

const StyledContainer = styled.div`
  width: 30%;
  margin: 10% auto;
  padding: 30px;
  border-radius: 37px;
  background-color: #d5e6ff;
  box-shadow: rgb(127, 58, 255) 0px 0px 35px 20px;
`;

export const Container = ({ children }) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};
