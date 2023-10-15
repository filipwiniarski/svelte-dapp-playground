import { ethers, AbstractProvider, BrowserProvider, JsonRpcSigner } from 'ethers';

export const connectToMetaMask = async () => {
	let signer: JsonRpcSigner;

	let provider: BrowserProvider | AbstractProvider;

	if (!window.ethereum) {
		console.log('MetaMask not installed; using read-only defaults');
		provider = ethers.getDefaultProvider('mainnet');
	} else {
		// Connect to the MetaMask EIP-1193 object. This is a standard
		// protocol that allows Ethers access to make all read-only
		// requests through MetaMask.
		provider = new BrowserProvider(window.ethereum);

		// It also provides an opportunity to request access to write
		// operations, which will be performed by the private key
		// that MetaMask manages for the user.
		if (provider instanceof BrowserProvider) {
			signer = await provider.getSigner();
			console.log(signer);
			return signer;
		}
	}
};
