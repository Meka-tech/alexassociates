import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import BackgroundGrid from "../../components/BackgroundGrid";
import Typography from "../../components/typography";
import { TextSize, TextWeight } from "../../components/typography/enums";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import StickyWhatsapp from "../../components/sticky-whatsapp";
import PrimaryButton from "../../components/buttons/primary";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Navbar />
      <StickyWhatsapp />
      <Body>
        <BackgroundGrid
          web={{ height: "1240px", width: "1800px" }}
          mobile={{ height: "720px", width: "700px" }}
        />
        <BackButton onClick={Back}>
          <FaArrowLeft size={10} />
          <Typography size={TextSize.md} ml="1">
            Back
          </Typography>
        </BackButton>
        <Typography
          size={TextSize.DisplayLg}
          m_size={TextSize.DisplaySm}
          weight={TextWeight.semibold}
          mb="9.6"
          m_mb="6.4"
          color="white"
        >
          Privacy Policy
        </Typography>
        <Typography size={TextSize.DisplayXs} mb="2">
          Effective Date: 16th August , 2024
        </Typography>
        <Typography
          size={TextSize.DisplayXs}
          mb="1.5"
          weight={TextWeight.semibold}
          lh="3.2"
        >
          1. Introduction
        </Typography>
        <Typography
          size={TextSize.xl}
          lh="3"
          m_size={TextSize.md}
          mb="5"
          m_lh="2.4"
        >
          Welcome to Alex & Associates. We value your privacy and are committed
          to protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard your information when you visit our
          website
        </Typography>
        <Typography
          size={TextSize.DisplayXs}
          mb="1.5"
          weight={TextWeight.semibold}
          lh="3.2"
        >
          2. Information We Collect
        </Typography>
        <Typography
          size={TextSize.xl}
          lh="3"
          m_size={TextSize.md}
          mb="5"
          m_lh="2.4"
        >
          -Personal Information: When you contact us, request a quote, or
          subscribe to our newsletter, we may collect personal information such
          as your name, email address, phone number, and project details. <br />
          -Non-Personal Information: We may collect non-personal information
          such as your IP address, browser type, and browsing behavior to
          improve our website’s performance and user experience.
        </Typography>
        <Typography
          size={TextSize.DisplayXs}
          mb="1.5"
          weight={TextWeight.semibold}
          lh="3.2"
        >
          3. How We Use Your Information
        </Typography>
        <Typography
          size={TextSize.xl}
          lh="3"
          m_size={TextSize.md}
          mb="5"
          m_lh="2.4"
        >
          -To Provide Services: We use your personal information to respond to
          inquiries, provide quotes, and deliver our design and execution
          services.
          <br /> -To Improve Our Website: Non-personal information helps us
          understand how visitors use our site, allowing us to enhance user
          experience and functionality. <br /> -To Communicate: We may use your
          contact information to send you updates, newsletters, and promotional
          materials. You can opt-out of these communications at any time.
        </Typography>
        <Typography
          size={TextSize.DisplayXs}
          mb="1.5"
          weight={TextWeight.semibold}
          lh="3.2"
        >
          4. Information Sharing and Disclosure
        </Typography>
        <Typography
          size={TextSize.xl}
          lh="3"
          m_size={TextSize.md}
          mb="5"
          m_lh="2.4"
        >
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties. However, we may share information with trusted
          third parties who assist us in operating our website and conducting
          our business, provided they agree to keep this information
          confidential.
        </Typography>
        <Typography
          size={TextSize.DisplayXs}
          mb="1.5"
          weight={TextWeight.semibold}
          lh="3.2"
        >
          5. Data Security
        </Typography>
        <Typography
          size={TextSize.xl}
          lh="3"
          m_size={TextSize.md}
          mb="5"
          m_lh="2.4"
        >
          We implement a variety of security measures to maintain the safety of
          your personal information. Despite our efforts, no website, internet
          transmission, computer system, or wireless connection is completely
          secure.
        </Typography>
        <Typography
          size={TextSize.DisplayXs}
          mb="1.5"
          weight={TextWeight.semibold}
          lh="3.2"
        >
          6. Third-Party Links
        </Typography>
        <Typography
          size={TextSize.xl}
          lh="3"
          m_size={TextSize.md}
          mb="5"
          m_lh="2.4"
        >
          Occasionally, we may include links to third-party websites. These
          third-party sites have separate and independent privacy policies. We,
          therefore, have no responsibility or liability for the content and
          activities of these linked sites.
        </Typography>
        <Typography
          size={TextSize.DisplayXs}
          mb="1.5"
          weight={TextWeight.semibold}
          lh="3.2"
        >
          7. Your Consent
        </Typography>
        <Typography
          size={TextSize.xl}
          lh="3"
          m_size={TextSize.md}
          mb="5"
          m_lh="2.4"
        >
          By using our website, you consent to our privacy policy.
        </Typography>
        <Typography
          size={TextSize.DisplayXs}
          mb="1.5"
          weight={TextWeight.semibold}
          lh="3.2"
        >
          8. Changes to Our Privacy Policy
        </Typography>
        <Typography
          size={TextSize.xl}
          lh="3"
          m_size={TextSize.md}
          mb="5"
          m_lh="2.4"
        >
          Alex & Associates reserves the right to update this Privacy Policy at
          any time. We will notify you of any changes by posting the new Privacy
          Policy on our website. Your continued use of the site after any
          changes indicates your acceptance of the updated policy
        </Typography>
        <Typography
          size={TextSize.DisplayXs}
          mb="1.5"
          weight={TextWeight.semibold}
          lh="3.2"
        >
          9. Contact Us
        </Typography>
        <Typography
          size={TextSize.xl}
          lh="3"
          m_size={TextSize.md}
          mb="5"
          m_lh="2.4"
        >
          If you have any questions about this Privacy Policy, please contact us
          at:
          <br /> -Email: alexassociates111@gmail.com <br />
          -Phone: +91 94419 01114 <br />
          -Address: [physical address]
        </Typography>
        <GoBackContainer>
          <PrimaryButton text="Go back" onClick={Back} />
        </GoBackContainer>
      </Body>
      <Footer />
    </Container>
  );
};

export default PrivacyPolicy;

const Container = styled.main`
  position: relative;
  padding-top: 8rem;
`;
const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 4.1rem 11.2rem;
  color: #e4e4e4;
  @media only screen and (max-width: 769px) {
    padding: 2.6rem 4.8rem;
  }
`;

const BackButton = styled.div`
  cursor: pointer;
  margin-bottom: 3.3rem;
  color: #0083e2;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 769px) {
    margin-bottom: 3.2rem;
  }
`;

const GoBackContainer = styled.div`
  width: fit-content;
  margin-top: 1.4rem;
  margin-bottom: 8rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 0rem;
  }
`;
