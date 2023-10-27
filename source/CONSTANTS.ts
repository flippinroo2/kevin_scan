export const ID: string = '';

// TODO: Use correct type declaration here instead of any.
export const NETWORKS: any = {
  localhost: {
    name: 'localhost',
    color: '#FF00FF',
    chainId: 31337,
    blockExplorer: '',
    rpcUrl: `http://${window.location.hostname}:8545`,
  },
};

export const NETWORK = (chainId: number): void => {
  for (const network in NETWORKS) {
    if (NETWORKS[network].chainId === chainId) {
      return NETWORKS[network];
    }
  }
};
