import { sdk, QueryOptions } from '../../graphqlWrapper';

export async function getActiveChannel(options?: QueryOptions) {
  const { activeChannel } = await sdk.activeChannel({}, options);
  return activeChannel;
}
