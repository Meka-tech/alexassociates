import React from "react";
import styled from "styled-components";
import StyledInput from "../../components/input/primaryInput";
import Typography from "../../components/typography";
import { TextSize, TextWeight } from "../../components/typography/enums";
import Logo from "../../components/logo";
import PrimaryButton from "../../components/buttons/primary";
import Check from "../../components/input/check";
import { Link, useNavigate } from "react-router-dom";
import Mockup from "../../images/png/homepage-mockup.png";
import { ReactComponent as Lines } from "../../images/svg/auth-line.svg";
import { useAuth } from "../../context/authContext";

const Auth = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const Login = () => {
    login();
    navigate("/admin/user-requests");
  };
  return (
    <Container>
      <Main>
        <Body>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Typography
            size={TextSize.DisplayMd}
            weight={TextWeight.semibold}
            lh="4.4"
            mb="1.2"
          >
            Log in
          </Typography>
          <Typography size={TextSize.md} lh="2.4" mb="3.2">
            Welcome back! Please enter your details.
          </Typography>
          <InputItem>
            <StyledInput label="Email" placeholder="Enter your email" />
          </InputItem>
          <InputItem>
            <StyledInput label="Password" placeholder="••••••••" />
          </InputItem>
          <AboveButton>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Check />
              <Typography ml="0.8" size={TextSize.sm}>
                Remember for 30 days
              </Typography>
            </div>
            <Link to={"/"} style={{ all: "unset", cursor: "pointer" }}>
              <Typography
                size={TextSize.sm}
                weight={TextWeight.semibold}
                color="#0083E2"
              >
                Forgot password
              </Typography>
            </Link>
          </AboveButton>
          <PrimaryButton text="Sign in" onClick={Login} />
        </Body>
        <Footer>
          <Typography color="#BAB8B8" size={TextSize.sm}>
            © Alex & Associates {new Date().getFullYear()}
          </Typography>
        </Footer>
      </Main>
      <Side>
        <ImageContainer src={Mockup} alt="homePage" />
        <Typography
          size={TextSize.xl}
          weight={TextWeight.medium}
          lh="3"
          mb="0.8"
        >
          Welcome to your website dashboard
        </Typography>
        <Typography size={TextSize.md} weight={TextWeight.medium} lh="2.4">
          Sign in to manage your website
        </Typography>
        <SvgContainer>
          <Lines />
        </SvgContainer>
      </Side>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  @media only screen and (max-width: 769px) {
    display: flex;
    justify-content: center;
    padding: 0 2rem;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  @media only screen and (max-width: 769px) {
    height: 100vh;
  }
`;

const Body = styled.div`
  width: 60%;
  height: 80%;
  color: white;
  @media only screen and (max-width: 769px) {
    width: 100%;
    height: 60%;
  }
`;

const LogoContainer = styled.div`
  width: 4.4rem;
  height: 4.8rem;
  margin-bottom: 5rem;
`;

const InputItem = styled.div`
  margin-bottom: 2rem;
`;

const AboveButton = styled.div`
  margin-top: 0.4rem;
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 9.6rem;
  padding-left: 3.2rem;
  padding-top: 4.4rem;
  @media only screen and (max-width: 769px) {
    height: 6.6rem;
    padding-left: 1.2rem;
    padding-top: 2.2rem;
  }
`;

const Side = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #042c48 0%, #2ea7ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: relative;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;

const ImageContainer = styled.img`
  width: 43.2rem;
  height: 34rem;
  border-radius: 1.9rem;
  margin-bottom: 3.56rem;
  object-fit: cover;
`;

const SvgContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
