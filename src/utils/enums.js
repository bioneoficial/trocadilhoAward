const TABS = [
  {
    id: "LISTA DE TROCADILHOS",
    name: "Lista de Trocadilhos",
    redirectTo: "/",
    selected: false,
  },
  {
    id: "ADICIONAR TROCADILHO",
    name: "Adicionar novo Trocadilho",
    redirectTo: "/adicionar-trocadilho",
    selected: false,
  },
  {
    id: "RANKINGS",
    name: "Melhores Trocadilhos",
    redirectTo: "/ranking",
    selected: false,
  },
];
const PUNS = [
  {
    id: "0",
    date: "13/02/2023",
    votes: 1,
    dev: "julia.albq",
    context: "Lorem ipsum dolor,sit alit. Fugiat animi quaecto possimustis?",
    message: "Lorem ipsus",
  },
  {
    id: "1",
    date: "14/02/2023",
    votes: 2,
    dev: "joao.holanda",
    context: "Lorem ipsum dolor,sit alit.",
    message: "Lorem ipsus",
  },
  {
    id: "2",
    date: "12/02/2023",
    votes: 3,
    dev: "lucas.oliveira",
    context:
      "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possim",
    message: "Lorem ipsus",
  },
  {
    id: "3",
    date: "11/02/2023",
    votes: 4,
    dev: "daniel.brasil",
    context: "Lorem ipsum dolor,sit alit. Fugiat ani",
    message: "Lorem ipsus",
  },
];

const ERRORMESSAGE = "Este campo é obrigatório";

const BESTPUNTABLEHEAD = [
  "colocação",
  "votos",
  "dev",
  "contexto",
  "trocadilho",
];

export { TABS, PUNS, ERRORMESSAGE, BESTPUNTABLEHEAD };
