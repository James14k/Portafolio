import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiPython,
  SiDjango,
  SiKotlin,
  SiSpring,
  SiDocker,
  SiMysql,
  SiGit,
  SiAmazonaws,
} from "react-icons/si";
import {
  FaMicrochip,
  FaCloud,
  FaDatabase,
  FaCode,
  FaCoffee,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import useTranslation from "../i18n/useTranslation";

const Skills = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  const skills = [
    { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
    { name: "JAVASCRIPT", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "REACT", icon: <SiReact color="#61DAFB" /> },
    { name: "BOOTSTRAP", icon: <SiBootstrap color="#7952B3" /> },
    { name: "PYTHON", icon: <SiPython color="#3776AB" /> },
    {
      name: "DJANGO",
      icon: <SiDjango color={isDarkMode ? "#44B78B" : "#092E20"} />,
    },
    { name: "JAVA", icon: <FaCoffee color="#ED8B00" /> },
    { name: "KOTLIN", icon: <SiKotlin color="#7F52FF" /> },
    { name: "SPRINGBOOT", icon: <SiSpring color="#6DB33F" /> },
    { name: "MICROSERVICIOS", icon: <FaMicrochip color="#007ACC" /> },
    { name: "SPRINGCLOUD", icon: <FaCloud color="#6DB33F" /> },
    { name: "JUnit", icon: <FaCode color="#25A162" /> },
    {
      name: "Hibernate",
      icon: <FaDatabase color={isDarkMode ? "#9BA3AB" : "#59666C"} />,
    },
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "SQL", icon: <FaDatabase color="#336791" /> },
    { name: "GIT", icon: <SiGit color="#F05032" /> },
    { name: "AWS", icon: <SiAmazonaws color="#FF9900" /> },
  ];

  return (
    <div className="container-fluid py-5" id="skill">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{
              WebkitTextStroke: "1px #dee2e6",
              fontSize: "clamp(3rem, 10vw, 10rem)",
            }}
          >
            {t("skills.bg_title")}
          </h1>
          <h1
            className="position-absolute text-uppercase text-primary"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
          >
            {t("skills.title")}
          </h1>
        </div>
        <div className="row align-items-center">
          <section className="skills" id="skills">
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="skills-skill"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    minWidth: "80px",
                  }}
                >
                  <span style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
                    {skill.icon}
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                      fontWeight: 500,
                      textAlign: "center",
                      wordBreak: "break-word",
                    }}
                  >
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
