// import icon below. go here for names https://react-icons.github.io/react-icons — "si" and "fa6" 
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiTailwindcss,
  SiTensorflow,
  SiKeras,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiMongodb,
  SiJest,
  SiVitest,
  SiGit,
  SiGithubactions,
  SiJenkins,
  SiPostman,
  SiLinux,
} from "react-icons/si";
import { FaJava, FaDatabase, FaCloud } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "C#", icon: TbBrandCSharp, color: "#512BD4" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "ASP.NET Core", icon: SiDotnet, color: "#512BD4" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
    ],
  },
  {
    title: "Databases & Cloud",
    items: [
      { name: "SQL Server", icon: FaDatabase, color: "#CC2927" },
      { name: "Azure SQL", icon: FaDatabase, color: "#0078D4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Azure", icon: FaCloud, color: "#0078D4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Testing & DevOps",
    items: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Linux", icon: SiLinux, color: "#0F172A" },
    ],
  },
];
