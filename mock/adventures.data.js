
/**
 * MOCK DATA: dev environment only.
 *
 * In production this data is authored in AEM Content Fragments
 * and delivered via Persisted GraphQL queries filtered by locale.
 * Content editors add/remove adventures through the CF editor UI
 * with no code changes or deploys required.
 *
 * Swap: replace getAdventuresByLocale() and getAdventureBySlug()
 * with fetch() calls to AEM GraphQL endpoint interfaces are identical.
 */


export const adventures = [
  {
    slug: 'bali-surf-camp',
    title: 'Bali Surf Camp',
    activity: 'Surfing',
    adventureType: 'Overnight Trip',
    price: 3500,
    tripLength: '10 Days',
    groupSize: 12,
    difficulty: 'Beginner',
    locale: 'en-US',
    // Bali Surf Camp
    primaryImage: { _path: 'https://picsum.photos/seed/bali/600/400' },
    description: { html: '<p>Surf the legendary breaks of Bali while staying in an eco-friendly beach camp. Mornings are for waves; afternoons are yours to explore the island.</p>' },
    itinerary: { html: '<p><strong>Days 1–2:</strong> Arrival, orientation, beginner water safety.<br/><strong>Days 3–7:</strong> Daily surf sessions at Kuta and Seminyak.<br/><strong>Days 8–9:</strong> Temple tour and cultural immersion.<br/><strong>Day 10:</strong> Departure.</p>' },
  },
  {
    slug: 'cycling-southern-utah',
    title: 'Cycling Southern Utah',
    activity: 'Cycling',
    adventureType: 'Day Trip',
    price: 750,
    tripLength: '3 Days',
    groupSize: 8,
    difficulty: 'Intermediate',
    locale: 'en-US',
    // Cycling Southern Utah
    primaryImage: { _path: 'https://picsum.photos/seed/cycling/600/400' },
    description: { html: '<p>Pedal through canyon country on some of the most dramatic roads in the American Southwest. Red rock, blue sky, no cars.</p>' },
    itinerary: { html: '<p><strong>Day 1:</strong> Zion rim road, 45 miles.<br/><strong>Day 2:</strong> Bryce Canyon descent, 38 miles.<br/><strong>Day 3:</strong> Capitol Reef loop, 52 miles.</p>' },
  },
  {
    slug: 'surf-camp-costa-rica',
    title: 'Campamento de Surf en Costa Rica',
    activity: 'Surf',
    adventureType: 'Escapada de fin de semana',
    price: 2800,
    tripLength: '7 Días',
    groupSize: 10,
    difficulty: 'Intermedio',
    locale: 'es-MX',
    // Surf Camp Costa Rica
    primaryImage: { _path: 'https://picsum.photos/seed/surfing/600/400' },
    description: { html: '<p>Descubre las mejores olas de Costa Rica en un campamento rodeado de selva tropical. Instructores certificados y grupos pequeños para una experiencia personalizada.</p>' },
    itinerary: { html: '<p><strong>Días 1–2:</strong> Llegada y sesiones introductorias.<br/><strong>Días 3–5:</strong> Surf avanzado en Tamarindo y Nosara.<br/><strong>Días 6–7:</strong> Canopy y regreso.</p>' },
  },
  {
    slug: 'aventura-amazonica',
    title: 'Aventura Amazônica',
    activity: 'Caminhada',
    adventureType: 'Viagem de vários dias',
    price: 4200,
    tripLength: '12 Dias',
    groupSize: 6,
    difficulty: 'Avançado',
    locale: 'pt-BR',
    // Aventura Amazônica
    primaryImage: { _path: 'https://picsum.photos/seed/amazon/600/400' },    
    description: { html: '<p>Mergulhe na maior floresta tropical do mundo. Guias locais conduzem grupos pequenos por trilhas remotas, com foco em conservação e etnobotânica.</p>' },
    itinerary: { html: '<p><strong>Dias 1–2:</strong> Manaus, briefing e aclimatação.<br/><strong>Dias 3–8:</strong> Trilhas no interior, acampamento ribeirinho.<br/><strong>Dias 9–11:</strong> Encontro das águas e comunidades locais.<br/><strong>Dia 12:</strong> Retorno.</p>' },
  },
  {
    slug: 'ski-touring-mont-blanc',
    title: 'Ski Touring Mont Blanc',
    activity: 'Skiing',
    adventureType: 'Overnight Trip',
    price: 5500,
    tripLength: '7 Days',
    groupSize: 6,
    difficulty: 'Advanced',
    locale: 'en-US',
    // Ski Touring Mont Blanc
    primaryImage: { _path: 'https://picsum.photos/seed/skiing/600/400' },
    description: { html: '<p>Skin up and ski down the high routes of the Mont Blanc massif with IFMGA-certified guides. Hut-to-hut touring at altitude.</p>' },
    itinerary: { html: '<p><strong>Day 1:</strong> Chamonix arrival, gear check.<br/><strong>Days 2–5:</strong> Haute Route stages, refugio overnights.<br/><strong>Day 6:</strong> Summit attempt conditions permitting.<br/><strong>Day 7:</strong> Return to valley.</p>' },
  },
  {
    slug: 'senderismo-patagonia',
    title: 'Senderismo en la Patagonia',
    activity: 'Senderismo',
    adventureType: 'Expedición',
    price: 6100,
    tripLength: '14 Días',
    groupSize: 8,
    difficulty: 'Avanzado',
    locale: 'es-MX',
    // Senderismo Patagonia
    primaryImage: { _path: 'https://picsum.photos/seed/patagonia/600/400' },
    description: { html: '<p>Recorre el circuito W del Torres del Paine con guías expertos. Paisajes únicos en el mundo, fauna silvestre y glaciares milenarios.</p>' },
    itinerary: { html: '<p><strong>Días 1–2:</strong> Puerto Natales, logística.<br/><strong>Días 3–10:</strong> Circuito W completo.<br/><strong>Días 11–13:</strong> Glaciar Grey y miradores.<br/><strong>Día 14:</strong> Regreso.</p>' },
  },
  {
    slug: 'mergulho-fernando-de-noronha',
    title: 'Mergulho em Fernando de Noronha',
    activity: 'Mergulho',
    adventureType: 'Viagem de fim de semana',
    price: 3100,
    tripLength: '5 Dias',
    groupSize: 8,
    difficulty: 'Intermediário',
    locale: 'pt-BR',
    // Mergulho Fernando de Noronha
    primaryImage: { _path: 'https://picsum.photos/seed/diving/600/400' },
    description: { html: '<p>O arquipélago mais biodiverso do Atlântico Sul. Mergulhe com tartarugas, tubarões-limoneiro e cardumes de agulhões em águas cristalinas.</p>' },
    itinerary: { html: '<p><strong>Dia 1:</strong> Chegada em Recife, voo para Noronha.<br/><strong>Dias 2–4:</strong> 2 mergulhos por dia em pontos distintos.<br/><strong>Dia 5:</strong> Snorkel e retorno.</p>' },
  },
  {
    slug: 'yosemite-climbing',
    title: 'Yosemite Rock Climbing',
    activity: 'Rock Climbing',
    adventureType: 'Overnight Trip',
    price: 2200,
    tripLength: '5 Days',
    groupSize: 4,
    difficulty: 'Intermediate',
    locale: 'en-US',
    // Yosemite Climbing
    primaryImage: { _path: 'https://picsum.photos/seed/yosemite/600/400' },
    description: { html: '<p>Learn trad and sport climbing on the granite walls of Yosemite Valley with certified AMGA guides. From beginner crack technique to multi-pitch ascent.</p>' },
    itinerary: { html: '<p><strong>Day 1:</strong> Gear orientation, top-rope warm-up.<br/><strong>Days 2–3:</strong> Crack climbing fundamentals, El Cap base routes.<br/><strong>Day 4:</strong> First multi-pitch ascent.<br/><strong>Day 5:</strong> Independent climb, debrief.</p>' },
  },
];

export function getAdventuresByLocale(locale) {
  return adventures.filter(a => a.locale === locale);
}

export function getAdventureBySlug(slug) {
  return adventures.find(a => a.slug === slug) || null;
}
