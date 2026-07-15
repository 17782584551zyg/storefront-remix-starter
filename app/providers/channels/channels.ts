import { sdk } from '~/lib/graphql-client';

export async function getActiveChannel(request?: Request) {
  const { activeChannel } = await sdk.activeChannel();
  return activeChannel;
}
