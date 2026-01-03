import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { polygon, mainnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'FundTrack',
  projectId: 'YOUR_PROJECT_ID', // Get one at https://cloud.walletconnect.com
  chains: [polygon, mainnet],
  ssr: false,
});
