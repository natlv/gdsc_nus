import { NavLink, useParams, Navigate } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import DontMissOutSection from "../components/DontMissOutSection";
import { getYearData } from "../data/pastEvents";

export default function PastEventDetailPage() {
  const { year } = useParams<{ year: string }>();

  if (!year) {
    return <Navigate to="/events" replace />;
  }

  const yearData = getYearData(year);

  if (!yearData) {
    return <Navigate to="/events" replace />;
  }

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <NavLink
          to="/events"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8"
        >
          ← Back to All Events
        </NavLink>

        <h1 className="text-3xl font-bold mb-8">{yearData.displayName} EVENTS</h1>

        <div className="grid gap-6 md:grid-cols-3">
          {yearData.events.map((e, i) => (
            <article
              key={i}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg"
            >
              <div className={`h-32 rounded-xl bg-gradient-to-r ${e.color} mb-4`}></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{e.title}</h3>
              <div className="text-sm text-blue-600 mb-2">{e.date}</div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-3">
                {e.tag}
              </div>
              <p className="text-sm text-slate-600 whitespace-pre-line">{e.description}</p>
            </article>
          ))}
        </div>

        <DontMissOutSection />
      </main>
      <Footer />
    </div>
  );
}
