import React, { useState } from 'react';
import { useWeb3Modal, useWalletInfo, useWeb3ModalAccount } from '@web3modal/ethers/react';

const WalletConnect = () => {
  const { open } = useWeb3Modal();
  const { walletInfo } = useWalletInfo();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const connectWallet = () => {
    open();
  };

  return (
    <button onClick={connectWallet}>
      {isConnected ? (
        <img className='ml-4 box-content h-7 w-7 cursor-pointer rounded-full p-2 transition-colors hover:bg-blue-high/10' src={walletInfo?.icon} alt="Wallet Icon" />
      ) : (
        <div className="p-1 rounded-full bg-blue-500 flex justify-center items-center text-white text-lg font-bold">
          Wallet Connect
        </div>
      )}
    </button>
  );
};

export default WalletConnect;