import {
  HERO_STAGE_ATTR,
  HERO_STAGE_LIMITES,
} from "@/constants/hero-stage.constants";
import type { FrameTheme } from "@/constants/frames";

function buscar<T extends Element>(raiz: ParentNode, seletor: string): T | null {
  return raiz.querySelector<T>(seletor);
}

function atributo(nome: string): string {
  return `[${nome}]`;
}

function lerTemas(raiz: HTMLElement): FrameTheme[] {
  const bruto = raiz.getAttribute(HERO_STAGE_ATTR.TEMAS_JSON);
  if (!bruto) {
    return [];
  }
  return JSON.parse(bruto) as FrameTheme[];
}

function iniciarPalco(raiz: HTMLElement): void {
  const temas = lerTemas(raiz);
  const obturador = buscar<HTMLButtonElement>(raiz, atributo(HERO_STAGE_ATTR.OBTURADOR));
  const flash = buscar<HTMLElement>(raiz, atributo(HERO_STAGE_ATTR.FLASH));
  const mural = buscar<HTMLElement>(raiz, atributo(HERO_STAGE_ATTR.MURAL));
  const molde = buscar<HTMLTemplateElement>(raiz, atributo(HERO_STAGE_ATTR.MOLDE_TILE));
  const contador = buscar<HTMLElement>(raiz, atributo(HERO_STAGE_ATTR.CONTADOR));
  const anuncio = buscar<HTMLElement>(raiz, atributo(HERO_STAGE_ATTR.ANUNCIO));
  const chips = Array.from(
    raiz.querySelectorAll<HTMLButtonElement>(atributo(HERO_STAGE_ATTR.CHIP)),
  );

  if (!obturador || !flash || !mural || !molde || !contador || temas.length === 0) {
    return;
  }

  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let indiceAtual = 0;
  let totalFotos = HERO_STAGE_LIMITES.FOTOS_INICIAIS;
  let usuarioInteragiu = false;

  function aplicarTema(indice: number): void {
    const tema = temas[indice];
    if (!tema) {
      return;
    }
    indiceAtual = indice;
    const quadro = raiz.querySelector<SVGElement>("[data-frame-art]");
    if (quadro) {
      const viewfinder = quadro.parentElement;
      viewfinder?.style.setProperty("--fa", tema.corA);
      viewfinder?.style.setProperty("--fb", tema.corB);
      const titulo = quadro.querySelector(atributo(HERO_STAGE_ATTR.FRAME_TITULO));
      const legenda = quadro.querySelector(atributo(HERO_STAGE_ATTR.FRAME_LEGENDA));
      if (titulo) {
        titulo.textContent = tema.titulo;
      }
      if (legenda) {
        legenda.textContent = tema.legenda;
      }
      quadro.querySelectorAll<SVGGElement>(atributo(HERO_STAGE_ATTR.DECOR)).forEach((grupo) => {
        grupo.toggleAttribute(
          "hidden",
          grupo.getAttribute(HERO_STAGE_ATTR.DECOR) !== tema.decor,
        );
      });
    }
    chips.forEach((chip, posicao) => {
      chip.setAttribute("aria-pressed", String(posicao === indice));
    });
  }

  function adicionarFotoNoMural(): void {
    const tema = temas[indiceAtual];
    if (!tema || !mural || !molde || !contador) {
      return;
    }
    const fragmento = molde.content.cloneNode(true) as DocumentFragment;
    const tile = fragmento.firstElementChild as HTMLElement | null;
    if (!tile) {
      return;
    }
    tile.style.setProperty("--fa", tema.corA);
    tile.style.setProperty("--fb", tema.corB);
    if (!reduzMovimento) {
      tile.classList.add("animate-pop");
    }
    mural.prepend(tile);
    while (mural.children.length > HERO_STAGE_LIMITES.MAX_TILES_MURAL) {
      mural.lastElementChild?.remove();
    }
    totalFotos += 1;
    contador.textContent = String(totalFotos);
    if (anuncio) {
      anuncio.textContent = `Foto nova no telão. Agora são ${totalFotos} fotos.`;
    }
  }

  function tirarFoto(): void {
    if (!flash) {
      return;
    }
    if (!reduzMovimento) {
      flash.classList.remove("animate-flash");
      void flash.offsetWidth;
      flash.classList.add("animate-flash");
    }
    window.setTimeout(adicionarFotoNoMural, reduzMovimento ? 0 : HERO_STAGE_LIMITES.DURACAO_FLASH_MS);
  }

  chips.forEach((chip, posicao) => {
    chip.addEventListener("click", () => {
      usuarioInteragiu = true;
      aplicarTema(posicao);
    });
  });

  obturador.addEventListener("click", () => {
    usuarioInteragiu = true;
    tirarFoto();
  });

  if (!reduzMovimento && "IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
      (entradas) => {
        if (!entradas.some((entrada) => entrada.isIntersecting)) {
          return;
        }
        observador.disconnect();
        window.setTimeout(() => {
          if (!usuarioInteragiu) {
            tirarFoto();
          }
        }, HERO_STAGE_LIMITES.ATRASO_DEMO_AUTOMATICA_MS);
      },
      { threshold: 0.5 },
    );
    observador.observe(raiz);
  }

  aplicarTema(0);
}

document
  .querySelectorAll<HTMLElement>(atributo(HERO_STAGE_ATTR.RAIZ))
  .forEach(iniciarPalco);
