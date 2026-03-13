// Shared mini chart SVG components (lightweight, no deps)

export function SparkLine({ color = "#6366f1", points = "0,60 20,45 40,50 60,30 80,35 100,15 120,20 140,10" }) {
  return (
    <svg viewBox="0 0 140 70" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points={`0,70 ${points} 140,70`}
        fill={`url(#grad-${color.replace("#", "")})`}
      />
    </svg>
  );
}

export function DonutChart({
  value,
  color = "#6366f1",
  size = 80,
}: {
  value: number;
  color?: string;
  size?: number;
}) {
  const r = 34;
  const circ = 2 * Math.PI * r;
  const filled = ((value) / 100) * circ;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx="40" cy="40" r={r} fill="none" stroke="#e2e8f0" strokeWidth="8" />
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={`${filled} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 40 40)"
      />
      <text x="40" y="45" textAnchor="middle" fontSize="14" fontWeight="700" fill={color}>
        {value}%
      </text>
    </svg>
  );
}

export function BarChart({
  data,
  color = "#6366f1",
}: {
  data: { label: string; value: number }[];
  color?: string;
}) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex items-end gap-2 h-32">
      {data.map((d, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <div
            className="w-full rounded-t-lg transition-all"
            style={{
              height: `${(d.value / max) * 100}%`,
              backgroundColor: color,
              opacity: 0.7 + (i / data.length) * 0.3,
            }}
          />
          <span className="text-[10px] text-slate-500 whitespace-nowrap">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

export function HorizontalBar({ value, color = "#6366f1", label }: { value: number; color?: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-slate-500 w-24 truncate">{label}</span>
      <div className="flex-1 progress-bar">
        <div className="progress-fill" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
      <span className="text-xs font-semibold text-slate-700 w-8 text-right">{value}%</span>
    </div>
  );
}
