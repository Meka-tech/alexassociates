import React, { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../../../../../components/container-styles/styles";
import Typography from "../../../../../components/typography";
import {
  TextSize,
  TextWeight
} from "../../../../../components/typography/enums";
import PrimaryButton from "../../../../../components/buttons/primary";
import { TfiUpload } from "react-icons/tfi";
import SearchInput from "../../../../../components/input/searchInput";
import Pagination from "../../../../../components/pagination";
import ProjectEditItem from "./portfolio-edit-item";
import { DummyData } from "../../../../portfolio/components/portfolio-projects/dummyData";
import { useNavigate } from "react-router-dom";

const PortfolioEdit = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const filters = [
    { filter: "View all", key: "all" },
    { filter: "Interior", key: "interior-design" },
    { filter: "Architectural", key: "architectural-design" },
    { filter: "Furniture", key: "furniture-furnishing" },
    { filter: "Project execution", key: "project-execution" }
  ];
  const navigate = useNavigate();
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
        <UploadContainer>
          <PrimaryButton
            text="Upload new project"
            icon={<TfiUpload size={15} />}
            onClick={() => navigate("/admin/manage-website/upload-project")}
          />
        </UploadContainer>
      </TopFlex>
      <SearchInput variant />
      <ProjectGrid>
        {DummyData.map(
          (
            { service, title, description, author, date, image, published },
            i
          ) => {
            return (
              <ProjectEditItem
                id={`${i}`}
                service={service}
                title={title}
                description={description}
                author={author}
                // date={date}
                image={image}
                key={i}
                published={published}
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

export default PortfolioEdit;

const Container = styled.div`
  width: 100%;
  padding: 2.4rem 11.2rem;
  padding-bottom: 9.6rem;
  @media only screen and (max-width: 769px) {
    padding: 3.2rem 1.6rem;
    padding-bottom: 6.4rem;
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
  width: 120rem;
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

const UploadContainer = styled.div`
  width: 22rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
    margin-top: 3.2rem;
  }
`;

const ProjectGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "a b c "
    "d e f"
    "g h i";
  align-items: center;
  justify-content: space-between;
  grid-column-gap: 3.2rem;
  grid-row-gap: 6.4rem;
  margin: 6.4rem 0;
  @media only screen and (max-width: 769px) {
    grid-template-columns: auto;
    grid-row-gap: 4.8rem;
    grid-template-areas: unset;
    margin: 4.8rem 0;
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
