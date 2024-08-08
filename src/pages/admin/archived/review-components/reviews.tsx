import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../../../../components/container-styles/styles";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import Pagination from "../../../../components/pagination";
import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../../../components/input/searchInput";
import { IoMdArrowDown, IoMdCheckmarkCircleOutline } from "react-icons/io";
import api from "../../../../utils/axiosInstance";

import NoData from "./no-data";
import Modal from "../../../../components/modal";
import ModalChildTemplate from "../../../../components/modal/modal-child-template";
import LoadingData from "../../../../components/loading-component";
import { IReview } from "../../../../utils/types/review";
import { IoArchiveOutline } from "react-icons/io5";
import { LuArchiveRestore } from "react-icons/lu";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeId, setActiveId] = useState("");

  const GetReviews = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(
        `/review?page=${currentPage}${
          search !== "" ? `&search=${search}` : ""
        }&archive=true`
      );
      setReviews(data.results);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetReviews();
  }, [currentPage, search]);

  const [modal, setModal] = useState(false);
  const [archiveModal, setArchiveModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [actioning, setActioning] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const ArchiveReview = async () => {
    setActioning(true);
    try {
      await api.put(`review/archive/${activeId}`, { archive: false });
      setArchiveModal(false);
      setSuccessModal(true);
    } catch (err) {
    } finally {
      setActioning(false);
    }
  };
  const OnDeleteReview = async () => {
    setActioning(true);
    try {
      await api.delete(`review/${activeId}`);
      setDeleteModal(false);
      setSuccessModal(true);
    } catch (err) {
    } finally {
      setActioning(false);
    }
  };
  const OnSucessfull = async () => {
    try {
      setModal(false);
      setSuccessModal(false);
      GetReviews();
    } catch (err) {}
  };

  const CloseModal = () => {
    setModal(false);
    setArchiveModal(false);
    setSuccessModal(false);
    setDeleteModal(false);
  };

  return (
    <Container>
      <HeaderFlex>
        <Typography
          weight={TextWeight.semibold}
          lh="3.2"
          size={TextSize.DisplayXs}
        >
          Reviews
        </Typography>
        <SearchInput
          variant={true}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </HeaderFlex>
      {loading ? (
        <LoadingData />
      ) : reviews.length > 0 ? (
        <>
          <Body>
            <Modal isActive={modal} closeModal={CloseModal}>
              {archiveModal ? (
                <ModalChildTemplate
                  header="Unarchive Review"
                  subheader="Are you sure you want to Unarchive this review ?"
                  confirmText="Unarchive"
                  onConfirm={ArchiveReview}
                  onClose={() => {
                    setModal(false);
                    setArchiveModal(false);
                  }}
                  loading={actioning}
                  icon={<LuArchiveRestore color="#ffa800" size={20} />}
                />
              ) : deleteModal ? (
                <ModalChildTemplate
                  header="Delete Review"
                  subheader="Are you sure you want to delete this review?"
                  type="red"
                  confirmText="Delete"
                  onConfirm={OnDeleteReview}
                  onClose={() => {
                    setModal(false);
                    setDeleteModal(false);
                  }}
                  loading={actioning}
                  icon={<HiOutlineTrash color="#ef0000" size={20} />}
                />
              ) : successModal ? (
                <ModalChildTemplate
                  header="Successfull"
                  confirmText="Confirm"
                  onConfirm={OnSucessfull}
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
                        Name
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
                      Organization
                    </Typography>
                  </th>
                  <th scope="col">
                    <Typography
                      weight={TextWeight.medium}
                      size={TextSize.sm}
                      lh="2"
                    >
                      Rating
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
                {reviews.map(
                  (
                    {
                      name,
                      organization,
                      createdAt,
                      rating,

                      _id
                    },
                    i
                  ) => {
                    return (
                      <ReviewItem
                        onDelete={() => {
                          setActiveId(_id);
                          setDeleteModal(true);
                          setModal(true);
                        }}
                        onArchive={() => {
                          setActiveId(_id);
                          setArchiveModal(true);
                          setModal(true);
                        }}
                        name={name}
                        organization={organization}
                        rating={rating}
                        date={createdAt}
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

const ReviewItem = ({
  name,
  organization,
  rating,
  date = new Date(),
  id,
  onArchive,
  onDelete
}: {
  name: string;
  organization: string;
  rating: number;
  date: Date;
  id: string;
  onArchive: () => void;
  onDelete: () => void;
}) => {
  const navigate = useNavigate();
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <tr>
      <td
        onClick={() => {
          navigate(`/admin/review/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {name}
        </Typography>
      </td>
      <td
        onClick={() => {
          navigate(`/admin/review/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {organization}
        </Typography>
      </td>
      <td
        onClick={() => {
          navigate(`/admin/review/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {rating} stars
        </Typography>
      </td>

      <td
        onClick={() => {
          navigate(`/admin/review/${id}`);
        }}
      >
        <Typography lh="2" size={TextSize.sm}>
          {formatDate(`${date}`)}
        </Typography>
      </td>
      <td>
        <ActionButtons>
          <ArchiveReview onClick={onArchive}>
            <LuArchiveRestore size={20} />
          </ArchiveReview>
          <DeleteMail onClick={onDelete}>
            <HiOutlineTrash size={20} />
          </DeleteMail>
        </ActionButtons>
      </td>
    </tr>
  );
};

export default Reviews;

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
const ArchiveReview = styled(SendMail)`
  color: #ffa800;
  border: 1px solid #ffa800;
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
