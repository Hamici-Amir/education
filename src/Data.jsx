import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";
import courses7 from "./assets/courses7.jpg";
import courses8 from "./assets/courses8.jpg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "courses",
    link: "Courses",
  },
  {
    id: 4,
    href: "teacher",
    link: "Teacher",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Workshops",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Sports",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Sports",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Social work",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Internship and Industrial Visits",
    title: "As part of the curriculum, ZIC facilitates internships and industrial visits for students ",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 2,
    image: courses2,
    category: "Cutting-Edge Teaching Methodologies",
    title: "ZIC employs innovative teaching methodologies .",
    rating: 4.8,
    participants: 700,
    price: 125,
  },
  {
    id: 3,
    image: courses3,
    category: "State-of-the-Art Computer Lab ",
    title: "ZIC boasts a well-equipped computer lab .",
    rating: 4.9,
    participants: 300,
    price: 99,
  },
  {
    id: 4,
    image: courses4,
    category: " Extensive Library ",
    title: "The college maintains an extensive library .",
    rating: 4.7,
    participants: 600,
    price: 85,
  },
  {
    id: 5,
    image: courses5,
    category: "AI Development",
    title: "AI Development With Python (complete beginner course)",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 6,
    image: courses6,
    category: "Sports Events",
    title: "ZIC encourages a holistic approach to education .",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 7,
    image: courses7,
    category: "Social Work Initiatives",
    title: " As part of its commitment to social responsibility. ",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 8,
    image: courses8,
    category: "Testimonials",
    title: "ZIC features testimonials from students, alumni .",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is ZIC?",
  },
  {
    id: 2,
    title: "What can I learn from ZIC?",
  },
  {
    id: 3,
    title: "Can I teach on ZIC?",
  },
  {
    id: 4,
    title: "What is included in ZIC membership?",
  },
];
