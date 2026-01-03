export const DONATION_CONTRACT_ADDRESS = '0x530957FB2C16892Fdd34AE62B98cb449A22f345e' as const;

// Basic donation ABI - adjust methods based on your actual contract
export const DONATION_CONTRACT_ABI = [
  {
    name: 'donate',
    type: 'function',
    stateMutability: 'payable',
    inputs: [
      { name: 'projectId', type: 'uint256' }
    ],
    outputs: [],
  },
  {
    name: 'donateToProject',
    type: 'function',
    stateMutability: 'payable',
    inputs: [
      { name: 'projectId', type: 'string' }
    ],
    outputs: [],
  },
] as const;
