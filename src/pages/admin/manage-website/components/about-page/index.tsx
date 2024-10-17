import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section from "../section";
import StyledInput from "../../../../../components/input/primaryInput";
import StyledTextArea from "../../../../../components/input/textArea";
import { ITeamItem } from "../../../../../types/teamItem";
import TeamItem from "./team-item";
import PrimaryButton from "../../../../../components/buttons/primary";
import PartnerItem from "./partner-item";
import TopNav from "../top-nav";
import MobileConfirmButtons from "../mobile-confirm";
import api from "../../../../../services/axiosInstance";
import { UploadImage } from "../../../../../services/upload-image";
import LoadingData from "../../../../../components/loading-component";

const AboutPageEdit = () => {
  const [data, setData] = useState<any>();
  const [loadingData, setLoadingData] = useState(false);
  const [editing, setEditing] = useState(false);
  const [changed, setChanged] = useState(false);

  const [sectionOne, setSectionOne] = useState({
    headline: "",
    paragraph: ""
  });

  const [sectionTwo, setSectionTwo] = useState({
    headline: "",
    subheadline: "",
    paragraph1: "",
    paragraph2: ``,
    paragraph3: "",
    paragraph4: ``,
    paragraph5: "",
    paragraph6: ""
  });

  const [teamSection, setTeamSection] = useState<{
    headline: string;
    subheadline: string;
    team: ITeamItem[];
  }>({
    headline: "",
    subheadline: "",
    team: [
      {
        fullname: "",
        role: "",
        description: "",
        image: undefined
      }
    ]
  });

  const [partnerSection, setPartnerSection] = useState<{
    headline: string;
    subheadline: string;
    partners: ITeamItem[];
  }>({
    headline: "",
    subheadline: "",
    partners: [
      {
        fullname: "",
        role: "",
        description: "",
        image: undefined
      }
    ]
  });

  const handleTeamChange = (index: number, newTeam: Partial<ITeamItem>) => {
    setChanged(true);
    setTeamSection((prevSection) => ({
      ...prevSection,
      team: prevSection.team.map((member, i) =>
        i === index ? { ...member, ...newTeam } : member
      )
    }));
  };

  const RemoveTeamMember = (index: number) => {
    setChanged(true);
    setTeamSection((prevSection) => ({
      ...prevSection,
      team: prevSection.team.filter((_, i) => i !== index)
    }));
  };

  const AddTeamMember = () => {
    setChanged(true);
    setTeamSection((prev) => ({
      ...prev,
      team: [
        ...prev.team,
        {
          fullname: "",
          role: "",
          description: "",
          image: undefined
        }
      ]
    }));
  };

  const handlePartnerChange = (index: number, newTeam: Partial<ITeamItem>) => {
    setChanged(true);
    setPartnerSection((prevSection) => ({
      ...prevSection,
      partners: prevSection.partners.map((partner, i) =>
        i === index ? { ...partner, ...newTeam } : partner
      )
    }));
  };

  const RemovePartner = (index: number) => {
    setChanged(true);
    setPartnerSection((prevSection) => ({
      ...prevSection,
      partners: prevSection.partners.filter((_, i) => i !== index)
    }));
  };

  const AddPartner = () => {
    setChanged(true);
    setPartnerSection((prev) => ({
      ...prev,
      partners: [
        ...prev.partners,
        {
          fullname: "",
          role: "",
          description: "",
          image: undefined
        }
      ]
    }));
  };

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
    if (object === "team") {
      setTeamSection((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
    if (object === "partner") {
      setPartnerSection((prevSection) => ({
        ...prevSection,
        [key]: value
      }));
    }
  };
  const PostTeamImages = async () => {
    try {
      let team: {
        fullname?: string;
        role?: string;
        description?: string;
        image?: string;
      }[] = [];
      for (let i = 0; i < teamSection.team.length; i++) {
        const member = teamSection.team[i];

        if (member.image?.size) {
          const MediaId = await UploadImage(member.image);
          const newMemberItem = { ...member, image: MediaId };

          team = [...team, newMemberItem];
        } else if (member.image) {
          const newReviewItem = { ...member, image: member.image._id };
          team = [...team, newReviewItem];
        }
      }
      return {
        headline: teamSection.headline,
        subheadline: teamSection.subheadline,
        team
      };
    } catch (err) {}
  };

  const PostPartnerImages = async () => {
    try {
      let partners: {
        fullname?: string;
        role?: string;
        description?: string;
        image?: string;
      }[] = [];
      for (let i = 0; i < partnerSection.partners.length; i++) {
        const partner = partnerSection.partners[i];

        if (partner.image?.size) {
          const MediaId = await UploadImage(partner.image);
          const newpartnerItem = { ...partner, image: MediaId };

          partners = [...partners, newpartnerItem];
        } else if (partner.image) {
          const newReviewItem = { ...partner, image: partner.image._id };
          partners = [...partners, newReviewItem];
        }
      }
      return {
        headline: partnerSection.headline,
        subheadline: partnerSection.subheadline,
        partners
      };
    } catch (err) {}
  };
  const PostEdit = async () => {
    try {
      setEditing(true);
      const partnerSection = await PostPartnerImages();
      const teamSection = await PostTeamImages();
      const bodyData = {
        sectionOne,
        sectionTwo,
        teamSection,
        partnerSection
      };
      const { data } = await api.put(`/about`, bodyData);

      setData(data.about);
      SetOGData();
    } catch (error) {
    } finally {
      setEditing(false);
    }
  };

  const getAbout = async () => {
    setLoadingData(true);
    try {
      const { data } = await api.get("/about");
      const AboutData = data.about;
      setData(AboutData);
    } catch (err) {
    } finally {
      setLoadingData(false);
    }
  };

  const SetOGData = () => {
    setLoadingData(true);
    setSectionOne(data?.sectionOne);
    setSectionTwo(data?.sectionTwo);
    setTeamSection(data?.teamSection);
    setPartnerSection(data?.partnerSection);
    setLoadingData(false);
  };

  useEffect(() => {
    getAbout();
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
            subheader="Section consisting of partners of the Alex & Associates team"
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
                  handleInputChange("headline", e.target.value, "partner")
                }
              />
              <StyledInput
                limit={250}
                label="Sub headline"
                value={partnerSection.subheadline}
                onChange={(e) =>
                  handleInputChange("subheadline", e.target.value, "partner")
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
