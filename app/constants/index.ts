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
		title: "Frontend web developer",
		icon: "/backend.webp",
	},
	{
		title: "Associate Team Lead",
		icon: "/web.webp",
	},
	{
		title: "Software Engineer",
		icon: "/mobile.webp",
	},
	{
		title: "AI Researcher",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
];

const experiences = [
	{
		title: "SOFTWARE ENGINEER",
		company_name: "CMUnity",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "2024 -  present",
		points: [
			"Designed and developed a community-based social networking app to connect local neighbors.",
			"Built user authentication, messaging, and community posts using React.js, Node.js, Express, and MongoDB.",
			"Implemented real-time updates and notifications for seamless interaction.",
			"Developed a secure backend API with authentication and role-based access control."
		],
	},
	{
		title: "Associate Team Lead",
		company_name: "DP World",
		icon: "/company/sparkbright.webp",
		iconBg: "#E6DEDD",
		date: "2023 - 2024",
		points: [
			"Led front-end development with Next.js 14 and TypeScript, reducing time-to-market for new features by 15%.",
			"Enhanced UI consistency and responsiveness using Tailwind CSS, improving user satisfaction scores by 25%.",
			"Implemented performance optimization strategies, improving page load times by 20%.",
			"Mentored junior developers, increasing team efficiency and modern tech adoption."
		],
	},
	{
		title: "FRONTEND DEVELOPER",
		company_name: "QR Solutions",
		icon: "/company/wtw.jpg",
		iconBg: "#E6DEDD",
		date: "2024 - Present",
		points: [
			"Built and launched responsive web applications with Next.js and Redux, boosting user engagement by 30%.",
			"Designed reusable UI components with Tailwind CSS & Material-UI, cutting feature development time by 40%.",
			"Conducted A/B testing, leading to a 15% improvement in user retention and engagement.",
			"Automated front-end testing using Cypress, reducing QA time by 40%."
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:"",
		name: "Raghava Jagannatham",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/raghava-jagannatham-2334681a9/",
	},
	{
		id: 2,
		testimonial:"",
		name: "Raghava Jagannatham",
		image: "/socialmedia/linkedin.svg",
		link: "https://x.com/Raghavastwt",
	},
	{
		id: 3,
		testimonial:"",
		name: "Raghava Jagannatham",
		image: "/socialmedia/portfolio.svg",
		link: "https://raghava-portfolio.netlify.app/",
	},
	{
		id: 4,
		testimonial:"",
		name: "Raghava Jagannatham",
		image: "/tech/github.webp",
		link: "https://github.com/RaghavaJagannatham",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "A.V.M Auto Portfolio",
		description:
			"A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
		tags: [
			{
				name: "wordpress",
				color: "blue-text-gradient",
			},
			{
				name: "google-translate",
				color: "green-text-gradient",
			},
		],
		image: "/proj3.svg",
		platform: "Wordpress",
		deploy_link: "https://avmauto.in/",
	},
	{
		name: "Sparkbright Engineering Portfolio",
		description:
			" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/proj5.svg",
		source_code_link: "https://github.com/omunite215/React-Admin-DashBoard",
		platform: "Web",
		deploy_link: "https://sparkbright.in/",
	},
	{
		name: "HooBank",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/proj4.svg",
		source_code_link: "https://github.com/omunite215/hoobank",
		platform: "Vercel",
		deploy_link: "https://hoobankbyom.netlify.app/",
	},
	{
		name: "MERN Dashboard",
		description:
			" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/proj2.svg",
		source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
		platform: "Web",
		deploy_link: "https://admin-frontend-r705.onrender.com/",
	}
];

export { services, technologies, experiences, testimonials, projects };
