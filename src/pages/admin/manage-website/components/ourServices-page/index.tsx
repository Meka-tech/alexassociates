import React, { useState } from "react";
import styled from "styled-components";
import Section from "../section";
import StyledInput from "../../../../../components/input/primaryInput";
import StyledTextArea from "../../../../../components/input/textArea";
import TopNav from "../top-nav";
import MobileConfirmButtons from "../mobile-confirm";
import ListComponent from "./listComponent";

const OurServicesEdit = () => {
  const [sectionOne, setSectionOne] = useState({
    headline:
      "Transforming spaces with innovative design, expert planning and seamless execution.",
    paragraph:
      "At Alex & Associates, we offer a comprehensive range of interior design and architectural services tailored to meet the unique needs of each client. Our expertise spans various sectors, ensuring that we deliver exceptional results for all types of projects"
  });

  const [sectionTwo, setSectionTwo] = useState<{
    headline: string;
    subheadline1: string;
    listItems1: string[];
    subheadline2: string;
    listItems2: string[];
  }>({
    headline: "Interior Design Services",
    subheadline1: "Spaces we design",
    listItems1: [],
    subheadline2: "Scope of Work",
    listItems2: []
  });

  const [sectionThree, setSectionThree] = useState<{
    headline: string;
    subheadline1: string;
    listItems1: string[];
    subheadline2: string;
    listItems2: string[];
  }>({
    headline: "Architectural Design Services",
    subheadline1: "Scope of work",
    listItems1: [],
    subheadline2: "Specialization",
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
    headline: "Furniture and Furnishings",
    subheadline1: "Fixed Furniture",
    listItems1: [],
    subheadline2: "Moveable Furniture",
    listItems2: [],
    subheadline3: "Interior Accessories",
    listItems3: []
  });
  const [sectionFive, setSectionFive] = useState<{
    headline: string;
    subheadline1: string;
    listItems1: string[];
  }>({
    headline: "Execution & Supervision",
    subheadline1: "Scope of work",
    listItems1: []
  });

  const handleInputChange = (key: string, value: string, object: string) => {
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

  return (
    <Container>
      <TopNav />
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
              setSectionTwo((prev) => ({
                ...prev,
                listItems1: [...prev.listItems1, item]
              }));
            }}
            deleteItem={(index) => {
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
              setSectionTwo((prev) => ({
                ...prev,
                listItems2: [...prev.listItems2, item]
              }));
            }}
            deleteItem={(index) => {
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
              setSectionThree((prev) => ({
                ...prev,
                listItems1: [...prev.listItems1, item]
              }));
            }}
            deleteItem={(index) => {
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
              setSectionThree((prev) => ({
                ...prev,
                listItems2: [...prev.listItems2, item]
              }));
            }}
            deleteItem={(index) => {
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
              setSectionFour((prev) => ({
                ...prev,
                listItems1: [...prev.listItems1, item]
              }));
            }}
            deleteItem={(index) => {
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
              setSectionFour((prev) => ({
                ...prev,
                listItems2: [...prev.listItems2, item]
              }));
            }}
            deleteItem={(index) => {
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
              setSectionFour((prev) => ({
                ...prev,
                listItems3: [...prev.listItems3, item]
              }));
            }}
            deleteItem={(index) => {
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
              setSectionFive((prev) => ({
                ...prev,
                listItems1: [...prev.listItems1, item]
              }));
            }}
            deleteItem={(index) => {
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

      <MobileConfirmButtons />
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
