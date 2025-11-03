import React, { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

type Member = { name: string; role: string; img: string };

/* ---------------- EXCO ---------------- */
const excoMembers: Member[] = [
  { name: "Sarah Chen", role: "President", img: "/team/sarah.png" },
  { name: "John Doe", role: "Frontend Lead", img: "/team/john.png" },
  { name: "Emily Wang", role: "Backend Lead", img: "/team/emily.png" },
  { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
  { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
  { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" }
];

/* ----------- INTERNAL TEAMS ----------- */
const internalTeams = {
  "Branding & Marketing": [
    { name: "Ava Lim", role: "Brand Designer", img: "/team/sarah.png" },
    { name: "Marcus Lee", role: "Content Strategist", img: "/team/michael.png" },
    { name: "Nina Khoo", role: "Social Lead", img: "/team/emily.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" }
  ],
  "Operations + Treasurer": [
    { name: "Daniel Ng", role: "Operations Lead", img: "/team/john.png" },
    { name: "Ivy Chua", role: "Treasurer", img: "/team/sarah.png" },
    { name: "Nina Khoo", role: "Social Lead", img: "/team/emily.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" }
  ],
  "Partnerships + Technology": [
    { name: "Ravi Kumar", role: "Partnerships Lead", img: "/team/michael.png" },
    { name: "Emily Wang", role: "Tech Lead", img: "/team/emily.png" },
    { name: "John Doe", role: "Full-stack Dev", img: "/team/john.png" },
    { name: "Nina Khoo", role: "Social Lead", img: "/team/emily.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
  ],
} as const;
type InternalTeamKey = keyof typeof internalTeams;

/* ----------- EXTERNAL TEAMS ----------- */
const externalTeams = {
  "Caring for Life": [
    { name: "Grace Tan", role: "Volunteer Coord.", img: "/team/sarah.png" },
    { name: "Hafiz Rahman", role: "Field Ops", img: "/team/john.png" },
    { name: "Nina Khoo", role: "Social Lead", img: "/team/emily.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" }
  ],
  "Action for Singapore Dogs (ASD)": [
    { name: "Yuki Chen", role: "Adoptions Lead", img: "/team/emily.png" },
    { name: "Ben Teo", role: "Outreach", img: "/team/michael.png" },
    { name: "Nina Khoo", role: "Social Lead", img: "/team/emily.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" }
  ],
  ItsRainingRaincoats: [
    { name: "Arun Kumar", role: "Partnerships", img: "/team/john.png" },
    { name: "Sara Ali", role: "Campaigns", img: "/team/sarah.png" },
    { name: "Nina Khoo", role: "Social Lead", img: "/team/emily.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" }
  ],
  SiloamXperience: [
    { name: "Miguel Cruz", role: "Programs", img: "/team/michael.png" },
    { name: "Lena Lau", role: "Logistics", img: "/team/emily.png" },
    { name: "Nina Khoo", role: "Social Lead", img: "/team/emily.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" }
  ],
  "The Volunteer Switchboard": [
    { name: "Priya Das", role: "Community", img: "/team/sarah.png" },
    { name: "Ken Wong", role: "Platform Ops", img: "/team/john.png" },
    { name: "Nina Khoo", role: "Social Lead", img: "/team/emily.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
    { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" }
  ],
} as const;
type ExternalTeamKey = keyof typeof externalTeams;

/* ========================= PAGE ========================= */
export default function TeamPage() {
  const [activeTeam, setActiveTeam] = useState<"internal" | "external">("internal");
  const [activeInternal, setActiveInternal] =
    useState<InternalTeamKey>("Branding & Marketing");
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
        {/* Title */}
        <h1 className="text-center text-4xl font-bold mb-12">Meet The Team</h1>

        {/* EXCO */}
        <section className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-center text-green-600">EXCO</h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            The group that forms the backbone and oversees all projects and events.
          </p>

          <div className="mt-8 grid grid-cols-6 gap-6 justify-items-center">
            {Object.entries(excoMembers).map(([role, person], i) => (
              <div key={`exco-${person.name}-${i}`}>
                <MemberCard {...person} />
              </div>
            ))}
          </div>
        </section>

        {/* Internal / External Toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            className={`pointer-events-auto px-6 py-2 rounded-lg transition ${
              activeTeam === "internal"
                ? "bg-[#6A8DFF] text-white shadow-md"
                : "bg-slate-200 hover:bg-slate-300"
            }`}
            onClick={() => {
              console.log("Toggle → internal");
              setActiveTeam("internal");
            }}
            aria-pressed={activeTeam === "internal"}
          >
            Internal Team
          </button>

          <button
            type="button"
            className={`pointer-events-auto px-6 py-2 rounded-lg transition ${
              activeTeam === "external"
                ? "bg-[#6A8DFF] text-white shadow-md"
                : "bg-slate-200 hover:bg-slate-300"
            }`}
            onClick={() => {
              console.log("Toggle → external");
              setActiveTeam("external");
            }}
            aria-pressed={activeTeam === "external"}
          >
            External Team
          </button>
        </div>

        {/* Dynamic Section */}
        <section className="mt-12 rounded-2xl bg-white p-8 border border-slate-200 shadow-sm">
          {/* Sub-buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-4 text-sm">
            {subteamKeys.map((name) => (
              <button
                type="button"
                key={`subbtn-${name}`}
                onClick={() => {
                  console.log("Subtab click:", name);
                  if (activeTeam === "internal") {
                    setActiveInternal(name as InternalTeamKey);
                  } else {
                    setActiveExternal(name as ExternalTeamKey);
                  }
                }}
                className={`pointer-events-auto px-4 py-1 rounded-full transition ${
                  name === activeGroupName
                    ? "bg-blue-200 text-black shadow-sm"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
                aria-pressed={name === activeGroupName}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="text-center text-sm text-slate-600 mb-6">
            {activeTeam === "internal"
              ? `Currently viewing ${activeInternal}.`
              : `Currently viewing ${activeExternal}.`}
          </p>

          {/* Members */}
          <div className="overflow-x-auto whitespace-nowrap py-2">
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
function MemberCard({ name, role, img }: Member) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-slate-50 p-4 border border-slate-200 shadow hover:shadow-md transition">
      <img
        src={img}
        alt={name}
        className="h-24 w-24 rounded-full object-cover border border-slate-300"
      />
      <h3 className="mt-3 font-medium">{name}</h3>
      <p className="text-xs text-slate-600">{role}</p>
      <div className="flex gap-3 mt-3 text-slate-500 text-xl">
        <a href="#" className="hover:text-slate-800" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="#" className="hover:text-slate-800" aria-label="GitHub">
          <i className="fa-brands fa-github" />
        </a>
      </div>
    </div>
  );
}
