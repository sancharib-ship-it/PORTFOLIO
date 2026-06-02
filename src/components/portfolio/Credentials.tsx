const education = [
  {
    institution: "IE Business School",
    location: "Madrid, Spain",
    degree: "Master in Strategic Marketing and Communications",
    duration: "September 2025 – July 2026",
  },
  {
    institution: "Christ University",
    location: "Bengaluru, India",
    degree: "Bachelor of Arts in Economics, Media Studies and Political Science (Triple Majors)",
    duration: "August 2021 – May 2024",
  },
  {
    institution: "Indira National School",
    location: "Pune, India",
    degree: "12th Grade — 90.8% (Physics, Chemistry, Biology, Economics, English)",
    duration: "May 2021",
  },
  {
    institution: "Global Indian International School",
    location: "Pune, India",
    degree: "10th Grade — 92.8%",
    duration: "May 2019",
  },
];

const languages = [
  { language: "English", level: "Native" },
  { language: "Hindi", level: "Full working proficiency" },
  { language: "Bengali (Mother Tongue)", level: "Spoken proficiency" },
  { language: "Marathi", level: "Limited working proficiency" },
  { language: "French", level: "Elementary" },
  { language: "Spanish", level: "Elementary (Active learner)" },
];

const certifications = [
  {
    course: "LinkedIn Marketing & Lead Generation Bootcamp for B2B Sales",
    platform: "Udemy",
    credential: "UC-957592ea-2e7b-4f6a-8949-e9141023539c",
  },
  {
    course: "French for you. French language course for English speakers.",
    platform: "Udemy",
    credential: "UC-61d9a34b-e292-4085-b67d-8d7d30ee6649",
  },
  {
    course: "Generative AI for Business",
    platform: "ReBundle X IE",
    credential: "CE-4635849",
  },
  {
    course: "Digital Analytics Fundamentals for Business Professionals",
    platform: "ReBundle X IE",
    credential: "CE-3295475",
  },
  {
    course: "Introduction to Model Context Protocol",
    platform: "Anthropic",
    credential: "skziop2pcuhx",
  },
];

export const Credentials = () => {
  return (
    <section id="credentials" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-narrow space-y-16">
        {/* Education */}
        <div>
          <div className="mb-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cherry">
              Education
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Education.
            </h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-background text-foreground">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-secondary text-secondary-foreground">
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                    Institution
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                    Location
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                    Degree
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {education.map((row) => (
                  <tr key={row.institution} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-4 align-top text-sm font-semibold">
                      {row.institution}
                    </td>
                    <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted-foreground">
                      {row.location}
                    </td>
                    <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted-foreground">
                      {row.degree}
                    </td>
                    <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted-foreground">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Languages */}
        <div>
          <div className="mb-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cherry">
              Languages
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Languages.
            </h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-background text-foreground">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-secondary text-secondary-foreground">
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] md:w-1/2">
                    Language
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {languages.map((row) => (
                  <tr key={row.language} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-4 align-top text-sm font-semibold">
                      {row.language}
                    </td>
                    <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted-foreground">
                      {row.level}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="mb-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cherry">
              Certifications
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Certifications.
            </h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-background text-foreground">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-secondary text-secondary-foreground">
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                    Course
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                    Platform
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                    Credential ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {certifications.map((row) => (
                  <tr key={row.credential} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-4 align-top text-sm font-semibold">
                      {row.course}
                    </td>
                    <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted-foreground">
                      {row.platform}
                    </td>
                    <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted-foreground break-all">
                      {row.credential}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
