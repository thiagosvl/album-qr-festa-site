export type FestaPacoteTipoEnum = "BASICO" | "COMPLETO";
export type FestaCategoriaTemaEnum =
  | "INFANTIL"
  | "QUINZE_ANOS"
  | "CASAMENTO"
  | "ADULTO"
  | "CORPORATIVO";
export type FestaEfeitoExtraEnum =
  | "MOLDURA_ADICIONAL"
  | "DIAS_GALERIA_ADICIONAIS"
  | "LIBERAR_VIDEO"
  | "LIBERAR_TELAO"
  | "ENTREGAVEL_MANUAL";

export interface CatalogoPacoteB2c {
  id: string;
  tipo_pacote: FestaPacoteTipoEnum;
  nome_exibicao: string;
  descricao: string | null;
  preco_centavos: number;
  preco_ancora_centavos: number | null;
  limite_molduras: number;
  inclui_qr_tematico: boolean;
  inclui_telao: boolean;
  dias_galeria_ativa: number;
  permite_video: boolean;
  ordem: number;
}

export interface CatalogoExtraB2c {
  id: string;
  slug: string;
  nome: string;
  descricao: string | null;
  preco_centavos: number;
  efeito_tipo: FestaEfeitoExtraEnum;
  efeito_valor: number;
  ordem: number;
}

export interface CatalogoTema {
  id: string;
  nome: string;
  slug: string;
  categoria: FestaCategoriaTemaEnum;
  cor_primaria_padrao: string;
  cor_secundaria_padrao: string;
  thumb_url: string | null;
  moldura_preview_url: string | null;
  ordem: number;
}

export interface CatalogoPlanoB2b {
  id: string;
  slug: string;
  nome: string;
  descricao: string | null;
  preco_mensal_centavos: number;
  creditos_mensais: number;
  custo_creditos_basico: number;
  custo_creditos_completo: number;
  preco_credito_avulso_centavos: number;
  ordem: number;
}

export interface CatalogoPublicoDto {
  pacotes_b2c: CatalogoPacoteB2c[];
  extras_b2c: CatalogoExtraB2c[];
  temas: CatalogoTema[];
  planos_b2b: CatalogoPlanoB2b[];
}

export const FESTA_PACOTE_TIPO = {
  BASICO: "BASICO",
  COMPLETO: "COMPLETO",
} as const satisfies Record<FestaPacoteTipoEnum, FestaPacoteTipoEnum>;
