import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import { FaLinkedin, FaGithub } from "react-icons/fa6";


type Member = {
  name: string;
  role: string;
  img: string;
  linkedIn?: string;
  github?: string;
};

/* ---------------- EXCO ---------------- */
const excoMembers: Member[] = [
  {
    name: "Sarah Chen",
    role: "President",
    img: "/team/sarah.png",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "John Doe",
    role: "Frontend Lead",
    img: "/team/john.png",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Emily Wang",
    role: "Backend Lead",
    img: "/team/emily.png",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Michael Brown",
    role: "Marketing Lead",
    img: "/team/michael.png",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Lucas Tan",
    role: "Tech Advisor",
    img: "/team/michael.png",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Alicia Goh",
    role: "Outreach Head",
    img: "/team/michael.png",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
];

/* ----------- INTERNAL TEAMS ----------- */
const internalTeams = {
  "Branding + Marketing": [
    {
      name: "Ava Lim",
      role: "Brand Designer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Marcus Lee",
      role: "Content Strategist",
      img: "/team/michael.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Nina Khoo",
      role: "Social Lead",
      img: "/team/emily.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
  ],
  "Operations + Treasurer": [
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
  ],
  "Partnerships + Technology": [
    {
      name: "Ravi Kumar",
      role: "Partnerships Lead",
      img: "/team/michael.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Emily Wang",
      role: "Tech Lead",
      img: "/team/emily.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "John Doe",
      role: "Full-stack Dev",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
  ],
} as const;
type InternalTeamKey = keyof typeof internalTeams;

/* ----------- EXTERNAL TEAMS ----------- */
const externalTeams = {
  "Caring for Life": [
    {
      name: "Grace Tan",
      role: "Volunteer Coord.",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Hafiz Rahman",
      role: "Field Ops",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
  ],
  "Action for Singapore Dogs (ASD)": [
    {
      name: "Yuki Chen",
      role: "Adoptions Lead",
      img: "/team/emily.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ben Teo",
      role: "Outreach",
      img: "/team/michael.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
  ],
  ItsRainingRaincoats: [
    {
      name: "Arun Kumar",
      role: "Partnerships",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Sara Ali",
      role: "Campaigns",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Daniel Ng",
      role: "Operations Lead",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ivy Chua",
      role: "Treasurer",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
  ],
  SiloamXperience: [
    {
      name: "Miguel Cruz",
      role: "Programs",
      img: "/team/michael.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Lena Lau",
      role: "Logistics",
      img: "/team/emily.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
  ],
  "The Volunteer Switchboard": [
    {
      name: "Priya Das",
      role: "Community",
      img: "/team/sarah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ken Wong",
      role: "Platform Ops",
      img: "/team/john.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
  ],
} as const;
type ExternalTeamKey = keyof typeof externalTeams;

/* ========================= PAGE ========================= */
export default function TeamPage() {
  const [activeTeam, setActiveTeam] = useState<"internal" | "external">("internal");
  const [activeInternal, setActiveInternal] =
    useState<InternalTeamKey>("Branding + Marketing");
  const [activeExternal, setActiveExternal] =
    useState<ExternalTeamKey>("Caring for Life");

  const subteamKeys =
    activeTeam === "internal"
      ? (Object.keys(internalTeams) as InternalTeamKey[])
      : (Object.keys(externalTeams) as ExternalTeamKey[]);

  const activeGroupName = activeTeam === "internal" ? activeInternal : activeExternal;

  const activeMembers: Member[] =
    activeTeam === "internal"
      ? [...internalTeams[activeInternal]]
      : [...externalTeams[activeExternal]];

  return (
    <div className="min-h-dvh bg-white text-slate-900 selection:bg-indigo-500/40">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-center text-4xl font-bold mb-12">Meet The Team</h1>

        {/* EXCO */}
        <section className="rounded-2xl bg-slate-100 p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-center text-green-600">EXCO</h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            The group that forms the backbone and oversees all projects and events.
          </p>

          {/* Scrollable EXCO */}
          <div className="mt-8 overflow-x-auto whitespace-nowrap pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 justify-start min-w-max px-2">
              {excoMembers.map((person, i) => (
                <div key={`exco-${person.name}-${i}`} className="shrink-0 w-40">
                  <MemberCard {...person} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal / External Toggle */}
        <div className="mt-10 flex justify-center gap-10">
          <button
            type="button"
            className={`w-96 py-2.5 rounded-md border text-base font-semibold transition-all duration-200 ${
              activeTeam === "internal"
                ? "bg-[#6A8DFF] border-[#6A8DFF] text-white"
                : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => setActiveTeam("internal")}
          >
            Internal Team
          </button>

          <button
            type="button"
            className={`w-96 py-2.5 rounded-md border text-base font-semibold transition-all duration-200 ${
              activeTeam === "external"
                ? "bg-[#6A8DFF] border-[#6A8DFF] text-white"
                : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => setActiveTeam("external")}
          >
            External Team
          </button>
        </div>



        {/* Dynamic Section */}
        <section className="mt-12 rounded-2xl bg-slate-100 p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-wrap justify-center gap-3 mb-4 text-sm">
            {subteamKeys.map((name) => (
              <button
                key={name}
                onClick={() =>
                  activeTeam === "internal"
                    ? setActiveInternal(name as InternalTeamKey)
                    : setActiveExternal(name as ExternalTeamKey)
                }
                className={`px-4 py-1 rounded-full transition ${
                  name === activeGroupName
                    ? "bg-blue-200 text-black shadow-sm"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-slate-600 mb-6">
            {activeTeam === "internal"
              ? `Currently viewing ${activeInternal}.`
              : `Currently viewing ${activeExternal}.`}
          </p>

          <div className="overflow-x-auto whitespace-nowrap py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 min-w-max">
              {activeMembers.map((person, idx) => (
                <div
                  key={`${activeTeam}-${activeGroupName}-${person.name}-${idx}`}
                  className="shrink-0 w-40"
                >
                  <MemberCard {...person} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ====================== CARD ====================== */
function MemberCard({ name, role, img, linkedIn, github }: Member) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-slate-50 p-4 border border-slate-200 shadow hover:shadow-md transition">
      <img
        src={img}
        alt={name}
        className="h-24 w-24 rounded-full object-cover border border-slate-300"
      />
      <h3 className="mt-3 font-medium text-slate-900">{name}</h3>
      <p className="text-xs text-slate-600">{role}</p>

      <div className="flex gap-4 mt-3 text-lg text-slate-400">
        <a
          href={linkedIn ?? "https://linkedin.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
          aria-label={`${name} LinkedIn`}
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={github ?? "https://github.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
          aria-label={`${name} GitHub`}
          title="GitHub"
        >
          <FaGithub />
        </a>
        </div>
    </div>
  );
}
