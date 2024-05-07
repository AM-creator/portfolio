import React from "react";

export const VideoPlayer = ({ title, videoUrl, description }) => {
  return (
    <div className="video">
      <div className="video-container">
        <iframe
          src={videoUrl}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video-intro">
        <h5 className="video-title">{title}</h5>
        <p className="video-txt">{description}</p>
      </div>
    </div>
  );
};
