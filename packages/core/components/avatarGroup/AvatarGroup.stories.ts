import AvatarGroup, { AvatarGroupItem } from './AvatarGroup.tsx'

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

export default {
	title: 'Components/AvatarGroup',
	component: AvatarGroup,
	args: {},
	argTypes: {
		avatars: 'array',
		type: {
			control: 'select',
			options: ['rectangle', 'rounded'],
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'big'],
		},
	},
}
