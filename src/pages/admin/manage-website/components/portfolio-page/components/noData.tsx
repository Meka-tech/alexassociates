import React from "react";
import styled from "styled-components";

import { ReactComponent as Svg } from "../../../../../../images/svg/file-svg.svg";
import Typography from "../../../../../../components/typography";
import {
  TextSize,
  TextWeight
} from "../../../../../../components/typography/enums";
import PrimaryButton from "../../../../../../components/buttons/primary";
import { PiPlusBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

interface IProps {
  searchInput?: string;
  admin?: boolean;
  clearSearch?: () => void;
  category?: string;
}
const NoData = ({ searchInput, admin, clearSearch, category }: IProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Circle>
        <SvgContainer>
          <Svg />
        </SvgContainer>
      </Circle>
      <Typography
        weight={TextWeight.semibold}
        size={TextSize.lg}
        lh="2.8"
        mb="0.8"
      >
        No projects found
      </Typography>
      <Text>
        {searchInput ? (
          <Typography color="#CFCECE" size={TextSize.sm}>
            Your search "{searchInput}" did not match any projects
            {category ? ` in "${category}" category` : ""}. Please try again.
          </Typography>
        ) : (
          <Typography color="#CFCECE" size={TextSize.sm}>
            No Projects Found in this Category
          </Typography>
        )}
      </Text>
      <Buttons>
        {searchInput && (
          <PrimaryButton
            text="Clear search"
            variant={true}
            onClick={clearSearch}
          />
        )}

        {admin && (
          <PrimaryButton
            text="New project"
            icon={<PiPlusBold size={18} color="white" />}
            iconPosition="left"
            onClick={() => navigate("/admin/manage-website/upload-project")}
          />
        )}
      </Buttons>
    </Container>
  );
};

export default NoData;

const Container = styled.div`
  width: 100%;
  height: 72rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  @media only screen and (max-width: 769px) {
    height: 48rem;
  }
`;

const Circle = styled.div`
  width: 10.4rem;
  height: 10.4rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
const SvgContainer = styled.div`
  width: 4rem;
  height: 4rem;
`;
const Text = styled.div`
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media only screen and (max-width: 769px) {
    width: 70%;
  }
`;
const Buttons = styled.div`
  margin-top: 3.2rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: max-content max-content;
  grid-column-gap: 1.2rem;
`;
