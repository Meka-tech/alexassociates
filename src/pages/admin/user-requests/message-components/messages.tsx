import React, { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../../../../components/container-styles/styles";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import Pagination from "../../../../components/pagination";
import { LuMail } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { data } from "./dummyData";
import SearchInput from "../../../../components/input/searchInput";
import { IoMdArrowDown } from "react-icons/io";

const Messages = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Container>
      <HeaderFlex>
        <Typography
          weight={TextWeight.semibold}
          lh="3.2"
          size={TextSize.DisplayXs}
        >
          Messages
        </Typography>
        <SearchInput variant={true} />
      </HeaderFlex>
      <Body>
        <TableContainer>
          <thead>
            <tr>
              <th scope="col">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    weight={TextWeight.medium}
                    size={TextSize.sm}
                    lh="2"
                    mr="1"
                  >
                    First name
                  </Typography>
                  <IoMdArrowDown size={15} />
                </div>
              </th>
              <th scope="col">
                <Typography
                  weight={TextWeight.medium}
                  size={TextSize.sm}
                  lh="2"
                >
                  Last name
                </Typography>
              </th>
              <th scope="col">
                <Typography
                  weight={TextWeight.medium}
                  size={TextSize.sm}
                  lh="2"
                >
                  Email
                </Typography>
              </th>
              <th scope="col">
                <Typography
                  weight={TextWeight.medium}
                  size={TextSize.sm}
                  lh="2"
                >
                  Phone number
                </Typography>
              </th>
              <th scope="col">
                <Typography
                  weight={TextWeight.medium}
                  size={TextSize.sm}
                  lh="2"
                >
                  Date
                </Typography>
              </th>
              <th scope="col">
                <Typography
                  weight={TextWeight.medium}
                  size={TextSize.sm}
                  lh="2"
                >
                  Action
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({ firstname, lastname, date, email, phoneNumber }, i) => {
                return (
                  <MessageItem
                    firstname={firstname}
                    lastname={lastname}
                    date={date}
                    email={email}
                    phoneNumber={phoneNumber}
                    key={i}
                    id={i.toString()}
                  />
                );
              }
            )}
          </tbody>
        </TableContainer>
      </Body>
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

const MessageItem = ({
  firstname,
  lastname,
  email,
  phoneNumber,
  date,
  id
}: {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  date: string;
  id: string;
}) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td
        onClick={() => {
          navigate(`/admin/message/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {firstname}
        </Typography>
      </td>
      <td
        onClick={() => {
          navigate(`/admin/message/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {lastname}
        </Typography>
      </td>
      <td
        onClick={() => {
          navigate(`/admin/message/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {email}
        </Typography>
      </td>
      <td
        onClick={() => {
          navigate(`/admin/message/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {phoneNumber}
        </Typography>
      </td>
      <td
        onClick={() => {
          navigate(`/admin/message/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {date}
        </Typography>
      </td>
      <td>
        <ActionButtons>
          <SendMail
          // onClick={() => {
          //   navigate(`/admin/message/${id}`);
          // }}
          >
            <LuMail size={20} />
          </SendMail>
          <DeleteMail>
            <HiOutlineTrash size={20} />
          </DeleteMail>
        </ActionButtons>
      </td>
    </tr>
  );
};

export default Messages;

const Container = styled.div`
  border-top: 1px solid #2e3b41;
  padding: 2.4rem 11.2rem;
  padding-bottom: 9.6rem;
  @media only screen and (max-width: 769px) {
    padding: 2.4rem 1.6rem;
    padding-bottom: 6.4rem;
    /* overflow-x: scroll; */
  }
`;

const HeaderFlex = styled(FlexBox)`
  color: white;
  margin-bottom: 1.6rem;
  display: grid;
  grid-template-columns: 50% 25%;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    padding: 2.4rem 0;
    padding-bottom: 4.8rem;
    grid-row-gap: 3.2rem;
  }
`;

const Body = styled.div`
  width: 100%;
  @media only screen and (max-width: 769px) {
    overflow-x: scroll;
  }
`;
const TableContainer = styled.table`
  margin-bottom: 6.4rem;
  width: 100%;
  color: white;
  border-collapse: collapse;
  @media only screen and (max-width: 769px) {
    width: 100rem;
  }

  tr {
    background-color: transparent;
    cursor: pointer;
    &:nth-child(odd) {
      background-color: #01111a;
    }
  }
  th {
    text-align: left;
    color: #fafafa;
    padding: 1.2rem 2.4rem;
    border-top: 1px solid #0083e2;
    border-bottom: 1px solid #0083e2;
    background-color: rgba(0, 10, 15, 1);
    cursor: auto;
  }
  td {
    color: #e4e4e4;
    padding: 1.2rem 2.4rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
`;

const SendMail = styled.div`
  cursor: pointer;
  background-color: white;
  border: 1px solid #58b9ff;
  border-radius: 0.6rem;
  width: 3.6rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #58b9ff;
  margin-right: 0.4rem;
`;
const DeleteMail = styled(SendMail)`
  color: #ef0000;
  border: 1px solid #ef0000;
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
