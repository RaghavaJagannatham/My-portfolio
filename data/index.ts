export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title: "Im a Frontend Developer & AI Enthusiast",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a AI Form Builder SAAS",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Algo AI",
    des: "Explore and get your updated resumes coverletters and Interview preparation from DR Algo",
    img: "/proj3.svg",
    iconLists: ["/next.svg","/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://algo-ai-chi.vercel.app/",
  },
  {
    id: 2,
    title: "Finance AI",
    des: "Finance AI used to store all data of our spendings and earnings in a proper way",
    img: "/proj4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    link: "https://finance-ai-taupe.vercel.app/",
  },
  {
    id: 3,
    title: "Neighbour-Next",
    des: "This is an App used to Update and socialise with the people around us and for security",
    img: "/proj5.svg",
    iconLists: ["/next.svg","/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://neighbour-next.vercel.app/",
  },
  {
    id: 4,
    title: "Chatify",
    des: "Chatify is an new Chat app to have different channels",
    img: "/proj2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/re.svg"],
    link: "https://chatify-49.web.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Raghava Jagannatham is an exceptional software developer with expertise in React, Next.js, and modern frontend technologies. At DP World, he played a key role in designing and deploying high-quality software solutions, enhancing performance and efficiency. His strong work ethic, collaborative attitude, and technical skills make him a valuable asset to any team.",
    name: "Ark mahata",
    title: "Group Senior Manager Dp World",
  },
  {
    quote:
      "Raghava Jagannatham is a highly skilled and dedicated software developer with expertise in React, Next.js, Jest, and modern frontend technologies. At DP World, he played a crucial role in enhancing performance, security, and cost-efficiency through innovative software solutions. His strong work ethic, agile approach, and collaborative mindset make him a valuable asset to any team.",
    name: "Sahil nagpal",
    title: "Team Lead at DP World",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "DP World",
    img: "/dpworldlogo.svg",
    nameImg: "/dpworldnameimage1.svg",
  },
  {
    id: 2,
    name: "QR Solutions",
    img: "/app.svg",
    nameImg: "/QRS.svg",
  },
  {
    id: 3,
    name: "VTF",
    img: "/vtflogo.svg",
    nameImg: "/vtfname.svg",
  },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
 {
  id: 1,
  title: "Associate Team Lead",
  desc: "Managed a team of developers, providing technical guidance and ensuring project deadlines were met.",
  className: "md:col-span-2",
  thumbnail: "/exp1.svg",
},
{
  id: 2,
  title: "Frontend Web Developer",
  desc: "Developed responsive and scalable web applications using React.js, improving UI/UX experiences.",
  className: "md:col-span-2",
  thumbnail: "/exp2.svg",
},
{
  id: 3,
  title: "Software Engineer",
  desc: "Engineered robust software solutions, optimizing performance and ensuring code quality.",
  className: "md:col-span-2",
  thumbnail: "/exp3.svg",
},
{
  id: 4,
  title: "Lead Frontend Developer",
  desc: "Architected and implemented modern frontend frameworks, enhancing application performance.",
  className: "md:col-span-2",
  thumbnail: "/exp4.svg",
},

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/RaghavaJagannatham",
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/Raghavastwt",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/raghava-jagannatham-2334681a9/",
  },
];




export const techstack = [
  { name: "ReactJS", icon: "/re.svg" },
  { name: "NextJS", icon: "/next.svg" },
  { name: "Typescript", icon: "/ts.svg" },
  { name: "JavaScript", icon: "/re.svg" },
  { name: "Tailwind", icon: "/tail.svg" },
  { name: "Redux", icon: "/redux.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Github", icon: "/git.svg" },
  { name: "AI/ML", icon: "/AIML.svg" },
  { name: "HTML", icon: "/html.svg" },
  { name: "CSS", icon: "/css.svg" }
];
// ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],