interface TechPillProps {
  tech: string;
}

export default function TechPill({ tech }: TechPillProps) {
  return (
    <span className="text-xs px-2.5 py-1 border border-border rounded text-muted bg-surface/50 leading-none">
      {tech}
    </span>
  );
}
