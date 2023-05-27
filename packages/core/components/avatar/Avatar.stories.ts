import Avatar from './Avatar.tsx'
import { Meta } from '@storybook/vue3'

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

/**
 * The Avatar component displays an avatar image or a placeholder.
 */
export default {
	title: 'Components/Avatar',
	component: Avatar,
	args: {},
	tags: ['autodocs'],
	argTypes: {
		url: {
			control: 'text',
			description: 'The URL object representing the avatar image URL.',
		},
		placeholder: {
			control: 'text',
			description:
				'The placeholder text to be displayed when the avatar image is not available.',
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
} as Meta<typeof Avatar>
