import {
  FaCode,
  FaBullhorn,
  FaPaintBrush,
  FaVideo
} from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";


export const servicesData = [
  {
    id: 1,
    icon: FaBullhorn,
    title: "Social Media Management",
    // description:
    //   "Social media management, bulk SMS campaigns, and email marketing to boost your brand's reach and engagement.",
    features: [
      "Competitor research & strategy",
      "Content planning & calendar",
      "Post design, copywriting & posting",
      "Monthly performance report",
    ],
    path: "social-media-management",
  },
  {
    id: 2,
    icon: FaVideo,
    title: "Video Editing & Production",
    // description:
    //   "Robust hosting with scalable resources, SSL certificates, and seamless CI/CD pipeline integration.",
    features: [
      "Reels & short videos",
      "Promotional & long videos",
      "Shooting with our own gear",
      "Motion graphics & color grading",
    ],
  },
  {
    id: 3,
    icon: FaPaintBrush,
    title: "Brand Creative Solution ",
    // description:
    //   "Professional graphic design services to create stunning visuals that elevate your brand identity and captivate your audience.",
    features: [
      "Logo & brand identity",
      "Business card, pad & flyer",
      "Social media graphics",
      "Print & packaging design",
    ],
  },
  {
    id: 4,
    icon: RiAdvertisementLine,
    title: "Paid Advertising",
    // description:
    //   "Professional video editing services to create compelling visual stories that engage your audience and elevate your brand.",
    features: [
      "Facebook & Instagram ads",
      "TikTok & Google Ads",
      "Audience targeting & boosting",
      "Campaign tracking & reports",
    ],
  },
  {
    id: 5,
    icon: FaCode,
    title: "Website Development",
    // description:
    //   "Build bespoke websites tailored to your brand, optimized for performance, SEO, and user experience.",
    features: [
      "Business & portfolio websites",
      "E-commerce websites",
      "Domain, hosting & SSL",
      "3 month free technical support",
    ],
  },
];
