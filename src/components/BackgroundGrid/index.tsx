import React from "react";
import styled from "styled-components";
import "./grid.css";

interface Iprops {
  web?: { width: string; height: string };
  mobile?: { width: string; height: string };
}

const BackgroundGrid = ({
  web = { width: "100%", height: "100%" },
  mobile = { width: "100%", height: "100%" }
}: Iprops) => {
  return (
    <Container>
      <WebView>
        <svg
          width={web.width}
          height={web.height}
          viewBox="0 0 1920 1440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <mask
              id="mask0_126_25890"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="240"
              y="0"
              width={web.width}
              height={web.height}
            >
              <rect
                width={web.width}
                height={web.height}
                transform="translate(240)"
                fill="url(#paint0_radial_126_25890)"
              />
            </mask>
            <g mask="url(#mask0_126_25890)">
              <g clipPath="url(#clip0_126_25890)">
                <g clipPath="url(#clip1_126_25890)">
                  <line x1="288.5" x2="288.5" y2="1440" stroke="#0083E2" />
                  <line x1="384.5" x2="384.5" y2="1440" stroke="#0083E2" />
                  <line x1="480.5" x2="480.5" y2="1440" stroke="#0083E2" />
                  <line x1="576.5" x2="576.5" y2="1440" stroke="#0083E2" />
                  <line x1="672.5" x2="672.5" y2="1440" stroke="#0083E2" />
                  <line x1="768.5" x2="768.5" y2="1440" stroke="#0083E2" />
                  <line x1="864.5" x2="864.5" y2="1440" stroke="#0083E2" />
                  <line x1="960.5" x2="960.5" y2="1440" stroke="#0083E2" />
                  <line x1="1056.5" x2="1056.5" y2="1440" stroke="#0083E2" />
                  <line x1="1152.5" x2="1152.5" y2="1440" stroke="#0083E2" />
                  <line x1="1248.5" x2="1248.5" y2="1440" stroke="#0083E2" />
                  <line x1="1344.5" x2="1344.5" y2="1440" stroke="#0083E2" />
                  <line x1="1440.5" x2="1440.5" y2="1440" stroke="#0083E2" />
                  <line x1="1536.5" x2="1536.5" y2="1440" stroke="#0083E2" />
                  <line x1="1632.5" x2="1632.5" y2="1440" stroke="#0083E2" />
                </g>
                <g clipPath="url(#clip2_126_25890)">
                  <line y1="95.5" x2="1920" y2="95.5" stroke="#0083E2" />
                  <line y1="191.5" x2="1920" y2="191.5" stroke="#0083E2" />
                  <line y1="287.5" x2="1920" y2="287.5" stroke="#0083E2" />
                  <line y1="383.5" x2="1920" y2="383.5" stroke="#0083E2" />
                  <line y1="479.5" x2="1920" y2="479.5" stroke="#0083E2" />
                  <line y1="575.5" x2="1920" y2="575.5" stroke="#0083E2" />
                  <line y1="671.5" x2="1920" y2="671.5" stroke="#0083E2" />
                  <line y1="767.5" x2="1920" y2="767.5" stroke="#0083E2" />
                  <line y1="863.5" x2="1920" y2="863.5" stroke="#0083E2" />
                  <line y1="959.5" x2="1920" y2="959.5" stroke="#0083E2" />
                  <line y1="1055.5" x2="1920" y2="1055.5" stroke="#0083E2" />
                  <line y1="1151.5" x2="1920" y2="1151.5" stroke="#0083E2" />
                  <line y1="1247.5" x2="1920" y2="1247.5" stroke="#0083E2" />
                  <line y1="1343.5" x2="1920" y2="1343.5" stroke="#0083E2" />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_126_25890"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 -0.000171661) rotate(90) scale(1440 751.588)"
            >
              <stop />
              <stop offset="0.953125" stopOpacity="0" />
            </radialGradient>
            <clipPath id="clip0_126_25890">
              <rect width={web.width} height={web.height} fill="white" />
            </clipPath>
            <clipPath id="clip1_126_25890">
              <rect width={web.width} height={web.height} fill="white" />
            </clipPath>
            <clipPath id="clip2_126_25890">
              <rect width={web.width} height={web.height} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </WebView>
      <MobileView>
        <svg
          width={mobile.width}
          height={mobile.height}
          viewBox="0 0 960 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <mask
              id="mask0_126_25934"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={mobile.width}
              height={mobile.height}
            >
              <rect
                width={mobile.width}
                height={mobile.height}
                fill="url(#paint0_radial_126_25934)"
              />
            </mask>
            <g mask="url(#mask0_126_25934)">
              <g clipPath="url(#clip0_126_25934)">
                <g clipPath="url(#clip1_126_25934)">
                  <line x1="96.5" x2="96.5" y2="960" stroke="#0083E2" />
                  <line x1="192.5" x2="192.5" y2="960" stroke="#0083E2" />
                  <line x1="288.5" x2="288.5" y2="960" stroke="#0083E2" />
                  <line x1="384.5" x2="384.5" y2="960" stroke="#0083E2" />
                  <line x1="480.5" x2="480.5" y2="960" stroke="#0083E2" />
                  <line x1="576.5" x2="576.5" y2="960" stroke="#0083E2" />
                  <line x1="672.5" x2="672.5" y2="960" stroke="#0083E2" />
                  <line x1="768.5" x2="768.5" y2="960" stroke="#0083E2" />
                  <line x1="864.5" x2="864.5" y2="960" stroke="#0083E2" />
                </g>
                <g clipPath="url(#clip2_126_25934)">
                  <line y1="95.5" x2="960" y2="95.5" stroke="#0083E2" />
                  <line y1="191.5" x2="960" y2="191.5" stroke="#0083E2" />
                  <line y1="287.5" x2="960" y2="287.5" stroke="#0083E2" />
                  <line y1="383.5" x2="960" y2="383.5" stroke="#0083E2" />
                  <line y1="479.5" x2="960" y2="479.5" stroke="#0083E2" />
                  <line y1="575.5" x2="960" y2="575.5" stroke="#0083E2" />
                  <line y1="671.5" x2="960" y2="671.5" stroke="#0083E2" />
                  <line y1="767.5" x2="960" y2="767.5" stroke="#0083E2" />
                  <line y1="863.5" x2="960" y2="863.5" stroke="#0083E2" />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_126_25934"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(480 -0.000114441) rotate(90) scale(960 501.059)"
            >
              <stop />
              <stop offset="0.953125" stopOpacity="0" />
            </radialGradient>
            <clipPath id="clip0_126_25934">
              <rect width={mobile.width} height={mobile.height} fill="white" />
            </clipPath>
            <clipPath id="clip1_126_25934">
              <rect width={mobile.width} height={mobile.height} fill="white" />
            </clipPath>
            <clipPath id="clip2_126_25934">
              <rect width={mobile.width} height={mobile.height} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </MobileView>
    </Container>
  );
};

export default BackgroundGrid;

const Container = styled.div`
  position: absolute;
  height: fit-content;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
`;

const WebView = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;
const MobileView = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  @media only screen and (max-width: 769px) {
    display: block;
  }
`;
