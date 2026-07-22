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
    name: "Services",
    path: "/service",
    icon: FaBriefcase,
  },
  {
    id: 3,
    name: "Team",
    path: "/team",
    icon: FaUsers,
  },
  {
    id: 4,
    name: "FAQ",
    path: "/faq",
    icon: FaQuestionCircle,
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
    icon: FaEnvelope,
    badge: "24/7",
  },
];
