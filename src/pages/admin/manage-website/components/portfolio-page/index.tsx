import React, { useEffect, useState } from "react";
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
import api from "../../../../../utils/axiosInstance";
import { IProject } from "../../../../../utils/types/project";
import LoadingData from "../../../../../components/loading-component";
import TopNav from "../top-nav";
import MobileConfirmButtons from "../mobile-confirm";

const PortfolioEdit = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [projects, setProjects] = useState<IProject[]>([]);
  const filters = [
    { filter: "View all", key: "all" },
    { filter: "Interior", key: "Interior design" },
    { filter: "Architectural", key: "Architectural design" },
    { filter: "Furniture", key: "Furniture & Furnishings" },
    { filter: "Project execution", key: "Project execution" }
  ];
  const navigate = useNavigate();

  const GetProjects = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(
        `/project?page=${currentPage}${
          search !== "" ? `&search=${search}` : ""
        }${activeFilter !== "all" ? `&category=${activeFilter}` : ""}`
      );
      setProjects(data.results);
      setTotalPages(data.totalPages);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetProjects();
  }, [currentPage, search, activeFilter]);
  return (
    <Container>
      <TopNav />
      <Body>
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
        <SearchInput
          variant
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
          <LoadingData />
        ) : projects.length > 0 ? (
          <ProjectGrid>
            {projects.map((project, i) => {
              return (
                <ProjectEditItem {...project} refresh={GetProjects} key={i} />
              );
            })}
          </ProjectGrid>
        ) : null}

        <PaginationContainer>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
          />
        </PaginationContainer>
      </Body>
      <MobileConfirmButtons />
    </Container>
  );
};

export default PortfolioEdit;

const Container = styled.div`
  width: 100%;
`;

const Body = styled.div`
  border-top: 1px solid #2e3b41;
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
  grid-template-columns: 33% 33% 33%;
  /* grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "a b c "
    "d e f"
    "g h i";
  align-items: center; */
  justify-content: space-between;
  grid-column-gap: 3.2rem;
  grid-row-gap: 6.4rem;
  margin: 6.4rem 0;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
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
