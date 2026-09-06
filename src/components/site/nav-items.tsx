export type NavItem = {
  label: string;
  to?: "/" | "/historias" | "/eventos" | "/donar" | "/voluntariado";
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", to: "/" },
  { label: "Historias", to: "/historias" },
  { label: "Eventos", to: "/eventos" },
  { label: "Donar", to: "/donar" },
  { label: "Voluntariado", to: "/voluntariado" },
  { label: "Contacto" },
];

