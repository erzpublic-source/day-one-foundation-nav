export type NavItem = { label: string; to?: "/" | "/historias" | "/eventos" };

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", to: "/" },
  { label: "Historias", to: "/historias" },
  { label: "Eventos", to: "/eventos" },
  { label: "Donar" },
  { label: "Voluntariado" },
  { label: "Contacto" },
];
