"use client";
import React from 'react'
import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "SPARk Movie Review Web App",
    imgUrl: "/images/Project-1.png",
    desc: "Movie review website designed to provide users with a comprehensive database of movie details. Users can log in to rate movies and write comments about them. The website also features filtering options, allowing users to search for movies based on their ratings. The entire application is deployed on Vercel.",
    tag: ["HTML", "CSS", "JavaScript", "MongoDB", "Rest API"],
  },
  {
    id: 2,
    title: "Automatic Inscription Converter",
    imgUrl: "/images/Project-2.png",
    desc: "A Tamil inscription converter that preprocesses, segments, and analyzes inscriptions using a machine learning model to generate readable Tamil text, enabling easier interpretation and preservation of historical documents",
    tag: ["Python", "Keras", "Optical Character Recognition","Natural Language Processing"],
  },
  {
    id: 3,
    title: "Disaster-Information Aggregation-Software",
    imgUrl: "/images/Project-3.png",
    desc: "A Web Application which collects information from various sources(socialmedia, newsletters, open sources) about natural disaster in real time and presents the collected information in a visually convenient way on the website. It also features an interactive real-time disaster map that displays the locations and severity of disasters.",
    tag: ["HTML", "CSS", "Flask", "Beautiful Soup", "MongoDB", "Rest API"],
  },
  {
    id: 4,
    title:
      "Integrating VLM for Enhanced Geospatial Analysis (Conference Paper)",
    imgUrl: "/images/Project-4.png",
    desc: "Designed an image retrieval system using a CLIP-based model to better match images with relevant text.Improved accuracy by enhancing how image and text features are aligned.Tested on the RSICD dataset, achieving a 0.9998 similarity score and outperforming standard models in key metrics.",
    tag: [
      "Python",
      "VLM",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Image Captioning",
    ],
  },
  {
    id: 5,
    title: "Land Cover Classification and Segmentation",
    imgUrl: "/images/Project-5.png",
    desc: "Developed a land cover classification system using a U-Net model on high-resolution satellite imagery from the Bhuvan dataset.Classified five land types : vegetation, urban, forest, water, and roads.",
    tag: [
      "Python",
      "Deep Learning",
      "Image Processing",
      "Computer Vision",
      "OpenCV",
      "CNN",
      "Image Segmentation",
    ],
  },
];

const WEB_TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "MongoDB",
  "Rest API",
  "Web",
  "Web Development",
  "MongoDB",
  "Flask",
  "Beautiful Soup",
   "Express.js",
];
const ML_TAGS = [
  "Python",
  "Keras",
  "TensorFlow",
  "PyTorch",
  "Optical Character Recognition",
  "Image Processing",
  "Computer Vision",
  "OpenCV",
  "NumPy",
  "Pandas",
  "VLM",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Image Captioning",
  "CNN",
  "Image Segmentation",
];

const ProjectsSection = () => {
  const [category, setCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

    const filteredProjects = PROJECTS.filter((project) => {
    if (category === "All") {
        return true; 
    }
    if (category === "Web Development") {
     console.log("HERE IT IS HERE HERE HERE",project.tag);
      return project.tag.some(tag => WEB_TAGS.includes(tag));
    } else if (category === "Machine Learning") {
      return project.tag.some(tag => ML_TAGS.includes(tag));
    }
    return false;
  });



  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleCategoryChange}
          name="All"
          isSelected={category === "All"}
        />
        <ProjectTag
          onClick={handleCategoryChange}
          name="Web Development"
          isSelected={category === "Web Development"}
        />
        <ProjectTag
          onClick={handleCategoryChange}
          name="Machine Learning"
          isSelected={category === "Machine Learning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              desc={project.desc}
              imgUrl={project.imgUrl}
              tag={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;