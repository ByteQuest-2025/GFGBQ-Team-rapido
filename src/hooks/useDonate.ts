import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { parseEther } from 'viem';
import { polygon } from 'wagmi/chains';
import { DONATION_CONTRACT_ADDRESS, DONATION_CONTRACT_ABI } from '@/lib/donationContract';

export function useDonate() {
  const { address } = useAccount();
  
  const { 
    data: hash,
    isPending,
    writeContract,
    error,
    reset
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const donate = (projectId: string, amountInMatic: string) => {
    if (!address) return;
    
    writeContract({
      address: DONATION_CONTRACT_ADDRESS,
      abi: DONATION_CONTRACT_ABI,
      functionName: 'donateToProject',
      args: [projectId],
      value: parseEther(amountInMatic),
      chain: polygon,
      account: address,
    });
  };

  return {
    donate,
    isPending,
    isConfirming,
    isSuccess,
    error,
    hash,
    reset,
  };
}
