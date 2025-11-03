import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

const excoMembers = [
  { name: "Sarah Chen", role: "President", img: "/team/sarah.png" },
  { name: "John Doe", role: "Frontend Lead", img: "/team/john.png" },
  { name: "Emily Wang", role: "Backend Lead", img: "/team/emily.png" },
  { name: "Michael Brown", role: "Marketing Lead", img: "/team/michael.png" },
];

export default function TeamPage() {
  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-16">
        {/* Title */}
        <h1 className="text-center text-4xl font-bold mb-12">Meet The Team</h1>

        {/* EXCO Section */}
        <section className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-center text-green-600">EXCO</h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            The group of individuals that forms the backbone and oversees all projects and events.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {excoMembers.map((person) => (
              <div
                key={person.name}
                className="flex flex-col items-center rounded-xl bg-slate-50 p-4 border border-slate-200 shadow hover:shadow-md transition"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="h-24 w-24 rounded-full object-cover border border-slate-300"
                />
                <h3 className="mt-3 font-medium">{person.name}</h3>
                <p className="text-xs text-slate-600">{person.role}</p>

                <div className="flex gap-3 mt-3 text-slate-500 text-xl">
                  <a href="#" className="hover:text-slate-800">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className="hover:text-slate-800">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internal / External Team Toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button className="px-6 py-2 rounded-lg bg-blue-600 text-white">Internal Team</button>
          <button className="px-6 py-2 rounded-lg bg-slate-200 hover:bg-slate-300">
            External Team
          </button>
        </div>

        {/* Example Internal Team Section */}
        <section className="mt-12 rounded-2xl bg-white p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-wrap justify-center gap-3 mb-4 text-sm">
            <span className="px-4 py-1 rounded-full bg-slate-200 text-slate-700">
              Branding & Marketing
            </span>
            <span className="px-4 py-1 rounded-full bg-slate-200 text-slate-700">
              Operations + Treasurer
            </span>
            <span className="px-4 py-1 rounded-full bg-slate-200 text-slate-700">
              Partnerships + Tech
            </span>
          </div>

          <p className="text-center text-sm text-slate-600 mb-6">
            A group of individuals that seek to improve the branding and publicity.
          </p>

          {/* Copy the same card layout here for your internal members */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {excoMembers.map((person) => (
              <div
                key={person.name + "-internal"}
                className="flex flex-col items-center rounded-xl bg-slate-50 p-4 border border-slate-200 shadow hover:shadow-md transition"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="h-24 w-24 rounded-full object-cover border border-slate-300"
                />
                <h3 className="mt-3 font-medium">{person.name}</h3>
                <p className="text-xs text-slate-600">{person.role}</p>

                <div className="flex gap-3 mt-3 text-slate-500 text-xl">
                  <a href="#" className="hover:text-slate-800">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className="hover:text-slate-800">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
