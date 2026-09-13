import depinX402 from "../../assets/projects/depin-x402.png";
import solagram from "../../assets/projects/solagram.png";
import peerlink from "../../assets/projects/peerlink.png";
import a17 from "../../assets/projects/a17.png";
import codeBuddy from "../../assets/projects/code_buddy.png";

const ProjectData = [
    {
        title: "PeerLink",
        description:
        "A peer-to-peer video calling app built with Next.js, WebRTC and WebSockets. See who's online and start a video or audio call directly from the browser — a custom WebSocket signaling server handles connection setup while WebRTC carries the media peer-to-peer, with Clerk auth and real-time presence.",
        tech: ["Next.js", "WebRTC", "WebSocket", "Socket.io", "Clerk"],
        image: peerlink,
        githubLink: "https://github.com/amitsaini144/peer-link",
        liveLink: "https://peerlink.amit144.com/",
        categories: ["Web"],
    },
     {
        title: "Code Buddy",
        description:
        "A Supermaven/Copilot-style inline autocomplete extension for VS Code that runs entirely on a model you control — no subscription, no telemetry, no vendor lock-in. Point it at a local Ollama server or any OpenAI-compatible / Mistral FIM endpoint. Watches your cursor, sends fill-in-the-middle context to the model, and renders the suggestion as inline ghost text.",
        tech: ["TypeScript", "VS Code Extension API", "Ollama", "FIM"],
        image: null,
        iconImage: codeBuddy,
        githubLink: "https://github.com/amitsaini144/code-buddy",
        categories: ["AI"],
    },
    {
        title: "A17",
        description:
        "A premium tech and lifestyle ecommerce store — product catalog organized by category, a featured products section, a tech-focused blog, and newsletter signup, built as a fast, prerendered Next.js storefront.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: a17,
        githubLink: "https://github.com/amitsaini144/a17",
        liveLink: "https://a17.amit144.com/",
        categories: ["Web"],
    },
    {
        title: "DePIN x402",
        description:
        "HTTP 402 micropayments on Solana with staked operators that get slashed if idle. Any HTTP API can charge per-call USDC, settled on-chain in one transaction — no accounts, no API keys, no subscriptions. Operators stake USDC to run resources, earn fees on every request they settle, and lose 10% of their vault if they sit idle for a full epoch.",
        tech: ["Solana", "Anchor", "Next.js", "Express", "TypeScript", "x402"],
        image: depinX402,
        githubLink: "https://github.com/amitsaini144/depin-x402",
        liveLink: "https://x402.amit144.com/",
        categories: ["Blockchain", "Web"],
    },
    {
        title: "Solagram",
        description:
        "A Solana-based social app with an Anchor/Rust on-chain program managing user profiles, posts, comments, reactions and follows, paired with a Next.js frontend. Users create on-chain profiles, post media and content, react and comment, and follow/unfollow — all stored directly on-chain.",
        tech: ["Solana", "Anchor", "Rust", "Next.js"],
        image: solagram,
        githubLink: "https://github.com/amitsaini144/solagram",
        liveLink: "https://solagram.amit144.com/",
        categories: ["Blockchain", "Web"],
    },
]

export default ProjectData;
