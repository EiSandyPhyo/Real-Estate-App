import { AiOutlineShoppingCart, AiOutlineBehance } from "react-icons/ai";
import {
  FiDribbble,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

export const socialIcons = [
  { icon: AiOutlineShoppingCart, link: "https://themeforest.net/" },
  { icon: FiDribbble, link: "https://dribbble.com/" },
  { icon: AiOutlineBehance, link: "https://www.behance.net/" },
  { icon: FiLinkedin, link: "https://www.linkedin.com/" },
  { icon: FiFacebook, link: "https://www.facebook.com/" },
  { icon: FiInstagram, link: "https://www.instagram.com/" },
  { icon: FiTwitter, link: "https://twitter.com/" },
  { icon: FiMail, link: "mailto:example@example.com" },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Home", path: "/home" },
      { name: "About us", path: "/aboutus" },
      { name: "Pricing", path: "/pricing" },
      { name: "FAQs", path: "/faqs" },
      { name: "Login", path: "/" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { name: "Features", path: "/features" },
      { name: "Sell", path: "/sell" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

export const contactDetails = [
  {
    type: "address",
    icon: "uil:map-marker",
    content: "C/54 Northwest Freeway,\nSuite 558, Houston,\nUSA 485", /* \n=for line breaks */
    extra: "View on Google map",
  },
  {
    type: "email",
    icon: "uil:phone",
    content: "contact@gmail.com",
  },
  {
    type: "phone",
    icon: "uil:envelope",
    content: "+152-532-468-854",
  },
];
