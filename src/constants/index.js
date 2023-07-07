import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  trybe,
  java,
  crystal,
  python,
  rickandmorty,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Crystal",
    icon: crystal,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web development student",
    company_name: "Trybe",
    icon: trybe,
    iconBg: "#76bc90",
    date: "May 2022 - Jun 2023",
    points: [
      "I have learned the foundational concepts of web development acquiring a comprehensive understanding of both frontend and backend development.",
      "Through my studies, I have honed my communication, teamwork, and problem-solving abilities.",
      "I have actively assisted other students in their web development journey. By sharing my knowledge, providing guidance, and offering support.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    `Contei com a Aline no meu time Instrução do curso de Desenvolvimento Backend da Trybe, ela atuou muito bem, guiando monitorias para tirar as dúvidas de desenvolvimento dos projetos que a pessoas estudantes realizaram. (Docker, Node.Js, Typescript, MongoDB, Mysql Sequelize).
    Consistência na dedicação e carisma e empatia com quem esta iniciando a jornada. É umas das caracteríscias que valorizei no trabalho com a Aline! Vlw!`,
    name: "William Marcontes",
    designation: "Programmer Backend | Computer Science Teacher/Technology Specialist | Agilist",
    company: "Trybe",
    image: "https://media.licdn.com/dms/image/C4D03AQHS3r7c-wFqUw/profile-displayphoto-shrink_800_800/0/1661174428630?e=1694044800&v=beta&t=aAIwyjWsyU-Ju5cU20VDAR9n3QKbmUno0QMPYQ5KDtI",
  },
  {
    testimonial:
    `A Aline foi uma Summer de Instrução fantástica na minha turma na Trybe. Ela não apenas foi muito atenciosa e prestativa quando se tratou de responder às nossas perguntas e ajudar com projetos, mas também foi uma mestre em explicar conceitos de programação de maneira clara e concisa. Eu recomendo fortemente a Aline para quem procura um desenvolvedor disposto a escutar, a aprender coisas novas e a ajudar sempre que preciso!`,
    name: "Joana Maria dos Santos",
    designation: "Web Developer & Teacher",
    company: "Prefeitura Municipal de Florianópolis",
    image: "https://media.licdn.com/dms/image/D4D03AQFl4lFAUC05kg/profile-displayphoto-shrink_800_800/0/1687354674854?e=1694044800&v=beta&t=6eZcbjk6hUV-65JCT9Qx3hnmsOT2G69znyZEnp5Wsrg",
  },
  {
    testimonial:
    `Aline is an exceptional developer! Her rigorous dedication and brilliance make her stand out in any project she engages with. It is an honor to have her as a friend and professional colleague.`,
    name: "Ebraim Oliveira",
    designation: "Colleague",
    company: "Trybe",
    image: "https://media.licdn.com/dms/image/D4D35AQFp22r7n4LNRw/profile-framedphoto-shrink_800_800/0/1677186810720?e=1689368400&v=beta&t=zEhWlL9_LGFlwgKTxJCClhREFfs633KhlY5r1aHlk_U",
  },
];

const projects = [
  {
    name: "Rick and Morty Travel Planner",
    description:
      "It is a travel planning through the Rick and Morty Universe API written in Crystal, backed by kemalcr and MySQL.",
    tags: [
      {
        name: "cystal",
        color: "blue-text-gradient",
      },
      {
        name: "kemal",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: rickandmorty,
    source_code_link: "https://github.com/alinegrance/rick-and-morty-travel-planner",
  },
];

export { services, technologies, experiences, testimonials, projects };