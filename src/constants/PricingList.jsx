import { FaUser, FaUserGroup } from "react-icons/fa6";

const PricingList = [
  {
    title: "Personal Plan",
    subtitle: "For you",
    targetIcon: <FaUser />,
    target: "Individual",
    price: 850,
    billing: "Billed monthly or annually. Cancel anytime.",
    features: [
      "Access to 11,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
    ],
  },
  {
    title: "Professional Plan",
    subtitle: "For professionals",
    targetIcon: <FaUserGroup />,
    target: "2 to 20 people",
    price: 1499,
    billing: "Billed monthly or annually. Cancel anytime.",
    features: [
      "Access to 11,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
  },
  {
    title: "Enterprise Plan",
    subtitle: "For organizations",
    targetIcon: <FaUserGroup />,
    target: "More than 20 people",
    price: 4999,
    billing: "Billed monthly or annually. Cancel anytime.",
    features: [
      "Access to 25,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
    ],
  },
];

export default PricingList;
