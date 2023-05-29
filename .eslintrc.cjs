/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
	root: true,
	extends: [
		'@longo-andrea/eslint-config-typescript',
		'@longo-andrea/eslint-config-vue',
		'@longo-andrea/eslint-config-base',
		'plugin:storybook/recommended',
	],
	rules: {
		'import/named': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'operator-linebreak': 'off',
		'quote-props': 'off',
		quotes: 'off',
	},
}
