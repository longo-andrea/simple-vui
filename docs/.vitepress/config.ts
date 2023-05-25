import { title } from 'process'
import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'SimpleVUI',
	description: 'A simple Vue3 UI components library',
	themeConfig: {
		logo: '../assets/logo.png',

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Docs', link: '/docs/get-started' },
			{ text: 'Components', link: '/components/avatar' },
		],

		sidebar: {
			'/docs': [{ text: 'Get Started', link: 'docs/get-started' }],
			'/components': [
				{ text: 'Avatar', link: 'components/avatar' },
				{ text: 'AvatarGroup', link: 'components/avatar-group' },
			],
		},

		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/longo-andrea/simple-vui',
			},
		],
	},
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '../assets/favicon.ico',
				type: 'image/svg+xml',
			},
		],
	],
})
