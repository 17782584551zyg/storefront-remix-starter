import { API_URL } from '~/constants';

export class GraphqlClient {
  async request<T = any>(query: string, variables?: Record<string, any>): Promise<T> {
    const response = await fetch('/api/shop-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const result = await response.json();

    if (result.errors) {
      throw new Error(result.errors.map((e: any) => e.message).join('\n'));
    }

    return result.data;
  }
}

export const graphqlClient = new GraphqlClient();

export { API_URL };