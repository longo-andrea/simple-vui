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
 * The Chip component displays a simple tag.
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
			description: 'Descrizione',
		},
		shape: {
			control: 'select',
			description: 'Descrizione',
			options: ['rectangle', 'rounded'],
			defaultValue: 'rounded',
		},
		variant: {
			control: 'select',
			description: 'Descrizione',
			options: ['default', 'primary', 'success', 'warning', 'error'],
			defaultValue: 'primary',
		},
		size: {
			control: 'select',
			description: 'Descrizione',
			options: ['small', 'medium', 'big'],
			defaultValue: 'small',
		},
		isDisabled: {
			control: 'boolean',
		},
	},
} as Meta<typeof Chip>
