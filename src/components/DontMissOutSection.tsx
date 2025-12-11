export default function DontMissOutSection() {
  return (
    <section className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Don't miss our next event.
      </h2>
      <p className="text-center mb-6 opacity-90">
        Join our community to get notified about upcoming workshops, talks, and hackathons.
        Be the first to know and secure your spot!
      </p>
      <div className="flex justify-center">
        <a
          href="https://t.me/dscnus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-white border-2 border-blue-500 px-6 py-3 text-sm font-semibold text-blue-500 hover:bg-blue-50 transition-colors"
        >
          Join Upcoming Events
        </a>
      </div>
    </section>
  );
}
