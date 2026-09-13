import React from "react";

import SectionHeading from "../SectionHeading";
import StackDiagram from "./StackDiagram";

const Introduction = () => {
  return (
    <div className="border-t border-seam px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5 w-full">
          <SectionHeading label="Introduction" title="What I actually build" />
          <div className="text-lg text-bone/90 leading-relaxed space-y-5">
            <p>
              I&apos;m a full-stack developer at{" "}
              <b className="text-copper">Innover Labs</b> in Pune, shipping
              production SaaS across <b className="text-copper">FinTech</b>{" "}
              and real-time <b className="text-copper">Voice AI</b>.
            </p>
            <p>
              On the backend that&apos;s Python, FastAPI and SQLAlchemy, Celery
              workers, and REST APIs backed by PostgreSQL and DynamoDB. On the
              frontend it&apos;s React.js, Next.js, React Native and TypeScript.
              I&apos;m comfortable owning a feature end to end — from schema
              design to shipped UI.
            </p>
            <p>
              I also work with AI models day to day — from streaming audio
              through Deepgram for live speech-to-speech translation, to
              parsing bank statements, MT940 files, and other PDFs into
              structured, usable data.
            </p>
            <p>
              If a problem needs an API, a schema, and an interface on top of
              it, that&apos;s the kind I like most.
            </p>
          </div>
        </div>
        <div className="md:w-2/5 w-full flex justify-center">
          <StackDiagram />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
