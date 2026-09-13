import React from "react";

const layers = [
  {
    tier: "Frontend",
    detail: "React · Next.js · TypeScript · React Native",
    note: "Web and mobile, shared logic",
  },
  {
    tier: "Backend",
    detail: "Python · FastAPI · Node.js · Express",
    note: "REST APIs, background workers",
  },
  {
    tier: "Data",
    detail: "PostgreSQL · DynamoDB · MongoDB",
    note: "Schema design to migrations",
  },
];

const StackDiagram = () => {
  return (
    <div className="w-full max-w-sm">
      <div className="relative pl-8">
        {/* the rail */}
        <span
          aria-hidden="true"
          className="absolute left-[3px] top-3 bottom-3 w-px bg-copper/50"
        />

        <ul className="space-y-4">
          {layers.map(({ tier, detail, note }) => (
            <li key={tier} className="relative">
              {/* solder pad + branch into the card */}
              <span
                aria-hidden="true"
                className="absolute -left-8 top-6 w-2 h-2 rounded-[1px] bg-copper"
              />
              <span
                aria-hidden="true"
                className="absolute -left-[26px] top-[27px] h-px w-6 bg-copper/50"
              />

              <div className="bg-panel border border-seam rounded-md px-4 py-3 hover:border-copper/60 transition-colors">
                <p className="font-mono text-xs text-copper tracking-[0.2em] uppercase">
                  {tier}
                </p>
                <p className="text-bone text-sm mt-1.5">{detail}</p>
                <p className="text-ash text-xs mt-1">{note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="font-mono text-[11px] text-ash mt-4 pl-8 leading-relaxed">
        <span className="text-copper">//</span> schema design to shipped UI.
      </p>
    </div>
  );
};

export default StackDiagram;
