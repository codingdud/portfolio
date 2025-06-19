interface SkillBarProps {
  skill: string;
  level: number;
}

function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;