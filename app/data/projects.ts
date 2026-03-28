export interface Project {
  id: number;
  year: string;
  title: string;
  description: string;
  competition: string;
  placement: string;
  category: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    year: "2015",
    title: "Vice-Campeonato Mundial – SAE Aerodesign East",
    description:
      "2º lugar geral na competição mundial realizada nos Estados Unidos.",
    competition: "SAE Aerodesign East",
    placement: "2º Lugar Geral",
    category: "Micro",
    highlights: [
      "1º lugar em maior peso carregado",
      "3º lugar em eficiência estrutural",
    ],
  },
  {
    id: 2,
    year: "2019",
    title: "Tetracampeonato Nacional",
    description: "Maior pontuação de projeto da competição nacional.",
    competition: "SAE Brasil Aerodesign",
    placement: "1º Lugar Nacional",
    category: "Micro",
    highlights: [
      "Maior carga transportada",
      "Maior acuracidade de missão",
      "Melhor relatório de integração",
    ],
  },
  {
    id: 3,
    year: "2021",
    title: "Pentacampeonato Nacional",
    description: "Conquista do quinto título nacional da equipe.",
    competition: "SAE Brasil Aerodesign",
    placement: "1º Lugar Nacional",
    category: "Micro",
    highlights: [
      "2ª maior nota de relatório de plantas",
      "Classificação para o mundial 2022",
    ],
  },
  {
    id: 4,
    year: "2024",
    title: "Vice-Campeã Nacional",
    description: "Retorno aos voos válidos pós-pandemia.",
    competition: "SAE Brasil Aerodesign",
    placement: "2º Lugar Nacional",
    category: "Micro",
    highlights: [
      "Melhor apresentação oral",
      "Melhor projeto da classe Micro",
      "Vice por apenas 2 pontos",
    ],
  },
];
