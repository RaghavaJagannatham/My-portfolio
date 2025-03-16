"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type SocialCardProps = {
	index: number;
	name: string;
	link: string;
	image: string;
};

const SocialCard = ({ index, name, link, image }: SocialCardProps) => (
	<motion.div
		variants={fadeIn("right", "spring", index * 0.3, 0.75)}
		className="flex items-center gap-3 bg-black-200 p-3 rounded-xl"
	>
		<Link href={link} target="_blank" rel="noopener noreferrer">
			<Image
				src={image}
				width={50}
				height={50}
				alt={`${name} icon`}
				className="w-12 h-12 rounded-full object-cover transition-transform duration-200 hover:scale-110"
			/>
		</Link>
		<p className="text-white font-medium text-[16px]">{name}</p>
	</motion.div>
);

const Socials = () => {
	return (
		<div className="mt-12 bg-black-100 rounded-[20px] p-8">
			<motion.div variants={textVariant()} className="text-center">
				<h2 className="sectionHeadText">Social Profiles</h2>
				<p className="sectionSubText">Click on icons to check out my profiles.</p>
			</motion.div>

			{/* ✅ Horizontal Layout (All in One Line) */}
			<div className="mt-8 flex justify-center items-center gap-6 overflow-x-auto">
				{testimonials.map((social, index) => (
					<SocialCard key={social.id} index={index} {...social} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Socials, "");
