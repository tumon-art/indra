import {
  contact1,
  contact2,
  logo,
  project1,
  project2,
  project3,
} from "../../public";

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
    svg: (
      <svg viewBox="0 0 111 106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M52.4248 67.0633L79.3885 92.8125C81.701 94.9502 84.8008 96.1343 88.0192 96.1094C91.2376 96.0844 94.3168 94.8524 96.5926 92.6791C98.8684 90.5058 100.159 87.5653 100.185 84.4919C100.211 81.4184 98.9709 78.4583 96.7323 76.25L69.5512 50.2932M52.4248 67.0633L63.9688 53.6808C65.4349 51.9848 67.3913 50.916 69.5558 50.2977M52.4248 67.0633L30.8954 92.0307C29.852 93.2454 28.5538 94.2379 27.0844 94.9444C25.615 95.651 24.007 96.0559 22.3638 96.1332C20.7207 96.2104 19.0788 95.9582 17.5438 95.3929C16.0089 94.8275 14.6149 93.9615 13.4516 92.8506C12.2883 91.7397 11.3815 90.4085 10.7895 88.9427C10.1974 87.4769 9.93337 85.909 10.0142 84.3399C10.0951 82.7707 10.5191 81.2351 11.259 79.8319C11.9989 78.4287 13.0383 77.189 14.3102 76.1926L45.9313 51.3268M69.5558 50.2977C72.0995 49.5733 74.9347 49.4673 77.6172 49.6793C81.2331 49.9758 84.8674 49.3642 88.1594 47.9052C91.4514 46.4462 94.2866 44.1905 96.3838 41.3619C98.481 38.5333 99.7671 35.2302 100.115 31.7803C100.462 28.3305 99.859 24.8538 98.3649 21.6953L83.2134 36.1687C80.6785 35.609 78.3591 34.3807 76.5193 32.6238C74.6795 30.8669 73.3933 28.652 72.8072 26.2313L87.9587 11.7622C84.6512 10.3355 81.0105 9.75948 77.3979 10.0914C73.7854 10.4232 70.3264 11.6514 67.3644 13.6541C64.4024 15.6568 62.0403 18.3643 60.5125 21.508C58.9846 24.6518 58.3442 28.1223 58.6547 31.5754C59.0755 36.3277 58.3263 41.5747 54.4737 44.6046L54.0019 44.98M45.9313 51.3268L26.9364 33.1875H20.4198L10.0135 16.625L16.951 10L34.2948 19.9375V26.1606L53.9973 44.9756M45.9267 51.3223L53.9973 44.9756M84.5917 81.2187L72.451 69.625M22.1172 84.5312H22.1542V84.5666H22.1172V84.5312Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Lorem ipsum dolor sit amet",
  },
  {
    svg: (
      <svg viewBox="0 0 90 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.3675 71.3155C16.6734 72.5637 18.2238 73.5538 19.9302 74.2293C21.6365 74.9048 23.4655 75.2525 25.3125 75.2525C27.1595 75.2525 28.9885 74.9048 30.6948 74.2293C32.4012 73.5538 33.9516 72.5637 35.2575 71.3155L59.2613 48.375M25.3125 75.25C21.5829 75.25 18.006 73.8343 15.3688 71.3143C12.7316 68.7942 11.25 65.3763 11.25 61.8125V14.7813C11.25 12.556 13.14 10.75 15.4688 10.75H35.1562C37.485 10.75 39.375 12.556 39.375 14.7813V29.3726M25.3125 75.25C29.0421 75.25 32.619 73.8343 35.2562 71.3143C37.8934 68.7942 39.375 65.3763 39.375 61.8125V29.3726M25.3125 75.25H74.5312C76.86 75.25 78.75 73.444 78.75 71.2188V52.4063C78.75 50.181 76.86 48.375 74.5312 48.375H59.2613M39.375 29.3726L50.175 19.0526C51.8175 17.4795 54.4875 17.4795 56.1375 19.0526L70.0575 32.3575C71.7075 33.9342 71.7075 36.4855 70.0575 38.055L59.2613 48.375M25.3125 61.8125H25.3425V61.8412H25.3125V61.8125Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Lorem ipsum dolor sit amet",
  },
  {
    svg: (
      <svg viewBox="0 0 90 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30.9375 75.25V57.7812C30.9375 55.556 32.8275 53.75 35.1562 53.75H43.5938C45.9225 53.75 47.8125 55.556 47.8125 57.7812V75.25M47.8125 75.25H64.6875V12.7029M47.8125 75.25H75.9375V38.5208M8.4375 75.25H14.0625M81.5625 75.25H14.0625M8.4375 32.25L25.3125 26.3877M70.3125 10.75L64.6875 12.7029M64.6875 34.9375L75.9375 38.5208M81.5625 40.3125L75.9375 38.5208M25.3125 26.3877V10.75H14.0625V75.25M25.3125 26.3877L64.6875 12.7029"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Lorem ipsum dolor sit amet",
  },
];

export const aboutSectionData = {
  data: {
    logo: logo,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  desc: [
    `The absolutely reliable , friendly 
    services`,
    `We try to provide services fastest 
    as possible`,
    `The success comes through passion 
    and patience`,
  ],
};

export const projectData = {
  title: headerData.link[4].name,
  item1: {
    img: project1,
    btnText: "Deatils",
  },
  item2: {
    img: project2,
    btnText: "Deatils",
  },
  item3: {
    img: project3,
    btnText: "Deatils",
  },
};

export const contactData = {
  sec1: {
    title: "Let’s Build your future today",
    title1: "Contact",
    img: contact1,
    smallText: [
      "Best project planning",
      "we guarente success",
      "30+ Years Experience",
    ],
    phone: "92 666 888 0000",
  },

  sect2: {
    title: "Founded in 1987",
    img: contact2,
  },
};

export const footerData = {
  sect1: {
    svg: logo,
    title: "SUNDEVIL",
    text: `Largest data & internet service provider in Bangladesh.
     We value your opinion and this why we want you to give us a call today.`,
  },
  sect2: {
    title: "Contact",
    text1: "Wakil Tower, D.C Link Road",
    text2: "info@sundevil.example.co.uk",
    text3: "+88-09666770444",
  },
  sect3: {
    title: "Services",
    text1: "Industrial Construction",
    text2: "Chemical Research",
    text3: " Mechanical Engineering",
  },
  social: {
    one: { title: "Facebook", href: "" },
    two: { title: "Twitter", href: "" },
    three: { title: "Instagram", href: "" },
    four: { title: "Linkedin", href: "" },
  },
  copyright:
    "Copyright 2022 SUNDEVIL Services Ltd. | All Rights Reserved Powred by 2M0N ",
};
