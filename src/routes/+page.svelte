<script lang="ts">
	import { connectToMetaMask } from '$lib/ethers';
	import { JsonRpcSigner } from 'ethers';

	let provider: JsonRpcSigner | undefined;

	const connect = async () => {
		provider = await connectToMetaMask();
	};
</script>

<div class="grid gap-4">
	<h1 class="font-bold">Gnosis</h1>
	<div>
		<button on:click={connect} class="py-1 px-3 border border-zinc-300 rounded-lg bg-white"
			>Connect Wallet</button
		>
	</div>
	{#if provider}
		<span>Wallet Address: {provider.address}</span>
	{/if}
</div>
