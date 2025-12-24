export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  summary: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "caring-for-life",
    title: "Caring For Life",
    summary: "Equip individuals to prevent suicide and build resilience within the community.",
    description: "Singapore-based charity dedicated to suicide prevention, offering training, support, and advocacy to empower individuals and communities in recognizing and addressing suicide risk. Our goal is to develop a Volunteer Management System that automates communications, tracks volunteer credentials and activity, manages training bookings, and provides visual dashboards for easier reporting.",
    image: "/caringforlife.png",
    technologies: [],
  },
  {
    slug: "action-for-singapore-dogs",
    title: "Action for Singapore Dogs",
    summary: "Rescuing, fostering, and rehoming stray and abandoned dogs in Singapore",
    description: "Non-profit organisation dedicated to rescuing, fostering, and rehoming stray and abandoned dogs in Singapore while promoting sterilization, responsible pet ownership, and public awareness of local dog welfare. Our goal is to develop a Dog Management System with role-based access to protect sensitive information and store comprehensive, searchable dog profiles including medical and adoption records, while implementing an interactive dashboard on medical expenses, adoption rates, and shelter occupancy.",
    image: "/actionforsingapore.png",
    technologies: [],
  },
  {
    slug: "itsrainingraincoats",
    title: "ItsRainingRaincoats",
    summary: "Supports migrant workers by providing essentials, educational programs, and community integration initiatives.",
    description: "A volunteer organisation that supports migrant workers by providing essentials, educational programs, and community integration initiatives. Our goal is to develop a Website-based chatbot system that allows migrant workers to easily reserve weekend shop slots, automates eligibility checks, confirmations, reminders, and rescheduling. Staff will be provided with a real-time dashboard for tracking.",
    image: "/itsraining.png",
    technologies: [],
  },
  {
    slug: "siloamxperience",
    title: "SiloamXperience",
    summary: "Creating sustainable change in underprivileged communities by providing quality education, vocational training, and humanitarian support in Singapore and Cambodia.",
    description: "Volunteer-driven organisation committed to creating sustainable change in underprivileged communities by providing quality education, vocational training, and humanitarian support in Singapore and Cambodia. Our goal is to develop a Volunteer and Donor Management System that centralises volunteer onboarding, project matching, performance tracking, and communication, while managing donor data, donations, and automated receipts, all with real-time dashboards for insights.",
    image: "/siloamxperience.png",
    technologies: [],
  },
  {
    slug: "the-volunteer-switchboard",
    title: "The Volunteer Switchboard",
    summary: "Connects individuals with meaningful volunteer opportunities across various causes, fostering purposeful and impactful giving experiences.",
    description: "Organisation that connects individuals with meaningful volunteer opportunities across various causes, fostering purposeful and impactful giving experiences. This project’s focus being on the elderly community. Our goal is to develop a Order and Runner Management System that lets volunteers place, track, and update orders, while runners manage order statuses and edits.",
    image: "/volunteer_switchboard.png",
    technologies: [],
  },
];