import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../images/svg/logo.svg";
import { Link } from "react-router-dom";

const Logo = ({ size = "md" }: { size?: string }) => {
  return (
    <Container to={"/"} size={size}>
      <LogoSvg width={"100%"} height={"100%"} />
    </Container>
  );
};

export default Logo;

const Container = styled(Link)<{ size: string }>`
  cursor: pointer;
  width: ${(props) =>
    props.size === "lg" ? "6rem" : props.size === "sm" ? "2rem" : "4rem"};
`;
