export const ID_SIMBOLO_CENA = "cena-festa";

export const HERO_STAGE_ATTR = {
  RAIZ: "data-hero-stage",
  TEMAS_JSON: "data-temas",
  CHIP: "data-chip",
  OBTURADOR: "data-obturador",
  FLASH: "data-flash",
  MURAL: "data-mural",
  MOLDE_TILE: "data-tile-molde",
  CONTADOR: "data-contador",
  ANUNCIO: "data-anuncio",
  DECOR: "data-decor",
  FRAME_TITULO: "data-frame-titulo",
  FRAME_LEGENDA: "data-frame-legenda",
} as const;

export const HERO_STAGE_LIMITES = {
  MAX_TILES_MURAL: 4,
  FOTOS_INICIAIS: 12,
  ATRASO_DEMO_AUTOMATICA_MS: 1600,
  DURACAO_FLASH_MS: 120,
} as const;
