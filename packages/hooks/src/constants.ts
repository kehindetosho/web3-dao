export const NETWORKS = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  optimism: 10,
  kovan: 42,
  BSC: 56,
  optimismKovan: 69,
  BSCTestnet: 97,
  xdai: 100,
  polygon: 137,
  theta: 361,
  thetaTestnet: 365,
  metisStardust: 588,
  metisAndromeda: 1088,
  moonriver: 1285,
  arbitrumOne: 42161,
  arbitrumRinkeby: 421611,
  mumbai: 80001,
  harmony: 1666600000,
  palm: 11297108109,
  localhost: 1337,
  hardhat: 31337,
  fantom: 250,
  avalanche: 43114,
  songbird: 19,
  moonbaseAlpha: 1287,
};

export const CHAIN_ID_TO_NETWORK = {
  1: 'mainnet',
  3: 'ropsten',
  4: 'rinkeby',
  5: 'goerli',
  10: 'optimism',
  42: 'kovan',
  56: 'BSC',
  69: 'optimismKovan',
  97: 'BSCTestnet',
  100: 'xdai',
  137: 'polygon',
  361: 'theta',
  365: 'thetaTestnet',
  588: 'metisStardust',
  1088: 'metisAndromeda',
  1285: 'moonriver',
  42161: 'arbitrumOne',
  421611: 'arbitrumRinkeby',
  80001: 'mumbai',
  1666600000: 'harmony',
  11297108109: 'palm',
  1337: 'localhost',
  31337: 'hardhat',
  250: 'fantom',
  43114: 'avalanche',
  19: 'songbird',
  1287: 'moonbaseAlpha',
};

// Removed ERC20 and ERC721 abis, can be found in the wagmi library
