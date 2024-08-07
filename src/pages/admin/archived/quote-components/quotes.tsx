import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../../../../components/container-styles/styles";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import Pagination from "../../../../components/pagination";
import { LuMail } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../../../components/input/searchInput";
import { IoMdArrowDown, IoMdCheckmarkCircleOutline } from "react-icons/io";
import api from "../../../../utils/axiosInstance";

import NoData from "./no-data";
import ModalChildTemplate from "../../../../components/modal/modal-child-template";
import Modal from "../../../../components/modal";
import { IQuote } from "../../../../utils/types/quote";
import LoadingData from "../../../../components/loading-component";
import { IoArchiveOutline } from "react-icons/io5";

const Quotes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeId, setActiveId] = useState("");

  const GetQuotes = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(
        `/quote?page=${currentPage}${
          search !== "" ? `&search=${search}` : ""
        }&archive=false`
      );
      setQuotes(data.results);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetQuotes();
  }, [currentPage, search]);

  const [modal, setModal] = useState(false);
  const [archiveModal, setArchiveModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [archiving, setArching] = useState(false);

  const ArchiveQuote = async () => {
    setArching(true);
    try {
      await api.put(`quote/archive/${activeId}`, { archive: true });
      setArchiveModal(false);
      setSuccessModal(true);
    } catch (err) {
    } finally {
      setArching(false);
    }
  };
  const OnSucessfulArchive = async () => {
    try {
      setModal(false);
      setSuccessModal(false);
      GetQuotes();
    } catch (err) {}
  };

  return (
    <Container>
      <HeaderFlex>
        <Typography
          weight={TextWeight.semibold}
          lh="3.2"
          size={TextSize.DisplayXs}
        >
          Quote requests
        </Typography>
        <SearchInput
          variant={true}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </HeaderFlex>
      {loading ? (
        <LoadingData />
      ) : quotes.length > 0 ? (
        <>
          <Body>
            <Modal
              isActive={modal}
              closeModal={() => {
                setModal(false);
              }}
            >
              {archiveModal ? (
                <ModalChildTemplate
                  header="Archive quote"
                  subheader="Are you sure you want to archive this quote?"
                  confirmText="Archive"
                  onConfirm={ArchiveQuote}
                  onClose={() => setModal(false)}
                  loading={archiving}
                  icon={<IoArchiveOutline color="#ffa800" size={20} />}
                />
              ) : successModal ? (
                <ModalChildTemplate
                  header="Archived successfully!"
                  confirmText="Confirm"
                  onConfirm={OnSucessfulArchive}
                  onClose={() => setModal(false)}
                  icon={
                    <IoMdCheckmarkCircleOutline size={20} color="#079455" />
                  }
                  cancelOption={false}
                />
              ) : (
                <></>
              )}
            </Modal>
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
                {quotes.map(
                  (
                    { firstname, lastname, createdAt, email, phone, _id },
                    i
                  ) => {
                    return (
                      <QuoteItem
                        onArchive={() => {
                          setActiveId(_id);
                          setArchiveModal(true);
                          setModal(true);
                        }}
                        firstname={firstname}
                        lastname={lastname}
                        date={createdAt}
                        email={email}
                        phoneNumber={phone}
                        key={i}
                        id={_id}
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
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </PaginationContainer>
        </>
      ) : (
        <NoData />
      )}
    </Container>
  );
};

const QuoteItem = ({
  firstname,
  lastname,
  email,
  phoneNumber,
  date,
  id,
  onArchive
}: {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  date: Date;
  id: string;
  onArchive: () => void;
}) => {
  const navigate = useNavigate();
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const subject = "Reply to Quote : Alex associates";
  const body = ``;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <tr>
      <td
        onClick={() => {
          navigate(`/admin/quote/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {firstname}
        </Typography>
      </td>
      <td
        onClick={() => {
          navigate(`/admin/quote/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {lastname}
        </Typography>
      </td>
      <td
        onClick={() => {
          navigate(`/admin/quote/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {email}
        </Typography>
      </td>
      <td
        onClick={() => {
          navigate(`/admin/quote/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {phoneNumber}
        </Typography>
      </td>
      <td
        onClick={() => {
          navigate(`/admin/quote/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {formatDate(`${date}`)}
        </Typography>
      </td>
      <td>
        <ActionButtons>
          <a href={mailtoLink} style={{ all: "unset" }}>
            <SendMail onClick={() => {}}>
              <LuMail size={20} />
            </SendMail>
          </a>
          <ArchiveMail onClick={onArchive}>
            <IoArchiveOutline size={20} />
          </ArchiveMail>
        </ActionButtons>
      </td>
    </tr>
  );
};

export default Quotes;

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
    background-color: rgba(0, 15, 34, 1);
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
const ArchiveMail = styled(SendMail)`
  color: #ffa800;
  border: 1px solid #ffa800;
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
