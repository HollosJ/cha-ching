import React from "react";

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="absolute top-0 left-0 h-2 w-full bg-slate-100 transition">
      <div
        className="bg-primary h-full"
        style={{
          width: `${progress}%`,
          transition: "all 500ms ease",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
