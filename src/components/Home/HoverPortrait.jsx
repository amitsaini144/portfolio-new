import React, { useRef } from "react";
import toon from "../../assets/goku-toon.png";
import real from "../../assets/goku.jpeg";


const SPREAD_MS = 1100;
const DRAIN_MS = 850;
const LIQUID = "cubic-bezier(0.37, 0.01, 0.18, 1)";
const TOON_SCALE = 1.3;

const HoverPortrait = () => {
  const frameRef = useRef(null);
  const overlayRef = useRef(null);
  const photoRef = useRef(null);
  const rippleRef = useRef(null);
  const revealedRef = useRef(false);
  const touchRef = useRef(false);

  const reduceMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const measure = (e) => {
    const rect = frameRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
    const r = Math.max(
      Math.hypot(x, y),
      Math.hypot(rect.width - x, y),
      Math.hypot(x, rect.height - y),
      Math.hypot(rect.width - x, rect.height - y)
    );
    return { x, y, r };
  };

  const clipTo = (x, y, r, ms) => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = ms ? `clip-path ${ms}ms ${LIQUID}` : "none";
    el.style.clipPath = `circle(${r}px at ${x}px ${y}px)`;
  };

  const splash = (x, y) => {
    const el = rippleRef.current;
    if (!el) return;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.classList.remove("drop-ripple--run");
    void el.offsetWidth; // restart the keyframes
    el.classList.add("drop-ripple--run");
  };

  const open = (e) => {
    const { x, y, r } = measure(e);
    const ms = reduceMotion() ? 0 : SPREAD_MS;

    clipTo(x, y, 0, 0);
    void overlayRef.current.offsetWidth;
    clipTo(x, y, r, ms);

    if (photoRef.current) {
      photoRef.current.style.transition = ms ? `transform ${ms + 300}ms ${LIQUID}` : "none";
      photoRef.current.style.transform = `scale(${TOON_SCALE}) translateY(9%)`;
    }
    if (!reduceMotion()) splash(x, y);
    revealedRef.current = true;
  };

  const close = (e) => {
    const { x, y } = measure(e);
    clipTo(x, y, 0, reduceMotion() ? 0 : DRAIN_MS);
    if (photoRef.current) photoRef.current.style.transform = `scale(${TOON_SCALE * 1.05}) translateY(9%)`;
    revealedRef.current = false;
  };

  const handleEnter = (e) => {
    if (e.pointerType === "touch") return;
    open(e);
  };

  const handleLeave = (e) => {
    if (e.pointerType === "touch") return;
    close(e);
  };

  // Touch has no hover — tap toggles from wherever the finger landed.
  const handlePointerDown = (e) => {
    if (e.pointerType !== "touch") return;
    touchRef.current = true;
    revealedRef.current ? close(e) : open(e);
  };

  // Keyboard reveal opens from the middle, the only sensible origin.
  const fromCenter = (opening) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = rect.width / 2;
    const y = rect.height / 2;
    const r = Math.hypot(rect.width, rect.height) / 2;
    const ms = reduceMotion() ? 0 : opening ? SPREAD_MS : DRAIN_MS;
    if (opening) {
      clipTo(x, y, 0, 0);
      void overlayRef.current.offsetWidth;
      clipTo(x, y, r, ms);
      if (!reduceMotion()) splash(x, y);
    } else {
      clipTo(x, y, 0, ms);
    }
    revealedRef.current = opening;
  };

  return (
    <button
      type="button"
      ref={frameRef}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      onPointerDown={handlePointerDown}
      onFocus={() => !touchRef.current && fromCenter(true)}
      onBlur={() => fromCenter(false)}
      onClick={(e) => e.preventDefault()}
      aria-label="Reveal photo"
      className="group relative block w-64 md:w-80 aspect-[4/5] border border-seam bg-panel p-2 cursor-pointer"
    >
      {/* copper corner ticks — schematic frame */}
      <span aria-hidden="true" className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-copper" />
      <span aria-hidden="true" className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-copper" />
      <span aria-hidden="true" className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-copper" />
      <span aria-hidden="true" className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-copper" />

      <div className="relative w-full h-full overflow-hidden">
        <img
          src={real}
          alt="Cartoon portrait placeholder"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black"
          style={{ clipPath: "circle(0px at 50% 50%)", willChange: "clip-path" }}
        >
          <img
            ref={photoRef}
            src={toon}
            alt="Photo placeholder"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ transform: `scale(${TOON_SCALE * 1.05}) translateY(9%)`, willChange: "transform" }}
          />
        </div>
        <span ref={rippleRef} className="drop-ripple" aria-hidden="true" />
      </div>
    </button>
  );
};

export default HoverPortrait;
