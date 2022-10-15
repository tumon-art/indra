import { home, logo, settings, tree } from "../../public";

export const headerData = {
  logo: logo,
  link: [
    { route: "/", name: "Home" },
    { route: "about", name: "About" },
    { route: "clients", name: "Clients" },
    { route: "Contact", name: "Contact" },
    { route: "projects", name: "Projects" },
    { route: "safety", name: "Safety" },
  ],
};

export const serviceCardData = [
  {
    svg: settings,
    text: "Lorem ipsum dolor sit amet",
  },
  {
    svg: tree,
    text: "Lorem ipsum dolor sit amet",
  },
  {
    svg: home,
    text: "Lorem ipsum dolor sit amet",
  },
];
