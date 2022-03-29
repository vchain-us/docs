const { path } = require('@vuepress/utils')

module.exports = {
	name: 'theme-codenotary',
	extends: '@vuepress/theme-default',
	layouts: {
		Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
	},
}
