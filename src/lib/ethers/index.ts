import { ethers, AbstractProvider, BrowserProvider, JsonRpcSigner } from 'ethers';

export const connectToMetaMask = async () => {
	let signer: JsonRpcSigner;

	let provider: BrowserProvider | AbstractProvider;

	if (!window.ethereum) {
		console.log('MetaMask not installed; using read-only defaults');
		provider = ethers.getDefaultProvider('mainnet');
	} else {
		provider = new BrowserProvider(window.ethereum);

		if (provider instanceof BrowserProvider) {
			signer = await provider.getSigner();

			return {
				signer,
				provider
			};
		}
	}
};
