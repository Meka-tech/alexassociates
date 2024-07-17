import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface Iprops {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const Pagination = ({ currentPage, totalPages, onPageChange }: Iprops) => {
  const [page, setPage] = useState(currentPage);
  const [pagesArray, setPagesArray] = useState<number[]>([]);

  const Previous = () => {
    const current = page;
    if (current !== 1) {
      setPage(current - 1);
      onPageChange(current - 1);
    }
  };

  const Next = () => {
    const current = page;
    if (current < totalPages) {
      setPage(current + 1);
      onPageChange(current + 1);
    }
  };

  useEffect(() => {
    const PagesToReturn = () => {
      const array = [];
      const min = 1;
      const max = totalPages;
      let count = 3;

      array.push(min, max, currentPage);

      for (let i = 1; i < count; i++) {
        // add -2 -1 current page
        if (currentPage - i >= min) {
          array.push(currentPage - i);
        }
        // add +2 +1 current page
        if (currentPage + i <= max) {
          array.push(currentPage + i);
        }
        // add -2 -1 max page
        array.push(max - i);
      }

      //remove reoccur
      const mySet = new Set(array);
      const newArray = Array.from(mySet);

      const sorted = newArray.sort((a, b) => {
        return a - b;
      });
      let finalArray = [];
      for (let i = 0; i < sorted.length; i++) {
        finalArray.push(sorted[i]);
        if (sorted[i] + 1 !== sorted[i + 1] && sorted[i + 1]) {
          finalArray.push(-1);
        }
      }
      setPagesArray(finalArray);
    };
    PagesToReturn();
  }, [page, currentPage, totalPages]);
  return (
    <Container>
      <WebView>
        <Button onClick={Previous}>
          <FiArrowLeft size={20} />
          <Typography size={TextSize.sm} weight={TextWeight.semibold} ml="0.8">
            Previous
          </Typography>
        </Button>
        <Pages>
          {pagesArray.map((page, i) => {
            if (page > 0) {
              return (
                <PageItem
                  key={i}
                  isactive={currentPage === page ? "true" : "false"}
                  onClick={() => {
                    setPage(page);
                    onPageChange(page);
                  }}
                >
                  <Typography
                    size={TextSize.sm}
                    lh="2"
                    weight={TextWeight.medium}
                  >
                    {page}
                  </Typography>
                </PageItem>
              );
            } else {
              return (
                <PageItem
                  key={i}
                  isactive={currentPage === page ? "true" : "false"}
                  onClick={() => {
                    setPage(pagesArray[i - 1] + 1);
                    onPageChange(pagesArray[i - 1] + 1);
                  }}
                >
                  {page > 0 ? (
                    <Typography
                      size={TextSize.sm}
                      lh="2"
                      weight={TextWeight.medium}
                    >
                      {page}
                    </Typography>
                  ) : (
                    <Typography>...</Typography>
                  )}
                </PageItem>
              );
            }
          })}
        </Pages>
        <Button onClick={Next}>
          <Typography size={TextSize.sm} weight={TextWeight.semibold} mr="0.8">
            Next
          </Typography>
          <FiArrowRight size={20} />
        </Button>
      </WebView>
      <MobileView>
        <Button onClick={Previous}>
          <FiArrowLeft size={20} />
        </Button>
        <Typography>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button onClick={Next}>
          <FiArrowRight size={20} />
        </Button>
      </MobileView>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  width: 100%;
  color: white;
`;

const WebView = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 769px) {
    background-color: white;
    color: rgba(52, 64, 84, 1);
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 0.8rem;
  }
`;

const Pages = styled.div`
  display: flex;
  width: fit-content;
`;
const PageItem = styled.div<{ isactive: string }>`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isactive === "true" ? "rgba(0, 131, 226, 1)" : "transparent"};
`;

const MobileView = styled.div`
  display: none;
  @media only screen and (max-width: 769px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
