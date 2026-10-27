export interface NavChild {
  label: string
  href: string
  description?: string
}

export interface NavSection {
  label: string
  href: string
  children: NavChild[]
}

export const NAV_SECTIONS: NavSection[] = [
  {
    label: "Dr. Vázquez",
    href: "/dr-hernan-vazquez-gonzalez",
    children: [
      {
        label: "Conoce al doctor",
        href: "/dr-hernan-vazquez-gonzalez",
        description: "Formación, cédulas y experiencia",
      },
    ],
  },
  {
    label: "Consultorios",
    href: "/consultorios",
    children: [
      {
        label: "Christus Muguerza Sur",
        href: "/consultorios/christus-muguerza-sur",
        description: "Zona sur de Monterrey — Piso 6, Cons. 616",
      },
      {
        label: "CARE Medical Hub",
        href: "/consultorios/care-medical-hub",
        description: "Balcones de Galerías — Piso 12, Cons. 14",
      },
    ],
  },
  {
    label: "Enfermedades",
    href: "/enfermedades",
    children: [
      { label: "Artritis reumatoide", href: "/enfermedades/artritis-reumatoide" },
      { label: "Lupus", href: "/enfermedades/lupus" },
      { label: "Fibromialgia", href: "/enfermedades/fibromialgia" },
      { label: "Gota", href: "/enfermedades/gota" },
      { label: "Osteoporosis", href: "/enfermedades/osteoporosis" },
      { label: "Espondilitis anquilosante", href: "/enfermedades/espondilitis-anquilosante" },
      { label: "Artrosis", href: "/enfermedades/artrosis" },
    ],
  },
]
