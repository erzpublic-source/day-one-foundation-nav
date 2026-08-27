import logoAsset from "@/assets/logo-color.svg.asset.json";

export function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={`flex min-w-0 items-center ${className}`}>
      <img
        src={logoAsset.url}
        alt="Fundación Un Día Más"
        className={`w-auto shrink-0 transition-all duration-500 ${compact ? "h-7" : "h-9 md:h-10"}`}
      />
    </span>
  );
}
