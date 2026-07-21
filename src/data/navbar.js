import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaUsers,
  FaQuestionCircle,
  FaEnvelope,
} from "react-icons/fa";

export const navbarData = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    id: 2,
    name: "About Us",
    path: "/about-us",
    icon: FaInfoCircle,
  },
  {
    id: 3,
    name: "Works",
    path: "/works",
    icon: FaBriefcase,
    children: [
      {
        id: 31,
        name: "Web Development",
        path: "/works/web-development",
      },
      {
        id: 32,
        name: "UI/UX Design",
        path: "/works/ui-ux",
      },
      {
        id: 33,
        name: "Digital Marketing",
        path: "/works/digital-marketing",
      },
    ],
  },
  {
    id: 4,
    name: "Team",
    path: "/team",
    icon: FaUsers,
  },
  {
    id: 5,
    name: "FAQ",
    path: "/faq",
    icon: FaQuestionCircle,
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
    icon: FaEnvelope,
    badge: "24/7",
  },
];
