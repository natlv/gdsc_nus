import { NavLink } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function Hack4GoodWinnersPage() {
  const winners = [
    {
      title: "EcoTrack - Hack4Good 2024",
      team: "Team GreenTech",
      description: "AI-powered carbon footprint tracker helping users reduce their environmental impact.",
      placement: "1st Place Winner",
      year: "2024",
      gradient: "from-blue-400 to-purple-500",
      github: "/events/hack4good",
      
    },
    {
      title: "HealthAI - Hack4Good 2024",
      team: "Team MedTech",
      description: "Mental health chatbot providing 24/7 support and resources for students.",
      placement: "2nd Place Winner",
      year: "2024",
      gradient: "from-green-600 to-blue-400",
      github: "/events/hack4good",
      
    },
    {
      title: "EduConnect - Hack4Good 2024",
      team: "Team LearnHub",
      description: "Platform connecting volunteer tutors with underprivileged students.",
      placement: "3rd Place Winner",
      year: "2024",
      gradient: "from-yellow-500 to-orange-500",
      github: "/events/hack4good",
      
    },
    {
      title: "FridgeWhisper - Hack4Good 2023",
      team: "Team ByteBakers",
      description: "Voice-controlled meal planner that generates recipes from whatever's in your fridge.",
      placement: "1st Place Winner",
      year: "2023",
      gradient: "from-blue-400 to-purple-500",
      github: "/events/hack4good",
      
    },
    {
      title: "ScamShieldAI - Hack4Good 2023",
      team: "Team CyberGuardians",
      description: "Real-time scam call detector using speech sentiment and intent analysis.",
      placement: "2nd Place Winner",
      year: "2023",
      gradient: "from-green-600 to-blue-400",
      github: "/events/hack4good",
      
    },
    {
      title: "MoodTune - Hack4Good 2022",
      team: "Team SonicWaves",
      description: "Emotion-based music player that adapts playlists using facial expression tracking.",
      placement: "1st Place Winner",
      year: "2022",
      gradient: "from-yellow-500 to-orange-500",
      github: "/events/hack4good",
      
    },
  ];

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        {/* Back Link */}
        <NavLink
          to="/events/hack4good"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8"
        >
          ← Back to H4G
        </NavLink>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Previous Winner of H4G
        </h1>

        {/* Winner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {winners.map((winner, i) => (
            <article
              key={i}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image/Gradient Top */}
              <div className={`h-32 bg-linear-to-r ${winner.gradient} relative overflow-hidden`}>
                {/* {winner && (
                  <img
                    src={winner.image}
                    alt={`${winner.title} - ${winner.team}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                )} */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{winner.title}</h3>
                <p className="text-sm font-bold text-slate-700 mb-3">{winner.team}</p>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                  {winner.description}
                </p>
                <p className="text-xs font-semibold text-blue-600 mb-4">
                  {winner.placement}
                </p>
                <NavLink
                  to={winner.github}
                  className="inline-block w-full rounded-full bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
                >
                  View GitHub
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

