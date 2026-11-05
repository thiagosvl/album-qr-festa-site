import type { FestaCategoriaTemaEnum } from "@/types/catalogo.types";

export enum DecorTipo {
  BALOES = "BALOES",
  ESTRELAS = "ESTRELAS",
  FLORES = "FLORES",
  CORACOES = "CORACOES",
}

export enum DemoTemaId {
  JARDIM = "JARDIM",
  ESPACIAL = "ESPACIAL",
  SAFARI = "SAFARI",
  QUINZE_ANOS = "QUINZE_ANOS",
}

export interface FrameTheme {
  id: DemoTemaId;
  nome: string;
  titulo: string;
  legenda: string;
  corA: string;
  corB: string;
  decor: DecorTipo;
}

export const DEMO_TEMAS: readonly FrameTheme[] = [
  {
    id: DemoTemaId.JARDIM,
    nome: "Jardim",
    titulo: "Helena",
    legenda: "5 aninhos",
    corA: "#e6007e",
    corB: "#7c3aed",
    decor: DecorTipo.FLORES,
  },
  {
    id: DemoTemaId.ESPACIAL,
    nome: "Espacial",
    titulo: "Théo",
    legenda: "6 anos",
    corA: "#2563eb",
    corB: "#0891b2",
    decor: DecorTipo.ESTRELAS,
  },
  {
    id: DemoTemaId.SAFARI,
    nome: "Safári",
    titulo: "Alice",
    legenda: "1 aninho",
    corA: "#d97706",
    corB: "#16a34a",
    decor: DecorTipo.BALOES,
  },
  {
    id: DemoTemaId.QUINZE_ANOS,
    nome: "15 anos",
    titulo: "Marina",
    legenda: "15 anos",
    corA: "#be185d",
    corB: "#7c3aed",
    decor: DecorTipo.CORACOES,
  },
];

export const DECOR_POR_CATEGORIA: Record<FestaCategoriaTemaEnum, DecorTipo> = {
  INFANTIL: DecorTipo.BALOES,
  QUINZE_ANOS: DecorTipo.CORACOES,
  CASAMENTO: DecorTipo.FLORES,
  ADULTO: DecorTipo.ESTRELAS,
  CORPORATIVO: DecorTipo.ESTRELAS,
};

export const ROTULO_CATEGORIA: Record<FestaCategoriaTemaEnum, string> = {
  INFANTIL: "Festa infantil",
  QUINZE_ANOS: "15 anos",
  CASAMENTO: "Casamento",
  ADULTO: "Aniversário adulto",
  CORPORATIVO: "Evento corporativo",
};

export const TITULO_MOLDURA_PADRAO = "Sua festa";
export const LEGENDA_MOLDURA_PADRAO = "ao vivo";
