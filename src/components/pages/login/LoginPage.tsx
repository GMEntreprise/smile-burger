import { LoginForm } from "./LoginForm";
import { Logo } from "../../reusible-ui/Logo";
import styled from "styled-components";

export const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Logo className="logo-login-page" />
      <LoginForm />
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  ::before {
    content: "";
    background: rgba(0, 0, 0, 0.6) url(/image/background_summer.avif);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  .logo-login-page {
    width: 350px;
    height: 100%;
  }
`;
