import React from "react";

const education = [
  { course: "Bachelor of Computer Science Engineering", school: "Sardar Beant Singh State University, Punjab, India", period: "2020 — 2024", note: "CGPA 7.61" },
];

const Credentials = () => {
  return (
    <div className="py-6">
      <div className="bg-panel border border-seam rounded-md p-6 max-w-xl">
        <p className="font-mono text-xs text-copper tracking-[0.25em] uppercase mb-5">
          Education
        </p>
        <ul className="space-y-4">
          {education.map(({ course, school, period, note }) => (
            <li key={course} className="border-l-2 border-seam pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-bone font-medium">{course}</p>
                <span className="font-mono text-xs text-ash">{period}</span>
              </div>
              <p className="text-ash text-sm mt-0.5">{school}</p>
              {note && <p className="font-mono text-xs text-copper mt-1">{note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Credentials;
