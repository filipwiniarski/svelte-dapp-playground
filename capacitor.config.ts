import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.gnosiswallet.app',
	appName: 'gnosis-wallet',
	webDir: './build',
	server: {
		androidScheme: 'https'
	}
};

export default config;
