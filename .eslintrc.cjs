/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'@longo-andrea/eslint-config-typescript',
		'@longo-andrea/eslint-config-vue',
		'@longo-andrea/eslint-config-base',
	],
	rules: {
		'import/named': 'off',
	},
}
