interface TechPillProps {
  tech: string;
}

export default function TechPill({ tech }: TechPillProps) {
  return (
    <span className="text-xs px-2 py-0.5 border border-border rounded text-muted">
      {tech}
    </span>
  );
}
