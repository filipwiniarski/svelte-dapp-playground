// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import EthereumProvider from '@walletconnect/ethereum-provider';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Window {
		ethereum?: EthereumProvider;
	}
}

export {};
