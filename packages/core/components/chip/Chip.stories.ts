import Chip from './Chip.tsx'
import { Meta } from '@storybook/vue3'

const Template = args => ({
	components: { Chip },
	setup() {
		return { args }
	},
	template:
		'<Chip v-bind="args"><template v-slot>{{args.default}}</template></Chip>',
})

export const Basic = Template.bind({})
Basic.args = {
	default: 'Hello World!',
}

/**
 * The Chip component displays a simple pill.
 */
export default {
	title: 'Components/Chip',
	component: Chip,
	args: {},
	tags: ['autodocs'],
	argTypes: {
		default: {
			control: 'text',
			defaultValue: 'Hello World!',
			description: "Allows to define chip's content",
		},
		shape: {
			control: 'select',
			description:
				'The shape of the chip, can be `rectangle` or `rounded`',
			options: ['rectangle', 'rounded'],
			defaultValue: 'rounded',
		},
		variant: {
			control: 'select',
			description:
				'The variant of the chips, can be: `default`, `primary`, `success`, `warning`, `error`',
			options: ['default', 'primary', 'success', 'warning', 'error'],
			defaultValue: 'primary',
		},
		size: {
			control: 'select',
			description:
				'The size of the chip, can be: `small`, `medium` or `big`',
			options: ['small', 'medium', 'big'],
			defaultValue: 'small',
		},
		isDisabled: {
			control: 'boolean',
		},
	},
} as Meta<typeof Chip>
