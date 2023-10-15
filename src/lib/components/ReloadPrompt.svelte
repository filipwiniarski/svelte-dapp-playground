<script lang="ts">
	import { useRegisterSW } from 'virtual:pwa-register/svelte';

	const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
		onRegistered() {},
		onRegisterError() {}
	});

	function close() {
		offlineReady.set(false);
		needRefresh.set(false);
	}

	$: toast = $offlineReady || $needRefresh;
</script>

{#if toast}
	<div class="fixed right-0 bottom-0 p-4 m-4 z-10 shadow-md bg-white rounded-lg" role="alert">
		<div class="mb-3">
			{#if $offlineReady}
				<span> App ready to work offline </span>
			{:else}
				<span> New content available, click on reload button to update. </span>
			{/if}
		</div>
		{#if $needRefresh}
			<button
				class="rounded-md border border-zinc-300 px-3 py-1"
				on:click={() => updateServiceWorker(true)}
			>
				Reload
			</button>
		{/if}
		<button class="rounded-md border border-zinc-300 px-3 py-1" on:click={close}> Close </button>
	</div>
{/if}
