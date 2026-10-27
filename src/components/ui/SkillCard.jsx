export default function SkillCard({ name, icon }) {
  return (
    <div
      className="focus-lift group flex min-h-36 items-center justify-center p-2 text-center"
      title={name}
    >
      <div className="liquid-glass">
        <img src={icon} alt={`${name} logo`} className="liquid-glass__icon" />
      </div>
    </div>
  );
}
