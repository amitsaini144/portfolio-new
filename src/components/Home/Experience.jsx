import React from "react";
import SectionHeading from "../SectionHeading";

const jobs = [
  {
    role: "Full-Stack Developer",
    company: "Innover Labs · Pune, India",
    period: "Mar 2025 — Present",
    highlights: [
      "Built an AI-powered bank reconciliation engine (Python/FastAPI) with a SWIFT MT940 parser and Celery background workers, automating continuous matching against SAP ERP invoices.",
      "Led a 5-service invoice reconciliation module (orchestration, matching, allocation, validation, audit) handling split payments and partial allocations for enterprise clients.",
      "Built the real-time speech-to-speech translation pipeline for a live-interpretation platform: browser/phone audio streamed over WebSockets into Deepgram's live-streaming STT, with a bilingual mode running two simultaneous Deepgram connections and a confidence-buffering window to resolve which speaker was talking.",
      "Handled the Twilio Media Streams leg of that pipeline — converting μ-law telephony audio to linear PCM, and re-chunking Google Cloud TTS output back into paced 20ms frames for phone participants.",
    ],
    stack: ["Python", "FastAPI", "Celery", "PostgreSQL", "DynamoDB", "SAP ERP", "Deepgram", "WebSockets", "Twilio"],
  },
  {
    role: "Full-Stack Developer (MERN)",
    company: "Napworks · Punjab, India",
    period: "Nov 2024 — Jan 2025",
    highlights: [
      "Built two React.js/Redux admin dashboards for user data and analytics, improving operational efficiency by 25%.",
      "Designed MongoDB schemas and aggregation pipelines, improving query performance by 40%, and integrated REST APIs with the React frontend.",
    ],
    stack: ["React.js", "Redux Toolkit", "MongoDB", "REST APIs"],
  },
];

const Experience = () => {
  return (
    <div className="border-t border-seam px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Where I work"
          sub="Features owned end to end, from schema to shipped UI."
        />

        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={`${job.role}-${job.period}`} className="bg-panel border border-seam rounded-md p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-1">
                <h3 className="text-2xl font-semibold text-bone">{job.role}</h3>
                <p className="font-mono text-xs md:text-sm text-copper tracking-widest uppercase">
                  {job.period}
                </p>
              </div>
              <p className="text-ash mb-6">{job.company}</p>

              <div className="border-t border-seam pt-6">
                <ul className="space-y-3">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-ash leading-relaxed">
                      <span className="text-copper mt-2 w-1.5 h-1.5 rounded-[1px] bg-copper shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-7">
                  {job.stack.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs text-bone/80 border border-seam bg-ink px-2 py-1 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
