export default function SkillBadge({ name }: { name: string }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-foreground">
      {name}
    </span>
  );
}
