import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section from "../section";
import StyledInput from "../../../../../components/input/primaryInput";
import StyledTextArea from "../../../../../components/input/textArea";
import TopNav from "../top-nav";
import MobileConfirmButtons from "../mobile-confirm";
import ListComponent from "./listComponent";
import api from "../../../../../services/axiosInstance";
import LoadingData from "../../../../../components/loading-component";

const OurServicesEdit = () => {
  const [data, setData] = useState<any>();
  const [loadingData, setLoadingData] = useState(false);
  const [editing, setEditing] = useState(false);
  const [changed, setChanged] = useState(false);

  const [sectionOne, setSectionOne] = useState({
    headline: "",
    paragraph: ""
  });

  const [sectionTwo, setSectionTwo] = useState<{
    headline: string;
    subheadline1: string;
    listItems1: string[];
    subheadline2: string;
    listItems2: string[];
  }>({
    headline: "",
    subheadline1: "",
    listItems1: [],
    subheadline2: "",
    listItems2: []
  });

  const [sectionThree, setSectionThree] = useState<{
    headline: string;
    subheadline1: string;
    listItems1: string[];
    subheadline2: string;
    listItems2: string[];
  }>({
    headline: "",
    subheadline1: "",
    listItems1: [],
    subheadline2: "",
    listItems2: []
  });

  const [sectionFour, setSectionFour] = useState<{
    headline: string;
    subheadline1: string;
    listItems1: string[];
    subheadline2: string;
    listItems2: string[];
    subheadline3: string;
    listItems3: string[];
  }>({
    headline: "",
    subheadline1: "",
    listItems1: [],
    subheadline2: "",
    listItems2: [],
    subheadline3: "",
    listItems3: []
  });
  const [sectionFive, setSectionFive] = useState<{
    headline: string;
    subheadline1: string;
    listItems1: string[];
  }>({
    headline: "",
    subheadline1: "",
    listItems1: []
  });

  const handleInputChange = (key: string, value: string, object: string) => {
    setChanged(true);
    if (object === "one") {
      setSectionOne((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
    if (object === "two") {
      setSectionTwo((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
    if (object === "three") {
      setSectionThree((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
    if (object === "four") {
      setSectionFour((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
    if (object === "five") {
      setSectionFive((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
  };
  const PostEdit = async () => {
    try {
      setEditing(true);

      const bodyData = {
        sectionOne,
        sectionTwo,
        sectionThree,
        sectionFour,
        sectionFive
      };
      const { data } = await api.put(`/services`, bodyData);

      setData(data.services);
      SetOGData();
    } catch (error) {
    } finally {
      setEditing(false);
    }
  };

  const getHome = async () => {
    setLoadingData(true);
    try {
      const { data } = await api.get("/services");
      const HomeData = data.services;
      setData(HomeData);
    } catch (err) {
    } finally {
      setLoadingData(false);
    }
  };

  const SetOGData = () => {
    setLoadingData(true);
    setSectionOne(data?.sectionOne);
    setSectionTwo(data?.sectionTwo);
    setSectionThree(data?.sectionThree);
    setSectionFour(data?.sectionFour);
    setSectionFive(data?.sectionFive);
    setLoadingData(false);
  };

  useEffect(() => {
    getHome();
  }, []);

  useEffect(() => {
    if (data) {
      SetOGData();
    }
  }, [data]);
  return (
    <Container>
      <TopNav
        save={PostEdit}
        saving={editing}
        changed={changed}
        discard={SetOGData}
      />
      {loadingData ? (
        <LoadingData />
      ) : (
        <>
          {" "}
          <Section
            header="Section 1 (Let’s work with you)"
            subheader="An introduction to the services page."
          >
            <TwoInputGrid>
              <StyledTextArea
                label="Headline"
                limit={160}
                value={sectionOne.headline}
                onChange={(e) =>
                  handleInputChange("headline", e.target.value, "one")
                }
              />
              <StyledTextArea
                label="Paragraph"
                value={sectionOne.paragraph}
                onChange={(e) =>
                  handleInputChange("paragraph", e.target.value, "one")
                }
              />
            </TwoInputGrid>
          </Section>
          <Section
            header="Section 2 (#1)"
            subheader="Information about the first service"
          >
            <InputItem>
              <StyledInput
                label="Headline"
                limit={50}
                value={sectionTwo.headline}
                onChange={(e) =>
                  handleInputChange("headline", e.target.value, "two")
                }
              />
            </InputItem>
            <TwoInputGrid>
              <StyledInput
                label="Sub headline 1"
                limit={50}
                value={sectionTwo.subheadline1}
                onChange={(e) =>
                  handleInputChange("subheadline1", e.target.value, "two")
                }
              />
              <StyledInput
                limit={50}
                label="Sub headline 2"
                value={sectionTwo.subheadline2}
                onChange={(e) =>
                  handleInputChange("subheadline2", e.target.value, "two")
                }
              />
            </TwoInputGrid>
            <TwoInputGrid>
              <ListComponent
                label="List items 1"
                list={sectionTwo.listItems1}
                addItem={(item) => {
                  setChanged(true);
                  setSectionTwo((prev) => ({
                    ...prev,
                    listItems1: [...prev.listItems1, item]
                  }));
                }}
                deleteItem={(index) => {
                  setChanged(true);
                  setSectionTwo((prev) => ({
                    ...prev,
                    listItems1: prev.listItems1.filter((item, i) => {
                      return i !== index;
                    })
                  }));
                }}
              />
              <ListComponent
                label="List items 2"
                list={sectionTwo.listItems2}
                addItem={(item) => {
                  setChanged(true);
                  setSectionTwo((prev) => ({
                    ...prev,
                    listItems2: [...prev.listItems2, item]
                  }));
                }}
                deleteItem={(index) => {
                  setChanged(true);
                  setSectionTwo((prev) => ({
                    ...prev,
                    listItems2: prev.listItems2.filter((_, i) => {
                      return i !== index;
                    })
                  }));
                }}
              />
            </TwoInputGrid>
          </Section>
          <Section
            header="Section 3 (#2)"
            subheader="Information about the second service"
          >
            <InputItem>
              <StyledInput
                label="Headline"
                limit={50}
                value={sectionThree.headline}
                onChange={(e) =>
                  handleInputChange("headline", e.target.value, "three")
                }
              />
            </InputItem>
            <TwoInputGrid>
              <StyledInput
                label="Sub headline 1"
                limit={50}
                value={sectionThree.subheadline1}
                onChange={(e) =>
                  handleInputChange("subheadline1", e.target.value, "three")
                }
              />
              <StyledInput
                limit={50}
                label="Sub headline 2"
                value={sectionThree.subheadline2}
                onChange={(e) =>
                  handleInputChange("subheadline2", e.target.value, "three")
                }
              />
            </TwoInputGrid>
            <TwoInputGrid>
              <ListComponent
                label="List items 1"
                list={sectionThree.listItems1}
                addItem={(item) => {
                  setChanged(true);
                  setSectionThree((prev) => ({
                    ...prev,
                    listItems1: [...prev.listItems1, item]
                  }));
                }}
                deleteItem={(index) => {
                  setChanged(true);
                  setSectionThree((prev) => ({
                    ...prev,
                    listItems1: prev.listItems1.filter((item, i) => {
                      return i !== index;
                    })
                  }));
                }}
              />
              <ListComponent
                label="List items 2"
                list={sectionThree.listItems2}
                addItem={(item) => {
                  setChanged(true);
                  setSectionThree((prev) => ({
                    ...prev,
                    listItems2: [...prev.listItems2, item]
                  }));
                }}
                deleteItem={(index) => {
                  setChanged(true);
                  setSectionThree((prev) => ({
                    ...prev,
                    listItems2: prev.listItems2.filter((_, i) => {
                      return i !== index;
                    })
                  }));
                }}
              />
            </TwoInputGrid>
          </Section>
          <Section
            header="Section 4 (#3)"
            subheader="Information about the third service"
          >
            <InputItem>
              <StyledInput
                label="Headline"
                limit={50}
                value={sectionFour.headline}
                onChange={(e) =>
                  handleInputChange("headline", e.target.value, "four")
                }
              />
            </InputItem>
            <ThreeInputGrid>
              <StyledInput
                label="Sub headline 1"
                limit={50}
                value={sectionFour.subheadline1}
                onChange={(e) =>
                  handleInputChange("subheadline1", e.target.value, "four")
                }
              />
              <StyledInput
                limit={50}
                label="Sub headline 2"
                value={sectionFour.subheadline2}
                onChange={(e) =>
                  handleInputChange("subheadline2", e.target.value, "four")
                }
              />
              <StyledInput
                limit={50}
                label="Sub headline 2"
                value={sectionFour.subheadline3}
                onChange={(e) =>
                  handleInputChange("subheadline3", e.target.value, "four")
                }
              />
            </ThreeInputGrid>
            <ThreeInputGrid>
              <ListComponent
                label="List items 1"
                list={sectionFour.listItems1}
                addItem={(item) => {
                  setChanged(true);
                  setSectionFour((prev) => ({
                    ...prev,
                    listItems1: [...prev.listItems1, item]
                  }));
                }}
                deleteItem={(index) => {
                  setChanged(true);
                  setSectionFour((prev) => ({
                    ...prev,
                    listItems1: prev.listItems1.filter((item, i) => {
                      return i !== index;
                    })
                  }));
                }}
              />
              <ListComponent
                label="List items 2"
                list={sectionFour.listItems2}
                addItem={(item) => {
                  setChanged(true);
                  setSectionFour((prev) => ({
                    ...prev,
                    listItems2: [...prev.listItems2, item]
                  }));
                }}
                deleteItem={(index) => {
                  setChanged(true);
                  setSectionFour((prev) => ({
                    ...prev,
                    listItems2: prev.listItems2.filter((_, i) => {
                      return i !== index;
                    })
                  }));
                }}
              />
              <ListComponent
                label="List items 3"
                list={sectionFour.listItems3}
                addItem={(item) => {
                  setChanged(true);
                  setSectionFour((prev) => ({
                    ...prev,
                    listItems3: [...prev.listItems3, item]
                  }));
                }}
                deleteItem={(index) => {
                  setChanged(true);
                  setSectionFour((prev) => ({
                    ...prev,
                    listItems3: prev.listItems3.filter((_, i) => {
                      return i !== index;
                    })
                  }));
                }}
              />
            </ThreeInputGrid>
          </Section>
          <Section
            header="Section 5 (#4)"
            subheader="Information about the fourth service"
          >
            <InputItem>
              <StyledInput
                label="Headline"
                limit={50}
                value={sectionFive.headline}
                onChange={(e) =>
                  handleInputChange("headline", e.target.value, "five")
                }
              />
            </InputItem>
            <InputItem>
              <StyledInput
                label="Sub headline 1"
                limit={50}
                value={sectionFive.subheadline1}
                onChange={(e) =>
                  handleInputChange("subheadline1", e.target.value, "five")
                }
              />
            </InputItem>
            <InputItem>
              <ListComponent
                label="List items 1"
                list={sectionFive.listItems1}
                addItem={(item) => {
                  setChanged(true);
                  setSectionFive((prev) => ({
                    ...prev,
                    listItems1: [...prev.listItems1, item]
                  }));
                }}
                deleteItem={(index) => {
                  setChanged(true);
                  setSectionFive((prev) => ({
                    ...prev,
                    listItems1: prev.listItems1.filter((item, i) => {
                      return i !== index;
                    })
                  }));
                }}
              />
            </InputItem>
          </Section>
        </>
      )}

      <MobileConfirmButtons
        save={PostEdit}
        saving={editing}
        changed={changed}
        discard={SetOGData}
      />
    </Container>
  );
};

export default OurServicesEdit;

const Container = styled.div`
  width: 100%;
`;
const InputItem = styled.div`
  width: 100%;
  margin-bottom: 3.2rem;
`;
const TwoInputGrid = styled.div`
  width: 100%;
  display: grid;
  align-items: start;
  justify-content: space-between;
  grid-template-columns: 48% 48%;
  grid-row-gap: 3.2rem;
  margin-bottom: 3.2rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
  }
`;
const ThreeInputGrid = styled(TwoInputGrid)`
  grid-template-columns: 32% 31% 32%;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
  }
`;
