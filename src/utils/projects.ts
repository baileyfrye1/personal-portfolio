import drinksScreenshot from "../assets/drinks-we-make.png";

type Project = {
  id: number;
  name: string;
  image: string;
  technologies: string[];
  type: "client" | "personal";
  link?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Aili Desai Portfolio",
    image: drinksScreenshot.src,
    technologies: ["astro", "scss", "typescript"],
    type: "client",
    link: "https://ailidesai.com",
  },
  {
    id: 2,
    name: "Allerton Creek Farm",
    image: drinksScreenshot.src,
    technologies: ["nextjs", "tailwind", "typescript"],
    type: "client",
    link: "https://allertoncreekfarm.com",
  },
  {
    id: 3,
    name: "Frye Group Real Estate",
    image: drinksScreenshot.src,
    technologies: ["html", "css", "javascript"],
    type: "client",
    link: "https://fryegroupnashville.com",
  },
  {
    id: 4,
    name: "Misfit Fitness",
    image: drinksScreenshot.src,
    technologies: ["html", "css", "javascript"],
    type: "client",
    link: "https://misfitfitness.net",
  },
  {
    id: 5,
    name: "Drinks We Make",
    image: drinksScreenshot.src,
    technologies: [
      "tanstack-start",
      "csharp",
      "supabase",
      "tailwind",
      "typescript",
    ],
    type: "personal",
  },
  {
    id: 6,
    name: "Live Listings Monitor",
    image: drinksScreenshot.src,
    technologies: ["html", "css", "javascript"],
    type: "personal",
  },
];
