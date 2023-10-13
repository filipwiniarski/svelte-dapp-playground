<script>
	import { App, Page, Navbar, Block } from 'konsta/svelte';

	import '../app.postcss';
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';

	$: webManifestHref = pwaInfo ? pwaInfo.webManifest.href : '';

	console.log(pwaInfo);
	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered(r) {
					r &&
						setInterval(() => {
							r.update();
						}, 20000 /* 20s for testing purposes */);
				},
				onRegisterError() {}
			});
		}
	});
</script>

<svelte:head>
	<link rel="manifest" href={webManifestHref} />
</svelte:head>

<App theme="ios">
	<Page>
		<Navbar title="My App" />

		<Block strong>
			<slot />
		</Block>
	</Page>
</App>

{#await import('$lib/components/ReloadPrompt.svelte') then { default: ReloadPrompt }}
	<ReloadPrompt />
{/await}
