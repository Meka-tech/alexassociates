import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../../../../components/container-styles/styles";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import Dropdown from "../../../../components/input/dropdown";
import ProjectItem from "./project-item";
import { DummyData } from "./dummyData";
import Pagination from "../../../../components/pagination";
import { useSearchParams } from "react-router-dom";

interface IProps {
  inputValue: string;
}
const PortfolioProjects = ({ inputValue }: IProps) => {
  const [searchParams] = useSearchParams();

  const filterparam = searchParams.get("key");
  const [activeFilter, setActiveFilter] = useState(
    filterparam ? filterparam : "all"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const filters = [
    { filter: "View all", key: "all" },
    { filter: "Interior", key: "interior-design" },
    { filter: "Architectural", key: "architectural-design" },
    { filter: "Furniture", key: "furniture-furnishing" },
    { filter: "Project execution", key: "project-execution" }
  ];

  useEffect(() => {
    setActiveFilter(filterparam ? filterparam : "all");
  }, [filterparam]);
  return (
    <Container>
      <TopFlex>
        <FilterMobileOverflow>
          <FilterContainer>
            {filters.map(({ filter, key }, i) => {
              return (
                <FilterItem
                  isactive={activeFilter === key ? "true" : "false"}
                  key={i}
                  onClick={() => setActiveFilter(key)}
                >
                  <Typography size={TextSize.md} weight={TextWeight.semibold}>
                    {filter}
                  </Typography>
                </FilterItem>
              );
            })}
            <FilterOutline />
          </FilterContainer>
        </FilterMobileOverflow>
        <SortContainer>
          <Dropdown />
        </SortContainer>
      </TopFlex>
      <ProjectGrid>
        {DummyData.map(
          ({ service, title, description, author, date, image }, i) => {
            return (
              <ProjectItem
                id={`${i}`}
                service={service}
                title={title}
                description={description}
                author={author}
                date={date}
                image={image}
                key={i}
              />
            );
          }
        )}
      </ProjectGrid>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </PaginationContainer>
    </Container>
  );
};

export default PortfolioProjects;

const Container = styled.div`
  width: 100%;
  padding: 2.4rem 11.2rem 9.6rem 11.2rem;
  @media only screen and (max-width: 769px) {
    padding: 2.4rem 1.6rem 6.4rem 1.6rem;
    overflow: hidden;
  }
`;

const TopFlex = styled(FlexBox)`
  justify-content: space-between;
  width: 100%;
  margin-bottom: 6.4rem;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    margin-bottom: 4.8rem;
  }
`;

const FilterMobileOverflow = styled.div`
  width: fit-content;
  @media only screen and (max-width: 769px) {
    width: 100%;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
const FilterContainer = styled.div`
  width: 86.4rem;
  display: flex;
  align-items: center;
  position: relative;
  max-width: 80%;
  @media only screen and (max-width: 769px) {
    width: max-content;
    max-width: max-content;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const FilterOutline = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0;
  border-bottom: 2px solid rgba(234, 236, 240, 1);
  @media only screen and (max-width: 769px) {
    border-bottom: 2px solid rgba(234, 236, 240, 1);
  }
`;
const FilterItem = styled.div<{ isactive: string }>`
  color: ${(props) =>
    props.isactive === "true"
      ? "rgba(0, 131, 226, 1)"
      : " rgba(207, 206, 206, 1)"};
  border-bottom: 2px solid
    ${(props) =>
      props.isactive === "true"
        ? "rgba(0, 131, 226, 1)"
        : "rgba(234, 236, 240, 1)"};
  cursor: pointer;
  margin-right: 1.6rem;
  padding: 0 0.4rem;
  padding-bottom: 1.2rem;
  transition: ease-in-out all 0.2s;
  z-index: 1;
  @media only screen and (max-width: 769px) {
    width: fit-content;
  }
`;

const SortContainer = styled.div`
  width: 32rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
    margin-top: 3.2rem;
  }
`;

const ProjectGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  align-items: center;
  justify-content: space-between;
  grid-column-gap: 3.2rem;
  grid-row-gap: 6.4rem;
  margin-bottom: 6.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: auto;
    grid-row-gap: 4.8rem;
    margin-bottom: 4.8rem;
  }
`;

const PaginationContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(234, 236, 240, 1);
  @media only screen and (max-width: 769px) {
    padding-top: 1.6rem;
  }
`;
