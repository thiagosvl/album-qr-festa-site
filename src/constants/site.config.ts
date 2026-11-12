import type { CatalogoPublicoDto } from "@/types/catalogo.types";

export const NOME_MARCA = "Festalgia" as const;

export const SITE_CONFIG = {
  SITE_URL: import.meta.env.PUBLIC_SITE_URL || "https://festalgia.com.br",
  API_URL: import.meta.env.PUBLIC_API_URL || "http://localhost:3005",
  APP_URL: import.meta.env.PUBLIC_APP_URL || "http://localhost:5173",
  WHATSAPP_COMERCIAL:
    import.meta.env.PUBLIC_WHATSAPP_COMERCIAL || "5511962508068",
} as const;

export const SITE_LINKS = {
  DEMO_CONVIDADO: `${SITE_CONFIG.APP_URL}/e/demo`,
  DEMO_TELAO: `${SITE_CONFIG.APP_URL}/telao/demo`,
  ADMIN_LOGIN: `${SITE_CONFIG.APP_URL}/admin/login`,
  PARCEIRO_PORTAL: `${SITE_CONFIG.APP_URL}/parceiro`,
  PARCEIRO_LOGIN: `${SITE_CONFIG.APP_URL}/parceiro/login`,
} as const;

export const SECTION_IDS = {
  COMPARATIVO: "por-que-nao-o-grupo",
  COMO_FUNCIONA: "como-funciona",
  RECURSOS: "recursos",
  TEMAS: "temas",
  PRECOS: "precos",
  PARCEIROS: "parceiros",
  DUVIDAS: "duvidas",
} as const;

export const WHATSAPP_MENSAGENS = {
  GERAL:
    `Olá! Vi o site da ${NOME_MARCA} e quero criar o álbum para a minha festa.`,
  PARCERIA:
    `Olá! Sou de buffet, fotografia ou decoração e quero saber como oferecer a ${NOME_MARCA} aos meus clientes.`,
  TEMA_SOB_MEDIDA:
    `Olá! Quero um tema sob medida para a minha festa na ${NOME_MARCA}.`,
} as const;

export function gerarLinkWhatsapp(mensagem: string): string {
  return `https://wa.me/${SITE_CONFIG.WHATSAPP_COMERCIAL}?text=${encodeURIComponent(
    mensagem
  )}`;
}

export function formatarMoedaCentavos(centavos: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: centavos % 100 === 0 ? 0 : 2,
  }).format(centavos / 100);
}

export const CATALOGO_FALLBACK: CatalogoPublicoDto = {
  pacotes_b2c: [
    {
      id: "fallback-basico",
      tipo_pacote: "BASICO",
      nome_exibicao: "Pacote Básico",
      descricao:
        "Álbum digital ao vivo por QR Code com 1 moldura exclusiva no tema da festa e galeria aberta por 90 dias.",
      preco_centavos: 4900,
      preco_ancora_centavos: 7900,
      limite_molduras: 1,
      inclui_qr_tematico: false,
      inclui_telao: false,
      dias_galeria_ativa: 90,
      permite_video: false,
      ordem: 1,
    },
    {
      id: "fallback-completo",
      tipo_pacote: "COMPLETO",
      nome_exibicao: "Pacote Completo",
      descricao:
        "Experiência completa com até 4 molduras exclusivas, arte do QR Code de mesa no tema da festa e telão ao vivo.",
      preco_centavos: 8900,
      preco_ancora_centavos: 13900,
      limite_molduras: 4,
      inclui_qr_tematico: true,
      inclui_telao: true,
      dias_galeria_ativa: 90,
      permite_video: false,
      ordem: 2,
    },
  ],
  extras_b2c: [
    {
      id: "extra-moldura",
      slug: "moldura-extra",
      nome: "Moldura Personalizada Extra",
      descricao: "Adicione +1 opção de moldura exclusiva no tema da sua festa.",
      preco_centavos: 1500,
      efeito_tipo: "MOLDURA_ADICIONAL",
      efeito_valor: 1,
      ordem: 1,
    },
    {
      id: "extra-convite",
      slug: "convite-digital",
      nome: "Arte de Convite Digital no Tema",
      descricao:
        "Arte vertical combinando com a identidade visual das molduras para enviar no WhatsApp.",
      preco_centavos: 2500,
      efeito_tipo: "ENTREGAVEL_MANUAL",
      efeito_valor: 1,
      ordem: 2,
    },
    {
      id: "extra-1-ano",
      slug: "galeria-1-ano",
      nome: "Galeria Ativa por +1 Ano",
      descricao: "Deixe a galeria no ar por mais 365 dias, com as fotos disponíveis para ver e baixar.",
      preco_centavos: 2900,
      efeito_tipo: "DIAS_GALERIA_ADICIONAIS",
      efeito_valor: 365,
      ordem: 3,
    },
    {
      id: "extra-telao",
      slug: "telao-avulso",
      nome: "Mural & Telão Ao Vivo",
      descricao: "Libere o telão ao vivo, com as fotos passando em tela cheia na TV ou no projetor.",
      preco_centavos: 2500,
      efeito_tipo: "LIBERAR_TELAO",
      efeito_valor: 1,
      ordem: 4,
    },
    {
      id: "extra-videos",
      slug: "videos-curtos",
      nome: "Envio de Vídeos Curtos (15s)",
      descricao: "Permita que os convidados enviem também vídeos curtos de até 15 segundos para o álbum e telão.",
      preco_centavos: 2900,
      efeito_tipo: "LIBERAR_VIDEO",
      efeito_valor: 15,
      ordem: 5,
    },
  ],
  temas: [
    {
      id: "tema-1",
      nome: "Jardim Encantado & Borboletas",
      slug: "jardim-encantado",
      categoria: "INFANTIL",
      cor_primaria_padrao: "#e6007e",
      cor_secundaria_padrao: "#7b3fe4",
      thumb_url: null,
      moldura_preview_url: null,
      ordem: 1,
    },
    {
      id: "tema-2",
      nome: "Aventura Espacial & Astronauta",
      slug: "aventura-espacial",
      categoria: "INFANTIL",
      cor_primaria_padrao: "#2563eb",
      cor_secundaria_padrao: "#4f46e5",
      thumb_url: null,
      moldura_preview_url: null,
      ordem: 2,
    },
    {
      id: "tema-3",
      nome: "Safari Baby Aquarela",
      slug: "safari-baby",
      categoria: "INFANTIL",
      cor_primaria_padrao: "#d97706",
      cor_secundaria_padrao: "#059669",
      thumb_url: null,
      moldura_preview_url: null,
      ordem: 3,
    },
    {
      id: "tema-4",
      nome: "Noite Estrelada 15 Anos",
      slug: "quinze-anos-estrelado",
      categoria: "QUINZE_ANOS",
      cor_primaria_padrao: "#db2777",
      cor_secundaria_padrao: "#7c3aed",
      thumb_url: null,
      moldura_preview_url: null,
      ordem: 4,
    },
    {
      id: "tema-5",
      nome: "Casamento Clássico Floral",
      slug: "casamento-classico",
      categoria: "CASAMENTO",
      cor_primaria_padrao: "#be185d",
      cor_secundaria_padrao: "#9333ea",
      thumb_url: null,
      moldura_preview_url: null,
      ordem: 5,
    },
  ],
  planos_b2b: [
    {
      id: "b2b-start",
      slug: "parceiro-start",
      nome: "Plano Parceiro Start",
      descricao:
        "Ideal para fotógrafos e decoradores: 6 créditos por mês (até 6 eventos Básicos ou 3 Completos).",
      preco_mensal_centavos: 14900,
      creditos_mensais: 6,
      custo_creditos_basico: 1,
      custo_creditos_completo: 2,
      preco_credito_avulso_centavos: 2500,
      ordem: 1,
    },
    {
      id: "b2b-pro",
      slug: "parceiro-pro",
      nome: "Plano Buffet & Salão Pro",
      descricao:
        "Ideal para buffets infantis e casas de festas: 20 créditos por mês (até 20 eventos Básicos ou 10 Completos).",
      preco_mensal_centavos: 34900,
      creditos_mensais: 20,
      custo_creditos_basico: 1,
      custo_creditos_completo: 2,
      preco_credito_avulso_centavos: 1900,
      ordem: 2,
    },
  ],
};
