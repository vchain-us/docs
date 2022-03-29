const { path } = require('@vuepress/utils')

module.exports = {
	title: 'Codenotary Documentation',
	description: 'Codenotary Documentation',
	dest: './docs',
	theme: path.resolve(__dirname, './theme'),
	themeConfig: {
		logo: 'favicon/icon.svg',
		head: [
			['link', { rel: 'icon', href: '/favicon/favicon.ico', type: 'image/x-icon', sizes: 'any' }],
			['link', { rel: 'icon', href: '/favicon/icon.svg', type: 'image/svg+xml'}],
			['link', { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png' }],
			['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
			['meta', { name: 'theme-color', content: '#244583' }],
		],
		nav: [
			{ text: 'Website', link: 'https://www.codenotary.io' },
			{ text: 'Github', link: 'https://github.com/vchain-us' },
		],
		sidebar: [
			{
				title: 'Get started',
				collapsable: false,
				children: [
					'/guide/quickhelp',
				]
			},
			{
				title: 'Dashboard',
				path: '/dashboard/',
				children: [
					'/dashboard/onboarding',
					'/dashboard/profile',
					'/dashboard/dashboard',
					'/dashboard/assets',
					'/dashboard/organizations',
				]
			},
			{
				title: 'vcn CLI',
				children: [
					'/vcn/user-guide/quick-start',
					'/vcn/user-guide/notarization',
					'/vcn/user-guide/environments',
					'/vcn/user-guide/formatted-output',
					'/vcn/cmd/vcn',
				]
			},
			{
				title: 'Integrations',
				collapsable: false,
				children: [
					'/integrations/vcn-docker',
					'/integrations/kube-notary',
					'/integrations/jsvcn',
					'/integrations/jvcn',
					'/integrations/jvcn-maven-plugin',
					'/integrations/verify-commit-action',
					'/integrations/vcn-jenkins',
					'/integrations/vcn-powershell',
				]
			}
		]
	}
}
