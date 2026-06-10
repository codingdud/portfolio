interface SkillBarProps {
  skill: string;
  level: number;
}

function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1.5">
        <span className="text-ink text-sm font-medium">{skill}</span>
        <span className="text-ink-muted text-sm">{level}%</span>
      </div>
      <div className="w-full bg-surface-2 rounded-full h-2">
        <div
          className="bg-ink/85 h-2 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
