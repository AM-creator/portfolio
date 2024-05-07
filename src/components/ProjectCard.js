import { Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubUrl,
  videoUrl,
  webUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={`proj-imgbx${!imgUrl && !videoUrl ? " no-media" : ""}`}>
        {imgUrl && !videoUrl && <img src={imgUrl} alt="project" />}
        {videoUrl && (
          <video controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="proj-txtx">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          )}
          <h5>{title}</h5>
          {(description || (!imgUrl && !videoUrl)) && (
            <span>{description}</span>
          )}
        </div>
      </div>
    </Col>
  );
};
