/**
 * Mock getPages
 *
 * Drop-in replacement for lib/getPages.js.
 * Returns the same shape ({ href, name }[]) without hitting AEM's
 * Sling JSON Exporter (.model.json endpoint).
 */

async function getPages() {
  return [
    { href: '/adventures', name: 'Adventures' },
  ];
}

export default getPages;