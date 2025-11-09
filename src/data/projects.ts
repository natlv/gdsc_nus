export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "campus-navigator-app",
    title: "Campus Navigator App",
    description:
      "An intuitive map app to help new students navigate the NUS campus with ease.",
    image: "/project1.png",
    summary:
      "Campus Navigator provides real-time navigation, accessible routes, and event overlays so freshmen can discover campus without feeling lost.",
    highlights: [
      "Live crowd density visualisations sourced from campus Wi-Fi heatmaps",
      "Smart route planning that prioritises accessibility needs",
      "Context-aware alerts for ongoing events and temporary closures",
    ],
    technologies: ["React Native", "Firebase", "Google Maps Platform"],
  },
  {
    slug: "sustainability-tracker",
    title: "Sustainability Tracker",
    description:
      "A tool used to promote sustainable practices among students on campus.",
    image: "/project2.png",
    summary:
      "Sustainability Tracker gamifies eco-friendly choices, helping the NUS community measure and reduce their carbon footprint.",
    highlights: [
      "Personalised dashboards that surface daily impact metrics",
      "Peer challenges and leaderboards that sustain engagement",
      "Integration with campus merchants for rewards redemption",
    ],
    technologies: ["Next.js", "Supabase", "Google Cloud Run"],
  },
  {
    slug: "ai-powered-tutor",
    title: "AI-Powered Tutor",
    description:
      "A personal learning assistant for students, powered by Google's AI technologies.",
    image: "/project3.png",
    summary:
      "AI-Powered Tutor delivers adaptive tutoring sessions, tailored question banks, and study reminders anchored by student goals.",
    highlights: [
      "Adaptive difficulty that responds to real-time performance",
      "Conversational study sessions running on Gemini APIs",
      "Exportable revision plans that sync with Google Calendar",
    ],
    technologies: ["React", "Node.js", "Google Gemini", "Prisma"],
  },
];
