// src/data.js
//
// All page content lives here. Components are presentational; edit copy in this
// file rather than in JSX.

export const profile = {
  name: "Parker Billinger",
  positioning: "Backend Software Engineer · C#/.NET, Azure, TypeScript",
  intro:
    "I'm a backend-focused software engineer who builds production APIs, third-party integrations, and cloud services in C#/.NET and Azure. I like owning work end to end, from technical design through release and production troubleshooting. Outside work I'm building NextMovie, a movie recommendation platform. I have a B.S. in Computer Science and an MBA in Data Analytics from Kansas State, so I think about engineering in terms of cost, risk, and what matters to users.",
  // Cropped from the full-frame original to a square at 640px, grayscale.
  // The hero slot caps at 320px wide so this renders at 2x on retina.
  headshot: "/headshot.jpg",
  headshotAlt: "Parker Billinger",
};

export const featured = {
  title: "NextMovie",
  tagline: "Finds the best movie you haven't seen that you can stream tonight.",
  repo: "https://github.com/pbillinger48/NextMovie",
  // TODO(Parker): add the live URL once the Azure deployment is up. While this is
  // null the card shows only the repo link instead of a dead "live site" button.
  liveUrl: null,
  // Cropped from the original capture to 16:10 and converted to WebP.
  screenshot: "/nextmovie.webp",
  screenshotAlt:
    "The NextMovie 'What to watch' feed: recommended films each showing its rating, streaming availability, and the reasons it was picked",
  stack: [
    "ASP.NET Core (.NET 10)",
    "C#",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "EF Core",
    "Docker",
    "GitHub Actions",
  ],
  stackNote:
    "pnpm + Turborepo monorepo. Azure deployment with Terraform in progress.",
  highlights: [
    "Recommendation engine that pools candidates from TMDB relatedness and ranks them against a taste profile computed from the user's own ratings, with an explanation for every pick.",
    "Offline evaluation harness (hold-out Recall@N, MRR, cross-user list overlap) that caught personalization failures the unit tests passed.",
    "Per-region streaming availability, cached daily.",
    "Background import pipeline matching Letterboxd exports to TMDB, with a manual review queue for ambiguous matches.",
    "JWT sessions with refresh tokens and Google sign-in.",
    "490+ automated tests, CI on every pull request, and 13 written architecture decision records.",
  ],
};

export const experience = [
  {
    company: "Netsmart",
    role: "Software Engineer",
    period: "Sept 2024 – Present",
    bullets: [
      "Build full-stack features for a production SaaS platform supporting thousands of peak concurrent users, spanning legacy ASP.NET MVC applications and modern .NET 8 / Azure Functions services.",
      "Owned 2 of the platform's 5 external partner integrations, designing and building C# REST APIs that exchange data with third-party systems inside live customer workflows.",
      "Built a new partner integration from the ground up (API endpoints, data-import pipeline, dependency injection, SQL Server) and shipped it to production.",
      "Implemented OAuth, asynchronous message processing with Azure Service Bus, and caching with MongoDB, reliably processing tens of thousands of integration messages per day.",
      "Owned features end to end from design through production troubleshooting; onboarded 2 new engineers.",
    ],
  },
  {
    company: "Quest Analytics",
    role: "Software Engineer Intern / Contractor",
    period: "2022 – May 2024",
    bullets: [
      "Developed and maintained a C#/.NET data-analysis application used by CMS (a federal agency) and large healthcare networks to evaluate network adequacy.",
      "Fixed defects and shipped features across a legacy desktop application (C#, XAML) and a React front end, with xUnit tests.",
    ],
  },
];

export const otherProjects = [
  {
    title: "NBA Stats",
    description:
      "SQL queries analyzing performance metrics and trends across a season of NBA game statistics.",
    link: "https://github.com/pbillinger48/NBAStats21-22",
  },
];

export const earlierWork = {
  title: "NexdMovie",
  year: "2023",
  context: "Senior design project",
  description:
    "React + Django/Python web app generating film recommendations from a Letterboxd profile. NextMovie grew out of this.",
  link: "https://github.com/pbillinger48/NexdMovie",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["C#", "TypeScript", "Python", "SQL", "JavaScript", "Java"],
  },
  {
    label: "Backend & cloud",
    items: [
      "ASP.NET Core",
      ".NET 8/10",
      "Entity Framework",
      "Azure Functions",
      "Azure Service Bus",
      "REST API design",
      "OAuth",
      "JWT",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Data & tooling",
    items: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Git",
    ],
  },
];

export const education = [
  {
    degree: "B.S., Computer Science",
    year: "2024",
    school: "Kansas State University",
    image: "/KansasState.png",
  },
  {
    degree: "M.B.A., Data Analytics focus",
    year: "2024",
    school: "Kansas State University",
    image: "/KansasState.png",
  },
];

export const contact = {
  email: "pbillinger48@gmail.com",
  linkedin: "https://www.linkedin.com/in/parker-billinger-209bb2231/",
  github: "https://github.com/pbillinger48",
  resume: "/ParkerBillingerResume.pdf",
  location: "Kansas City, MO",
};
