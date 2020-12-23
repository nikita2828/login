import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegistrationWpapper = styled.div`
  width: 300px;
`;
const ErrorLogin = styled.p`
  color: red;
  margin: 0;
`;
const WrapperPadding = styled.div`
  padding-top: 10px;
`;
export default {
  Wrapper,
  RegistrationWpapper,
  ErrorLogin,
  WrapperPadding,
};
