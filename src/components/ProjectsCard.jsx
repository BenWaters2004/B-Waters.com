import React, { useState, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [showModal, setShowModal] = useState(false);

  // Handle scroll lock when modal is open
  useEffect(() => {
    if (showModal) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = 'auto';
    }
    // Clean up to ensure the style is reset when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const handleGitLinkClick = (gitUrl) => {
    if (gitUrl === "#PrivateRepository") {
      setShowModal(true);
    } else {
      window.open(gitUrl, "_blank");
    }
  };

  const handleCaseLinkClick = (title) => {
    window.open(title, "_self");
  };

  return (
    <div>
      <div className="hover:outline hover:outline-[#13ab88] rounded-xl">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group z-5"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundColor: "#fff", backgroundPosition: "center" }}
          alt={"Project: " + title}
        >
          <div className="overlay rounded-t-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <button
              onClick={() => handleGitLinkClick(gitUrl)}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <FontAwesomeIcon
                alt="GitHub"
                icon={faGithub}
                className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
              />
            </button>
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon
                alt="View link"
                className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
              />
            </a>
          </div>
        </div>
        <div className="text-white rounded-b-xl bg-tertiary py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
          <button className="mt-5 hover:underline text-white hover:text-[#13ab88]" onClick={() => handleCaseLinkClick(title)}>
            See the case study <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg z-50">
            <h3 className="text-xl font-bold text-black">Private Repository</h3>
            <p className="text-black my-5">
              Sorry, this repository is on private by request of the client.
              <br />You can still view the project using the view button
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-tertiary text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
