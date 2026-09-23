import AboutMe from "../../assets/about.png";
import { ImPointRight } from "react-icons/im";
import SectionHeading from "../SectionHeading";

const interests = [
    "Video gaming",
    "Following pop culture",
    "Tech enthusiast",
    "Video editing",
];

const AboutCard = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-3/5 w-full">
                <SectionHeading label="About" title="Background" />
                <div className="text-base md:text-lg leading-relaxed text-bone/90 space-y-5">
                    <p>
                        I&apos;m Amit — a full-stack developer in Pune, currently at{" "}
                        <span className="text-copper">Innover Labs</span>.
                    </p>
                    <p>
                        I&apos;ve spent the last 2 years shipping production SaaS
                        across FinTech and real-time Voice AI — bank reconciliation
                        engines, invoice matching pipelines, and a Deepgram-powered
                        speech-to-speech translation pipeline for live interpretation
                        calls. I like owning a feature end to end, from schema design
                        to shipped UI.
                    </p>
                </div>
                <p className="mt-8 font-mono text-sm text-ash tracking-widest uppercase">
                    Away from the keyboard
                </p>
                <ul className="mt-3 text-ash space-y-1">
                    {interests.map((item) => (
                        <li key={item} className="flex items-center">
                            <ImPointRight className="mr-2 text-copper shrink-0" /> {item}
                        </li>
                    ))}
                </ul>
                <p className="mt-8 font-mono text-copper text-base md:text-lg">
                    <span className="text-ash">//</span> I&apos;d rather ship one thing that
                    holds up than three that demo well.
                </p>
            </div>
            <div className="flex justify-center items-center md:w-2/5 w-full">
                <img
                    src={AboutMe}
                    alt="About Me"
                    className="border border-seam rounded-md w-full max-w-md h-auto"
                />
            </div>
        </div>
    );
};

export default AboutCard;
