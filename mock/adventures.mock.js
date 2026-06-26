/**
 * Mock AdventureClient
 *
 * Drop-in replacement for the real AdventureClient in lib/adventures.js.
 * Mirrors the public interface exactly so no page or component code changes.
 *
 * Wraps responses in the same { data: { adventureList: { items } } } envelope
 * that the AEM Headless GraphQL client returns, so callers are unchanged.
 */

import { adventures, getAdventureBySlug } from './adventures.data';

export class AdventureClient {
  static fromEnv() {
    if (!this.__instance) {
      this.__instance = new AdventureClient();
    }
    return this.__instance;
  }

  async getAllAdventures() {
    return {
      data: {
        adventureList: {
          items: adventures,
        },
      },
    };
  }

  async getAdventurePaths() {
    return adventures.map((item) => ({
      params: {
        path: [item.slug],
      },
    }));
  }

  async getAdventuresBySlug(slug) {
    const item = getAdventureBySlug(slug);
    return {
      data: {
        adventureList: {
          items: item ? [item] : [],
        },
      },
    };
  }
}