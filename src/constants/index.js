import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "NLP Research",
      icon: web,
    },
    {
      title: "Site Reliability",
      icon: mobile,
    },
    {
      title: "Software Development",
      icon: backend,
    },
    {
      title: "C++ Programming",
      icon: creator,
    },
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Structures and Algorithms Teaching Assistant",
      company_name: "University of Michigan EECS Department",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2021 - Present",
      points: [
        "Help professors teach 900+ students per semester algorithm analysis, O-notation, fundamental data structures (stacks, queues, deques and hash tables), and algorithm techniques (dynamic programming, greedy, recursive, divide-and-conquer, branch-and-bound, and backtracking).",
        "Lead a weekly lab section, ideate and write exam questions, answer conceptual questions on Piazza.",
        "Hold weekly office hours for debugging and optimizing projects containing more than 1000 lines of code."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "T. Rowe Price",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2022 - Sept 2022",
      points: [
        "Built Grafana dashboards with proper metrics using Prometheus, Telegraf, Splunk, and Cloudwatch for the Enterprise HashiCorp Vault application.",
        "Implemented an alerting system with Alertmanager to proactively be notified of Vault incidents.",
        "Integrated Sourcegraph code intelligence into the Gitlab UI using Docker.",
        "Collected firmwide VDI information using Prometheus and broke it out by geolocation to better understand update and consumption patterns."

      ],
    },
    {
      title: "Computer Organization Grader",
      company_name: "University of Michigan EECS Department",
      icon: shopify,
      iconBg: "#383E56",
      date: "September 2022 - Present",
      points: [
        "Grade assignments and exams on computer organization topics, such as caches, virtual memory, multi- and single-cycle datapaths, pipelining, and information set architecture."
      ],
    },
    {
      title: "Incoming Software Developement Engineer Intern",
      company_name: "Wayfair",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2023 - Aug 2023",
      points: [
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };