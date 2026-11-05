export enum ComparativoValor {
  SIM = "SIM",
  PARCIAL = "PARCIAL",
  NAO = "NAO",
}

export interface ComparativoCelula {
  valor: ComparativoValor;
  texto: string;
}

export interface ComparativoLinha {
  criterio: string;
  grupoWhatsapp: ComparativoCelula;
  fotografo: ComparativoCelula;
  album: ComparativoCelula;
}

export const COMPARATIVO_LINHAS: readonly ComparativoLinha[] = [
  {
    criterio: "Todos os convidados participam",
    grupoWhatsapp: { valor: ComparativoValor.PARCIAL, texto: "Só quem está no grupo" },
    fotografo: { valor: ComparativoValor.NAO, texto: "Só o fotógrafo clica" },
    album: { valor: ComparativoValor.SIM, texto: "Qualquer um, pelo QR Code" },
  },
  {
    criterio: "Foto já sai com a moldura da festa",
    grupoWhatsapp: { valor: ComparativoValor.NAO, texto: "Não" },
    fotografo: { valor: ComparativoValor.NAO, texto: "Não" },
    album: { valor: ComparativoValor.SIM, texto: "Moldura no tema, na hora" },
  },
  {
    criterio: "Aparece no telão enquanto a festa acontece",
    grupoWhatsapp: { valor: ComparativoValor.NAO, texto: "Não" },
    fotografo: { valor: ComparativoValor.NAO, texto: "Só depois da festa" },
    album: { valor: ComparativoValor.SIM, texto: "Sim, no pacote Completo" },
  },
  {
    criterio: "Qualidade da foto",
    grupoWhatsapp: { valor: ComparativoValor.PARCIAL, texto: "O WhatsApp comprime" },
    fotografo: { valor: ComparativoValor.SIM, texto: "Profissional" },
    album: { valor: ComparativoValor.SIM, texto: "Boa, feita para o celular" },
  },
  {
    criterio: "Você baixa tudo de uma vez",
    grupoWhatsapp: { valor: ComparativoValor.NAO, texto: "Foto por foto" },
    fotografo: { valor: ComparativoValor.PARCIAL, texto: "Depende da entrega" },
    album: { valor: ComparativoValor.SIM, texto: "Botão “Baixar tudo”" },
  },
  {
    criterio: "Você decide o que fica à vista",
    grupoWhatsapp: { valor: ComparativoValor.NAO, texto: "Não" },
    fotografo: { valor: ComparativoValor.SIM, texto: "Sim" },
    album: { valor: ComparativoValor.SIM, texto: "Esconde com um toque" },
  },
];

export interface Passo {
  titulo: string;
  descricao: string;
}

export const PASSOS: readonly Passo[] = [
  {
    titulo: "Você escolhe o pacote e o tema",
    descricao:
      "Chama a gente no WhatsApp e conta a data e o tema da festa. Para começar, você paga 50% por Pix.",
  },
  {
    titulo: "A gente cria as molduras e o QR Code",
    descricao:
      "Você vê a arte pronta antes de pagar o resto. Aprovou, recebe o QR Code para imprimir e o link do seu painel.",
  },
  {
    titulo: "Na festa, os convidados escaneiam e fotografam",
    descricao:
      "As fotos entram no mural na hora, e no telão se você escolheu o pacote Completo. Depois da festa, é só tocar em “Baixar tudo” e as fotos vão para o seu celular ou computador.",
  },
];

export const LUGARES_DO_QR: readonly string[] = [
  "Na mesa do bolo",
  "Em cada mesa dos convidados",
  "Na entrada do salão",
  "Na lembrancinha",
];

export interface Pergunta {
  pergunta: string;
  resposta: string;
}

export const PERGUNTAS: readonly Pergunta[] = [
  {
    pergunta: "Os convidados precisam instalar app ou fazer cadastro?",
    resposta:
      "Não. Basta abrir a câmera do celular e apontar para o QR Code. A câmera com as molduras abre direto no celular, no iPhone e no Android, sem baixar nada.",
  },
  {
    pergunta: "E quem quer tirar uma foto normal, sem moldura?",
    resposta:
      "A primeira opção da câmera é sempre “Sem moldura”. O convidado também pode trocar a moldura na tela de revisão, antes de enviar.",
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta:
      "Você paga 50% por Pix para a gente começar a produção. Mandamos as molduras para você aprovar, e só depois você paga os outros 50%.",
  },
  {
    pergunta: "Posso apagar fotos que não quero no álbum?",
    resposta:
      "Pode. Você recebe um link secreto do painel dos pais, sem senha. Lá você esconde qualquer foto, limpa as fotos de teste antes da festa e fecha os envios quando quiser.",
  },
  {
    pergunta: "O álbum é aberto para todo mundo ou só para mim?",
    resposta:
      "Você escolhe. No modo aberto, quem escaneia o QR Code vê as fotos dos outros convidados. No modo privado, cada convidado envia a própria foto e só você vê o álbum completo.",
  },
  {
    pergunta: "Como funciona o telão?",
    resposta:
      "No pacote Completo você recebe um link do telão. Abra o link na TV ou no notebook ligado ao projetor, e as fotos dos convidados entram sozinhas, em tela cheia.",
  },
  {
    pergunta: "Por quanto tempo o álbum fica no ar?",
    resposta:
      "Os dois pacotes incluem 90 dias de galeria no ar. Nesse período você pode baixar todas as fotos de uma vez, quando quiser. Dá para estender por mais um ano como adicional.",
  },
  {
    pergunta: "Também recebe vídeo?",
    resposta: "Por enquanto, só fotos.",
  },
];

export interface Recurso {
  titulo: string;
  descricao: string;
}

export const RECURSO_TELAO: Recurso = {
  titulo: "Telão ao vivo",
  descricao:
    "Abra o link na TV ou no projetor do salão. As fotos entram sozinhas e passam em tela cheia, uma depois da outra.",
};

export const RECURSO_PAINEL: Recurso = {
  titulo: "Painel dos pais",
  descricao:
    "Esconda qualquer foto, apague os testes antes da festa e feche os envios no fim. Sem senha: é só um link secreto.",
};

export const RECURSO_SEM_MOLDURA: Recurso = {
  titulo: "Sem moldura, se preferir",
  descricao:
    "Quem quer a foto limpa escolhe “Sem moldura”. Dá para trocar na hora de revisar.",
};

export const RECURSO_SALVAR: Recurso = {
  titulo: "Salvar e compartilhar",
  descricao:
    "Cada convidado leva a própria foto: salva no celular ou manda para o WhatsApp, na hora.",
};

export const RECURSO_SEM_LIMITE: Recurso = {
  titulo: "Convidados e fotos sem limite",
  descricao:
    "Pode chamar todo mundo: o pacote não limita quantas pessoas escaneiam nem quantas fotos entram.",
};

export const ROTULOS_BOTAO = {
  QUERO_PARA_MINHA_FESTA: "Quero para minha festa",
  VER_DEMONSTRACAO: "Ver a demonstração",
  VER_TELAO: "Ver o telão",
  FALAR_PARCERIA: "Falar sobre parceria",
} as const;
