import AvatarGroup, { AvatarGroupItem } from './AvatarGroup.tsx'
import { Meta } from '@storybook/vue3'

const Template = args => ({
	components: { AvatarGroup },
	setup() {
		return { args }
	},
	template: '<AvatarGroup v-bind={args} />',
})

export const Basic = Template.bind({})
Basic.args = {
	type: 'rounded',
	avatars: [
		{ placeholder: 'AL' },
		{ placeholder: 'GF' },
		{ placeholder: 'RG' },
		{ placeholder: 'TT' },
		{ placeholder: 'AS' },
	] as AvatarGroupItem[],
}

export const WithImage = Template.bind({})
WithImage.args = {
	type: 'rounded',
	size: 'big',
	avatars: [
		{
			placeholder: 'AL',
			url: 'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/165/138/57442880_XS.jpg',
		},
		{
			placeholder: 'GF',
			url: 'https://pngimg.com/uploads/thinking_man/thinking_man_PNG11606.png',
		},
		{ placeholder: 'RG' },
		{ placeholder: 'TT' },
		{ placeholder: 'AS' },
	] as AvatarGroupItem[],
}

/**
 * The AvatarGroup component displays a group of avatar images or placeholders.
 */
export default {
	title: 'Components/AvatarGroup',
	component: AvatarGroup,
	args: {},
	tags: ['autodocs'],
	argTypes: {
		avatars: {
			control: 'object',
			description:
				'An array of objects representing the avatars to be displayed. Each object should have a `url` and `placeholder` property.',
		},
		type: {
			control: 'select',
			options: ['rectangle', 'rounded'],
			description:
				'The type of avatar shape. Possible values: `rounded`, `rectangle`.',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'big'],
			description:
				'The size of the avatar. Possible values: `small`, `medium`, `big`.',
		},
	},
} as Meta<typeof AvatarGroup>
