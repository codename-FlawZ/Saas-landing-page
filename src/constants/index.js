const pricingTiers = [
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

export default pricingTiers
