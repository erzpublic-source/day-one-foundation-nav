export function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={`flex min-w-0 items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full"
        style={{ background: "var(--gradient-brand)" }}
      >
        <span className="absolute inset-[3px] rounded-full bg-card" />
        <span
          className="absolute inset-[7px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </span>
      <span
        className={`truncate font-bold tracking-tight text-foreground ${compact ? "text-base" : "text-lg md:text-xl"}`}
      >
        Fundación Un Día Más
      </span>
    </span>
  );
}
