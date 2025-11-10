import { NavLink } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import DontMissOutSection from "../components/DontMissOutSection";

export default function Hack4GoodPage() {
  const opportunities = [
    {
      title: "Real Impact",
      description: "Tackle real challenges faced by underserved communities and make a tangible difference",
      image: "/src/assets/events/realimpact.png",
    },
    {
      title: "Expert Mentors",
      description: "Learn from experienced mentors from Google, Grab, and other tech companies",
      image: "/src/assets/events/expertmentors.png",
    },
    {
      title: "Win Prizes",
      description: "Win prizes and mentorship opportunities",
      image: "/src/assets/events/winprizes.png", 
    },
    {
      title: "Collaborate",
      description: "Collaborate with like-minded changemakers",
      image: "/src/assets/events/collaborate.png", 
    },
    {
      title: "Build Portfolio",
      description: "Build your portfolio with purpose-driven projects",
      image: "/src/assets/events/portfolio.png", 
    },
  ];

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        {/* Back Link */}
        <NavLink
          to="/events"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8"
        >
          ← Back to All Events
        </NavLink>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Hack4Good Hackathon</h1>

        <div className="grid gap-12 md:grid-cols-[1fr_1fr] items-start">
          {/* Left Column - About and Opportunity */}
          <div className="space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Hack4Good is DSC NUS's premier social impact hackathon, bringing together
                  students, industry mentors, and community partners to create technology
                  solutions for social and environmental challenges.
                </p>
                <p>
                  This 24-hour hackathon challenges teams of 2-5 students to build innovative
                  projects that address real-world problems in areas like education,
                  environmental sustainability, healthcare, and community strengthening.
                </p>
              </div>
            </section>

            {/* Opportunity Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                This isn't just another hackathon, it's an opportunity to:
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {opportunities.map((opp, i) => (
                  <div
                    key={i}
                    className={`rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow ${
                      i === 2 ? "md:col-span-1" : ""
                    }`}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={opp.image}
                        alt={opp.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-bold text-sm text-slate-900 mb-2">{opp.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{opp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Previous Winners */}
          <div className="flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-4">
              <img
                src="/src/assets/events/rightpicture.png" 
                alt="Previous Winners"
                className="w-full h-auto object-cover"
              />
            </div>
            <NavLink
              to="/events/hack4good/winners"
              className="inline-block rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
            >
              View Previous Winners
            </NavLink>
          </div>
        </div>

        {/* Call to Action */}
        <section className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-center text-slate-700 leading-relaxed">
            All skill levels are welcome! Whether you're a seasoned developer or just starting
            your coding journey, Hack4Good provides the support, resources, and community to help
            you succeed.
          </p>
        </section>

        <DontMissOutSection />
      </main>
      <Footer />
    </div>
  );
}

