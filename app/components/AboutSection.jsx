"use client";
import React ,{useTransition , useState} from 'react'
import TabButton from './TabButton';
import Image from "next/image";

import { FaJava, FaPython, FaAws } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJson,
  SiXml,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdImage } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <div className="p-2 bg-black shadow-lg rounded-1xl hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">Programming</h3>
            <div className="flex gap-4 text-2xl">
              <SiC style={{ color: "#A8B9CC" }} title="C" />
              <SiCplusplus style={{ color: "#00599C" }} title="C++" />
              <FaJava style={{ color: "orange" }} title="Java" />
              <SiJavascript style={{ color: "yellow" }} title="JavaScript" />
              <FaPython style={{ color: "#3776AB" }} title="Python" />
            </div>
          </div>
        </li>

        <li>
          <div className="p-2 bg-black shadow-lg rounded-1xl hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">Web</h3>
            <div className="flex gap-4 text-2xl">
              <SiNextdotjs style={{ color: "#FFFFFF" }} title="Next.js" />
              <SiReact style={{ color: "#61DAFB" }} title="React" />
              <SiNodedotjs style={{ color: "#339933" }} title="Node.js" />
              <SiHtml5 style={{ color: "#E34F26" }} title="HTML" />
              <SiCss3 style={{ color: "#1572B6" }} title="CSS" />
              <SiJson style={{ color: "#FFFFFF" }} title="JSON" />
              <SiXml style={{ color: "#FF6600" }} title="XML" />
            </div>
          </div>
        </li>
        <li>
          <div className="p-2 bg-black shadow-lg rounded-1xl hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">Cloud</h3>
            <div className="flex gap-4 text-2xl">
              <FaAws style={{ color: "#FF9900" }} title="AWS" />
            </div>
          </div>
        </li>
        <li>
          <div className="p-2 bg-black shadow-lg rounded-1xl hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">Database</h3>
            <div className="flex gap-4 text-2xl">
              <SiMongodb
                style={{ color: "#47A248" }}
                title="MongoDB"
                className="text-1xl"
              />
              <SiMysql
                style={{ color: "#4479A1" }}
                title="MySQL"
                className="text-1xl"
              />
              <SiPostgresql
                style={{ color: "#336791" }}
                title="PostgreSQL"
                className="text-1xl"
              />
            </div>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b>B.Tech in Computer Science</b>, VIT Chennai (2022-2026)
        </li>
        <li>
          <b>CBSE </b>(12th Std), Chettinad Vidyashram (2020-2022)
        </li>
        <li>
          <b>SSLC </b>(10th Std), The TVS School (2018-2020)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Java Full Stack from Imarticus
          <a href="/cert1.pdf" target="_blank" className="text-blue-500 px-4">
            Link
          </a>
        </li>
        <li>
          Databases and SQL for Data Science with Python from IBM
          <a
            href="https://coursera.org/share/28c10f4a0a297670122f38c63be02859"
            target="_blank"
            className="text-blue-500 px-4"
          >
            Link
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>1st Prize - Scire Festo , School Science Expo</li>
        <li>
          Bronze Medal - SOF National Science Olympiad (2019-20), School Level
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab,setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 px-4 py-8 xl:gap-16 sm:py-16 ">
        <Image
          className="inline-block animate-slideInLeft py-20"
          src="/images/Header-Image.jpeg"
          alt="About Me Image"
          height={900}
          width={900}
        />
        <div className="mt-4 md:mt-0 text-left flex-col hifull px-9 py-2 inline-block animate-slideInRight">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <br />
          <p className="text-base lg:text-lg">
            I have strong expertise in <b>Machine Learning</b>,{" "}
            <b>Image Processing</b>, and <b>Full Stack Development</b>, with
            hands-on experience in <b>Java server-side programming</b>,{" "}
            <b>database management</b>, and <b>efficient query writing</b>. I've
            worked with <b>AWS services</b> including <b>SageMaker</b>,{" "}
            <b>S3</b>, <b>IAM</b>, <b>Amplify</b>, and <b>CloudWatch</b>.
            Skilled in <b>Backend development</b>, <b>OOP</b>, and{" "}
            <b>design documentation</b>, I also bring strong{" "}
            <b>communication</b> and <b>teamwork skills</b> to collaborative
            environments.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              className="text-purple-600"
            >
              
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.map(
              (item) =>
                item.id === tab && (
                  <div key={item.id} className="text-white">
                    <h3 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <div className="text-base lg:text-lg">
                      {isPending ? "Loading..." : item.content}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection