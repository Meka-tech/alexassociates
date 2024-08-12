import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface VideoThumbnailProps {
  videoFile: File;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoFile }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (videoFile) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video && canvas) {
        const ctx = canvas.getContext("2d");

        // Ensure the context is available
        if (!ctx) return;

        // Set the canvas dimensions to match the video dimensions
        video.onloadedmetadata = () => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          video.currentTime = 1; // Set this to the time you want to capture
        };

        video.onseeked = () => {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageUrl = canvas.toDataURL("image/png");
          setThumbnail(imageUrl);
        };

        video.src = URL.createObjectURL(videoFile);
      }
    }
  }, [videoFile]);

  return (
    <Container>
      {thumbnail ? (
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      ) : (
        <p>Loading thumbnail...</p>
      )}
      <video ref={videoRef} style={{ display: "none" }} />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </Container>
  );
};

export default VideoThumbnail;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
