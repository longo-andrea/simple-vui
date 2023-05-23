import Avatar from './Avatar.tsx'

const Template = args => ({
	components: { Avatar },
	setup() {
		return { args }
	},
	template: '<Avatar v-bind="args" />',
})

export const Basic = Template.bind({})
Basic.args = { placeholder: 'AL' }

export const WithImage = Template.bind({})
WithImage.args = {
	size: 'big',
	url: new URL(
		'https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D'
	),
}

export default {
	title: 'Components/Avatar',
	component: Avatar,
	args: {},
	argTypes: {
		url: {
			control: 'text',
		},
		placeholder: {
			control: 'text',
		},
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
