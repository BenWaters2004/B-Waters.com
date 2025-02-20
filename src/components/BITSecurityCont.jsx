import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projectsData } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { EyeIcon } from "@heroicons/react/24/outline";


const BITSecurityCont = () => {

  const lssProject = projectsData.find((project) => project.title === "BIT Security");

  return (
    <>
      <motion.div variants={textVariant()} className="my-12">
        <div className="flex space-x-4 my-4">
          <a href="/" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"><FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back</a>
        </div>
        <p className={styles.sectionSubText}>
          <span className="text-[#13ab88]">{"<"}</span>For BlueScreen IT Ltd<span className="text-[#13ab88]">{"/>"}</span>
        </p>
        <h2 className={styles.sectionHeadText}>Cyber Security Services Website.</h2>
        <p className={styles.sectionSubText}>Project Completed on 14/03/2024</p>
      </motion.div>

      <img src={lssProject?.image} alt="LSS Website Image" className="w-[full] md:w-[50%] my-12 items-center" />

      {/* Button Links */}
      <div className="flex space-x-4 my-6">
        <a href={lssProject?.gitUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]">
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5 mr-2" /> GitHub
        </a>
        <a
          href={lssProject?.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"
        >
          <EyeIcon className="h-5 w-5 mr-2" /> View
        </a>
      </div>

      {/* Company Description */}
      <p>This website was originally made in WordPress, my job was to code the website from scratch in PHP Laravel using the same design. This was to give us more control over the website and improve SEO.</p><br />
      <p>More description coming soon</p><br />
      <p></p><br />
      <p></p>

      {/* Button Links */}
      <div className="flex space-x-4 my-4">
        <a href="/" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"><FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back</a>
        <a href={lssProject?.gitUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]">
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5 mr-2" /> GitHub
        </a>
        <a
          href={lssProject?.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-black text-white border border-gray-400 rounded-md hover:border-[#13ab88]"
        >
          <EyeIcon className="h-5 w-5 mr-2" /> View
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(BITSecurityCont, "BITSecurityCont");