export type NavItem = { label: string; to?: "/" | "/historias" };

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", to: "/" },
  { label: "Historias", to: "/historias" },
  { label: "Eventos" },
  { label: "Donar" },
  { label: "Voluntariado" },
  { label: "Contacto" },
];
