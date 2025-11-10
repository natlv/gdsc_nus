import { NavLink } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import DontMissOutSection from "../components/DontMissOutSection";

export default function EventsPage() {
  const pastEvents = [
    {
      year: "AY 24/25",
      yearParam: "ay2425",
      image: "/src/assets/events/ay2425.jpg",
      clickable: true,
    },
    {
      year: "AY 22/23",
      yearParam: "ay2223",
      image: "/src/assets/events/ay2223.png",
      clickable: false,
    },
    {
      year: "AY 20/21",
      yearParam: "ay2021",
      image: "/src/assets/events/ay2021.png",
      clickable: false,
    },
    {
      year: "AY 23/24",
      yearParam: "ay2324",
      image: "/src/assets/events/ay2324.jpg",
      clickable: false,
    },
    {
      year: "AY 21/22",
      yearParam: "ay2122",
      image: "/src/assets/events/ay2122.png",
      clickable: false,
    },
  ];

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Events</h1>
        <p className="text-center text-slate-600 mb-12">
          Discover our past and upcoming events organized by our wonderful team.
        </p>

        <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>

        <div className="mb-12">
          <NavLink
            to="/events/hack4good"
            className="block rounded-2xl border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                H4G
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Hack4Good Hackathon
                </h3>
                <p className="mt-2 text-slate-600">
                  DSC NUS's premier social impact hackathon - Build solutions for real-world challenges
                </p>
                <p className="mt-4 text-sm font-semibold text-blue-600">
                  Learn more →
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        <h2 className="text-2xl font-bold mb-8">Past Events</h2>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {pastEvents.slice(0, 3).map((event, i) => {
              const Component = event.clickable ? NavLink : "div";
              const props = event.clickable
                ? { to: `/events/${event.yearParam}`, className: "block cursor-pointer" }
                : { className: "block" };

              return (
                <Component key={i} {...props}>
                  <div
                    className={`rounded-2xl overflow-hidden shadow-lg group ${
                      event.clickable ? "hover:shadow-xl transition-all" : ""
                    }`}
                  >
                    <img
                      src={event.image}
                      alt={event.year}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <h3 className={`text-center font-bold ${
                        event.clickable
                          ? "text-slate-900 group-hover:text-blue-600 transition-colors"
                          : "text-slate-900"
                      }`}>
                        {event.year}
                      </h3>
                    </div>
                  </div>
                </Component>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-start-1 md:col-end-2 md:translate-x-1/2">
              {(() => {
                const event = pastEvents[3];
                const Component = event.clickable ? NavLink : "div";
                const props = event.clickable
                  ? { to: `/events/${event.yearParam}`, className: "block cursor-pointer" }
                  : { className: "block" };

                return (
                  <Component {...props}>
                    <div
                      className={`rounded-2xl overflow-hidden shadow-lg group ${
                        event.clickable ? "hover:shadow-xl transition-all" : ""
                      }`}
                    >
                      <img
                        src={event.image}
                        alt={event.year}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 bg-white">
                        <h3 className={`text-center font-bold ${
                          event.clickable
                            ? "text-slate-900 group-hover:text-blue-600 transition-colors"
                            : "text-slate-900"
                        }`}>
                          {event.year}
                        </h3>
                      </div>
                    </div>
                  </Component>
                );
              })()}
            </div>
            <div className="md:col-start-3 md:col-end-4 md:-translate-x-1/2">
              {(() => {
                const event = pastEvents[4];
                const Component = event.clickable ? NavLink : "div";
                const props = event.clickable
                  ? { to: `/events/${event.yearParam}`, className: "block cursor-pointer" }
                  : { className: "block" };

                return (
                  <Component {...props}>
                    <div
                      className={`rounded-2xl overflow-hidden shadow-lg group ${
                        event.clickable ? "hover:shadow-xl transition-all" : ""
                      }`}
                    >
                      <img
                        src={event.image}
                        alt={event.year}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 bg-white">
                        <h3 className={`text-center font-bold ${
                          event.clickable
                            ? "text-slate-900 group-hover:text-blue-600 transition-colors"
                            : "text-slate-900"
                        }`}>
                          {event.year}
                        </h3>
                      </div>
                    </div>
                  </Component>
                );
              })()}
            </div>
          </div>
        </div>

        <DontMissOutSection />
      </main>
      <Footer />
    </div>
  );
}
