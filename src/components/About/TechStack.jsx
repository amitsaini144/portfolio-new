import {
    SiJavascript, SiTypescript, SiPython, SiRust,
    SiReact, SiTailwindcss, SiVite, SiReactquery, SiNextdotjs,
    SiNodedotjs, SiExpress, SiSocketdotio, SiWebrtc, SiFastapi,
    SiFirebase, SiPostgresql, SiMysql, SiSqlite, SiAmazons3,
    SiOpenai, SiClaude, SiGooglegemini,
} from "react-icons/si";

const groups = [
    {
        label: "Languages",
        items: [
            { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
            { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
            { Icon: SiPython, name: "Python", color: "#4B8BBE" },
            { Icon: SiRust, name: "Rust", color: "#DEA584" },
        ],
    },
    {
        label: "Frontend",
        items: [
            { Icon: SiReact, name: "React 19", color: "#61DAFB" },
            { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
            { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
            { Icon: SiVite, name: "Vite", color: "#646CFF" },
            { Icon: SiReactquery, name: "TanStack Query", color: "#FF4154" },
        ],
    },
    {
        label: "Backend & real-time",
        items: [
            { Icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
            { Icon: SiExpress, name: "Express 5", color: "#E4E4E4" },
            { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
            { Icon: SiSocketdotio, name: "Socket.IO", color: "#E4E4E4" },
            { Icon: SiWebrtc, name: "WebRTC", color: "#B7B7B7" },
        ],
    },
    {
        label: "Data & storage",
        items: [
            { Icon: SiFirebase, name: "Firestore", color: "#FFCA28" },
            { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
            { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
            { Icon: SiSqlite, name: "SQLite", color: "#7BB3CC" },
            { Icon: SiAmazons3, name: "S3 / B2", color: "#569A31" },
        ],
    },
    {
        label: "AI & machine learning",
        items: [
            { Icon: SiOpenai, name: "OpenAI API", color: "#74AA9C" },
            { Icon: SiClaude, name: "Claude", color: "#D97757" },
            { Icon: SiGooglegemini, name: "Gemini", color: "#8E75B2" },
        ],
    },
];

const TechStack = () => {
    return (
        <div className="space-y-8 py-6">
            {groups.map(({ label, items }) => (
                <div key={label}>
                    <p className="font-mono text-xs text-ash tracking-[0.25em] uppercase mb-3">
                        {label}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {items.map(({ Icon, name, color }) => (
                            <div
                                key={name}
                                className="w-[104px] md:w-[128px] h-24 flex flex-col items-center justify-center gap-2 text-[34px] bg-panel rounded-md border border-seam hover:border-copper transition-colors duration-300"
                                title={name}
                            >
                                <Icon style={{ color }} />
                                <span className="font-mono text-[10px] text-ash tracking-wider uppercase text-center px-1">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechStack;
