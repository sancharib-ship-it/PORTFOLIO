const tools = [
  { purpose: "Content Management Systems", items: "WordPress, Ghost, Substack" },
  { purpose: "Design Softwares", items: "Canva, Affinity" },
  { purpose: "Video Editing Softwares", items: "VN Editor, CapCut" },
  { purpose: "Data Analysis Softwares", items: "Tableau, Excel" },
  { purpose: "CRM", items: "Superleap, Salesforce" },
  {
    purpose: "AI Toolkit",
    items:
      "ChatGPT, Perplexity, Github Copilot, Vercel, Supabase, Base44, Gemini NanoBanana, MidJourney, Claude, Claude Code, Lovable, Google Stitch",
  },
  { purpose: "Marketing Automation", items: "Zapier, N8N, ManyChat" },
];

export const Tools = () => {
  return (
    <section id="tools" className="section-padding">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cherry">
            Tools
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Toolkit.
          </h2>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-secondary text-secondary-foreground">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] md:w-1/3">
                  Purpose
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                  Tools
                </th>
              </tr>
            </thead>
            <tbody>
              {tools.map((row) => (
                <tr key={row.purpose} className="border-b border-border last:border-b-0">
                  <td className="px-5 py-4 align-top text-sm font-semibold">
                    {row.purpose}
                  </td>
                  <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted-foreground">
                    {row.items}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
