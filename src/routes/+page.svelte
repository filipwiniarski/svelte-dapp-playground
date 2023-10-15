<script lang="ts">
	import { connectToMetaMask } from '$lib/ethers';
	import { formatEther, JsonRpcSigner, type Provider } from 'ethers';

	let provider: Provider | undefined;
	let signer: JsonRpcSigner | undefined;
	let balance: string;

	const connect = async () => {
		const payload = await connectToMetaMask();
		signer = payload?.signer;
		provider = payload?.provider;

		await getBalance();
	};

	const getBalance = async () => {
		if (!provider || !signer) {
			return;
		}
		balance = formatEther(await provider.getBalance(signer.address));
		console.log(balance);
	};
</script>

<div class="grid gap-4">
	<h1 class="font-bold">Gnosis</h1>
	<div>
		<button on:click={connect} class="py-1 px-3 border border-zinc-300 rounded-lg bg-white"
			>Connect Wallet</button
		>
	</div>
	{#if signer}
		<span>Wallet Address: {signer.address}</span>
		<span>Balance: {balance} ETH</span>
	{/if}
</div>
