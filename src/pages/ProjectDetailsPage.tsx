import { Link, Navigate, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const similarProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate-700">
          {project.description}
        </p>

        {similarProjects.length > 0 && (
          <section className="mt-16 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-semibold text-slate-900">
              Similar Projects
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {similarProjects.map((similar) => (
                <Link
                  key={similar.slug}
                  to={`/projects/${similar.slug}`}
                  className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-md"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {similar.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {similar.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-14 flex justify-start">
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
