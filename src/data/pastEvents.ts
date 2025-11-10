export interface Event {
  title: string;
  date: string;
  tag: string;
  attendees: string;
  description: string;
  color: string;
}

export interface YearData {
  year: string;
  displayName: string;
  events: Event[];
}

export const pastEventsData: Record<string, YearData> = {
  ay2425: {
    year: "ay2425",
    displayName: "AY 24/25",
    events: [
      {
        title: "Fireside Chat",
        date: "Sept 2, 2024",
        tag: "Talk",
        attendees: "120 attendees",
        description:
          "🎤 Name, Position @ Company\n👥 120 attendees\n📍COM1-0210\nStudents gained insights on tech careers, interview prep, and life at Company through an interactive Q&A session.",
        color: "from-blue-400 via-purple-400 to-pink-400",
      },
      {
        title: "Hack4Good Hackathon",
        date: "Feb 18, 2025",
        tag: "Hackathon",
        attendees: "80 participants (20 teams)",
        description:
          "🏆 24-hour social impact hackathon\n👥 80 participants (20 teams)\n📍Innovation 4.0, i4\nTeams built tech solutions for social good. Top 3 projects won prizes and mentorship from Google engineers.",
        color: "from-green-400 via-teal-400 to-cyan-400",
      },
      {
        title: "Android Development Workshop",
        date: "March 21, 2025",
        tag: "Workshop",
        attendees: "40 participants",
        description:
          "👩‍💻 Name, Position @ Company\n👥 40 participants\nParticipants built their first Android app using Kotlin and Jetpack Compose in this hands-on 3-hour workshop.",
        color: "from-yellow-300 via-orange-300 to-yellow-400",
      },
    ],
  },
};

export const getYearData = (year: string): YearData | null => {
  return pastEventsData[year] || null;
};
