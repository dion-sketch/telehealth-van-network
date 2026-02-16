"use client";

interface HoneypotFieldProps {
  id?: string;
}

export default function HoneypotField({ id = "_hp_website" }: HoneypotFieldProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "-9999px",
        width: 0,
        height: 0,
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
      }}
    >
      <label htmlFor={id}>Website</label>
      <input
        type="text"
        id={id}
        name="_hp_website"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
