import React, { useState } from "react";
import styled from "styled-components";
import Section from "../section";
import StyledInput from "../../../../../components/input/primaryInput";
import StyledTextArea from "../../../../../components/input/textArea";
import { ITeamItem } from "../../../../../utils/types/teamItem";
import TeamItem from "./team-item";
import PrimaryButton from "../../../../../components/buttons/primary";
import PartnerItem from "./partner-item";
import TopNav from "../top-nav";
import MobileConfirmButtons from "../mobile-confirm";

const AboutPageEdit = () => {
  const [sectionOne, setSectionOne] = useState({
    headline:
      "Our mission is to transform spaces into functional and aesthetically pleasing environments tailored to our clients’ needs.",
    paragraph:
      "Alex & Associates is a premier interior design and architectural firm based in Vizag, dedicated to transforming spaces with innovative and high-quality design solutions. Founded by Flight Lieutenant Alex Bennett (Retd.), our firm has built a reputation for excellence over 20 years of experience."
  });

  const [sectionTwo, setSectionTwo] = useState({
    headline: "We do it better !",
    subheadline:
      "We’ve already helped over 4,000 companies achieve remarkable results.",
    paragraph1:
      "Alex & Associates...one of the finest interior designers and design converters from Vizag, spreading their wings beyond Vizag, redefining and transforming spaces and lives.",
    paragraph2: `The firm was founded by Flight Lieutenant Alex Bennett (Retd).He re-invented himself as a designer after leaving the services. Initially, he was freelancing from 1997 and later started formal operations from 1st April 2006 under the firm name "Alex & Associates". The firm has an accumulated experience of over 20 years. The firm's field of expertise covers Interior designing, Landscaping and Project Management. They have also undertaken a few Architectural works. They are a major associate of Cipy Polyurethanes Pvt Ltd, into Industrial and Decorative flooring segment, Water proofing, Protective coatings.`,
    paragraph3:
      "At Alex & Associates, we are committed to quality, creativity, and ethical business practices. Our goal is to deliver exceptional design solutions that enhance the physical and psychological well-being of the occupants, creating harmonious and productive environments.",
    paragraph4: `Design principle "Form follows function" which means we don't believe in design for the sake of design. Design or the form that is imparted must be guided by function.
Interior designing in the context of any space must take into consideration the occupants comfort in terms of physical/ mental environment and operational requirement.
Basically, evaluating the Space - Functional economics - Physical comfort / Ergonomics - Aesthetics which creates the psychological environment for optimum productivity in work spaces`,
    paragraph5:
      "We are committed to Quality, Innovation of form aimed at functionality, Creativity and Ethical business.",
    paragraph6:
      "Join us in our mission to redefine and transform spaces, bringing your vision to life with our expertise and passion for design"
  });

  const [teamSection, setTeamSection] = useState<{
    headline: string;
    subheadline: string;
    team: ITeamItem[];
  }>({
    headline: "Meet our team",
    subheadline:
      "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.",
    team: [
      {
        fullname: "Amélie Laurent",
        role: "Founder & CEO",
        description:
          "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        image: undefined
      }
    ]
  });

  const [partnerSection, setPartnerSection] = useState<{
    headline: string;
    subheadline: string;
    partners: ITeamItem[];
  }>({
    headline: "Meet our team",
    subheadline:
      "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.",
    partners: [
      {
        fullname: "Amélie Laurent",
        role: "Founder & CEO",
        description:
          "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        image: undefined
      }
    ]
  });

  const handleTeamChange = (index: number, newTeam: Partial<ITeamItem>) => {
    setTeamSection((prevSection) => ({
      ...prevSection,
      team: prevSection.team.map((member, i) =>
        i === index ? { ...member, ...newTeam } : member
      )
    }));
  };

  const RemoveTeamMember = (index: number) => {
    setTeamSection((prevSection) => ({
      ...prevSection,
      team: prevSection.team.filter((_, i) => i !== index)
    }));
  };

  const AddTeamMember = () => {
    setTeamSection((prev) => ({
      ...prev,
      team: [
        ...prev.team,
        {
          name: "",
          organization: "",
          review: "",
          rating: 0,
          image: undefined
        }
      ]
    }));
  };

  const handlePartnerChange = (index: number, newTeam: Partial<ITeamItem>) => {
    setPartnerSection((prevSection) => ({
      ...prevSection,
      partners: prevSection.partners.map((partner, i) =>
        i === index ? { ...partner, ...newTeam } : partner
      )
    }));
  };

  const RemovePartner = (index: number) => {
    setPartnerSection((prevSection) => ({
      ...prevSection,
      partners: prevSection.partners.filter((_, i) => i !== index)
    }));
  };

  const AddPartner = () => {
    setPartnerSection((prev) => ({
      ...prev,
      partners: [
        ...prev.partners,
        {
          name: "",
          organization: "",
          review: "",
          rating: 0,
          image: undefined
        }
      ]
    }));
  };

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
    if (object === "team") {
      setTeamSection((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
  };

  return (
    <Container>
      <TopNav />
      <Section
        header="Section 1 (Nice to meet you)"
        subheader="An introduction to the about us page"
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
        header="Section 2 (Our story)"
        subheader="Summary of the company’s story and approach to success."
      >
        <TwoInputGrid>
          <StyledInput
            label="Headline"
            limit={50}
            value={sectionTwo.headline}
            onChange={(e) =>
              handleInputChange("headline", e.target.value, "two")
            }
          />
          <StyledInput
            label="Sub headine"
            value={sectionTwo.subheadline}
            onChange={(e) =>
              handleInputChange("subheadline", e.target.value, "two")
            }
          />
          <StyledTextArea
            label="Paragraph 1"
            value={sectionTwo.paragraph1}
            onChange={(e) =>
              handleInputChange("paragraph1", e.target.value, "two")
            }
          />
          <StyledTextArea
            label="Paragraph 2"
            value={sectionTwo.paragraph2}
            onChange={(e) =>
              handleInputChange("paragraph2", e.target.value, "two")
            }
          />
          <StyledTextArea
            label="Paragraph 3"
            value={sectionTwo.paragraph3}
            onChange={(e) =>
              handleInputChange("paragraph3", e.target.value, "two")
            }
          />
          <StyledTextArea
            label="Paragraph 4"
            value={sectionTwo.paragraph4}
            onChange={(e) =>
              handleInputChange("paragraph4", e.target.value, "two")
            }
          />
          <StyledTextArea
            label="Paragraph 5"
            value={sectionTwo.paragraph5}
            onChange={(e) =>
              handleInputChange("paragraph5", e.target.value, "two")
            }
          />
          <StyledTextArea
            label="Paragraph 6"
            value={sectionTwo.paragraph6}
            onChange={(e) =>
              handleInputChange("paragraph6", e.target.value, "two")
            }
          />
        </TwoInputGrid>
      </Section>
      <Section
        header="Team Section"
        subheader="Section consisting of members of the Alex & Associates team"
      >
        <TwoInputGrid>
          <StyledInput
            label="Headline"
            limit={50}
            value={teamSection.headline}
            onChange={(e) =>
              handleInputChange("headline", e.target.value, "team")
            }
          />
          <StyledInput
            limit={250}
            label="Sub headline"
            value={teamSection.subheadline}
            onChange={(e) =>
              handleInputChange("Subheadline", e.target.value, "team")
            }
          />
        </TwoInputGrid>
        {teamSection.team.map((member, i) => {
          return (
            <TeamItem
              remove={RemoveTeamMember}
              {...member}
              key={i}
              index={i}
              handleChange={handleTeamChange}
            />
          );
        })}
        <ButtonContainer>
          <PrimaryButton
            text="Add member"
            variant={true}
            onClick={AddTeamMember}
          />
        </ButtonContainer>
      </Section>
      <Section
        header="Partners Section"
        subheader="Section consisting of the Alex & Associates partners"
      >
        <TwoInputGrid>
          <StyledInput
            label="Headline"
            limit={50}
            value={partnerSection.headline}
            onChange={(e) =>
              handleInputChange("headline", e.target.value, "team")
            }
          />
          <StyledInput
            limit={250}
            label="Sub headline"
            value={partnerSection.subheadline}
            onChange={(e) =>
              handleInputChange("Subheadline", e.target.value, "team")
            }
          />
        </TwoInputGrid>
        {partnerSection.partners.map((partner, i) => {
          return (
            <PartnerItem
              remove={RemovePartner}
              {...partner}
              key={i}
              index={i}
              handleChange={handlePartnerChange}
            />
          );
        })}
        <ButtonContainer>
          <PrimaryButton
            text="Add Partner"
            variant={true}
            onClick={AddPartner}
          />
        </ButtonContainer>
      </Section>
      <MobileConfirmButtons />
    </Container>
  );
};

export default AboutPageEdit;

const Container = styled.div`
  width: 100%;
`;
const TwoInputGrid = styled.div`
  width: 100%;
  display: grid;
  align-items: start;
  justify-content: space-between;
  grid-template-columns: 48% 48%;
  grid-row-gap: 6.4rem;
  margin-bottom: 2.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
  }
`;
const ButtonContainer = styled.div`
  margin-left: auto;
  width: 15.5rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;
