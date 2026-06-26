/**
 * AdventureClient
 *
 * When NEXT_PUBLIC_AEM_MOCK=true (set in .env.development), returns mock data
 * so the app runs without a live AEM instance. The mock client mirrors this
 * interface exactly — no page or component code changes needed.
 */

import AEMHeadless from '@adobe/aem-headless-client-js';

const USE_MOCK = process.env.NEXT_PUBLIC_AEM_MOCK === 'true';

export class AdventureClient {
  static fromEnv(env = process.env) {
    if (USE_MOCK) {
      const { AdventureClient: MockClient } = require('../mock/adventures.mock');
      return MockClient.fromEnv();
    }

    if (!this.__envClient) {
      const { NEXT_PUBLIC_AEM_HOST, NEXT_GRAPHQL_ENDPOINT } = env;
      this.__envClient = new AdventureClient({
        serviceURL: NEXT_PUBLIC_AEM_HOST,
        endpoint: NEXT_GRAPHQL_ENDPOINT,
      });
    }
    return this.__envClient;
  }

  constructor({ serviceURL, endpoint }) {
    this.aemHeadlessClient = new AEMHeadless({
      serviceURL,
      endpoint,
      auth: ['admin', 'admin'],
      fetch,
    });
  }

  async getAllAdventures() {
    const res = await this.aemHeadlessClient.runPersistedQuery('wknd-shared/adventures-all');
    return res;
  }

  async getAdventurePaths() {
    const res = await this.getAllAdventures();
    const adventures = res?.data?.adventureList?.items || [];
    return adventures.map((item) => ({
      params: { path: [item.slug] },
    }));
  }

  async getAdventuresBySlug(slug) {
    const res = await this.aemHeadlessClient.runPersistedQuery(
      'wknd-shared/adventure-by-slug',
      { slug }
    );
    return res;
  }
}