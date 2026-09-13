import { VscVscode } from "react-icons/vsc";
import { FaLinux } from "react-icons/fa";
import { DiWindows } from "react-icons/di";
import { FiDatabase } from "react-icons/fi";
import {
    SiGit, SiGithub, SiPostman,
    SiVercel, SiFastapi, SiClaude, SiAmazonwebservices,
} from "react-icons/si";

const tools = [
    { Icon: VscVscode, name: "VS Code", color: "#007ACC" },
    { Icon: SiGit, name: "Git", color: "#F05032" },
    { Icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
    { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
    { Icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
    { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { Icon: SiClaude, name: "Claude AI", color: "#D97757" },
    { Icon: SiAmazonwebservices, name: "AWS", color: "#FF9900" },
    { Icon: FiDatabase, name: "pgAdmin", color: "#E4E4E4" },
    { Icon: DiWindows, name: "Windows", color: "#0078D4" },
    { Icon: FaLinux, name: "Linux", color: "#FCC624" },
];

const ToolStack = () => {
    return (
        <div className="flex flex-wrap gap-3 py-6">
            {tools.map(({ Icon, name, color }) => (
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
    );
};

export default ToolStack;
