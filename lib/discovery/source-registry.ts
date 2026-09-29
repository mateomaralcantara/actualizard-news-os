import type { DiscoverySource } from "./types";

/**
 * ACTUALIZARD SOURCE REGISTRY
 *
 * trustScore es una PRIORIDAD EDITORIAL INTERNA.
 * No constituye una afirmación absoluta sobre la fuente.
 *
 * El motor comprueba robots.txt antes de rastrear.
 */

export const discoverySources: DiscoverySource[] = [

  {
    id: "presidencia-rd",
    name: "Presidencia de la República Dominicana",
    domain: "presidencia.gob.do",
    url: "https://presidencia.gob.do/noticias",

    kind: "html",

    country: "DO",
    language: "es",
    category: "Nacional",

    official: true,

    trustScore: 98,

    enabled: true,

    maxItems: 5,

    delayMs: 450
  },

  {
    id: "banco-central-rd",
    name: "Banco Central de la República Dominicana",
    domain: "bancentral.gov.do",
    url: "https://www.bancentral.gov.do/",

    kind: "html",

    country: "DO",
    language: "es",
    category: "Economía",

    official: true,

    trustScore: 98,

    enabled: true,

    maxItems: 4,

    delayMs: 450
  },

  {
    id: "aduanas-rd",
    name: "Dirección General de Aduanas",
    domain: "aduanas.gob.do",
    url: "https://www.aduanas.gob.do/noticias/",

    kind: "html",

    country: "DO",
    language: "es",
    category: "Economía",

    official: true,

    trustScore: 97,

    enabled: true,

    maxItems: 4,

    delayMs: 450
  },

  {
    id: "noticias-sin",
    name: "Noticias SIN",
    domain: "noticiassin.com",
    url: "https://noticiassin.com/seccion/ultima-hora/",

    kind: "html",

    country: "DO",
    language: "es",
    category: "Actualidad",

    official: false,

    trustScore: 86,

    enabled: true,

    maxItems: 4,

    delayMs: 550
  },

  {
    id: "listin-diario",
    name: "Listín Diario",
    domain: "listindiario.com",
    url: "https://listindiario.com/",

    kind: "html",

    country: "DO",
    language: "es",
    category: "Actualidad",

    official: false,

    trustScore: 86,

    enabled: true,

    maxItems: 4,

    delayMs: 550
  },

  {
    id: "diario-libre",
    name: "Diario Libre",
    domain: "diariolibre.com",
    url: "https://www.diariolibre.com/",

    kind: "html",

    country: "DO",
    language: "es",
    category: "Actualidad",

    official: false,

    trustScore: 86,

    enabled: true,

    maxItems: 4,

    delayMs: 550
  }

];

export function getDiscoverySource(id: string) {

  return discoverySources.find(
    source => source.id === id
  );
}

export function getEnabledDiscoverySources() {

  return discoverySources.filter(
    source => source.enabled
  );
}
