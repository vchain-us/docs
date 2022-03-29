const { path } = require('@vuepress/utils')

module.exports = {
	title: 'Codenotary Documentation',
	description: 'Codenotary Documentation',
	dest: './docs',
	theme: path.resolve(__dirname, './theme'),
	themeConfig: {
		logo: '/images/icons/favicon.svg',
		head: [['link', { rel: 'manifest', href: '/manifest.json' }]],
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
