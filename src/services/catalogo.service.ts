import { CATALOGO_FALLBACK, SITE_CONFIG } from "@/constants/site.config";
import type { CatalogoPublicoDto } from "@/types/catalogo.types";

export async function obterCatalogoSite(): Promise<CatalogoPublicoDto> {
  try {
    const response = await fetch(`${SITE_CONFIG.API_URL}/api/public/catalogo`, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      return CATALOGO_FALLBACK;
    }
    const data = (await response.json()) as CatalogoPublicoDto;
    if (!data?.pacotes_b2c || data.pacotes_b2c.length === 0) {
      return CATALOGO_FALLBACK;
    }
    return data;
  } catch {
    return CATALOGO_FALLBACK;
  }
}
