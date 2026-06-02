import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/portfolio/Navbar";

interface Role {
  title: string;
  company: string;
  period: string;
  groups: { label?: string; bullets: string[] }[];
}

const summary =
  "Marketing and content strategist with 2+ years driving organic growth across fintech, climate-tech, and health & nutrition brands. Track record of building content pipelines, generating measurable leads, and implementing SEO and social strategies that improve visibility and engagement. Fluent across the full AI stack: from using it as a strategic thinking partner to building dashboards, automations, and campaign tools that make marketing efficient and sharper.";

const roles: Role[] = [
  {
    title: "Media Marketing Specialist",
    company: "Qua Nutrition",
    period: "Feb 2025 – Dec 2025",
    groups: [
      {
        label: "Content Strategy and Performance Analysis",
        bullets: [
          "Implemented content strategies for business development",
          "Understood and analysed content performance to understand business impact",
          "CRM management and analysis",
        ],
      },
      {
        label: "Lead generation",
        bullets: [
          "Implemented strategies for organic social media marketing to generate quality leads that brought in approximately Rs. 3.3Cr between March–July 2025.",
        ],
      },
      {
        label: "Podcast — The Nutrition Revolution",
        bullets: [
          "Came up with the idea of a podcast series featuring conversations between clients and dietitians.",
          "Designed logo, ideated trailers and introductions, coordinated participants, prepared questionnaires, and ran pre- and post-production coordination.",
        ],
      },
      {
        label: "Facebook",
        bullets: [
          "Strategized for Facebook to bring in quality business through audience-relevant content",
          "Posting of content",
          "End-to-end follow-through of all activities pertinent to the platform including commenting and DM replies",
        ],
      },
      {
        label: "Website",
        bullets: ["SEO check", "Blog quality check", "Website content writing"],
      },
      {
        label: "Campaign Ideation and Scripting",
        bullets: [
          "Came up with monthly campaign ideas and scripts which were executed on organic social media channels.",
        ],
      },
      {
        label: "Quantitative Abilities",
        bullets: [
          "Used quantitative abilities to plan and achieve business targets by setting social-media channel-wise intra-team targets, following through, and tracking conversions made by the agency.",
        ],
      },
      {
        label: "Inter-company Team Coordination",
        bullets: [
          "Coordinated within multiple teams as POC for the Media Team Agency to ensure all workflows ran smoothly.",
        ],
      },
      {
        label: "Diagnostics Branch — Nutrition Choice",
        bullets: [
          "Owned social media content calendar, strategy and ideation, and organic leads generation for Qua Nutrition's diagnostics brand.",
        ],
      },
    ],
  },
  {
    title: "Content & Marketing Associate",
    company: "Sustainology Climate Solutions",
    period: "Sept 2024 – Jan 2025",
    groups: [
      {
        label: "SEO",
        bullets: [
          "Developed and executed SEO-optimized website content, blog posts, and schema markup to enhance search engine visibility",
          "Conducted keyword research and implemented on-page SEO strategies to improve organic rankings",
        ],
      },
      {
        label: "Content Creation & Copywriting",
        bullets: [
          "Wrote compelling social media scripts, captions, and posts while maintaining brand voice and messaging",
        ],
      },
      {
        label: "Social Media Management",
        bullets: [
          "Managed social media calendars and scheduled content across Instagram & LinkedIn",
          "Produced high-quality graphics using Canva for campaigns and organic posts",
          "Acted in and shot video content for social media to enhance engagement",
        ],
      },
      {
        label: "Campaign Management",
        bullets: [
          "Developed and executed digital marketing campaigns, including strategy, content creation, and performance tracking.",
        ],
      },
      {
        label: "Partnerships & PR",
        bullets: [
          "Led outreach initiatives to establish partnerships and PR opportunities, enhancing brand credibility",
          "Engaged with industry influencers and media to expand brand reach",
        ],
      },
    ],
  },
  {
    title: "Marketing Consultant (Freelance)",
    company: "MSR Academia",
    period: "Dec 2024 – Mar 2025",
    groups: [
      {
        bullets: [
          "Consulted on content strategy and digital presence",
          "Supported content planning and execution across platforms",
        ],
      },
    ],
  },
  {
    title: "Content Writer Intern",
    company: "Betterhalf.ai",
    period: "May 2024 – Jul 2024",
    groups: [
      {
        bullets: [
          "Created SEO-optimized content to support organic acquisition and user engagement",
          "Monitored keyword and content performance to improve visibility",
        ],
      },
    ],
  },
  {
    title: "Content & Social Media Intern",
    company: "Stack Wealth",
    period: "Oct 2023 – Apr 2024",
    groups: [
      {
        bullets: [
          "Assisted in social media content creation (scripts, ideas, acting, shooting)",
          "Wrote SEO-optimized blog content and uploaded posts on the Ghost platform",
          "Wrote content for LinkedIn and Twitter",
          "Researched the finance domain",
          "Owned the social media calendar and posting across platforms",
          "Drove digital marketing and SEO via schema markup on website content to enhance search visibility",
          "Wrote content for elements on the website",
        ],
      },
    ],
  },
  {
    title: "Newsroom Intern",
    company: "NDTV",
    period: "May 2023 – Jun 2023",
    groups: [
      {
        bullets: [
          "Worked in news packaging",
          "Trained 6 interns under news packaging",
          "Contributed to at least 6 hours of news bulletins every day for 1.5 months",
          "Cut, edited, transcribed, and translated news bytes and pieces that went on air",
          "Built templates for on-air news content",
          "Researched for news shows and translated scripts for comprehensive news packages",
        ],
      },
    ],
  },
  {
    title: "Web Content & PR Intern",
    company: "EV Update Media",
    period: "Oct 2022 – Mar 2023",
    groups: [
      {
        bullets: [
          "Managed content over WordPress",
          "Researched and wrote relevant news for the EV industry across the Indian and US markets",
          "Handled public relations and business development for EV Update Maharashtra Summit 2023",
          "Anchored EV Update Maharashtra Summit 2023, EV Update Karnataka Summit 2023, and EV Update Tamil Nadu Summit 2024",
        ],
      },
    ],
  },
  {
    title: "Research & Content Writing Intern",
    company: "The Dialogue Box",
    period: "Jun 2022 – Jul 2022",
    groups: [
      {
        bullets: [
          "Wrote blogs for the website",
          "Researched law, human rights, and political content",
        ],
      },
    ],
  },
];

const WorkExperience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="section-padding pt-16 md:pt-24">
        <div className="container-narrow">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to home
          </Link>

          <header className="mt-10 border-b border-border pb-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cherry">
              Professional Experience
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Work Experience.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {summary}
            </p>
          </header>

          <div className="mt-14 space-y-14">
            {roles.map((role) => (
              <section key={`${role.company}-${role.period}`}>
                <div className="flex flex-col gap-1 border-b border-border pb-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                      {role.title}
                    </h2>
                    <p className="mt-1 text-base font-medium text-cherry">
                      {role.company}
                    </p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {role.period}
                  </p>
                </div>

                <div className="mt-6 space-y-6">
                  {role.groups.map((g, i) => (
                    <div key={i}>
                      {g.label && (
                        <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                          {g.label}
                        </h3>
                      )}
                      <ul className="max-w-3xl space-y-2">
                        {g.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cherry" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 border-t border-border pt-10">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WorkExperience;
