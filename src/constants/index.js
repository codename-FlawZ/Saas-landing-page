// Import Images

import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";

// Pricing Tiers

export const pricingTiers = [
	{
		title: "Free",
		monthlyPrice: 0,
		buttonText: "Get started for Free",
		popular: false,
		inverse: false,
		features: [
			"Up to 5 project members",
			"Unlimited tasks and projects",
			"2GB storage",
			"Integrations",
			"Basic support",
		],
	},
	{
		title: "Pro",
		monthlyPrice: 9,
		buttonText: "Sign up Now",
		popular: true,
		inverse: true,
		features: [
			"Up to 50 project members",
			"Unlimited tasks and projects",
			"50GB storage",
			"Integrations",
			"Priority support",
			"Advanced support",
			"Export support"
		],
	},
	{
		title: "Business",
		monthlyPrice: 19,
		buttonText: "Sign up Now",
		popular: false,
		inverse: false,
		features: [
			"Up to 5 project members",
			"Unlimited tasks and projects",
			"200GB storage",
			"Integrations",
			"Dedicated account manager",
			"Custom fields",
			"Advanced analytics",
			"Export capabilities",
			"API access",
			"Advanced security features",
		],
	},
];

// Testimonials

export const testimonials = [
	{
		text: "As a seasoned designer always on the lookout for innovative tools,",
		imageSrc: avatar1,
		name: "Jamie Rivera",
		username: "@jamietechguru00",
	},
	{
		text: "Our team's productivity has skyrocketed since we started using this technology",
		imageSrc: avatar2,
		name: "Josh Smith",
		username: "@jjsmith",
	},
	{
		text: "This app has completely transformed how i manage my projects and dead",
		imageSrc: avatar3,
		name: "Morgan Lee",
		username: "morganleehiz",
	},
	{
		text: "I was amazed at how quickly we were able to integrate this app into",
		imageSrc: avatar4,
		name: "Casey Jordan",
		username: "@caseyj",
	},
	{
		text: "Planning and executing events has never been easier. This app helps",
		imageSrc: avatar5,
		name: "Taylor Kim",
		username: "@taylorkimm",
	},
	{
		text: "This customizablity and integration capabilities of this app are top-tier",
		imageSrc: avatar6,
		name: "Riley Smith",
		username: "@rileysmith1",
	},
	{
		text: "Adopting this app for our team has streamlined our project management",
		imageSrc: avatar7, 
		name: "Jordan Patels",
		username: "@jpatelsdesign",
	},
	{
		text: "With this app, we can easily assign tasks, track progress, and manage",
		imageSrc: avatar8,
		name: "Sam Dawson",
		username: "@dawsontechtips",
	},
	{
		text: "It's user-friendly interface and robust features support our diverse",
		imageSrc: avatar9,
		name: "Casey Harper",
		username: "@casey09",
	}
];
