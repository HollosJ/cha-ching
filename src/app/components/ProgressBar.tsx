import React from 'react';

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="absolute top-0 left-0 w-full h-2 bg-slate-200 transition">
      <div
        className="bg-emerald-500 h-full"
        style={{
          width: `${progress}%`,
          transition: 'all 250ms ease',
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
