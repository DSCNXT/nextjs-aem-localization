/**
 * getPages
 *
 * When NEXT_PUBLIC_AEM_MOCK=true, returns static mock nav without hitting
 * AEM's Sling JSON Exporter (.model.json). Otherwise behaves as before.
 */

const USE_MOCK = process.env.NEXT_PUBLIC_AEM_MOCK === 'true';

async function getPages(rootPath) {
  if (USE_MOCK) {
    const { default: mockGetPages } = require('../mock/getPages.mock');
    return mockGetPages(rootPath);
  }

  const server = process.env.NEXT_PUBLIC_AEM_HOST;
  const getRootPageModel = await (
    await fetch(`${server}${rootPath}.model.json`, {
      headers: {
        Authorization: 'Basic YWRtaW46YWRtaW4=',
      },
    })
  ).json();

  const pages = getRootPageModel[':children'];
  const filteredPages = [];

  for (const page in pages) {
    const match = page.match(/^\/content\/wknd-app\/us\/en\/(\w+)$/i);
    if (match) {
      filteredPages.push({ href: `/${match[1]}`, name: pages[page]['title'] });
    }
  }

  filteredPages.push({ name: 'Adventures', href: '/adventures' });
  return filteredPages;
}

export default getPages;