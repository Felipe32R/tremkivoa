export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  { id: 1, name: "João Silva", role: "Capitão" },
  { id: 2, name: "Maria Oliveira", role: "Subcapitã" },
  { id: 3, name: "Carlos Santos", role: "Engenharia Estrutural" },
  { id: 4, name: "Ana Souza", role: "Aerodinâmica" },
  { id: 5, name: "Lucas Ferreira", role: "Desempenho" },
  { id: 6, name: "Beatriz Lima", role: "Integração" },
  { id: 7, name: "Rafael Costa", role: "Manufatura" },
  { id: 8, name: "Juliana Rocha", role: "Relatórios Técnicos" },
  { id: 9, name: "Pedro Almeida", role: "Logística" },
];
