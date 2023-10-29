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
    frb,
    hulu,
    boto,
    bmc,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    aws,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AWS Certified Developer",
      icon: web,
    },
    {
      title: "RedHat Certified Engineer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "AWS",
      icon: aws,
    },
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
      name: "React JS",
      icon: reactjs,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "First Republic Bank",
      icon: frb,
      iconBg: "#383E56",
      date: "Jan 2022 - June 2023",
      points: [
        "Developed and maintained web applications using Python and React.js and other related technologies.",
        "Built a drag-and-drop component-based internal application that offers a highly customizable user interface with a wide range of data visualization using React.js as the front-end and Python as the back-end.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to other developers.",
        "Developed and maintained ETL data load jobs written in Python for Stock Based Lending application on Linux systems to support internal and external vendors."
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Hulu",
      icon: hulu,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Oct 2021",
      points: [
        "Developed Hulu’s service and team registry using React and Redux",
        "Provided on-call support to internal teams to fix authentication and policy related issues",
        "Developed and maintained web applications using Python, Node.js, React.js",
        "Developed web applications in Django frameworks Model View Control (MVC) architecture",
        "Developed XML schema documents and implemented the framework for parsing XML documents"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Boto3",
      icon: boto,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Oct 2021",
      points: [
        "Created and maintained web applications through the utilization of React.js and associated technologies",
        "Engaged in collaborative efforts with multifaceted teams, encompassing designers, product managers, and fellow developers, to produce top-tier products",
        "Executing responsive design practices and guaranteeing compatibility across various web browsers",
        "Contributed to code assessments and delivering valuable input to fellow developers during the review process"
      ],
    },
    {
      title: "Enterprise Technical Support Engineer",
      company_name: "BMC Software",
      icon: bmc,
      iconBg: "#E6DEDD",
      date: "Aug 2016 - July 2018",
      points: [
        "Diagnosed and resolved complex technical issues, ranging from server and application performance to security concerns, using in-depth knowledge of Red Hat platforms",
        "Collaborated closely with cross-functional teams to analyze, troubleshoot, and resolve critical customer incidents, ensuring minimal downtime and maximizing customer satisfaction",
        "Delivered proactive support, including system performance monitoring, software updates, and patch management, to prevent potential issues and ensure system stability",
        "Played a key role in identifying product enhancements and working closely with product development teams to address customer needs and improve software offerings"
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